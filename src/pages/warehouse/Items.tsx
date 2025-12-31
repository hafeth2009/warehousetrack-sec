import SubPage from "@/components/SubPage";
import { Boxes } from "lucide-react";

const Items = () => {
  return (
    <SubPage
      title="الأصناف"
      description="إدارة قائمة الأصناف والمواد"
      icon={Boxes}
      addButtonLabel="إضافة صنف"
    />
  );
};

export default Items;
