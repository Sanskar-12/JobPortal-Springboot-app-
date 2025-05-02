import { Avatar, Divider, FileInput, Indicator } from "@mantine/core";
import { IUser, profileUserServiceType } from "../../types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { getUserProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { setProfile } from "../../redux/Slice/profileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";
import { IconPencil } from "@tabler/icons-react";

const Profile = () => {
  const user = useSelector((state: IRootUserState) => state.user) as IUser;
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const dispatch = useDispatch();

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
  }, [user.profileId, dispatch]);

  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="Banner" className="rounded-t-2xl" />
        <div className="absolute -bottom-1/3 left-3">
          <Indicator
            className="[&_.mantine-Indicator-indicator]:!border-4 [&_img]:hover:opacity-80"
            autoContrast
            inline
            offset={30}
            label={<IconPencil className="w-4/5 h-4/5" />}
            size={45}
            position="bottom-end"
            color="bright-sun.4"
            withBorder
          >
            <Avatar
              className="!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full"
              src={"/avatar.png"}
              alt="Profile Picture"
            />
            <FileInput
              className="absolute bottom-2 right-2 z-[201] w-12 [&_div]:text-transparent"
              variant="unstyled"
              size="lg"
              radius={"xl"}
              accept="image/png,image/jpeg"
            />
          </Indicator>
        </div>
      </div>
      <div className="px-3 mt-28">
        <Info profile={profile} />
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <About profile={profile} />
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <Skills profile={profile} />
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <Experience profile={profile} />
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <Certifications />
      </div>
    </div>
  );
};

export default Profile;
