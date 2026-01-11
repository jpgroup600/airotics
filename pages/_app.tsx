import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App({ Component, pageProps, router }: AppProps) {
  useGSAP(() => {
    gsap.fromTo(
      ".page-transition",
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, [router.asPath]);

  return (
    <Layout>
      <div className="page-transition">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
