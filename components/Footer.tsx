'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  // Define gold/bronze color palette
  const colors = {
    brightGold: '#FFD700',
    bronzeGold: '#B8860B',
    darkBronze: '#8B6914',
  };

  // --- UPDATED NAVIGATION LINKS ---
  // These now point to clean URLs. 
  // Make sure you create these folders in your 'app' directory (e.g., app/about/page.tsx)
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/Hero' },
    { name: 'Join Our Team', href: '/ContactMapForm.tsx' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialIcons = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.732-8.835L.424 2.25h6.679l4.682 6.182 5.325-6.182zM17.009 18.519h1.829L6.413 3.88H4.458l12.551 14.639z" />
      </svg>
    ), label: 'X', href: 'https://twitter.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-[#0d0d0d] text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Logo Placeholder */}
            <div className="mb-4 sm:mb-6">
              <img
                src="/images/transparentlogo.png" // Ensure this image exists in your public folder
                alt="Zoya Events Logo"
                className="h-24 w-auto object-contain" 
              />
            </div>

            {/* Description */}
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm">
              Creating unforgettable events that bring people together and celebrate life's most important moments.
            </p>

            {/* Contact Info Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: colors.brightGold }}>
                Contact Info
              </h3>
              <div className="space-y-4">
                <a
                  href="https://goo.gl/maps/YOUR_REAL_MAP_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" style={{ color: colors.brightGold }} />
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    Pinnacle Corporate Park, 10th Floor, Office No.11, Next to Trader Centre BKC, Bandra (East), Mumbai 400051
                  </p>
                </a>
                <a
                  href="mailto:zoyaevent01@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:text-white transition-colors" style={{ color: colors.brightGold }} />
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    zoyaevent01@gmail.com
                  </p>
                </a>
              </div>
            </div>

            {/* Call Us Section */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                 <Phone className="w-5 h-5" style={{ color: colors.brightGold }} />
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Call us now</p>
                <a
                  href="tel:+918369015161"
                  className="text-white font-serif font-medium text-lg hover:text-[#FFD700] transition-colors"
                >
                  +91 8369015161
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:pl-10">
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wide flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#FFD700]"></span>
              Company
            </h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#FFD700] hover:translate-x-2 transition-all duration-300 text-sm w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wide flex items-center gap-2">
               <span className="w-8 h-[2px] bg-[#FFD700]"></span>
               Our Location
            </h3>
            
            {/* Live Google Map */}
            <div className="bg-[#1a1a1a] rounded-xl p-1 mb-6 overflow-hidden h-64 border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.816640523455!2d72.8682663143767!3d19.07180395705917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e0ec84393b%3A0x880209477218641b!2sPinnacle%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1677654321098!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.5rem', filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 text-gray-400 hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs">
              © 2026 Zoya Events. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-zinc-500 hover:text-[#FFD700] transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-500 hover:text-[#FFD700] transition-colors">Terms of Service</a>
              <a href="#" className="text-zinc-500 hover:text-[#FFD700] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}