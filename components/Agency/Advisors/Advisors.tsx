import { advisors } from "../Team/data";

const Advisors = () => {
  return (
    <div className="bg-black md:py-[5vh] md:pt-[200px] pt-[90px]">
      <div className="mx-auto w-full max-w-[calc(1400px+15%)] px-[7.5%] 2xl:max-w-[1800px+15%]">
        <p className="mb-8 text-center text-xs tracking-[0.3em] text-white/50 uppercase">
          Our Advisors
        </p>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-6">
          {advisors.map((advisor, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <p className="text-xl text-white lg:text-2xl">{advisor.name}</p>
              <p className="text-sm text-white/50">{advisor.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
