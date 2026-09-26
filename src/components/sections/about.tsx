"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { ABOUT, PERSON } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";

export function About() {
  return (
    <SectionTransition
      id="about"
      className="relative py-20 sm:py-28 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="01 — About" title={ABOUT.heading} icon={User} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 flex flex-col gap-4"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-foreground/85 ${
                  i === 0 ? "first-letter:text-5xl first-letter:font-serif-display first-letter:font-bold first-letter:text-neon first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""
                }`}
              >
                {p}
              </p>
            ))}

            {/* Facts */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {ABOUT.facts.map((fact) => (
                <div key={fact.label} className="glass-card rounded-xl p-4">
                  <div className="font-mono-meta text-[0.55rem] text-muted-foreground">
                    {fact.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col gap-3"
          >
            <div className="glass-card rounded-xl p-6">
              <div className="font-mono-meta text-neon mb-4">Quick Facts</div>
              <dl className="space-y-3 text-sm">
                <Row label="Role" value="Mathematics Lecturer" />
                <Row label="Institution" value="Debre Tabor University" />
                <Row label="Research Area" value="Numerical Analysis" />
                <Row label="Email" value={PERSON.email} />
                <Row label="Location" value={PERSON.location} />
              </dl>
            </div>

            <a
              href={PERSON.academicPortfolio}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-card glass-card-hover rounded-xl p-5 flex items-center justify-between group"
            >
              <div>
                <div className="font-mono-meta text-neon text-[0.55rem]">Academic Portfolio</div>
                <div className="mt-1 text-sm font-semibold text-foreground">
                  View full CV & publications
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-neon transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionTransition>
  );
}

import { ExternalLink } from "lucide-react";

function SectionHeading({ eyebrow, title, icon: Icon }: { eyebrow: string; title: string; icon?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
            <Icon className="h-4 w-4" />
          </span>
        )}
        <span className="font-mono-meta text-neon">{eyebrow}</span>
      </div>
      <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
        {title}
      </h2>
    </motion.div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground text-xs">{label}</dt>
      <dd className="font-medium text-foreground text-xs text-right">{value}</dd>
    </div>
  );
}
