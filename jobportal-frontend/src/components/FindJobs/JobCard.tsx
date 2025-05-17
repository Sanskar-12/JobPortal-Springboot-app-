import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils";

interface JobCard {
  jobTitle: string;
  company: string;
  applicants: {
    applicantId: string;
    timestamp: string;
    applicationStatus: string;
  }[];
  experience: string;
  jobType: string;
  location: string;
  packageLPA: string;
  postedDaysAgo: Date;
  description: string;
  about: string;
  id: number;
}

const JobCard = ({
  id,
  jobTitle,
  applicants,
  company,
  experience,
  jobType,
  location,
  packageLPA,
  postedDaysAgo,
  about,
}: JobCard) => {
  return (
    <Link
      to={`/job/${id}`}
      className="bg-mine-shaft-900 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400 transition-shadow duration-200"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${company}.png`} alt="Logo" />
          </div>
          <div>
            <div className="font-semibold">{jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              {company} &#x2022; {applicants ? applicants.length : 0} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        <div>{experience}</div>
        <div>{jobType}</div>
        <div>{location}</div>
      </div>
      <Text
        lineClamp={3}
        className="!text-xs text-justify !text-mine-shaft-300"
      >
        {about}
      </Text>
      <Divider size={"xs"} color="mine-shaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377; {packageLPA} {"LPA"}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />
          Posted {timeAgo(postedDaysAgo)}
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
