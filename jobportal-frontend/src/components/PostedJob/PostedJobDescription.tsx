import { Badge, Tabs } from "@mantine/core";
import JobDetails from "../JobDetailsComp/JobDetails";
import TalentCard from "../FindJobs/TalentCard";
import { JobDetails as JobType } from "../../types";

interface PostedJobDescriptionProps {
  job: JobType;
}

const PostedJobDescription = ({ job }: PostedJobDescriptionProps) => {
  return (
    <div className="mt-5 w-3/4 px-5">
      {job?.jobTitle ? (
        <>
          <div className="text-2xl font-semibold flex items-center">
            {job?.jobTitle}
            <Badge variant="light" color="bright-sun.4" ml={"sm"}>
              {job?.jobStatus}
            </Badge>
          </div>
          <div className="font-medium text-mine-shaft-300">{job?.location}</div>
          <div>
            <Tabs variant="outline" radius={"lg"} defaultValue={"overview"}>
              <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="invited">Invited</Tabs.Tab>
                <Tabs.Tab value="offered">Offered</Tabs.Tab>
                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview" className="[&>div]:w-full">
                <JobDetails edit={true} job={job} />
              </Tabs.Panel>
              <Tabs.Panel value="applicants">
                <div className="mt-10 grid grid-cols-4 gap-5 justify-around">
                  {job?.applicants !== null &&
                    job?.applicants
                      ?.filter((job) => job?.applicationStatus === "APPLIED")
                      .map(
                        (talent, index) =>
                          index < 6 && (
                            <TalentCard
                              applicantId={talent.applicantId}
                              posted={true}
                              key={index}
                            />
                          )
                      )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="invited">
                <div className="mt-10 grid grid-cols-4 gap-5 justify-around">
                  {job?.applicants !== null &&
                    job?.applicants
                      .filter(
                        (job) => job?.applicationStatus === "INTERVIEWING"
                      )
                      .map(
                        (talent, index) =>
                          index < 6 && (
                            <TalentCard
                              applicantId={talent.applicantId}
                              interviewTime={talent.interviewTime}
                              website={talent?.website}
                              resume={talent?.resume}
                              coverLetter={talent?.coverLetter}
                              invited={true}
                              key={index}
                            />
                          )
                      )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="offered">
                <div className="mt-10 grid grid-cols-4 gap-5 justify-around">
                  {job?.applicants !== null &&
                    job?.applicants
                      .filter((job) => job?.applicationStatus === "OFFERED")
                      .map(
                        (talent, index) =>
                          index < 6 && (
                            <TalentCard
                              applicantId={talent.applicantId}
                              interviewTime={talent.interviewTime}
                              website={talent?.website}
                              resume={talent?.resume}
                              coverLetter={talent?.coverLetter}
                              offered={true}
                              key={index}
                            />
                          )
                      )}
                </div>
              </Tabs.Panel>
              <Tabs.Panel value="rejected">
                <div className="mt-10 grid grid-cols-4 gap-5 justify-around">
                  {job?.applicants !== null &&
                    job?.applicants
                      .filter((job) => job?.applicationStatus === "REJECTED")
                      .map(
                        (talent, index) =>
                          index < 6 && (
                            <TalentCard
                              applicantId={talent.applicantId}
                              interviewTime={talent.interviewTime}
                              website={talent?.website}
                              resume={talent?.resume}
                              coverLetter={talent?.coverLetter}
                              rejected={true}
                              key={index}
                            />
                          )
                      )}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="text-2xl font-semibold flex justify-center items-center min-h-[70vh]">
          No Job Found
        </div>
      )}
    </div>
  );
};

export default PostedJobDescription;
