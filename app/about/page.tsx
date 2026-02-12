import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      {/* 1. HERO SECTION: BRAND IDENTITY */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* #IMG_REQUIRED | PROMPT: Ultra-luxury wide shot of a corporate gala dinner in Mumbai, gold warm lighting, blurred background of elite attendees, 8k resolution, cinematic atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black z-10" />
          <img 
            src="/images/aboutpage.webp" 
            alt="Zoya Events Background" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* #IMAGE_LINK_PASTE_HERE */}
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

      {/* 2. CORPORATE STATS: PROVEN TRACK RECORD */}
      <section className="py-16 border-y border-[#D4AF37]/20 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">20+</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">Years of Expertise</p>
          </div>
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">200+</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">Global Clients</p>
          </div>
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">Nation</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">Wide Presence</p>
          </div>
          <div>
            <p className="text-[#D4AF37] text-4xl md:text-6xl font-extralight mb-2">100%</p>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">In-House Execution</p>
          </div>
        </div>
      </section>

      {/* 3. THE COMPANY STORY: MISSION & VISION */}
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
              is more than an agency. We are a full-scale production house with over 20 years of experience 
              serving the world's most demanding brands.
            </p>
            <p>
              Our mission is to provide a seamless <strong>"One-Stop Solution"</strong> for corporate events, 
              BTL activations, and large-scale exhibitions. We own the technology, the talent, and the 
              tools to deliver excellence without compromise.
            </p>
          </div>
        </div>
        
        <div className="relative order-1 md:order-2">
          {/* #IMG_REQUIRED | PROMPT: A close-up shot of architectural blueprints for an event floor plan, lying on a dark wooden table with a gold pen and a cup of coffee, professional office lighting */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#D4AF37]/30 z-0"></div>
          <img 
            src="https://via.placeholder.com/800x1000?text=PLANNING_PRECISION" 
            alt="Planning Phase" 
            className="relative z-10 w-full h-[600px] object-cover grayscale brightness-75 hover:grayscale-0 transition duration-1000"
          />
          {/* #IMAGE_LINK_PASTE_HERE */}
        </div>
      </section>

      {/* 4. NEW SECTION: TEMPORARY SALES OFFICES & INFRASTRUCTURE */}
      <section className="py-24 bg-zinc-950 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-4">Strategic Infrastructure</h2>
            <h3 className="text-4xl md:text-6xl font-light">The German Hangar <br />Specialization</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* #IMG_REQUIRED | PROMPT: High-end wide shot of a massive white German Hangar structure at a construction site for a luxury real estate launch, blue hour lighting, professional drone photography */}
            <div className="relative group overflow-hidden">
               <img src="https://via.placeholder.com/1200x800?text=GERMAN_HANGAR_STRUCTURE" alt="Sales Office" className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-105" />
               {/* #IMAGE_LINK_PASTE_HERE */}
               <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black to-transparent w-full">
                  <p className="text-[#D4AF37] font-semibold">2-3 Months Durability</p>
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
                  Rapid setup for 2-3 month site activations.
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

      {/* 6. CALL TO ACTION: THE PINNACLE PARTNERSHIP */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden bg-zinc-900 border border-[#D4AF37]/20 p-12 md:p-20 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h3 className="text-3xl md:text-5xl font-light mb-8">Ready to Build the <br /><span className="text-[#D4AF37]">Extraordinary?</span></h3>
          <p className="text-zinc-400 max-w-xl mx-auto mb-10 font-light">
            Visit us at our BKC office or schedule a technical consultation for your next major event or site office requirement.
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