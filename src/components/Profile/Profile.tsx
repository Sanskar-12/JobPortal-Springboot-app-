import { ActionIcon, Divider } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
} from "@tabler/icons-react";
import { profileType } from "../../types";
import ExperienceCard from "./ExpCard";
import CertificationsCard from "./CertCard";
import { useState } from "react";

interface ProfileProps {
  profile: profileType;
}

const Profile = ({ profile }: ProfileProps) => {
  const [edit, setEdit] = useState([false, false, false, false, false]);

  const handleEdit = (index: number) => {
    const newData = [...edit];
    newData[index] = !newData[index];
    setEdit(newData);
  };

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
        <div className="text-3xl font-semibold flex justify-between">
          {profile.name}{" "}
          <ActionIcon
            variant="subtle"
            color="bright-sun.4"
            size={"lg"}
            onClick={() => handleEdit(0)}
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        <div className="text-xl flex gap-1 items-center">
          {" "}
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {profile.role} &bull; {profile.company}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
        </div>
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {profile.about}
        </div>
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <div
              className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {profile.experience.map((exp, index) => (
            <ExperienceCard exp={exp} key={index} />
          ))}
        </div>
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
          {profile.certifications.map((cert, index) => (
            <CertificationsCard cert={cert} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
