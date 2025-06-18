import Card from "./Card";
import DisplayText from "./DisplayText";
import { skills } from "./skills";

const Skill = () => {
  return (
    <div className="overflow-x-hidden pb-6 lg:pb-36">
      <section className="max-w-9xl 2xl:max-w-10xl 2xl:px-7.5-percent lg:px-7-percent mx-auto flex flex-col px-[26px] lg:min-h-screen">
        <DisplayText />
        <div className="flex flex-col">
          {skills.map((elem, index) => {
            return <Card {...elem} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Skill;
