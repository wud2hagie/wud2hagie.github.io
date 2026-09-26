"use client";

import { motion } from "framer-motion";
import {
  Spline,
  Grid3x3,
  Repeat,
  Sigma,
  ArrowUpRight,
} from "lucide-react";
import { METHODS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

const ICONS: Record<string, typeof Spline> = {
  spline: Spline,
  mesh: Grid3x3,
  grid: Grid3x3,
  transform: Repeat,
  sigma: Sigma,
};

export function MethodsShowcase() {
  return (
    <SectionTransition
      id="methods"
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="03"
          eyebrow="Methods Showcase"
          title="Numerical Methods I Specialize In"
          icon={Spline}
          description="A curated set of numerical methods central to my research and teaching — each with a mathematical statement of its core idea."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {METHODS.map((method, i) => {
            const Icon = ICONS[method.icon] ?? Spline;
            return (
              <motion.article
                key={method.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:border-gold/40"
              >
                {/* Numbered marker */}
                <div className="absolute right-6 top-6 font-serif-display text-5xl font-bold text-gold/15 select-none">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Family */}
                <div className="mt-5 font-mono-meta text-gold">
                  {method.family}
                </div>

                {/* Name */}
                <h3 className="mt-1 font-serif-display text-xl font-semibold leading-tight text-foreground">
                  {method.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {method.description}
                </p>

                {/* Equation */}
                <div className="mt-5 rounded-sm border border-border bg-background/60 px-4 py-3">
                  <div className="font-mono-meta text-[0.55rem] text-muted-foreground mb-1">
                    Core Equation
                  </div>
                  <p className="font-serif text-sm italic text-foreground">
                    {method.equation}
                  </p>
                </div>

                {/* Applications */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {method.applications.map((app) => (
                    <span
                      key={app}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[0.65rem] font-medium text-foreground/70"
                    >
                      <ArrowUpRight className="h-2.5 w-2.5 text-gold" />
                      {app}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
