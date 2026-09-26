import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Subtle gold gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.62 0.13 75 / 0.06), transparent 60%)",
        }}
      />

      <div className="relative">
        <p className="font-mono-meta text-gold mb-4">Error 404</p>
        <h1 className="font-serif-display text-7xl font-bold tracking-tight text-foreground sm:text-8xl">
          Page not found
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          You may have followed an outdated link or mistyped the URL.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-gold hover:-translate-y-0.5"
          >
            <Home className="h-4 w-4" />
            Return home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact me
          </Link>
        </div>

        {/* Equation as decoration */}
        <p className="mt-12 font-serif text-sm italic text-muted-foreground/60">
          ∫<sub>0</sub><sup>∞</sup> e<sup>-x²</sup> dx = √π / 2
        </p>
      </div>
    </div>
  );
}
