import { LargeTextLine, TextLine } from "./Svgs";

const DisplayText = () => {
  return (
    <div className="flex w-full items-center justify-center lg:my-auto">
      <h1 className="mb-8 text-center text-[2rem] leading-[calc(2rem*1.2)] lg:text-8xl lg:leading-tight 2xl:text-[7.5rem] 2xl:leading-[calc(7.5rem*1.2)]">
        We build advanced
        <br />
        systems with{" "}
        <span className="relative inline-block">
          three
          <span className="absolute -bottom-0.5 left-0 h-2 w-full">
            <TextLine />
          </span>
        </span>
        <br />
        <span className="relative inline-block">
          core principles
          <span className="absolute -bottom-0.5 left-0 h-2 w-full">
            <LargeTextLine />
          </span>
        </span>
      </h1>
    </div>
  );
};

export default DisplayText;
