import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { DateInput, TimeInput } from "@mantine/dates";
import { useRef, useState } from "react";

interface TalentCardProps {
  name: string;
  role: string;
  company: string;
  topSkills: string[];
  about: string;
  expectedCtc: string;
  location: string;
  image: string;
  posted?: boolean;
  invited?: boolean;
  width?: string;
}

const TalentCard = ({
  name,
  role,
  about,
  company,
  expectedCtc,
  image,
  location,
  topSkills,
  width,
  posted,
  invited,
}: TalentCardProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`bg-mine-shaft-900 p-4 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] shadow-bright-sun-400 transition-shadow duration-200 ${
        width && "w-full"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar size={"lg"} src={`/${image}.png`} alt="Logo" />
          </div>
          <div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-mine-shaft-300">
              {role} &bull; {company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        {topSkills.map((skills, index) => (
          <div key={index}>{skills}</div>
        ))}
      </div>
      <Text
        lineClamp={3}
        className="!text-xs text-justify !text-mine-shaft-300"
      >
        {about}
      </Text>
      <Divider size={"xs"} color="mine-shaft.7" />
      {invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="font-semibold text-mine-shaft-200">{expectedCtc}</div>
          <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
            <IconMapPin className="h-5 w-5" stroke={1.5} /> {location}
          </div>
        </div>
      )}

      <Divider size={"xs"} color="mine-shaft.7" />
      <div className="flex [&>*]:w-1/2 [&>*]:p-1">
        {!invited && (
          <>
            <Link to={"/talent-profile"}>
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
              <Button color="bright-sun.4" variant="outline" fullWidth>
                Accept
              </Button>
            </div>
            <div>
              <Button color="bright-sun.4" variant="light" fullWidth>
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            minDate={new Date()}
            value={value}
            onChange={setValue}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button color="bright-sun.4" variant="light" fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
