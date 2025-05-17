import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import ApplyJob from "../components/ApplyJob/ApplyJob";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";
import { errorNotification } from "../Services/NotificationService";

const ApplyJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      <Button
        leftSection={<IconArrowLeft size={20} />}
        onClick={() => navigate(-1)}
        color="bright-sun.4"
        variant="light"
      >
        Back
      </Button>
      <ApplyJob job={job} />
    </div>
  );
};

export default ApplyJobPage;
