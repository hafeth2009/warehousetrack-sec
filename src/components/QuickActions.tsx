import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plus,
  FileText,
  Download,
  Upload,
  Settings,
  BarChart3,
  Users,
  Package
} from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      title: "إضافة موظف جديد",
      description: "تسجيل موظف جديد في النظام",
      icon: Plus,
      variant: "default" as const,
      color: "gradient-primary"
    },
    {
      title: "استلام شحنة",
      description: "تسجيل وصول مواد جديدة",
      icon: Package,
      variant: "secondary" as const,
      color: "gradient-secondary"
    },
    {
      title: "تقرير المخزون",
      description: "إنشاء تقرير مفصل للمخزون",
      icon: FileText,
      variant: "outline" as const,
      color: ""
    },
    {
      title: "تصدير البيانات",
      description: "تصدير قاعدة البيانات",
      icon: Download,
      variant: "outline" as const,
      color: ""
    },
    {
      title: "استيراد البيانات",
      description: "استيراد بيانات من ملف Excel",
      icon: Upload,
      variant: "outline" as const,
      color: ""
    },
    {
      title: "الإحصائيات",
      description: "عرض التقارير التحليلية",
      icon: BarChart3,
      variant: "outline" as const,
      color: ""
    }
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">الإجراءات السريعة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className={`h-20 p-4 flex-col gap-2 ${action.color} transition-smooth hover:shadow-medium`}
            >
              <action.icon className="h-6 w-6" />
              <div className="text-center">
                <p className="font-semibold text-sm">{action.title}</p>
                <p className="text-xs opacity-80">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;