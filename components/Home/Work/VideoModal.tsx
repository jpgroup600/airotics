import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  src: string | null;
  onClose: () => void;
};

const VideoModal: React.FC<Props> = ({ isOpen, src, onClose }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen || !src) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close video"
        className="fixed left-1/2 top-16 z-[10000] h-12 w-12 -translate-x-1/2 rounded-full bg-white text-2xl font-bold text-black"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ✕
      </button>
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <video
          className="w-full max-h-[80vh] rounded-2xl bg-black"
          src={src}
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>,
    document.body,
  );
};

export default VideoModal;


