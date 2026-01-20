import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Hero = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(".contact-heading", { y: 0, delay: 0.5, stagger: 0.3, duration: 1.5, ease: "power4.out" });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="mx-auto flex min-h-screen w-full max-w-[calc(1400px+15%)] flex-col justify-center gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 lg:py-[10vw] 2xl:max-w-[1800px+15%]"
    >
      <div className="flex h-[90%] flex-col justify-center lg:col-span-12 lg:h-[80%]">
        <h1 className="text-fs-100 max-w-[12ch] leading-[0.95]">
          <span className="block overflow-hidden">
            <span className="contact-heading inline-block translate-y-full">Great</span>
          </span>
          <span className="block overflow-hidden">
            <span className="contact-heading inline-block translate-y-full">opportunities</span>
          </span>
          <span className="block overflow-hidden pb-[0.1em]">
            <span className="contact-heading inline-block translate-y-full">start when you</span>
          </span>
          <span className="block overflow-hidden">
            <span className="contact-heading inline-block translate-y-full">reach out.</span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
