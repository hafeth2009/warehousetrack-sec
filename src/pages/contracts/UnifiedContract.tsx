import SubPage from "@/components/SubPage";
import { FileCheck } from "lucide-react";

const UnifiedContract = () => {
  return (
    <SubPage
      title="العقد الموحد"
      description="إدارة العقود الموحدة مع الشركة"
      icon={FileCheck}
      addButtonLabel="إضافة عقد"
    />
  );
};

export default UnifiedContract;
