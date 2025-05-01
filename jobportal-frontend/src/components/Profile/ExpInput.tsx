import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useEffect } from "react";
import { MonthPickerInput } from "@mantine/dates";
import { isNotEmpty, useForm } from "@mantine/form";

interface ExpInputProps {
  add?: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  exp: {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
    working: boolean;
  };
}

const ExpInput = ({ add, setEdit, exp }: ExpInputProps) => {
  const select = fields;

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

  useEffect(() => {
    if (!add) {
      form.setValues({
        title: exp.title,
        company: exp.company,
        location: exp.location,
        description: exp.description,
        startDate: new Date(exp.startDate),
        endDate: new Date(exp.endDate),
        working: exp.working,
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
        {...form.getInputProps("working")}
        autoContrast
        label="Currently working here"
      />
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

export default ExpInput;
