import { Arrow } from "@/components/Layout/Header/Svgs";
import { List } from "./list";

type Props = List & { id: number };

const Card: React.FC<Props> = ({
  description,
  heading,
  techs,
  videoSrc,
  id,
}) => {
  return (
    <div
      className={`card-${id} lg:absolute lg:inset-0 lg:flex lg:h-screen lg:items-center lg:justify-center`}
    >
      <div className="main p-7-percent flex flex-col-reverse rounded-2xl bg-white lg:flex-row lg:gap-8 lg:rounded-[60px] lg:p-16">
        <div className="flex flex-col gap-4 lg:w-[60%] lg:gap-6">
          <h1 className="mb-2 text-[2.5rem] leading-[calc(2.5rem*1.2)] lg:text-[5.5rem] lg:leading-[calc(5.5rem*1.1)]">
            {heading}
          </h1>
          <div className="flex flex-wrap gap-2">
            {techs.map((elem, index) => {
              return (
                <p
                  className="rounded-full border border-black/30 px-2.5 py-[5px] lg:text-lg"
                  key={index}
                >
                  {elem}
                </p>
              );
            })}
          </div>
          <p className="text-xl">{description}</p>
          {/* <button className="flex w-fit items-center justify-center gap-4 rounded-full border-2 border-black px-5 py-2 lg:px-6 lg:py-3 lg:text-lg">
            Find out more
            <span className="h-3 w-3.5 lg:h-4 lg:w-[18px]">
              <Arrow />
            </span>
          </button> */}
        </div>
        <div className="lg:flex lg:w-[40%] lg:justify-stretch">
          <video
            className="mb-5 aspect-square rounded-tr-[75px] object-cover lg:mb-0 lg:rounded-tr-[200px]"
            src={videoSrc}
            muted
            autoPlay
            playsInline
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
