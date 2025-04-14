interface PostedJobCardProps {
  jobTitle: string;
  location: string;
  posted: string;
}

const PostedJobCard = ({ jobTitle, location, posted }: PostedJobCardProps) => {
  return (
    <div className="bg-mine-shaft-900 rounded-xl p-2 border-bright-sun-400 border-l-2">
      <div className="text-sm font-semibold">{jobTitle}</div>
      <div className="text-xs text-mine-shaft-300 font-medium">{location}</div>
      <div className="text-xs text-mine-shaft-300">{posted}</div>
    </div>
  );
};

export default PostedJobCard;
