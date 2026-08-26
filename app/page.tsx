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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:text-background"
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
