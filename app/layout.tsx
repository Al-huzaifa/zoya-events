import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZoyaAIChatbot from "@/components/ZoyaAIChatbot";
import FloatingWhatsApp from "@/components/contact/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoya Event | Premium Exhibition Infrastructure & Luxury Event Management in Mumbai",
  description: "​Mumbai's premier turnkey event production company. Providing German hangers, pagoda tents, Octonorm stalls, industrial AC, staging, corporate lounges, Mojo barricades, and full inventory hire. Specializing in luxury event management, we create unforgettable experiences for corporate events, exhibitions, and private parties. Contact us for bespoke event solutions that elevate your brand and captivate your audience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black pt-20`}
      >
        <Navbar />
        {children}
        <Footer />
        <ZoyaAIChatbot />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
