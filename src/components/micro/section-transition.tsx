"use client";

import { motion } from "framer-motion";
import * as React from "react";

interface SectionTransitionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

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
