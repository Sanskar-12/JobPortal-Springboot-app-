import { Avatar, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return location.pathname !== "/sign-up" ? (
    <div className="w-full bg-mine-shaft-950 p-6 text-white h-20 flex justify-between items-center font-['poppins']">
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <NavLinks />
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-3">
          <div>Sanskar</div>
          <Avatar src="/avatar.png" alt="it's me" />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator offset={6} color="bright-sun.4" size={8} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
