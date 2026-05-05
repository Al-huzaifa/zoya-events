"use client";

import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const address =
    "Pinnacle Corporate Park, 10th Floor, Office No.11, Next to Trader Centre BKC, Bandra (East), Mumbai 400051";

  const mapHref =
    "https://www.google.com/maps/search/?api=1&query=Pinnacle%20Corporate%20Park%2C%2010th%20Floor%2C%20Office%20No.11%2C%20Next%20to%20Trader%20Centre%20BKC%2C%20Bandra%20East%2C%20Mumbai%20400051";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Join Our Team", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/share/1DeTQUHSt8/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/zoya.event?igsh=MThwZTh0cDVuamRjMA==",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919503802865",
    },
  ];

  return (
    <footer className="bg-[#050505] text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans border-t border-[#BF953F]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          <div>
            <div className="mb-5">
              <img
                src="/images/transparentlogo.png"
                alt="Zoya Events Logo"
                className="h-24 w-auto object-contain"
              />
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-sm">
              Creating unforgettable events that bring people together and celebrate life&apos;s most important moments.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#FCF6BA]">
                Contact Info
              </h3>

              <div className="space-y-4">
                <a href={mapHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#BF953F] group-hover:text-[#FCF6BA]" />
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    {address}
                  </p>
                </a>

                <a
                  href="mailto:zoyaevent01@gmail.com?subject=Event%20Inquiry%20for%20Zoya%20Event&body=Hello%20Zoya%20Events%20Team%2C%0A%0AI%20am%20interested%20in%20your%20event%20services.%20Please%20find%20the%20details%20below%3A%0A%0A-%20Event%20Type%3A%20%0A-%20Expected%20Date%3A%20%0A-%20Guest%20Count%3A%20%0A-%20Venue%20Location%3A%20%0A-%20Budget%20Range%3A%20%0A-%20Special%20Requirements%3A%20%0A%0AKindly%20share%20a%20quote%20and%20next%20steps.%0A%0AThank%20you.%0A"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-[#BF953F] group-hover:text-[#FCF6BA]" />
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    zoyaevent01@gmail.com
                  </p>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-[#BF953F]/15">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#BF953F]" />
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
                  Call us now
                </p>
                <a href="tel:+919503802865" className="text-white font-serif font-medium text-lg hover:text-[#FCF6BA]">
                  9503802865
                </a>
              </div>
            </div>
          </div>

          <div className="md:pl-10">
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wide flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]" />
              Company
            </h3>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#FCF6BA] hover:translate-x-2 transition-all duration-300 text-sm w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 uppercase tracking-wide flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]" />
              Our Location
            </h3>

            <a
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-[#BF953F]/45 bg-[#070604] p-3 mb-6 shadow-[0_0_35px_rgba(191,149,63,0.18)] transition hover:border-[#FCF6BA]/70"
            >
              <div className="relative h-64 overflow-hidden rounded-xl border border-[#BF953F]/35 bg-[#090806]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 260" preserveAspectRatio="none">
                  <rect width="420" height="260" fill="#090806" />

                  <path d="M0 40 C80 80 120 30 210 62 C285 88 336 50 420 76" stroke="#BF953F" strokeOpacity="0.25" />
                  <path d="M0 112 C68 90 128 132 200 108 C284 80 336 122 420 96" stroke="#FCF6BA" strokeOpacity="0.18" />
                  <path d="M20 260 C70 205 98 172 145 145 C190 120 240 116 284 78 C320 46 360 35 420 42" stroke="#BF953F" strokeOpacity="0.25" />
                  <path d="M70 0 L110 260" stroke="#BF953F" strokeOpacity="0.14" />
                  <path d="M180 0 L145 260" stroke="#FCF6BA" strokeOpacity="0.1" />
                  <path d="M310 0 L242 260" stroke="#BF953F" strokeOpacity="0.14" />
                  <path d="M0 214 L420 158" stroke="#FCF6BA" strokeOpacity="0.12" />

                  <path
                    d="M46 224 C76 198 82 172 112 150 C148 124 180 134 212 110 C246 84 248 58 282 44 C314 31 342 42 365 24"
                    stroke="#FCF6BA"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.25"
                  />
                  <path
                    d="M46 224 C76 198 82 172 112 150 C148 124 180 134 212 110 C246 84 248 58 282 44 C314 31 342 42 365 24"
                    stroke="#BF953F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="46" cy="224" r="6" fill="#B38728" />
                  <circle cx="365" cy="24" r="7" fill="#FCF6BA" />
                </svg>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_56%,rgba(252,246,186,0.2),transparent_20%),radial-gradient(circle_at_75%_22%,rgba(191,149,63,0.18),transparent_30%)]" />

                <div className="absolute left-[30%] top-[55%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FCF6BA]/30 shadow-[0_0_30px_rgba(191,149,63,0.8)]" />

                <MapPin className="absolute left-[30%] top-[47%] h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-[#FCF6BA] drop-shadow-[0_0_15px_rgba(252,246,186,0.9)] transition-transform group-hover:-translate-y-[60%]" />

                <div className="absolute right-4 top-1/2 w-[54%] -translate-y-1/2 rounded-xl border border-[#BF953F]/40 bg-black/75 p-4 shadow-[0_0_24px_rgba(191,149,63,0.2)] backdrop-blur-md">
                  <p className="mb-2 text-xs font-semibold text-[#FCF6BA]">
                    Mumbai, Maharashtra, India
                  </p>
                  <p className="text-xs leading-relaxed text-zinc-200">
                    {address}
                  </p>
                </div>
              </div>
            </a>

            <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wide flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]" />
              Follow Us
            </h3>

            <div className="flex flex-wrap gap-3">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 border border-[#BF953F]/45 rounded-full flex items-center justify-center text-[#FCF6BA] bg-black shadow-[0_0_18px_rgba(191,149,63,0.22)] hover:bg-[#BF953F] hover:text-black transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-[#BF953F]/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-xs">
              © 2026 Zoya Events. All rights reserved.
            </p>

            <div className="flex gap-6 text-xs">
              <a href="#" className="text-zinc-500 hover:text-[#FCF6BA]">Privacy Policy</a>
              <a href="#" className="text-zinc-500 hover:text-[#FCF6BA]">Terms of Service</a>
              <a href="#" className="text-zinc-500 hover:text-[#FCF6BA]">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
