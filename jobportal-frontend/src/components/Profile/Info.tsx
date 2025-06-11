import { ActionIcon, NumberInput } from "@mantine/core";
import {
  IconBriefcase,
  IconCheck,
  IconMapPin,
  IconPencil,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../../Data/Profile";
import { IUser, profileUserServiceType } from "../../types";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { successNotification } from "../../Services/NotificationService";
import { IRootUserState } from "../../redux/store";

interface InfoProps {
  profile: profileUserServiceType;
}

const Info = ({ profile }: InfoProps) => {
  const user = useSelector((state: IRootUserState) => state.user) as IUser;

  const select = fields;

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
        totalExp: profile.totalExp,
      });
    } else {
      setEdit(false);
    }
  };

  const handleSave = () => {
    setEdit(false);
    const updatedProfile = {
      ...profile,
      ...form.getValues(),
    };
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Updated Successfully");
  };

  const form = useForm({
    mode: "controlled",
    initialValues: { jobTitle: "", company: "", location: "", totalExp: 1 },
  });

  return (
    <>
      <div className="text-3xl font-semibold flex justify-between">
        {user.name}{" "}
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
        <>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name={"jobTitle"} option={select[0]} />
            <SelectInput form={form} name={"company"} option={select[1]} />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput form={form} name={"location"} option={select[2]} />
            <NumberInput
              name={"totalExp"}
              {...form.getInputProps("totalExp")}
              label={"Total Experience"}
              hideControls
              withAsterisk
              clampBehavior="strict"
              min={1}
              max={50}
            />
          </div>
        </>
      ) : (
        <>
          <div className="text-xl flex gap-1 items-center">
            {" "}
            <IconBriefcase className="h-5 w-5" stroke={1.5} />
            {profile.jobTitle} &bull; {profile.company}
          </div>
          <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
          </div>
          <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
            <IconBriefcase className="h-5 w-5" stroke={1.5} /> Experience:{" "}
            {profile.totalExp} Years
          </div>
        </>
      )}
    </>
  );
};

export default Info;
