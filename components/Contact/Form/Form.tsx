import { Attach } from "@/components/Agency/Common/Icons";
import { Arrow } from "@/components/Layout/Header/Svgs";
import { useState } from "react";

interface UserForm {
  services: string[];
  firstName: string;
  lastName: string;
  email: string;
  budget: string;
  message: string;
  newsletter: boolean;
  privacyAccepted: boolean;
}

const Form = () => {
  const services = [
    "AI solutions",
    "Cloud architecture",
    "Data analytics",
    "Enterprise systems",
    "Platform development",
    "Ongoing support",
    "Custom integration",
  ];
  
  const [userForm, setUserForm] = useState<UserForm>({
    services: [],
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
    newsletter: false,
    privacyAccepted: false,
  });

  return (
    <section className="mx-auto flex w-full max-w-[calc(1400px+15%)] flex-col gap-[0.75rem] px-[7.5%] py-[5vw] lg:grid lg:grid-cols-12 lg:py-[10vw] 2xl:max-w-[1800px+15%]">
      <form className="lg:col-span-10">
        <div className="mb-16 flex flex-col gap-4">
          <h1 className="text-fs-50">I am interested in :</h1>
          <div className="flex flex-wrap gap-3.5 lg:gap-5">
            {services.map((elem, index) => {
              return (
                <label
                  key={index}
                  className="peer cursor-pointer rounded-full py-2 text-base transition-colors lg:py-3 lg:text-xl"
                >
                  <input className="peer appearance-none" type="checkbox" />
                  <span className="rounded-full border-2 border-black p-2 text-black select-none peer-checked:bg-black peer-checked:text-white hover:bg-black hover:text-white lg:px-5 lg:py-3">
                    {elem}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="mb-8 grid w-full gap-12 lg:grid-cols-4">
          <input
            className="border-b-2 border-black px-0.5 py-1 text-[clamp(1.375rem,1.5vw,1.875rem)] leading-[150%] placeholder:text-black focus:outline-none"
            type="text"
            placeholder="First Name*"
            onChange={(e) => setUserForm({ ...userForm, firstName: e.target.value })}
          />
          <input
            className="border-b-2 border-black px-0.5 py-1 text-[clamp(1.375rem,1.5vw,1.875rem)] leading-[150%] placeholder:text-black focus:outline-none"
            type="text"
            placeholder="Last Name*"
            onChange={(e) => setUserForm({ ...userForm, lastName: e.target.value })}
          />
          <input
            className="border-b-2 border-black px-0.5 py-1 text-[clamp(1.375rem,1.5vw,1.875rem)] leading-[150%] placeholder:text-black focus:outline-none lg:col-span-2"
            type="email"
            placeholder="Email*"
            onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
          />
        </div>
        <div className="mb-8 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-3.5">
            <input
              className="border-b-2 border-black px-0.5 py-1 text-[clamp(1.375rem,1.5vw,1.875rem)] leading-[150%] placeholder:text-black focus:outline-none"
              type="text"
              placeholder="Budget (£)"
              onChange={(e) => setUserForm({ ...userForm, budget: e.target.value })}
            />
            <span className="text-sm">
              More info on minimum/typical budget sizes can be found{" "}
              <span className="underline">here.</span>
            </span>
          </div>
          <label className="flex h-fit items-center gap-3.5 border-b-2 border-black px-0.5 py-1 text-[clamp(1.375rem,1.5vw,1.875rem)] leading-[150%]">
            <input type="file" className="hidden" />
            <span className="h-5 w-5">
              <Attach />
            </span>
            <span>Attachments</span>
          </label>
        </div>
        <textarea
          rows={1}
          className="mb-8 w-full border-b-2 border-black px-0.5 py-1 text-[clamp(1.375rem,1.5vw,1.875rem)] leading-[150%] placeholder:text-black focus:outline-none"
          name="message"
          id="message"
          placeholder="Message"
          onChange={(e) => setUserForm({ ...userForm, message: e.target.value })}
        />
        <div className="flex w-full flex-col justify-between gap-2.5 lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-2.5">
            <label className="peer flex items-center gap-3">
              <input type="checkbox" className="peer hidden" 
              onChange={(e) => setUserForm({ ...userForm, newsletter: e.target.checked })}
              />
              <span className="h-[18px] w-[18px] min-w-[18px] rounded-full border border-black bg-white peer-checked:bg-black"></span>
              <p>I&apos;m happy to receive a monthly newsletter from us</p>
            </label>
            <label className="peer flex items-center gap-3">
              <input type="checkbox" className="peer hidden" 
              
              onChange={(e) => setUserForm({ ...userForm, privacyAccepted: e.target.checked })}
              />
              <span className="h-[18px] w-[18px] min-w-[18px] rounded-full border border-black bg-white peer-checked:bg-black"></span>
              <p>
                I understand that we will securely hold my data in accordance
                with their privacy policy.
              </p>
            </label>
          </div>
          <button className="flex w-fit cursor-pointer items-center gap-2 rounded-full bg-black px-6 py-3 text-white">
            Submit
            <span className="size-[18px]">
              <Arrow color="#ffffff" />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
