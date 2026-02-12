import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack sometimes infers the workspace root incorrectly when multiple
  // lockfiles exist. Setting `turbopack.root` ensures the correct project root.
  // @ts-ignore - `turbopack` is a Next.js runtime option not yet in the type defs
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
    ],
  },
};

export default nextConfig;