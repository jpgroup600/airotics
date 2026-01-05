const Hero = () => {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-[calc(1400px+15%)] flex-col justify-center gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 lg:py-[10vw] 2xl:max-w-[1800px+15%]">
      <div className="flex h-[90%] flex-col justify-center lg:col-span-12 lg:h-[80%]">
        <h1 className="text-fs-100 max-w-[12ch] leading-[0.95]">
          Great opportunities start when you reach out.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
