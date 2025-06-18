import Blog from "@/components/Home/Blog/Blog";
import Extro from "@/components/Home/Extro/Extro";
import Hero from "@/components/Home/Hero/Hero";
import Partners from "@/components/Home/Partners/Partners";
import Services from "@/components/Home/Services/Services";
import Skill from "@/components/Home/Skill/Skill";
import Work from "@/components/Home/Work/Work";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kota Application</title>
      </Head>
      <Hero />
      <Services />
      <Skill />
      <Work />
      <Partners />
      <Blog />
      <Extro />
    </>
  );
}
