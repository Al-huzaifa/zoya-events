import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/contact/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import ChatbotWrapper from "@/components/ChatbotWrapper";

const ZoyaAIChatbot = ChatbotWrapper;

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zoya Event | Premium Exhibition Infrastructure & Luxury Event Management in Mumbai",
  description:
    "Mumbai's premier turnkey event production company. Providing German hangers, pagoda tents, Octonorm stalls, industrial AC, staging, corporate lounges, Mojo barricades, and full inventory hire. Specializing in luxury event management, we create unforgettable experiences for corporate events, exhibitions, and private parties. Contact us for bespoke event solutions that elevate your brand and captivate your audience.",
  keywords: "German Hangar Mumbai, Event Management Mumbai, Luxury Events, Exhibition Infrastructure, Pagoda Tents, Sales Office",
  openGraph: {
    title: "Zoya Event | Premium Exhibition Infrastructure",
    description: "Mumbai's premier turnkey event production company.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#F5F1E8] pt-[68px] sm:pt-[80px] md:pt-[88px]">
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <ZoyaAIChatbot />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
