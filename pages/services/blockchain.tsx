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
      image: "/page/coin/1.png",
    },
    {
      title: "Smart Contract Solutions",
      description:
        "Creating secure and efficient smart contracts that automate processes and enable trustless transactions across various industries.",
      image: "/page/coin/2.png",
    },
    {
      title: "DeFi Platforms",
      description:
        "We develop decentralized finance solutions that deliver impact - not just enabling transactions, but revolutionizing financial systems.",
      image: "/page/coin/3.png",
    },
    {
      title: "NFT Marketplaces",
      description:
        "Use blockchain technology and innovation to your advantage, turning digital assets into valuable opportunities.",
      image: "/page/coin/4.png",
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
          mainImageSrc="/home/logo.png"
          description="Transforming businesses with decentralized solutions and cutting-edge blockchain technology that drives innovation and trust."
          bentoOneImg="/services/bento/0.webp"
          bentoTwoImg="/services/bento/1.webp"
          bentoThreeImg="/services/bento/3.webp"
          bentoFourImg="/services/bento/2.webp"
          bentoFiveImg="/services/bento/4.webp"
          bentoSixImg="/services/bento/5.webp"
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

