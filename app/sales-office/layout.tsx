import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temporary Sales Office Solutions | Zoya Events",
  description:
    "Discover our premium German Hangar temporary sales office solutions. Fast deployment, luxury interiors, and 2-3 month durability for your business needs.",
  keywords:
    "temporary sales office, German Hangar, sales environment, temporary structures, event solutions",
  openGraph: {
    title: "Temporary Sales Office Solutions | Zoya Events",
    description:
      "Premium German Hangar temporary sales office solutions with rapid deployment and luxury designs.",
    url: "/sales-office",
    type: "website",
  },
};

export default function SalesOfficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
