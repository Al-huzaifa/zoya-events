"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import type { Mesh } from "three";

type ContactCardData = {
  id: string;
  icon: string;
  label: string;
  value: string;
  sublabel: string;
  href: string;
  accentColor: string;
};

const CONTACT_CARDS: ContactCardData[] = [
  {
    id: "phone",
    icon: "☎",
    label: "Live Support",
    value: "9503802865",
    sublabel: "Speak to a Director",
    href: "tel:+919503802865",
    accentColor: "#D4AF37",
  },
  {
    id: "email",
    icon: "✉",
    label: "Rapid Response",
    value: "zoyaevent01@gmail.com",
    sublabel: "Submit Project Brief",
    href: "mailto:zoyaevent01@gmail.com",
    accentColor: "#F7E7CE",
  },
];

function GlobeModel() {
  const globeRef = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group scale={[0.88, 0.88, 0.88]}>
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#D4AF37"
          emissive="#8B7500"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.14}
        />
      </Sphere>

      <Sphere args={[2.16, 32, 32]}>
        <meshBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.12}
          wireframe
        />
      </Sphere>

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 3;
        const z = Math.sin(angle) * 3;

        return (
          <Sphere key={i} args={[0.08, 16, 16]} position={[x, 0, z]}>
            <meshBasicMaterial color="#F7E7CE" />
          </Sphere>
        );
      })}
    </group>
  );
}

function SceneLighting() {
  return (
    <>
      <directionalLight position={[8, 6, 4]} intensity={2.4} color="#FFE6B0" />
      <directionalLight position={[-6, 4, -6]} intensity={1} color="#1a1a2e" />
      <pointLight position={[0, 0, 8]} intensity={1.4} color="#D4AF37" />
      <ambientLight intensity={0.42} color="#ffffff" />
    </>
  );
}

function Canvas3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Stars radius={90} depth={44} count={850} factor={3.6} fade speed={0.45} />
      <SceneLighting />

      <Suspense fallback={null}>
        <GlobeModel />
        <Environment preset="warehouse" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.8}
        rotateSpeed={0.25}
      />
    </Canvas>
  );
}

function ContactCard({
  card,
  index,
}: {
  card: ContactCardData;
  index: number;
}) {
  return (
    <motion.a
      href={card.href}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
      className="group relative block min-h-[170px] overflow-hidden rounded-2xl border p-4 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all sm:min-h-[170px] sm:p-5 md:min-h-[190px]"

      style={{
        background: "rgba(20,20,30,0.86)",
        borderColor: `${card.accentColor}44`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${card.accentColor}24 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex h-full min-w-0 items-center gap-4 sm:gap-5">
        <div
          className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl"
          style={{
            background: `linear-gradient(135deg, ${card.accentColor}44, ${card.accentColor}22)`,
            border: `2px solid ${card.accentColor}88`,
            boxShadow: `0 0 30px ${card.accentColor}44`,
          }}
        >
          {card.icon}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex min-w-0 items-center gap-2">
            <div
              className="h-2 w-2 shrink-0 animate-pulse rounded-full"
              style={{ background: card.accentColor }}
            />
            <span className="truncate text-[10px] font-mono uppercase tracking-[0.18em] text-gray-400 sm:text-xs">
              {card.label}
            </span>
          </div>

          <h3
            className="max-w-full break-words font-mono text-[15px] font-bold leading-snug transition-transform group-hover:scale-[1.02] min-[380px]:text-base sm:text-xl md:text-2xl"

            style={{
              color: card.accentColor,
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {card.value}
          </h3>

          <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
            {card.sublabel}
          </p>
        </div>

        <svg
          className="hidden h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
          style={{ color: card.accentColor }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H9M17 7v8"
          />
        </svg>
      </div>
    </motion.a>
  );
}

export default function Contact3DHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[380px] w-[720px] max-w-none -translate-x-1/2 sm:h-[520px] md:h-full md:w-full">
          <Suspense
            fallback={
              <div className="h-full w-full bg-gradient-to-b from-gray-900 to-black" />
            }
          >
            <Canvas3D />
          </Suspense>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.16) 0%, transparent 52%), linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.78) 78%, #000 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-14 md:py-18 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 max-w-4xl text-center sm:mb-10 md:mb-12"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-yellow-600 md:w-12" />
            <span className="whitespace-nowrap text-[10px] font-mono uppercase tracking-[0.24em] text-yellow-500 sm:text-xs">
              Direct Uplink
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-yellow-600 md:w-12" />
          </div>

          <h1 className="text-[clamp(2.55rem,12vw,7rem)] font-black leading-[0.95] tracking-tight">
            Initiate
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #D4AF37 0%, #F7E7CE 50%, #8a701f 100%)",
              }}
            >
              The Extraordinary.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-xs font-light uppercase tracking-[0.18em] text-gray-400 sm:text-sm">
            Ready to deploy. Available 24/7 for high-stakes execution.
          </p>
        </motion.div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
          {CONTACT_CARDS.map((card, index) => (
            <ContactCard key={card.id} card={card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:text-xs md:text-sm"
        >
          <div className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-yellow-500" />
          <span className="break-words">Mumbai HQ • Operational 24/7</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-center justify-center rounded-full border border-yellow-600">
          <div className="h-2 w-1 animate-pulse rounded-full bg-yellow-600" />
        </div>
      </motion.div>
    </section>
  );
}
