// ImagePopup.tsx
"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useCallback } from "react";
import { PortfolioItem } from "./Portfolio";

interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  image: StaticImageData | null;
  title: string;
  categoryItems: PortfolioItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({
  isOpen,
  onClose,
  image,
  title,
  categoryItems,
  currentIndex,
  onNavigate,
}) => {
  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Prev Button */}
      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white"
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* Next Button */}
      {currentIndex < categoryItems.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white"
          aria-label="Next"
        >
          ›
        </button>
      )}

      {/* Image */}
      <div className="max-w-[95vw] max-h-[90vh] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="object-contain w-auto h-auto max-h-[90vh] max-w-[95vw] rounded-lg"
          priority
        />
      </div>

      {/* Caption */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white px-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-80">
          {currentIndex + 1} of {categoryItems.length}
        </p>
      </div>
    </div>
  );
};

export default ImagePopup;
