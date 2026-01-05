import Link from "next/link";

const Information = () => {
  return (
    <section className="w-full bg-black pt-8 lg:pt-[7.5rem]">
      <div className="mx-auto w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] lg:grid lg:grid-cols-12 2xl:max-w-[1800px+15%]">
        <div className="col-span-6 flex flex-col gap-6 rounded-tr-[7.5rem] bg-white px-[1.25rem] py-[2rem] lg:gap-12 lg:rounded-tr-[12.5rem] lg:px-[3.125rem] lg:pt-[4.5rem] lg:pb-[3.5rem]">
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-12">
            <div className="flex flex-col">
              <p className="text-fs-44 leading-[150%]">London</p>
              <ul className="lg:text-xl">
                <li>KOTA</li>
                <li>1-5 Clerkenwell Rd</li>
                <li>London</li>
                <li>EC1M 5PA</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="text-fs-44 leading-[150%]">New York</p>
              <ul className="lg:text-xl">
                <li>KOTA</li>
                <li>477 Madison Ave</li>
                <li>Midtown Manhattan</li>
                <li>6th Floor, NY 10022</li>
              </ul>
            </div>
          </div>
          <p className="text-fs-44 leading-[150%]">+44(0)20 3951 0562</p>
          <p className="lg:text-lg">
            Have a quick question you need answering?
            <br />
            Check out - FAQ&apos;s :{" "}
            <span className="underline">Working with us</span>
          </p>
        </div>
        <div className="col-span-4 col-start-9 flex flex-col gap-6 pt-6 text-white lg:gap-12 lg:pt-0">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-lg text-[#7b7b7b]">General</p>
              <Link className="text-fs-44" target="_blank" href="mailto:">
                hello@kota.co.uk
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-[#7b7b7b]">New business</p>
              <Link className="text-fs-44" target="_blank" href="mailto:">
                newbiz@kota.co.uk
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-[#7b7b7b]">Work with us</p>
              <Link className="text-fs-44" target="_blank" href="mailto:">
                careers@kota.co.uk
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-fs-44">Follow</p>
            <ul className="text-fs-32 flex flex-col gap-3 leading-[125%]">
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Awwwards</li>
              <li>Clutch</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
