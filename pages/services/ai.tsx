import Interested from "@/components/Agency/Interested/Interested";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Services/Hero/Hero";
import Intro from "@/components/Services/Intro/Intro";
import Result from "@/components/Services/Result/Result";
import Service from "@/components/Services/Service/Service";
import Workflow from "@/components/Services/Workflow/Workflow";
import SEO from "@/components/Common/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/Common/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const AIPage = () => {
  const aiServices = [
    {
      title: "AI Strategy & Consulting",
      description:
        "Leveraging cutting-edge artificial intelligence technologies and innovative frameworks, we develop strategic solutions that transform businesses and drive meaningful outcomes.",
      image: "/services/services/creative-web-design.webp",
    },
    {
      title: "Machine Learning Solutions",
      description:
        "Built with advanced algorithms and intelligent automation systems, we create predictive models and smart applications that optimize processes and unlock new possibilities.",
      image: "/services/services/web-dev.webp",
    },
    {
      title: "AI Content Generation",
      description:
        "We produce intelligent content that delivers impact - not just communicating your message, but amplifying your presence.",
      image: "/services/services/copywriting.webp",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Harness data intelligence and machine learning insights to your advantage, converting raw information into actionable strategies.",
      image: "/services/services/e-commerce.webp",
    },
    {
      title: "Custom AI Integration",
      description:
        "Bespoke artificial intelligence systems that transform operations, experiences and outcomes.",
      image: "/services/services/wordpress.webp",
    },
  ];

  return (
    <>
      <SEO
        title="AI Services - Artificial Intelligence Solutions"
        description="Transform your business with Airotics' AI services. From AI strategy and consulting to machine learning solutions, we deliver cutting-edge artificial intelligence technology."
        keywords="AI services, artificial intelligence, machine learning, AI consulting, AI strategy, AI solutions, AI development, AI integration"
        canonical={`${SITE_URL}/services/ai`}
        ogImage="/services/ai-og-image.png"
      />

      <ServiceSchema
        name="AI Services"
        description="Comprehensive AI and machine learning solutions for business transformation"
        provider={{
          name: SITE_NAME,
          url: SITE_URL,
        }}
        serviceType="Artificial Intelligence Solutions"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: "AI Services", url: `${SITE_URL}/services/ai` },
        ]}
      />

      <div className="bg-[#efefef]">
        <Hero
          heading={
            <>
              Welcome to the <span className="font-bold">AI revolution</span>.
            </>
          }
          mainImageSrc="/home/logo.png"
          description="Transforming businesses with intelligent automation and cutting-edge artificial intelligence solutions that drive innovation."
          bentoOneImg="/services/bento/0.webp"
          bentoTwoImg="/services/bento/1.webp"
          bentoThreeImg="/services/bento/3.webp"
          bentoFourImg="/services/bento/2.webp"
          bentoFiveImg="/services/bento/4.webp"
           bentoSixImg="/services/bento/5.webp"
          naviData={[
            "AI Services",
            "AI Strategy & Consulting",
            "Machine Learning Solutions",
            "AI Content Generation",
            "AI-Powered Analytics",
            "Custom AI Integration",
          ]}
        />
        <Intro
          heading="Intelligent solutions that revolutionize your business."
          description="Don't just adapt to change – lead the transformation, with powerful AI systems that reshape industries and redefine possibilities."
        />
        <Service services={aiServices} />
        <Result />
        <Workflow />
        <Faqs />
        <Interested />
      </div>
    </>
  );
};

export default AIPage;

