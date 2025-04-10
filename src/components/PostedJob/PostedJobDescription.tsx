import { Badge, Tabs } from "@mantine/core";
import JobDetails from "../JobDetailsComp/JobDetails";
import { talents } from "../../Data/TalentData";
import TalentCard from "../FindJobs/TalentCard";

const PostedJobDescription = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" color="bright-sun.4" ml={"sm"}>
          Badge
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300">
        New York, United States
      </div>
      <div>
        <Tabs variant="outline" radius={"lg"} defaultValue={"overview"}>
          <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDetails edit={true} />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-10 grid grid-cols-4 gap-5 justify-around">
              {talents.map(
                (talent, index) =>
                  index < 6 && (
                    <TalentCard
                      about={talent.about}
                      company={talent.company}
                      expectedCtc={talent.expectedCtc}
                      image={talent.image}
                      location={talent.location}
                      name={talent.name}
                      role={talent.role}
                      topSkills={talent.topSkills}
                      posted={true}
                      key={index}
                    />
                  )
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="mt-10 grid grid-cols-4 gap-5 justify-around">
              {talents.map(
                (talent, index) =>
                  index < 6 && (
                    <TalentCard
                      about={talent.about}
                      company={talent.company}
                      expectedCtc={talent.expectedCtc}
                      image={talent.image}
                      location={talent.location}
                      name={talent.name}
                      role={talent.role}
                      topSkills={talent.topSkills}
                      invited={true}
                      key={index}
                    />
                  )
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedJobDescription;
