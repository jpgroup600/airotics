import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import type { AppProps } from "next/app";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      prevent: (node) => !!node.closest("[data-lenis-prevent]"),
    });
    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

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
