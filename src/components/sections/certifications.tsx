"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Presentation, BadgeCheck, Languages } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

const ICONS: Record<string, typeof Award> = {
  trending: TrendingUp,
  presentation: Presentation,
  badge: BadgeCheck,
  language: Languages,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Training & Credentials"
          icon={Award}
          description="A track record of continuous learning, professional development, and specialized institutional leadership credentials."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[cert.icon] ?? Award;
            return (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif-display text-sm font-semibold leading-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-accent">
                  {cert.issuer}
                </p>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-accent">
                  <Award className="h-3 w-3" />
                  Certified
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
