import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Package,
  Users,
  Truck,
  MoreHorizontal,
  ExternalLink
} from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "inventory",
      title: "استلام شحنة مواد كهربائية",
      description: "تم استلام 150 قطعة من المحولات الكهربائية",
      time: "منذ 15 دقيقة",
      user: "أحمد محمد",
      status: "completed",
      icon: Package
    },
    {
      id: 2,
      type: "employee",
      title: "تسجيل موظف جديد",
      description: "انضمام مهندس كهرباء جديد للفريق",
      time: "منذ ساعة",
      user: "سارة أحمد",
      status: "pending",
      icon: Users
    },
    {
      id: 3,
      type: "equipment",
      title: "صيانة معدات الرفع",
      description: "تم الانتهاء من صيانة رافعة شوكية رقم 42",
      time: "منذ ساعتين",
      user: "خالد علي",
      status: "completed",
      icon: Truck
    },
    {
      id: 4,
      type: "inventory",
      title: "تحديث مستويات المخزون",
      description: "تحديث كميات الكابلات الكهربائية في المستودع الرئيسي",
      time: "منذ 3 ساعات",
      user: "فاطمة محمد",
      status: "completed",
      icon: Package
    },
    {
      id: 5,
      type: "equipment",
      title: "طلب صيانة عاجلة",
      description: "تقرير عطل في المولد الاحتياطي رقم 7",
      time: "منذ 4 ساعات",
      user: "محمد سالم",
      status: "urgent",
      icon: Truck
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "secondary";
      case "pending":
        return "default";
      case "urgent":
        return "destructive";
      default:
        return "default";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "مكتمل";
      case "pending":
        return "قيد المعالجة";
      case "urgent":
        return "عاجل";
      default:
        return "جديد";
    }
  };

  return (
    <Card className="shadow-soft">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">النشاطات الأخيرة</CardTitle>
        <Button variant="ghost" size="sm">
          <ExternalLink className="h-4 w-4 ml-2" />
          عرض الكل
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-accent/30 transition-smooth hover:bg-accent/50"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
              <activity.icon className="h-5 w-5 text-primary" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-semibold truncate">{activity.title}</h4>
                <Badge variant={getStatusColor(activity.status)} className="text-xs">
                  {getStatusText(activity.status)}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">
                {activity.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{activity.user}</span>
                <span>{activity.time}</span>
              </div>
            </div>
            
            <Button variant="ghost" size="sm" className="flex-shrink-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;