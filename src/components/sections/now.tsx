"use client";

import { motion } from "framer-motion";
import { Radio, BookOpen, PenLine, FlaskConical, GraduationCap, BookMarked } from "lucide-react";
import { NOW } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";

const CATEGORY_ICONS: Record<string, typeof Radio> = {
  Research: FlaskConical,
  Teaching: GraduationCap,
  Writing: PenLine,
  Learning: BookOpen,
  Reading: BookMarked,
};

export function NowPage() {
  return (
    <SectionTransition
      id="now"
      className="relative py-20 sm:py-28 border-t border-border/40"
    >
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
              <Radio className="h-4 w-4" />
            </span>
            <span className="font-mono-meta text-neon">02 — Now</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
            {NOW.heading}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Last updated: {NOW.lastUpdated} ·{" "}
            <a
              href="https://nownownow.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-neon hover:underline"
            >
              What is a Now page?
            </a>
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {NOW.items.map((item, i) => {
            const Icon = CATEGORY_ICONS[item.category] ?? Radio;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono-meta text-neon text-[0.6rem]">
                      {item.category}
                    </span>
                  </div>
                  <span className="rounded-full border border-neon/30 bg-neon/5 px-2.5 py-0.5 text-[0.6rem] font-semibold text-neon">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-serif-display text-lg font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
