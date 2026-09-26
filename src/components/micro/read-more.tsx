"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ReadMoreProps {
  children: React.ReactNode;
  /** Number of lines to show in collapsed state (default 3) */
  lines?: number;
  /** Custom label for the expand button */
  expandLabel?: string;
  collapseLabel?: string;
  /** Force show the read more button even if content is short */
  forceShow?: boolean;
  className?: string;
}

/**
 * ReadMore — truncates long text with a configurable line clamp
 * and expands on click. Uses CSS -webkit-line-clamp for truncation.
 * Includes a chevron icon that rotates on expand.
 */
export function ReadMore({
  children,
  lines = 3,
  expandLabel = "Read more",
  collapseLabel = "Show less",
  forceShow = false,
  className = "",
}: ReadMoreProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [needsToggle, setNeedsToggle] = React.useState(forceShow);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!contentRef.current) return;
    // Check if content height exceeds the clamped height
    const fullHeight = contentRef.current.scrollHeight;
    const lineHeight = parseInt(
      getComputedStyle(contentRef.current).lineHeight
    );
    const clampedHeight = lineHeight * lines;
    if (fullHeight > clampedHeight + 4) {
      setNeedsToggle(true);
    }
  }, [lines, children]);

  return (
    <div className={className}>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "" : "line-clamp-3"
        }`}
        style={
          expanded
            ? { maxHeight: "none" }
            : {
                display: "-webkit-box",
                WebkitLineClamp: lines,
                WebkitBoxOrient: "vertical" as const,
                overflow: "hidden",
              }
        }
      >
        {children}
      </div>
      {needsToggle && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline underline-offset-2 transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? collapseLabel : expandLabel}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </motion.span>
        </button>
      )}
    </div>
  );
}
