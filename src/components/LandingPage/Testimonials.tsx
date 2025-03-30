import { Avatar, Rating } from "@mantine/core";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">User </span>says about us?
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <Avatar className="!h-14 !w-14" src={"/avatar1.png"} alt="Its me" />
          <div>
            <div className="text-lg text-mine-shaft-100 font-semibold">
              Shivam Patel
              <Rating value={3.5} fractions={2} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
