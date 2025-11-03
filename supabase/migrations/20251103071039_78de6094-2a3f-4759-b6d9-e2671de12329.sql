-- 1. Create app_role enum type
CREATE TYPE public.app_role AS ENUM ('general_manager', 'branch_manager', 'employee');

-- 2. Create user_roles table with strict access control
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Migrate existing roles from profiles to user_roles
INSERT INTO public.user_roles (user_id, role)
SELECT user_id, role::app_role
FROM public.profiles
ON CONFLICT (user_id, role) DO NOTHING;

-- 4. Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 5. Create helper function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(_user_id UUID)
RETURNS app_role
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.user_roles
  WHERE user_id = _user_id
  ORDER BY 
    CASE role
      WHEN 'general_manager' THEN 1
      WHEN 'branch_manager' THEN 2
      WHEN 'employee' THEN 3
    END
  LIMIT 1
$$;

-- 6. Update profiles table RLS policies
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Prevent users from modifying the role field (keep role for backwards compatibility)
CREATE POLICY "Users can update own profile except role"
ON public.profiles FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (
  auth.uid() = user_id AND
  role = (SELECT p.role FROM public.profiles p WHERE p.user_id = auth.uid())
);

-- Restrict profile visibility: users see own profile, managers see their branch
CREATE POLICY "Users view own profile"
ON public.profiles FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Branch managers view branch profiles"
ON public.profiles FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.profiles manager
    WHERE manager.user_id = auth.uid()
    AND public.has_role(manager.user_id, 'branch_manager')
    AND manager.branch_id = profiles.branch_id
  )
);

CREATE POLICY "General managers view all profiles"
ON public.profiles FOR SELECT
USING (public.has_role(auth.uid(), 'general_manager'));

-- 7. Update branches table RLS policies to use has_role
DROP POLICY IF EXISTS "Managers can update branches" ON public.branches;

CREATE POLICY "Managers can update branches"
ON public.branches FOR UPDATE
USING (
  public.has_role(auth.uid(), 'general_manager') OR
  public.has_role(auth.uid(), 'branch_manager')
);

-- 8. Add policies for user_roles table
CREATE POLICY "Users can view own roles"
ON public.user_roles FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "General managers can view all roles"
ON public.user_roles FOR SELECT
USING (public.has_role(auth.uid(), 'general_manager'));

CREATE POLICY "Only general managers can manage roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'general_manager'))
WITH CHECK (public.has_role(auth.uid(), 'general_manager'));

-- 9. Update handle_new_user trigger to also create user_role entry
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_full_name TEXT;
  v_phone TEXT;
  v_branch_id UUID;
BEGIN
  -- Sanitize and validate inputs
  v_full_name := TRIM(COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  IF LENGTH(v_full_name) > 100 THEN
    v_full_name := SUBSTRING(v_full_name, 1, 100);
  END IF;
  
  v_phone := TRIM(NEW.raw_user_meta_data->>'phone');
  v_branch_id := (NEW.raw_user_meta_data->>'branch_id')::UUID;
  
  -- Validate branch exists
  IF v_branch_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM branches WHERE id = v_branch_id) THEN
    v_branch_id := NULL;
  END IF;
  
  -- Insert profile
  INSERT INTO public.profiles (user_id, full_name, role, phone, branch_id)
  VALUES (NEW.id, v_full_name, 'employee', v_phone, v_branch_id);
  
  -- Insert default employee role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'employee'::app_role)
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    RAISE WARNING 'Profile/role creation failed: %', SQLERRM;
    RETURN NEW;
END;
$$;