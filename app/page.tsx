import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMetrics } from "@/components/TrustMetrics";
import { Expertise } from "@/components/Expertise";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { AIInfrastructure } from "@/components/AIInfrastructure";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { PersonJsonLd } from "@/components/PersonJsonLd";

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-accent px-4 py-2 font-body text-sm font-semibold text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustMetrics />
        <Projects />
        <Expertise />
        <Timeline />
        <AIInfrastructure />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
