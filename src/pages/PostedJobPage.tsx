import PostedJob from "../components/PostedJob/PostedJob";
import PostedJobDescription from "../components/PostedJob/PostedJobDescription";

const PostedJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="flex gap-5">
        <PostedJob />
        <PostedJobDescription />
      </div>
    </div>
  );
};

export default PostedJobPage;
