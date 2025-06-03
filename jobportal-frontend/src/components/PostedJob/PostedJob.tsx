import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { JobDetails } from "../../types";
import { useEffect, useState } from "react";

interface PostedJobProps {
  job: JobDetails;
  jobList: JobDetails[];
}

const PostedJob = ({ job, jobList }: PostedJobProps) => {
  const [activeTab, setActiveTab] = useState<string | null>("ACTIVE");

  const filteredJobsBasedOnStatus = jobList.filter(
    (job) => job?.jobStatus === activeTab
  );

  const filteredJobsBasedOnActive = jobList.filter(
    (job) => "ACTIVE" === job?.jobStatus
  );

  const filteredJobsBasedOnDraft = jobList.filter(
    (job) => "DRAFT" === job?.jobStatus
  );

  const filteredJobsBasedOnClosed = jobList.filter(
    (job) => "CLOSED" === job?.jobStatus
  );

  useEffect(() => {
    setActiveTab(job?.jobStatus || "ACTIVE");
  }, [job?.jobStatus]);

  return (
    <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-5">Jobs</div>
      <div>
        <Tabs
          autoContrast
          variant="pills"
          value={activeTab}
          onChange={setActiveTab}
        >
          <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
            <Tabs.Tab value="ACTIVE">
              Active [{filteredJobsBasedOnActive.length}]
            </Tabs.Tab>
            <Tabs.Tab value="DRAFT">
              Draft [{filteredJobsBasedOnDraft.length}]
            </Tabs.Tab>
            <Tabs.Tab value="CLOSED">
              Closed [{filteredJobsBasedOnClosed.length}]
            </Tabs.Tab>
          </Tabs.List>

          <div className="flex flex-col gap-5 mt-5">
            {filteredJobsBasedOnStatus.map((job, index) => (
              <PostedJobCard
                key={index}
                jobId={job?.id}
                jobTitle={job.jobTitle}
                location={job.location}
                posted={job.postTime}
              />
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJob;
