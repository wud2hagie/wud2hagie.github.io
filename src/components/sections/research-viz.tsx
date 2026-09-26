"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LineChart, Play, Pause, RotateCcw } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

/**
 * Visualization of the inviscid Burgers' equation solution
 * u_t + u·u_x = 0 — showing wave steepening to a shock.
 *
 * Static by default; animates only when the user clicks Play.
 *
 * Solution (method of characteristics): u(x,t) = u_0(x - u·t)
 * With initial condition u_0(x) = sin(x), the wave steepens and forms
 * a shock at t ≈ 1.
 */
function BurgersEquationPlot() {
  const [time, setTime] = React.useState(1.2); // start at a meaningful mid-state
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setTime((t) => {
        const next = t + 0.005;
        if (next > 2.5) {
          setPlaying(false);
          return 2.5;
        }
        return next;
      });
    }, 30);
    return () => clearInterval(id);
  }, [playing]);

  // Generate Burgers' equation solution via method of characteristics
  // u_0(x) = sin(x) for x in [0, 2π]
  const points = React.useMemo(() => {
    const pts: string[] = [];
    const N = 100;
    for (let i = 0; i <= N; i++) {
      const x = (i / N) * Math.PI * 2;
      // Solve x = ξ + u_0(ξ) * t for ξ (Newton iteration)
      let xi = x;
      for (let iter = 0; iter < 5; iter++) {
        const u0 = Math.sin(xi);
        const f = xi + u0 * time - x;
        const df = 1 + Math.cos(xi) * time;
        xi = xi - f / df;
      }
      const u = Math.sin(xi);
      const px = 60 + (x / (Math.PI * 2)) * 480;
      const py = 220 - u * 90;
      pts.push(`${px},${py}`);
    }
    return pts.join(" ");
  }, [time]);

  return (
    <div className="relative rounded-sm border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="font-mono-meta text-gold">Live Simulation</div>
          <h4 className="mt-1 font-serif-display text-lg font-semibold text-foreground">
            Burgers&apos; Equation — Wave Steepening
          </h4>
          <p className="text-xs text-muted-foreground mt-1 italic">
            ∂u/∂t + u · ∂u/∂x = 0 · method of characteristics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? "Pause" : "Play"}
            className="h-8 w-8 rounded-sm border border-border bg-background hover:bg-gold/5 hover:border-gold/40 flex items-center justify-center text-foreground transition-colors"
          >
            {playing ? (
              <Pause className="h-3.5 w-3.5" />
            ) : (
              <Play className="h-3.5 w-3.5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setTime(0)}
            aria-label="Restart"
            className="h-8 w-8 rounded-sm border border-border bg-background hover:bg-gold/5 hover:border-gold/40 flex items-center justify-center text-foreground transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <svg viewBox="0 0 600 280" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
        {/* Grid */}
        <g opacity="0.15">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={`v${i}`}
              x1={60 + i * 96}
              y1="40"
              x2={60 + i * 96}
              y2="240"
              stroke="currentColor"
              className="text-foreground"
              strokeWidth="0.5"
            />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`h${i}`}
              x1="60"
              y1={40 + i * 50}
              x2="540"
              y2={40 + i * 50}
              stroke="currentColor"
              className="text-foreground"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Axes */}
        <line x1="60" y1="220" x2="540" y2="220" stroke="currentColor" className="text-foreground" strokeWidth="1" />
        <line x1="60" y1="40" x2="60" y2="220" stroke="currentColor" className="text-foreground" strokeWidth="1" />

        {/* Axis labels */}
        <text x="300" y="265" textAnchor="middle" className="font-mono fill-current text-foreground" fontSize="10">
          x
        </text>
        <text x="40" y="135" textAnchor="middle" transform="rotate(-90 40 135)" className="font-mono fill-current text-foreground" fontSize="10">
          u(x, t)
        </text>

        {/* Initial condition (t=0) */}
        <polyline
          points={(() => {
            const pts: string[] = [];
            const N = 50;
            for (let i = 0; i <= N; i++) {
              const x = (i / N) * Math.PI * 2;
              const u = Math.sin(x);
              const px = 60 + (x / (Math.PI * 2)) * 480;
              const py = 220 - u * 90;
              pts.push(`${px},${py}`);
            }
            return pts.join(" ");
          })()}
          fill="none"
          stroke="currentColor"
          className="text-muted-foreground"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.4"
        />

        {/* Current solution */}
        <polyline
          points={points}
          fill="none"
          stroke="oklch(0.62 0.13 75)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Time indicator */}
        <text x="540" y="55" textAnchor="end" className="font-mono fill-current text-foreground" fontSize="11">
          t = {time.toFixed(3)}
        </text>

        {/* Shock point indicator when wave has steepened */}
        {time > 1 && (
          <g>
            <circle
              cx={60 + (Math.PI / (Math.PI * 2)) * 480}
              cy="220"
              r="4"
              fill="oklch(0.40 0.12 25)"
            />
            <text
              x={60 + (Math.PI / (Math.PI * 2)) * 480 + 8}
              y="215"
              className="font-mono fill-current text-foreground"
              fontSize="9"
            >
              shock
            </text>
          </g>
        )}
      </svg>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="border-l-2 border-gold/40 pl-3 text-left">
          <div className="font-mono-meta text-[0.55rem] text-muted-foreground">Initial Condition</div>
          <div className="font-mono text-xs text-foreground mt-1">u₀(x) = sin(x)</div>
        </div>
        <div className="border-l-2 border-gold/40 pl-3 text-left">
          <div className="font-mono-meta text-[0.55rem] text-muted-foreground">Shock Time</div>
          <div className="font-mono text-xs text-foreground mt-1">t* ≈ 1.0</div>
        </div>
        <div className="border-l-2 border-gold/40 pl-3 text-left">
          <div className="font-mono-meta text-[0.55rem] text-muted-foreground">Domain</div>
          <div className="font-mono text-xs text-foreground mt-1">x ∈ [0, 2π]</div>
        </div>
      </div>
    </div>
  );
}

