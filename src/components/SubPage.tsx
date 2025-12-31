import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, LucideIcon } from "lucide-react";

interface SubPageProps {
  title: string;
  description: string;
  icon: LucideIcon;
  addButtonLabel?: string;
  children?: React.ReactNode;
}

const SubPage = ({ title, description, icon: Icon, addButtonLabel, children }: SubPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="mr-72">
        <Header />
        <main className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                <p className="text-muted-foreground mt-1">{description}</p>
              </div>
            </div>
            {addButtonLabel && (
              <Button className="gap-2 shadow-primary">
                <Plus className="w-4 h-4" />
                {addButtonLabel}
              </Button>
            )}
          </div>

          {children || (
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription>لا توجد بيانات حالياً</CardDescription>
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
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="p-4 rounded-full bg-accent/50 mb-4">
                    <Icon className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">هذه الصفحة قيد التطوير</h3>
                  <p className="text-muted-foreground max-w-md">
                    سيتم إضافة المحتوى والبيانات قريباً. يرجى المتابعة.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default SubPage;
