import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertificationsCard from "./CertificationsCard";

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
          <Button color="bright-sun.4" variant="light">
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
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla
          qui, voluptatem corporis enim adipisci alias asperiores. Ab at eius
          illum, facilis eos suscipit id minus, nemo iste sequi fuga blanditiis,
          quod modi? Assumenda, delectus.
        </div>
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1">
            React
          </div>
          <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1">
            Java
          </div>
          <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1">
            SQL
          </div>
        </div>
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <ExperienceCard />
      </div>
      <Divider mx={"xs"} my={"xl"} />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <CertificationsCard />
      </div>
    </div>
  );
};

export default Profile;