export function ResearchVisualization() {
  return (
    <SectionTransition
      id="research"
      className="relative py-20 sm:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="02"
          eyebrow="Research Visualization"
          title="The Burgers&apos; Equation, Visualized"
          icon={LineChart}
          description="A live simulation of the inviscid Burgers' equation — the nonlinear PDE central to my Springer-published research on quintic Hermite spline collocation. Watch the wave steepen and form a shock front in real time."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <BurgersEquationPlot />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-sm border border-border bg-card p-6 shadow-sm">
              <h3 className="font-serif-display text-lg font-semibold text-foreground">
                Why Burgers&apos; Equation?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Burgers&apos; equation is the simplest nonlinear PDE that
                exhibits shock formation. It serves as a benchmark for
                numerical methods — capturing its behavior accurately
                validates that a method can handle the convective nonlinearity
                that appears in the Navier-Stokes equations, gas dynamics, and
                traffic flow.
              </p>
            </div>

            <div className="rounded-sm border border-gold/30 bg-gold/[0.03] p-6 shadow-sm">
              <div className="font-mono-meta text-gold">My Contribution</div>
              <h3 className="mt-2 font-serif-display text-lg font-semibold text-foreground">
                Direct Collocation, No Transformation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Most numerical approaches transform Burgers&apos; equation via
                Hopf-Cole into the linear heat equation. My published work in
                the{" "}
                <a
                  href="https://link.springer.com/journal/40065"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium text-gold hover:underline underline-offset-2"
                >
                  Arabian Journal of Mathematics
                </a>{" "}
                instead uses{" "}
                <span className="font-semibold text-foreground">
                  quintic Hermite spline collocation
                </span>{" "}
                to solve the nonlinear form directly, preserving the
                equation&apos;s structure and avoiding transformation-induced
                error.
              </p>
              <a
                href="#publications"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline"
              >
                Read the publication →
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
