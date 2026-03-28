"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export type AutomationCase = {
  id: number;
  title: string;
  niche: string;
  challenge: string;
  solutions: string[];
  duration: string;
  thumbnail: string;
  videoSrc: string;
  stack: string[];
  client: string;
  year: string;
  category: string;
};

type Props = {
  isOpen: boolean;
  selectedCase: AutomationCase | null;
  onClose: () => void;
};

export default function AIAutomationModal({
  isOpen,
  selectedCase,
  onClose,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof document === "undefined" || !isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousModalState = document.body.dataset.modalOpen;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.dataset.modalOpen = "true";
    window.dispatchEvent(new CustomEvent("modal-state-change"));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      if (previousModalState === undefined)
        delete document.body.dataset.modalOpen;
      else document.body.dataset.modalOpen = previousModalState;
      window.dispatchEvent(new CustomEvent("modal-state-change"));
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    overlayRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 320,
      easing: "ease-out",
      fill: "both",
    });
    modalRef.current?.animate(
      [
        { opacity: 0, transform: "translateY(10px) scale(0.98)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      { duration: 380, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" },
    );
  }, [isOpen]);

  if (typeof document === "undefined" || !isOpen || !selectedCase) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md lg:p-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        data-lenis-prevent
        role="dialog"
        aria-modal="true"
        aria-label={`${selectedCase.title} case details`}
        className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/20 bg-black/90 text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative border-b border-white/10 bg-white/[0.03] p-6 lg:p-8">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="pr-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90">
                {selectedCase.niche}
              </span>
              <span className="text-sm text-white/60">
                {selectedCase.duration}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
              {selectedCase.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {selectedCase.stack.map((item, index) => (
                <span
                  key={`${selectedCase.id}-header-stack-${index}`}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 p-6 lg:space-y-8 lg:p-8">
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black">
            <video
              className="aspect-video w-full bg-black object-contain"
              controls
              autoPlay
              playsInline
              poster={selectedCase.thumbnail}
            >
              <source src={selectedCase.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/60"></div>
                  Challenges
                </h3>
                <p className="leading-relaxed text-white/75">
                  {selectedCase.challenge}
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/60"></div>
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {selectedCase.solutions.map((item, index) => (
                    <li
                      key={`${selectedCase.id}-solution-${index}`}
                      className="flex items-start gap-3 text-white/75"
                    >
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
                <h3 className="mb-4 text-lg font-semibold">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between gap-4">
                    <span className="text-white/60">Client</span>
                    <span className="text-right font-medium text-white/90">
                      {selectedCase.client}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/60">Year</span>
                    <span className="font-medium text-white/90">
                      {selectedCase.year}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-white/60">Category</span>
                    <span className="text-right font-medium text-white/90">
                      {selectedCase.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6">
                <h3 className="mb-4 text-lg font-semibold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.stack.map((item, index) => (
                    <span
                      key={`${selectedCase.id}-stack-${index}`}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
