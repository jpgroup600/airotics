import Link from "next/link";
import { Arrow } from "./Svgs";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/router";
import Image from "next/image";

type Rgba = { r: number; g: number; b: number; a: number };

const DARK_THRESHOLD = 0.6;
const SAMPLE_Y = 42;
const EDGE_SAMPLE_X = 90;

const LEFT_DARK_THEME = {
  logo: "brightness-0 invert",
  celebrationText: "text-white",
};
const LEFT_LIGHT_THEME = { logo: "", celebrationText: "text-black" };
const RIGHT_DARK_THEME = {
  hireUsButton: "bg-white text-black hover:bg-black hover:text-white",
  hireUsArrow: "text-black group-hover:text-white",
  menuButton: "border-white bg-black lg:bg-transparent",
  menuLine: "bg-white",
};
const RIGHT_LIGHT_THEME = {
  hireUsButton: "bg-black text-white hover:bg-white hover:text-black",
  hireUsArrow: "text-white group-hover:text-black",
  menuButton: "border-black bg-white lg:bg-transparent",
  menuLine: "bg-black",
};

const parseRgba = (value: string): Rgba | null => {
  const match = value.match(
    /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i,
  );
  if (!match) return null;
  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: match[4] ? Number(match[4]) : 1,
  };
};

