import { LargeTextLine } from "../Skill/Svgs";
const Content = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-16">
      <div className="flex flex-col gap-4 pt-6 pb-8 lg:w-1/2">
        <h3 className="text-[2.5rem] leading-[calc(2.5rem*1.1)] text-white lg:text-6xl lg:leading-tight 2xl:text-[5rem]">
        We don&apos;t avoid the impossible. <br></br>
        We engineer it.
        <LargeTextLine />
        </h3>
        <p className="mb-4 text-lg text-white lg:text-xl">
        Let&apos;s face it, challenges are inevitable. 
        Your project requires more than a standard solution; 
        it demands relentless logic and verifiable execution. 
        We thrive where others fail because we reject creative compromise and technical limits.
        </p>
      </div>
      <div className="flex flex-col lg:mt-40">
        <h2 className="text-[2.8125rem] leading-none text-white uppercase lg:text-[9rem] 2xl:text-[10rem]">
          Our
        </h2>
        <h2 className="ml-12 text-[2.8125rem] leading-none text-white uppercase lg:text-[9rem] 2xl:text-[10rem]">
          Work
        </h2>
      </div>
    </div>
  );
};

export default Content;
