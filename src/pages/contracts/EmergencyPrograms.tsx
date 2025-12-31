import SubPage from "@/components/SubPage";
import { Zap } from "lucide-react";

const EmergencyPrograms = () => {
  return (
    <SubPage
      title="برامج أعطال الطوارئ"
      description="إدارة برامج الأعطال الطارئة"
      icon={Zap}
      addButtonLabel="إضافة برنامج"
    />
  );
};

export default EmergencyPrograms;
