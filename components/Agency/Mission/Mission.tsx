import Image from "next/image";

const Mission = () => {
  return (
    <>
      <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
        <h1 className="order-2 flex flex-col text-[3.125rem] leading-none uppercase lg:order-1 lg:col-span-9 lg:text-[clamp(3.125rem,10.6vw,10rem)]">
          <span>Our</span>
          <span className="pl-[13.5%]">Mission</span>
        </h1>
        <Image
          className="order-1 aspect-square rounded-full object-cover lg:order-2 lg:col-span-3"
          src="/agency/mission/mission.webp"
          alt="img"
          width={500}
          height={500}
        />
        <h3 className="lg:text-fs-60 order-3 mt-[5vw] text-[2rem] leading-none -tracking-wider lg:col-span-6">
          To make the technology landscape more intelligent, strategic & transformative.
        </h3>
        <p className="lg:text-fs-24 order-4 mt-[5vw] lg:col-span-5 lg:col-start-8 lg:leading-none">
          Every line of code matters to us because we know it matters to our clients.
          We understand that great innovation is not simply about big concepts;
          it's also about the smallest optimizations. Our focus on the details is not
          just an obsession, it's a reflection of our commitment to providing
          the highest quality service, and we're really proud of that.
        </p>
      </section>
      <div className="relative h-fit w-full">
        <video
          className="aspect-video w-full object-cover"
          src="/agency/mission/Short-Preview-Agency.mp4"
          loop
          muted
          autoPlay
          playsInline
        />
        <div className="absolute inset-1/2 flex size-[7em] -translate-1/2 items-center justify-center rounded-full bg-white lg:size-[10em]">
          <p className="lg:text-fs-44 text-2xl leading-none">Play</p>
        </div>
      </div>
    </>
  );
};

export default Mission;
