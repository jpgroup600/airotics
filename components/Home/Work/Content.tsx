const Content = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-16">
      <div className="flex flex-col gap-4 pt-6 pb-8 lg:w-1/2">
        <h3 className="text-[2.5rem] leading-[calc(2.5rem*1.1)] text-white lg:text-6xl lg:leading-tight 2xl:text-[5rem]">
          Transforming businesses through powerful technology.
        </h3>
        <p className="mb-4 text-lg text-white lg:text-xl">
          Let&apos;s be honest, digital transformation matters. Your platform&apos;s an
          opportunity to impress your clients, so why settle for outdated systems? Companies succeed
          when they&apos;re bold enough to push beyond their technical
          boundaries.
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
