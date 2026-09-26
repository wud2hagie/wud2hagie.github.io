"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { COURSES } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";
import { ReadMore } from "@/components/micro/read-more";

export function Teaching() {
  return (
    <SectionTransition
      id="teaching"
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="05"
          eyebrow="Teaching"
          title="Courses at Debre Tabor University"
          icon={BookOpen}
          description="Undergraduate courses across numerical analysis, calculus, number theory, linear algebra, and differential equations. Each course pairs rigorous theory with computational implementation."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course, i) => (
            <motion.article
              key={course.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative flex flex-col overflow-hidden border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-gold/40"
            >
              {/* Top hairline */}
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono-meta text-gold">
                    {course.code}
                  </span>
                  <h3 className="mt-3 font-serif-display text-xl font-semibold leading-tight text-foreground">
                    {course.title}
                  </h3>
                </div>
                <span className="font-mono-meta text-[0.55rem] text-muted-foreground">
                  {course.level}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {course.topics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-border bg-background px-2.5 py-1 text-[0.65rem] font-medium text-foreground/70"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-border/60">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground opacity-70">
                  Syllabus available on request
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
