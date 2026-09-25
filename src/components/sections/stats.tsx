"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { STATS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, value, count, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-secondary/60 via-background to-secondary/40 py-16 sm:py-20"
    >
      <div className="paper-texture absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impact"
          title="A Decade of Teaching & Research"
          icon={BarChart3}
          description="Quantitative measures of teaching, scholarship, and outreach across my career."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-border bg-card/80 px-4 py-7 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
            >
              <div className="absolute -top-0 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="font-serif-display text-3xl font-bold text-accent sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
