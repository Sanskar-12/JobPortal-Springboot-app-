import { Button, NumberInput, TagsInput, Textarea } from "@mantine/core";
import { fields } from "../../Data/PostJob";
import SelectInput from "./SelectInput";
import RichTextEditorComp from "./RichTextEditorComp";
import { isNotEmpty, useForm } from "@mantine/form";
import { getJob, postJob } from "../../Services/JobService";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootUserState } from "../../redux/store";
import { profileUserServiceType } from "../../types";
import { useEffect } from "react";

const PostJob = () => {
  const { id } = useParams();

  const select = fields;
  const navigate = useNavigate();
  const profile = useSelector(
    (state: IRootUserState) => state.profile
  ) as profileUserServiceType;

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      jobTitle: "",
      company: "",
      about: "",
      experience: "",
      jobType: "",
      location: "",
      packageOffered: "",
      description: "",
      skillsRequired: [],
    },
    validate: {
      jobTitle: isNotEmpty("Title is required"),
      company: isNotEmpty("Company is required"),
      about: isNotEmpty("About is required"),
      experience: isNotEmpty("Experience is required"),
      jobType: isNotEmpty("JobType is required"),
      location: isNotEmpty("Location is required"),
      packageOffered: isNotEmpty("PackageOffered is required"),
      description: isNotEmpty("Description is required"),
      skillsRequired: isNotEmpty("Skills is required"),
    },
  });

  const handleSaveForm = async () => {
    form.validate();
    if (!form.isValid()) return;
    try {
      const res = await postJob({
        ...form.getValues(),
        id: Number(id),
        postedBy: profile.id,
        jobStatus: "ACTIVE",
      });
      successNotification("Success", "Job Posted Successfully.");
      navigate(`/posted-job/${res.id}`);
    } catch (error) {
      console.log(error);
      errorNotification("Job Posting Failed", error);
    }
  };

  const handleDraft = async () => {
    try {
      const res = await postJob({
        ...form.getValues(),
        id: Number(id),
        postedBy: profile.id,
        jobStatus: "DRAFT",
      });
      successNotification("Success", "Job Drafted Successfully.");
      navigate(`/posted-job/${res.id}`);
    } catch (error) {
      console.log(error);
      errorNotification("Job Posting Failed", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id !== "0") {
        try {
          const res = await getJob(id as string);
          form.setValues(res);
        } catch (error) {
          console.log(error);
          errorNotification("Error", "Cannot fetch Job");
        }
      } else {
        form.reset();
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold mb-5">Post a Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput option={select[0]} form={form} name="jobTitle" />
          <SelectInput option={select[1]} form={form} name="company" />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput option={select[2]} form={form} name="experience" />
          <SelectInput option={select[3]} form={form} name="jobType" />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput option={select[4]} form={form} name="location" />
          <NumberInput
            label="Salary"
            placeholder="Enter Salary"
            hideControls
            withAsterisk
            min={1}
            max={300}
            clampBehavior="strict"
            {...form.getInputProps("packageOffered")}
          />
        </div>
        <TagsInput
          withAsterisk
          label="Skills"
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
          {...form.getInputProps("skillsRequired")}
        />
        <Textarea
          {...form.getInputProps("about")}
          withAsterisk
          label="About Job"
          placeholder="Enter about job."
          autosize
          minRows={2}
          className=""
        />
        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bgbright-sun-400/20">
          <div className="text-sm font-medium my-1">
            Job Description <span className="text-red-500">*</span>
          </div>
          <RichTextEditorComp form={form} />
        </div>
        <div className="flex gap-4">
          <Button color="bright-sun.4" variant="light" onClick={handleSaveForm}>
            Publish Job
          </Button>
          <Button color="bright-sun.4" variant="outline" onClick={handleDraft}>
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
