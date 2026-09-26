"use client";

import { motion } from "framer-motion";
import * as React from "react";

interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

/**
 * Wraps a section with a subtle fade-in on scroll — no slide, no movement.
 * Respects reduced-motion preferences automatically.
 */
export function SectionTransition({ children, id, className = "" }: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
