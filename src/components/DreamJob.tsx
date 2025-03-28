const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-3">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream </span>
          <span>job</span> with us
        </div>
        <div className="text-lg text-mine-shaft-100">
          Good life begins with a good company. Start explore thousands of jobs
          in one place.
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem]">
          <img src="/Boy.png" alt="Boy" />
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
