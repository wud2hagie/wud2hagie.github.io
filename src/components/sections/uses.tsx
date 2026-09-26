"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Code,
  Calculator,
  Pen,
  Palette,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { USES } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";

const ICONS: Record<string, LucideIcon> = {
  monitor: Monitor,
  code: Code,
  calculator: Calculator,
  pen: Pen,
  palette: Palette,
  graduation: GraduationCap,
};

export function Uses() {
  return (
    <SectionTransition
      id="uses"
      className="relative py-20 sm:py-28 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
              <Monitor className="h-4 w-4" />
            </span>
            <span className="font-mono-meta text-neon">05 — Uses</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
            {USES.heading}
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">
            The tools, software, and gear I rely on for teaching, research, and content creation.{" "}
            <a
              href="https://uses.this/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-neon hover:underline"
            >
              What is a Uses page?
            </a>
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USES.categories.map((cat, i) => {
            const Icon = ICONS[cat.icon] ?? Monitor;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10 text-neon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif-display text-lg font-semibold text-foreground">
                    {cat.name}
                  </h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
