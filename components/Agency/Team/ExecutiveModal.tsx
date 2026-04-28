import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import type { Executive } from "./data";

interface ExecutiveModalProps {
  executive: Executive | null;
  onClose: () => void;
}

export default function ExecutiveModal({
  executive,
  onClose,
}: ExecutiveModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const didPushHistoryRef = useRef(false);
  const closingFromPopRef = useRef(false);

  const isOpen = executive !== null;

  useEffect(() => {
    if (!isOpen) return;

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    if (!didPushHistoryRef.current) {
      window.history.pushState({ modal: "executive" }, "", window.location.href);
      didPushHistoryRef.current = true;
    }

    const onPopState = () => {
      if (!isOpen) return;
      closingFromPopRef.current = true;
      onClose();
    };
    window.addEventListener("popstate", onPopState);

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      window.removeEventListener("popstate", onPopState);
      if (didPushHistoryRef.current && !closingFromPopRef.current) {
        window.history.back();
      }
      didPushHistoryRef.current = false;
      closingFromPopRef.current = false;
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    overlayRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      easing: "ease-out",
      fill: "both",
    });
    panelRef.current?.animate(
      [
        { opacity: 0, transform: "translateY(16px) scale(0.97)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      { duration: 380, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" },
    );
  }, [isOpen]);

  if (typeof document === "undefined" || !isOpen || !executive) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md lg:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[10001] rounded-full border border-white/20 bg-black/70 p-2 text-white/70 transition hover:text-white lg:hidden"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        ref={panelRef}
        data-lenis-prevent
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 hidden rounded-full border border-white/20 bg-black/50 p-2 text-white/70 transition hover:text-white lg:block"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col sm:flex-row">
          <div className="relative h-60 w-full flex-shrink-0 sm:h-auto sm:w-56">
            <Image
              src={executive.image}
              alt={executive.name}
              fill
              className="object-cover object-center brightness-75"
              sizes="(max-width: 640px) 100vw, 224px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent sm:bg-gradient-to-r" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-5">
              <span className="text-xs tracking-[0.3em] text-white/60 uppercase">
                {executive.post.split("").join(" ")}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 px-6 py-8 sm:px-8">
            <div>
              <h2 className="text-2xl font-light text-white lg:text-3xl">
                {executive.name}
              </h2>
              <p className="mt-1 text-sm tracking-widest text-white/40 uppercase">
                {executive.post}
              </p>
            </div>

            <ul className="space-y-3">
              {executive.history.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/75">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
