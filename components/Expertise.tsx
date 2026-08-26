"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cloud, Layers, Cpu, Boxes, Blocks, ShieldCheck, Workflow, LucideIcon } from "lucide-react";
import { expertiseAreas } from "@/data/expertise";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  "Cloud Infrastructure": Cloud,
  "Platform Engineering": Layers,
  "AI / GPU Infrastructure": Cpu,
  Kubernetes: Boxes,
  "Terraform / IaC": Blocks,
  DevSecOps: ShieldCheck,
  Automation: Workflow,
};

export function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Where I operate."
          description="Seven capability areas, each grounded in a real problem I've solved in production."
        />

        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-border lg:flex lg:h-[440px]">
          {expertiseAreas.map((area, i) => {
            const Icon = ICONS[area.title] ?? Layers;
            const isActive = active === i;
            return (
              <div
                key={area.title}
                onMouseEnter={() => setActive(i)}
                style={{
                  flex: isActive ? "1 1 0%" : "0 0 148px",
                  transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="relative flex h-full min-w-0 cursor-pointer flex-col justify-between overflow-hidden border-r border-border bg-surface/30 p-6 last:border-r-0 hover:bg-surface/60"
              >
                <div className="flex min-w-0 flex-col items-start gap-3">
                  <Icon size={20} className="shrink-0 text-accent" />
                  <span className="font-heading text-base font-medium leading-snug text-foreground">
                    {area.title}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 }}
                      className="min-w-[280px] space-y-4"
                    >
                      <div>
                        <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                          Problem
                        </p>
                        <p className="mt-1 font-body text-sm leading-relaxed text-foreground/90">
                          {area.problem}
                        </p>
                      </div>
                      <div>
                        <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                          Approach
                        </p>
                        <p className="mt-1 font-body text-sm leading-relaxed text-foreground/90">
                          {area.approach}
                        </p>
                      </div>
                      <div>
                        <p className="font-body text-xs font-medium uppercase tracking-wider text-accent">
                          Impact
                        </p>
                        <p className="mt-1 font-body text-sm leading-relaxed text-foreground">
                          {area.impact}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="font-body text-sm text-muted">{area.summary}</p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: stacked, always expanded */}
        <div className="mt-14 grid gap-4 lg:hidden">
          {expertiseAreas.map((area) => {
            const Icon = ICONS[area.title] ?? Layers;
            return (
              <div key={area.title} className="rounded-2xl border border-border bg-surface/30 p-6">
                <div className="flex items-center gap-3">
                  <Icon size={20} className="text-accent" />
                  <span className="font-heading text-lg font-medium text-foreground">
                    {area.title}
                  </span>
                </div>
                <p className="mt-3 font-body text-sm text-muted">{area.summary}</p>
                <div className="mt-4 space-y-3 border-t border-border pt-4">
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                      Problem
                    </p>
                    <p className="mt-1 font-body text-sm text-foreground/90">{area.problem}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                      Approach
                    </p>
                    <p className="mt-1 font-body text-sm text-foreground/90">{area.approach}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-accent">
                      Impact
                    </p>
                    <p className="mt-1 font-body text-sm text-foreground">{area.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
