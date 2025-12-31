import SubPage from "@/components/SubPage";
import { Trash2 } from "lucide-react";

const Scrap = () => {
  return (
    <SubPage
      title="سكراب"
      description="إدارة المواد التالفة والسكراب"
      icon={Trash2}
      addButtonLabel="إضافة سكراب"
    />
  );
};

export default Scrap;
