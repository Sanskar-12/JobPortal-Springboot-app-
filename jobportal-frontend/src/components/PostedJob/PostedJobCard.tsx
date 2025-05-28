import { Link, useParams } from "react-router-dom";
import { timeAgo } from "../../utils";

interface PostedJobCardProps {
  jobId: number;
  jobTitle: string;
  location: string;
  posted: Date;
}

const PostedJobCard = ({
  jobId,
  jobTitle,
  location,
  posted,
}: PostedJobCardProps) => {
  const { id } = useParams();

  return (
    <Link
      to={`/posted-job/${jobId}`}
      className={`rounded-xl p-2 w-52 border-l-2 hover:bg-opacity-80 cursor-pointer border-l-bright-sun-400 ${
        jobId.toString() === id
          ? "bg-bright-sun-400 text-black"
          : "bg-mine-shaft-900 text-mine-shaft-300"
      }`}
    >
      <div className="text-sm font-semibold">{jobTitle}</div>
      <div className="text-xs font-medium">{location}</div>
      <div className="text-xs">{timeAgo(posted)}</div>
    </Link>
  );
};

export default PostedJobCard;
