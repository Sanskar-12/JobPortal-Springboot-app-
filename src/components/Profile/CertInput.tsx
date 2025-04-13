import { Button, TextInput } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

interface CertInputProps {
  add?: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const CertInput = ({ add, setEdit }: CertInputProps) => {
  const select = fields;

  const [issueDate, setIssueDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {add ? "Add Certificate" : "Edit Certificate"}
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Enter title" />
        <SelectInput option={select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Pick date"
          value={issueDate}
          onChange={setIssueDate}
          withAsterisk
          maxDate={new Date()}
        />
        <TextInput label="Certificate Id" withAsterisk placeholder="Enter Id" />
      </div>
      <div className="flex gap-8">
        <Button
          color="bright-sun.4"
          variant="outline"
          onClick={() => setEdit(false)}
        >
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
