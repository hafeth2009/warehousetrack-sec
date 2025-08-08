import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Users,
  Truck,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3
} from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "إجمالي المخزون",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Package,
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      title: "الموظفين النشطين",
      value: "156",
      change: "+3.2%",
      changeType: "positive" as const,
      icon: Users,
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    },
    {
      title: "المعدات المتاحة",
      value: "89",
      change: "-2.1%",
      changeType: "negative" as const,
      icon: Truck,
      color: "text-warning",
      bgColor: "bg-warning-light"
    },
    {
      title: "العمليات اليومية",
      value: "234",
      change: "+8.7%",
      changeType: "positive" as const,
      icon: BarChart3,
      color: "text-primary",
      bgColor: "bg-primary-light"
    }
  ];

  const alerts = [
    {
      title: "نفاد مخزون",
      count: 12,
      icon: AlertTriangle,
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      title: "صيانة دورية",
      count: 5,
      icon: Clock,
      color: "text-warning",
      bgColor: "bg-warning-light"
    },
    {
      title: "مهام مكتملة",
      count: 28,
      icon: CheckCircle,
      color: "text-secondary",
      bgColor: "bg-secondary-light"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-soft transition-smooth hover:shadow-medium">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`h-10 w-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <Badge 
                variant={stat.changeType === "positive" ? "secondary" : "destructive"}
                className="text-xs"
              >
                <TrendingUp className="h-3 w-3 ml-1" />
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {alerts.map((alert, index) => (
          <Card key={index} className="shadow-soft transition-smooth hover:shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-lg ${alert.bgColor} flex items-center justify-center`}>
                  <alert.icon className={`h-6 w-6 ${alert.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{alert.title}</p>
                  <p className="text-2xl font-bold">{alert.count}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;