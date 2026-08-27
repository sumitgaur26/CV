"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileDown, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { BASE_PATH } from "@/lib/site";
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
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-balance font-body text-xl font-medium leading-snug text-foreground/90"
          >
            {profile.positioning}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-4 max-w-xl text-balance font-body text-base leading-relaxed text-muted"
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

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-8 font-body text-sm tracking-wide text-muted lg:hidden"
          >
            NVIDIA NCA-AIIO &middot; AWS SA Pro &middot; CKA
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-soft"
          >
            <Image
              src={`${BASE_PATH}/images/portrait.jpg`}
              alt="Portrait of Sumit Gaur"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 0px"
              className="object-cover object-top grayscale contrast-[1.05]"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,17,31,0) 55%, rgba(8,17,31,0.55) 100%), radial-gradient(circle at 30% 15%, rgba(45,212,255,0.16), transparent 55%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.06]" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
