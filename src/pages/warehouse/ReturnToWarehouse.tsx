import SubPage from "@/components/SubPage";
import { ArrowDownToLine } from "lucide-react";

const ReturnToWarehouse = () => {
  return (
    <SubPage
      title="إعادة للمستودع"
      description="إعادة الأصناف للمستودع"
      icon={ArrowDownToLine}
      addButtonLabel="إعادة صنف"
    />
  );
};

export default ReturnToWarehouse;
