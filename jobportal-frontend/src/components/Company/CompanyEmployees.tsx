import { talents } from "../../Data/TalentData";
import TalentCard from "../FindJobs/TalentCard";

const CompanyEmployees = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {talents.map(
        (talent, index) =>
          index < 6 && (
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
  );
};

export default CompanyEmployees;
