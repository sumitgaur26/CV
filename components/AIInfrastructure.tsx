"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Network, Gauge, Server } from "lucide-react";
import { aiInfraCapabilities, genAiTools } from "@/data/aiInfrastructure";
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
          description="NVIDIA-certified (NCA-AIIO), extending a decade of cloud platform ownership into GPU cluster architecture and AI workload orchestration."
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
            Applied Gen AI Tooling
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
      </Container>
    </section>
  );
}
