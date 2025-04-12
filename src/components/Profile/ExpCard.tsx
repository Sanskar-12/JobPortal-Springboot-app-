import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

interface ExperienceCardProps {
  exp: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  };
  edit?: boolean;
}

const ExperienceCard = ({ exp, edit }: ExperienceCardProps) => {
  const [editInput, setEditInput] = useState(false);

  const handleEditInput = () => {
    setEditInput(!editInput);
  };

  return editInput ? (
    <>
      <ExpInput setEdit={setEditInput} />
    </>
  ) : (
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
          {exp.startDate} - {exp.endDate}
        </div>
      </div>

      <div className="text-sm text-mine-shaft-300 text-justify">
        {exp.description}
      </div>

      {edit && (
        <div className="flex gap-5">
          <Button
            color="bright-sun.4"
            variant="outline"
            onClick={() => handleEditInput()}
          >
            Edit
          </Button>
          <Button color="red.4" variant="light">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
