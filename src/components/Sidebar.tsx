import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Package,
  Users,
  FileText,
  Calendar,
  LogOut
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "@/assets/company-logo.png";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: "الرئيسية", path: "/" },
    { icon: Users, label: "إدارة الموظفين", path: "/employees" },
    { icon: FileText, label: "العقود والمقايسات", path: "/contracts" },
    { icon: Package, label: "المستودعات", path: "/warehouse" },
    { icon: Calendar, label: "البرنامج اليومي", path: "/daily-program" },
  ];

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("تم تسجيل الخروج بنجاح");
      navigate("/auth");
    } catch (error) {
      toast.error("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  return (
    <div className={cn(
      "fixed right-0 top-0 z-40 h-screen w-72 bg-card border-l border-border shadow-large",
      "gradient-card transition-smooth",
      className
    )}>
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <img src={companyLogo} alt="شعار الشركة" className="h-12 w-12" />
          <div>
            <h2 className="text-lg font-bold text-primary">الشركة السعودية للكهرباء</h2>
            <p className="text-sm text-muted-foreground">نظام إدارة المستودعات</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-semibold">أ.م</span>
          </div>
          <div>
            <p className="font-semibold text-sm">أحمد محمد</p>
            <p className="text-xs text-muted-foreground">مدير المستودعات</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={index}
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start h-12 px-4 text-right",
                isActive && "gradient-primary shadow-primary"
              )}
              asChild
            >
              <Link to={item.path}>
                <item.icon className="ml-3 h-5 w-5" />
                <span className="flex-1">{item.label}</span>
              </Link>
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button 
          variant="outline" 
          className="w-full justify-start h-12 px-4 text-right"
          onClick={handleLogout}
        >
          <LogOut className="ml-3 h-5 w-5" />
          <span>تسجيل الخروج</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;