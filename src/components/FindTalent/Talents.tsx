import { talents } from "../../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "../FindJobs/TalentCard";

const Talents = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Talents</div>
        <Sort />
      </div>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {talents.map((talent, index) => (
          <TalentCard
            key={index}
            name={talent.name}
            role={talent.role}
            company={talent.company}
            topSkills={talent.topSkills}
            about={talent.about}
            expectedCtc={talent.expectedCtc}
            location={talent.location}
            image={talent.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Talents;
