"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FieldIconProps = {
  type: "user" | "phone" | "mail" | "briefcase";
};

const FEATURES = [
  {
    icon: "01",
    title: "Priority Access",
    desc: "Inquiries skip the general queue.",
  },
  {
    icon: "02",
    title: "Director Oversight",
    desc: "Projects reviewed by senior management.",
  },
  {
    icon: "03",
    title: "NDA Compliant",
    desc: "Your project details remain confidential.",
  },
];

const inputBase =
  "w-full rounded-xl border border-black/10 bg-white/55 px-4 py-3 text-sm text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(0,0,0,0.12)] outline-none transition placeholder:text-zinc-500 focus:border-[#b8860b] focus:bg-white focus:shadow-[0_0_0_3px_rgba(212,175,55,0.18),0_14px_30px_rgba(0,0,0,0.14)]";

function FieldIcon({ type }: FieldIconProps) {
  const icons: Record<FieldIconProps["type"], string> = {
    user: "M12 12a4 4 0 100-8 4 4 0 000 8zm7 8a7 7 0 10-14 0",
    phone:
      "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.9.33 1.77.62 2.61a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.47-1.14a2 2 0 012.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0122 16.92z",
    mail: "M4 4h16v16H4z M4 7l8 6 8-6",
    briefcase:
      "M10 6V5a2 2 0 012-2h0a2 2 0 012 2v1 M3 7h18v13H3z M3 12h18",
  };

  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#b8860b]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icons[type]} />
    </svg>
  );
}

