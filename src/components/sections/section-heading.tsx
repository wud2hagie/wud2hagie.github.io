"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          {Icon && (
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon className="h-4 w-4" />
            </span>
          )}
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-serif-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed text-muted-foreground ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-1 h-0.5 w-16 bg-gradient-to-r from-accent to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
