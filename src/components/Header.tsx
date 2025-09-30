import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Bell,
  MessageSquare,
  Calendar,
  ChevronDown,
  Globe,
  User,
  LogOut
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { t } = useLanguage();
  const { signOut, profile } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "تم تسجيل الخروج",
        description: "تم تسجيل الخروج بنجاح",
      });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="flex items-center justify-between h-16 px-6 mr-72">
        
        {/* Search Bar */}
        <div className="flex-1 max-w-lg ml-6">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="البحث في النظام..."
              className="pr-10 pl-4 h-10 bg-background/50 border-border/50 focus:border-primary transition-smooth"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          {/* Quick Stats */}
          <div className="hidden lg:flex items-center gap-4 ml-6">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">{t('totalInventory')}</p>
              <p className="text-sm font-semibold text-primary">2,847</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">{t('activeEmployees')}</p>
              <p className="text-sm font-semibold text-secondary">156</p>
            </div>
          </div>

          {/* Language & Theme Toggle */}
          <LanguageToggle />
          <ThemeToggle />

          {/* Calendar */}
          <Button variant="ghost" size="sm" className="h-9 w-9">
            <Calendar className="h-4 w-4" />
          </Button>

          {/* Messages */}
          <Button variant="ghost" size="sm" className="h-9 w-9 relative">
            <MessageSquare className="h-4 w-4" />
            <Badge variant="destructive" className="absolute -top-1 -left-1 h-5 w-5 p-0 text-xs">
              2
            </Badge>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="h-9 w-9 relative">
            <Bell className="h-4 w-4" />
            <Badge variant="destructive" className="absolute -top-1 -left-1 h-5 w-5 p-0 text-xs">
              5
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 px-3 ml-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback className="text-xs">
                      {profile?.full_name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-3 w-3" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border shadow-lg" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {profile?.full_name || 'المستخدم'}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {profile?.role === 'general_manager' ? 'مدير عام' : 
                     profile?.role === 'branch_manager' ? 'مدير فرع' : 'موظف'}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>الملف الشخصي</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>{t('logout')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;