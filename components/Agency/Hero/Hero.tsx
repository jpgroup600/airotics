import { useRef } from "react";
import { ArrowDownLeft } from "../Common/Icons";

const images = [
  "/agency/trail/0.webp",
  "/agency/trail/1.webp",
  "/agency/trail/2.webp",
  "/agency/trail/3.webp",
  "/agency/trail/4.webp",
  "/agency/trail/5.webp",
  "/agency/trail/6.webp",
  "/agency/trail/7.webp",
  "/agency/trail/8.webp",
];

const MIN_DISTANCE = 150; // px

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const lastPos = useRef({ x: 0, y: 0 });
  const indexRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < MIN_DISTANCE) return;

    lastPos.current = { x: e.clientX, y: e.clientY };

    const img = document.createElement("img");
    img.src = images[indexRef.current % images.length];
    indexRef.current++;

    img.className = "cursor-trail-img";
    img.style.left = `${e.clientX}px`;
    img.style.top = `${e.clientY}px`;

    containerRef.current?.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 1000);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative mx-auto h-screen w-full max-w-[calc(1400px+15%)] overflow-hidden px-[7.5%] 2xl:max-w-[1800px+15%]"
    >
      <div className="relative z-30 flex h-[90%] flex-col justify-center lg:h-[80%]">
        <h1 className="text-fs-100 max-w-[12ch] leading-[0.95]">
          Proudly signing every piece.
        </h1>
      </div>

      <div className="relative z-30 flex h-[10%] items-center justify-between lg:h-[20%]">
        <h2 className="font-display text-fs-60 relative px-4">
          <span className="absolute top-1/2 left-0 h-[50%] w-px -translate-y-1/2 bg-black" />
          agency
        </h2>
        <div className="h-8 w-8 lg:hidden">
          <ArrowDownLeft />
        </div>
      </div>
    </section>
  );
};

export default Hero;
