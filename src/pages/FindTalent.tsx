import { Divider } from "@mantine/core";
import FindTalentSearchBar from "../components/FindTalent/FindTalentSearchBar";
import Talents from "../components/FindTalent/Talents";

const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <FindTalentSearchBar />
      <Divider size={"xs"} mx={"md"} />
      <Talents />
    </div>
  );
};

export default FindTalent;
