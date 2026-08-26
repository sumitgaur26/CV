import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { MagneticButton } from "./ui/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <Container className="max-w-2xl text-center">
        <Reveal>
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s talk about your platform.
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted">
            Open to Staff / Principal platform and AI infrastructure roles.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`mailto:${profile.email}`} variant="primary">
            <Mail size={16} />
            Email
          </MagneticButton>
          <MagneticButton href={profile.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
            <Linkedin size={16} />
            LinkedIn
          </MagneticButton>
          {profile.github && (
            <MagneticButton href={profile.github} target="_blank" rel="noopener noreferrer" variant="secondary">
              <Github size={16} />
              GitHub
            </MagneticButton>
          )}
          <MagneticButton href={profile.resumeUrl} download variant="secondary">
            <FileDown size={16} />
            Resume
          </MagneticButton>
        </Reveal>
      </Container>
    </section>
  );
}
