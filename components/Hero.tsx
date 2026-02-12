"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    if (!timerStarted) {
      setTimerStarted(true);
      timerRef.current = setTimeout(() => {
        setPopupVisible(true);
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current as any);
    };
  }, []);

  return (
    <section onClick={handleClick} className="relative w-full min-h-screen overflow-hidden">
      {/* Cloudinary video */}
      <video
        src="https://res.cloudinary.com/dv36bszdw/video/upload/f_auto,q_auto/zoya_web_hanger_rs7jqh.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Slight dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light tracking-wide">Zoya Events</h1>
        <p className="mt-3 sm:mt-4 text-zinc-200 max-w-xl text-sm sm:text-base">Crafting unforgettable moments — see our work below.</p>
      </div>

      {/* Small centered popup (not full-screen) shown 5s after first click */}
      {popupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div
            className="bg-zinc-900/90 text-white rounded-lg shadow-xl w-full max-w-md p-6 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <button
                onClick={() => setPopupVisible(false)}
                className="text-zinc-400 hover:text-white ml-4"
                aria-label="Close contact popup"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 text-sm">
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+1234567890" className="text-[#D4AF37]">+1 234 567 890</a>
              </p>
              <p className="mt-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@zoyaevent.com" className="text-[#D4AF37]">info@zoyaevent01.com</a>
              </p>

              <div className="mt-3">
                <label className="block text-sm mb-1">Reason</label>
                <select className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded text-sm">
                  <option>Event Inquiry</option>
                  <option>Pricing</option>
                  <option>Partnership</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setPopupVisible(false)}
                className="px-4 py-2 bg-[#D4AF37] text-black font-bold rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

