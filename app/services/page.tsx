"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Grid3x3,
  Home,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Corporate Events",
      description:
        "Transform your corporate vision into reality with our bespoke event management services. From intimate boardroom gatherings to large-scale conferences, we specialize in creating luxurious, professional environments that elevate your brand presence.",
      icon: Building2,
      highlights: [
        "Custom venue design",
        "Audio-visual integration",
        "Luxury catering setup",
        "Professional staffing",
        "End-to-end coordination",
      ],
      href: "/#corporate-events",
    },
    {
      id: 2,
      title: "Exhibitions & Stalls",
      description:
        "Stand out at major exhibitions with our custom-designed stalls and immersive brand experiences. Our expert team delivers high-impact booth designs that captivate audiences and drive business results.",
      icon: Grid3x3,
      highlights: [
        "Custom stall architecture",
        "Brand-aligned interior design",
        "Display systems & lighting",
        "Modular & scalable solutions",
        "Large-scale installations",
      ],
      href: "/#exhibitions",
    },
    {
      id: 3,
      title: "Sales Offices (German Hangar)",
      description:
        "Our signature service. Rapidly deployable, luxury sales environments built with German engineering precision. Perfect for 2-3 month campaigns with complete turnkey solutions—structure, interiors, climate control, and everything in between.",
      icon: Home,
      highlights: [
        "2-3 month deployability",
        "Luxury interior finishes",
        "Climate control systems",
        "Professional lighting design",
        "Complete infrastructure",
      ],
      href: "/sales-office",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[50vh] flex items-center justify-center px-6 py-24 border-b border-slate-800"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/20 via-black to-black"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles size={20} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-semibold">
              Our Expertise
            </span>
            <Sparkles size={20} className="text-[#D4AF37]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-light leading-tight mb-6"
          >
            Bespoke Infrastructure & Event Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Premium solutions designed for discerning brands that demand excellence, reliability, and luxury in every detail.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <section className="w-full bg-black py-24 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative h-full bg-linear-to-br from-slate-900/50 to-slate-900/20 border border-slate-800 rounded-lg p-8 transition-all duration-500 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20">
                    {/* Icon */}
                    <motion.div
                      initial={{ opacity: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <div className="inline-block p-4 bg-[#D4AF37]/10 rounded-lg group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                        <IconComponent
                          size={32}
                          className="text-[#D4AF37] group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-base leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 mb-8">
                      {service.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:shadow-lg group-hover:shadow-[#D4AF37]/50 transition-all duration-300"></div>
                          <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link href={service.href}>
                      <motion.button
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn relative w-full px-6 py-3 border border-slate-800 text-white uppercase tracking-[0.15em] font-semibold text-sm overflow-hidden rounded transition-all duration-300 hover:border-[#D4AF37] hover:text-black mt-auto flex items-center justify-center gap-2"
                      >
                        {/* Background fill */}
                        <motion.div
                          className="absolute inset-0 bg-[#D4AF37] -z-10 rounded"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          style={{ originX: 0 }}
                        />

                        <span>View Details</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Work Gallery removed from Services page (moved to Home) */}

      {/* Why Choose Us Section */}
      <section className="w-full bg-black py-24 px-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
              Why Partner With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Thirteen Years of Excellence
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Uncompromising Quality",
                text: "Every detail is meticulously crafted to exceed expectations. From material selection to final execution, our standards are unmatched.",
              },
              {
                title: "Rapid Deployment",
                text: "Complex infrastructure doesn't mean long timelines. We specialize in fast setup without sacrificing sophistication.",
              },
              {
                title: "End-to-End Solutions",
                text: "From concept and design through infrastructure and staffing, we manage every aspect of your project seamlessly.",
              },
              {
                title: "Proven Track Record",
                text: "13+ years delivering exceptional results for India's most discerning brands and corporate leaders.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-slate-900/30 to-slate-900/10 border border-slate-800 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <h4 className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3 text-sm">
                  {item.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center border-t border-slate-800 pt-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Ready to Elevate Your Next Project?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Let's discuss how our expertise can bring your vision to life.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="/contact"
              className="inline-block px-12 py-4 bg-[#D4AF37] text-black uppercase tracking-[0.2em] font-semibold rounded hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/30"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
