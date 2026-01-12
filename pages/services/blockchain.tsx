import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import Head from "next/head";

const BlockchainPage = () => {
  const blockchainServices = [
    {
      title: "Blockchain Development",
      description:
        "Building decentralized applications and smart contracts using cutting-edge blockchain technologies that provide transparency, security and trust.",
      image: "/services/services/web-dev.webp",
    },
    {
      title: "Smart Contract Solutions",
      description:
        "Creating secure and efficient smart contracts that automate processes and enable trustless transactions across various industries.",
      image: "/services/services/creative-web-design.webp",
    },
    {
      title: "DeFi Platforms",
      description:
        "We develop decentralized finance solutions that deliver impact - not just enabling transactions, but revolutionizing financial systems.",
      image: "/services/services/copywriting.webp",
    },
    {
      title: "NFT Marketplaces",
      description:
        "Use blockchain technology and innovation to your advantage, turning digital assets into valuable opportunities.",
      image: "/services/services/e-commerce.webp",
    },
  ];

  return (
    <>
      <Head>
        <title>Kota Application | Blockchain</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Welcome to the <span className="font-bold">blockchain</span>{" "}
              future.
            </>
          }
          mainImageSrc="/services/hero/main.webp"
          description="Transforming businesses with decentralized solutions and cutting-edge blockchain technology that drives innovation and trust."
          bentoOneImg="/services/bento/0.webp"
          bentoTwoImg="/services/bento/1.webp"
          bentoThreeImg="/services/bento/3.webp"
          bentoFourImg="/services/bento/2.webp"
          naviData={[
            "Blockchain",
            "Blockchain development",
            "Smart contract solutions",
            "DeFi platforms",
            "NFT marketplaces",
          ]}
        />
        <Intro
          heading="Decentralized solutions that revolutionize your operations."
          description="Don't just adapt to change – lead the transformation, with powerful blockchain systems that reshape industries and redefine trust."
        />
        <Service services={blockchainServices} />
        <Result />
        <Workflow />
        <Faqs />
        <Interested />
      </div>
    </>
  );
};

export default BlockchainPage;

