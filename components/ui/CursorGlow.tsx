"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(canHover && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    function handleMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-[0.06] transition-transform duration-300 ease-out"
      style={{
        background: "radial-gradient(circle, #2dd4ff 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