export default function Contact3DForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.phone.trim()) newErrors.phone = "Phone required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject required";
    if (!formData.message.trim()) newErrors.message = "Message required";

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.sheetmonkey.io/form/fqTMQChHT8WFaY8X2ktRJb",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            "Created At": new Date().toLocaleString(),
            Source: "Contact Form",
          }),
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setErrors({ submit: "Submission failed. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative overflow-hidden bg-[#F5F1E8] px-4 py-12 text-[#0a0a0a] md:px-6 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(212,175,55,0.2),transparent_24%),radial-gradient(circle_at_50%_75%,rgba(212,175,55,0.13),transparent_34%),linear-gradient(180deg,#030305,#0c0c10_50%,#030305)]" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mx-auto max-w-7xl"
        style={{ perspective: "1400px" }}
      >
        <div className="relative rounded-[1.5rem] border border-[#d4af37]/30 bg-gradient-to-br from-white via-[#FFFBF0] to-[#F9F5ED] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.08),0_0_50px_rgba(212,175,55,0.12)] md:rounded-[2rem] md:p-5">
          <div className="absolute inset-x-8 bottom-0 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_28px_rgba(212,175,55,0.6)]" />

          <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[1.35rem] border border-[#D4AF37]/30 bg-[#FFFBF0] p-6 shadow-[inset_0_1px_0_rgba(212,175,55,0.1)] md:p-10 lg:min-h-[720px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(246,215,115,0.22),transparent_26%),radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.18),transparent_30%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(246,215,115,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(246,215,115,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/35 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#f5d77d] backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.95)]" />
                    Production Desk Live
                  </div>

                  <h2 className="max-w-md text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
                    Build The
                    <span className="block bg-gradient-to-b from-[#fff2bf] via-[#d4af37] to-[#8a5b08] bg-clip-text text-transparent">
                      Moment.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-7 text-zinc-300 md:text-lg">
                    A premium command center for event builds, exhibition
                    structures, decor, fabrication and high-pressure corporate
                    execution.
                  </p>
                </div>

                <div className="relative mx-auto my-10 h-72 w-72 sm:h-80 sm:w-80">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-[#f6d773]/25"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 rounded-full border border-[#f6d773]/35"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-16 rounded-full bg-[radial-gradient(circle,rgba(246,215,115,0.28),rgba(184,134,11,0.08)_45%,transparent_70%)] blur-sm"
                    animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.45, 0.9, 0.45] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#f6d773]/45 bg-gradient-to-br from-[#241603] via-black to-[#090806] shadow-[0_24px_60px_rgba(0,0,0,0.65),0_0_35px_rgba(246,215,115,0.28)]"
                    animate={{ y: [0, -12, 0], rotateZ: [-2, 2, -2] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-4 rounded-xl border border-[#f6d773]/25" />
                    <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6d773] shadow-[0_0_42px_rgba(246,215,115,0.8)]" />
                  </motion.div>

                  {["Hangar", "Stage", "Decor", "Exhibit"].map((item, index) => (
                    <motion.div
                      key={item}
                      className="absolute rounded-xl border border-[#d4af37]/35 bg-black/70 px-3 py-2 text-xs font-black uppercase tracking-wider text-[#f6d773] shadow-[0_12px_28px_rgba(0,0,0,0.35)] backdrop-blur-md"
                      style={{
                        left: index === 0 || index === 2 ? "0%" : "68%",
                        top: index < 2 ? `${18 + index * 10}%` : `${62 + (index - 2) * 10}%`,
                      }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 3 + index * 0.35,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["24/7", "Response"],
                    ["100%", "Direct Team"],
                    ["Mumbai", "HQ"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-[#d4af37]/25 bg-black/55 p-4 backdrop-blur-md"
                    >
                      <p className="text-2xl font-black text-[#f6d773]">
                        {value}
                      </p>
                      <p className="text-xs uppercase tracking-wider text-zinc-400">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.35rem] border border-[#d4af37]/35 bg-[#f4efe6] p-5 text-zinc-950 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.65),0_0_28px_rgba(212,175,55,0.25)] md:p-10">
              <div className="pointer-events-none absolute inset-3 rounded-[1.1rem] border border-[#d4af37]/35" />
              <div className="absolute right-6 top-6 text-5xl leading-none text-[#b8860b] drop-shadow-[0_4px_12px_rgba(184,134,11,0.35)] md:text-6xl">
                ↗
              </div>

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4 pr-16">
                  <h3 className="text-xl font-black uppercase tracking-[0.16em]">
                    Project Brief
                  </h3>
                  <span className="h-px flex-1 bg-[#b8860b]/60" />
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex min-h-[430px] flex-col items-center justify-center rounded-2xl border border-emerald-500/25 bg-emerald-500/10 text-center"
                    >
                      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-4xl text-emerald-700">
                        ✓
                      </div>
                      <h4 className="text-2xl font-black">
                        Message Transmitted.
                      </h4>
                      <p className="mt-2 text-zinc-600">
                        Our team is reviewing your brief.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      onSubmitCapture={(e) => e.preventDefault()}
                      className="space-y-5"
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                            Name <span className="text-[#b8860b]">*</span>
                          </label>
                          <div className="flex items-center gap-3 rounded-xl bg-white/40 px-3">
                            <FieldIcon type="user" />
                            <input
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={inputBase}
                              placeholder="Full Name"
                            />
                          </div>
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                            Phone <span className="text-[#b8860b]">*</span>
                          </label>
                          <div className="flex items-center gap-3 rounded-xl bg-white/40 px-3">
                            <FieldIcon type="phone" />
                            <input
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={inputBase}
                              placeholder="+91..."
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                          Email <span className="text-[#b8860b]">*</span>
                        </label>
                        <div className="flex items-center gap-3 rounded-xl bg-white/40 px-3">
                          <FieldIcon type="mail" />
                          <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputBase}
                            placeholder="john@company.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                          Subject <span className="text-[#b8860b]">*</span>
                        </label>
                        <div className="flex items-center gap-3 rounded-xl bg-white/40 px-3">
                          <FieldIcon type="briefcase" />
                          <input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={inputBase}
                            placeholder="Project Inquiry / Partnership"
                          />
                        </div>
                        {errors.subject && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-black uppercase tracking-wider">
                          Message <span className="text-[#b8860b]">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`${inputBase} resize-none`}
                          placeholder="Tell us about your project requirements..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-red-600">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#d4af37]/50 bg-black px-6 py-4 text-sm font-black uppercase tracking-[0.2em] text-[#f7d979] shadow-[0_12px_28px_rgba(0,0,0,0.35),0_0_18px_rgba(212,175,55,0.28)] transition hover:-translate-y-0.5 hover:text-white disabled:opacity-60"
                      >
                        <span className="text-2xl">➤</span>
                        {isSubmitting ? "Sending..." : "Send Securely"}
                      </button>

                      {errors.submit && (
                        <p className="text-center text-xs text-red-600">
                          {errors.submit}
                        </p>
                      )}

                      <p className="text-center text-xs text-zinc-600">
                        Your information is protected and encrypted
                      </p>
                      <p className="text-center text-xs text-zinc-400">
                        Your event details are securely encrypted and protected for the ZoyaEvent team.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-b-[1.25rem] border-x border-b border-[#d4af37]/25 bg-black/75 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 border-[#d4af37]/20 px-5 py-5 md:border-r last:border-r-0"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f6d773]/35 text-sm font-black text-[#f6d773] shadow-[0_0_18px_rgba(246,215,115,0.25)]">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-snug text-[#f5d995]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
