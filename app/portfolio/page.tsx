'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioProjects } from '@/data/portfolio';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(portfolioProjects.map((p) => p.category)));

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? portfolioProjects.filter((p) => p.category === selectedCategory)
    : portfolioProjects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[40vh] flex items-center justify-center px-6 py-24 border-b border-slate-800"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/20 via-black to-black"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-light leading-tight mb-6"
          >
            Our <span style={{ background: 'linear-gradient(90deg, #FFD700 0%, #B8860B 60%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore our collection of premium events, exhibitions, and infrastructure projects that showcase our commitment to excellence.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-black px-6 py-12 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-[#FFD700] text-black'
                  : 'border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10'
              }`}
            >
              All Projects
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#FFD700] text-black'
                    : 'border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="w-full bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="group cursor-pointer">
                    {/* Image Container */}
                    <div className="relative w-full h-80 overflow-hidden rounded-lg mb-6">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-[#FFD700] text-sm font-semibold uppercase tracking-wider mb-2">
                        {project.category} • {project.year}
                      </p>
                      <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#FFD700] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span key={service} className="text-xs bg-zinc-900 text-zinc-300 px-3 py-1 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-black py-20 px-6 border-t border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Ready to Create Your Next Success Story?
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Let's discuss your vision and bring it to life with our expertise and dedication.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <a
              href="/contact"
              className="inline-block px-12 py-4 bg-[#FFD700] text-black uppercase tracking-[0.2em] font-semibold rounded hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[#FFD700]/30"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
