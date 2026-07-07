import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import OurWork from "@/components/OurWork";

export default function Home() {
  return (
    <main>
      {/* 1. Full-screen cinematic scroll-scrub video hero */}
      <Hero />

      {/* 2. Animated stats strip — dark, keeps momentum from hero */}
      <StatsBar />

      {/* 3. About / Sales Office — cream, editorial feel */}
      <About />

      {/* 4. Why Choose Us — dark charcoal, dramatic */}
      <WhyChooseUs />

      {/* 5. Client testimonials — warm cream, social proof */}
      <Testimonials />

      {/* 6. Services showcase — near-black with 3D gold cards */}
      <OurWork />
    </main>
  );
}