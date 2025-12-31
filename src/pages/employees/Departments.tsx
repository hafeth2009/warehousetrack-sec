import SubPage from "@/components/SubPage";
import { Building2 } from "lucide-react";

const Departments = () => {
  return (
    <SubPage
      title="أقسام الشركة"
      description="إدارة أقسام وإدارات الشركة"
      icon={Building2}
      addButtonLabel="إضافة قسم"
    />
  );
};

export default Departments;
