import SubPage from "@/components/SubPage";
import { LayoutGrid } from "lucide-react";

const MaterialDistribution = () => {
  return (
    <SubPage
      title="مخطط توزيع المواد"
      description="تخطيط وتوزيع المواد على المشاريع"
      icon={LayoutGrid}
      addButtonLabel="إضافة مخطط"
    />
  );
};

export default MaterialDistribution;
