import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Events Management | Premium Event Solutions | Zoya Events",
  description:
    "Expert corporate event management services. From board meetings to grand conferences, we deliver luxury event experiences with full coordination and premium finishes.",
  keywords:
    "corporate events, event management, conference organizing, luxury events, event planning",
  openGraph: {
    title: "Corporate Events Management | Zoya Events",
    description:
      "Premium corporate event solutions with 13+ years of proven expertise.",
    url: "/services/corporate-events",
    type: "website",
  },
};

export default function CorporateEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
