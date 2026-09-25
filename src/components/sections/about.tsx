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
import { ABOUT, SITE } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

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
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="00"
          eyebrow="About"
          title="Professional Profile"
          icon={GraduationCap}
          description="A brief overview of my background, technical expertise, and approach to mathematics education."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-5"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`text-[15px] leading-[1.85] text-foreground/85 ${
                  i === 0 ? "drop-cap first-letter:font-medium" : ""
                }`}
              >
                {p}
              </p>
            ))}

            <div className="mt-4 flex flex-wrap items-center gap-3">
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
          </motion.div>

          {/* Right column: photo collage + snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Photo collage */}
            <PhotoCollage />

            {/* Snapshot card */}
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
        <div className="mt-20">
          <h3 className="font-serif-display text-2xl font-semibold text-foreground mb-8">
            Technical &amp; Professional Competencies
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.skills.map((skill, i) => {
              const Icon = ICONS[skill.icon] ?? Calculator;
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
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

function PhotoCollage() {
  const [mainFailed, setMainFailed] = React.useState(false);
  const [secondFailed, setSecondFailed] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute -inset-3 rounded-sm bg-gold/10 blur-2xl" />

      <div className="relative grid grid-cols-5 gap-3">
        {/* Main photo (tall) */}
        <div className="col-span-3 aspect-[3/4] overflow-hidden border border-border/80 bg-card shadow-lg">
          {!mainFailed ? (
            <img
              src="/myphoto.jpg"
              alt={`${SITE.name} — Office portrait`}
              className="h-full w-full object-cover"
              onError={() => setMainFailed(true)}
            />
          ) : (
            <BrandedPhoto label="Office Portrait" />
          )}
        </div>

        {/* Secondary photo (square) + caption */}
        <div className="col-span-2 flex flex-col gap-3">
          <div className="aspect-square overflow-hidden border border-border/80 bg-card shadow-lg">
            {!secondFailed ? (
              <img
                src="/my2photo.jpg"
                alt={`${SITE.name} — Teaching context`}
                className="h-full w-full object-cover"
                onError={() => setSecondFailed(true)}
              />
            ) : (
              <BrandedPhoto label="Teaching Context" small />
            )}
          </div>

          {/* Caption card */}
          <div className="flex-1 rounded-sm border border-border bg-gradient-to-br from-secondary/60 via-card to-secondary/40 p-4">
            <div className="flex items-center gap-2 text-gold">
              <Camera className="h-4 w-4" />
              <span className="font-mono-meta text-[0.55rem]">
                Debre Tabor University
              </span>
            </div>
            <p className="mt-2 font-serif-display text-sm font-semibold leading-snug text-foreground">
              Mathematics Department
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Where numerical methods meet undergraduate education — every
              lesson a building block for Ethiopia&apos;s future scientists.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BrandedPhoto({
  label,
  small = false,
}: {
  label: string;
  small?: boolean;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-gold/30 via-gold/10 to-secondary p-4 text-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-20"
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
        <div
          className={`font-serif-display font-bold text-gold ${
            small ? "text-4xl" : "text-6xl"
          }`}
        >
          WTM
        </div>
        <p className="mt-2 font-mono-meta text-muted-foreground">{label}</p>
      </div>
    </div>
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
