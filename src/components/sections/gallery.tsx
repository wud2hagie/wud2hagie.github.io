"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { GALLERY } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";

export function Gallery() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <SectionTransition
      id="gallery"
      className="relative py-20 sm:py-28 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
              <Camera className="h-4 w-4" />
            </span>
            <span className="font-mono-meta text-neon">06 — Gallery</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
            {GALLERY.heading}
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">
            {GALLERY.description}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY.photos.map((photo, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl glass-card aspect-square ${
                i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <span className="font-mono-meta text-neon text-[0.55rem]">
                  {photo.year}
                </span>
                <p className="font-serif-display text-sm font-semibold text-foreground mt-1">
                  {photo.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Empty state hint when no real photos */}
        <p className="mt-6 text-center text-xs text-muted-foreground italic">
          More photos coming soon — share your favorites via Google Drive and I'll add them.
        </p>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/95 backdrop-blur-md"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute top-6 right-6 h-10 w-10 rounded-full glass-card flex items-center justify-center hover:bg-neon/10"
          >
            <X className="h-5 w-5" />
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY.photos[activeIndex].src}
              alt={GALLERY.photos[activeIndex].alt}
              className="w-full rounded-xl"
            />
            <p className="mt-4 text-center font-serif-display text-lg text-foreground">
              {GALLERY.photos[activeIndex].caption}{" "}
              <span className="text-muted-foreground text-sm">
                · {GALLERY.photos[activeIndex].year}
              </span>
            </p>
          </motion.div>
        </div>
      )}
    </SectionTransition>
  );
}
