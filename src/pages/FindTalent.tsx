import { Divider } from "@mantine/core";
import FindTalentSearchBar from "../components/FindTalent/FindTalentSearchBar";

const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size={"xs"} mx={"md"} />
      <FindTalentSearchBar />
      <Divider size={"xs"} mx={"md"} />
    </div>
  );
};

export default FindTalent;
