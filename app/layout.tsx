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
  keywords: [
    "Zoya Event",
    "Zoya Events Mumbai",
    "German Hangar Mumbai",
    "Event Management Mumbai",
    "Luxury Events Mumbai",
    "Exhibition Infrastructure",
    "Pagoda Tents",
    "Sales Office",
    "Corporate Events Mumbai",
    "Exhibition Stall",
    "Octonorm Stall",
    "Event Production Company",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Zoya Event | Premium Exhibition Infrastructure & Luxury Event Management",
    description:
      "Mumbai's premier turnkey event production company. German hangers, pagoda tents, Octonorm stalls, staging, corporate lounges & full luxury event solutions.",
    url: "https://www.zoyaevent.com",
    siteName: "Zoya Event",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Zoya Event - Premium Event Management Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoya Event | Luxury Event Management Mumbai",
    description:
      "Mumbai's premier turnkey event production company. German hangers, pagoda tents, Octonorm stalls & luxury event solutions.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
