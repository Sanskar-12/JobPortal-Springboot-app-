import { Button, Indicator } from "@mantine/core";
import { IconAnchor, IconBell } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { useEffect } from "react";
import { getUserProfile } from "../../Services/ProfileService";
import { setProfile } from "../../redux/Slice/profileSlice";
import { profileUserServiceType } from "../../types";

const Header = () => {
  const location = useLocation();
  const user = useSelector((state: IRootUserState) => state.user);
  const dispatch = useDispatch();
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile(user.profileId);
        dispatch(setProfile(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserProfile();
  }, [dispatch]);

  return location.pathname !== "/sign-up" && location.pathname !== "/login" ? (
    <div className="w-full bg-mine-shaft-950 p-6 text-white h-20 flex justify-between items-center font-['poppins']">
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8" stroke={2.5} />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      <NavLinks />
      <div className="flex gap-5 items-center">
        {user ? (
          <ProfileMenu profile={profile} />
        ) : (
          <Link to={"/login"}>
            <Button variant="subtle" color="bright-sun.4">
              Login
            </Button>
          </Link>
        )}
        {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div> */}
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
