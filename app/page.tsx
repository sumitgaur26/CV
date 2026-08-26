import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMetrics } from "@/components/TrustMetrics";
import { Expertise } from "@/components/Expertise";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { AIInfrastructure } from "@/components/AIInfrastructure";
import { Certifications } from "@/components/Certifications";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <Expertise />
        <Timeline />
        <Projects />
        <AIInfrastructure />
        <Certifications />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
