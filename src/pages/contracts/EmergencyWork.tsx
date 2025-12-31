import SubPage from "@/components/SubPage";
import { AlertTriangle } from "lucide-react";

const EmergencyWork = () => {
  return (
    <SubPage
      title="أعمال الطوارئ"
      description="إدارة أعمال الطوارئ والإصلاحات العاجلة"
      icon={AlertTriangle}
      addButtonLabel="إضافة عمل طوارئ"
    />
  );
};

export default EmergencyWork;
