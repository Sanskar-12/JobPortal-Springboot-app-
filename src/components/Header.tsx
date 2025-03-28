import { Avatar } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 p-6 text-white h-28 flex justify-between items-center">
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <div className="flex gap-5">
        <a href="">Find Jobs</a>
        <a href="">Find Talent</a>
        <a href="">Upload Jobs</a>
        <a href="">About us</a>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-3">
          <div>Sanskar</div>
          <Avatar src="/avatar.png" alt="it's me" />
        </div>
        <IconSettings />
        <IconBell />
      </div>
    </div>
  );
};

export default Header;
