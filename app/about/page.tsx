import React from "react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden bg-black selection:bg-[#D4AF37] selection:text-black">
      
      {/* =========================================================
          GLOBAL BACKGROUND: LUXURY GRADIENTS & PARTICLES
          FIX: Changed from 'fixed' to 'absolute' to prevent covering the footer
      ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
        {/* 1. Base Gradient: Deep Charcoal to Black */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-900" />
        
        {/* 2. Golden Radial Glow (Top Left Spotlight) */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)] blur-3xl opacity-60" />

        {/* 3. Golden Radial Glow (Bottom Right Spotlight) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,134,11,0.1)_0%,transparent_70%)] blur-3xl opacity-50" />

        {/* 4. Diagonal Light Streak (Sheen Effect) */}
        <div className="absolute top-0 left-1/2 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-1/2 skew-x-12 pointer-events-none" />

        {/* 5. Floating Gold Particles (Simulated with CSS) */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#F3E779] rounded-full opacity-10 animate-bounce duration-[10000ms]" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[#D4AF37] rounded-full opacity-30" />
      </div>

      {/* =========================================================
          PAGE CONTENT (Z-INDEX 10)
      ========================================================= */}
      <div className="relative z-10">

        {/* 1. HERO SECTION: BRAND IDENTITY */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Glass Overlay on Hero Background */}
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-[#0a0a0a] z-10" />
             <img 
               src="/images/aboutpage.webp" 
               alt="Zoya Events Background" 
               className="w-full h-full object-cover opacity-50 mix-blend-overlay"
             />
          </div>

          <div className="relative z-20 text-center px-6 animate-fade-in-up">
            <div className="mb-8 flex justify-center">
              <img
                src="/images/transparentlogo.png"
                alt="Zoya Events Logo"
                className="h-32 md:h-48 w-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              />
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500 drop-shadow-sm">
              Beyond <span className="text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">Events.</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl max-w-3xl mx-auto font-light tracking-[0.2em] uppercase border-t border-[#D4AF37]/30 pt-6 mt-6">
              A Legacy of Excellence in Mumbai's Corporate Landscape
            </p>
          </div>
        </section>

        {/* 2. CORPORATE STATS (Glassmorphism Strip) */}
        <section className="py-16 border-y border-[#D4AF37]/20 bg-white/[0.02] backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2 group-hover:scale-110 transition-transform duration-500">13+</p>
              <p className="text-zinc-400 uppercase text-[10px] tracking-[0.3em] font-semibold">Years of Expertise</p>
            </div>
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2 group-hover:scale-110 transition-transform duration-500">200+</p>
              <p className="text-zinc-400 uppercase text-[10px] tracking-[0.3em] font-semibold">State Clients</p>
            </div>
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2 group-hover:scale-110 transition-transform duration-500">State</p>
              <p className="text-zinc-400 uppercase text-[10px] tracking-[0.3em] font-semibold">Wide Presence</p>
            </div>
            <div className="group">
              <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2 group-hover:scale-110 transition-transform duration-500">100%</p>
              <p className="text-zinc-400 uppercase text-[10px] tracking-[0.3em] font-semibold">In-House Execution</p>
            </div>
          </div>
        </section>

        {/* 3. THE COMPANY STORY */}
        <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -left-10 top-0 w-1 h-20 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
            <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-6 font-bold">Our DNA</h2>
            <h3 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-white">
              Precision in Planning, <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E779]">Artistry in Execution.</span>
            </h3>
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed font-light">
              <p>
                Headquartered in the <strong className="text-white">Pinnacle Corporate Park, BKC</strong>—Mumbai's premier business hub—ZOYA EVENT 
                is more than an agency. We are a full-scale production house with over 13 years of experience.
              </p>
              <p>
                Our mission is to provide a seamless <strong className="text-white">"One-Stop Solution"</strong> for corporate events, 
                BTL activations, and large-scale exhibitions.
              </p>
            </div>
          </div>
          <div className="relative order-1 md:order-2 group">
            {/* Image Glow Effect */}
            <div className="absolute inset-0 bg-[#D4AF37] rounded-sm blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/30 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="/images/aboutplanningphase.webp" 
              alt="Planning Phase" 
              className="relative z-10 w-full h-[600px] object-cover grayscale brightness-90 hover:grayscale-0 transition duration-1000 shadow-2xl rounded-sm"
            />
          </div>
        </section>

        {/* 4. STRATEGIC INFRASTRUCTURE */}
        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Heading */}
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-4 font-bold">Strategic Infrastructure</h2>
              <h3 className="text-4xl md:text-6xl font-light text-white">The German Hangar <br />Specialization</h3>
            </div>

            {/* PART 1: SALES OFFICE */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
              <div className="relative group overflow-hidden rounded-sm shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                 <img src="/images/aboutsalesoffice.webp" alt="Sales Office" className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105" />
                 <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent w-full z-20">
                   <p className="text-[#D4AF37] font-semibold text-lg tracking-wide border-l-4 border-[#D4AF37] pl-4">3-4 Months Durability</p>
                 </div>
              </div>

              <div className="space-y-8 pl-0 md:pl-10">
                <div>
                  <h4 className="text-3xl text-white mb-4 font-serif">Bespoke Sales Offices</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    We specialize in the rapid deployment of <strong className="text-zinc-200">Temporary Sales Offices</strong> using state-of-the-art 
                    German Hangar structures. These are not just tents; they are fully-engineered, weather-proof 
                    environments designed to facilitate high-value transactions.
                  </p>
                </div>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Rapid setup for 3-4 month site activations.",
                    "Luxury internal fit-outs including HVAC & Lighting.",
                    "Full compliance with international safety standards."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-zinc-300 p-3 bg-white/[0.03] rounded-sm border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PART 2: ADVANTAGES GRID */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32 border-t border-white/5 pt-20">
               <div className="order-2 md:order-1 space-y-8">
                 <h4 className="text-3xl text-white font-light">Wide-Span Aluminium Hangars</h4>
                 <p className="text-zinc-400 font-light leading-relaxed text-lg">
                   Engineered for versatility and endurance, our aluminium hangars provide the perfect solution for large-scale storage and event needs.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   {[
                     { title: "Lightweight & Durable", desc: "High-strength aluminium alloy." },
                     { title: "Quick Installation", desc: "Rapid deployment globally." },
                     { title: "Corrosion Resistant", desc: "Withstands harsh environments." },
                     { title: "Large Scale Storage", desc: "Ideal for industrial warehousing." }
                   ].map((adv, idx) => (
                     <div key={idx} className="flex items-start gap-4 group">
                       <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <div>
                         <h5 className="text-white font-medium mb-1 group-hover:text-[#D4AF37] transition-colors">{adv.title}</h5>
                         <p className="text-zinc-500 text-sm">{adv.desc}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="relative group overflow-hidden rounded-lg border border-white/10 order-1 md:order-2 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                 <img 
                   src="/images/about german hanger.png" 
                   alt="Aluminium Hangar Advantages" 
                   className="w-full h-auto object-cover transition duration-700 group-hover:scale-105 grayscale brightness-90 group-hover:grayscale-0" 
                 />
                 <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-md">
                   <img src="/images/transparentlogo.png" alt="Zoya Event Logo" className="h-12 w-auto" />
                 </div>
               </div>
            </div>

            {/* PART 3: RAPID TRANSFORMATION */}
            <div className="grid md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-20">
               <div className="relative group overflow-hidden rounded-lg border border-white/10 shadow-2xl">
                 <img 
                   src="/images/German Hangar Transformation.webp" 
                   alt="Hangar Transformation" 
                   className="w-full h-auto object-cover transition duration-700 group-hover:scale-105" 
                 />
               </div>
               
               <div className="space-y-8">
                 <h4 className="text-3xl text-white font-light">From Empty Land to <span className="text-[#D4AF37]">Functional Space</span></h4>
                 <p className="text-zinc-400 font-light leading-relaxed text-lg">
                   Transform any terrain into a premium, operational venue in a matter of hours. Our German Hangar technology allows for the creation of sophisticated, weather-proof structures without the long lead times of traditional construction.
                 </p>
                 <div className="bg-gradient-to-r from-zinc-900 to-transparent p-6 border-l-4 border-[#D4AF37]">
                   <p className="text-xl text-white font-light italic">"Functional Space in Hours, Not Months."</p>
                 </div>
               </div>
            </div>

          </div>
        </section>

        {/* 5. CORE EXPERTISE GRID (Premium Cards) */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-center text-zinc-500 uppercase tracking-[0.5em] text-xs mb-16 font-bold">Core Vertical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Corporate Management", desc: "Product launches, award nights, and annual meets executed with cinematic flair." },
                { title: "BTL Activation", desc: "Targeted brand engagement campaigns that bridge the gap between product and consumer." },
                { title: "Exhibition Stalls", desc: "Award-winning 3D designs and stall fabrication for national and international trade fairs." }
              ].map((service, idx) => (
                <div key={idx} className="group bg-white/[0.02] backdrop-blur-sm border border-white/5 p-10 hover:bg-white/[0.05] hover:border-[#D4AF37]/40 transition-all duration-500 rounded-sm">
                  <div className="h-1 w-12 bg-[#D4AF37] mb-6 group-hover:w-24 transition-all duration-500"></div>
                  <h4 className="text-white text-2xl mb-4 font-serif group-hover:text-[#D4AF37] transition-colors">{service.title}</h4>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CALL TO ACTION (Luxury Footer) */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-[#D4AF37]/20 p-12 md:p-20 text-center rounded-sm shadow-[0_0_60px_rgba(212,175,55,0.05)]">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h3 className="text-3xl md:text-5xl font-light mb-8 text-white">Ready to Build the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E779] to-[#B8860B] font-normal">Extraordinary?</span></h3>
            <p className="text-zinc-400 max-w-xl mx-auto mb-12 font-light tracking-wide">
              Visit us at our BKC office or schedule a technical consultation.
            </p>
            <a
              href="/contact"
              className="inline-block px-14 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
            >
              Connect With Zoya Event
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}