import { Divider } from "@mantine/core";
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

const Profile = () => {
  const user = useSelector((state: IRootUserState) => state.user) as IUser;
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  // const [edit, setEdit] = useState([false, false, false, false, false]);

  const dispatch = useDispatch();

  // const handleEdit = (index: number) => {
  //   const newData = [...edit];
  //   newData[index] = !newData[index];
  //   setEdit(newData);
  // };

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
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
        />
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
