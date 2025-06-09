/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Sort from "../FindJobs/Sort";
import TalentCard from "../FindJobs/TalentCard";
import { errorNotification } from "../../Services/NotificationService";
import { getAllProfile } from "../../Services/ProfileService";
import { profileUserServiceType } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../redux/Slice/filterSlice";

const Talents = () => {
  const [talents, setTalents] = useState<profileUserServiceType[]>([]);

  const dispatch = useDispatch();

  const filter = useSelector((state: any) => state.filter);

  const [filteredTalents, setFilteredTalents] = useState<
    profileUserServiceType[]
  >([]);

  useEffect(() => {
    dispatch(resetFilter({}));
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

  useEffect(() => {
    let filterTalent = talents;
    setFilteredTalents(talents);
    if (filter.name) {
      filterTalent = filterTalent.filter((talent) =>
        talent.name.toLowerCase().includes(filter.name.toLowerCase())
      );
    }
    if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filterTalent = filterTalent.filter((talent) =>
        filter["Job Title"].some((jobTitle: string) =>
          talent.jobTitle.toLowerCase().includes(jobTitle.toLowerCase())
        )
      );
    }
    if (filter["Location"] && filter["Location"].length > 0) {
      filterTalent = filterTalent.filter((talent) =>
        filter["Location"].some((location: string) =>
          talent.location.toLowerCase().includes(location.toLowerCase())
        )
      );
    }
    if (filter["Skills"] && filter["Skills"].length > 0) {
      filterTalent = filterTalent.filter((talent) =>
        filter["Skills"].some((skills: string) =>
          talent.skills.some((skill) =>
            skill.toLowerCase().includes(skills.toLowerCase())
          )
        )
      );
    }
    if (filter["exp"] && filter["exp"].length > 0) {
      filterTalent = filterTalent.filter(
        (talent) =>
          talent.totalExp >= filter.exp[0] && talent.totalExp <= filter.exp[1]
      );
    }
    setFilteredTalents(filterTalent);
  }, [filter, talents]);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Talents</div>
        <Sort />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {filteredTalents.length > 0 ? (
          filteredTalents.map((talent, index) => (
            <TalentCard key={index} applicantId={talent?.id.toString()} />
          ))
        ) : (
          <div className="text-2xl font-semibold">No Talents Found</div>
        )}
      </div>
    </div>
  );
};

export default Talents;
