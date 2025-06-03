import { formatMonthYear } from "../../utils";

interface ExperienceCardProps {
  exp: {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
  };
}

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/${exp.company}.png`} alt="Logo" />
          </div>
          <div>
            <div className="font-semibold">{exp.title}</div>
            <div className="text-sm text-mine-shaft-300">
              {exp.company} &#x2022; {exp.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">
          {formatMonthYear(exp.startDate)} - {formatMonthYear(exp.endDate)}
        </div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        {exp.description}
      </div>
    </div>
  );
};

export default ExperienceCard;
