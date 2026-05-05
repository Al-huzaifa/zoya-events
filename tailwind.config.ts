import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "luxury-black": "#0a0a0a",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        widest: ".3em",
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
export default config;