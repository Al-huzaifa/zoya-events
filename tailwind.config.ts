import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // This ensures your Navbar folder is scanned
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your brand-specific colors
        gold: "#D4AF37",         // Classic metallic gold
        "luxury-black": "#0a0a0a", // Deep, rich black
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        widest: ".3em", // For that high-end spaced-out typography
      },
    },
  },
  plugins: [],
};
export default config;