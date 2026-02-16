import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurWork from "@/components/OurWork";


export default function Home() {
  return (
    <main className="bg-black">
      {/* Full-screen hero with background video (below the fixed navbar) */}
      <Hero />

      {/* About section */}
      <About />

      <WhyChooseUs />
      

      {/* Our Work gallery (moved from Services) */}
      <OurWork />
    </main>
  );
}