import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import JobDetails from "../components/JobDetailsComp/JobDetails";
import RecommendedJobDetails from "../components/JobDetailsComp/RecommendedJobDetails";
import { useEffect, useState } from "react";
import { errorNotification } from "../Services/NotificationService";
import { getJob } from "../Services/JobService";

const JobDetailPage = () => {
  const { id } = useParams();

  const [job, setJob] = useState({
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
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const res = await getJob(id as string);
        setJob(res);
      } catch (error) {
        console.log(error);
        errorNotification("Server Error", "Could not find Job.");
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link to={"/find-jobs"} className="my-4 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5">
        <JobDetails job={job} />
        <RecommendedJobDetails />
      </div>
    </div>
  );
};

export default JobDetailPage;
