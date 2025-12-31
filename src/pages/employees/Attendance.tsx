import SubPage from "@/components/SubPage";
import { UserCheck } from "lucide-react";

const Attendance = () => {
  return (
    <SubPage
      title="الحضور والغياب"
      description="متابعة حضور وغياب الموظفين"
      icon={UserCheck}
      addButtonLabel="تسجيل حضور"
    />
  );
};

export default Attendance;
