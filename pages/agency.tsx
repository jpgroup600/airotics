import Approach from "@/components/Agency/Approach/Approach";
import Award from "@/components/Agency/Award/Award";
import Hero from "@/components/Agency/Hero/Hero";
import Interested from "@/components/Agency/Interested/Interested";
import Mission from "@/components/Agency/Mission/Mission";
import Partners from "@/components/Agency/Partners/Partners";
import Team from "@/components/Agency/Team/Team";
import SEO from "@/components/Common/SEO";
import { WebPageSchema } from "@/components/Common/StructuredData";
import { SITE_URL } from "@/lib/seo";


const AgencyPage = () => {

  return (
    <>
      <SEO
        title="About Airotics - Our Agency"
        description="Learn about Airotics, our mission, approach, and team. We're dedicated to delivering innovative AI and robotics solutions that transform businesses."
        keywords="about Airotics, AI agency, robotics company, our mission, our team, AI experts"
        canonical={`${SITE_URL}/agency`}
      />

      <WebPageSchema
        name="About Airotics Agency"
        description="Learn about our mission, approach, and expert team in AI and robotics"
        url={`${SITE_URL}/agency`}
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
      <Mission />
      <Approach />
      <Partners />
      {/* <Award /> */}
      <Team />
      <div className="bg-black lg:pt-[5vw]">
        <Interested />
      </div>
    </>
  );
};

export default AgencyPage;

