import SubPage from "@/components/SubPage";
import { Database } from "lucide-react";

const WarehouseBalance = () => {
  return (
    <SubPage
      title="رصيد المستودع"
      description="عرض أرصدة المستودع الحالية"
      icon={Database}
    />
  );
};

export default WarehouseBalance;
