/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Sort from "./Sort";
import { errorNotification } from "../../Services/NotificationService";
import { getAllJobs } from "../../Services/JobService";
import { useDispatch, useSelector } from "react-redux";
import { JobDetails } from "../../types";
import { resetFilter } from "../../redux/Slice/filterSlice";

const Jobs = () => {
  const [jobList, setJobList] = useState<JobDetails[]>([]);

  const dispatch = useDispatch();

  const filter = useSelector((state: any) => state.filter);
  const sort = useSelector((state: any) => state.sort);

  const [filteredJobs, setFilteredJobs] = useState<JobDetails[]>([]);

  useEffect(() => {
    dispatch(resetFilter({}));
    const fetchJobs = async () => {
      try {
        const res = await getAllJobs();
        setJobList(res.filter((job: any) => job.jobStatus === "ACTIVE"));
      } catch (error) {
        console.log(error);
        errorNotification("Server Error", "Could Not Find Jobs.");
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    if (sort === "Most Recent") {
      setJobList(
        [...jobList].sort(
          (a, b) =>
            new Date(b.postTime).getTime() - new Date(a.postTime).getTime()
        )
      );
    } else if (sort === "Salary (Low to High)") {
      setJobList(
        [...jobList].sort(
          (a, b) => Number(a.packageOffered) - Number(b.packageOffered)
        )
      );
    } else if (sort === "Salary (High to Low)") {
      setJobList(
        [...jobList].sort(
          (a, b) => Number(b.packageOffered) - Number(a.packageOffered)
        )
      );
    }
  }, [sort]);

  useEffect(() => {
    let filterJobs = jobList;
    setFilteredJobs(jobList);

    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter["Job Title"].some((jobTitle: string) =>
          job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
        )
      );
    }
    if (filter["Location"] && filter["Location"].length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter["Location"].some((location: string) =>
          job.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }
    if (filter["Experience"] && filter["Experience"].length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter["Experience"].some((exp: string) =>
          job.experience.toLowerCase().includes(exp.toLowerCase())
        )
      );
    }
    if (filter["Job Type"] && filter["Job Type"].length > 0) {
      filterJobs = filterJobs.filter((job) =>
        filter["Job Type"].some((type: string) =>
          job.jobType.toLowerCase().includes(type.toLowerCase())
        )
      );
    }
    if (filter["Package"] && filter["Package"].length > 0) {
      filterJobs = filterJobs.filter(
        (job) =>
          job.packageOffered >= filter.Package[0] &&
          job.packageOffered <= filter.Package[1]
      );
    }
    setFilteredJobs(filterJobs);
  }, [filter, jobList]);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <Sort />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {filteredJobs.map((job, index) => (
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
