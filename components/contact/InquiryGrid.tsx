// components/Contact3DGrid.jsx

import { motion } from "framer-motion";

type ContactInfoCardType = {
  id: string;
  icon: string;
  title: string;
  email: string;
  phone: string;
  featured?: boolean;
};

const CONTACT_INFO: ContactInfoCardType[] = [
  {
    id: "general",
    icon: "✉",
    title: "General Inquiries",
    email: "zoyaevent@gmail.com",
    phone: "9503802865",
  },
  {
    id: "partnerships",
    icon: "🤝",
    title: "Partnerships",
    email: "zoyaevent01@gmail.com",
    phone: "9503802865",
    featured: true,
  },
  {
    id: "sales",
    icon: "▦",
    title: "Sales Office",
    email: "zoyaevent01@gmail.com",
    phone: "9503802865",
  },
];

function ContactCard({ card, index }: { card: ContactInfoCardType; index: number }) {
  return (
    <motion.a
      href={`mailto:${card.email}`}
      initial={{ opacity: 0, y: 55, rotateX: 16 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.14, ease: "easeOut" }}
      whileHover={{
        y: -14,
        rotateX: 4,
        rotateY: index === 0 ? -6 : index === 2 ? 6 : 0,
      }}
      className={`
        group relative flex min-h-[245px] flex-col items-center justify-center
        rounded-[22px] border border-white/25 px-6 py-8 text-center
        shadow-[0_35px_90px_rgba(0,0,0,0.75)]
        backdrop-blur-2xl transition-all duration-500
        ${card.featured ? "scale-105 md:scale-110 z-20" : "z-10"}
      `}
      style={{
        transformStyle: "preserve-3d",
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.22), rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12))",
        boxShadow: card.featured
          ? "0 0 55px rgba(245,204,91,0.5), inset 0 0 40px rgba(255,255,255,0.16)"
          : "0 28px 80px rgba(0,0,0,0.75), inset 0 0 35px rgba(255,255,255,0.1)",
      }}
    >
      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-white/35 via-transparent to-black/35 opacity-70" />

      <div className="absolute -inset-px rounded-[22px] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(255,225,134,0.8),transparent,rgba(255,225,134,0.5))]" />

      <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-yellow-200/40 bg-black/25 text-4xl text-yellow-100 shadow-[0_0_28px_rgba(255,221,126,0.55)] transition-transform duration-500 group-hover:scale-110">
        <span className="drop-shadow-[0_0_12px_rgba(255,222,130,0.9)]">
          {card.icon}
        </span>
      </div>

      <h3 className="relative z-10 text-2xl font-black text-[#D4AF37] drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
        {card.title}
      </h3>

      <div className="relative z-10 mt-4 space-y-1 text-sm font-medium text-[#3a3a3a]/90">
        <p>{card.email}</p>
        <p>{card.phone}</p>
      </div>
    </motion.a>
  );
}

export default function Contact3DGrid() {
  return (
    <section className="relative overflow-hidden bg-[#F5F1E8] py-20 text-[#0a0a0a] md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(255,219,112,0.55),transparent_18%),radial-gradient(circle_at_50%_45%,rgba(226,174,55,0.22),transparent_34%),linear-gradient(180deg,#050505,#111009_55%,#050505)]" />

      <div className="absolute left-1/2 top-[38%] h-px w-[620px] -translate-x-1/2 bg-yellow-200/50 shadow-[0_0_30px_rgba(255,222,121,0.9)]" />

      <div className="pointer-events-none absolute left-1/2 top-[31%] h-44 w-[560px] -translate-x-1/2">
        <div className="absolute left-8 top-12 h-px w-64 rotate-[18deg] bg-yellow-200 shadow-[0_0_16px_#ffe58a]" />
        <div className="absolute right-6 top-14 h-px w-64 -rotate-[18deg] bg-yellow-200 shadow-[0_0_16px_#ffe58a]" />
        <div className="absolute left-1/2 top-2 h-32 w-px rotate-90 bg-yellow-100/70 shadow-[0_0_22px_#fff0a3]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-black tracking-tight text-[#e9d6a0] drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] md:text-6xl">
            How Can We Help You?
          </h2>

          <div className="mt-4 flex items-center justify-center gap-4">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#f2dfb0]">
              Get Connected
            </span>
            <span className="h-[2px] w-24 bg-[#f2dfb0]" />
          </div>
        </motion.div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-7 md:grid-cols-3 md:gap-8">
          {CONTACT_INFO.map((card, index) => (
            <ContactCard key={card.id} card={card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >
          <div className="rounded-xl border border-white/20 bg-gradient-to-r from-black via-zinc-900 to-black px-6 py-4 text-center shadow-[0_18px_45px_rgba(0,0,0,0.8),0_0_28px_rgba(255,221,126,0.2)]">
            <a
              href="#contact"
              className="text-lg font-black text-[#fff0bd] transition-colors hover:text-white"
            >
              Can&apos;t find what you&apos;re looking for? Send us a message →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}