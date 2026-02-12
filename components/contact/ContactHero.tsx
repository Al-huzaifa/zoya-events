"use client";

import React from 'react';
import { Phone, ArrowUpRight, Mail, Sparkles, Command, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden selection:bg-[#D4AF37] selection:text-black font-sans px-6">
      
      {/* --- 1. THE ATMOSPHERE (Background) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The Spotlight - Concentrated and Elegant */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-[80px]"></div>
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        {/* Precision Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center h-full">
        
        {/* --- 2. THE HEADLINE (Compact & Impactful) --- */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6 opacity-60">
              <Command className="text-[#D4AF37] w-3 h-3" />
              <span className="text-[#D4AF37] text-[9px] font-mono tracking-[0.4em] uppercase">
                Direct Uplink
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4 drop-shadow-2xl">
              Initiate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#F7E7CE] to-[#8a701f]">
                The Extraordinary.
              </span>
            </h1>
            
            <p className="text-zinc-500 text-xs md:text-sm font-medium tracking-widest uppercase max-w-lg mx-auto">
              Ready to deploy. Available 24/7 for high-stakes execution.
            </p>
          </motion.div>
        </div>

        {/* --- 3. THE COMPACT INTERFACE (Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          
          {/* --- CARD 1: EXECUTIVE LINE --- */}
          <motion.a
            href="tel:+919876543210"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group relative h-40 md:h-48 rounded-2xl bg-zinc-900/30 backdrop-blur-md border border-white/5 p-6 flex items-center justify-between overflow-hidden hover:border-[#D4AF37]/40 hover:bg-zinc-900/50 transition-all duration-500"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

            <div className="flex items-center gap-6 z-10">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-500">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em]">Live Support</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-[#D4AF37] transition-colors font-mono">
                  +91 98765 43210
                </h2>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mt-1 group-hover:text-zinc-400 transition-colors">
                  Speak to a Director
                </p>
              </div>
            </div>

            <ArrowUpRight className="text-zinc-700 w-5 h-5 group-hover:text-[#D4AF37] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </motion.a>

          {/* --- CARD 2: STRATEGIC BRIEF --- */}
          <motion.a
            href="mailto:contact@zoyaevents.com"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="group relative h-40 md:h-48 rounded-2xl bg-zinc-900/30 backdrop-blur-md border border-white/5 p-6 flex items-center justify-between overflow-hidden hover:border-white/20 hover:bg-zinc-900/50 transition-all duration-500"
          >
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

            <div className="flex items-center gap-6 z-10">
              <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                <Mail className="w-5 h-5" strokeWidth={2} />
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <Activity className="w-3 h-3 text-[#D4AF37]" />
                   <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em]">Rapid Response</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight group-hover:text-[#D4AF37] transition-colors">
                  contact@zoya
                </h2>
                <p className="text-zinc-600 text-[10px] uppercase tracking-wider mt-1 group-hover:text-zinc-400 transition-colors">
                  Submit Project Brief
                </p>
              </div>
            </div>

            <ArrowUpRight className="text-zinc-700 w-5 h-5 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
          </motion.a>

        </div>

        {/* --- 4. STATUS FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 w-full text-center"
        >
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
             <p className="text-zinc-600 text-[9px] uppercase tracking-[0.3em]">
                Mumbai HQ • Operational
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactHero;