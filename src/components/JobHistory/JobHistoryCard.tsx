import { Button, Divider, Text } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface JobHistoryCardProps {
  jobTitle: string;
  company: string;
  applicants: number;
  experience: string;
  jobType: string;
  location: string;
  packageLPA: string;
  postedDaysAgo: number;
  description: string;
  applied?: boolean;
  saved?: boolean;
  offered?: boolean;
  interviewing?: boolean;
}

const JobHistoryCard = ({
  jobTitle,
  applicants,
  company,
  description,
  experience,
  jobType,
  location,
  packageLPA,
  postedDaysAgo,
  applied,
  saved,
  offered,
  interviewing,
}: JobHistoryCardProps) => {
  return (
    <Link
      to={"/jobs"}
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
              {company} &#x2022; {applicants} Applicants
            </div>
          </div>
        </div>
        {saved ? (
          <IconBookmarkFilled className="text-bright-sun-400 cursor-pointer" />
        ) : (
          <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
        )}
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
        {description}
      </Text>
      <Divider size={"xs"} color="mine-shaft.7" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377; {packageLPA}
        </div>
        <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />
          {applied || interviewing
            ? "Applied"
            : offered
            ? "Interviewed"
            : "Posted"}{" "}
          {postedDaysAgo} days ago
        </div>
      </div>
      {(offered || interviewing) && (
        <Divider size={"xs"} color="mine-shaft.7" />
      )}
      {offered && (
        <div className="flex gap-2">
          <Button color="bright-sun.4" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="bright-sun.4" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      )}
      {interviewing && (
        <div className="flex gap-1 text-sm items-center">
          <IconCalendarMonth
            className="text-bright-sun-400 w-5 h-5"
            stroke={1.5}
          />{" "}
          Sun, 25 August &bull;{" "}
          <span className="text-mine-shaft-400">10:00 AM</span>
        </div>
      )}
    </Link>
  );
};

export default JobHistoryCard;
