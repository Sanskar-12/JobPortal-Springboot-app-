import { Button } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const Profile = () => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="Banner" className="rounded-t-2xl" />
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
        />
      </div>
      <div className="px-3 mt-20">
        <div className="text-3xl font-semibold flex justify-between">
          Sanskar Vish{" "}
          <Button color="bright-sun.4" variant="light" fullWidth>
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          {" "}
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          Software Engineer &bull; Google
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> New york, United
          States
        </div>
      </div>
    </div>
  );
};

export default Profile;
