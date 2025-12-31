import SubPage from "@/components/SubPage";
import { FileQuestion } from "lucide-react";

const UnreceivedMeasurements = () => {
  return (
    <SubPage
      title="مقايسات لم تستلم"
      description="متابعة المقايسات التي لم يتم استلامها"
      icon={FileQuestion}
    />
  );
};

export default UnreceivedMeasurements;
