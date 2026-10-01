import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecsSection from "@/components/SpecsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-neon-lime selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Core Pinned Scroll-Driven Hero Section */}
      <Hero />

      {/* Section 2: Engineering Matrix & Telemetry Specs */}
      <SpecsSection />

      {/* Section 3: Subsystem Aero Lab & Dynamic Modules */}
      <ShowcaseSection />

      {/* Section 4: Cockpit Access & Telemetry Allocation */}
      <CTASection />

      {/* Portfolio Footer */}
      <Footer />
    </main>
  );
}
