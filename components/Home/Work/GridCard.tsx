import Marquee from "react-fast-marquee";
import { Work } from "./works";
import Image from "next/image";
import Tape from "./Tape";
import Card from "./Card";

type Props = Work & { index: number };

const GridCard: React.FC<Props> = ({
  description,
  details,
  gradient,
  heading,
  imgSrc,
  marqueeColor,
  subheading,
  index,
}) => {
  return (
    <div
      className={`grid-card-${index} relative flex flex-col lg:max-h-screen lg:min-h-screen lg:justify-center`}
    >
      <h1
        className={`mb-5 hidden pl-[102px] text-[4rem] leading-[calc(4rem*1.2)] text-white uppercase lg:block ${index === 0 ? "lg:text-white" : "lg:text-black"}`}
      >
        {heading}
      </h1>
      <div className="lg:hidden">
        <Marquee autoFill className="mb-10">
          {[...Array(4)].map((_elem, i) => {
            return (
              <div className="flex items-center justify-center" key={i}>
                <h1
                  className={`text-[6.25rem] leading-[calc(6.25rem*1.2)] text-white uppercase ${index === 0 ? "lg:text-white" : "lg:text-black"}`}
                >
                  {heading}
                </h1>
                <p
                  className={`mx-8 text-[2.5rem] text-white ${index === 0 ? "lg:text-white" : "lg:text-black"}`}
                >
                  /
                </p>
              </div>
            );
          })}
        </Marquee>
      </div>
      <div className="lg:max-w-screen lg:overflow-hidden">
        <div
          className={`cover-${index} flex w-fit flex-col lg:flex-row lg:pl-[102px]`}
        >
          <div className="flex flex-col lg:max-w-[440px] lg:min-w-[440px]">
            <div className="mx-6 mb-14 flex flex-col lg:mx-0">
              <h2
                className={`mb-5 text-[2rem] leading-[calc(2rem*1.3)] text-white lg:text-[1.75rem] lg:leading-[calc(1.75rem*1.4)] ${index === 0 ? "lg:text-white" : "lg:text-black"}`}
              >
                {subheading}
              </h2>
              <p
                className={`max-w-[320px] text-white lg:text-xs ${index === 0 ? "lg:text-white" : "lg:text-black"}`}
              >
                {description}
              </p>
            </div>
            <div className="relative w-full overflow-hidden lg:h-[240px] lg:w-[320px]">
              <Image
                className="h-full w-full object-cover"
                src={imgSrc}
                alt="work-main-img"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
          </div>
          <Tape
            heading={heading}
            marqueeColor={marqueeColor}
            gradient={gradient}
          />
          <div className="grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:min-h-[420px] lg:grid-cols-3 lg:grid-rows-[1fr_1fr] lg:gap-6">
            {details.map((elem, cardIndex) => {
              const gridClass =
                cardIndex === 0
                  ? "lg:col-start-1 lg:row-span-2 lg:h-full"
                  : cardIndex === 1
                    ? "lg:col-start-2 lg:row-start-1"
                    : cardIndex === 2
                      ? "lg:col-start-2 lg:row-start-2"
                      : "lg:col-start-3 lg:row-span-2 lg:h-full";
              return (
                <div key={cardIndex} className={`flex min-h-0 ${gridClass}`}>
                  <Card {...elem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
