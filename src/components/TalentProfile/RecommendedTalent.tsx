import { talents } from "../../Data/TalentData";
import TalentCard from "../FindJobs/TalentCard";

const RecommendedTalent = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-5">
        {talents.map(
          (talent, index) =>
            index < 4 && (
              <TalentCard
                key={index}
                name={talent.name}
                role={talent.role}
                about={talent.about}
                company={talent.company}
                expectedCtc={talent.expectedCtc}
                image={talent.image}
                location={talent.location}
                topSkills={talent.topSkills}
              />
            )
        )}
      </div>
    </div>
  );
};

export default RecommendedTalent;
