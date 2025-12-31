import SubPage from "@/components/SubPage";
import { ClipboardCheck } from "lucide-react";

const Inventory = () => {
  return (
    <SubPage
      title="الجرد"
      description="إجراء عمليات الجرد الدورية"
      icon={ClipboardCheck}
      addButtonLabel="جرد جديد"
    />
  );
};

export default Inventory;
