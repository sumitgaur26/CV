"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/lib/types";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, revealItem } from "./ui/Reveal";

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="certifications" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials."
          description="Formal validation across cloud, Kubernetes, infrastructure automation, and AI infrastructure."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <motion.button
              key={cert.name}
              variants={revealItem}
              onClick={() => setSelected(cert)}
              className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-surface/30 p-6 text-left transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-background/60 text-accent">
                <Award size={18} />
              </span>
              <div>
                <h3 className="font-heading text-base font-medium leading-snug text-foreground">
                  {cert.name}
                </h3>
                <p className="mt-1 font-body text-sm text-muted">{cert.issuer}</p>
              </div>
            </motion.button>
          ))}
        </RevealGroup>
      </Container>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={selected.name}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-border-strong bg-surface p-8 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-strong bg-background/60 text-accent">
                  <Award size={20} />
                </span>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="text-muted hover:text-foreground"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-foreground">
                {selected.name}
              </h3>
              <dl className="mt-4 space-y-2 font-body text-sm">
                <div className="flex justify-between border-t border-border py-2">
                  <dt className="text-muted">Issuer</dt>
                  <dd className="text-foreground">{selected.issuer}</dd>
                </div>
                {selected.issueDate && (
                  <div className="flex justify-between border-t border-border py-2">
                    <dt className="text-muted">Issued</dt>
                    <dd className="text-foreground">{selected.issueDate}</dd>
                  </div>
                )}
              </dl>
              {selected.credentialUrl && (
                <a
                  href={selected.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:underline"
                >
                  View credential <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
