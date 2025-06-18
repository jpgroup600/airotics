import { lists } from "./list";
import { Arrow as BigArrow } from "./Svgs";
import Card from "./Card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Services = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        const animation = gsap.timeline();

        lists.forEach((elem, index) => {
          if (index !== 0) gsap.set(`.card-${index}`, { yPercent: 100 });
        });
        lists.forEach((elem, index) => {
          if (index === 0)
            animation.to(`.card-${index}`, { scale: 0.8, opacity: 0 });
          else
            animation
              .to(`.card-${index}`, { yPercent: 0 }, "<0.2")
              .to(`.card-${index}`, { scale: 0.8, opacity: 0 });
        });

        ScrollTrigger.create({
          trigger: ".card-container",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          end: `+=${innerHeight * lists.length} bottom`,
          animation,
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="max-w-9xl 2xl:max-w-10xl 2xl:px-7.5-percent mx-auto pb-6"
    >
      <div className="px-7-percent grid grid-cols-12 items-center py-[52px] lg:py-[108px]">
        <h1 className="col-span-12 text-[2.8125rem] leading-[calc(2.8125rem*1.2)] -tracking-widest uppercase lg:col-start-1 lg:col-end-4 lg:text-[10rem] lg:leading-[calc(10rem*1.2)]">
          our
        </h1>
        <h1 className="col-start-3 col-end-11 text-[2.8125rem] leading-[calc(2.8125rem*1.2)] -tracking-widest uppercase lg:col-start-3 lg:col-end-8 lg:text-[10rem] lg:leading-[calc(10rem*1.2)]">
          services
        </h1>
        <div className="col-start-12 col-end-13 aspect-square">
          <BigArrow />
        </div>
      </div>
      <div className="card-container relative flex w-full flex-col gap-8 lg:min-h-screen lg:gap-0 lg:px-[2%] 2xl:px-0">
        {lists.map((elem, index) => {
          return <Card id={index} {...elem} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Services;
