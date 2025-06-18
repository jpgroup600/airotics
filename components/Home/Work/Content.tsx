const Content = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:gap-16">
      <div className="flex flex-col gap-4 pt-6 pb-8 lg:w-1/2">
        <h3 className="text-[2.5rem] leading-[calc(2.5rem*1.1)] text-white lg:text-6xl lg:leading-tight 2xl:text-[5rem]">
          Making brands a damn site better.
        </h3>
        <p className="mb-4 text-lg text-white lg:text-xl">
          Let&apos;s face it, first impressions matter. Your website&apos;s an
          opportunity to wow your audience, so why choose bad design? Brands win
          over fans when they&apos;re brave enough to go beyond their creative
          comfort zone.
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
