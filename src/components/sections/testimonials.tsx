"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

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
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  const current = TESTIMONIALS[index];

  return (
    <SectionTransition
      id="testimonials"
      className="relative py-20 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="08"
          eyebrow="Testimonials"
          title="What Students & Colleagues Say"
          icon={MessageSquare}
          align="center"
        />

        <div className="relative mt-12 overflow-hidden rounded-sm border border-border bg-card p-8 shadow-sm sm:p-12">
          {/* Decorative quote */}
          <Quote className="absolute -top-3 left-8 h-16 w-16 text-gold/10" />

          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <blockquote className="font-serif-display text-lg leading-relaxed text-foreground/90 sm:text-xl italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t border-border/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold font-serif-display font-bold">
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

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-background hover:bg-gold/10 hover:border-gold/40 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-background hover:bg-gold/10 hover:border-gold/40 transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
