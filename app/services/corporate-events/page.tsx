"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Users, 
  Zap, 
  Award, 
  X, 
  Calendar, 
  MapPin, 
  ArrowUpRight 
} from "lucide-react";

export default function CorporateEventsPage() {
  type StudyType = typeof caseStudies[number];
  const [selectedStudy, setSelectedStudy] = useState<StudyType | null>(null);

  const services = [
    {
      title: "Full Event Planning & Coordination",
      description: "End-to-end management from concept development to post-event analysis. Our team handles every detail to ensure flawless execution.",
    },
    {
      title: "Luxury Venue Design & Setup",
      description: "Custom-designed spaces that reflect your brand's prestige. From intimate boardroom setups to grand conference halls with premium finishes.",
    },
    {
      title: "Audio-Visual & Technology Integration",
      description: "State-of-the-art AV systems, live streaming, projection mapping, and interactive displays to enhance engagement.",
    },
    {
      title: "Catering & Hospitality Services",
      description: "Premium catering with luxury service standards. Multi-cuisine options tailored to your guest preferences and brand image.",
    },
    {
      title: "Professional Staffing & Personnel",
      description: "Experienced event coordinators, ushers, and support staff trained in delivering exceptional service excellence.",
    },
    {
      title: "Customization & Branding",
      description: "Every element—from signage to décor to digital displays—aligns perfectly with your corporate branding and messaging.",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Fortune 500 Annual Conference",
      description: "A multi-day luxury conference requiring intricate logistical planning and high-tier security protocols.",
      longDesc: "This flagship event involved transforming a 50,000 sq. ft. space into a multi-functional corporate hub. We integrated 360-degree projection mapping and synchronized lighting for the keynote sessions.",
      image: "/images/placeholder-corporate-conference.jpg",
      stats: { attendees: "500+", duration: "3 Days", location: "Mumbai Hub" },
      result: "98% satisfaction rating",
    },
    {
      id: 2,
      title: "Executive Leadership Summit",
      description: "An intimate, high-stakes gathering for top-tier executives focused on strategic vision.",
      longDesc: "Designed with a focus on 'quiet luxury,' this summit featured bespoke Italian furniture, private breakout lounges, and a Michelin-starred catering experience tailored for global CEOs.",
      image: "/images/placeholder-executive-summit.jpg",
      stats: { attendees: "200", duration: "1 Day", location: "Bandra West" },
      result: "Exceeded engagement targets by 45%",
    },
    {
      id: 3,
      title: "Product Launch Gala",
      description: "A high-energy, glamorous evening designed to generate massive media buzz and brand authority.",
      longDesc: "We utilized dramatic theatrical lighting and a custom-built hydraulic stage to unveil the client's latest flagship product. The event was live-streamed to over 100,000 global viewers.",
      image: "/images/placeholder-product-launch.jpg",
      stats: { attendees: "800", duration: "Evening", location: "South Mumbai" },
      result: "3-month media coverage value",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans">
      
      {/* 1. STICKY NAVIGATION */}
      <nav className="sticky top-0 z-60 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group text-[#D4AF37]">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-[0.3em] font-bold text-xs">Return Home</span>
          </Link>
          <div className="h-4 w-px bg-white/20 hidden md:block" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 hidden md:block">Zoya Events / Corporate Division</span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] uppercase tracking-[0.6em] text-[10px] md:text-xs font-black mb-8 block"
          >
            Elite Business Experiences
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10"
          >
            Corporate <br /> <span className="text-[#D4AF37] italic font-light">Excellence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            We bridge the gap between ambitious corporate vision and flawless luxury execution. 13+ years of setting the gold standard in Maharashtra.
          </motion.p>
        </div>
      </section>

      {/* 3. SUCCESS STORIES WITH POPUP LOGIC */}
      <section className="py-24 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Success <span className="text-[#D4AF37] italic font-light">Stories.</span>
            </h2>
            <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.4em] border-l-2 border-[#D4AF37] pl-6">
              Click to view project blueprints
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedStudy(study)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 overflow-hidden bg-zinc-900 border border-white/10 mb-6">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="bg-[#D4AF37] text-black p-2 inline-block mb-2">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {study.title}
                </h3>
                <p className="text-zinc-500 text-sm line-clamp-2 font-light leading-relaxed">
                  {study.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL COMPONENT (POPUP) */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-950 border border-[#D4AF37]/30 w-full max-w-6xl max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row shadow-[0_0_100px_rgba(212,175,55,0.1)]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedStudy(null)}
                className="absolute top-6 right-6 z-110 p-3 bg-white text-black hover:bg-[#D4AF37] transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedStudy.image} 
                  className="w-full h-full object-cover grayscale-0"
                  alt={selectedStudy.title}
                />
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto">
                <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.4em] mb-4 block">
                  Case Study / 0{selectedStudy.id}
                </span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                  {selectedStudy.title}
                </h2>
                
                <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12 border-l border-zinc-800 pl-6">
                  {selectedStudy.longDesc}
                </p>

                {/* Data Grid */}
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Users size={14} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Scale</span>
                    </div>
                    <p className="text-xl font-bold uppercase">{selectedStudy.stats.attendees} Attendees</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <Calendar size={14} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Timeframe</span>
                    </div>
                    <p className="text-xl font-bold uppercase">{selectedStudy.stats.duration}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                      <MapPin size={14} />
                      <span className="text-[10px] uppercase font-bold tracking-widest">Location</span>
                    </div>
                    <p className="text-xl font-bold uppercase">{selectedStudy.stats.location}</p>
                  </div>
                </div>

                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 p-6 mb-12">
                  <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mb-2 block">Primary Outcome</span>
                  <p className="text-white text-xl italic font-light">"{selectedStudy.result}"</p>
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-4 w-full py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all"
                >
                  Discuss Your Event <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. SERVICES GRID (Restyled) */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Core <span className="text-[#D4AF37] italic font-light">Capabilities.</span></h2>
            <div className="h-1 w-24 bg-[#D4AF37]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {services.map((service, idx) => (
              <div key={idx} className="bg-black p-10 hover:bg-zinc-900 transition-colors group">
                <CheckCircle2 size={32} className="text-[#D4AF37] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 px-6 text-center bg-black">
        <div className="max-w-3xl mx-auto">
          <Award className="mx-auto text-[#D4AF37] mb-8" size={48} />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
            Let's Define Your <br /> <span className="text-[#D4AF37] italic font-light underline decoration-[#D4AF37]/30 underline-offset-12">Legacy.</span>
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-8 px-12 py-8 bg-[#D4AF37] text-black font-black uppercase tracking-[0.4em] text-xs hover:bg-white transition-all shadow-[0_0_50px_rgba(212,175,55,0.2)]"
          >
            Start Project Briefing <ArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}