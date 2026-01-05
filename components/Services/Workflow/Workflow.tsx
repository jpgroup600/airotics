import Image from "next/image";
import { projectPhases } from "./data";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Workflow = () => {
  const container = useRef<HTMLElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container.current,
              pin: true,
              scrub: 1,
              end: () => `+=${innerHeight * projectPhases.length}`,
            },
          })
          .to(".card-container", {
            x: -boxRef.current!.scrollWidth + innerWidth - 100,
          });
      });

      return () => mm.revert();
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="mx-auto mb-[4.5rem] flex min-h-screen max-w-[calc(1400px+15%)] flex-col justify-center gap-[3.125rem] py-[5vw] lg:overflow-x-hidden lg:px-[7.5%]"
    >
      <div className="flex flex-col gap-6 px-[7.5%]">
        <h1 className="text-fs-60 leading-none">Project workflow.</h1>
        <p className="text-fs-24 leading-[125%]">
          Here's an overview of a medium-sized, 16 week technology project.
        </p>
      </div>

      {/* MOBILE — SWIPER */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.25}
          grabCursor
          slidesOffsetAfter={16}
          slidesOffsetBefore={16}
        >
          {projectPhases.map((elem, index) => (
            <SwiperSlide key={index}>
              <WorkflowCard elem={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DESKTOP — GSAP */}
      <div className="hidden md:flex">
        <div ref={boxRef} className="card-container flex">
          {projectPhases.map((elem, index) => (
            <WorkflowCard key={index} elem={elem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;

/* ---------------------------------------------------------------- */

const WorkflowCard = ({
  elem,
}: {
  elem: {
    title: string;
    duration: string;
    description: string;
    workInvolved: string[];
    image: string;
  };
}) => {
  return (
    <div
      style={{ boxShadow: "0 0 96px 0 rgba(0,0,0,.16)" }}
      className="flex w-[75vw] max-w-[1056px] flex-col gap-[4%] rounded-tr-[2.5rem] bg-white p-4 lg:mr-[3.125rem] lg:w-[65vw] lg:flex-row lg:rounded-tr-[7.5rem] lg:pt-[2vw] lg:pr-[3vw] lg:pb-[2vw] lg:pl-[2vw]"
    >
      <Image
        className="aspect-square h-fit w-[22%] rounded-full object-cover"
        src={elem.image}
        alt="phase-img"
        width={1024}
        height={1024}
        priority
      />

      <div className="flex flex-col">
        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center">
          <h2 className="text-fs-50 leading-[120%]">{elem.title}</h2>
          <p className="w-fit rounded-md border border-black px-[0.7em] py-[0.4em]">
            {elem.duration}
          </p>
        </div>

        <p className="mb-6 text-sm lg:text-xl">{elem.description}</p>

        <div>
          <p className="mb-2 text-lg">Work Involved</p>
          <div className="flex flex-wrap gap-2.5">
            {elem.workInvolved.map((text: string, index: number) => (
              <p
                key={index}
                className="rounded-md bg-black px-[0.6em] py-[0.5em] text-sm text-white lg:text-base"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
