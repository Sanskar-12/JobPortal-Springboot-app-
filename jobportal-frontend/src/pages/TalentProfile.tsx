/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../components/TalentProfile/Profile";
import RecommendedTalent from "../components/TalentProfile/RecommendedTalent";
import { useEffect, useState } from "react";
import { getAllProfile, getUserProfile } from "../Services/ProfileService";
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
    totalExp: 1,
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

  const [talentProfiles, setTalentProfiles] = useState<
    profileUserServiceType[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0);
      try {
        const res = await getUserProfile(Number(id));
        let profiles = await getAllProfile();
        profiles = profiles.filter((res: any) => res?.id?.toString() !== id);
        setTalentProfiles(profiles);
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
        <RecommendedTalent talentProfiles={talentProfiles} />
      </div>
    </div>
  );
};

export default TalentProfile;
