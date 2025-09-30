import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Package, 
  ArrowUpCircle, 
  ArrowDownCircle, 
  RotateCcw, 
  ArrowRightLeft, 
  Trash2, 
  FileX, 
  DollarSign, 
  ClipboardList, 
  Boxes 
} from 'lucide-react';

const Warehouse = () => {
  const { t } = useLanguage();

  const warehouseMenuItems = [
    { title: t('itemMovement'), icon: ArrowRightLeft, description: 'حركة الأصناف والمخزون', href: '/warehouse/movement' },
    { title: t('itemWithdrawal'), icon: ArrowUpCircle, description: 'إخراج الأصناف من المستودع', href: '/warehouse/withdrawal' },
    { title: t('returnToWarehouse'), icon: ArrowDownCircle, description: 'إعادة الأصناف للمستودع', href: '/warehouse/return' },
    { title: t('companyReturns'), icon: RotateCcw, description: 'إرجاعات الشركة', href: '/warehouse/company-returns' },
    { title: t('materialTransfer'), icon: ArrowRightLeft, description: 'مناقلة المواد بين الفروع', href: '/warehouse/transfer' },
    { title: t('scrap'), icon: Trash2, description: 'إدارة السكراب والتالف', href: '/warehouse/scrap' },
    { title: t('unreceivedMeasurements'), icon: FileX, description: 'مقايسات لم تستلم', href: '/warehouse/unreceived' },
    { title: t('warehouseBalance'), icon: DollarSign, description: 'رصيد المستودع', href: '/warehouse/balance' },
    { title: t('inventory'), icon: ClipboardList, description: 'عمليات الجرد', href: '/warehouse/inventory' },
    { title: t('items'), icon: Boxes, description: 'إدارة الأصناف', href: '/warehouse/items' },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{t('warehouse')}</h1>
        <p className="text-muted-foreground">إدارة المستودع والمخزون</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {warehouseMenuItems.map((item) => (
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

export default Warehouse;