/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Divider, FileInput, Overlay } from "@mantine/core";
import { IUser, profileUserServiceType } from "../../types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { getUserProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { changeProfile, setProfile } from "../../redux/Slice/profileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";
import { IconEdit } from "@tabler/icons-react";
import { useHover } from "@mantine/hooks";
import { successNotification } from "../../Services/NotificationService";
import { getBase64 } from "../../utils";

const Profile = () => {
  const user = useSelector((state: IRootUserState) => state.user) as IUser;
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const dispatch = useDispatch();
  const { hovered, ref } = useHover();

  const handleSavePicture = async (image: any) => {
    const picture: any = await getBase64(image);
    const updatedProfile = { ...profile, picture: picture.split(",")[1] };
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Picture Updated Successfully");
  };

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
        <div
          className="absolute -bottom-1/3 left-3 flex items-center justify-center"
          ref={ref}
        >
          <Avatar
            className="!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full"
            src={
              profile.picture
                ? `data:image/jpeg;base64,${profile.picture}`
                : "/avatar.png"
            }
            alt="Profile Picture"
          />
          {hovered && (
            <Overlay
              className="!rounded-full"
              color="#000"
              backgroundOpacity={0.75}
            />
          )}
          {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16" />}
          <FileInput
            onChange={(e) => handleSavePicture(e)}
            className="absolute [&_*]:!rounded-full z-[301] [&_*]:!h-full w-full"
            variant="transparent"
            accept="image/png,image/jpeg"
          />
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
