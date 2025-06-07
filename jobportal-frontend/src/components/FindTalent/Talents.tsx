/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "../FindJobs/TalentCard";
import { errorNotification } from "../../Services/NotificationService";
import { getAllProfile } from "../../Services/ProfileService";
import { profileUserServiceType } from "../../types";

const Talents = () => {
  const [talents, setTalents] = useState<profileUserServiceType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProfile();
        setTalents(res);
      } catch (error: any) {
        console.log(error);
        errorNotification("Error", error?.reponse.data.errorMessage);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Talents</div>
        <Sort />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {talents.map((talent, index) => (
          <TalentCard key={index} applicantId={talent?.id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
