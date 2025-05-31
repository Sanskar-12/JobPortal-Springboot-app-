import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../components/TalentProfile/Profile";
import RecommendedTalent from "../components/TalentProfile/RecommendedTalent";
import { useEffect, useState } from "react";
import { getUserProfile } from "../Services/ProfileService";
import { errorNotification } from "../Services/NotificationService";
import { profileUserServiceType } from "../types";

const TalentProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [profile, setProfile] = useState<profileUserServiceType>({
    id: 0,
    name: "",
    email: "",
    jobTitle: "",
    company: "",
    location: "",
    about: "",
    skills: [],
    picture: "",
    savedJobs: [],
    experience: [
      {
        title: "",
        company: "",
        location: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        working: false,
      },
    ],
    certifications: [
      {
        name: "",
        issuer: "",
        issueDate: new Date(),
        certificateId: "",
      },
    ],
  });

  console.log(profile);
  useEffect(() => {
    const fetchData = async () => {
      const userId = Number(id);
      if (!id || isNaN(userId)) {
        console.warn("Invalid or undefined user ID:", id);
        return;
      }
      try {
        const res = await getUserProfile(Number(id));
        console.log(res);
        setProfile(res);
      } catch (error) {
        console.log(error);
        errorNotification("Error", "Unable to fetch Profile");
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <div className="my-4 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="bright-sun.4"
          variant="light"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
      <div className="flex gap-5">
        <Profile profile={profile} />
        <RecommendedTalent />
      </div>
    </div>
  );
};

export default TalentProfile;
