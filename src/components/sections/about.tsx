"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Type,
  GraduationCap,
  Sigma,
  ExternalLink,
  CheckCircle2,
  Camera,
} from "lucide-react";
import { ABOUT, SITE, INSTITUTIONS } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";
import { ReadMore } from "@/components/micro/read-more";

const ICONS: Record<string, typeof Calculator> = {
  calculator: Calculator,
  type: Type,
  cap: GraduationCap,
  sigma: Sigma,
};

export function About() {
  return (
    <SectionTransition
      id="about"
      className="relative py-16 sm:py-20 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Asymmetric layout: heading + photo side by side */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: heading + bio */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Inline section heading (not full-width) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono-meta text-gold">00</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <span className="font-mono-meta text-gold">About</span>
              </div>
              <h2 className="font-serif-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
                Professional Profile
              </h2>
              <div className="h-px bg-gradient-to-r from-gold/60 to-transparent w-16" />
            </motion.div>

            {/* First paragraph with drop cap */}
            <p className="text-[15px] leading-[1.85] text-foreground/85 drop-cap first-letter:font-medium">
              I am a Mathematics Lecturer and Researcher in the Department of Mathematics at{" "}
              <a
                href={INSTITUTIONS.dtu.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-gold hover:underline underline-offset-2"
              >
                {INSTITUTIONS.dtu.name}
              </a>
              , Ethiopia. I hold a Master of Science in Mathematics specializing in Numerical Analysis from{" "}
              <a
                href={INSTITUTIONS.bdu.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-gold hover:underline underline-offset-2"
              >
                {INSTITUTIONS.bdu.name}
              </a>{" "}
              and a Bachelor of Science in Applied Mathematics from{" "}
              <a
                href={INSTITUTIONS.amu.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-gold hover:underline underline-offset-2"
              >
                {INSTITUTIONS.amu.name}
              </a>
              . My academic foundation focuses on solving complex mathematical models efficiently.
            </p>

            {/* Remaining paragraphs in ReadMore */}
            <ReadMore lines={3} expandLabel="Read full bio" collapseLabel="Show less">
              <p className="text-[15px] leading-[1.85] text-foreground/85">
                Since 2011, I have been committed to cultivating undergraduate excellence across fundamental and applied courses including Numerical Analysis, Calculus, and Number Theory. Beyond traditional instruction, I am an active proponent of modern instructional design frameworks and open educational resources.
              </p>
              <p className="text-[15px] leading-[1.85] text-foreground/85 mt-4">
                My technical expertise spans advanced mathematical software, data analysis, and professional typesetting tools such as{" "}
                <span className="font-medium text-foreground">LaTeX</span>,{" "}
                <span className="font-medium text-foreground">Python</span>,{" "}
                <span className="font-medium text-foreground">MATLAB</span>, and{" "}
                <span className="font-medium text-foreground">Wolfram Mathematica</span>. Whether developing open-access digital learning modules on{" "}
                <a
                  href={INSTITUTIONS.openedx.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-gold hover:underline underline-offset-2"
                >
                  {INSTITUTIONS.openedx.name}
                </a>{" "}
                or curating educational content for my channel, I strive to make mathematics intuitive and widely accessible.
              </p>
            </ReadMore>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <a
                href={SITE.orcid}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-all hover:bg-gold hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" />
                View ORCID Profile
              </a>
              <a
                href="#cv"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5"
              >
                <CheckCircle2 className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right: photo + At a Glance card (starts at same y as heading) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <ProfessionalPortrait />

            <div className="rounded-sm border border-border bg-card p-6 shadow-sm">
              <div className="font-mono-meta text-gold mb-4">At a Glance</div>
              <dl className="space-y-3 text-sm">
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
        <div className="mt-16">
          <h3 className="font-serif-display text-2xl font-semibold text-foreground mb-8">
            Technical &amp; Professional Competencies
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.skills.map((skill, i) => {
              const Icon = ICONS[skill.icon] ?? Calculator;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-gold/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 font-serif-display text-sm font-semibold text-foreground">
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}

function ProfessionalPortrait() {
  const [photoFailed, setPhotoFailed] = React.useState(false);

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card shadow-md">
        {!photoFailed ? (
          <img
            src="/myphoto.jpg"
            alt={`${SITE.name} — Professional portrait at Debre Tabor University`}
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <BrandedFallback label="Portrait" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="h-px w-10 bg-gold mb-3" />
          <p className="font-serif-display text-base font-semibold text-background">
            Department of Mathematics
          </p>
          <a
            href={INSTITUTIONS.dtu.url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 mt-1 text-xs text-background/80 hover:text-gold transition-colors"
          >
            <ExternalLink className="h-3 w-3" />
            {INSTITUTIONS.dtu.name}
          </a>
        </div>
      </div>
    </div>
  );
}

function BrandedFallback({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-gold/25 via-gold/8 to-secondary p-6 text-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-15"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 60 Q 25 40 50 55 T 100 50"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <div className="relative">
        <Camera className="h-8 w-8 mx-auto text-gold" />
        <div className="mt-3 font-serif-display text-3xl font-bold text-gold">WTM</div>
        <p className="mt-2 font-mono-meta text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground text-right">{value}</dd>
    </div>
  );
}
