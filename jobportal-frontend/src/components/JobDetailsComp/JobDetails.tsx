import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../../Data/JobDescData";
import DomPurify from "dompurify";
import { timeAgo } from "../../utils";

interface JobDetailsProps {
  edit?: boolean;
  job: {
    id: number;
    jobTitle: string;
    company: string;
    applicants: [
      { applicantId: string; timestamp: string; applicationStatus: string }
    ];
    experience: string;
    jobType: string;
    location: string;
    packageOffered: string;
    postTime: Date;
    description: string;
    about: string;
  };
}

const JobDetails = ({ edit, job }: JobDetailsProps) => {
  const data = DomPurify.sanitize(desc);

  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-lg">
            <img
              className="h-14"
              src={`/Icons/${job?.company}.png`}
              alt="Logo"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">{job?.jobTitle}</div>
            <div className="text-lg text-mine-shaft-300">
              {job?.company} &#x2022; {timeAgo(job?.postTime)} &#x2022;{" "}
              {job?.applicants?.length}
              Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to={"/apply-job"}>
            <Button size="sm" color="bright-sun.4" variant="light">
              {edit ? "Edit" : "Apply"}
            </Button>
          </Link>
          {edit ? (
            <Button color="red.5" size="sm" variant="outline">
              Delete
            </Button>
          ) : (
            <IconBookmark className="text-bright-sun-400 cursor-pointer" />
          )}
        </div>
      </div>
      <Divider my={"xl"} />
      <div className="flex justify-between">
        {card.map((item, index) => (
          <div className="flex flex-col items-center gap-1" key={index}>
            <ActionIcon
              color="bright-sun.4"
              className="!h-12 !w-12"
              variant="light"
              radius={"xl"}
              aria-label="Settings"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my={"xl"} />
      <div>
        <div className="mb-3 font-semibold">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {skills.map((item, index) => (
            <ActionIcon
              color="bright-sun.4"
              className="!h-fit !w-fit font-medium !text-sm"
              variant="light"
              radius={"xl"}
              aria-label="Settings"
              p={"xs"}
              key={index}
            >
              {item}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my={"xl"} />
      <div
        dangerouslySetInnerHTML={{ __html: data }}
        className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
      ></div>
      <Divider my={"xl"} />
      <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-8" src={`/Icons/Google.png`} alt="Logo" />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg">Google</div>
              <div className="text-lg text-mine-shaft-300">10K+ Employees</div>
            </div>
          </div>
          <Link to={"/company"}>
            <Button size="sm" color="bright-sun.4" variant="light">
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          nesciunt distinctio mollitia optio enim exercitationem eveniet sunt
          maiores illo est repellat totam eum facilis officia pariatur! Iure sit
          dicta veritatis minus laborum molestiae a et, ipsum illum perferendis
          est dolore.
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
