import Hero from "@/components/Hero";
import About from "@/components/About";
import OurWork from "@/components/OurWork";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Full-screen hero with background video (below the fixed navbar) */}
      <Hero />

      {/* About section */}
      <About />

      {/* Our Work gallery (moved from Services) */}
      <OurWork />
    </main>
  );
}