import SubPage from "@/components/SubPage";
import { UsersRound } from "lucide-react";

const Teams = () => {
  return (
    <SubPage
      title="الفرق"
      description="إدارة فرق العمل والمجموعات"
      icon={UsersRound}
      addButtonLabel="إضافة فريق"
    />
  );
};

export default Teams;
