import { ActionIcon } from "@mantine/core";
import { IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import ExperienceCard from "./ExpCard";
import ExpInput from "./ExpInput";
import { profileUserServiceType } from "../../types";
import { useState } from "react";

interface ExpProps {
  profile: profileUserServiceType;
}

const Experience = ({ profile }: ExpProps) => {
  const [addExp, setAddExp] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <div className="text-2xl font-semibold mb-5 flex justify-between">
        Experience{" "}
        <div className="flex gap-2">
          <ActionIcon
            variant="subtle"
            color="bright-sun.4"
            size={"lg"}
            onClick={() => setAddExp(true)}
          >
            <IconPlus className="h-4/5 w-4/5" />
          </ActionIcon>
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
      <div className="flex flex-col gap-8">
        {profile?.experience?.map((exp, index) => (
          <ExperienceCard index={index} exp={exp} edit={edit} key={index} />
        ))}
        {addExp && <ExpInput add={true} setEdit={setAddExp} />}
      </div>
    </>
  );
};

export default Experience;
