type Props = {
  heading?: string;
  description?: string;
};

const Intro: React.FC<Props> = ({
  heading = "Stunning websites that supercharge your brand.",
  description = "Don't just be noticed – become unmissable, with a captivating website that stops people in their tracks.",
}) => {
  return (
    <section className="mx-auto flex max-w-[calc(1400px+15%)] flex-col px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
      <div className="col-span-12 grid grid-cols-12 items-center gap-4 py-[6em] lg:gap-0">
        <h1 className="text-fs-60 col-span-12 leading-none lg:col-span-6">
          {heading}
        </h1>
        <p className="col-span-12 text-base lg:col-span-5 lg:col-start-8 lg:text-2xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Intro;
