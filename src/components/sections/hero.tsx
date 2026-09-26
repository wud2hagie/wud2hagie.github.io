"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Sparkles } from "lucide-react";
import { HERO, PERSON } from "@/lib/content";
import { LocalTimeWidget } from "@/components/micro/local-time";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center pt-20"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
              </span>
              <span className="font-mono-meta text-neon">Available for collaborations</span>
              <span className="h-px w-8 bg-neon/30" />
              <LocalTimeWidget />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="gradient-text">{HERO.name}</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-medium text-foreground/80"
            >
              {HERO.role}
            </motion.p>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              {HERO.intro}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href={HERO.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-background neon-glow transition-all hover:-translate-y-0.5"
              >
                {HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-full border border-border glass-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-neon/40 hover:bg-neon/5"
              >
                <Mail className="h-4 w-4" />
                {HERO.secondaryCta.label}
              </a>
              <a
                href={PERSON.academicPortfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-neon transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Academic Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <PhotoFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhotoFrame() {
  const [photoFailed, setPhotoFailed] = React.useState(false);

  return (
    <div className="relative mx-auto max-w-sm">
      {/* Neon glow behind photo */}
      <div className="absolute -inset-4 rounded-3xl bg-neon/20 blur-3xl" />

      {/* Photo frame */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl glass-card">
        {!photoFailed ? (
          <img
            src="/profile-photo.jpg"
            alt={`${PERSON.fullName} — portrait`}
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neon/20 to-purple-500/20">
            <span className="font-serif-display text-6xl font-bold gradient-text">WTM</span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-neon" />
            <span className="font-mono-meta text-neon">Currently</span>
          </div>
          <p className="font-serif-display text-lg font-semibold text-foreground">
            Teaching · Researching · Building
          </p>
          <p className="text-xs text-muted-foreground mt-1">{PERSON.location}</p>
        </div>
      </div>
    </div>
  );
}
