import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, UserPlus, Search, Calendar, Building2, Briefcase } from "lucide-react";

const Employees = () => {
  const { t } = useLanguage();
  
  const employees = [
    { id: 1, name: "أحمد محمد السعيد", position: "مهندس", department: "الصيانة", status: "حاضر", phone: "0501234567", branch: "شقراء" },
    { id: 2, name: "خالد عبدالله النصار", position: "فني كهرباء", department: "الطوارئ", status: "حاضر", phone: "0507654321", branch: "ثادق" },
    { id: 3, name: "محمد علي الدوسري", position: "مشرف", department: "المستودع", status: "حاضر", phone: "0509876543", branch: "شقراء" },
    { id: 4, name: "سعد فهد العتيبي", position: "فني", department: "الصيانة", status: "إجازة", phone: "0503456789", branch: "المزاحمية" },
    { id: 5, name: "عبدالرحمن صالح المطيري", position: "كهربائي", department: "التركيبات", status: "حاضر", phone: "0508765432", branch: "شقراء" },
  ];

  const stats = [
    { label: "إجمالي الموظفين", value: "156", icon: Users, color: "text-primary" },
    { label: "الحضور اليوم", value: "142", icon: Calendar, color: "text-secondary" },
    { label: "الأقسام", value: "8", icon: Building2, color: "text-warning" },
    { label: "الوظائف", value: "24", icon: Briefcase, color: "text-primary" },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="mr-72">
        <Header />
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('employees')}</h1>
              <p className="text-muted-foreground mt-1">إدارة شؤون الموظفين والحضور والغياب</p>
            </div>
            <Button className="gap-2 shadow-primary">
              <UserPlus className="w-4 h-4" />
              إضافة موظف
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

          {/* Employee Table */}
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl">{t('employeeList')}</CardTitle>
                  <CardDescription>قائمة الموظفين النشطين في النظام</CardDescription>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="بحث..." className="pr-10 w-64" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الاسم</TableHead>
                    <TableHead className="text-right">الوظيفة</TableHead>
                    <TableHead className="text-right">القسم</TableHead>
                    <TableHead className="text-right">الفرع</TableHead>
                    <TableHead className="text-right">الهاتف</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id} className="hover:bg-accent/50">
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.branch}</TableCell>
                      <TableCell dir="ltr" className="text-right">{employee.phone}</TableCell>
                      <TableCell>
                        <Badge variant={employee.status === "حاضر" ? "default" : "secondary"}>
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">عرض</Button>
                          <Button variant="outline" size="sm">تعديل</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Employees;