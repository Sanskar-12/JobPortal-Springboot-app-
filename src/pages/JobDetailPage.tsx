import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDetails from "../components/JobDetailsComp/JobDetails";
import RecommendedJobDetails from "../components/JobDetailsComp/RecommendedJobDetails";

const JobDetailPage = () => {
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
        <JobDetails />
        <RecommendedJobDetails />
      </div>
    </div>
  );
};

export default JobDetailPage;
