"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  animated?: boolean;
  className?: string;
}

/**
 * Animated SVG logo.
 * A stylized "W" formed by a spline curve that draws itself on mount,
 * accompanied by an integral sign ∫ on the left as a nod to calculus
 * and numerical analysis.
 */
export function Logo({
  size = 40,
  showWordmark = true,
  animated = true,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Wudneh Tilahun Mengist logo"
      >
        {/* Background rounded square */}
        <motion.rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill="currentColor"
          className="text-accent"
          initial={animated ? { opacity: 0, scale: 0.85 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* Integral sign — draws quickly */}
        <motion.path
          d="M 14 12 C 14 14, 14 34, 14 36 C 14 38, 13 39, 11 39"
          stroke="oklch(0.985 0.012 75)"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        />
        {/* W formed by spline curve — the main draw animation */}
        <motion.path
          d="M 18 16 L 22 32 L 26 22 L 30 32 L 34 16"
          stroke="oklch(0.985 0.012 75)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={animated ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: "easeInOut",
          }}
        />
        {/* Dot at the end — drops in last */}
        <motion.circle
          cx="34"
          cy="16"
          r="2"
          fill="oklch(0.985 0.012 75)"
          initial={animated ? { scale: 0, opacity: 0 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.7, ease: "backOut" }}
        />
      </svg>
      {showWordmark && (
        <span className="font-serif-display text-[1.05rem] font-semibold tracking-tight text-foreground">
          Wudneh<span className="text-accent">.</span>
        </span>
      )}
    </span>
  );
}
