import { works } from "./works";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import GridCard from "./GridCard";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const Grid = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        const animation = gsap.timeline({ defaults: { ease: "none" } });
        works.forEach((_elem, index) => {
          if (index > 1) {
            gsap.set(`.grid-card-${index}`, { xPercent: -100 * (index - 1) });
          }

          if (index === 0)
            animation
              .to(`.cover-${index}`, { xPercent: -100, x: innerWidth })
              .to(`.grid-card-${index}`, { xPercent: -100 })
              .to(`.grid-card-${index + 1}`, { xPercent: -100 }, "<")
              .to(container.current!, { backgroundColor: "#ffffff" }, "<");
          else if (index === works.length - 1) {
            animation.to(`.cover-${index}`, { xPercent: -100, x: innerWidth });
          } else {
            animation
              .to(`.cover-${index}`, { xPercent: -100, x: innerWidth })
              .to(`.grid-card-${index}`, { xPercent: -100 * (index + 1) })
              .to(
                `.grid-card-${index + 1}`,
                { xPercent: -100 * (index + 1) },
                "<",
              );
          }
        });
        ScrollTrigger.create({
          trigger: container.current!,
          pin: true,
          pinSpacing: true,
          end: `+=${works.length * 1000}`,
          scrub: 1,
          animation,
        });
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="flex h-full w-full flex-col overflow-hidden bg-black lg:flex-row"
    >
      {works.map((elem, index) => {
        return <GridCard {...elem} key={index} index={index} />;
      })}
    </div>
  );
};

export default Grid;
