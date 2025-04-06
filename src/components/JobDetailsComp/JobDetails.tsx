import { Button } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobDetails = () => {
  return (
    <div className="w-2/3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-lg">
            <img className="h-14" src={`/Icons/Google.png`} alt="Logo" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl">Software Engineer</div>
            <div className="text-lg text-mine-shaft-300">
              Google &#x2022; 3 days ago &#x2022; 20 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to={"/apply-job"}>
            <Button size="sm" color="bright-sun.4" variant="light">
              Apply
            </Button>
          </Link>
          <IconBookmark className="text-bright-sun-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
