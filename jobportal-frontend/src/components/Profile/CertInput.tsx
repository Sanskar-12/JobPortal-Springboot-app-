import { Button, TextInput } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { profileUserServiceType } from "../../types";
import { changeProfile } from "../../redux/Slice/profileSlice";
import { successNotification } from "../../Services/NotificationService";

interface CertInputProps {
  add?: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const CertInput = ({ add, setEdit }: CertInputProps) => {
  const select = fields;

  const dispatch = useDispatch();
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      issuer: "",
      issueDate: new Date(),
      certificateId: "",
    },
    validate: {
      name: isNotEmpty("Name is required"),
      issuer: isNotEmpty("Issuer Name is required"),
      certificateId: isNotEmpty("Certificate Id is required"),
    },
  });

  const normalizeDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1, 12);
  };

  const handleSave = () => {
    setEdit(false);
    form.validate();
    if (!form.isValid()) return;

    const cert = [...profile.certifications];
    const values = form.getValues();

    values.issueDate = normalizeDate(values.issueDate);
    cert.push(values);

    const updatedProfile = {
      ...profile,
      certifications: cert,
    };

    setEdit(false);
    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Updated Successfully");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {add ? "Add Certificate" : "Edit Certificate"}
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput
          label="Name"
          withAsterisk
          placeholder="Enter Name"
          {...form.getInputProps("name")}
        />
        <SelectInput option={select[1]} form={form} name="issuer" />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Pick date"
          withAsterisk
          maxDate={new Date()}
          {...form.getInputProps("issueDate")}
        />
        <TextInput
          label="Certificate Id"
          withAsterisk
          placeholder="Enter Id"
          {...form.getInputProps("certificateId")}
        />
      </div>
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

export default CertInput;
