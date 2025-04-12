import Profile from "../components/Profile/Profile";
import { profile } from "../Data/TalentData";

const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
      <Profile profile={profile} />
    </div>
  );
};

export default ProfilePage;
