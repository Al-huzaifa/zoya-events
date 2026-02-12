"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Grid3x3, Home, CheckCircle2, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
//  DATA: 12 PREMIUM TESTIMONIALS
// ==========================================
const TESTIMONIALS = [
  {
    name: "Rajesh Menon",
    role: "VP Marketing, Reliance Retail",
    text: "Zoya Events didn't just build a stall; they created a landmark at the expo. The German Hangar finish was impeccable, and the turnaround time was faster than promised."
  },
  {
    name: "Sarah Jenkins",
    role: "Director, FinServe Global",
    text: "Professionalism at its peak. We entrusted them with our annual leadership summit, and the stage design was simply world-class. Highly recommended for premium corporate events."
  },
  {
    name: "Vikram Singhania",
    role: "MD, Skyline Developers",
    text: "The sales office they built for our launch was indistinguishable from a permanent structure. Luxury interiors, perfect cooling—it closed deals for us."
  },
  {
    name: "Aditi Rao",
    role: "Head of Events, TechFlow",
    text: "Our product launch required complex AV mapping and a futuristic set. Zoya delivered flawlessly. The team is incredibly organized and calm under pressure."
  },
  {
    name: "Michael Chen",
    role: "Ops Lead, AutoMotive X",
    text: "We needed a heavy-duty outdoor structure for our vehicle display. Their German Hangar system is robust, safe, and looks visually stunning."
  },
  {
    name: "Priya Desai",
    role: "CMO, MedLife Pharma",
    text: "Clean, clinical, yet elegant. Their exhibition stall design for CPHI perfectly represented our brand ethos. Great attention to detail."
  },
  {
    name: "Amit Kapoor",
    role: "Founder, StartUp Hub",
    text: "We did a 3-city roadshow. Zoya managed the logistics, fabrication, and permissions seamlessly across all locations. A true partner."
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director, Vogue India",
    text: "An absolute visual treat. The decor for our gala dinner was sophisticated and on-point. They understand the nuance of luxury."
  },
  {
    name: "Sandeep Mehta",
    role: "GM, HDFC Bank",
    text: "Security and protocol were our top priorities for the AGM. Zoya's team handled the VIP movement and stage setup with military precision."
  },
  {
    name: "Zainab Khan",
    role: "Brand Manager, Nestle",
    text: "The BTL activation in malls generated record footfall. The structure was modular and easy to deploy. Fantastic execution."
  },
  {
    name: "David Wallace",
    role: "Partner, Apex Consulting",
    text: "Our corporate offsite was a massive success. From the stage backdrop to the evening entertainment, everything was timed to perfection."
  },
  {
    name: "Rohan Gupta",
    role: "CEO, BuildCon",
    text: "I've worked with many vendors, but Zoya's quality of fabrication is superior. No rough edges, just premium finishing everywhere."
  }
];

// Split into two rows for the "Wall of Love" effect
const ROW_1 = TESTIMONIALS.slice(0, 6);
const ROW_2 = TESTIMONIALS.slice(6, 12);

