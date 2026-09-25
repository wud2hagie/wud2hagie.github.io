"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  const [index, setIndex] = React.useState(0);

  const next = React.useCallback(
    () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
    []
  );
  const prev = React.useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  React.useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Students & Colleagues Say"
          icon={MessageSquare}
          align="center"
        />

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg sm:p-12">
          {/* Decorative quote */}
          <Quote className="absolute -top-3 left-8 h-16 w-16 text-accent/10" />

          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <blockquote className="font-serif-display text-lg leading-relaxed text-foreground/90 sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-serif-display font-bold">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {current.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{current.title}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-accent/10 hover:border-accent/40 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background hover:bg-accent/10 hover:border-accent/40 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
