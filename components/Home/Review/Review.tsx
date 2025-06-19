import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";
import { reviews } from "./reviews";
import { Volume } from "./Svgs";

const Review = () => {
  return (
    <section className="max-w-9xl 2xl:max-w-10xl mx-auto flex max-h-screen min-h-screen w-full items-center justify-center lg:px-0">
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 3.2,
            spaceBetween: 50,
          },
        }}
        className="flex"
        spaceBetween={10}
        slidesPerView={1}
      >
        {reviews.map(({ name, companyLogo }, index) => {
          return (
            <SwiperSlide
              className="bg-background flex flex-col rounded-[52px] border-2 border-black/20 p-5"
              key={index}
            >
              <div className="relative">
                <div className="border-background absolute -bottom-1 -left-1 h-16 w-16 rounded-full border-[10px] bg-[#ab5ac2] p-2">
                  <Volume />
                </div>
                <Image
                  className="mb-5 h-[68vh] rounded-[32px] object-cover"
                  src={`/home/reviews/${index}.jpg`}
                  alt="review-img"
                  height={1366}
                  width={689}
                />
              </div>
              <Image
                className="h-[40px] w-fit 2xl:h-[50px]"
                src={companyLogo}
                alt="company-logo"
                height={50}
                width={100}
              />
              <p className="mt-2 text-right text-lg font-bold 2xl:text-3xl">
                {name}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;
