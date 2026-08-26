"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/experience";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/utils";

export function Timeline() {
  const [expanded, setExpanded] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Career progression."
          description="A decade of platform ownership, from Linux administration to leading a platform team."
        />

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[9px] top-0 w-px bg-border" aria-hidden="true" />

          <ol className="space-y-4">
            {experience.map((role, index) => {
              const isOpen = expanded === role.id;
              return (
                <Reveal key={role.id} delay={index * 0.05}>
                  <li className="relative pl-9">
                    <span
                      className={cn(
                        "absolute left-0 top-2 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2",
                        isOpen ? "border-accent bg-background" : "border-border-strong bg-surface"
                      )}
                      aria-hidden="true"
                    >
                      {isOpen && <span className="h-2 w-2 rounded-full bg-accent" />}
                    </span>

                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : role.id)}
                      aria-expanded={isOpen}
                      className="flex w-full flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface/30 px-5 py-4 text-left transition-colors hover:border-accent/30"
                    >
                      <div>
                        <p className="font-heading text-base font-medium text-foreground">
                          {role.title} · <span className="text-muted">{role.company}</span>
                        </p>
                        <p className="mt-1 font-body text-sm text-muted">{role.period}</p>
                      </div>
                      <ChevronDown
                        size={18}
                        className={cn(
                          "shrink-0 text-muted transition-transform duration-300",
                          isOpen && "rotate-180 text-accent"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="ml-1 mt-3 rounded-xl border border-border bg-background/40 px-5 py-5">
                            <p className="font-body text-sm leading-relaxed text-foreground/90">
                              {role.summary}
                            </p>
                            <ul className="mt-4 space-y-2">
                              {role.achievements.map((achievement) => (
                                <li
                                  key={achievement}
                                  className="flex gap-2 font-body text-sm leading-relaxed text-muted"
                                >
                                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {role.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-border-strong px-3 py-1 font-body text-xs text-muted"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
