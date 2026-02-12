import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* 1. HERO SECTION: BRAND IDENTITY */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black z-10" />
          <img 
            src="/images/aboutpage.webp" 
            alt="Zoya Events Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <div className="mb-8 flex justify-center">
            <img
              src="/images/transparentlogo.png"
              alt="Zoya Events Logo"
              className="h-32 md:h-48 w-auto object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            />
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 uppercase">
            Beyond <span className="text-[#D4AF37]">Events.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto font-light tracking-[0.2em] uppercase">
            A Legacy of Excellence in Mumbai's Corporate Landscape
          </p>
        </div>
      </section>

      {/* 2. CORPORATE STATS */}
      <section className="py-16 border-y border-[#D4AF37]/20 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">13+</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">Years of Expertise</p>
          </div>
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">200+</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">State Clients</p>
          </div>
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">State</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">Wide Presence</p>
          </div>
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">100%</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">In-House Execution</p>
          </div>
        </div>
      </section>

      {/* 3. THE COMPANY STORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-6">Our DNA</h2>
          <h3 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-zinc-100">
            Precision in Planning, <br />
            <span className="italic">Artistry in Execution.</span>
          </h3>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-light">
            <p>
              Headquartered in the <strong>Pinnacle Corporate Park, BKC</strong>—Mumbai's premier business hub—ZOYA EVENT 
              is more than an agency. We are a full-scale production house with over 13 years of experience.
            </p>
            <p>
              Our mission is to provide a seamless <strong>"One-Stop Solution"</strong> for corporate events, 
              BTL activations, and large-scale exhibitions.
            </p>
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/30 z-0"></div>
          <img 
            src="/images/aboutplanningphase.webp" 
            alt="Planning Phase" 
            className="relative z-10 w-full h-[600px] object-cover grayscale brightness-75 hover:grayscale-0 transition duration-1000"
          />
        </div>
      </section>

      {/* 4. STRATEGIC INFRASTRUCTURE: GERMAN HANGAR SPECIALIZATION */}
      <section className="py-24 bg-zinc-950 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Heading */}
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-4">Strategic Infrastructure</h2>
            <h3 className="text-4xl md:text-6xl font-light">The German Hangar <br />Specialization</h3>
          </div>

          {/* --- PART 1: ORIGINAL SALES OFFICE SECTION (Restored) --- */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative group overflow-hidden">
               <img src="/images/aboutsalesoffice.webp" alt="Sales Office" className="w-full h-[500px] object-cover transition duration-700 group-hover:scale-105" />
               <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
                 <p className="text-[#D4AF37] font-semibold text-lg">3-4 Months Durability</p>
               </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-2xl text-white mb-4">Bespoke Sales Offices</h4>
                <p className="text-zinc-400 font-light leading-relaxed">
                  We specialize in the rapid deployment of <strong>Temporary Sales Offices</strong> using state-of-the-art 
                  German Hangar structures. These are not just tents; they are fully-engineered, weather-proof 
                  environments designed to facilitate high-value transactions.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Rapid setup for 3-4 month site activations.
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Luxury internal fit-outs including HVAC & Lighting.
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                  Full compliance with international safety standards.
                </li>
              </ul>
            </div>
          </div>

          {/* --- PART 2: ADVANTAGES SECTION (New) --- */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-32 border-t border-zinc-800 pt-20">
             <div className="order-2 md:order-1 space-y-8">
               <h4 className="text-3xl text-white font-light">Wide-Span Aluminium Hangars</h4>
               <p className="text-zinc-400 font-light leading-relaxed text-lg">
                 Engineered for versatility and endurance, our aluminium hangars provide the perfect solution for large-scale storage and event needs.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                   <div>
                     <h5 className="text-white font-medium mb-1">Lightweight & Durable</h5>
                     <p className="text-zinc-500 text-sm">High-strength aluminium alloy structure.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <div>
                     <h5 className="text-white font-medium mb-1">Quick Installation</h5>
                     <p className="text-zinc-500 text-sm">Rapid deployment for time-sensitive projects.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <div>
                     <h5 className="text-white font-medium mb-1">Corrosion Resistant</h5>
                     <p className="text-zinc-500 text-sm">Built to withstand harsh environmental conditions.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="p-3 bg-[#D4AF37]/10 rounded-full text-[#D4AF37]">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                   </div>
                   <div>
                     <h5 className="text-white font-medium mb-1">Large Scale Storage</h5>
                     <p className="text-zinc-500 text-sm">Ideal for industrial and commercial warehousing.</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="relative group overflow-hidden rounded-lg border border-zinc-800 order-1 md:order-2">
               <img 
                 src="/images/about german hanger.png" 
                 alt="Main Advantages of Wide-Span Aluminium Hangars" 
                 className="w-full h-auto object-cover transition duration-700 group-hover:scale-105" 
               />
                {/* Logo Overlay */}
               <div className="absolute top-4 left-4 z-10">
                 <img src="/images/transparentlogo.png" alt="Zoya Event Logo" className="h-16 w-auto drop-shadow-md" />
               </div>
             </div>
          </div>

          {/* --- PART 3: RAPID TRANSFORMATION SECTION (New) --- */}
          <div className="grid md:grid-cols-2 gap-12 items-center border-t border-zinc-800 pt-20">
             <div className="relative group overflow-hidden rounded-lg border border-zinc-800">
               <img 
                 src="/images/German Hangar Transformation.webp" 
                 alt="German Hangar Transformation" 
                 className="w-full h-auto object-cover transition duration-700 group-hover:scale-105" 
               />
             </div>
             
             <div className="space-y-8">
               <h4 className="text-3xl text-white font-light">From Empty Land to Functional Space</h4>
               <p className="text-zinc-400 font-light leading-relaxed text-lg">
                 Transform any terrain into a premium, operational venue in a matter of hours. Our German Hangar technology allows for the creation of sophisticated, weather-proof structures without the long lead times of traditional construction.
               </p>
               <div className="bg-zinc-900 p-6 border-l-4 border-[#D4AF37]">
                 <p className="text-xl text-white font-light italic">"Functional Space in Hours"</p>
               </div>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-center text-zinc-300">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                    <span>Seamless integration with existing landscapes.</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                    <span>Customizable interiors for premium events or offices.</span>
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3"></span>
                    <span>Scalable solutions for any size requirement.</span>
                  </li>
                </ul>
             </div>
          </div>

        </div>
      </section>

      {/* 5. CORE EXPERTISE GRID */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-zinc-500 uppercase tracking-[0.5em] text-xs mb-16">Core Vertical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/30">
            {/* Corporate Events */}
            <div className="bg-black p-12 hover:bg-zinc-950 transition duration-300">
              <h4 className="text-[#D4AF37] text-xl mb-4">Corporate Management</h4>
              <p className="text-zinc-500 font-light text-sm">Product launches, award nights, and annual meets executed with cinematic flair.</p>
            </div>
            {/* BTL Activation */}
            <div className="bg-black p-12 hover:bg-zinc-950 transition duration-300">
              <h4 className="text-[#D4AF37] text-xl mb-4">BTL Activation</h4>
              <p className="text-zinc-500 font-light text-sm">Targeted brand engagement campaigns that bridge the gap between product and consumer.</p>
            </div>
            {/* Exhibition Design */}
            <div className="bg-black p-12 hover:bg-zinc-950 transition duration-300">
              <h4 className="text-[#D4AF37] text-xl mb-4">Exhibition Stalls</h4>
              <p className="text-zinc-500 font-light text-sm">Award-winning 3D designs and stall fabrication for national and international trade fairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden bg-zinc-900 border border-[#D4AF37]/20 p-12 md:p-20 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h3 className="text-3xl md:text-5xl font-light mb-8">Ready to Build the <br /><span className="text-[#D4AF37]">Extraordinary?</span></h3>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 font-light">
            Visit us at our BKC office or schedule a technical consultation.
          </p>
          <a
            href="/contact"
            className="inline-block px-14 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition duration-500 uppercase tracking-widest text-sm font-bold"
          >
            Connect With Zoya Event
          </a>
        </div>
      </section>
    </main>
  );
}