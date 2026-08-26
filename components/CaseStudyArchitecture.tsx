"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function CaseStudyArchitecture({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
      <p className="mb-6 font-body text-xs font-medium uppercase tracking-wider text-muted">
        Architecture
      </p>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-dim font-body text-[11px] font-semibold text-accent">
                {i + 1}
              </span>
              <p className="font-body text-sm leading-relaxed text-foreground/90">{step}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-start py-1.5 pl-4">
                <ArrowDown size={14} className="text-border-strong" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