export default function About() {
  return (
    <>
      {/* =========================================
          SECTION 1: SALES OFFICE (Hero Product)
          ========================================= */}
      <section className="relative w-full bg-[#050505] py-20 lg:py-32 px-6 overflow-hidden">
        
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* LEFT: VISUAL */}
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative order-2 lg:order-1"
             >
                <div className="relative rounded-sm overflow-hidden h-[500px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                   <img
                     src="/images/salesoffice.webp"
                     alt="Luxury Sales Office"
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                   
                   <div className="absolute bottom-8 left-8 border-l-2 border-[#D4AF37] pl-4">
                      <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-1">Our Signature</p>
                      <h3 className="text-white text-2xl font-serif">German Hangar Systems</h3>
                   </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#D4AF37]/30 hidden lg:block"></div>
             </motion.div>

             {/* RIGHT: CONTENT */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2"
             >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                  <span className="text-[#D4AF37] uppercase tracking-[0.25em] text-xs font-bold">
                    Rapid Infrastructure
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                  Temporary Structures, <br/>
                  <span className="text-zinc-600">Permanent Impact.</span>
                </h2>
                
                <p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                  Need a premium sales office in 5 days? We specialize in deploying high-end German Hangar solutions that offer the luxury of a permanent building with the speed of a temporary structure.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                   {["Deploy in 3-5 Days", "Luxury Interiors Included", "Climate Controlled", "Pan-India Execution"].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 border-b border-zinc-900 pb-2">
                         <CheckCircle2 size={18} className="text-[#D4AF37]" />
                         <span className="text-zinc-300 text-sm font-medium tracking-wide">{feature}</span>
                      </div>
                   ))}
                </div>

                <Link href="/sales-office">
                  <button className="group bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center gap-2">
                    View Specifications <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
             </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: ABOUT ZOYA
          ========================================= */}
      <section className="relative w-full bg-[#0a0a0a] py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* LEFT: TEXT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 text-left"
            >
              <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                  About The Company
              </span>

              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                13+ Years of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E779]">
                  Corporate Excellence
                </span>
              </h2>

              <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-xl">
                Based in Mumbai, Zoya Events is a premier agency specializing in corporate grandeur. We don't just organize events; we engineer experiences that align with your brand's legacy.
              </p>

              <div className="flex gap-8 mb-8 border-t border-white/5 pt-8">
                 <div>
                    <span className="block text-3xl font-serif text-white">500+</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-widest">Projects</span>
                 </div>
                 <div>
                    <span className="block text-3xl font-serif text-white">100%</span>
                    <span className="text-zinc-500 text-xs uppercase tracking-widest">Satisfaction</span>
                 </div>
              </div>

              <Link href="/about" className="inline-block text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors text-xs font-bold uppercase tracking-widest">
                Read Our Story
              </Link>
            </motion.div>

            {/* RIGHT: IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-1/2"
            >
              <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/13year.webp" 
                  alt="Zoya Events Team"
                  className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#D4AF37]/20 z-0 hidden lg:block"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: SERVICES
          ========================================= */}
      <section className="relative w-full bg-black py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
               Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Comprehensive Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard icon={<Building2 size={32} />} title="Corporate Events" desc="From AGMs to Product Launches, we handle end-to-end logistics with military precision." link="/services/corporate-events" />
            <ServiceCard icon={<Grid3x3 size={32} />} title="Exhibitions & Stalls" desc="Custom fabricated stalls that stand out. We design immersive brand spaces for major trade shows." link="/services/exhibitions" />
            <ServiceCard icon={<Home size={32} />} title="Sales Offices" desc="Explore our full range of German Hangar specifications and interior customization options." link="/services/sales-office-details" />
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: TRUSTED BY (Infinite Marquee)
          ========================================= */}
      <section className="w-full bg-black py-16 border-t border-white/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em]">
            Trusted by Global Brands
          </p>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        <div className="flex w-full overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex items-center gap-16 md:gap-32 whitespace-nowrap min-w-full px-16"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-2xl md:text-3xl font-serif text-zinc-600">TATA MOTORS</span>
                <span className="text-2xl md:text-3xl font-serif text-zinc-600">RELIANCE</span>
                <span className="text-2xl md:text-3xl font-serif text-zinc-600">HDFC BANK</span>
                <span className="text-2xl md:text-3xl font-serif text-zinc-600">INFOSYS</span>
                <span className="text-2xl md:text-3xl font-serif text-zinc-600">MAHINDRA</span>
                <span className="text-2xl md:text-3xl font-serif text-zinc-600">GOOGLE</span>
                <span className="text-2xl md:text-3xl font-serif text-zinc-600">VOGUE</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: OUR PROCESS
          ========================================= */}
      <section className="relative w-full bg-[#050505] py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
              <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                How We Work
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                The Zoya Standard
              </h2>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm text-right hidden md:block">
              A meticulous four-step methodology ensuring flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Understanding objectives and brand ethos." },
              { num: "02", title: "Concept", desc: "Bespoke 3D visualizations and architectural planning." },
              { num: "03", title: "Execution", desc: "Precision deployment with military efficiency." },
              { num: "04", title: "Delivery", desc: "Seamless on-site management and support." }
            ].map((step, idx) => (
              <div key={idx} className="group relative p-8 border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#D4AF37]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                <span className="text-5xl font-serif text-white/10 group-hover:text-[#D4AF37]/20 transition-colors duration-500 mb-6 block">{step.num}</span>
                <h3 className="text-xl text-white font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: TESTIMONIALS (MOVING STRIP)
          ========================================= */}
      <section className="relative w-full bg-black py-24 border-t border-white/5 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
          <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
             Social Proof
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Client Perspectives
          </h2>
        </div>

        {/* --- MARQUEE ROWS --- */}
        <div className="flex flex-col gap-8 relative z-10">
          
          {/* Row 1: Moving Left */}
          <div className="flex w-full overflow-hidden mask-gradient">
             <motion.div
               initial={{ x: 0 }}
               animate={{ x: "-50%" }}
               transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
               className="flex gap-6 pl-6 min-w-max"
             >
                {[...ROW_1, ...ROW_1].map((item, i) => (
                   <TestimonialCard key={i} item={item} />
                ))}
             </motion.div>
          </div>

          {/* Row 2: Moving Right */}
          <div className="flex w-full overflow-hidden mask-gradient">
             <motion.div
               initial={{ x: "-50%" }}
               animate={{ x: 0 }}
               transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
               className="flex gap-6 pl-6 min-w-max"
             >
                {[...ROW_2, ...ROW_2].map((item, i) => (
                   <TestimonialCard key={i} item={item} />
                ))}
             </motion.div>
          </div>
          
        </div>

        {/* Gradient Fade on Edges */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* =========================================
          SECTION 7: FINAL GOLD CTA
          ========================================= */}
      <section className="relative w-full bg-[#D4AF37] py-24 px-6 overflow-hidden group">
         
         {/* Animated Shine Effect */}
         <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out"></div>

         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-serif text-black mb-8 leading-tight tracking-tight">
               Ready to Create <br/> History?
            </h2>
            <p className="text-black/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
               Whether it's a massive exhibition or an intimate luxury summit, we are ready to execute your vision with zero compromise.
            </p>
            <Link href="/contact">
               <button className="bg-black text-white px-12 py-5 font-bold uppercase tracking-[0.25em] text-sm hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-transparent hover:border-black">
                  Start Your Project
               </button>
            </Link>
         </div>
      </section>
    </>
  );
}

