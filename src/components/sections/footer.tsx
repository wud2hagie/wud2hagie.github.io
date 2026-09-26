"use client";

import { ArrowUp } from "lucide-react";
import { PERSON, NAV_LINKS } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border/60 bg-gradient-to-b from-background to-background/80">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif-display text-xl font-bold gradient-text">
              {PERSON.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {PERSON.title} · {PERSON.location}
            </p>
            <p className="mt-2 text-xs text-muted-foreground italic">
              {PERSON.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="font-mono-meta text-neon mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-neon transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-mono-meta text-neon mb-4">Elsewhere</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${PERSON.email}`}
                  className="text-muted-foreground hover:text-neon transition-colors break-all"
                >
                  {PERSON.email}
                </a>
              </li>
              <li>
                <a
                  href={PERSON.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground hover:text-neon transition-colors"
                >
                  {PERSON.youtubeHandle} (YouTube)
                </a>
              </li>
              <li>
                <a
                  href={PERSON.orcid}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground hover:text-neon transition-colors"
                >
                  ORCID Profile
                </a>
              </li>
              <li>
                <a
                  href={PERSON.academicPortfolio}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground hover:text-neon transition-colors"
                >
                  Academic Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} {PERSON.fullName}. Built with Next.js.
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated: {PERSON.lastUpdated}
          </p>
          <a
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-full glass-card text-foreground hover:bg-neon/10 hover:text-neon transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
