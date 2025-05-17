import { useEffect, useState } from "react";
import JobCard from "../FindJobs/JobCard";
import { getAllJobs } from "../../Services/JobService";
import { errorNotification } from "../../Services/NotificationService";
import { useParams } from "react-router-dom";

const RecommendedJobDetails = () => {
  const { id } = useParams();
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
    const fetchData = async () => {
      try {
        const res = await getAllJobs();
        setJobList(res);
      } catch (error) {
        console.log(error);
        errorNotification("Server Error", "Could not find Recommended Jobs.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-1/3">
      <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
      <div className="flex flex-col flex-wrap gap-5">
        {jobList.map(
          (job, index) =>
            index < 6 &&
            id !== job?.id.toString() && (
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
            )
        )}
      </div>
    </div>
  );
};

export default RecommendedJobDetails;
