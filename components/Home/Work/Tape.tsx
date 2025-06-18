import Marquee from "react-fast-marquee";
import { Arrow, DesktopArrow } from "./Svgs";
import { useEffect, useRef, useState } from "react";

type Props = {
  heading: string;
  marqueeColor: string;
  gradient: {
    to: string;
    from: string;
  };
};

const Tape: React.FC<Props> = ({ gradient, marqueeColor, heading }) => {
  const [headingWidth, setHeadingWidth] = useState<string>("0px");
  const [reRender, setReRender] = useState<boolean>(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      setHeadingWidth(`${headingRef.current!.clientHeight}px`);
    } else {
      setReRender((prev) => !prev);
    }
  }, [headingRef, reRender]);

  return (
    <>
      <div className="absolute top-[calc(50vh-28px)] -left-[calc(50vh-28px)] hidden w-[100vh] lg:block">
        <Marquee
          autoFill
          direction="up"
          className="max-h-[56px] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(90deg,${gradient.from},${gradient.to})`,
          }}
        >
          <h4
            ref={headingRef}
            style={{
              color: marqueeColor,
              writingMode: "vertical-rl",
              minWidth: headingWidth,
            }}
            className="flex -scale-100 items-center justify-center text-2xl font-bold uppercase"
          >
            {heading}
          </h4>
          <div className="mx-10 w-12 -rotate-90">
            <DesktopArrow color={marqueeColor} />
          </div>
        </Marquee>
      </div>
      <div className="max-w-screen lg:hidden">
        <Marquee
          autoFill
          direction="left"
          className="py-3"
          style={{
            backgroundImage: `linear-gradient(90deg,${gradient.from},${gradient.to})`,
          }}
        >
          <h4
            style={{
              color: marqueeColor,
            }}
            className="text-2xl font-bold uppercase"
          >
            {heading}
          </h4>
          <div className="mx-2 w-7">
            <Arrow color={marqueeColor} />
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Tape;
