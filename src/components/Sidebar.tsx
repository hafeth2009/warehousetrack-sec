import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Home,
  Package,
  Users,
  FileText,
  Calendar,
  LogOut,
  ChevronDown,
  ChevronLeft,
  ClipboardList,
  UserCheck,
  Building2,
  UsersRound,
  Briefcase,
  LayoutGrid,
  FileCheck,
  AlertTriangle,
  Zap,
  ArrowRightLeft,
  ArrowUpFromLine,
  ArrowDownToLine,
  RotateCcw,
  Truck,
  Trash2,
  FileQuestion,
  Database,
  ClipboardCheck,
  Boxes,
  CalendarClock,
  Settings
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "@/assets/company-logo.png";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  className?: string;
}

interface MenuItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  labelKey: string;
  path?: string;
  subItems?: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    labelKey: string;
    path: string;
  }[];
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [openMenus, setOpenMenus] = useState<string[]>(['employees', 'contracts', 'warehouse', 'daily-program']);

  const menuItems: MenuItem[] = [
    { icon: Home, label: "الرئيسية", labelKey: "dashboard", path: "/" },
    { 
      icon: Users, 
      label: "شؤون الموظفين", 
      labelKey: "employees",
      subItems: [
        { icon: ClipboardList, label: "الموظفين", labelKey: "employeeList", path: "/employees" },
        { icon: UserCheck, label: "الحضور والغياب", labelKey: "attendance", path: "/employees/attendance" },
        { icon: Building2, label: "أقسام الشركة", labelKey: "departments", path: "/employees/departments" },
        { icon: UsersRound, label: "الفرق", labelKey: "teams", path: "/employees/teams" },
        { icon: Briefcase, label: "المسميات الوظيفية", labelKey: "jobTitles", path: "/employees/job-titles" },
      ]
    },
    { 
      icon: FileText, 
      label: "المقايسات والعقود", 
      labelKey: "contracts",
      subItems: [
        { icon: LayoutGrid, label: "مخطط توزيع المواد", labelKey: "materialDistribution", path: "/contracts/material-distribution" },
        { icon: FileCheck, label: "العقد الموحد", labelKey: "unifiedContract", path: "/contracts/unified" },
        { icon: AlertTriangle, label: "أعمال الطوارئ", labelKey: "emergencyWork", path: "/contracts/emergency" },
        { icon: Zap, label: "برامج أعطال الطوارئ", labelKey: "emergencyPrograms", path: "/contracts/emergency-programs" },
      ]
    },
    { 
      icon: Package, 
      label: "المستودع", 
      labelKey: "warehouse",
      subItems: [
        { icon: ArrowRightLeft, label: "حركة الأصناف", labelKey: "itemMovement", path: "/warehouse/movement" },
        { icon: ArrowUpFromLine, label: "إخراج صنف", labelKey: "itemWithdrawal", path: "/warehouse/withdrawal" },
        { icon: ArrowDownToLine, label: "إعادة للمستودع", labelKey: "returnToWarehouse", path: "/warehouse/return" },
        { icon: RotateCcw, label: "إرجاعات الشركة", labelKey: "companyReturns", path: "/warehouse/company-returns" },
        { icon: Truck, label: "مناقلة المواد", labelKey: "materialTransfer", path: "/warehouse/transfer" },
        { icon: Trash2, label: "سكراب", labelKey: "scrap", path: "/warehouse/scrap" },
        { icon: FileQuestion, label: "مقايسات لم تستلم", labelKey: "unreceivedMeasurements", path: "/warehouse/unreceived" },
        { icon: Database, label: "رصيد المستودع", labelKey: "warehouseBalance", path: "/warehouse/balance" },
        { icon: ClipboardCheck, label: "الجرد", labelKey: "inventory", path: "/warehouse/inventory" },
        { icon: Boxes, label: "الأصناف", labelKey: "items", path: "/warehouse/items" },
      ]
    },
    { 
      icon: Calendar, 
      label: "البرنامج اليومي", 
      labelKey: "dailyProgram",
      subItems: [
        { icon: CalendarClock, label: "برنامج العمل", labelKey: "workProgram", path: "/daily-program/work" },
        { icon: Settings, label: "إعداد البرنامج اليومي", labelKey: "dailyProgramSetup", path: "/daily-program/setup" },
      ]
    },
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

  const toggleMenu = (labelKey: string) => {
    setOpenMenus(prev => 
      prev.includes(labelKey) 
        ? prev.filter(key => key !== labelKey)
        : [...prev, labelKey]
    );
  };

  const isMenuActive = (item: MenuItem) => {
    if (item.path) return location.pathname === item.path;
    if (item.subItems) {
      return item.subItems.some(sub => location.pathname === sub.path || location.pathname.startsWith(sub.path + '/'));
    }
    return false;
  };

  return (
    <div className={cn(
      "fixed right-0 top-0 z-40 h-screen w-72 bg-card border-l border-border shadow-large",
      "gradient-card transition-smooth flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="p-6 border-b border-border shrink-0">
        <div className="flex items-center gap-3">
          <img src={companyLogo} alt="شعار الشركة" className="h-12 w-12" />
          <div>
            <h2 className="text-lg font-bold text-primary">الشركة السعودية للكهرباء</h2>
            <p className="text-sm text-muted-foreground">نظام إدارة المستودعات</p>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 border-b border-border shrink-0">
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
      <ScrollArea className="flex-1 p-4">
        <nav className="space-y-1">
          {menuItems.map((item, index) => {
            const isActive = isMenuActive(item);
            const isOpen = openMenus.includes(item.labelKey);
            
            if (item.subItems) {
              return (
                <Collapsible key={index} open={isOpen} onOpenChange={() => toggleMenu(item.labelKey)}>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-between h-11 px-4 text-right hover:bg-accent/50",
                        isActive && "bg-accent text-accent-foreground"
                      )}
                    >
                      <div className="flex items-center">
                        <item.icon className="ml-3 h-5 w-5" />
                        <span className="flex-1 text-sm">{t(item.labelKey)}</span>
                      </div>
                      {isOpen ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
                      ) : (
                        <ChevronLeft className="h-4 w-4 text-muted-foreground transition-transform" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-1 pt-1">
                    {item.subItems.map((subItem, subIndex) => {
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <Button
                          key={subIndex}
                          variant={isSubActive ? "default" : "ghost"}
                          className={cn(
                            "w-full justify-start h-10 pr-12 pl-4 text-right text-sm",
                            isSubActive && "gradient-primary shadow-primary"
                          )}
                          asChild
                        >
                          <Link to={subItem.path}>
                            <subItem.icon className="ml-3 h-4 w-4" />
                            <span className="flex-1">{t(subItem.labelKey)}</span>
                          </Link>
                        </Button>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              );
            }

            return (
              <Button
                key={index}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start h-11 px-4 text-right",
                  isActive && "gradient-primary shadow-primary"
                )}
                asChild
              >
                <Link to={item.path!}>
                  <item.icon className="ml-3 h-5 w-5" />
                  <span className="flex-1 text-sm">{t(item.labelKey)}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border shrink-0">
        <Button 
          variant="outline" 
          className="w-full justify-start h-11 px-4 text-right"
          onClick={handleLogout}
        >
          <LogOut className="ml-3 h-5 w-5" />
          <span>{t('logout')}</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
