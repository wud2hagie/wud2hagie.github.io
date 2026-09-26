"use client";

import { motion } from "framer-motion";
import { Rocket, Layout, Users, Briefcase, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

const ICONS: Record<string, typeof Rocket> = {
  rocket: Rocket,
  layout: Layout,
  users: Users,
};

export function Projects() {
  return (
    <SectionTransition
      id="projects"
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="09"
          eyebrow="Portfolio"
          title="Key Projects & Initiatives"
          icon={Briefcase}
          description="Strategic initiatives, institutional digital developments, and community capacity-building frameworks I have led or contributed to."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = ICONS[project.icon] ?? Rocket;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-gold/40"
              >
                {/* Number */}
                <div className="absolute right-5 top-5 font-serif-display text-4xl font-bold text-gold/15 select-none">
                  0{i + 1}
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif-display text-lg font-semibold leading-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 pt-4 border-t border-border/60 inline-flex items-center gap-1.5 text-xs font-semibold text-gold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {project.status}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
