"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Custom Gold Gradients matching the logo
  const goldTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]";
  const goldButtonGradient = "bg-gradient-to-r from-[#BF953F] via-[#F3E779] to-[#B38728]";

  useEffect(() => {
    // 1. Check if user has ALREADY submitted the form in the past
    const hasSubmitted = localStorage.getItem("zoya_form_submitted");

    // If they have submitted, DO NOT start the timer.
    if (hasSubmitted) return;

    // 2. Timer: Open popup 10 seconds after page load
    const timer = setTimeout(() => {
      setPopupVisible(true);
      setTimeout(() => setIsAnimating(true), 50);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setPopupVisible(false);
      // We do NOT reset isSubmitted here, so the success message stays if they open it manually later (optional)
      // But we do close the modal.
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending data (wait 1.5 seconds)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // 3. SAVE to LocalStorage so popup never shows again automatically
      localStorage.setItem("zoya_form_submitted", "true");
    }, 1500);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden font-sans bg-black">
      {/* --- Background Video --- */}
      <div className="absolute inset-0 w-full h-full">
        <video
          src="https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        {/* Deep Black Overlay to match the logo background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      {/* --- Hero Content --- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 animate-fade-in-up">
        {/* Main Title with Logo-Like Gold Gradient */}
        <h1 className={`text-5xl sm:text-6xl md:text-8xl font-serif font-bold tracking-wider drop-shadow-2xl ${goldTextGradient}`}>
          ZOYA EVENT
        </h1>
        
        {/* Subtitle using the "Event Solution" color from logo */}
        <p className="mt-4 text-[#C5A059] max-w-2xl text-sm sm:text-base md:text-lg font-light tracking-[0.2em] uppercase">
          Event Solution & Exhibition
        </p>

        {/* Divider */}
        <div className={`h-[2px] w-32 mt-8 rounded-full ${goldButtonGradient}`} />
      </div>

      {/* --- Popup Modal --- */}
      {popupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
          />

          {/* Modal Container with Gold Border */}
          <div
            className={`
              relative bg-black border border-[#BF953F] text-white 
              rounded-xl shadow-[0_0_40px_rgba(191,149,63,0.3)] w-full max-w-md p-8 
              transform transition-all duration-500 ease-out
              ${isAnimating ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
            `}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#BF953F] hover:text-white transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* --- Conditional Rendering: Form vs Success Message --- */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-2">
                  <h3 className={`text-3xl font-serif font-bold ${goldTextGradient}`}>Get in Touch</h3>
                  <p className="text-[#8B7D5B] text-xs uppercase tracking-widest mt-2">Exclusive Event Planning</p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="group">
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-[#111] border border-[#333] text-[#F3E779] px-4 py-3 rounded focus:outline-none focus:border-[#BF953F] focus:shadow-[0_0_10px_rgba(191,149,63,0.2)] transition-all placeholder-[#555]"
                      placeholder="FULL NAME"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-[#111] border border-[#333] text-[#F3E779] px-4 py-3 rounded focus:outline-none focus:border-[#BF953F] focus:shadow-[0_0_10px_rgba(191,149,63,0.2)] transition-all placeholder-[#555]"
                      placeholder="EMAIL ADDRESS"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <input 
                      type="tel" 
                      required 
                      className="w-full bg-[#111] border border-[#333] text-[#F3E779] px-4 py-3 rounded focus:outline-none focus:border-[#BF953F] focus:shadow-[0_0_10px_rgba(191,149,63,0.2)] transition-all placeholder-[#555]"
                      placeholder="PHONE NUMBER"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full mt-6 py-3 ${goldButtonGradient} text-black font-bold text-lg rounded shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center`}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      PROCESSING...
                    </span>
                  ) : (
                    "SUBMIT REQUEST"
                  )}
                </button>
              </form>
            ) : (
              // Success View
              <div className="text-center py-10 animate-fade-in-up">
                <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full border-2 border-[#BF953F] shadow-[0_0_20px_rgba(191,149,63,0.4)]">
                  <svg className="w-12 h-12 text-[#BF953F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className={`text-3xl font-serif font-bold mb-4 ${goldTextGradient}`}>Request Received</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Thank you for choosing Zoya Events.<br/>
                  Our team will contact you shortly.
                </p>
                <button
                  onClick={handleClose}
                  className="px-8 py-2 border border-[#333] hover:border-[#BF953F] text-[#8B7D5B] hover:text-[#BF953F] rounded transition-all text-xs uppercase tracking-widest"
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