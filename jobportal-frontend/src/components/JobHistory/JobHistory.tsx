/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tabs } from "@mantine/core";
import JobHistoryCard from "./JobHistoryCard";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../Services/JobService";
import { JobDetails, profileUserServiceType } from "../../types";
import { useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { errorNotification } from "../../Services/NotificationService";

const JobHistory = () => {
  const [activeTab, setActiveTab] = useState<string | null>("APPLIED");
  const [jobList, setJobList] = useState<JobDetails[]>([]);
  const [showList, setShowList] = useState<JobDetails[]>([]);

  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const handleChange = (value: string | null) => {
    setActiveTab(value);

    if (value === "SAVED") {
      setShowList(
        jobList.filter((job) => profile?.savedJobs?.includes(job?.id))
      );
    } else {
      setShowList(
        jobList.filter(
          (job) =>
            job?.applicants?.filter(
              (applicant) =>
                Number(applicant?.applicantId) === Number(profile?.id) &&
                applicant.applicationStatus === value
            ).length > 0
        )
      );
    }
  };

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await getAllJobs();
        setJobList(res);
        setShowList(
          res.filter(
            (job: any) =>
              job?.applicants?.filter(
                (applicant: any) =>
                  Number(applicant?.applicantId) === Number(profile?.id) &&
                  applicant.applicationStatus === "APPLIED"
              ).length > 0
          )
        );
      } catch (error) {
        console.log(error);
        errorNotification("Error", "Failed to Get Jobs");
      }
    };
    fetchAllJobs();
  }, [profile?.id]);

  return (
    <div>
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs
          variant="outline"
          radius="lg"
          value={activeTab}
          onChange={handleChange}
        >
          <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5">
            <Tabs.Tab value="APPLIED">Applied</Tabs.Tab>
            <Tabs.Tab value="SAVED">Saved</Tabs.Tab>
            <Tabs.Tab value="OFFERED">Offered</Tabs.Tab>
            <Tabs.Tab value="INTERVIEWING">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={activeTab as string}>
            <div className="mt-10 grid grid-cols-4 gap-5">
              {showList.map((job, index) => (
                <JobHistoryCard
                  key={index}
                  id={job.id}
                  jobTitle={job.jobTitle}
                  company={job.company}
                  applicants={job.applicants}
                  experience={job.experience}
                  jobType={job.jobType}
                  location={job.location}
                  packageLPA={job.packageOffered}
                  postedDaysAgo={job.postTime}
                  about={job.about}
                  applied={true}
                />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;
