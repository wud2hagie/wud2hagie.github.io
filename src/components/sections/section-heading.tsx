"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
  index?: string; // for numbered sections like "01 / About"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "left",
  index,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <div className="flex items-center gap-3">
        {index && (
          <span className="font-mono-meta text-gold">{index}</span>
        )}
        {eyebrow && (
          <>
            {Icon && (
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-gold/10 text-gold">
                <Icon className="h-4 w-4" />
              </span>
            )}
            <span className="font-mono-meta text-gold">
              {eyebrow}
            </span>
          </>
        )}
      </div>
      <h2 className="font-serif-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed text-muted-foreground mt-2 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-3 h-px bg-gradient-to-r from-gold/60 to-transparent w-24 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
