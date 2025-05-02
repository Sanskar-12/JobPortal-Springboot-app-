import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";
import { convertIntoDate } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { profileUserServiceType } from "../../types";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { successNotification } from "../../Services/NotificationService";

interface ExperienceCardProps {
  exp: {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
    working: boolean;
  };
  edit?: boolean;
  index?: number;
}

const ExperienceCard = ({ exp, edit, index }: ExperienceCardProps) => {
  const dispatch = useDispatch();

  const [editInput, setEditInput] = useState(false);

  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const handleEditInput = () => {
    setEditInput(!editInput);
  };

  const handleRemoveExp = (index: number) => {
    const experience = [...profile.experience];
    const updatedExp = experience.filter((_, i) => i !== index);
    const updatedProfile = { ...profile, experience: updatedExp };
    // setEditInput(!editInput);
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Updated Successfully");
  };

  return editInput ? (
    <>
      <ExpInput setEdit={setEditInput} exp={exp} index={index} />
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
          {convertIntoDate(exp.startDate)}-
          {exp.working ? "Present" : convertIntoDate(exp.endDate)}
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
          <Button
            color="red.4"
            variant="light"
            onClick={() => handleRemoveExp(index as number)}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
