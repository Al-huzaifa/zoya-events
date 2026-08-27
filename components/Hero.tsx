"use client";

import React, { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
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
  "https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto:best,w_1920/Aerial_drone_shot_luxury_event_202607030230_lrpxeb.mp4";

// How much scroll distance drives the video scrub.
const SCROLL_TRACK_VH = 300;

// Delay after the hero clears the viewport before the enquiry card appears.
const POPUP_IDLE_MS = 2500;

// ── Responsive hook: returns true when viewport < 768 px ──────────────────
function useMobileDetect() {
  const subscribe = useCallback((cb: () => void) => {
    const mq = window.matchMedia("(max-width: 767px)");
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);
  const getSnapshot = () => window.matchMedia("(max-width: 767px)").matches;
  const getServerSnapshot = () => false; // SSR default = desktop
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function Hero() {
  const isMobile = useMobileDetect();

  
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoDurationRef = useRef(0);

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

  // --- Smooth scroll-scrub the video (lerp-based for zero jitter) ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Target time from scroll, and smoothed current time via RAF lerp
  const targetTimeRef = useRef(0);
  const smoothTimeRef = useRef(0);
  const rafIdRef = useRef<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const dur = videoDurationRef.current;
    if (dur > 0) {
      targetTimeRef.current = progress * dur;
    }
  });

  // Smooth interpolation loop — desktop only (mobile uses autoplay loop)
  useEffect(() => {
    if (isMobile) return; // ← skip scrub on mobile
    const video = videoRef.current;
    if (!video) return;

    const LERP = 0.10;
    const EPSILON = 0.005;

    const tick = () => {
      const target = targetTimeRef.current;
      const current = smoothTimeRef.current;
      const diff = target - current;

      if (Math.abs(diff) > EPSILON) {
        const next = current + diff * LERP;
        smoothTimeRef.current = next;
        if (video.readyState >= 2) {
          video.currentTime = next;
        }
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isMobile]);

  // Desktop: pre-buffer for scroll scrub. Mobile: nothing needed (autoPlay attr handles it).
  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    if (!video) return;

    const onMetadata = () => {
      videoDurationRef.current = video.duration || 0;
      video.currentTime = 0;
      smoothTimeRef.current = 0;
      targetTimeRef.current = 0;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => video.pause())
          .catch(() => {});
      }
    };

    video.addEventListener("loadedmetadata", onMetadata);
    video.load();

    return () => video.removeEventListener("loadedmetadata", onMetadata);
  }, [isMobile]);

  // Content fades slightly as you scroll through
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    [1, 1, 1, 0.85]
  );
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  // Parallax: video zooms slightly on scroll for cinematic depth (desktop only)
  const videoScale = useTransform(scrollYProgress, [0, 1], isMobile ? [1, 1] : [1, 1.08]);

  // --- Popup ---
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

  /* ═══════════════════════════════════════════════════════════
     STATS DATA — shown on both mobile and desktop
     ═══════════════════════════════════════════════════════════ */
  const stats = [
    { num: "500+", label: "Events Delivered" },
    { num: "10+", label: "Years Excellence" },
    { num: "100%", label: "In-House Production" },
  ];

  return (
    <>
      {/* ── Scroll track: 300vh on desktop for scrub, 100vh on mobile ── */}
      <section
        ref={sectionRef}
        className="relative w-full bg-black -mt-[64px] sm:-mt-[76px] md:-mt-[84px]"
        style={{ height: isMobile ? "100vh" : `${SCROLL_TRACK_VH}vh` }}
      >
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">

          {/* ═══════════════════════════════════════════════════════
              VIDEO LAYER
              Mobile:   object-contain → shows FULL panorama
              Desktop:  object-cover  → immersive full-bleed
              ═══════════════════════════════════════════════════════ */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{ scale: videoScale }}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                muted
                playsInline
                preload="auto"
                // Mobile: autoplay loop. Desktop: scrubbed via currentTime.
                autoPlay={isMobile}
                loop={isMobile}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center 25%" }}
              />
            </motion.div>

            {/* ── OVERLAYS — different strategy per breakpoint ── */}

            {/* MOBILE OVERLAY: strong gradient from transparent at top
                to solid black at bottom — text always on dark canvas */}
            <div
              className="absolute inset-0 sm:hidden pointer-events-none"
              style={{
                background: `
                  linear-gradient(to bottom,
                    rgba(0,0,0,0.15) 0%,
                    rgba(0,0,0,0.08) 15%,
                    rgba(0,0,0,0.2) 30%,
                    rgba(0,0,0,0.5) 45%,
                    rgba(0,0,0,0.8) 58%,
                    rgba(0,0,0,0.95) 70%,
                    rgba(0,0,0,1) 82%,
                    rgba(0,0,0,1) 100%
                  )
                `,
              }}
            />

            {/* DESKTOP OVERLAY: centered radial for text readability */}
            <div
              className="absolute inset-0 hidden sm:block pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%)",
              }}
            />

            {/* DESKTOP edge vignettes */}
            <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-black/50 to-transparent pointer-events-none hidden sm:block" />
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none hidden sm:block" />
            <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-black/35 to-transparent pointer-events-none hidden sm:block" />
            <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-black/35 to-transparent pointer-events-none hidden sm:block" />

            {/* ── SUBTLE GRAIN TEXTURE ── */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-screen"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              }}
            />

            {/* ── THIN GOLD ACCENT LINE (below navbar) ── */}
            <div className="absolute inset-x-0 top-[64px] sm:top-[76px] md:top-[84px] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-10" />
          </div>

          {/* ═══════════════════════════════════════════════════════
              CONTENT LAYER
              Mobile:   flex-end layout, content sits in the solid-dark
                        bottom zone beneath the contained video
              Desktop:  centered overlay on full-bleed video
              ═══════════════════════════════════════════════════════ */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="relative z-20 flex h-full w-full flex-col
                       items-center justify-end pb-14
                       sm:justify-center sm:pb-0
                       px-5 sm:px-8 text-center"
          >
            {/* ── Est. tag ── */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mb-3 sm:mb-5 inline-flex items-center gap-2
                         text-[8px] sm:text-[10px] md:text-xs
                         font-bold uppercase tracking-[0.35em] text-[#D4AF37]"
            >
              <span className="h-px w-4 sm:w-8 bg-[#D4AF37]/60" />
              Est. 2015 · Mumbai&apos;s Direct Production House
              <span className="h-px w-4 sm:w-8 bg-[#D4AF37]/60" />
            </motion.span>

            {/* ── Main heading ── */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="font-serif font-black leading-[0.88] tracking-[-0.02em] gold-shimmer"
              style={{
                fontSize: "clamp(2.8rem, 11vw, 8rem)",
                textShadow: "0 0 60px rgba(212,175,55,0.15)",
              }}
            >
              ZOYA EVENTS
            </motion.h1>

            {/* ── Gold divider with diamond ── */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
              className="mt-4 sm:mt-6 mx-auto flex items-center gap-2 sm:gap-4"
            >
              <div className="h-px w-6 sm:w-14 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
              <div className="h-px w-6 sm:w-14 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </motion.div>

            {/* ── Tagline — high contrast, always visible ── */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
              className="mt-3 sm:mt-5
                         max-w-[22rem] sm:max-w-md md:max-w-xl
                         text-[11px] sm:text-[12px] md:text-sm
                         font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em]
                         text-white"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,1), 0 0 4px rgba(0,0,0,0.8)" }}
            >
              Infrastructure Built for Events That Cannot Fail
            </motion.p>

            {/* ── Body description — crisp white on mobile's solid dark zone ── */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.78, ease: "easeOut" }}
              className="mt-3 sm:mt-5
                         max-w-[19rem] sm:max-w-sm md:max-w-lg
                         text-[12px] sm:text-[14px] md:text-base
                         font-light leading-relaxed
                         text-[#d0c9b5] sm:text-[#C5BCA4]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,1)" }}
            >
              German hangars, pagodas, and bespoke structures — engineered,
              fabricated, and deployed in-house for weddings, galas, and
              exhibitions across Mumbai.
            </motion.p>

            {/* ── CTA buttons ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.92, ease: "easeOut" }}
              className="mt-6 sm:mt-10
                         flex flex-col sm:flex-row items-center
                         gap-2.5 sm:gap-4
                         w-full max-w-[17rem] sm:max-w-none sm:w-auto"
            >
              <Link
                href="/portfolio"
                className="w-full sm:w-auto rounded-sm
                           border border-[#D4AF37]/80 backdrop-blur-sm
                           px-7 sm:px-9 py-3 sm:py-3.5
                           text-[10px] sm:text-[11px]
                           font-bold uppercase tracking-[0.22em]
                           text-white
                           transition-all duration-300
                           hover:border-[#D4AF37] hover:bg-[#D4AF37]/15
                           text-center"
              >
                View Our Work
              </Link>
              <button
                type="button"
                onClick={openPopup}
                className={`w-full sm:w-auto rounded-sm
                            px-7 sm:px-9 py-3 sm:py-3.5
                            text-[10px] sm:text-[11px]
                            font-bold uppercase tracking-[0.22em] text-black
                            transition-all duration-300
                            hover:scale-[1.03]
                            hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]
                            active:scale-[0.98] ${goldButton}`}
              >
                Start Your Enquiry
              </button>
            </motion.div>

            {/* ── Trust stats — VISIBLE ON MOBILE TOO ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="mt-5 sm:mt-10 flex items-center gap-4 sm:gap-8"
            >
              {stats.map(({ num, label }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && (
                    <div className="h-6 sm:h-8 w-px bg-[#D4AF37]/25" />
                  )}
                  <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                    <span
                      className={`font-serif text-base sm:text-xl md:text-2xl font-bold ${goldText}`}
                    >
                      {num}
                    </span>
                    <span className="text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#9B8E6E]">
                      {label}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* ── SCROLL CUE — animated pulse — desktop only ── */}
          <motion.div
            style={{ opacity: scrollCueOpacity }}
            className="absolute bottom-3 sm:bottom-8 left-1/2 z-20 hidden sm:flex -translate-x-1/2 flex-col items-center gap-1.5 sm:gap-2"
          >
            <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]/80">
              Scroll
            </span>
            {/* Animated scroll line */}
            <div className="relative h-7 sm:h-10 w-px overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/50 to-transparent" />
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#D4AF37]"
                style={{ height: "40%" }}
                animate={{ y: ["-100%", "300%"] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORNER ENQUIRY CARD ── */}
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
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                    <h3
                      className={`font-serif text-xl font-bold ${goldText}`}
                    >
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
                  <h3
                    className={`mb-2 font-serif text-xl font-bold ${goldText}`}
                  >
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