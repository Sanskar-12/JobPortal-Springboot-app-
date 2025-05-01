import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { profileUserServiceType } from "../../types";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { successNotification } from "../../Services/NotificationService";

interface ExpInputProps {
  add?: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  exp?: {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
    working: boolean;
  };
  index?: number;
}

const ExpInput = ({ add, setEdit, exp, index }: ExpInputProps) => {
  const select = fields;
  const dispatch = useDispatch();
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty("Title is required"),
      company: isNotEmpty("Company is required"),
      location: isNotEmpty("Location is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  console.log(form.getValues());
  const normalizeDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1, 12);
  };

  const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;

    const exp = [...profile.experience];
    const values = form.getValues();

    values.startDate = normalizeDate(values.startDate);
    values.endDate = normalizeDate(values.endDate);

    if (add) {
      exp.push(values);
    } else {
      exp[index as number] = values;
    }

    const updatedProfile = {
      ...profile,
      experience: exp,
    };

    setEdit(false);
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Updated Successfully");
  };

  useEffect(() => {
    if (!add) {
      form.setValues({
        title: exp?.title,
        company: exp?.company,
        location: exp?.location,
        description: exp?.description,
        startDate: new Date(exp?.startDate as Date),
        endDate: new Date(exp?.endDate as Date),
        working: exp?.working,
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {add ? "Add Experience" : "Edit Experience"}
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput option={select[0]} form={form} name="title" />
        <SelectInput option={select[1]} form={form} name="company" />
      </div>
      <SelectInput option={select[2]} form={form} name="location" />
      <Textarea
        {...form.getInputProps("description")}
        label="Description"
        placeholder="Enter Description..."
        autosize
        minRows={3}
        withAsterisk
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps("startDate")}
          label="Start Date"
          placeholder="Pick date"
          maxDate={form.getValues().endDate || undefined}
          withAsterisk
        />
        <MonthPickerInput
          {...form.getInputProps("endDate")}
          label="End Date"
          placeholder="Pick date"
          minDate={form.getValues().startDate || undefined}
          withAsterisk
          disabled={form.getValues().working}
        />
      </div>
      <Checkbox
        checked={form.getValues().working}
        autoContrast
        label="Currently working here"
        onChange={(e) => form.setFieldValue("working", e.currentTarget.checked)}
      />
      <div className="flex gap-8">
        <Button color="bright-sun.4" variant="outline" onClick={handleSave}>
          Save
        </Button>
        <Button color="red.4" onClick={() => setEdit(false)} variant="light">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ExpInput;
