"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { caseStudies } from "@/data/projects";
import type { CaseStudy } from "@/lib/types";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { CaseStudyArchitecture } from "./CaseStudyArchitecture";

const FEATURED_COUNT = 2;

function CaseStudyArticle({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article id={study.id} className="scroll-mt-28 border-t border-border pt-16 first:border-t-0 first:pt-0">
      <Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {String(index + 1).padStart(2, "0")}. {study.name}
          </h3>
          <span className="font-body text-sm text-muted">{study.period}</span>
        </div>
        <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-muted">{study.overview}</p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <CaseStudyArchitecture steps={study.architecture} />
        </Reveal>

        <Reveal delay={0.1} className="space-y-8">
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">Challenge</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-foreground/90">{study.challenge}</p>
          </div>
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">Solution</p>
            <p className="mt-2 font-body text-sm leading-relaxed text-foreground/90">{study.solution}</p>
          </div>
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-wider text-accent">Results</p>
            <ul className="mt-2 space-y-2">
              {study.results.map((result) => (
                <li key={result} className="flex items-start gap-2 font-body text-sm text-foreground">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
        {study.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border-strong px-3 py-1 font-body text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </Reveal>
    </article>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = caseStudies.slice(0, FEATURED_COUNT);
  const rest = caseStudies.slice(FEATURED_COUNT);

  return (
    <section id="projects" className="bg-surface/30 py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected case studies."
          description="Systems I designed, built, and operate in production, not side projects."
        />

        <div className="mt-16 space-y-24">
          {featured.map((study, index) => (
            <CaseStudyArticle key={study.id} study={study} index={index} />
          ))}
        </div>

        {rest.length > 0 && (
          <>
            <AnimatePresence initial={false}>
              {showAll && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-24 pt-24">
                    {rest.map((study, index) => (
                      <CaseStudyArticle key={study.id} study={study} index={FEATURED_COUNT + index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-16 flex justify-center border-t border-border pt-12">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="flex items-center gap-2 rounded-xl border border-border-strong px-5 py-3 font-body text-sm font-medium text-foreground/85 transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {showAll ? "Show fewer case studies" : `View ${rest.length} more case studies`}
                <ChevronDown
                  size={16}
                  className={showAll ? "rotate-180 transition-transform" : "transition-transform"}
                />
              </button>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
