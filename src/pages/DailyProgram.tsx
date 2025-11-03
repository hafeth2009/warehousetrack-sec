import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, MapPin, CheckCircle2, Plus } from "lucide-react";

const DailyProgram = () => {
  const { t } = useLanguage();
  
  const tasks = [
    { id: 1, title: "صيانة محول T-125", location: "شقراء - حي النخيل", team: "فريق الصيانة أ", time: "08:00 - 12:00", status: "مكتمل", priority: "عالية" },
    { id: 2, title: "فحص دوري للشبكة", location: "ثادق - المنطقة الصناعية", team: "فريق الفحص ب", time: "09:00 - 15:00", status: "جاري", priority: "متوسطة" },
    { id: 3, title: "تركيب عداد جديد", location: "المزاحمية - حي السلام", team: "فريق التركيب أ", time: "10:00 - 12:00", status: "قادم", priority: "منخفضة" },
    { id: 4, title: "إصلاح عطل طارئ", location: "شقراء - حي الروضة", team: "فريق الطوارئ", time: "13:00 - 17:00", status: "جاري", priority: "عاجلة" },
    { id: 5, title: "صيانة لوحة توزيع", location: "ثادق - حي المطار", team: "فريق الصيانة ب", time: "14:00 - 16:00", status: "قادم", priority: "متوسطة" },
  ];

  const stats = [
    { label: "مهام اليوم", value: "18", icon: Calendar, color: "text-primary" },
    { label: "مكتملة", value: "7", icon: CheckCircle2, color: "text-secondary" },
    { label: "قيد التنفيذ", value: "6", icon: Clock, color: "text-warning" },
    { label: "فرق العمل", value: "12", icon: Users, color: "text-primary" },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "مكتمل": return <Badge className="bg-secondary">{status}</Badge>;
      case "جاري": return <Badge className="bg-warning">{status}</Badge>;
      case "قادم": return <Badge variant="outline">{status}</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case "عاجلة": return <Badge variant="destructive">{priority}</Badge>;
      case "عالية": return <Badge className="bg-warning">{priority}</Badge>;
      case "متوسطة": return <Badge variant="secondary">{priority}</Badge>;
      case "منخفضة": return <Badge variant="outline">{priority}</Badge>;
      default: return <Badge>{priority}</Badge>;
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="mr-72">
        <Header />
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('dailyProgram')}</h1>
              <p className="text-muted-foreground mt-1">برنامج العمل اليومي وتوزيع المهام</p>
            </div>
            <Button className="gap-2 shadow-primary">
              <Plus className="w-4 h-4" />
              إضافة مهمة
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="gradient-card shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tasks Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {tasks.map((task) => (
              <Card key={task.id} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg mb-2">{task.title}</CardTitle>
                      <div className="flex gap-2 flex-wrap">
                        {getStatusBadge(task.status)}
                        {getPriorityBadge(task.priority)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{task.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{task.team}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{task.time}</span>
                  </div>
                  <div className="flex gap-2 pt-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      عرض التفاصيل
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      تعديل
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Timeline Section */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-xl">الجدول الزمني اليومي</CardTitle>
              <CardDescription>توزيع المهام على مدار اليوم</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["08:00", "10:00", "12:00", "14:00", "16:00"].map((time, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-smooth">
                    <div className="flex items-center justify-center w-20 h-20 rounded-lg bg-primary/10">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg mb-1">{time}</div>
                      <div className="text-sm text-muted-foreground">
                        {index + 1} مهمة مجدولة في هذا الوقت
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">عرض</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default DailyProgram;