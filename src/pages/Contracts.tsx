import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, FilePlus, Search, CheckCircle2, Clock, DollarSign } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Contracts = () => {
  const { t } = useLanguage();
  
  const contracts = [
    { id: 1, number: "C-2025-001", name: "صيانة شبكة شقراء الرئيسية", client: "الشركة السعودية للكهرباء", value: "850,000", progress: 75, status: "جاري التنفيذ", startDate: "2025-01-15", endDate: "2025-06-30" },
    { id: 2, number: "C-2025-002", name: "تركيب محولات ثادق", client: "الشركة السعودية للكهرباء", value: "420,000", progress: 90, status: "جاري التنفيذ", startDate: "2025-02-01", endDate: "2025-04-30" },
    { id: 3, number: "C-2025-003", name: "أعمال طوارئ المزاحمية", client: "الشركة السعودية للكهرباء", value: "125,000", progress: 100, status: "مكتمل", startDate: "2025-03-10", endDate: "2025-03-25" },
    { id: 4, number: "C-2025-004", name: "توسعة شبكة التوزيع", client: "الشركة السعودية للكهرباء", value: "1,200,000", progress: 45, status: "جاري التنفيذ", startDate: "2025-02-20", endDate: "2025-08-30" },
    { id: 5, number: "C-2025-005", name: "صيانة دورية للمحطات", client: "الشركة السعودية للكهرباء", value: "320,000", progress: 30, status: "جاري التنفيذ", startDate: "2025-03-01", endDate: "2025-05-31" },
  ];

  const stats = [
    { label: "إجمالي العقود", value: "42", icon: FileText, color: "text-primary" },
    { label: "قيمة العقود", value: "12.4M", icon: DollarSign, color: "text-secondary" },
    { label: "قيد التنفيذ", value: "28", icon: Clock, color: "text-warning" },
    { label: "مكتملة", value: "14", icon: CheckCircle2, color: "text-secondary" },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="mr-72">
        <Header />
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('contracts')}</h1>
              <p className="text-muted-foreground mt-1">إدارة المقايسات والعقود والمشاريع</p>
            </div>
            <Button className="gap-2 shadow-primary">
              <FilePlus className="w-4 h-4" />
              عقد جديد
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

          {/* Contracts Table */}
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl">{t('unifiedContract')}</CardTitle>
                  <CardDescription>قائمة العقود والمشاريع النشطة</CardDescription>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="بحث عن عقد..." className="pr-10 w-64" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">رقم العقد</TableHead>
                    <TableHead className="text-right">اسم المشروع</TableHead>
                    <TableHead className="text-right">القيمة (ريال)</TableHead>
                    <TableHead className="text-right">نسبة الإنجاز</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">تاريخ البداية</TableHead>
                    <TableHead className="text-right">تاريخ الانتهاء</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contracts.map((contract) => (
                    <TableRow key={contract.id} className="hover:bg-accent/50">
                      <TableCell>
                        <code className="text-xs bg-muted px-2 py-1 rounded font-semibold">
                          {contract.number}
                        </code>
                      </TableCell>
                      <TableCell className="font-medium max-w-xs">{contract.name}</TableCell>
                      <TableCell className="font-semibold" dir="ltr">{contract.value}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={contract.progress} className="w-20 h-2" />
                          <span className="text-sm font-medium">{contract.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={contract.status === "مكتمل" ? "default" : "secondary"}>
                          {contract.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{contract.startDate}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{contract.endDate}</TableCell>
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

export default Contracts;