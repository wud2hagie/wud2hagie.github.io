"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Award,
  Flag,
  ExternalLink,
} from "lucide-react";
import { CAREER_TIMELINE } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

const ICONS: Record<string, typeof GraduationCap> = {
  education: GraduationCap,
  career: Briefcase,
  publication: BookOpen,
  milestone: Flag,
  certification: Award,
};

const CATEGORY_COLORS: Record<string, string> = {
  education: "oklch(0.62 0.13 75)", // gold
  career: "oklch(0.40 0.12 25)", // burgundy
  publication: "oklch(0.55 0.05 75)", // muted gold-brown
  milestone: "oklch(0.50 0.10 50)", // umber
  certification: "oklch(0.40 0.12 25)", // burgundy
};

export function CareerTimeline() {
  return (
    <SectionTransition
      id="timeline"
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="paper-texture absolute inset-0 opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="01"
          eyebrow="Career Trajectory"
          title="A Fifteen-Year Journey"
          icon={Flag}
          description="From undergraduate studies in Applied Mathematics to a published researcher and university trainer — the milestones that have shaped my academic career."
        />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[8.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-border to-transparent sm:left-[10rem]" />

          {CAREER_TIMELINE.map((item, i) => {
            const Icon = ICONS[item.category] ?? Flag;
            const color = CATEGORY_COLORS[item.category];
            return (
              <motion.div
                key={item.year + item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0"
              >
                {/* Year */}
                <div className="w-24 sm:w-28 text-right pt-1 shrink-0">
                  <span className="font-serif-display text-3xl font-bold text-foreground">
                    {item.year}
                  </span>
                </div>

                {/* Node */}
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute -left-2 top-3 h-4 w-4 rounded-full border-2 bg-background"
                    style={{ borderColor: color }}
                  >
                    <div
                      className="absolute inset-0.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  </div>
                  <div
                    className="ml-6 flex h-9 w-9 items-center justify-center rounded-sm border"
                    style={{
                      borderColor: color,
                      backgroundColor: `${color}1A`,
                      color: color,
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 -mt-1">
                  <span className="font-mono-meta text-muted-foreground">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="mt-1.5 font-serif-display text-xl font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  {/* Organization as a clickable link */}
                  {item.orgUrl ? (
                    <a
                      href={item.orgUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:underline underline-offset-2"
                    >
                      {item.org}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-gold">
                      {item.org}
                    </p>
                  )}
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
