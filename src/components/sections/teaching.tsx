"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { COURSES } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Teaching() {
  return (
    <section id="teaching" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Teaching"
          title="Courses I Teach at DTU"
          icon={BookOpen}
          description="Undergraduate courses across numerical analysis, calculus, number theory, linear algebra, and differential equations. Each course pairs rigorous theory with computational implementation."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => (
            <motion.article
              key={course.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
            >
              {/* Top decorative bar */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-amber-500 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide text-accent">
                    {course.code}
                  </span>
                  <h3 className="mt-3 font-serif-display text-lg font-semibold leading-tight text-foreground">
                    {course.title}
                  </h3>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {course.level}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {course.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[10px] font-medium text-foreground/70"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                disabled
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-accent opacity-60"
              >
                Syllabus available on request
                <ArrowUpRight className="h-3 w-3" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
