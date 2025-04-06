import { jobList } from "../../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {jobList.map((job, index) => (
          <JobCard
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
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
