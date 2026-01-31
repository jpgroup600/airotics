import { useRef } from "react";
import { Question } from "./questions";
import { Plus } from "./Svgs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = Question & {};

const Card: React.FC<Props> = ({ answer, question }) => {
  const container = useRef<HTMLDivElement>(null);

  const boxRef = useRef<HTMLDivElement>(null);

  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      tl.current! = gsap
        .timeline({
          reversed: true,
          defaults: { ease: "power3" },
        })
        .to(".box", { height: `${boxRef.current!.scrollHeight}px` })
        .to(".box", { opacity: 1 })
        .to(".icon", { rotate: 90 }, "<");
    },
    { scope: container },
  );

  const handleClick = () => {
    tl.current!.reversed(!tl.current!.reversed());
  };

  return (
    <div ref={container}>
      <button
        onClick={handleClick}
        className="flex w-full gap-2 py-1 text-left text-[1.375rem] leading-[calc(1.375rem*1.3)] lg:gap-4 lg:py-2 lg:text-2xl lg:leading-snug 2xl:text-[2.125rem] 2xl:leading-[calc(2.125rem*1.2)]"
      >
        <div className="icon mt-2 h-4 w-4 min-w-4 lg:h-5 lg:w-5 lg:min-w-5 2xl:h-6 2xl:w-6 2xl:min-w-6">
          <Plus />
        </div>
        <span>{question}</span>
      </button>
      <div
        ref={boxRef}
        className="box mb-4 h-0 overflow-hidden pl-6 text-lg opacity-0 lg:pl-8 lg:text-2xl"
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Card;
