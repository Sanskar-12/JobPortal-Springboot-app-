/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import PostedJob from "../components/PostedJob/PostedJob";
import PostedJobDescription from "../components/PostedJob/PostedJobDescription";
import { useEffect, useState } from "react";
import { getJobsPostedBy } from "../Services/JobService";
import { useSelector } from "react-redux";
import { IRootUserState } from "../redux/store";
import { IUser, JobDetails } from "../types";
import { errorNotification } from "../Services/NotificationService";

const PostedJobPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state: IRootUserState) => state.user) as IUser;
  const [jobList, setJobList] = useState<JobDetails[]>([]);
  const [job, setJob] = useState<JobDetails>({
    id: 0,
    jobTitle: "",
    company: "",
    jobStatus: "",
    applicants: [
      {
        applicantId: "",
        timestamp: "",
        applicationStatus: "",
        interviewTime: new Date(),
        coverLetter: "",
        resume: "",
        website: "",
      },
    ],
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
        const res = await getJobsPostedBy(user?.id.toString());
        setJobList(res);
        if (res && res[0]?.id && Number(id) === 0) {
          navigate(`/posted-job/${res[0]?.id}`);
        }
        setJob(
          res.find((job: any) => {
            return job && job?.id.toString() === id;
          })
        );
      } catch (error) {
        console.log(error);
        errorNotification("Error", "Error Fetching Jobs.");
      }
    };
    fetchData();
  }, [user?.id, id]);

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="flex gap-5">
        <PostedJob job={job} jobList={jobList} />
        <PostedJobDescription job={job} />
      </div>
    </div>
  );
};

export default PostedJobPage;
