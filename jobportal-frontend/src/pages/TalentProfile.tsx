import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../components/TalentProfile/RecommendedTalent";

const TalentProfile = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link to={"/find-talent"} className="my-4 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5">
        <Profile profile={profile} />
        <RecommendedTalent />
      </div>
    </div>
  );
};

export default TalentProfile;
