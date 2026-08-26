"use client";

import { useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"a"> {
  variant?: "primary" | "secondary";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.25, y: y * 0.25 });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-body text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-accent text-background shadow-glow hover:bg-accent/90",
        variant === "secondary" &&
          "border border-border-strong bg-white/[0.02] text-foreground hover:border-accent/40 hover:bg-white/[0.05]",
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
