import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import Head from "next/head";

const MarketingPage = () => {
  const marketingServices = [
    {
      title: "Digital Marketing Strategy",
      description:
        "Developing comprehensive marketing strategies that align with your business goals and drive measurable results across all digital channels.",
      image: "/services/services/creative-web-design.webp",
    },
    {
      title: "Social Media Marketing",
      description:
        "Creating engaging social media campaigns that build brand awareness, foster community and drive conversions across platforms.",
      image: "/services/services/web-dev.webp",
    },
    {
      title: "Content Marketing",
      description:
        "We produce compelling content that delivers impact - not just telling your story, but building your brand presence.",
      image: "/services/services/copywriting.webp",
    },
    {
      title: "SEO & SEM",
      description:
        "Use search engine optimization and marketing to your advantage, turning potential customers into committed clients.",
      image: "/services/services/e-commerce.webp",
    },
    {
      title: "Marketing Analytics",
      description:
        "Data-driven marketing insights that optimize campaigns, improve ROI and maximize your marketing effectiveness.",
      image: "/services/services/wordpress.webp",
    },
  ];

  return (
    <>
      <Head>
        <title>Kota Application | Marketing</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Show them who you <span className="font-bold">really are.</span>
            </>
          }
          mainImageSrc="/services/digital-marketing/main.webp"
          description="Create an instantly recognizable, unique brand presence that tells your customers who you are and leaves a lasting impression."
          bentoOneImg="/services/digital-marketing/bento/0.webp"
          bentoTwoImg="/services/digital-marketing/bento/1.webp"
          bentoThreeImg="/services/digital-marketing/bento/3.webp"
          bentoFourImg="/services/digital-marketing/bento/2.webp"
          naviData={[
            "Marketing",
            "Digital marketing strategy",
            "Social media marketing",
            "Content marketing",
            "SEO & SEM",
            "Marketing analytics",
          ]}
        />
        <Intro
          heading="Powerful marketing campaigns that drive your growth."
          description="Don't just compete – dominate, with strategic marketing solutions that capture attention and deliver measurable results."
        />
        <Service services={marketingServices} />
        <Result />
        <Workflow />
        <Faqs />
        <Interested />
      </div>
    </>
  );
};

export default MarketingPage;

