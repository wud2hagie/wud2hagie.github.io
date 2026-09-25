"use client";

import { Mail, Phone, MapPin, Youtube, ExternalLink, ArrowUp } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/content";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border/60 bg-gradient-to-b from-background to-secondary/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo size={40} />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {SITE.title} at {SITE.affiliation}. Bridging rigorous numerical
              analysis, computational mathematics, and advanced digital learning
              methodologies.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={SITE.orcid}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5"
              >
                <ExternalLink className="h-3 w-3" />
                ORCID
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/5"
              >
                <Youtube className="h-3 w-3 text-red-600" />
                Hybrid Math Hub
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif-display text-sm font-semibold text-foreground">
              Navigate
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif-display text-sm font-semibold text-foreground">
              Contact
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-start gap-2 text-muted-foreground transition-colors hover:text-accent break-all"
                >
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-center text-[11px] text-muted-foreground sm:text-right">
            Unless otherwise noted, all text, media, graphics, and course assets
            on this portfolio are the professional property of {SITE.name},
            protected under copyright guidelines.
          </p>
          <a
            href="#home"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent/10 hover:border-accent/40 hover:text-accent"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
