"use client";

import { Mail, Phone, MapPin, Youtube, ExternalLink, ArrowUp, Scale } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/content";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border/60 bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo size={40} />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {SITE.title} at {SITE.affiliation}. {SITE.tagline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={SITE.orcid}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-gold/40 hover:bg-gold/5"
              >
                <ExternalLink className="h-3 w-3" />
                ORCID
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-gold/40 hover:bg-gold/5"
              >
                <Youtube className="h-3 w-3 text-red-600" />
                Hybrid Math Hub
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="font-mono-meta text-gold mb-4">Navigate</h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-gold border-b border-transparent hover:border-gold/40"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-mono-meta text-gold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-start gap-2 text-muted-foreground transition-colors hover:text-gold break-all"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Academic footer */}
        <div className="mt-12 pt-8 border-t border-border/60">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center">
            <p className="text-xs text-muted-foreground">
              © {year} {SITE.name}. All rights reserved.
            </p>
            <p className="text-center text-[0.65rem] text-muted-foreground italic">
              Last updated: {SITE.lastUpdated} · Built with Next.js
            </p>
            <div className="flex items-center justify-center sm:justify-end gap-2 text-[0.65rem] text-muted-foreground">
              <Scale className="h-3 w-3" />
              <span>CC BY-ND 4.0 · Academic use permitted with attribution</span>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-center text-[0.65rem] text-muted-foreground italic max-w-3xl mx-auto">
            Unless otherwise noted, all text, media, graphics, and course assets
            on this portfolio are the professional property of {SITE.name},
            protected under copyright guidelines. Designed for academic and
            professional collaboration.
          </p>

          {/* Accessibility statement */}
          <p className="mt-4 text-center text-[0.65rem] text-muted-foreground">
            <a href="#home" className="hover:text-gold underline-offset-2 hover:underline">
              Accessibility Statement
            </a>
            {" · "}
            This site respects reduced-motion preferences and follows WCAG 2.1 AA guidelines.
          </p>
        </div>
      </div>

      {/* Back to top floating */}
      <a
        href="#home"
        className="absolute -top-5 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-gold/10 hover:border-gold/40 hover:text-gold"
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </a>
    </footer>
  );
}
