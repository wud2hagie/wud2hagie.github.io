"use client";

import { motion } from "framer-motion";
import { IdCard, GraduationCap, Briefcase, FileDown } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function CV() {
  return (
    <section id="cv" className="relative py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Education & Professional Experience"
          icon={IdCard}
          description="An overview of academic qualifications and professional appointments. A printable PDF version is available for download."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 font-serif-display text-lg font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-4 w-4" />
              </span>
              Educational Background
            </h3>

            <div className="mt-6 space-y-4">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif-display text-base font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="mt-0.5 text-sm text-accent">
                        {edu.institution}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        Specialization: {edu.specialization}
                      </p>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground/70">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="flex items-center gap-2 font-serif-display text-lg font-semibold text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Briefcase className="h-4 w-4" />
              </span>
              Professional Experience
            </h3>

            <div className="mt-6 space-y-4">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif-display text-base font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <p className="mt-0.5 text-sm text-accent">
                        {exp.organization}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {exp.focus}
                      </p>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-foreground/70">
                      {exp.period}
                    </span>
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
          className="mt-10 flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-gradient-to-br from-secondary/60 via-background to-secondary/40 p-8 text-center"
        >
          <p className="font-serif-display text-base font-medium text-foreground">
            Want a printable summary of my credentials?
          </p>
          <a
            href="/api/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            <FileDown className="h-4 w-4" />
            Download CV (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
