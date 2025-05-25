/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, skills } from "../../Data/JobDescData";
import DomPurify from "dompurify";
import { timeAgo } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { IUser, profileUserServiceType } from "../../types";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { useEffect, useState } from "react";

interface JobDetailsProps {
  edit?: boolean;
  job: {
    id: number;
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
    packageOffered: string;
    postTime: Date;
    description: string;
    about: string;
  };
}

const JobDetails = ({ edit, job }: JobDetailsProps) => {
  const dispatch = useDispatch();

  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const user = useSelector((state: IRootUserState) => state.user) as IUser;

  const [applied, setApplied] = useState(false);

  const handleSavedJobs = () => {
    let savedJobs = profile.savedJobs ?? [];

    if (savedJobs?.includes(job?.id)) {
      savedJobs = savedJobs.filter((jobId) => jobId !== job?.id);
    } else {
      savedJobs = [...savedJobs, job?.id];
    }

    const updatedProfile = { ...profile, savedJobs };

    dispatch(changeProfile(updatedProfile));
  };

  const data = DomPurify.sanitize(job?.description);

  useEffect(() => {
    if (
      job?.applicants?.filter(
        (applicant) => Number(applicant?.applicantId) === Number(user?.id)
      ).length > 0
    ) {
      setApplied(true);
    } else {
      setApplied(false);
    }
  }, [job?.applicants, user?.id]);

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
              {job?.applicants?.length} Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          {(edit || !applied) && (
            <Link to={`/apply-job/${job?.id}`}>
              <Button size="sm" color="bright-sun.4" variant="light">
                {edit ? "Edit" : "Apply"}
              </Button>
            </Link>
          )}
          {applied && (
            <Button color="green.8" size="sm" variant="light">
              Applied
            </Button>
          )}
          {edit ? (
            <Button color="red.5" size="sm" variant="outline">
              Delete
            </Button>
          ) : profile?.savedJobs?.includes(job?.id) ? (
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
            <div className="font-semibold">
              {job ? (job as Record<string, any>)[item.id] : "NA"}
              {item.id === "packageOffered" && <>LPA</>}
            </div>
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
              <img
                className="h-8"
                src={`/Icons/${job?.company}.png`}
                alt="Logo"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-lg">{job?.company}</div>
              <div className="text-lg text-mine-shaft-300">10K+ Employees</div>
            </div>
          </div>
          <Link to={`/company/${job?.company}`}>
            <Button size="sm" color="bright-sun.4" variant="light">
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-mine-shaft-300 text-justify">{job?.about}</div>
      </div>
    </div>
  );
};

export default JobDetails;
