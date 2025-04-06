import { TagsInput } from "@mantine/core";
import { fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import RichTextEditorComp from "./RichTextEditorComp";

const PostJob = () => {
  const select = fields;

  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold mb-5">Post a Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput option={select[0]} />
          <SelectInput option={select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput option={select[2]} />
          <SelectInput option={select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput option={select[4]} />
          <SelectInput option={select[5]} />
        </div>
        <TagsInput
          withAsterisk
          label="Skills"
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
        />
        <div>
          <div className="text-sm font-medium">Job Description</div>
          <RichTextEditorComp />
        </div>
      </div>
    </div>
  );
};

export default PostJob;
