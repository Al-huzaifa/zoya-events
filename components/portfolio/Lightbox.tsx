"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-xl flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-all z-50 group"
        >
          <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 md:top-8 md:left-10 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium tracking-widest z-50">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-white hover:text-black transition-all z-50 group"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Main Image Container */}
        <div
          className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                quality={100}
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-white hover:text-black transition-all z-50 group"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Thumbnails (Optional: shown on desktop) */}
        <div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 px-4 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => {
                const diff = idx - currentIndex;
                if(diff > 0) { for(let i=0; i<diff; i++) onNext(); }
                if(diff < 0) { for(let i=0; i<Math.abs(diff); i++) onPrev(); }
              }}
              className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                idx === currentIndex
                  ? "border-2 border-[#D4AF37] scale-110 opacity-100 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "border border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={src} alt={`Thumb ${idx}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
