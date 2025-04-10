import { Tabs } from "@mantine/core";
import JobHistoryCard from "./JobHistoryCard";
import { jobList } from "../../Data/JobsData";

const JobHistory = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-5">Job History</div>
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="applied">
          <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-bright-sun-400 mb-5">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="applied">
            <div className="mt-10 grid grid-cols-4 gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCard
                  key={index}
                  jobTitle={job.jobTitle}
                  company={job.company}
                  applicants={job.applicants}
                  experience={job.experience}
                  jobType={job.jobType}
                  location={job.location}
                  packageLPA={job.package}
                  postedDaysAgo={job.postedDaysAgo}
                  description={job.description}
                  applied={true}
                />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="saved">
            <div className="mt-10 grid grid-cols-4 gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCard
                  key={index}
                  jobTitle={job.jobTitle}
                  company={job.company}
                  applicants={job.applicants}
                  experience={job.experience}
                  jobType={job.jobType}
                  location={job.location}
                  packageLPA={job.package}
                  postedDaysAgo={job.postedDaysAgo}
                  description={job.description}
                  saved={true}
                />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className="mt-10 grid grid-cols-4 gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCard
                  key={index}
                  jobTitle={job.jobTitle}
                  company={job.company}
                  applicants={job.applicants}
                  experience={job.experience}
                  jobType={job.jobType}
                  location={job.location}
                  packageLPA={job.package}
                  postedDaysAgo={job.postedDaysAgo}
                  description={job.description}
                  offered={true}
                />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="interviewing">
            <div className="mt-10 grid grid-cols-4 gap-5">
              {jobList.map((job, index) => (
                <JobHistoryCard
                  key={index}
                  jobTitle={job.jobTitle}
                  company={job.company}
                  applicants={job.applicants}
                  experience={job.experience}
                  jobType={job.jobType}
                  location={job.location}
                  packageLPA={job.package}
                  postedDaysAgo={job.postedDaysAgo}
                  description={job.description}
                  interviewing={true}
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
