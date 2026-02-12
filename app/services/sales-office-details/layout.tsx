import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "German Hangar Sales Offices | Temporary Sales Infrastructure | Zoya Events",
  description:
    "Rapidly deployable German Hangar sales offices for 2-3 month campaigns. Complete infrastructure with luxury interiors, climate control, and professional setup.",
  keywords:
    "German Hangar, temporary sales office, sales infrastructure, rapid deployment, luxury interiors",
  openGraph: {
    title: "German Hangar Sales Offices | Zoya Events",
    description:
      "Premium temporary sales infrastructure deployed in days with complete amenities.",
    url: "/services/sales-office-details",
    type: "website",
  },
};

export default function SalesOfficeDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
