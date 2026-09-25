"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Youtube, FileText } from "lucide-react";
import { SITE } from "@/lib/content";

/**
 * A hand-drawn style animated SVG of the inviscid Burgers' equation
 * shock wave formation — a tribute to Wudneh's main research subject.
 *
 * u_t + u·u_x = 0
 *
 * The curve draws itself on mount and the shock front fills in subtly.
 */
function MathCurveBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-[0.18] dark:opacity-[0.22]"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.68 0.14 55)" />
            <stop offset="50%" stopColor="oklch(0.74 0.13 70)" />
            <stop offset="100%" stopColor="oklch(0.72 0.10 40)" />
          </linearGradient>
        </defs>

        {/* Faint grid */}
        <g stroke="currentColor" className="text-accent" strokeWidth="0.4" opacity="0.35">
          {[...Array(13)].map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="600" />
          ))}
          {[...Array(7)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
          ))}
        </g>

        {/* Axes */}
        <motion.line
          x1="60" y1="540" x2="1140" y2="540"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.line
          x1="60" y1="60" x2="60" y2="540"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Burgers' shock wave — multiple time steps */}
        {[0, 0.2, 0.4, 0.6, 0.8].map((t, i) => {
          const offset = i * 80;
          const steepness = 0.4 + i * 0.4;
          const points = [];
          for (let x = 60; x <= 1140; x += 20) {
            const xn = (x - 60) / 1080;
            const v = 0.5 * (1 - Math.tanh(steepness * (xn - 0.5 - t * 0.3)));
            const y = 60 + v * 480;
            points.push(`${x},${y}`);
          }
          const opacity = 0.3 + i * 0.1;
          return (
            <motion.polyline
              key={i}
              points={points.join(" ")}
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth={i === 4 ? 2.5 : 1.5}
              opacity={opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: 0.6 + i * 0.2,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Equation */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <text
            x="80"
            y="100"
            fill="currentColor"
            className="text-accent"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "22px",
              fontStyle: "italic",
            }}
          >
            ∂u/∂t + u · ∂u/∂x = 0
          </text>
          <text
            x="80"
            y="128"
            fill="currentColor"
            className="text-accent"
            opacity="0.7"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "13px",
            }}
          >
            Burgers&apos; equation — steepening to shock
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary/40 pt-24"
    >
      <MathCurveBackdrop />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-12 py-12 md:grid-cols-2 md:py-0">
          {/* Left: Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.8 },
              },
            }}
            className="flex flex-col gap-5"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {SITE.affiliation}
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-serif-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {SITE.name}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg font-medium text-accent"
            >
              {SITE.title}
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="max-w-xl text-base leading-relaxed text-muted-foreground italic"
            >
              &ldquo;{SITE.tagline}&rdquo;
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Explore Portfolio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#teaching"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                <FileText className="h-4 w-4" />
                View Teaching
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                <Youtube className="h-4 w-4 text-red-600" />
                Hybrid Math Hub
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <PhotoFrame />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-current"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PhotoFrame() {
  const [photoFailed, setPhotoFailed] = React.useState(false);

  return (
    <div className="relative animate-float-slow">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-[2rem] bg-accent/15 blur-2xl" />

      {/* Photo frame */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border/60 bg-card shadow-2xl shadow-foreground/10">
        {!photoFailed ? (
          <img
            src="/profile-photo.jpg"
            alt={`${SITE.name} — Mathematics Lecturer & Researcher`}
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          // Branded SVG fallback with WTM monogram
          <img
            src="/profile-photo.svg"
            alt={`${SITE.name} — branded monogram placeholder`}
            className="h-full w-full object-cover"
          />
        )}

        {/* Name tag */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
          <p className="font-serif-display text-base font-semibold text-white">
            {SITE.name}
          </p>
          <p className="text-xs text-white/80">
            Department of Mathematics · Debre Tabor University
          </p>
        </div>
      </div>

      {/* Floating math badge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute -right-3 top-8 rounded-xl border border-border/60 bg-card/90 px-3 py-2 shadow-lg backdrop-blur"
      >
        <p className="font-serif text-xs italic text-accent">
          ∫₀<sup>∞</sup> e<sup>-x²</sup> dx = √π/2
        </p>
      </motion.div>

      {/* Floating research tag */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="absolute -left-3 bottom-20 rounded-xl border border-border/60 bg-card/90 px-3 py-2 shadow-lg backdrop-blur"
      >
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-accent">13</span> citations ·{" "}
          <span className="font-semibold text-accent">1,212+</span> accesses
        </p>
      </motion.div>
    </div>
  );
}
