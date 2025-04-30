import { ActionIcon, Divider, TagsInput } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus } from "@tabler/icons-react";
import { IUser, profileUserServiceType } from "../../types";
import ExperienceCard from "./ExpCard";
import CertificationsCard from "./CertCard";
import { useEffect, useState } from "react";
import ExpInput from "./ExpInput";
import CertInput from "./CertInput";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { getUserProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { setProfile } from "../../redux/Slice/profileSlice";
import About from "./About";

const Profile = () => {
  const user = useSelector((state: IRootUserState) => state.user) as IUser;
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [skills, setSkills] = useState<string[]>(profile.skills);
  const [addExp, setAddExp] = useState(false);
  const [addCert, setAddCert] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (index: number) => {
    const newData = [...edit];
    newData[index] = !newData[index];
    setEdit(newData);
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
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            variant="subtle"
            color="bright-sun.4"
            size={"lg"}
            onClick={() => handleEdit(2)}
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <div>
            <TagsInput
              data={[]}
              value={skills}
              onChange={setSkills}
              placeholder="Enter Skills"
              splitChars={[",", " ", "|"]}
            />
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {profile?.skills?.map((skill, index) => (
              <div
                className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="flex gap-2">
            <ActionIcon
              variant="subtle"
              color="bright-sun.4"
              size={"lg"}
              onClick={() => setAddExp(true)}
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="bright-sun.4"
              size={"lg"}
              onClick={() => handleEdit(3)}
            >
              {edit[3] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {profile?.experience?.map((exp, index) => (
            <ExperienceCard exp={exp} edit={edit[3]} key={index} />
          ))}
          {addExp && <ExpInput add={true} setEdit={setAddExp} />}
        </div>
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications{" "}
          <div className="flex gap-2">
            <ActionIcon
              variant="subtle"
              color="bright-sun.4"
              size={"lg"}
              onClick={() => setAddCert(true)}
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="bright-sun.4"
              size={"lg"}
              onClick={() => handleEdit(4)}
            >
              {edit[4] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {profile?.certifications?.map((cert, index) => (
            <CertificationsCard cert={cert} key={index} edit={edit[4]} />
          ))}
          {addCert && <CertInput add={true} setEdit={setAddCert} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
