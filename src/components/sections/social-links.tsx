"use client";

import { motion } from "framer-motion";
import {
  Youtube,
  Mail,
  Phone,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";

const ICONS: Record<string, LucideIcon> = {
  youtube: Youtube,
  mail: Mail,
  phone: Phone,
  orcid: ExternalLink,
  external: ExternalLink,
};

export function SocialLinks() {
  return (
    <SectionTransition
      id="connect"
      className="relative py-20 sm:py-28"
    >
      <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center gap-2"
        >
          <span className="font-mono-meta text-neon">07 — Connect</span>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
            Let's Stay in Touch
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-lg">
            Find me across the web — pick whichever platform works best for you.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOCIAL_LINKS.map((link, i) => {
            const Icon = ICONS[link.icon] ?? ExternalLink;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card glass-card-hover rounded-xl p-5 flex items-start gap-4 group"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon/10 text-neon">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-foreground text-sm">
                      {link.name}
                    </h3>
                    <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-neon transition-colors" />
                  </div>
                  <p className="text-xs text-neon mt-0.5 break-all">
                    {link.handle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </SectionTransition>
  );
}
