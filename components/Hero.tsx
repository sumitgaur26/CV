"use client";

import { motion } from "framer-motion";
import { FileDown, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { GridBackground } from "./ui/GridBackground";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <GridBackground />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.02] px-4 py-1.5 font-body text-xs uppercase tracking-[0.2em] text-accent"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-balance font-body text-lg leading-relaxed text-muted"
          >
            {profile.valueProposition}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={profile.resumeUrl} download variant="primary">
              <FileDown size={16} />
              Resume
            </MagneticButton>
            <MagneticButton
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <Linkedin size={16} />
              LinkedIn
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <Mail size={16} />
              Contact
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm lg:block"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-full w-full items-center justify-center rounded-2xl border border-border-strong bg-gradient-to-b from-surface to-surface-2 shadow-soft"
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(45,212,255,0.18), transparent 60%)",
              }}
            />
            <span className="relative font-heading text-7xl font-semibold tracking-tight text-foreground/90 grayscale">
              SG
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
