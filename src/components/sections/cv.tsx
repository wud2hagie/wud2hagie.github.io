"use client";

import { motion } from "framer-motion";
import { IdCard, GraduationCap, Briefcase, FileDown } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

export function CV() {
  return (
    <SectionTransition
      id="cv"
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="11"
          eyebrow="Curriculum Vitae"
          title="Education & Professional Experience"
          icon={IdCard}
          description="A chronological overview of academic qualifications and professional appointments. A printable PDF version is available for download."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Education — vertical timeline */}
          <div>
            <h3 className="flex items-center gap-2 font-serif-display text-xl font-semibold text-foreground mb-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-gold/10 text-gold">
                <GraduationCap className="h-4 w-4" />
              </span>
              Educational Background
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-border to-transparent" />

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Node */}
                  <div className="absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-sm border border-gold/40 bg-card text-gold text-xs font-mono font-semibold">
                    {edu.period.split(" ")[2]?.slice(2) || "·"}
                  </div>

                  <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
                    <span className="font-mono-meta text-gold">{edu.period}</span>
                    <h4 className="mt-2 font-serif-display text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-sm text-gold">{edu.institution}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground/70">Specialization:</span>{" "}
                      {edu.specialization}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience — vertical timeline */}
          <div>
            <h3 className="flex items-center gap-2 font-serif-display text-xl font-semibold text-foreground mb-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-gold/10 text-gold">
                <Briefcase className="h-4 w-4" />
              </span>
              Professional Experience
            </h3>

            <div className="relative">
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-border to-transparent" />

              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-sm border border-gold/40 bg-card text-gold text-xs font-mono font-semibold">
                    {exp.period.split(" ")[0]?.slice(2) || "·"}
                  </div>

                  <div className="rounded-sm border border-border bg-card p-5 shadow-sm">
                    <span className="font-mono-meta text-gold">{exp.period}</span>
                    <h4 className="mt-2 font-serif-display text-lg font-semibold text-foreground">
                      {exp.role}
                    </h4>
                    <p className="mt-1 text-sm text-gold">{exp.organization}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{exp.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 rounded-sm border border-border bg-gradient-to-br from-secondary/40 via-card to-secondary/20 p-8 text-center"
        >
          <p className="font-serif-display text-lg font-medium text-foreground">
            Want a printable summary of my credentials?
          </p>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-md transition-all hover:bg-gold hover:-translate-y-0.5"
          >
            <FileDown className="h-4 w-4" />
            Download CV (PDF)
          </a>
        </motion.div>
      </div>
    </SectionTransition>
  );
}
