"use client";

import { motion } from "framer-motion";
import * as React from "react";

interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

/**
 * Wraps a section with scroll-triggered fade-slide-in animation.
 */
export function SectionTransition({ children, id, className = "" }: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
