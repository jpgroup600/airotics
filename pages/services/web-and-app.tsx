import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import Head from "next/head";

const WebAndAppPage = () => {
  const webAppServices = [
    {
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using modern frameworks and technologies that deliver exceptional user experiences and performance.",
      image: "/services/services/web-dev.webp",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating native and cross-platform mobile applications that engage users and drive business growth across iOS and Android platforms.",
      image: "/services/services/creative-web-design.webp",
    },
    {
      title: "Progressive Web Apps",
      description:
        "We develop advanced PWAs that combine the best of web and mobile - delivering app-like experiences through modern web technologies.",
      image: "/services/services/e-commerce.webp",
    },
    {
      title: "E-Commerce Platforms",
      description:
        "Use cutting-edge development and optimization to your advantage, transforming online visitors into loyal customers.",
      image: "/services/services/e-commerce.webp",
    },
    {
      title: "API Integration",
      description:
        "Seamless integration solutions that connect systems, streamline workflows and maximize efficiency across platforms.",
      image: "/services/services/wordpress.webp",
    },
  ];

  return (
    <>
      <Head>
        <title>Kota Application | Web and App</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Welcome to the <span className="font-bold">digital</span>{" "}
              revolution.
            </>
          }
          mainImageSrc="/services/hero/main.webp"
          description="Crafting the future of web and mobile applications with innovative design and cutting-edge development technologies."
          bentoOneImg="/services/bento/0.webp"
          bentoTwoImg="/services/bento/1.webp"
          bentoThreeImg="/services/bento/3.webp"
          bentoFourImg="/services/bento/2.webp"
          naviData={[
            "Web and app",
            "Web development",
            "Mobile app development",
            "Progressive web apps",
            "E-commerce platforms",
            "API integration",
          ]}
        />
        <Intro
          heading="Stunning applications that supercharge your business."
          description="Don't just be noticed – become unmissable, with captivating web and mobile applications that stop people in their tracks."
        />
        <Service services={webAppServices} />
        <Result />
        <Workflow />
        <Faqs />
        <Interested />
      </div>
    </>
  );
};

export default WebAndAppPage;

