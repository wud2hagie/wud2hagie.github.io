"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenLine, Calendar, Clock, ArrowUpRight, X, BookOpen } from "lucide-react";
import { SectionHeading } from "./section-heading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
}

export function Blog() {
  const [posts, setPosts] = React.useState<BlogPost[]>([]);
  const [openSlug, setOpenSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Load embedded markdown posts (client-side)
    void loadPosts().then(setPosts);
  }, []);

  const openPost = posts.find((p) => p.slug === openSlug);

  return (
    <section id="blog" className="relative py-20 sm:py-28 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Math Insights & Teaching Notes"
          icon={PenLine}
          description="Occasional writing on numerical methods, blended learning, and the craft of academic communication."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
            >
              <button
                type="button"
                onClick={() => setOpenSlug(post.slug)}
                className="flex h-full flex-col p-5 text-left"
              >
                {/* Reading meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="mt-3 font-serif-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </motion.article>
          ))}

          {posts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center gap-3 py-12 text-muted-foreground">
              <BookOpen className="h-10 w-10 opacity-50" />
              <p className="text-sm">Loading posts…</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!openPost} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogContent className="max-h-[85vh] overflow-hidden !max-w-3xl">
          <DialogHeader>
            <DialogTitle className="font-serif-display text-xl">
              {openPost?.title}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {openPost && formatDate(openPost.date)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {openPost?.readingTime}
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[60vh] pr-1">
            <article className="prose prose-stone dark:prose-invert max-w-none prose-headings:font-serif-display prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:text-accent prose-strong:text-foreground prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground">
              {openPost && (
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      const isInline = !match && !String(children).includes("\n");
                      return isInline ? (
                        <code
                          className="rounded bg-secondary px-1 py-0.5 text-[0.85em] font-mono text-accent"
                          {...props}
                        >
                          {children}
                        </code>
                      ) : (
                        <SyntaxHighlighter
                          // @ts-expect-error - style typing is loose
                          style={oneLight}
                          language={match?.[1] || "text"}
                          PreTag="div"
                          customStyle={{
                            borderRadius: "0.5rem",
                            fontSize: "0.85rem",
                            background: "oklch(0.95 0.018 75)",
                          }}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      );
                    },
                  }}
                >
                  {openPost.content}
                </ReactMarkdown>
              )}
            </article>
          </div>
        </DialogContent>
      </Dialog>
    </section>
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

// Static imports for the markdown content
// Vite-style raw imports won't work in Next.js; instead we fetch at runtime.
async function loadPosts(): Promise<BlogPost[]> {
  const slugs = [
    "2024-08-15-beauty-of-numerical-analysis",
    "2024-09-22-blended-learning-openedx",
    "2024-10-30-latex-vs-word",
  ];
  const posts: BlogPost[] = [];
  for (const slug of slugs) {
    try {
      const res = await fetch(`/blog/${slug}.md`);
      if (!res.ok) continue;
      const text = await res.text();
      posts.push(parseMarkdown(slug, text));
    } catch (e) {
      console.error(`Failed to load blog post ${slug}:`, e);
    }
  }
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function parseMarkdown(slug: string, raw: string): BlogPost {
  const lines = raw.split("\n");
  let title = slug;
  let date = "";
  let readingTime = "";
  const bodyStart = lines.findIndex((l, i) => i > 0 && /^#\s/.test(l));
  const titleMatch = lines.find((l) => l.startsWith("# "));
  if (titleMatch) title = titleMatch.replace(/^#\s+/, "").trim();

  const publishMatch = raw.match(/\*\*Published:\*\*\s*([0-9-]+)/);
  if (publishMatch) date = publishMatch[1];

  const readMatch = raw.match(/\*\*Reading time:\*\*\s*([0-9]+\s*min)/);
  if (readMatch) readingTime = readMatch[1];

  // Strip meta header
  const body = raw
    .replace(/^# .*\n/, "")
    .replace(/\*\*Published:.*\n/, "")
    .replace(/\*\*Reading time:.*\n/, "")
    .trim();

  const excerpt = body
    .replace(/[#>*`_]/g, "")
    .split("\n")
    .filter((l) => l.trim().length > 0)
    .slice(0, 3)
    .join(" ")
    .slice(0, 220) + "…";

  return {
    slug,
    title,
    date,
    readingTime,
    excerpt,
    content: body,
  };
}
