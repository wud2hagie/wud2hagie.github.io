"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  FileText,
  FlaskConical,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { SITE, INSTITUTIONS } from "@/lib/content";
import { OrcidBadge } from "@/components/micro/orcid-badge";

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
      {/* Subtle gold gradient — no floating symbols */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.62 0.13 75 / 0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-12 lg:py-0">
          {/* Left: Text + Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Eyebrow with location */}
            <div className="flex items-center gap-3">
              <a
                href={INSTITUTIONS.dtu.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono-meta text-gold hover:underline underline-offset-2"
              >
                {SITE.affiliation}
              </a>
              <span className="h-px w-12 bg-gold/50" />
              <span className="font-mono-meta text-muted-foreground">
                Est. 2011
              </span>
            </div>

            {/* Name */}
            <h1 className="font-serif-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Wudneh
              <br />
              Tilahun Mengist
            </h1>

            {/* ORCID badge */}
            <OrcidBadge />

            {/* Current status indicator */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <p className="text-sm text-muted-foreground">
                <span className="font-mono-meta text-gold mr-2">Currently</span>
                {SITE.currentStatus}
              </p>
            </div>

            {/* Tagline */}
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground italic">
              &ldquo;{SITE.tagline}&rdquo;
            </p>

            {/* Tabs */}
            <div className="mt-4 flex flex-col gap-4">
              {/* Tab switcher */}
              <div className="inline-flex w-fit items-center gap-1 rounded-full border border-border bg-card/60 p-1">
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
                          transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
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
                        at{" "}
                        <a
                          href={INSTITUTIONS.dtu.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-medium text-gold hover:underline underline-offset-2"
                        >
                          {INSTITUTIONS.dtu.name}
                        </a>
                        . My pedagogy integrates evidence-based multimedia
                        principles and Universal Design for Learning through
                        the Open edX platform.
                      </p>
                    )}
                    {tab === "publications" && (
                      <p>
                        My work appears in{" "}
                        <a
                          href={INSTITUTIONS.arabianJM.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-semibold text-gold hover:underline underline-offset-2"
                        >
                          Springer&apos;s Arabian Journal of Mathematics
                        </a>{" "}
                        (2019) with{" "}
                        <span className="text-gold font-semibold">13 citations</span>{" "}
                        and{" "}
                        <span className="text-gold font-semibold">
                          1,212+ accesses
                        </span>
                        . A second manuscript is currently under review at the{" "}
                        <a
                          href={INSTITUTIONS.jist.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-medium text-gold hover:underline underline-offset-2"
                        >
                          Journal of Interdisciplinary Science and Technology
                        </a>
                        .
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#research"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold hover:-translate-y-0.5"
                >
                  Explore Portfolio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              </div>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 relative mx-auto w-full max-w-md"
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
    <div className="relative">
      {/* Photo frame — clean, editorial, no glow */}
      <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card shadow-lg">
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

      {/* Research metrics badge — static, no animation */}
      <div className="absolute -right-4 top-12 rounded-sm border border-gold/40 bg-card/95 px-4 py-3 shadow-sm backdrop-blur">
        <div className="font-mono-meta text-[0.6rem] text-muted-foreground">
          Citations
        </div>
        <div className="font-serif-display text-2xl font-bold text-gold leading-none mt-1">
          13
        </div>
        <div className="font-mono-meta text-[0.55rem] text-muted-foreground mt-1.5">
          1,212+ accesses
        </div>
      </div>

      {/* Equation badge — static */}
      <div className="absolute -left-4 bottom-24 rounded-sm border border-border bg-card/95 px-4 py-2 shadow-sm backdrop-blur">
        <p className="font-serif text-xs italic text-foreground">
          ∂u/∂t + u · ∂u/∂x = 0
        </p>
        <p className="font-mono-meta text-[0.55rem] text-muted-foreground mt-1">
          Burgers&apos; equation
        </p>
      </div>

      {/* Affiliation badge — static */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/40 bg-card px-4 py-1.5 shadow-sm">
        <a
          href={INSTITUTIONS.dtu.url}
          target="_blank"
          rel="noreferrer noopener"
          className="font-mono-meta text-[0.6rem] text-gold hover:underline"
        >
          Debre Tabor University · Ethiopia
        </a>
      </div>
    </div>
  );
}
