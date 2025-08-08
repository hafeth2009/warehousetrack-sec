import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Package,
  Users,
  Settings,
  BarChart3,
  Truck,
  ClipboardList,
  Shield,
  Bell,
  LogOut
} from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "الرئيسية", active: true },
    { icon: Package, label: "إدارة المستودعات", badge: "24" },
    { icon: Users, label: "إدارة الموظفين" },
    { icon: Truck, label: "إدارة المعدات" },
    { icon: ClipboardList, label: "التقارير" },
    { icon: BarChart3, label: "الإحصائيات" },
    { icon: Shield, label: "الأمان والصلاحيات" },
    { icon: Bell, label: "الإشعارات", badge: "3" },
    { icon: Settings, label: "الإعدادات" },
  ];

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
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "w-full justify-start h-12 px-4 text-right",
              item.active && "gradient-primary shadow-primary"
            )}
          >
            <item.icon className="ml-3 h-5 w-5" />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="bg-warning text-warning-foreground text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </Button>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 right-4">
        <Button variant="outline" className="w-full justify-start h-12 px-4 text-right">
          <LogOut className="ml-3 h-5 w-5" />
          <span>تسجيل الخروج</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;