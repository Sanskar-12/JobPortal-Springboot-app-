import { Textarea } from "@mantine/core";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

interface ExpInputProps {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpInput = ({ setEdit }: ExpInputProps) => {
  const select = fields;

  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput option={select[0]} />
        <SelectInput option={select[1]} />
      </div>
      <SelectInput option={select[2]} />
      <Textarea
        label="Summary"
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
        placeholder="Enter Summary..."
        autosize
        minRows={3}
        withAsterisk
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Pick date"
          value={startDate}
          onChange={setStartDate}
          maxDate={endDate || undefined}
          withAsterisk
        />
        <MonthPickerInput
          label="End Date"
          placeholder="Pick date"
          value={endDate}
          onChange={setEndDate}
          minDate={startDate || undefined}
          withAsterisk
        />
      </div>
    </div>
  );
};

export default ExpInput;
