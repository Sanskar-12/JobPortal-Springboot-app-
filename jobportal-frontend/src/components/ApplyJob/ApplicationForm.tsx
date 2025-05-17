import {
  Button,
  FileInput,
  LoadingOverlay,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";

const ApplicationForm = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handlePreview = () => {
    form.validate();
    if (!form.isValid()) return;
    setPreview(!preview);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log(form.getValues());
  };

  const handleSubmit = () => {};

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      resume: null,
      coverLetter: "",
    },

    validate: {
      name: isNotEmpty("Name cannot be empty"),
      email: isNotEmpty("Email cannot be empty"),
      phone: isNotEmpty("Phone cannot be empty"),
      website: isNotEmpty("Website cannot be empty"),
      resume: isNotEmpty("Resume cannot be empty"),
    },
  });

  return (
    <>
      <LoadingOverlay
        visible={submit}
        zIndex={40}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "bright-sun.4", type: "bars" }}
      />
      <div className="text-xl font-semibold mb-5">Submit Your Application</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <TextInput
            label="Full Name"
            placeholder="Enter name"
            withAsterisk
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Enter email"
            withAsterisk
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
            {...form.getInputProps("email")}
          />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <NumberInput
            label="Phone Number"
            placeholder="Enter phone number"
            withAsterisk
            hideControls
            min={0}
            max={9999999999}
            clampBehavior="strict"
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
            {...form.getInputProps("phone")}
          />
          <TextInput
            label="Personal Websote"
            placeholder="Enter Url"
            withAsterisk
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
            {...form.getInputProps("website")}
          />
        </div>
        <FileInput
          leftSection={<IconPaperclip stroke={1.5} />}
          label="Attach your Resume"
          placeholder="Your Resume"
          leftSectionPointerEvents="none"
          withAsterisk
          variant={preview ? "unstyled" : "default"}
          readOnly={preview}
          className={`${preview && "text-mine-shaft-300 font-semibold"}`}
          {...form.getInputProps("resume")}
        />
        <Textarea
          placeholder="Type something about yourself..."
          label="Cover Letter"
          autosize
          minRows={4}
          variant={preview ? "unstyled" : "default"}
          readOnly={preview}
          className={`${preview && "text-mine-shaft-300 font-semibold"}`}
          {...form.getInputProps("coverLetter")}
        />
        {!preview && (
          <Button color="bright-sun.4" variant="light" onClick={handlePreview}>
            Preview
          </Button>
        )}
        {preview && (
          <div className="flex gap-10 [&>*]:w-1/2">
            <Button
              color="bright-sun.4"
              variant="outline"
              onClick={handlePreview}
              fullWidth
            >
              Edit
            </Button>
            <Button
              color="bright-sun.4"
              variant="light"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ApplicationForm;
