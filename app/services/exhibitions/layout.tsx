import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition Stalls & Custom Booth Design | Zoya Events",
  description:
    "Custom-designed exhibition stalls and booth solutions. Stand out with our expert design, advanced display systems, and professional installation services.",
  keywords:
    "exhibition stalls, booth design, trade show booths, custom stall design, exhibition solutions",
  openGraph: {
    title: "Exhibition Stalls & Custom Design | Zoya Events",
    description:
      "Premium exhibition booth design and installation services that captivate audiences.",
    url: "/services/exhibitions",
    type: "website",
  },
};

export default function ExhibitionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
