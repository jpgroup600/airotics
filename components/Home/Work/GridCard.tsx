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
            <Image
              className="w-full object-cover lg:h-[240px] lg:w-[320px]"
              src={imgSrc}
              alt="work-main-img"
              height={1366}
              width={689}
            />
          </div>
          <Tape
            heading={heading}
            marqueeColor={marqueeColor}
            gradient={gradient}
          />
          <div className="flex flex-col gap-8 px-6 py-10 lg:flex-row">
            {details.map((elem, index) => {
              return <Card key={index} {...elem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
