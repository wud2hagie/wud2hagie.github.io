"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Youtube,
  FileText,
  FlaskConical,
  GraduationCap,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { SITE } from "@/lib/content";
import { OrcidBadge } from "@/components/micro/orcid-badge";
import { FloatingMathSymbols } from "@/components/micro/floating-math";

type TabKey = "research" | "teaching" | "publications";

const TABS: Array<{ key: TabKey; label: string; icon: typeof FlaskConical }> = [
  { key: "research", label: "Research", icon: FlaskConical },
  { key: "teaching", label: "Teaching", icon: GraduationCap },
  { key: "publications", label: "Publications", icon: BookOpen },
];

export function Hero() {
  const [tab, setTab] = React.useState<TabKey>("research");

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-28"
    >
      {/* Floating math symbols backdrop */}
      <FloatingMathSymbols />

      {/* Subtle gold gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.62 0.13 75 / 0.08), transparent 50%), radial-gradient(ellipse at bottom right, oklch(0.40 0.12 25 / 0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-12 lg:py-0">
          {/* Left: Text + Tabs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.4 },
              },
            }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Eyebrow with location */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-3"
            >
              <span className="font-mono-meta text-gold">
                {SITE.affiliation}
              </span>
              <span className="h-px w-12 bg-gold/50" />
              <span className="font-mono-meta text-muted-foreground">
                Est. 2011
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-serif-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              Wudneh
              <br />
              Tilahun Mengist
            </motion.h1>

            {/* ORCID badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <OrcidBadge />
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground italic"
            >
              &ldquo;{SITE.tagline}&rdquo;
            </motion.p>

            {/* Tabs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-4 flex flex-col gap-4"
            >
              {/* Tab switcher */}
              <div className="inline-flex w-fit items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur">
                {TABS.map((t) => {
                  const isActive = tab === t.key;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setTab(t.key)}
                      className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                        isActive
                          ? "text-background"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-full bg-gold"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <t.icon className="relative h-3.5 w-3.5" />
                      <span className="relative">{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab content */}
              <div className="min-h-[180px] max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm leading-relaxed text-foreground/80"
                  >
                    {tab === "research" && (
                      <p>
                        My research develops{" "}
                        <span className="font-semibold text-foreground">
                          spline-based collocation methods
                        </span>{" "}
                        for nonlinear and singularly perturbed differential
                        equations. I&apos;ve published on{" "}
                        <span className="italic text-gold">
                          quintic Hermite spline solutions
                        </span>{" "}
                        to Burgers&apos; equation, and currently have a
                        manuscript under review proposing an adaptive
                        B-spline framework for boundary layer problems.
                      </p>
                    )}
                    {tab === "teaching" && (
                      <p>
                        For fifteen years, I&apos;ve taught undergraduate
                        courses in{" "}
                        <span className="font-semibold text-foreground">
                          Numerical Analysis, Calculus, Linear Algebra,
                          Differential Equations, and Number Theory
                        </span>{" "}
                        at Debre Tabor University. My pedagogy integrates
                        evidence-based multimedia principles and Universal
                        Design for Learning through the Open edX platform.
                      </p>
                    )}
                    {tab === "publications" && (
                      <p>
                        My work appears in{" "}
                        <span className="font-semibold text-foreground">
                          Springer&apos;s Arabian Journal of Mathematics
                        </span>{" "}
                        (2019) with{" "}
                        <span className="text-gold font-semibold">13 citations</span>{" "}
                        and{" "}
                        <span className="text-gold font-semibold">
                          1,212+ accesses
                        </span>
                        . A second manuscript is currently under review at the
                        Journal of Interdisciplinary Science and Technology
                        (JIST).
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTAs */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-wrap items-center gap-3 pt-2"
              >
                <a
                  href="#research"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold hover:-translate-y-0.5"
                >
                  Explore Portfolio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#youtube"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-gold/40 hover:bg-gold/5"
                >
                  <Youtube className="h-4 w-4 text-red-600" />
                  The Hybrid Math Hub
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-gold/40 hover:bg-gold/5"
                >
                  <FileText className="h-4 w-4" />
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="lg:col-span-5 relative mx-auto w-full max-w-md"
          >
            <PhotoFrame />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono-meta">Scroll</span>
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
      {/* Gold glow */}
      <div className="absolute -inset-3 rounded-[0.5rem] bg-gold/10 blur-2xl" />

      {/* Photo frame — editorial style: thin border, no rounded corners (or very subtle) */}
      <div className="relative aspect-[4/5] overflow-hidden border border-border/80 bg-card shadow-2xl shadow-foreground/10">
        {!photoFailed ? (
          <img
            src="/profile-photo.jpg"
            alt={`${SITE.name} — Mathematics Lecturer & Researcher`}
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <img
            src="/profile-photo.svg"
            alt={`${SITE.name} — branded monogram placeholder`}
            className="h-full w-full object-cover"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

        {/* Name plate */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="h-px w-12 bg-gold mb-3" />
          <p className="font-serif-display text-xl font-semibold text-background">
            {SITE.name}
          </p>
          <p className="text-xs text-background/80 mt-1 font-mono-meta">
            {SITE.title}
          </p>
        </div>
      </div>

      {/* Floating research metrics badge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute -right-4 top-12 rounded-sm border border-gold/40 bg-card/95 px-4 py-3 shadow-lg backdrop-blur"
      >
        <div className="font-mono-meta text-[0.6rem] text-muted-foreground">
          Citations
        </div>
        <div className="font-serif-display text-2xl font-bold text-gold leading-none mt-1">
          13
        </div>
        <div className="font-mono-meta text-[0.55rem] text-muted-foreground mt-1.5">
          1,212+ accesses
        </div>
      </motion.div>

      {/* Floating equation badge */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute -left-4 bottom-24 rounded-sm border border-border bg-card/95 px-4 py-2 shadow-lg backdrop-blur"
      >
        <p className="font-serif text-xs italic text-foreground">
          ∂u/∂t + u · ∂u/∂x = 0
        </p>
        <p className="font-mono-meta text-[0.55rem] text-muted-foreground mt-1">
          Burgers&apos; equation
        </p>
      </motion.div>

      {/* Affiliation badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-card px-4 py-1.5 shadow-md"
      >
        <span className="font-mono-meta text-[0.6rem] text-gold">
          Debre Tabor University · Ethiopia
        </span>
      </motion.div>
    </div>
  );
}

// Optional link icon usage (avoid unused import warning)
void ExternalLink;
