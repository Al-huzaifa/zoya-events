"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const SUBMITTED_KEY = "zoya_form_submitted";
const VIDEO_SRC =
  "https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4";

// How much scroll distance drives the video scrub. Taller = slower, more
// deliberate scrub. Tune this once you know your video's length — for a
// ~8-10s clip, 280-320vh feels cinematic without dragging.
const SCROLL_TRACK_VH = 300;

// Delay after the hero clears the viewport before the enquiry card appears.
const POPUP_IDLE_MS = 2500;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDurationRef = useRef(0); // use ref so scroll handler always gets live value

  const [popupVisible, setPopupVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasTriggeredRef = useRef(false);

  const goldText =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]";
  const goldButton =
    "bg-gradient-to-r from-[#BF953F] via-[#F3E779] to-[#B38728]";

  // --- Scroll-scrub the video instead of a canvas frame sequence ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const video = videoRef.current;
    const dur = videoDurationRef.current;
    if (video && dur > 0) {
      video.currentTime = progress * dur;
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMetadata = () => {
      videoDurationRef.current = video.duration || 0;
      // Seek to frame 0 so first frame is visible immediately
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", onMetadata);
    // Force the browser to start downloading the video right away
    video.load();

    return () => video.removeEventListener("loadedmetadata", onMetadata);
  }, []);

  // (viewfinder frame removed per user request)
  const contentOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [1, 1, 1, 0.85]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  // --- Popup: fires once, after hero clears view + a short idle pause ---
  const openPopup = useCallback(() => {
    setPopupVisible(true);
    requestAnimationFrame(() => setIsAnimating(true));
  }, []);

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setPopupVisible(false), 260);
  }, []);

  useEffect(() => {
    let hasSubmitted = false;
    try {
      hasSubmitted = localStorage.getItem(SUBMITTED_KEY) === "true";
    } catch {
      hasSubmitted = false;
    }
    if (hasSubmitted) return;

    const handleScroll = () => {
      if (hasTriggeredRef.current) return;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrolledPastHero = rect.bottom <= window.innerHeight * 0.5;

      if (scrolledPastHero) {
        hasTriggeredRef.current = true;
        window.removeEventListener("scroll", handleScroll);
        idleTimerRef.current = setTimeout(openPopup, POPUP_IDLE_MS);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [openPopup]);

  useEffect(() => {
    if (!popupVisible) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [popupVisible, handleClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/fqTMQChHT8WFaY8X2ktRJb",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            "Created At": new Date().toLocaleString(),
          }),
        }
      );
      if (!response.ok) throw new Error("SheetMonkey request failed");

      setIsSubmitted(true);
      try {
        localStorage.setItem(SUBMITTED_KEY, "true");
      } catch {}
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again or contact us on WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Tall scroll track — the sticky inner hero scrubs through this */}
      <section
        ref={sectionRef}
        className="relative w-full bg-black"
        style={{ height: `${SCROLL_TRACK_VH}vh` }}
      >
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          {/* Video layer */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />

            {/* ── Cinematic vignette: all 4 sides ── */}
            {/* Top fade */}
            <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/90 via-black/50 to-transparent" />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black via-black/60 to-transparent" />
            {/* Left fade */}
            <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-black/70 to-transparent" />
            {/* Right fade */}
            <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black/70 to-transparent" />

            {/* ── Cinematic letterbox bars ── */}
            <div className="absolute inset-x-0 top-0 h-[7vh] bg-black z-10" />
            <div className="absolute inset-x-0 bottom-0 h-[7vh] bg-black z-10" />

            {/* ── Thin gold line on letterbox edges (luxury frame) ── */}
            <div className="absolute inset-x-0 top-[7vh] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-[7vh] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent z-10" />

            {/* ── Film grain — boosted for cinematic feel ── */}
            <div className="absolute inset-0 opacity-[0.06] z-[5]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
          </div>



          {/* Content */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center"
          >
            <span className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#D4AF37] md:text-xs">
              Est. 2015 · Mumbai&apos;s Direct Production House
            </span>

            <h1
              className={`font-serif text-[clamp(2.8rem,9vw,7rem)] font-bold leading-[0.92] tracking-tight ${goldText}`}
            >
              ZOYA EVENTS
            </h1>

            <p className="mt-6 max-w-xl text-sm font-light uppercase tracking-[0.3em] text-[#D4C9A8] md:text-base">
              Infrastructure Built for Events That Cannot Fail
            </p>

            <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <p className="mt-6 max-w-lg text-[15px] font-light leading-relaxed text-[#C9C2AC]">
              German hangars, pagodas, and bespoke structures — engineered,
              fabricated, and deployed in-house for weddings, galas, and
              exhibitions across Mumbai.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio"
                className="rounded-sm border border-[#D4AF37]/60 px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5F1E8] transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
              >
                View Our Work
              </Link>
              <button
                type="button"
                onClick={openPopup}
                className={`rounded-sm px-8 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all hover:scale-[1.02] ${goldButton}`}
              >
                Start Your Enquiry
              </button>
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            style={{ opacity: scrollCueOpacity }}
            className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]/70">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-[#D4AF37]/70 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Corner enquiry card — not a full-screen modal */}
      <AnimatePresence>
        {popupVisible && (
          <div className="fixed bottom-5 right-5 z-[1000] w-[calc(100%-2.5rem)] max-w-sm sm:bottom-8 sm:right-8">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={
                isAnimating
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 24, scale: 0.96 }
              }
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              role="dialog"
              aria-modal="false"
              aria-label="Enquiry form"
              className="relative rounded-lg border border-[#D4AF37]/50 bg-[#0a0a0a] p-5 text-[#F5F1E8] shadow-[0_10px_50px_rgba(0,0,0,0.6)] sm:p-6"
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 text-[#BF953F] transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="mb-2 pr-6">
                    <h3 className={`font-serif text-xl font-bold ${goldText}`}>
                      Plan With Us
                    </h3>
                    <p className="mt-1 text-[11px] uppercase tracking-widest text-[#8B7D5B]">
                      We&apos;ll be in touch within the day
                    </p>
                  </div>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full rounded border border-[#D4AF37]/30 bg-[#141414] px-3 py-2.5 text-sm text-[#F5F1E8] placeholder-[#777] transition-all focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full rounded border border-[#D4AF37]/30 bg-[#141414] px-3 py-2.5 text-sm text-[#F5F1E8] placeholder-[#777] transition-all focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Email address"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className="w-full rounded border border-[#D4AF37]/30 bg-[#141414] px-3 py-2.5 text-sm text-[#F5F1E8] placeholder-[#777] transition-all focus:border-[#D4AF37] focus:outline-none"
                    placeholder="Phone number"
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`mt-1 flex w-full items-center justify-center rounded py-2.5 text-sm font-bold text-black transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 ${goldButton}`}
                  >
                    {isLoading ? "Sending…" : "Enquire Now"}
                  </button>

                  <a
                    href="https://wa.me/919503802865?text=Hello%20Zoya%20Events,%20I%20am%20interested%20in%20an%20enquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] py-2.5 text-sm font-bold text-white transition-all hover:bg-[#20b858]"
                  >
                    Connect on WhatsApp
                  </a>
                </form>
              ) : (
                <div className="py-3 text-center">
                  <h3 className={`mb-2 font-serif text-xl font-bold ${goldText}`}>
                    Request Received
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-[#999]">
                    Thank you for choosing Zoya Events. Our team will reach
                    out shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="rounded border border-[#D4AF37]/50 px-6 py-1.5 text-[10px] uppercase tracking-widest text-[#F5F1E8] transition-all hover:border-[#D4AF37]"
                  >
                    Continue
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}