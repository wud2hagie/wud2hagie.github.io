"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/content";

export function OrcidBadge() {
  const [hovered, setHovered] = React.useState(false);

  return (
    <a
      href={SITE.orcid}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/5 px-3 py-1 text-[0.7rem] font-medium text-gold transition-all hover:bg-gold/10 hover:border-gold/60"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ShieldCheck className="h-3.5 w-3.5" />
      <span className="font-mono-meta">Verified by ORCID</span>
      <span className="font-mono text-[0.65rem] opacity-70">{SITE.orcidId}</span>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            className="ml-1"
          >
            <ExternalLink className="h-3 w-3" />
          </motion.span>
        )}
      </AnimatePresence>
    </a>
  );
}
