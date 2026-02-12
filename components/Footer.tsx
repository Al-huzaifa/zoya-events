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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '#' },
    { name: 'Our Blog', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Join Our Team', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialIcons = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.732-8.835L.424 2.25h6.679l4.682 6.182 5.325-6.182zM17.009 18.519h1.829L6.413 3.88H4.458l12.551 14.639z" />
      </svg>
    ), label: 'X', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-[#0d0d0d] text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Logo Placeholder */}
            <div className="mb-4 sm:mb-6">
              <img
                src="/images/transparentlogo.png"
                alt="Zoya Events Logo"
                className="h-30 sm:h-30 w-auto object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Creating unforgettable events that bring people together and celebrate life's most important moments.
            </p>

            {/* Contact Info Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: colors.brightGold }}>
                Contact Info
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.google.com/maps/search/Pinnacle+Corporate+Park,+10th+floor,+office+no+11,+BKC,+Bandra+East,+Mumbai+400051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: colors.brightGold }} />
                  <p className="text-gray-300 text-sm hover:opacity-80 transition-opacity">
                    Pinnacle Corporate Park, 10th Floor, Office No.11, Next to Trader Centre BKC, Bandra (East), Mumbai 400051
                  </p>
                </a>
                <a
                  href="mailto:zoyaevent01@gmail.com"
                  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: colors.brightGold }} />
                  <p className="text-gray-300 text-sm hover:opacity-80 transition-opacity">
                    zoyaevent01@gmail.com
                  </p>
                </a>
              </div>
            </div>

            {/* Call Us Section */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
              <Phone className="w-8 h-8 flex-shrink-0" style={{ color: colors.brightGold }} />
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Call us now</p>
                <a
                  href="tel:+918369015161"
                  className="text-white font-semibold text-lg hover:opacity-80 transition-opacity"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.brightGold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  +91 8369015161
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wide">
              Company
            </h3>
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 transition-colors duration-300 text-sm block hover:opacity-80"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.brightGold;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#d1d5db';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wide">
              Our Location
            </h3>
            
            {/* Live Google Map */}
            <div className="bg-[#1a1a1a] rounded-lg p-0 mb-6 overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.409652898944!2d72.82658!3d19.075064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87c5a987891%3A0x4c6b84154b440e!2sBandra%20Kurla%20Complex%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1707292800000"
                width="100%"
                height="100%"
                style={{ 
                  border: 0,
                  borderRadius: '0.5rem'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pinnacle Corporate Park Location - BKC Mumbai"
              ></iframe>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:text-black"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.brightGold;
                      e.currentTarget.style.color = '#0d0d0d';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#374151';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2026 Zoya Events. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row md:justify-end gap-4 text-sm">
              <a 
                href="#" 
                className="text-gray-400 transition-colors hover:opacity-80"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.brightGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9ca3af';
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 transition-colors hover:opacity-80"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.brightGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9ca3af';
                }}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 transition-colors hover:opacity-80"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.brightGold;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9ca3af';
                }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
