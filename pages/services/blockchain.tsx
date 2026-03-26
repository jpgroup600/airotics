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
      image: "/services/blockchain/service-1.jpg",
    },
    {
      title: "Smart Contract Solutions",
      description:
        "Creating secure and efficient smart contracts that automate processes and enable trustless transactions across various industries.",
      image: "/services/blockchain/service-2.jpg",
    },
    {
      title: "DeFi Platforms",
      description:
        "We develop decentralized finance solutions that deliver impact - not just enabling transactions, but revolutionizing financial systems.",
      image: "/services/blockchain/service-3.jpg",
    },
    {
      title: "NFT Marketplaces",
      description:
        "Use blockchain technology and innovation to your advantage, turning digital assets into valuable opportunities.",
      image: "/services/blockchain/service-4.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Airotics Application | Blockchain</title>
      </Head>
      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Welcome to the <span className="font-bold">blockchain</span>{" "}
              future.
            </>
          }
          mainImageSrc="/services/blockchain/hero-main.jpg"
          description="Transforming businesses with decentralized solutions and cutting-edge blockchain technology that drives innovation and trust."
          bentoOneImg="/services/blockchain/bento-0.jpg"
          bentoTwoImg="/services/blockchain/bento-1.jpg"
          bentoThreeImg="/services/blockchain/bento-2.jpg"
          bentoFourImg="/services/blockchain/bento-3.jpg"
          bentoFiveImg="/services/blockchain/bento-4.jpg"
          bentoSixImg="/services/blockchain/bento-5.jpg"
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
        {/* <Result /> */}
        <Workflow />
        <Faqs />
        <Interested />
      </div>
    </>
  );
};

export default BlockchainPage;