// ==========================================
//  HELPER COMPONENTS
// ==========================================

// 1. Service Card
function ServiceCard({ icon, title, desc, link }: { icon: any, title: string, desc: string, link: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-[#0f0f0f] border border-zinc-800 p-10 hover:border-[#D4AF37]/50 transition-colors duration-500"
    >
      <div className="mb-6 p-4 bg-zinc-900 inline-block rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-serif text-white mb-4">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-8 h-20">{desc}</p>
      <Link href={link} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">
        Learn More <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

// 2. Testimonial Card (Glass Effect)
function TestimonialCard({ item }: { item: { name: string, role: string, text: string } }) {
  return (
    <div className="w-[400px] p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
       <div className="mb-6">
          <Quote size={24} className="text-[#D4AF37] mb-4 opacity-50" />
          <p className="text-zinc-200 text-sm leading-relaxed italic">
             "{item.text}"
          </p>
       </div>
       <div className="flex items-center gap-3 border-t border-white/5 pt-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8a7020] flex items-center justify-center text-black font-bold text-xs">
             {item.name.charAt(0)}
          </div>
          <div>
             <p className="text-white text-xs font-bold uppercase tracking-wide">{item.name}</p>
             <p className="text-[#D4AF37] text-[10px] uppercase tracking-wider">{item.role}</p>
          </div>
       </div>
    </div>
  );
}