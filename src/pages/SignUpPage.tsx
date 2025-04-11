import { IconAnchor } from "@tabler/icons-react";
import SignUp from "../components/SignUpLogin/SignUp";

const SignUpPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] ">
      <div className="w-[100vw] h-[100vh] flex">
        <div className="w-1/2 h-full bg-mine-shaft-900 rounded-r-[200px] flex items-center gap-5 justify-center flex-col">
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold">JobHook</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find the made for you
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
