import { CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/data/projects";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { CaseStudyArchitecture } from "./CaseStudyArchitecture";

export function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected case studies."
          description="Systems I designed, built, and operate in production — not side projects."
        />

        <div className="mt-16 space-y-24">
          {caseStudies.map((study, index) => (
            <article key={study.id} className="border-t border-border pt-16 first:border-t-0 first:pt-0">
              <Reveal>
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {String(index + 1).padStart(2, "0")}. {study.name}
                  </h3>
                  <span className="font-body text-sm text-muted">{study.period}</span>
                </div>
                <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-muted">
                  {study.overview}
                </p>
              </Reveal>

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <Reveal delay={0.05}>
                  <CaseStudyArchitecture steps={study.architecture} />
                </Reveal>

                <Reveal delay={0.1} className="space-y-8">
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                      Challenge
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-foreground/90">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
                      Solution
                    </p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-foreground/90">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-accent">
                      Results
                    </p>
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
          ))}
        </div>
      </Container>
    </section>
  );
}
