import Link from "next/link";

const Interested = () => {
  return (
    <div className="bg-black text-white">
      <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col items-center gap-[0.75rem] px-[7.5%] py-[10rem] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
        <h1 className="text-fs-100 col-span-6 text-center leading-[95%] lg:text-left">
          Interested in working with us?
        </h1>
        <div className="col-span-5 col-start-8 flex flex-col">
          <h2 className="text-fs-50 my-[2rem] text-center leading-none lg:text-left">
            Drop us a line at
            <br />
            <Link
              className="underline underline-offset-6"
              href="mailto:hello@kota.co.uk"
            >
              hello@airotics.com
            </Link>
          </h2>
          <p className="text-center text-base lg:text-left lg:text-lg">
            We are a Technology Innovation Agency based in Clerkenwell London,
            specialising in AI Solutions, Cloud Architecture, Enterprise Systems and
            Digital Transformation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Interested;
