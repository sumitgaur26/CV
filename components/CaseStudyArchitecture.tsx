"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Box,
  Boxes,
  Cog,
  Database,
  Eye,
  Gauge,
  Github,
  GitBranch,
  HardDrive,
  RefreshCw,
  Settings,
  ShieldCheck,
  Unlock,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface StepMeta {
  keywords: string[];
  label: string;
  icon: LucideIcon;
}

const STEP_META: StepMeta[] = [
  { keywords: ["api gateway"], label: "API Gateway", icon: Workflow },
  { keywords: ["step functions"], label: "Step Functions", icon: Workflow },
  { keywords: ["lambda"], label: "Lambda", icon: Zap },
  { keywords: ["dynamodb"], label: "DynamoDB", icon: Database },
  { keywords: ["s3", "cloudfront"], label: "S3 + CloudFront", icon: HardDrive },
  { keywords: ["ecs"], label: "ECS", icon: Box },
  { keywords: ["cloudtrail"], label: "CloudTrail", icon: Eye },
  { keywords: ["event bus", "eventbridge"], label: "Event Bus", icon: RefreshCw },
  { keywords: ["cross-account"], label: "Cross-Account Role", icon: ShieldCheck },
  { keywords: ["jenkins"], label: "Jenkins", icon: Cog },
  { keywords: ["bitbucket"], label: "Bitbucket", icon: GitBranch },
  { keywords: ["github"], label: "GitHub", icon: Github },
  { keywords: ["eks", "kubernetes"], label: "EKS Cluster", icon: Boxes },
  { keywords: ["cluster operations", "node management", "cluster"], label: "Cluster Ops", icon: Settings },
  { keywords: ["ci/cd"], label: "CI/CD Pipeline", icon: RefreshCw },
  { keywords: ["self-serve", "self-service"], label: "Self-Service", icon: Unlock },
  { keywords: ["budget"], label: "Budget Monitor", icon: Gauge },
];

function resolveStepMeta(step: string, used: Set<string>): { label: string; icon: LucideIcon } {
  const lower = step.toLowerCase();

  const candidates = STEP_META.map((meta) => {
    const index = Math.min(
      ...meta.keywords
        .map((k) => lower.indexOf(k))
        .filter((i) => i !== -1)
        .concat([Infinity])
    );
    return { meta, index };
  })
    .filter((c) => c.index !== Infinity)
    .sort((a, b) => a.index - b.index);

  const fresh = candidates.find((c) => !used.has(c.meta.label));
  const chosen = fresh ?? candidates[0];

  if (chosen) {
    used.add(chosen.meta.label);
    return { label: chosen.meta.label, icon: chosen.meta.icon };
  }

  const fallbackLabel = step.split(" ").slice(0, 3).join(" ");
  return { label: fallbackLabel, icon: Workflow };
}

export function CaseStudyArchitecture({ steps }: { steps: string[] }) {
  const used = new Set<string>();
  const nodes = steps.map((step) => ({ step, ...resolveStepMeta(step, used) }));

  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
      <p className="mb-6 font-body text-xs font-medium uppercase tracking-wider text-muted">
        Architecture
      </p>

      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-4">
        {nodes.map((node, i) => (
          <motion.div
            key={`${node.label}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-1.5"
          >
            <div
              title={node.step}
              className="flex items-center gap-2 rounded-xl border border-border-strong bg-background/70 px-3 py-2"
            >
              <node.icon size={14} className="shrink-0 text-accent" />
              <span className="whitespace-nowrap font-body text-xs font-medium text-foreground/90">
                {node.label}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <ArrowRight size={14} className="shrink-0 text-border-strong" />
            )}
          </motion.div>
        ))}
      </div>

      <details className="group mt-6 border-t border-border pt-4">
        <summary className="cursor-pointer list-none font-body text-xs font-medium text-muted transition-colors hover:text-foreground">
          Show architecture notes
        </summary>
        <ol className="mt-3 space-y-2">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-2 font-body text-sm leading-relaxed text-foreground/80">
              <span className="shrink-0 text-muted">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </details>
    </div>
  );
}
