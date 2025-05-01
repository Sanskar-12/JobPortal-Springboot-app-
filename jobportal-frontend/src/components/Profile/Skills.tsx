import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { profileUserServiceType } from "../../types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { successNotification } from "../../Services/NotificationService";

interface SkillsProps {
  profile: profileUserServiceType;
}

const Skills = ({ profile }: SkillsProps) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [skills, setSkills] = useState(profile.skills);

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      setSkills(profile.skills);
    } else {
      setEdit(false);
    }
  };

  const handleSave = () => {
    setEdit(false);
    const updatedProfile = {
      ...profile,
      skills,
    };
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Updated Successfully");
  };

  return (
    <>
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Skills{" "}
        <div>
          {edit && (
            <ActionIcon
              variant="subtle"
              color="green.8"
              size={"lg"}
              onClick={() => handleSave()}
            >
              <IconCheck className="h-4/5 w-4/5" />
            </ActionIcon>
          )}
          <ActionIcon
            variant="subtle"
            color={edit ? "red.8" : "bright-sun.4"}
            size={"lg"}
            onClick={() => handleEdit()}
          >
            {edit ? (
              <IconX className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
      </div>
      {edit ? (
        <div>
          <TagsInput
            data={[]}
            value={skills}
            onChange={setSkills}
            placeholder="Enter Skills"
            splitChars={[",", " ", "|"]}
          />
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skill, index) => (
            <div
              className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Skills;
