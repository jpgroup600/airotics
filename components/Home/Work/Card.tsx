import Image from "next/image";
import { useEffect, useState } from "react";
import { WorkDetail } from "./works";
import VideoModal from "./VideoModal";

type Props = WorkDetail & {};

const Card: React.FC<Props> = (props) => {
  const { description, heading, imgSrc, isPlayActive } = props;
  const [isOpen, setIsOpen] = useState(false);

  const videoSrc =
    isPlayActive && "videoSrc" in props && props.videoSrc !== "/"
      ? props.videoSrc
      : null;

      useEffect(() => {
        if (!isOpen) {
          document.body.style.overflow = "auto";
          return;
        }
      
        document.body.style.overflow = "hidden";
      
        const onKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape") setIsOpen(false);
        };
      
        window.addEventListener("keydown", onKeyDown);
      
        return () => {
          document.body.style.overflow = "auto";
          window.removeEventListener("keydown", onKeyDown);
        };
      }, [isOpen]);
      
  return (
    <>
      <button
        type="button"
        disabled={!videoSrc}
        onClick={() => videoSrc && setIsOpen(true)}
        className={[
          "relative flex flex-col overflow-hidden rounded-3xl text-left",
          "lg:max-w-[330px] lg:min-w-[330px]",
          videoSrc ? "cursor-pointer" : "cursor-default",
          "focus:outline-none focus:ring-0",
        ].join(" ")}
      >
        <Image
          className="w-full object-cover"
          src={imgSrc}
          alt="work-card-detail"
          height={1366}
          width={689}
        />

        {isPlayActive ? (
          <Image
            className="absolute inset-1/2 h-14 w-14 -translate-1/2 object-contain"
            src="/home/icon-play.png"
            alt="icon"
            height={50}
            width={50}
          />
        ) : (
          <></>
        )}
        <div className="absolute bottom-0 left-0 flex h-fit min-h-[156px] w-full flex-col items-center justify-center gap-2 bg-black/30 p-6 backdrop-blur">
          <h4 className="text-center text-lg text-white uppercase">
            {heading}
          </h4>
          <p className="text-center text-sm text-white">{description}</p>
        </div>
      </button>

      <VideoModal
        isOpen={isOpen}
        src={videoSrc}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Card;
