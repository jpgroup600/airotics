import Image from "next/image";
import { ArrowDownLeft } from "../Common/Icons";

const Approach = () => {
  return (
    <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
      <h1 className="flex flex-col text-[3.125rem] leading-none uppercase lg:col-span-11 lg:text-[clamp(3.125rem,10.6vw,10rem)]">
        <span>Our</span>
        <span className="ml-auto lg:ml-0 lg:pl-[13.5%]">Approach</span>
      </h1>
      <div className="mt-auto mb-6 hidden lg:block lg:w-[clamp(2rem,5vw,4.5rem)]">
        <ArrowDownLeft />
      </div>
      <Image
        className="col-span-5 mt-[5vw] aspect-square rounded-tl-[6rem] object-cover lg:rounded-tl-[12.5rem]"
        src="/agency/approach/approach.webp"
        alt="image"
        width={1024}
        height={1024}
      />
      <div className="lg:text-fs-24 col-span-5 col-start-8 mt-[5vw] flex flex-col justify-center gap-4 lg:leading-[125%]">
        <p>
          We&apos;re not just developers who follow orders - we&apos;re innovators
          who take pride in being visionary and draw inspiration from the broader
          technology landscape of AI, cloud computing and emerging platforms.
        </p>

        <p>
          You&apos;ll never see us take the easy route, and we especially like
          partnering with clients who are ready for making technological breakthroughs.
        </p>

        <p>
          Innovation is very close to our hearts, too. If your company drives
          positive change in the industry, we&apos;d love to help make it even
          greater.
        </p>
      </div>
    </section>
  );
};

export default Approach;
