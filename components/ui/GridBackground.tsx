"use client";

import { motion } from "framer-motion";

const PARTICLES = [
  { top: "18%", left: "12%", size: 3, delay: 0 },
  { top: "32%", left: "78%", size: 2, delay: 0.6 },
  { top: "68%", left: "22%", size: 2, delay: 1.2 },
  { top: "76%", left: "62%", size: 3, delay: 0.3 },
  { top: "48%", left: "90%", size: 2, delay: 1.8 },
  { top: "10%", left: "52%", size: 2, delay: 0.9 },
];

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="bg-grid absolute inset-0 opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 20%, rgba(45,212,255,0.08), transparent 70%)",
        }}
      />
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px 2px rgba(45,212,255,0.6)",
          }}
          animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -10, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
