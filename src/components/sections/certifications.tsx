"use client";

import { motion } from "framer-motion";
import {
  Award,
  TrendingUp,
  Presentation,
  BadgeCheck,
  Languages,
  ExternalLink,
} from "lucide-react";
import { CERTIFICATIONS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

const ICONS: Record<string, typeof Award> = {
  trending: TrendingUp,
  presentation: Presentation,
  badge: BadgeCheck,
  language: Languages,
};

export function Certifications() {
  return (
    <SectionTransition
      id="certifications"
      className="relative py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="10"
          eyebrow="Certifications"
          title="Professional Training & Credentials"
          icon={Award}
          description="A track record of continuous learning, professional development, and specialized institutional leadership credentials."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert, i) => {
            const Icon = ICONS[cert.icon] ?? Award;
            return (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col overflow-hidden border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-gold/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif-display text-sm font-semibold leading-tight text-foreground">
                  {cert.title}
                </h3>
                {cert.issuerUrl ? (
                  <a
                    href={cert.issuerUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 inline-flex items-start gap-1 text-xs font-medium text-gold hover:underline underline-offset-2"
                  >
                    {cert.issuer}
                    <ExternalLink className="h-3 w-3 mt-0.5 shrink-0" />
                  </a>
                ) : (
                  <p className="mt-1 text-xs font-medium text-gold">{cert.issuer}</p>
                )}
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
                <div className="mt-4 pt-3 border-t border-border/60 inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-wider text-gold">
                  <Award className="h-3 w-3" />
                  Certified
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