const luminance = ({ r, g, b }: Pick<Rgba, "r" | "g" | "b">) =>
  (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

const isDark = (rgb: Pick<Rgba, "r" | "g" | "b">) =>
  luminance(rgb) < DARK_THRESHOLD;

const getVideoSourcePoint = (
  video: HTMLVideoElement,
  sampleX: number,
  sampleY: number,
) => {
  const viewportW = video.clientWidth || window.innerWidth;
  const viewportH = video.clientHeight || window.innerHeight;
  if (!viewportW || !viewportH || !video.videoWidth || !video.videoHeight)
    return null;

  const videoAspect = video.videoWidth / video.videoHeight;
  const viewportAspect = viewportW / viewportH;
  const isWider = videoAspect > viewportAspect;
  const renderedW = isWider ? viewportH * videoAspect : viewportW;
  const renderedH = isWider ? viewportH : viewportW / videoAspect;
  const offsetX = isWider ? (renderedW - viewportW) / 2 : 0;
  const offsetY = isWider ? 0 : (renderedH - viewportH) / 2;
  const clampedX = Math.min(Math.max(sampleX + offsetX, 0), renderedW - 1);
  const clampedY = Math.min(Math.max(sampleY + offsetY, 0), renderedH - 1);

  return {
    x: Math.round((clampedX / renderedW) * (video.videoWidth - 1)),
    y: Math.round((clampedY / renderedH) * (video.videoHeight - 1)),
  };
};

const Header = () => {
  const router = useRouter();
  //references
  const container = useRef<HTMLElement>(null);

  //states
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isLeftDarkBackground, setIsLeftDarkBackground] = useState(false);
  const [isRightDarkBackground, setIsRightDarkBackground] = useState(false);

  //animation
  const { contextSafe } = useGSAP(() => {}, { scope: container });

  //functions
  const handleMenuEnable = contextSafe(() => {
    setIsMenuActive(true);

    gsap
      .timeline({ defaults: { ease: "power4.in" } })
      .to(".menu-btn-line-1", { top: "50%", rotate: 45 })
      .to(".menu-btn-line-2", { top: "50%", rotate: -45 }, "<")
      .set(".menu", { pointerEvents: "auto" })
      .set(".menu-cover", { pointerEvents: "auto" })
      .to(".menu-cover", { opacity: 1 }, "<")
      .to(".menu", { scale: 1, opacity: 1 }, "<")
      .to(".menu-links", { opacity: 1, stagger: 0.1 })
      .to(".menu-inside-btn", { scale: 1, ease: "bounce.out" });
  });

  const handleMenuDisable = contextSafe(() => {
    setIsMenuActive(false);
    setIsSubMenuOpen(false);

    gsap
      .timeline({ defaults: { ease: "power4.out" } })
      .to(".sub-menu", { maxHeight: 0 })
      .to(".menu-inside-btn", { scale: 0 })
      .to(".menu-links", { opacity: 0 }, "<")
      .set(".menu", { pointerEvents: "none" })
      .set(".menu-cover", { pointerEvents: "none" })
      .to(".menu", { scale: 0, opacity: 0 })
      .to(".menu-cover", { opacity: 0 }, "<")
      .to(".menu-btn-line-1", { top: "calc(50% - 3px)", rotate: 0 }, "<")
      .to(".menu-btn-line-2", { top: "calc(50% + 3px)", rotate: 0 }, "<");
  });

  const handleClick = () => {
    isMenuActive ? handleMenuDisable() : handleMenuEnable();
  };

  const handleSubMenuToggle = contextSafe(() => {
    setIsSubMenuOpen((prev) => {
      const next = !prev;
      gsap.to(".sub-menu", {
        maxHeight: next ? 1000 : 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
      return next;
    });
  });

  const handleContactClick = () => {
    handleMenuDisable();
    router.push("/contact");
  };

  useEffect(() => {
    const fixedBgVideo = document.querySelector(
      "video.fixed",
    ) as HTMLVideoElement | null;
    const sampleCanvas = Object.assign(document.createElement("canvas"), {
      width: 1,
      height: 1,
    });
    const sampleContext = sampleCanvas.getContext("2d", {
      willReadFrequently: true,
    });

    const detectVideoPointDarkness = (
      video: HTMLVideoElement,
      sampleX: number,
      sampleY: number,
    ) => {
      if (!sampleContext || video.readyState < 2) return null;
      const point = getVideoSourcePoint(video, sampleX, sampleY);
      if (!point) return null;

      try {
        sampleContext.clearRect(0, 0, 1, 1);
        sampleContext.drawImage(video, point.x, point.y, 1, 1, 0, 0, 1, 1);
        const [r, g, b] = sampleContext.getImageData(0, 0, 1, 1).data;
        return isDark({ r, g, b });
      } catch {
        return null;
      }
    };

    const detectPointDarkness = (
      sampleX: number,
      sampleY: number,
      header: HTMLElement,
    ) => {
      const stack = document.elementsFromPoint(sampleX, sampleY);

      for (const node of stack) {
        if (header.contains(node)) continue;
        const element = node as HTMLElement;

        if (element.tagName === "VIDEO") {
          const isDark = detectVideoPointDarkness(
            element as HTMLVideoElement,
            sampleX,
            sampleY,
          );
          if (isDark !== null) return isDark;
          continue;
        }

        if (element.tagName === "CANVAS") continue;

        const color = parseRgba(getComputedStyle(element).backgroundColor);
        if (!color || color.a < 0.08) continue;
        return isDark(color);
      }

      if (fixedBgVideo)
        return detectVideoPointDarkness(fixedBgVideo, sampleX, sampleY);
      return null;
    };

    const detectBackground = () => {
      const header = container.current;
      if (!header) return;

      const leftSampleX = Math.min(EDGE_SAMPLE_X, window.innerWidth - 1);
      const rightSampleX = Math.max(window.innerWidth - EDGE_SAMPLE_X, 1);
      const bodyColor = parseRgba(
        getComputedStyle(document.body).backgroundColor,
      );
      const fallbackIsDark = bodyColor ? isDark(bodyColor) : false;

      setIsLeftDarkBackground(
        detectPointDarkness(leftSampleX, SAMPLE_Y, header) ?? fallbackIsDark,
      );
      setIsRightDarkBackground(
        detectPointDarkness(rightSampleX, SAMPLE_Y, header) ?? fallbackIsDark,
      );
    };

    let rafId = 0;
    const requestDetect = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(detectBackground);
    };

    requestDetect();
    window.addEventListener("scroll", requestDetect, { passive: true });
    window.addEventListener("resize", requestDetect);
    fixedBgVideo?.addEventListener("loadeddata", requestDetect);
    fixedBgVideo?.addEventListener("timeupdate", requestDetect);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestDetect);
      window.removeEventListener("resize", requestDetect);
      fixedBgVideo?.removeEventListener("loadeddata", requestDetect);
      fixedBgVideo?.removeEventListener("timeupdate", requestDetect);
    };
  }, [router.asPath]);

  const leftThemeStyles = isLeftDarkBackground
    ? LEFT_DARK_THEME
    : LEFT_LIGHT_THEME;
  const rightThemeStyles = isRightDarkBackground
    ? RIGHT_DARK_THEME
    : RIGHT_LIGHT_THEME;

  return (
    <header
      ref={container}
      className="fixed top-0 left-1/2 z-40 flex w-full max-w-[2450px] -translate-x-1/2 items-center justify-between p-6 lg:p-[26px]"
    >
      <div className="flex items-center justify-center gap-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/home/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className={`object-contain transition-all duration-300 lg:h-[80px] lg:w-[80px] ${leftThemeStyles.logo}`}
          />
        </Link>
        <p
          className={`hidden text-xs uppercase transition-colors lg:block ${leftThemeStyles.celebrationText}`}
        >
          Celebrating 5 years : 2020 - 2025
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={handleContactClick}
          className={`group hidden h-[52px] cursor-pointer items-center justify-center gap-4 rounded-full px-5 text-lg transition-all duration-300 lg:flex ${rightThemeStyles.hireUsButton}`}
        >
          Hire us{" "}
          <span className="inline-flex h-4 w-[18px] origin-center transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-45deg]">
            <Arrow
              className={`transition-colors duration-300 ${rightThemeStyles.hireUsArrow}`}
            />
          </span>
        </button>
        <button
          onClick={handleClick}
          className={`menu-btn relative z-20 h-[52px] w-[52px] cursor-pointer rounded-full border-2 transition-colors ${rightThemeStyles.menuButton}`}
        >
          <span
            className={`menu-btn-line-1 absolute top-[calc(50%-3px)] left-1/2 block h-0.5 w-6 -translate-1/2 ${rightThemeStyles.menuLine}`}
          ></span>
          <span
            className={`menu-btn-line-2 absolute top-[calc(50%+3px)] left-1/2 block h-0.5 w-6 -translate-1/2 ${rightThemeStyles.menuLine}`}
          ></span>
        </button>
      </div>
      <div
        onClick={handleMenuDisable}
        className="menu-cover pointer-events-none absolute inset-0 h-screen w-screen bg-black/20 opacity-0"
      ></div>
      <div className="menu pointer-events-none absolute top-[18px] right-[18px] z-10 flex min-w-[304px] origin-top-right scale-0 flex-col rounded-4xl bg-white px-[30px] pt-[60px] pb-[30px] opacity-0 lg:top-[22px]">
        <div className="flex flex-col">
          <Link
            onClick={handleMenuDisable}
            className="menu-links mb-2 text-2xl text-black capitalize opacity-0"
            href="/agency"
          >
            Our Team
          </Link>
          <button
            onClick={handleSubMenuToggle}
            className="menu-links mb-2 cursor-pointer text-left text-2xl text-black capitalize opacity-0"
          >
            Services
          </button>
          <div className="sub-menu flex max-h-0 flex-col gap-0.5 overflow-hidden">
            <Link
              onClick={handleMenuDisable}
              className="font-light"
              href="/services/web-and-app"
            >
              Web and app
            </Link>
            <Link
              onClick={handleMenuDisable}
              className="font-light"
              href="/services/ai"
            >
              AI
            </Link>
            <Link
              onClick={handleMenuDisable}
              className="font-light"
              href="/services/blockchain"
            >
              Blockchain
            </Link>
            <Link
              onClick={handleMenuDisable}
              className="mb-2 font-light"
              href="/services/marketing"
            >
              Marketing
            </Link>
          </div>
          <Link
            onClick={handleMenuDisable}
            className="menu-links mb-2 text-2xl text-black capitalize opacity-0"
            href="/ourwork"
          >
            Our Work
          </Link>

          <Link
            onClick={handleMenuDisable}
            className="menu-links mb-2 text-2xl text-black capitalize opacity-0"
            href="/ai-automation"
          >
            AI automation
          </Link>

          <Link
            onClick={handleMenuDisable}
            className="menu-links text-2xl text-black capitalize opacity-0"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <button className="menu-inside-btn mt-7 flex scale-0 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-black px-5 py-3.5">
          <Link onClick={handleMenuDisable} href="/contact">
            Start your projects{" "}
          </Link>
          <span className="h-3 w-3.5">
            <Arrow />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
