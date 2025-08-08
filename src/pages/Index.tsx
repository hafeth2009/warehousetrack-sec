import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashboardStats from "@/components/DashboardStats";
import RecentActivity from "@/components/RecentActivity";
import QuickActions from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="mr-72">
        <Header />
        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <div className="gradient-hero rounded-xl p-8 text-white shadow-large">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold mb-2">
                مرحباً بك في نظام إدارة المستودعات
              </h1>
              <p className="text-lg opacity-90 mb-4">
                الشركة السعودية للكهرباء - مقاولي العقد الموحد
              </p>
              <div className="flex gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-sm opacity-80">اليوم</p>
                  <p className="text-lg font-bold">الأحد، 8 أغسطس 2025</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-sm opacity-80">الوردية</p>
                  <p className="text-lg font-bold">الصباحية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Stats */}
          <DashboardStats />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Recent Activity - Takes 2 columns */}
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>

            {/* Quick Actions - Takes 1 column */}
            <div>
              <QuickActions />
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gradient-card rounded-lg p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-3 text-primary">معلومات المشروع</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">المشروع:</span>
                  <span className="font-semibold">مقاولي العقد الموحد</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">المنطقة:</span>
                  <span className="font-semibold">المنطقة الوسطى</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">حالة النظام:</span>
                  <span className="font-semibold text-secondary">نشط</span>
                </div>
              </div>
            </div>

            <div className="gradient-card rounded-lg p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-3 text-primary">إحصائيات سريعة</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">العمليات اليوم:</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الطلبات المعلقة:</span>
                  <span className="font-semibold text-warning">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">معدل الإنجاز:</span>
                  <span className="font-semibold text-secondary">94.2%</span>
                </div>
              </div>
            </div>

            <div className="gradient-card rounded-lg p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-3 text-primary">الدعم الفني</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الهاتف:</span>
                  <span className="font-semibold" dir="ltr">920-001-100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">البريد:</span>
                  <span className="font-semibold" dir="ltr">support@se.com.sa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ساعات العمل:</span>
                  <span className="font-semibold">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;