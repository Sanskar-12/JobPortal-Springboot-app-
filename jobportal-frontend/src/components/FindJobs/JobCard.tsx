import { Button, Divider, Text } from "@mantine/core";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconClockHour3,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { profileUserServiceType } from "../../types";
import { changeProfile } from "../../redux/Slice/profileSlice";

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
  const dispatch = useDispatch();

  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const handleSavedJobs = () => {
    let savedJobs = profile.savedJobs ?? [];

    if (savedJobs?.includes(id)) {
      savedJobs = savedJobs.filter((jobId) => jobId !== id);
    } else {
      savedJobs = [...savedJobs, id];
    }

    const updatedProfile = { ...profile, savedJobs };

    dispatch(changeProfile(updatedProfile));
  };

  return (
    <div className="bg-mine-shaft-900 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400 transition-shadow duration-200">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${company}.png`} alt="Logo" />
          </div>
          <div>
            <div className="font-semibold">{jobTitle}</div>
            <div className="text-xs text-mine-shaft-300">
              <Link to={"/company"} className="hover:text-mine-shaft-200">
                {company}
              </Link>{" "}
              &#x2022; {applicants ? applicants.length : 0} Applicants
            </div>
          </div>
        </div>
        {profile?.savedJobs?.includes(id) ? (
          <IconBookmarkFilled
            className="text-bright-sun-400 cursor-pointer"
            onClick={handleSavedJobs}
          />
        ) : (
          <IconBookmark
            className="text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400"
            onClick={handleSavedJobs}
          />
        )}
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        <div>{experience}</div>
        <div>{jobType}</div>
        <div>{location}</div>
      </div>
      <Text
        lineClamp={3}
        className="!text-xs text-justifyhay !text-mine-shaft-300"
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
      <Link to={`/job/${id}`}>
        <Button fullWidth color="bright-sun.4" variant="outline">
          View Job
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;
