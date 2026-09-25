"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Type,
  GraduationCap,
  Sigma,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { ABOUT, SITE } from "@/lib/content";
import { SectionHeading } from "./section-heading";

const ICONS: Record<string, typeof Calculator> = {
  calculator: Calculator,
  type: Type,
  cap: GraduationCap,
  sigma: Sigma,
};

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Professional Profile"
          icon={GraduationCap}
          description="A brief overview of my background, technical expertise, and approach to mathematics education."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-foreground/85"
              >
                {p}
              </p>
            ))}

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={SITE.orcid}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                View ORCID Profile
              </a>
              <a
                href="#cv"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                <CheckCircle2 className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Snapshot card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg shadow-foreground/5">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
              <h3 className="font-serif-display text-lg font-semibold text-foreground">
                At a Glance
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <Row label="Role" value="Mathematics Lecturer" />
                <Row label="Institution" value="Debre Tabor University" />
                <Row label="Since" value="2011" />
                <Row label="Specialty" value="Numerical Analysis" />
                <Row label="MSc" value="Bahir Dar University" />
                <Row label="BSc" value="Arba Minch University" />
                <Row label="Location" value="Debre Tabor, Ethiopia" />
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mt-14">
          <h3 className="font-serif-display text-xl font-semibold text-foreground">
            Technical &amp; Professional Competencies
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.skills.map((skill, i) => {
              const Icon = ICONS[skill.icon] ?? Calculator;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
                >
                  <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-3 font-serif-display text-sm font-semibold text-foreground">
                      {skill.category}
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-foreground/75"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  );
}
