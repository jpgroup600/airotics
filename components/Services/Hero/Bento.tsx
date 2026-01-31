import Image from "next/image";

type Props = {
  bentoOneImg?: string;
  bentoTwoImg: string;
  bentoThreeImg: string;
  bentoFourImg: string;
  bentoFiveImg?: string;
  bentoSixImg?: string;
};

const Bento: React.FC<Props> = ({
  bentoTwoImg,
  bentoThreeImg,
  bentoFourImg,
  bentoFiveImg,
  bentoSixImg,
}) => {
  const imgClass = "rounded-[10px] object-cover lg:rounded-2xl";

  return (
    <div className="mt-[3.125rem] w-full">
      {/* 왼쪽 1, 가운데 2, 오른쪽 2 */}
      <div className="grid grid-cols-2 grid-rows-4 gap-6 lg:min-h-[480px] lg:grid-cols-3 lg:grid-rows-2 lg:gap-[2.5rem]">
        {/* 왼쪽: 1개 (2행 합침) */}
        <div className="relative col-span-2 row-span-2 min-h-[180px] w-full overflow-hidden rounded-[10px] lg:col-span-1 lg:row-span-2 lg:min-h-0 lg:rounded-2xl">
          <Image src={bentoTwoImg} alt="bento-img" fill className={imgClass} sizes="(max-width: 1024px) 100vw, 33vw" />
        </div>
        {/* 가운데: 2개 */}
        <div className="relative min-h-[180px] min-w-0 overflow-hidden rounded-[10px] lg:min-h-0 lg:rounded-2xl">
          <Image src={bentoThreeImg} alt="bento-img" fill className={imgClass} sizes="(max-width: 1024px) 50vw, 33vw" />
        </div>
        {bentoFiveImg && (
          <div className="relative col-span-2 min-h-[180px] min-w-0 overflow-hidden rounded-[10px] lg:col-span-1 lg:min-h-0 lg:rounded-2xl">
            <Image src={bentoFiveImg} alt="bento-img" fill className={imgClass} sizes="(max-width: 1024px) 50vw, 33vw" />
          </div>
        )}
        <div className="relative min-h-[180px] min-w-0 overflow-hidden rounded-[10px] lg:min-h-0 lg:rounded-2xl">
          <Image src={bentoFourImg} alt="bento-img" fill className={imgClass} sizes="(max-width: 1024px) 50vw, 33vw" />
        </div>
        {bentoSixImg && (
          <div className="relative col-span-2 min-h-[180px] min-w-0 overflow-hidden rounded-[10px] lg:col-span-1 lg:min-h-0 lg:rounded-2xl">
            <Image src={bentoSixImg} alt="bento-img" fill className={imgClass} sizes="(max-width: 1024px) 50vw, 33vw" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bento;
