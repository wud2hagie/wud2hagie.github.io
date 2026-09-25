"use client";

import { motion } from "framer-motion";
import { Rocket, Layout, Users, Briefcase, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

const ICONS: Record<string, typeof Rocket> = {
  rocket: Rocket,
  layout: Layout,
  users: Users,
};

export function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Key Projects & Initiatives"
          icon={Briefcase}
          description="A selection of strategic initiatives, institutional digital developments, and community capacity-building frameworks I have led or contributed to."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = ICONS[project.icon] ?? Rocket;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif-display text-lg font-semibold leading-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {project.status}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
