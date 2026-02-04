import Image from "next/image";
import { data } from "./data";
import { Arrow } from "@/components/Layout/Header/Svgs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import SwiperNextButton from "./SwiperNextButton";

const Result = () => {
  return (
    <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[10rem] 2xl:max-w-[1800px+15%]">
      <div className="flex flex-col gap-6">
        <h1 className="text-fs-60 leading-none">Our Results</h1>
        <p className="text-lg">The proof is in the pudding</p>
      </div>
      <div className="mt-12">
        <Swiper
          modules={[EffectCreative]}
          effect="creative"
          grabCursor={true}
          creativeEffect={{
            prev: {
              translate: [0, 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          speed={600}
          slidesPerView={1}
          className="swiper-full"
        >
          <SwiperNextButton />
          {data.map((elem, index) => {
            return (
              <SwiperSlide className="bg-background" key={index}>
                <div className="relative grid min-h-[666px] w-full items-center gap-[0.75rem] overflow-hidden rounded-[1.25rem] rounded-tr-[7.5rem] border-2 border-black/20 p-6 lg:min-h-0 lg:grid-cols-12 lg:rounded-tr-[12.5rem] lg:pt-[4rem] lg:pr-[5rem] lg:pb-[2.5rem] lg:pl-[4rem]">
                  <Image
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-50 lg:opacity-100"
                    src="/services/result/background.webp"
                    alt="background"
                    width={1920}
                    height={1080}
                  />
                  <Image
                    className="mb-4 h-[60px] w-full max-w-[150px] min-w-[150px] object-contain object-left lg:mb-20 lg:hidden lg:h-fit"
                    src={elem.companyLogo}
                    alt="company-logo"
                    width={1024}
                    height={1024}
                  />
                  <div className="relative z-10 order-2 flex flex-col lg:order-1 lg:col-span-5">
                    <Image
                      className="mb-4 hidden h-[60px] w-full max-w-[150px] min-w-[150px] object-contain object-left lg:mb-20 lg:block lg:h-fit"
                      src={elem.companyLogo}
                      alt="company-logo"
                      width={1024}
                      height={1024}
                    />
                    <div className="mb-6 flex flex-col lg:mb-[7rem]">
                      <h2
                        style={{
                          animation:
                            "statisticsPanelHeading 3s ease-in-out infinite",
                        }}
                        className="bg-linear-90 from-[#633cc9] via-[#3b8392] to-[#cb24cc] bg-size-[200%_200%] bg-clip-text text-[80px] leading-[110%] text-transparent lg:text-[clamp(6rem,9vw,10rem)] lg:leading-none"
                      >
                        {elem.title}
                      </h2>
                      <p className="text-xl lg:text-3xl">{elem.description}</p>
                    </div>
                    <button className="flex w-fit cursor-pointer items-center gap-2 rounded-full border-2 border-black px-6 py-3">
                      View Project
                      <span className="size-[18px]">
                        <Arrow />
                      </span>
                    </button>
                  </div>
                  <Image
                    className="relative z-10 order-1 aspect-square w-full shrink-0 object-contain object-center lg:order-2 lg:col-span-7"
                    src={elem.previewImage}
                    alt="company-logo"
                    width={1024}
                    height={1024}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Result;
