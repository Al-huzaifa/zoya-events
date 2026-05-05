"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const SUBMITTED_KEY = "zoya_form_submitted";

export default function Hero() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const frameRef = useRef<number | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const goldTextGradient =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]";
  const goldButtonGradient =
    "bg-gradient-to-r from-[#BF953F] via-[#F3E779] to-[#B38728]";

  const openPopup = useCallback(() => {
    setPopupVisible(true);

    frameRef.current = requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  }, []);

  const handleClose = useCallback(() => {
    setIsAnimating(false);

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setPopupVisible(false);
    }, 260);
  }, []);

  useEffect(() => {
    let hasSubmitted = false;

    try {
      hasSubmitted = localStorage.getItem(SUBMITTED_KEY) === "true";
    } catch {
      hasSubmitted = false;
    }

    if (hasSubmitted) return;

    openTimerRef.current = setTimeout(openPopup, 10000);

    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [openPopup]);

  useEffect(() => {
    if (!popupVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [popupVisible, handleClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
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

      if (!response.ok) {
        throw new Error("SheetMonkey request failed");
      }

      setIsSubmitted(true);

      try {
        localStorage.setItem(SUBMITTED_KEY, "true");
      } catch {
        // Ignore private-mode/localStorage failures.
      }

      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again or contact us on WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-black font-sans text-white md:block">
      <div className="relative h-[48svh] min-h-[330px] w-full overflow-hidden bg-zinc-950 md:absolute md:inset-0 md:h-full md:min-h-0">
        <video
          src="https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-95 md:opacity-65"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black md:hidden" />
        <div className="hidden absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25 md:block" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-start bg-black px-5 pb-8 pt-6 text-left md:absolute md:inset-0 md:items-center md:justify-center md:bg-transparent md:px-8 md:pb-0 md:pt-0 md:text-center">
        <div className="w-full max-w-xl md:max-w-5xl">
          <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#BF953F] via-[#F3E779] to-[#B38728] md:hidden" />

          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#C5A059] md:hidden">
            Direct Production Partner
          </p>

          <h1
            className={`mb-4 break-words font-serif text-[clamp(2.75rem,15vw,4.9rem)] font-bold leading-[0.95] tracking-wide drop-shadow-2xl md:text-8xl ${goldTextGradient}`}
          >
            ZOYA EVENT
          </h1>

          <div className="space-y-4 md:hidden">
            <h2 className="max-w-md text-xl font-medium leading-snug text-white">
              Your trusted{" "}
              <span className="text-[#F3E779]">in-house</span> vendor for
              corporate excellence.
            </h2>

            <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
              {["German Hangar", "Fabrication", "Decor"].map((item) => (
                <span
                  key={item}
                  className="rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="max-w-md border-l-2 border-[#BF953F] pl-3 text-[15px] font-light leading-7 text-zinc-200">
              We don&apos;t just plan; we build. As a direct production house,
              we provide the infrastructure that powers Mumbai&apos;s most
              prestigious events.
            </p>
          </div>

          <p className="mt-5 hidden max-w-2xl text-lg font-light uppercase tracking-[0.2em] text-[#C5A059] md:mx-auto md:block">
            Event Solution & Exhibition
          </p>

          <div className={`mx-auto mt-8 hidden h-[2px] w-32 rounded-full md:block ${goldButtonGradient}`} />
        </div>
      </div>

      {popupVisible && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto px-4 py-6">
          <button
            type="button"
            aria-label="Close enquiry popup"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 opacity-100"
            onClick={handleClose}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Enquiry form"
            className={`relative my-auto w-full max-w-md transform rounded-lg border border-[#BF953F] bg-black p-5 text-white shadow-[0_0_40px_rgba(191,149,63,0.3)] transition-all duration-300 ease-out sm:p-8 ${
              isAnimating
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-5 scale-[0.98] opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 text-[#BF953F] transition-colors hover:text-white"
            >
              <svg
                className="h-6 w-6"
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-3 pr-8 text-center">
                  <h3 className={`font-serif text-3xl font-bold ${goldTextGradient}`}>
                    Get in Touch
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#8B7D5B]">
                    Exclusive Event Planning
                  </p>
                </div>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full rounded border border-[#333] bg-[#111] px-4 py-3 text-[#F3E779] placeholder-[#555] transition-all focus:border-[#BF953F] focus:outline-none focus:shadow-[0_0_10px_rgba(191,149,63,0.2)]"
                  placeholder="name"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full rounded border border-[#333] bg-[#111] px-4 py-3 text-[#F3E779] placeholder-[#555] transition-all focus:border-[#BF953F] focus:outline-none focus:shadow-[0_0_10px_rgba(191,149,63,0.2)]"
                  placeholder="EMAIL ADDRESS"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="w-full rounded border border-[#333] bg-[#111] px-4 py-3 text-[#F3E779] placeholder-[#555] transition-all focus:border-[#BF953F] focus:outline-none focus:shadow-[0_0_10px_rgba(191,149,63,0.2)]"
                  placeholder="PHONE NUMBER"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`mt-4 flex w-full items-center justify-center rounded py-3 text-base font-bold text-black shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg ${goldButtonGradient}`}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5 animate-spin text-black" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      PROCESSING...
                    </span>
                  ) : (
                    "Enquire Now"
                  )}
                </button>

                <div className="flex items-center justify-center gap-3 py-1">
                  <div className="h-px flex-1 bg-[#333]" />
                  <span className="text-sm font-medium text-zinc-500">Or</span>
                  <div className="h-px flex-1 bg-[#333]" />
                </div>

                <a
                  href="https://wa.me/919503802865?text=Hello%20Zoya%20Events,%20I%20am%20interested%20in%20an%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded bg-[#25D366] py-3 text-base font-bold text-white shadow-lg transition-all hover:scale-[1.01] hover:bg-[#20b858] active:scale-[0.99] sm:text-lg"
                >
                  Connect On WhatsApp
                </a>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#BF953F] shadow-[0_0_20px_rgba(191,149,63,0.4)] sm:h-24 sm:w-24">
                  <svg
                    className="h-10 w-10 text-[#BF953F] sm:h-12 sm:w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className={`mb-4 font-serif text-3xl font-bold ${goldTextGradient}`}>
                  Request Received
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-zinc-400">
                  Thank you for choosing Zoya Events.
                  <br />
                  Our team will contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded border border-[#333] px-8 py-2 text-xs uppercase tracking-widest text-[#8B7D5B] transition-all hover:border-[#BF953F] hover:text-[#BF953F]"
                >
                  Return to Website
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}