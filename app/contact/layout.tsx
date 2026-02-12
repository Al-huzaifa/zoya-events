import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Zoya Events',
  description: 'Get in touch with Zoya Events for inquiries, partnerships, and career opportunities. Professional event management services in Mumbai.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
