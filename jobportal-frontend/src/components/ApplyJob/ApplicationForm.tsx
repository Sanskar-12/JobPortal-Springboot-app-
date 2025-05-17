import {
  Button,
  FileInput,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";

const ApplicationForm = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    setSubmit(!submit);
    // let x = 5;

    // setInterval(() => {
    //   x--;
    //   setSec(x);
    //   if (x === 0) {
    //     navigate("/find-jobs");
    //   }
    // }, 1000);
  };

  return (
    <>
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
          />
          <TextInput
            label="Email"
            placeholder="Enter email"
            withAsterisk
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
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
          />
          <TextInput
            label="Personal Websote"
            placeholder="Enter Url"
            withAsterisk
            variant={preview ? "unstyled" : "default"}
            readOnly={preview}
            className={`${preview && "text-mine-shaft-300 font-semibold"}`}
          />
        </div>
        <FileInput
          leftSection={<IconPaperclip stroke={1.5} />}
          label="Attach your CV"
          placeholder="Your CV"
          leftSectionPointerEvents="none"
          withAsterisk
          variant={preview ? "unstyled" : "default"}
          readOnly={preview}
          className={`${preview && "text-mine-shaft-300 font-semibold"}`}
        />
        <Textarea
          placeholder="Type something about yourself..."
          label="Cover Letter"
          autosize
          minRows={4}
          withAsterisk
          variant={preview ? "unstyled" : "default"}
          readOnly={preview}
          className={`${preview && "text-mine-shaft-300 font-semibold"}`}
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
