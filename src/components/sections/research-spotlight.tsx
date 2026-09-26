"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
import { RESEARCH_SPOTLIGHT } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";
import { ReadMore } from "@/components/micro/read-more";

export function ResearchSpotlight() {
  return (
    <SectionTransition
      id="spotlight"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm border border-gold/30 bg-gradient-to-br from-gold/[0.05] via-card to-card shadow-sm"
        >
          {/* Decorative equation watermark */}
          <div className="absolute right-0 top-0 -mr-16 -mt-16 font-serif-display text-[12rem] font-bold text-gold/5 select-none pointer-events-none">
            ∂
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12">
            <div className="lg:col-span-8">
              {/* Status badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.65rem] font-semibold text-gold">
                  <Clock className="h-3 w-3" />
                  {RESEARCH_SPOTLIGHT.status.toUpperCase()}
                </span>
                <span className="font-mono-meta text-muted-foreground">
                  Submitted {RESEARCH_SPOTLIGHT.submitted}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold leading-tight text-foreground">
                {RESEARCH_SPOTLIGHT.title}
              </h3>

              {/* Venue */}
              {RESEARCH_SPOTLIGHT.venueUrl ? (
                <a
                  href={RESEARCH_SPOTLIGHT.venueUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline underline-offset-2"
                >
                  {RESEARCH_SPOTLIGHT.venue}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : (
                <p className="mt-3 text-sm font-medium text-gold">
                  {RESEARCH_SPOTLIGHT.venue}
                </p>
              )}

              {/* Abstract */}
              <div className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                <ReadMore lines={3} expandLabel="Read full abstract" collapseLabel="Show less">
                  {RESEARCH_SPOTLIGHT.abstract}
                </ReadMore>
              </div>

              {/* CTA */}
              <a
                href={RESEARCH_SPOTLIGHT.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-gold hover:-translate-y-0.5"
              >
                View Submission Dashboard
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Key technical claims */}
            <div className="lg:col-span-4">
              <div className="rounded-sm border border-border bg-background/60 p-6">
                <div className="font-mono-meta text-gold mb-4">
                  Key Technical Claims
                </div>
                <ul className="space-y-3">
                  {RESEARCH_SPOTLIGHT.key_claims.map((claim, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-start gap-2 text-xs leading-relaxed text-foreground/85"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 text-gold shrink-0" />
                      <span>{claim}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionTransition>
  );
}
