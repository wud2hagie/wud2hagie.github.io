"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3 } from "lucide-react";
import { CITATION_HISTORY } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

export function CitationMetrics() {
  const maxCitations = Math.max(...CITATION_HISTORY.map((d) => d.citations));
  const maxAccesses = Math.max(...CITATION_HISTORY.map((d) => d.accesses));
  const totalCitations = CITATION_HISTORY[CITATION_HISTORY.length - 1].citations;
  const totalAccesses = CITATION_HISTORY[CITATION_HISTORY.length - 1].accesses;

  return (
    <SectionTransition
      id="metrics"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="04"
          eyebrow="Citation Metrics"
          title="Research Impact Over Time"
          icon={BarChart3}
          description="The cumulative impact of my Springer-published work on quintic Hermite splines, as tracked from publication through 2025."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Summary cards */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <SummaryCard
              label="Total Citations"
              value={totalCitations}
              icon={TrendingUp}
              color="gold"
            />
            <SummaryCard
              label="Total Accesses"
              value={totalAccesses}
              suffix="+"
              icon={BarChart3}
              color="burgundy"
            />
          </div>

          {/* Bar chart */}
          <div className="lg:col-span-8">
            <div className="rounded-sm border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono-meta text-gold">
                    Year-over-Year Growth
                  </div>
                  <h3 className="mt-1 font-serif-display text-lg font-semibold text-foreground">
                    Citations &amp; Accesses Trend (2019 – 2025)
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-gold" />
                    <span className="text-muted-foreground">Citations</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-sm bg-burgundy/70" />
                    <span className="text-muted-foreground">Accesses</span>
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative">
                <div className="grid grid-cols-7 gap-2 sm:gap-4 h-64 items-end">
                  {CITATION_HISTORY.map((d, i) => (
                    <div
                      key={d.year}
                      className="flex flex-col items-center gap-2 group relative"
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 bg-foreground text-background text-[0.65rem] font-mono px-2 py-1 rounded-sm whitespace-nowrap">
                        {d.citations} cit · {d.accesses} acc
                      </div>

                      {/* Bars */}
                      <div className="flex items-end gap-0.5 w-full justify-center h-full">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{
                            height: `${(d.citations / maxCitations) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                          className="w-3 sm:w-4 bg-gold rounded-t-sm group-hover:opacity-80 transition-opacity"
                          style={{ minHeight: "4px" }}
                        />
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{
                            height: `${(d.accesses / maxAccesses) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.1 + 0.15,
                            ease: "easeOut",
                          }}
                          className="w-3 sm:w-4 bg-burgundy/70 rounded-t-sm group-hover:opacity-80 transition-opacity"
                          style={{ minHeight: "4px" }}
                        />
                      </div>

                      {/* Year label */}
                      <span className="font-mono-meta text-[0.55rem] text-muted-foreground">
                        &apos;{d.year.toString().slice(-2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Baseline */}
                <div className="absolute left-0 right-0 bottom-[1.5rem] h-px bg-border" />
              </div>

              {/* Source */}
              <div className="mt-6 pt-4 border-t border-border/60">
                <p className="font-mono-meta text-[0.55rem] text-muted-foreground">
                  Source: Springer Nature · Arabian Journal of Mathematics ·
                  ORCID 0000-0002-4335-3741
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}

function SummaryCard({
  label,
  value,
  suffix = "",
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  suffix?: string;
  icon: typeof TrendingUp;
  color: "gold" | "burgundy";
}) {
  const colorClass =
    color === "gold"
      ? "text-gold bg-gold/10 border-gold/30"
      : "text-burgundy bg-burgundy/5 border-burgundy/30";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-sm border border-border bg-card p-6 shadow-sm"
    >
      <div
        className={`inline-flex h-9 w-9 items-center justify-center rounded-sm border ${colorClass}`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-4 font-serif-display text-4xl font-bold text-foreground tabular-nums">
        {value.toLocaleString()}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-1 font-mono-meta text-muted-foreground">{label}</div>
    </motion.div>
  );
}
