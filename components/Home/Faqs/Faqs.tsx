import React from "react";
import { questions } from "./questions";
import Card from "./Card";

const Faqs = () => {
  return (
    <div className="bg-black">
      <div className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto flex min-h-screen w-full flex-col bg-black pt-[104px] pb-8 text-white">
        <div className="w-full max-w-3xl 2xl:max-w-4xl">
          <h1 className="mb-3.5 text-[2.5rem] leading-[calc(2.5rem*1.2)] lg:text-[6rem] lg:leading-[calc(6rem*1.2)] 2xl:text-[7.5rem] 2xl:leading-none">
            FAQ&apos;s
          </h1>
          <div className="flex flex-col">
            {questions.map((elem, index) => (
              <Card key={index} {...elem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faqs;
