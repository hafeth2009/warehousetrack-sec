import SubPage from "@/components/SubPage";
import { ArrowUpFromLine } from "lucide-react";

const ItemWithdrawal = () => {
  return (
    <SubPage
      title="إخراج صنف"
      description="عمليات سحب الأصناف من المستودع"
      icon={ArrowUpFromLine}
      addButtonLabel="إخراج صنف"
    />
  );
};

export default ItemWithdrawal;
