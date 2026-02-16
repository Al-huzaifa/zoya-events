"use client";

import React, { useEffect, useState } from "react";

export default function Hero() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // --- 1. NEW: State to store user input ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: ""
  });

  // Custom Gold Gradients matching the logo
  const goldTextGradient = "bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]";
  const goldButtonGradient = "bg-gradient-to-r from-[#BF953F] via-[#F3E779] to-[#B38728]";

  useEffect(() => {
    // Check if user has ALREADY submitted the form in the past
    const hasSubmitted = localStorage.getItem("zoya_form_submitted");

    // If they have submitted, DO NOT start the timer.
    if (hasSubmitted) return;

    // Timer: Open popup 10 seconds after page load
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
    }, 300);
  };

  // --- 2. NEW: Handle typing in the boxes ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- 3. UPDATED: Send data to your Google Sheet ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Sending data to YOUR specific SheetMonkey link
      const response = await fetch("https://api.sheetmonkey.io/form/cGSLF4Dg8LinMSp6wha7Rx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          "Created At": new Date().toLocaleString() // Adds a nice timestamp column
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Save to LocalStorage so popup never shows again automatically
        localStorage.setItem("zoya_form_submitted", "true");
        // Clear the form
        setFormData({ fullName: "", email: "", phone: "" });
      } else {
        alert("There was a problem submitting your request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center mb-2">
                  <h3 className={`text-3xl font-serif font-bold ${goldTextGradient}`}>Get in Touch</h3>
                  <p className="text-[#8B7D5B] text-xs uppercase tracking-widest mt-2">Exclusive Event Planning</p>
                </div>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="group">
                    <input 
                      type="text" 
                      name="fullName" // Matches state
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                      className="w-full bg-[#111] border border-[#333] text-[#F3E779] px-4 py-3 rounded focus:outline-none focus:border-[#BF953F] focus:shadow-[0_0_10px_rgba(191,149,63,0.2)] transition-all placeholder-[#555]"
                      placeholder="FULL NAME"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <input 
                      type="email" 
                      name="email" // Matches state
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full bg-[#111] border border-[#333] text-[#F3E779] px-4 py-3 rounded focus:outline-none focus:border-[#BF953F] focus:shadow-[0_0_10px_rgba(191,149,63,0.2)] transition-all placeholder-[#555]"
                      placeholder="EMAIL ADDRESS"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <input 
                      type="tel" 
                      name="phone" // Matches state
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                      className="w-full bg-[#111] border border-[#333] text-[#F3E779] px-4 py-3 rounded focus:outline-none focus:border-[#BF953F] focus:shadow-[0_0_10px_rgba(191,149,63,0.2)] transition-all placeholder-[#555]"
                      placeholder="PHONE NUMBER"
                    />
                  </div>
                </div>

                {/* --- SUBMIT BUTTON --- */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full mt-4 py-3 ${goldButtonGradient} text-black font-bold text-lg rounded shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center`}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-black" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      PROCESSING...
                    </span>
                  ) : (
                    "Enquire Now"
                  )}
                </button>

                {/* --- OR SEPARATOR --- */}
                <div className="flex items-center justify-center gap-3 my-2">
                    <div className="h-px bg-[#333] flex-1"></div>
                    <span className="text-zinc-500 text-sm font-medium">Or</span>
                    <div className="h-px bg-[#333] flex-1"></div>
                </div>

                {/* --- WHATSAPP BUTTON --- */}
                <a
                  href="https://wa.me/919372146434?text=Hello%20Zoya%20Events,%20I%20am%20interested%20in%20an%20enquiry."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-lg rounded shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-3"
                >
                   {/* WhatsApp Icon SVG */}
                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                   </svg>
                   Connect On WhatsApp
                </a>

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