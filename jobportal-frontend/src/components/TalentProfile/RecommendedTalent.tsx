import { profileUserServiceType } from "../../types";
import TalentCard from "../FindJobs/TalentCard";

interface RecommendedTalentProps {
  talentProfiles: profileUserServiceType[];
}

const RecommendedTalent = ({ talentProfiles }: RecommendedTalentProps) => {
  return (
    <div className="w-1/3">
      <div className="text-xl font-semibold mb-5">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-5">
        {talentProfiles?.map(
          (talent, index) =>
            index < 4 && (
              <TalentCard key={index} profile={talent} width={"full"} />
            )
        )}
      </div>
    </div>
  );
};

export default RecommendedTalent;
