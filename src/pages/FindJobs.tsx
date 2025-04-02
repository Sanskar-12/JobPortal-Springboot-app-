import { Divider } from "@mantine/core";
import SearchBar from "../components/FindJobs/SearchBar";

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size={"xs"} mx={"md"} />
      <SearchBar />
    </div>
  );
};

export default FindJobs;
