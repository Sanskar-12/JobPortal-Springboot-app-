import { jobList } from "../../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJob = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {jobList.map((job, index) => (
        <JobCard
          key={index}
          jobTitle={job.jobTitle}
          company={job.company}
          applicants={job.applicants}
          description={job.description}
          experience={job.experience}
          jobType={job.jobType}
          location={job.location}
          packageLPA={job.package}
          postedDaysAgo={job.postedDaysAgo}
        />
      ))}
    </div>
  );
};

export default CompanyJob;
