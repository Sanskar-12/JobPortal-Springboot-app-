import Header from "../components/Header/Header";
import DreamJob from "../components/LandingPage/DreamJob";

const HomePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Header />;
      <DreamJob />
    </div>
  );
};

export default HomePage;
