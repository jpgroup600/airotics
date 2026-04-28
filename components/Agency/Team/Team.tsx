import { Swiper, SwiperSlide } from "swiper/react";
import { team, executives } from "./data";
import type { Executive } from "./data";
import Image from "next/image";
import { Controller, EffectCreative } from "swiper/modules";
import { useState } from "react";
import SW from "swiper";
import "swiper/css/effect-creative";
import "swiper/css";
import ExecutiveModal from "./ExecutiveModal";

const Team = () => {
  const [topSwiper, setTopSwiper] = useState<SW | null>(null);
  const [bottomSwiper, setBottomSwiper] = useState<SW | null>(null);
  const [selectedExecutive, setSelectedExecutive] = useState<Executive | null>(
    null,
  );

  return (
    <div className="bg-black">
      <div className="w-full text-white">
        <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
          <p className="order-2 col-span-5 col-start-8 mt-[5vw] lg:order-1 lg:translate-y-[50%] lg:text-xl">
            We&apos;re proud to be a Certified Great Place to Work®!
            You&apos;ll find us working across Creative Web Design, Web
            Development, Branding, and Digital Marketing.
          </p>
          <div className="order-1 flex items-end justify-between lg:order-2 lg:col-span-12">
            <h1 className="flex flex-col text-[2.8125rem] leading-none uppercase lg:text-[clamp(3.125rem,10.6vw,10rem)]">
              <span>Our</span>
              <span className="ml-4 lg:ml-0 lg:pl-[13.5%]">Team</span>
            </h1>
          </div>
        </section>
      </div>
      <div className="mx-auto w-full max-w-[calc(1400px+15%)] px-[7.5%] pb-[5vw] 2xl:max-w-[1800px+15%]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {executives.map((exec, index) => (
            <button
              key={index}
              className="group flex cursor-pointer flex-col gap-3 text-left"
              onClick={() => setSelectedExecutive(exec)}
            >
              <div
                className="relative aspect-[3/4] w-full"
                style={{ clipPath: "inset(0 round 0 3rem 0 0)" }}
              >
                <Image
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  src={exec.image}
                  alt={exec.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="border-b border-white pb-1 text-base text-white lg:text-lg">
                    Click to View
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 left-0 flex justify-center pb-4">
                  <span className="rounded-sm bg-black/60 px-3 py-1 text-xs tracking-[0.3em] text-white/90 uppercase backdrop-blur-sm">
                    {exec.post.split("").join(" ")}
                  </span>
                </div>
              </div>
              <p className="text-xl text-white lg:text-2xl xl:text-3xl">
                {exec.name}
              </p>
            </button>
          ))}
        </div>
      </div>
      <ExecutiveModal
        executive={selectedExecutive}
        onClose={() => setSelectedExecutive(null)}
      />
      <div className="relative block w-full md:mt-32">
        <div className="absolute top-1/2 z-20 hidden h-fit w-full -translate-y-1/2 grid-cols-6 gap-2.5 lg:grid">
          <div className="relative col-span-2 col-start-4">
            <button
              onClick={() => topSwiper?.slideNext()}
              className="absolute top-1/2 -left-[90px] z-10 size-[80px] -translate-y-1/2 cursor-pointer"
            >
              <Arrow />
            </button>
            <button
              onClick={() => topSwiper?.slidePrev()}
              className="absolute top-1/2 -right-[90px] z-10 size-[80px] -translate-y-1/2 rotate-180 cursor-pointer"
            >
              <Arrow />
            </button>
            <div className="overflow-hidden rounded-tr-[5rem]">
              <Swiper
                onSwiper={setTopSwiper}
                controller={{ control: bottomSwiper }}
                effect={"creative"}
                loop
                speed={900}
                watchSlidesProgress
                creativeEffect={{
                  limitProgress: 1,
                  perspective: true,
                  prev: {
                    translate: ["-92%", 0, -120],
                    opacity: 0.45,
                    scale: 0.92,
                  },
                  next: {
                    translate: ["92%", 0, -120],
                    opacity: 0.45,
                    scale: 0.92,
                  },
                }}
                modules={[EffectCreative, Controller]}
                spaceBetween={10}
                slidesPerView={1}
              >
                {team.map((elem, index) => (
                  <SwiperSlide
                    className="group relative aspect-[3/4] w-full overflow-hidden"
                    key={index}
                  >
                    <Image
                      className="cursor-pointer object-cover object-top transition-transform duration-500 group-hover:scale-80 scale-70"
                      src={elem.image}
                      alt="team-member-img"
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 flex h-full w-full flex-col justify-end bg-linear-to-b from-transparent from-70% to-black/80 px-8 py-5 text-white">
                      <h1 className="relative text-7xl">{elem.name}</h1>
                      <p className="relative text-xl">{elem.post}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <Swiper
          onSwiper={setBottomSwiper}
          controller={{ control: topSwiper }}
          modules={[Controller]}
          speed={900}
          spaceBetween={35}
          initialSlide={0}
          slidesPerView={1.3}
          loop
          slidesOffsetBefore={28}
          slidesOffsetAfter={28}
          breakpoints={{
            768: {
              spaceBetween: 10,
              slidesPerView: 6,
              slidesOffsetAfter: 0,
              slidesOffsetBefore: 0,
            },
          }}
        >
          {team.map((elem, index) => {
            index = index;
            return (
              <SwiperSlide
                className="relative aspect-[3/4] w-full overflow-hidden rounded-tr-[5rem]"
                key={index}
              >
                <Image
                  className="object-cover object-top lg:brightness-50"
                  src={elem.image}
                  alt="team-member-img"
                  fill
                  sizes="(max-width: 768px) 80vw, 20vw"
                />
                <div className="absolute inset-0 flex h-full w-full flex-col justify-end bg-linear-to-b from-transparent from-70% to-black/80 px-5 py-3.5 text-white lg:hidden">
                  <h1 className="relative text-4xl">{elem.name}</h1>
                  <p className="relative text-xl">{elem.post}</p>
                </div>
              </SwiperSlide>
            );
          })}
    
        </Swiper>
      </div>
    </div>
  );
};

export default Team;

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.53 81.57">
      <path fill="#fff" d="M5.66 36.63H78.53V44.63H5.66z"></path>
      <path
        fill="#fff"
        d="M40.92 81.57L0 40.65 40.65 0 46.31 5.66 11.31 40.65 46.57 75.91 40.92 81.57z"
      ></path>
    </svg>
  );
};
