import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Settings } from 'lucide-react';

const DailyProgram = () => {
  const { t } = useLanguage();

  const programMenuItems = [
    { title: t('workProgram'), icon: Calendar, description: 'برنامج العمل اليومي', href: '/daily-program/work' },
    { title: t('dailyProgramSetup'), icon: Settings, description: 'إعداد وتخطيط البرنامج اليومي', href: '/daily-program/setup' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('dailyProgram')}</h1>
        <p className="text-muted-foreground">إدارة البرنامج اليومي وتخطيط العمل</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programMenuItems.map((item) => (
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

export default DailyProgram;