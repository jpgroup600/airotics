import Form from "@/components/Contact/Form/Form";
import Hero from "@/components/Contact/Hero/Hero";
import Information from "@/components/Contact/Information/Information";
import Extro from "@/components/Home/Extro/Extro";
import SEO from "@/components/Common/SEO";
import { WebPageSchema } from "@/components/Common/StructuredData";
import { SITE_URL } from "@/lib/seo";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with Airotics"
        description="Contact Airotics for AI and robotics solutions. Get in touch with our team to discuss your project and learn how we can help transform your business."
        keywords="contact Airotics, get in touch, AI consultation, robotics consultation, contact form"
        canonical={`${SITE_URL}/contact`}
      />

      <WebPageSchema
        name="Contact Airotics"
        description="Get in touch with Airotics for AI and robotics solutions"
        url={`${SITE_URL}/contact`}
      />
      <video
        className="video-load fixed inset-0 -z-10 h-full w-full object-cover object-[72%_center] lg:object-center"
        src="/home/background.mp4"
        loop
        muted
        playsInline
        autoPlay
      />
      <Hero />
      <Form />
      {/* <Information /> */}
      <Extro />
    </>
  );
};

export default ContactPage;


