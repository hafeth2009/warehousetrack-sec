import SubPage from "@/components/SubPage";
import { Briefcase } from "lucide-react";

const JobTitles = () => {
  return (
    <SubPage
      title="المسميات الوظيفية"
      description="إدارة المسميات والوظائف"
      icon={Briefcase}
      addButtonLabel="إضافة مسمى وظيفي"
    />
  );
};

export default JobTitles;
