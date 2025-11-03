import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package, PackagePlus, Search, TrendingUp, TrendingDown, AlertTriangle, Archive } from "lucide-react";

const Warehouse = () => {
  const { t } = useLanguage();
  
  const items = [
    { id: 1, name: "كابل 35mm", code: "CAB-035", category: "كوابل", quantity: 2500, unit: "متر", minStock: 1000, status: "كافي", lastUpdate: "2025-11-02" },
    { id: 2, name: "محول 100KVA", code: "TRF-100", category: "محولات", quantity: 8, unit: "قطعة", minStock: 5, status: "كافي", lastUpdate: "2025-11-01" },
    { id: 3, name: "عداد كهرباء رقمي", code: "MTR-DIG", category: "عدادات", quantity: 45, unit: "قطعة", minStock: 50, status: "منخفض", lastUpdate: "2025-11-02" },
    { id: 4, name: "قاطع 63A", code: "BRK-063", category: "قواطع", quantity: 120, unit: "قطعة", minStock: 80, status: "كافي", lastUpdate: "2025-10-30" },
    { id: 5, name: "لوحة توزيع رئيسية", code: "PNL-MDB", category: "لوحات", quantity: 12, unit: "قطعة", minStock: 10, status: "كافي", lastUpdate: "2025-11-01" },
  ];

  const stats = [
    { label: "إجمالي الأصناف", value: "1,247", icon: Package, color: "text-primary", trend: "+12%" },
    { label: "حركة اليوم", value: "89", icon: TrendingUp, color: "text-secondary", trend: "+8%" },
    { label: "أصناف منخفضة", value: "23", icon: AlertTriangle, color: "text-warning", trend: "-5%" },
    { label: "قيمة المخزون", value: "2.4M", icon: Archive, color: "text-primary", trend: "+15%" },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="mr-72">
        <Header />
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{t('warehouse')}</h1>
              <p className="text-muted-foreground mt-1">إدارة المستودعات والمواد والأصناف</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <TrendingDown className="w-4 h-4" />
                سحب صنف
              </Button>
              <Button className="gap-2 shadow-primary">
                <PackagePlus className="w-4 h-4" />
                إضافة صنف
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="gradient-card shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {stat.trend}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Items Table */}
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl">{t('items')}</CardTitle>
                  <CardDescription>قائمة الأصناف المتوفرة في المستودع</CardDescription>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="بحث عن صنف..." className="pr-10 w-64" />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">الصنف</TableHead>
                    <TableHead className="text-right">الكود</TableHead>
                    <TableHead className="text-right">الفئة</TableHead>
                    <TableHead className="text-right">الكمية</TableHead>
                    <TableHead className="text-right">الوحدة</TableHead>
                    <TableHead className="text-right">الحد الأدنى</TableHead>
                    <TableHead className="text-right">الحالة</TableHead>
                    <TableHead className="text-right">آخر تحديث</TableHead>
                    <TableHead className="text-right">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item) => (
                    <TableRow key={item.id} className="hover:bg-accent/50">
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell><code className="text-xs bg-muted px-2 py-1 rounded">{item.code}</code></TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="font-semibold">{item.quantity.toLocaleString()}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell className="text-muted-foreground">{item.minStock.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={item.status === "كافي" ? "default" : "destructive"}>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">{item.lastUpdate}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">عرض</Button>
                          <Button variant="outline" size="sm">سحب</Button>
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

export default Warehouse;