"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full border border-border bg-card/80 backdrop-blur transition-colors hover:bg-accent/10 hover:border-accent/40 flex items-center justify-center overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && isDark ? (
          <motion.span
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center text-accent"
          >
            <Moon className="h-[18px] w-[18px]" strokeWidth={2} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center text-accent"
          >
            <Sun className="h-[18px] w-[18px]" strokeWidth={2} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
