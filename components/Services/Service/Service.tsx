import { Arrow } from "@/components/Layout/Header/Svgs";
import Image from "next/image";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  services?: ServiceItem[];
};

const Service: React.FC<Props> = ({
  services = [
    {
      title: "AI Solutions",
      description:
        "Leveraging cutting-edge artificial intelligence technologies and innovative frameworks, we develop strategic solutions that transform businesses and drive meaningful outcomes.",
      image: "/services/services/creative-web-design.webp",
    },
    {
      title: "Cloud Architecture",
      description:
        "Built with advanced cloud platforms and forward-thinking infrastructure, we create scalable and resilient systems that enhance your operations without compromising performance.",
      image: "/services/services/web-dev.webp",
    },
    {
      title: "Data Analytics",
      description:
        "We produce intelligent insights that deliver impact - not just analyzing your data, but unlocking your potential.",
      image: "/services/services/copywriting.webp",
    },
    {
      title: "Enterprise Systems",
      description:
        "Use technology and optimization to your company's advantage, turning complex challenges into streamlined solutions.",
      image: "/services/services/e-commerce.webp",
    },
    {
      title: "Platform Integration",
      description:
        "Bespoke integration solutions that connect systems, streamline workflows and maximize efficiency.",
      image: "/services/services/wordpress.webp",
    },
  ],
}) => {

  return (
    <section className="mx-auto mb-[4.5rem] flex max-w-[calc(1400px+15%)] flex-col gap-[3.125rem] px-[7.5%] py-[5vw] lg:mb-[10rem] 2xl:max-w-[1800px+15%]">
      {services.map((elem, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div key={index} className="grid grid-cols-12 items-center gap-3">
            <div
              className={`order-2 col-span-12 flex flex-col lg:col-span-5 ${isReversed ? "lg:order-2 lg:col-start-8" : "lg:order-1"} `}
            >
              <h2 className="text-fs-60 mb-4 leading-none">{elem.title}</h2>
              <p className="lg:text-fs-24 mb-8 max-w-[33ch] text-base leading-[133%]">
                {elem.description}
              </p>
              {/* <button className="flex w-fit items-center rounded-full border-2 border-black px-6 py-2 tracking-tight">
                Find out more
                <span className="ml-4 w-4">
                  <Arrow />
                </span>
              </button> */}
            </div>
            <Image
              className={`order-1 col-span-12 mb-6 aspect-square lg:col-span-6 lg:mb-0 ${
                isReversed
                  ? "rounded-tl-[7.5rem] lg:order-1 lg:rounded-tl-[12.5rem]"
                  : "rounded-tr-[7.5rem] lg:order-2 lg:col-start-7 lg:rounded-tr-[12.5rem]"
              }`}
              src={elem.image}
              alt="service-img"
              width={1024}
              height={1024}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Service;
