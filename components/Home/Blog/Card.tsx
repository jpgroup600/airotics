import Image from "next/image";
import { Blog } from "./blogs";

type Props = Blog & {};

const Card: React.FC<Props> = ({ heading, imageSrc, tag }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-tr-[52px] bg-white">
      <Image
        className="h-[172px] w-full object-cover lg:h-[160px] 2xl:h-[272px]"
        src={imageSrc}
        alt="post-img"
        height={689}
        width={1366}
      />
      <div className="flex flex-col px-5 pt-5 pb-6 lg:px-6 lg:py-[30px]">
        <p className="mb-3 text-sm uppercase">{tag}</p>
        <h2 className="text-lg leading-tight lg:text-2xl">{heading}</h2>
      </div>
    </div>
  );
};

export default Card;
