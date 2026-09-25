"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookMarked,
  ExternalLink,
  Quote,
  BarChart2,
  FileSearch,
  Copy,
  Check,
} from "lucide-react";
import { PUBLICATIONS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

type Status = "all" | "published" | "review" | "project";

const STATUS_LABEL: Record<Status, string> = {
  all: "All Work",
  published: "Published",
  review: "Under Review",
  project: "Projects",
};

const STATUS_COLOR: Record<string, string> = {
  published:
    "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
  review:
    "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
  project:
    "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800",
};

export function Publications() {
  const [filter, setFilter] = React.useState<Status>("all");

  const filtered = React.useMemo(() => {
    if (filter === "all") return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <SectionTransition
      id="publications"
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="06"
          eyebrow="Publications"
          title="Academic Work & Research"
          icon={BookMarked}
          description="Featured research in numerical methods and ongoing academic submissions. Hover any title to preview its full APA citation."
        />

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {(Object.keys(STATUS_LABEL) as Status[]).map((key) => {
            const isActive = filter === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`relative rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "border-gold bg-gold text-background"
                    : "border-border bg-card text-foreground/70 hover:border-gold/40 hover:text-foreground"
                }`}
              >
                {STATUS_LABEL[key]}
              </button>
            );
          })}
        </div>

        {/* List */}
        <div className="mt-10 flex flex-col gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, i) => (
              <motion.article
                key={pub.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative overflow-hidden border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-gold/40"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider ${
                          STATUS_COLOR[pub.status]
                        }`}
                      >
                        {STATUS_LABEL[pub.status as Status]}
                      </span>
                      <span className="font-mono-meta text-muted-foreground">
                        {pub.year}
                      </span>
                      {pub.doi && (
                        <span className="font-mono-meta text-gold">
                          DOI: {pub.doi}
                        </span>
                      )}
                    </div>

                    {/* Citation preview trigger */}
                    <div className="citation-trigger relative mt-3 inline-block">
                      <h3 className="font-serif-display text-xl font-semibold leading-snug text-foreground cursor-help border-b border-dotted border-gold/50 hover:border-gold transition-colors">
                        {pub.title}
                      </h3>
                      <div className="citation-preview">
                        <div className="font-mono-meta text-gold mb-2">
                          APA Citation
                        </div>
                        <p className="text-foreground/90">{pub.apa}</p>
                        <CopyButton text={pub.apa} />
                      </div>
                    </div>

                    <p className="mt-2 text-sm font-medium text-gold">
                      {pub.venue}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {pub.authors}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {pub.description}
                    </p>

                    {pub.metrics && (
                      <div className="mt-5 flex flex-wrap gap-6 text-xs">
                        <span className="inline-flex items-center gap-2 text-muted-foreground">
                          <BarChart2 className="h-4 w-4 text-gold" />
                          <span className="font-serif-display text-lg font-bold text-foreground tabular-nums">
                            {pub.metrics.accesses.toLocaleString()}
                          </span>
                          accesses
                        </span>
                        <span className="inline-flex items-center gap-2 text-muted-foreground">
                          <Quote className="h-4 w-4 text-gold" />
                          <span className="font-serif-display text-lg font-bold text-foreground tabular-nums">
                            {pub.metrics.citations}
                          </span>
                          citations
                        </span>
                      </div>
                    )}
                  </div>

                  {pub.links.length > 0 && (
                    <div className="flex flex-row flex-wrap gap-2 md:flex-col md:items-end">
                      {pub.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5 hover:text-gold"
                        >
                          {link.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-muted-foreground">
            <FileSearch className="h-10 w-10 opacity-50" />
            <p className="text-sm">No entries in this category yet.</p>
          </div>
        )}
      </div>
    </SectionTransition>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-3 inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-2 py-1 text-[0.65rem] font-semibold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5 hover:text-gold"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          Copy citation
        </>
      )}
    </button>
  );
}
