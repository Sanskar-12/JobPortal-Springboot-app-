import { Divider } from "@mantine/core";
import { timeAgo } from "../../utils";
import ApplicationForm from "./ApplicationForm";

interface ApplyJobProps {
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

const ApplyJob = ({ job }: ApplyJobProps) => {
  return (
    <>
      <div className="w-2/3 mx-auto">
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
        </div>
        <Divider my={"xl"} />
        <ApplicationForm />
      </div>
    </>
  );
};

export default ApplyJob;
