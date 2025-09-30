import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Clock, Building, UsersIcon, Briefcase } from 'lucide-react';

const Employees = () => {
  const { t } = useLanguage();

  const employeeMenuItems = [
    { title: t('employeeList'), icon: Users, description: 'إدارة قائمة الموظفين', href: '/employees/list' },
    { title: t('attendance'), icon: Clock, description: 'نظام الحضور والغياب', href: '/employees/attendance' },
    { title: t('departments'), icon: Building, description: 'أقسام الشركة', href: '/employees/departments' },
    { title: t('teams'), icon: UsersIcon, description: 'إدارة الفرق', href: '/employees/teams' },
    { title: t('jobTitles'), icon: Briefcase, description: 'المسميات الوظيفية', href: '/employees/job-titles' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('employees')}</h1>
        <p className="text-muted-foreground">إدارة شؤون الموظفين والموارد البشرية</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {employeeMenuItems.map((item) => (
          <Card key={item.title} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <item.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div className="ml-4">
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Employees;