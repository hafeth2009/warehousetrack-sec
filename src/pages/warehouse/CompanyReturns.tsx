import SubPage from "@/components/SubPage";
import { RotateCcw } from "lucide-react";

const CompanyReturns = () => {
  return (
    <SubPage
      title="إرجاعات الشركة"
      description="إدارة المواد المرتجعة للشركة"
      icon={RotateCcw}
      addButtonLabel="إضافة إرجاع"
    />
  );
};

export default CompanyReturns;
