"use client";

import { motion } from "framer-motion";
import { PenLine, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";

export function Blog() {
  return (
    <SectionTransition
      id="blog"
      className="relative py-20 sm:py-28 border-t border-border/40"
    >
      <div className="absolute inset-0 mesh-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
              <PenLine className="h-4 w-4" />
            </span>
            <span className="font-mono-meta text-neon">04 — Writing</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
            Notes & Essays
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">
            Occasional writing on mathematics, teaching, and the tools I use to do both well.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card glass-card-hover rounded-xl p-6 flex flex-col gap-3 group cursor-pointer"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-neon/10 px-2.5 py-0.5 text-[0.6rem] font-semibold text-neon">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(post.date)}
                </span>
              </div>

              <h3 className="font-serif-display text-lg font-semibold leading-snug text-foreground group-hover:text-neon transition-colors">
                {post.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground flex-1 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-border/40">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readingTime}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-neon transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
