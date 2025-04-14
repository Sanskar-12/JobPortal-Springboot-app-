import { jobList } from "../../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJobDetails = () => {
  return (
    <div className="w-1/3">
      <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
      <div className="flex flex-col flex-wrap gap-5">
        {jobList.map(
          (job, index) =>
            index < 6 && (
              <JobCard
                key={index}
                jobTitle={job.jobTitle}
                applicants={job.applicants}
                company={job.company}
                description={job.description}
                experience={job.experience}
                jobType={job.jobType}
                location={job.location}
                packageLPA={job.package}
                postedDaysAgo={job.postedDaysAgo}
              />
            )
        )}
      </div>
    </div>
  );
};

export default RecommendedJobDetails;
