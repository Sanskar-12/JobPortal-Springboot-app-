import { ActionIcon, Textarea } from "@mantine/core";
import { IconCheck, IconPencil, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { profileUserServiceType } from "../../types";
import { useDispatch } from "react-redux";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { successNotification } from "../../Services/NotificationService";

interface InfoProps {
  profile: profileUserServiceType;
}

const About = ({ profile }: InfoProps) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [about, setAbout] = useState(profile.about);

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      setAbout(profile.about);
    } else {
      setEdit(false);
    }
  };

  const handleSave = () => {
    setEdit(false);
    const updatedProfile = {
      ...profile,
      about,
    };
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Updated Successfully");
  };

  return (
    <>
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        About
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
          <Textarea
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
            placeholder="Enter about yourself..."
            autosize
            minRows={3}
          />
        </div>
      ) : (
        <div className="text-sm text-mine-shaft-300 text-justify">
          {profile.about}
        </div>
      )}
    </>
  );
};

export default About;
