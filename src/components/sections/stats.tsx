"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { STATS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

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
    <SectionTransition
      id="stats"
      className="relative overflow-hidden border-y border-border/40 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 py-16 sm:py-24"
    >
      <div className="paper-texture absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="—"
          eyebrow="Impact"
          title="A Decade of Teaching & Research"
          icon={BarChart3}
          description="Quantitative measures of teaching, scholarship, and outreach across my career."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col items-center justify-center text-center"
            >
              {/* Top hairline that animates in */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-px w-0 bg-gold transition-all duration-500 group-hover:w-16" />
              <div className="font-serif-display text-5xl font-bold text-gold tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 font-mono-meta text-muted-foreground text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
