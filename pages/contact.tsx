import Form from "@/components/Contact/Form/Form";
import Hero from "@/components/Contact/Hero/Hero";
import Information from "@/components/Contact/Information/Information";
import Extro from "@/components/Home/Extro/Extro";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Airotics Application | Contact</title>
      </Head>
      <video
        className="video-load fixed inset-0 -z-10 h-full w-full object-cover"
        src="/home/background.mp4"
        loop
        muted
        playsInline
        autoPlay
      />
      <Hero />
      <Form />
      <Information />
      <Extro />
    </>
  );
};

export default ContactPage;


