import Content from "./Content";
import Grid from "./Grid";

const Work = () => {
  return (
    <section className="h-full w-full">
      <div className="max-w-9xl 2xl:max-w-10xl px-7-percent 2xl:px-7.5-percent mx-auto w-full bg-black pt-8 pb-20 lg:pt-48">
        <Content />
      </div>
      <Grid />
    </section>
  );
};

export default Work;
