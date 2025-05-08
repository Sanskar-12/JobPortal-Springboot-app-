import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { errorNotification } from "../../Services/NotificationService";
import { getAllJobs } from "../../Services/JobService";

const Jobs = () => {
  const [jobList, setJobList] = useState([
    {
      id: 0,
      jobTitle: "",
      company: "",
      applicants: [{ applicantId: "", timestamp: "", applicationStatus: "" }],
      experience: "",
      jobType: "",
      location: "",
      packageOffered: "",
      postTime: new Date(),
      description: "",
      about: "",
    },
  ]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getAllJobs();
        setJobList(res);
        console.log(res);
      } catch (error) {
        console.log(error);
        errorNotification("Server Error", "Could Not Find Jobs.");
      }
    };
    fetchJobs();
  }, []);

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
            id={job.id}
            jobTitle={job.jobTitle}
            company={job.company}
            applicants={job.applicants}
            experience={job.experience}
            jobType={job.jobType}
            location={job.location}
            packageLPA={job.packageOffered}
            postedDaysAgo={job.postTime}
            description={job.description}
            about={job.about}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
