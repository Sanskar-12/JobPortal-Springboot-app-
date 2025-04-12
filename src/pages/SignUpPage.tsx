import { IconAnchor } from "@tabler/icons-react";
import SignUp from "../components/SignUpLogin/SignUp";
import Login from "../components/SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
  const location = useLocation();

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
      <div
        className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-100 ${
          location.pathname === "/sign-up"
            ? "-translate-x-1/2"
            : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`transition-all ease-in-out duration-100 w-1/2 h-full bg-mine-shaft-900 rounded-r-[200px] flex items-center gap-5 justify-center flex-col ${
            location.pathname === "/sign-up"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          }`}
        >
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
