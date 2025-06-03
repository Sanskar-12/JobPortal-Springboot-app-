/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { DateInput, TimeInput } from "@mantine/dates";
import { useEffect, useRef, useState } from "react";
import { getUserProfile } from "../../Services/ProfileService";
import { profileUserServiceType } from "../../types";
import { changeAppStatus } from "../../Services/JobService";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";
import { formatDate, openResumeInNewTab } from "../../utils";

interface TalentCardProps {
  applicantId?: string;
  posted?: boolean;
  invited?: boolean;
  offered?: boolean;
  rejected?: boolean;
  width?: string;
  interviewTime?: Date;
  website?: string;
  resume?: string;
  coverLetter?: string;
  profile?: profileUserServiceType;
}

const TalentCard = ({
  applicantId,
  width,
  posted,
  invited,
  interviewTime,
  website,
  resume,
  coverLetter,
  offered,
  rejected,
  profile: talentProfile,
}: TalentCardProps) => {
  const { id } = useParams();

  const [opened, { open, close }] = useDisclosure(false);
  const [app, { open: openApp, close: closeApp }] = useDisclosure(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");
  const [profile, setProfile] = useState<profileUserServiceType>({
    id: 0,
    name: "",
    email: "",
    jobTitle: "",
    company: "",
    location: "",
    about: "",
    skills: [],
    picture: "",
    savedJobs: [],
    experience: [
      {
        title: "",
        company: "",
        location: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        working: false,
      },
    ],
    certifications: [
      {
        name: "",
        issuer: "",
        issueDate: new Date(),
        certificateId: "",
      },
    ],
  });

  const ref = useRef<HTMLInputElement>(null);

  const handleOffer = async (status: string) => {
    let interview: any = {
      id,
      applicantId: profile?.id,
      applicationStatus: status,
    };

    if (status === "INTERVIEWING") {
      const [hours, minutes] = time.split(":").map(Number);
      date?.setHours(hours, minutes);
      interview = { ...interview, interviewTime: date };
    }

    try {
      await changeAppStatus(interview);
      if (status === "INTERVIEWING") {
        successNotification(
          "Interview Scheduled",
          "Interview Scheduled Successfully"
        );
      } else if (status === "OFFERED") {
        successNotification("Offered", "Offer had been Sent Successfully");
      } else {
        successNotification("Rejected", "Applicant had been Rejected");
      }
      window.location.reload();
    } catch (error: any) {
      console.log(error);
      errorNotification("Error", error?.response.data.errorMessage);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserProfile(Number(applicantId));
        if (talentProfile) {
          setProfile(talentProfile);
        } else {
          setProfile(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [applicantId]);

  console.log(profile);
  return (
    <div
      className={`bg-mine-shaft-900 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400 transition-shadow duration-200 ${
        width && "w-full"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar
              size={"lg"}
              src={
                profile.picture
                  ? `data:image/jpeg;base64,${profile.picture}`
                  : "/avatar.png"
              }
              alt="Logo"
            />
          </div>
          <div>
            <div className="font-semibold text-lg">{profile?.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {profile?.jobTitle} &bull; {profile?.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        {profile?.skills?.map(
          (skills, index) => index < 3 && <div key={index}>{skills}</div>
        )}
      </div>
      <Text
        lineClamp={3}
        className="!text-xs text-justify !text-mine-shaft-300"
      >
        {profile?.about}
      </Text>
      <Divider size={"xs"} color="mine-shaft.7" />
      {invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview:
          {formatDate(interviewTime as Date)}
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-200">23 LPA</div>
          <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile?.location}
          </div>
        </div>
      )}

      <Divider size={"xs"} color="mine-shaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {!invited && (
          <>
            <Link to={`/talent-profile/${profile?.id}`}>
              <Button color="bright-sun.4" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            <div>
              {posted ? (
                <Button
                  rightSection={<IconCalendarMonth />}
                  color="bright-sun.4"
                  variant="light"
                  fullWidth
                  onClick={open}
                >
                  Schedule
                </Button>
              ) : (
                <Button color="bright-sun.4" variant="light" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </>
        )}
        {invited && (
          <>
            <div>
              <Button
                color="bright-sun.4"
                variant="outline"
                fullWidth
                onClick={() => handleOffer("OFFERED")}
              >
                Accept
              </Button>
            </div>
            <div>
              <Button
                color="bright-sun.4"
                variant="light"
                fullWidth
                onClick={() => handleOffer("REJECTED")}
              >
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      {(invited || posted) && (
        <Button
          color="bright-sun.4"
          variant="filled"
          fullWidth
          autoContrast
          onClick={openApp}
        >
          View Application
        </Button>
      )}
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            minDate={new Date()}
            value={date}
            onChange={setDate}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button
            color="bright-sun.4"
            variant="light"
            fullWidth
            onClick={() => handleOffer("INTERVIEWING")}
          >
            Schedule
          </Button>
        </div>
      </Modal>
      <Modal
        opened={app}
        onClose={closeApp}
        title="Application Details"
        centered
      >
        <div className="flex flex-col gap-4">
          <div>
            Email: &emsp;
            <a
              href={`mailto:${profile?.email}`}
              className="text-bright-sun-400 hover:underline cursor-pointer text-center"
            >
              {profile?.email}
            </a>
          </div>
          <div>
            Website: &emsp;
            <a
              target="_blank"
              href={website}
              className="text-bright-sun-400 hover:underline cursor-pointer text-center"
            >
              {website}
            </a>
          </div>
          <div>
            Resume: &emsp;
            <span
              onClick={() => openResumeInNewTab(resume as string)}
              className="text-bright-sun-400 hover:underline cursor-pointer text-center"
            >
              View Resume
            </span>
          </div>
          <div>
            Cover Letter: &emsp;
            <span className="text-bright-sun-400 hover:underline cursor-pointer text-center">
              {coverLetter}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
