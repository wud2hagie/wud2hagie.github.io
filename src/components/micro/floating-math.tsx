"use client";

import { motion } from "framer-motion";

const SYMBOLS = [
  { char: "∫", top: "12%", left: "8%", size: "5rem", delay: 0 },
  { char: "∂", top: "30%", left: "85%", size: "3.5rem", delay: 1.5 },
  { char: "π", top: "65%", left: "5%", size: "4.5rem", delay: 0.8 },
  { char: "∑", top: "80%", left: "90%", size: "5.5rem", delay: 2.2 },
  { char: "√", top: "45%", left: "92%", size: "3rem", delay: 3 },
  { char: "∇", top: "20%", left: "50%", size: "4rem", delay: 1.2 },
  { char: "∞", top: "75%", left: "45%", size: "4rem", delay: 2.5 },
  { char: "ƒ", top: "55%", left: "75%", size: "3.5rem", delay: 0.5 },
];

export function FloatingMathSymbols() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {SYMBOLS.map((sym, i) => (
        <span
          key={i}
          className="animate-float-symbol absolute font-serif-display select-none text-gold"
          style={{
            top: sym.top,
            left: sym.left,
            fontSize: sym.size,
            opacity: 0.06,
            animationDelay: `${sym.delay}s`,
          }}
        >
          {sym.char}
        </span>
      ))}
    </div>
  );
}
