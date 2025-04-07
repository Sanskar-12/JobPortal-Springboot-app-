import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJob = () => {
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);

  const navigate = useNavigate();

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    setSubmit(!submit);
    let x = 5;

    setInterval(() => {
      x--;
      setSec(x);
      if (x === 0) {
        navigate("/find-jobs");
      }
    }, 1000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          visible={submit}
          zIndex={40}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "bright-sun.4", type: "bars" }}
        />
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-lg">
              <img className="h-14" src={`/Icons/Google.png`} alt="Logo" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-2xl">Software Engineer</div>
              <div className="text-lg text-mine-shaft-300">
                Google &#x2022; 3 days ago &#x2022; 20 Applicants
              </div>
            </div>
          </div>
        </div>
        <Divider my={"xl"} />
        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
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
            <Button
              color="bright-sun.4"
              variant="light"
              onClick={handlePreview}
            >
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
      </div>
      <Notification
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted!"
        mt="md"
        withCloseButton={false}
        withBorder
        className={`!border-bright-sun-400 !fixed top-0 left-[40%] transition duration-300 ease-in-out z-50 ${
          submit ? "translate-y-0" : "-translate-y-28"
        }`}
      >
        Redirecting to Find Jobs in {sec} seconds...
      </Notification>
    </>
  );
};

export default ApplyJob;
