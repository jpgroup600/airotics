import Blog from "@/components/Home/Blog/Blog";
import Extro from "@/components/Home/Extro/Extro";
import Faqs from "@/components/Home/Faqs/Faqs";
import Hero from "@/components/Home/Hero/Hero";
import Partners from "@/components/Home/Partners/Partners";
import Services from "@/components/Home/Services/Services";
import Skill from "@/components/Home/Skill/Skill";
import Work from "@/components/Home/Work/Work";
import SEO from "@/components/Common/SEO";
import { OrganizationSchema, WebSiteSchema } from "@/components/Common/StructuredData";
import { SITE_URL } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <SEO
        title="Airotics - AI & Robotics Solutions"
        description="Leading provider of AI and robotics solutions. Transform your business with cutting-edge artificial intelligence, machine learning, and automation technology."
        keywords="AI, robotics, artificial intelligence, automation, machine learning, AI solutions, robotics solutions, AI development, automation services"
        canonical={SITE_URL}
      />

      {/* Structured Data for Organization */}
      <OrganizationSchema
        description="Airotics provides cutting-edge AI and robotics solutions for businesses"
        sameAs={[
          // Add your social media URLs here
          // 'https://twitter.com/airotics',
          // 'https://linkedin.com/company/airotics',
          // 'https://facebook.com/airotics',
        ]}
      />

      {/* Structured Data for Website */}
      <WebSiteSchema
        description="AI and robotics solutions for modern businesses"
      />
      <video
        className="fixed inset-0 -z-10 h-full w-full object-cover object-[72%_center] lg:object-center"
        src="/home/background.mp4"
        loop
        muted
        playsInline
        autoPlay
      />
      <Hero />
      <Services />
      <Skill />
      <Work />
      <Partners />
      {/* <Review /> */}
      {/* <Blog /> */}
      <Faqs />
      <Extro />
    </>
  );
}


