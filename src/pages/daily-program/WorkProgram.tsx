import SubPage from "@/components/SubPage";
import { CalendarClock } from "lucide-react";

const WorkProgram = () => {
  return (
    <SubPage
      title="برنامج العمل"
      description="عرض وإدارة برنامج العمل اليومي"
      icon={CalendarClock}
      addButtonLabel="إضافة مهمة"
    />
  );
};

export default WorkProgram;
