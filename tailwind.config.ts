import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#08111F",
        surface: "#0D1A2B",
        "surface-2": "#101F33",
        foreground: "#F4F6F9",
        muted: "#8B96A5",
        border: "rgba(244, 246, 249, 0.08)",
        "border-strong": "rgba(244, 246, 249, 0.14)",
        accent: "#2DD4FF",
        "accent-dim": "rgba(45, 212, 255, 0.12)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,0.5)",
        glow: "0 0 40px -8px rgba(45, 212, 255, 0.35)",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
