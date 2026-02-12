import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Premium Event Management & Infrastructure Solutions | Zoya Events",
  description:
    "Explore Zoya Events' comprehensive services: Corporate Events, Exhibitions & Stalls, and German Hangar Temporary Sales Offices. Premium luxury infrastructure solutions with 13+ years of expertise.",
  keywords:
    "event management services, corporate events, exhibition stalls, temporary sales office, German Hangar, event infrastructure",
  openGraph: {
    title: "Our Services | Zoya Events",
    description:
      "Premium bespoke event management and infrastructure solutions for discerning brands.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
