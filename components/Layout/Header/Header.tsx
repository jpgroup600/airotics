import Link from "next/link";
import { links } from "./links";
import { Arrow } from "./Svgs";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  //references
  const container = useRef<HTMLElement>(null);

  //states
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

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
    if (isMenuActive) handleMenuDisable();
    else handleMenuEnable();
  };

  const handleSubMenuToggle = contextSafe(() => {
    setIsSubMenuOpen((prev) => !prev);

    gsap.to(".sub-menu", {
      maxHeight: isSubMenuOpen ? 0 : 1000,
      duration: 0.5,
      ease: "power4.inOut",
    });
  });

  return (
    <header
      ref={container}
      className="fixed top-0 left-1/2 z-40 flex w-full max-w-[2450px] -translate-x-1/2 items-center justify-between p-6 lg:p-[26px]"
    >
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/"
          className="relative h-[52px] w-[52px] border-4 border-black bg-white lg:h-[60px] lg:w-[60px] lg:bg-transparent flex items-center justify-center "
        > AI</Link>
        <p className="hidden text-xs uppercase lg:block">
        Celebrating 5 years  : 2020 - 2025
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        
        <button className="hidden h-[52px] cursor-pointer items-center justify-center gap-4 rounded-full bg-black px-5 text-lg text-white lg:flex">
        <Link
            onClick={handleMenuDisable}
            
            href="/contact"
          >
         Hire us{" "}

         </Link>
          <span className="h-4 w-[18px]">
            <Arrow color="#ffffff" />
          </span>
        </button>
        <button
          onClick={handleClick}
          className="menu-btn relative z-20 h-[52px] w-[52px] cursor-pointer rounded-full border-2 border-black bg-white lg:bg-transparent"
        >
          <span className="menu-btn-line-1 absolute top-[calc(50%-3px)] left-1/2 block h-0.5 w-6 -translate-1/2 bg-black"></span>
          <span className="menu-btn-line-2 absolute top-[calc(50%+3px)] left-1/2 block h-0.5 w-6 -translate-1/2 bg-black"></span>
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
            Agency
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
            className="menu-links text-2xl text-black capitalize opacity-0"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <button className="menu-inside-btn mt-7 flex scale-0 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-black px-5 py-3.5">
        <Link
            onClick={handleMenuDisable}
           
            href="/contact"
          >
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
