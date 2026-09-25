"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookMarked, ExternalLink, Quote, BarChart2, FileSearch } from "lucide-react";
import { PUBLICATIONS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

type Status = "all" | "published" | "review" | "project";

const STATUS_LABEL: Record<Status, string> = {
  all: "All Work",
  published: "Published",
  review: "Under Review",
  project: "Projects",
};

const STATUS_COLOR: Record<string, string> = {
  published: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
  review: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
  project: "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800",
};

export function Publications() {
  const [filter, setFilter] = React.useState<Status>("all");

  const filtered = React.useMemo(() => {
    if (filter === "all") return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <section id="publications" className="relative py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Publications & Academic Work"
          icon={BookMarked}
          description="Featured research in numerical methods and ongoing academic submissions. Filter by status to focus on completed work or in-progress projects."
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
                    ? "border-accent bg-accent text-white shadow-sm"
                    : "border-border bg-card text-foreground/70 hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {STATUS_LABEL[key]}
              </button>
            );
          })}
        </div>

        {/* List */}
        <div className="mt-8 flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, i) => (
              <motion.article
                key={pub.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-accent/40"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                          STATUS_COLOR[pub.status]
                        }`}
                      >
                        {STATUS_LABEL[pub.status as Status]}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {pub.year}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif-display text-lg font-semibold leading-snug text-foreground">
                      {pub.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-accent">
                      {pub.venue}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {pub.authors}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      {pub.description}
                    </p>

                    {pub.metrics && (
                      <div className="mt-4 flex flex-wrap gap-4 text-xs">
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <BarChart2 className="h-3.5 w-3.5 text-accent" />
                          <span className="font-semibold text-foreground">
                            {pub.metrics.accesses.toLocaleString()}
                          </span>{" "}
                          accesses
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                          <Quote className="h-3.5 w-3.5 text-accent" />
                          <span className="font-semibold text-foreground">
                            {pub.metrics.citations}
                          </span>{" "}
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
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
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
    </section>
  );
}
