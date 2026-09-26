"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";

export function Projects() {
  return (
    <SectionTransition
      id="projects"
      className="relative py-20 sm:py-28 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
              <Briefcase className="h-4 w-4" />
            </span>
            <span className="font-mono-meta text-neon">03 — Work</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
            {PROJECTS.heading}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.items.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-4 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono-meta text-neon text-[0.6rem]">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="mt-2 font-serif-display text-xl font-semibold leading-snug text-foreground">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-[0.65rem] font-medium text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/40">
                <span className="text-xs text-muted-foreground">{project.metrics}</span>
                {project.link && project.linkLabel && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neon hover:underline"
                  >
                    {project.linkLabel}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}
