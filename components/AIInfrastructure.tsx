"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, Gauge, Server, Construction } from "lucide-react";
import { aiInfraCapabilities, genAiTools, genAiProjectsInProgress } from "@/data/aiInfrastructure";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, revealItem } from "./ui/Reveal";

const FLOW_NODES = [
  { label: "Data", icon: Database },
  { label: "InfiniBand Fabric", icon: Network },
  { label: "GPU Nodes (DGX)", icon: Cpu },
  { label: "Slurm / Kubernetes", icon: Server },
  { label: "DCGM Monitoring", icon: Gauge },
];

function FlowConnector() {
  return (
    <div className="relative hidden h-px flex-1 bg-border-strong sm:block">
      <motion.span
        className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-accent"
        style={{ boxShadow: "0 0 10px 2px rgba(45,212,255,0.7)" }}
        animate={{ left: ["0%", "100%"] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function AIInfrastructure() {
  return (
    <section id="ai-infrastructure" className="border-y border-border bg-surface/40 py-28">
      <Container>
        <SectionHeading
          eyebrow="AI Infrastructure"
          title="Platform foundations for AI workloads."
          description="NVIDIA-certified (NCA-AIIO) and AWS Certified Generative AI Developer - Professional, extending a decade of cloud platform ownership into GPU cluster architecture, agentic systems, and RAG pipelines."
        />

        <Reveal delay={0.1} className="mt-16 overflow-x-auto">
          <div className="flex min-w-[640px] items-center gap-3 rounded-2xl border border-border bg-background/60 p-6 sm:p-8">
            {FLOW_NODES.map((node, i) => (
              <div key={node.label} className="flex flex-1 items-center gap-3">
                <div className="flex flex-1 flex-col items-center gap-2 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-surface text-accent">
                    <node.icon size={18} />
                  </div>
                  <span className="font-body text-xs text-muted">{node.label}</span>
                </div>
                {i < FLOW_NODES.length - 1 && <FlowConnector />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
            Infrastructure Fundamentals
          </p>
        </Reveal>
        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiInfraCapabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={revealItem}
              className="rounded-2xl border border-border bg-background/40 p-6 transition-colors hover:border-accent/30"
            >
              <h3 className="font-heading text-base font-medium text-foreground">{cap.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{cap.description}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14">
          <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
            Applied Gen AI &amp; Agentic Systems
          </p>
        </Reveal>
        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {genAiTools.map((tool) => (
            <motion.div
              key={tool.title}
              variants={revealItem}
              className="rounded-2xl border border-border bg-background/40 p-6 transition-colors hover:border-accent/30"
            >
              <h3 className="font-heading text-base font-medium text-foreground">{tool.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{tool.description}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-14 flex items-center gap-2">
          <Construction size={13} className="text-muted" />
          <p className="font-body text-xs font-medium uppercase tracking-wider text-muted">
            In Progress: Applied GenAI Reference Systems
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-2">
          <p className="max-w-2xl font-body text-sm leading-relaxed text-muted">
            Four agentic RAG reference systems built on AI-generated synthetic datasets, applying
            AWS Certified Generative AI Developer patterns across different orchestration and
            retrieval tooling. Not yet shipped, so no results are claimed here; source will be
            published on GitHub on completion.
          </p>
        </Reveal>
        <RevealGroup className="mt-4 grid gap-4 sm:grid-cols-2">
          {genAiProjectsInProgress.map((project) => (
            <motion.div
              key={project.name}
              variants={revealItem}
              className="rounded-2xl border border-dashed border-border-strong bg-background/30 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-base font-medium text-foreground">
                  {project.name}
                </h3>
                <span className="shrink-0 rounded-full border border-border-strong px-2.5 py-0.5 font-body text-[10px] font-medium uppercase tracking-wide text-muted">
                  In progress
                </span>
              </div>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-3 font-body text-xs leading-relaxed text-foreground/60">
                {project.pipeline}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
