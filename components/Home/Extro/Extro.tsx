import { Arrow } from "@/components/Layout/Header/Svgs";
import Marquee from "react-fast-marquee";

const Extro = () => {
  return (
    <section className="relative flex min-h-[435px] flex-col justify-around bg-black py-24 lg:h-screen lg:justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-1/2 w-full -translate-1/2 scale-75 opacity-50 lg:h-[604px] lg:w-[604px] lg:scale-100 lg:opacity-100"
        src="/home/blob.mp4"
      ></video>
      <p className="z-10 text-center text-xl text-white uppercase">
        Celebrating 15 years
      </p>
      <Marquee className="my-10 overflow-hidden" autoFill>
        <h1 className="mx-5 text-5xl leading-none text-white uppercase lg:text-[9.375rem]">
          techverse
        </h1>
      </Marquee>
      <button className="z-10 mx-auto flex h-[52px] w-fit cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-white px-5 text-lg text-white">
        Explore{" "}
        <span className="h-4 w-[18px]">
          <Arrow color="#ffffff" />
        </span>
      </button>
    </section>
  );
};

export default Extro;
