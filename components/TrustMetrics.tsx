"use client";

import { metrics } from "@/data/profile";
import { Container } from "./ui/Container";
import { RevealGroup, revealItem } from "./ui/Reveal";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export function TrustMetrics() {
  return (
    <section className="border-y border-border py-20">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {metrics.map((metric) => (
            <motion.div key={metric.label} variants={revealItem} className="text-center sm:text-left">
              <p className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                <AnimatedCounter value={metric.value} />
              </p>
              <p className="mt-2 font-body text-sm text-muted">{metric.label}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
