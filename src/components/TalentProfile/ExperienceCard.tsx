const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img className="h-7" src={`/Icons/Google.png`} alt="Logo" />
          </div>
          <div>
            <div className="font-semibold">Software Engineer</div>
            <div className="text-sm text-mine-shaft-300">
              Google &#x2022; New York, United States
            </div>
          </div>
        </div>
        <div className="text-sm text-mine-shaft-300">Jan 2022 - Present</div>
      </div>
      <div className="text-sm text-mine-shaft-300 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
        natus omnis obcaecati alias illum libero id sint neque eos porro.
      </div>
    </div>
  );
};

export default ExperienceCard;
