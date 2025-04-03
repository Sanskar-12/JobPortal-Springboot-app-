import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../components/TalentProfile/Profile";

const TalentProfile = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Divider size={"xs"} />
      <Link to={"/find-talent"} className="my-4 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <Divider size={"xs"} />
      <div className="flex gap-5">
        <Profile />
      </div>
    </div>
  );
};

export default TalentProfile;
