import SubPage from "@/components/SubPage";
import { Truck } from "lucide-react";

const MaterialTransfer = () => {
  return (
    <SubPage
      title="مناقلة المواد"
      description="نقل المواد بين الفروع والمستودعات"
      icon={Truck}
      addButtonLabel="إضافة مناقلة"
    />
  );
};

export default MaterialTransfer;
