"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_LINKS } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center" aria-label="Home">
              <Logo size={36} />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile toggle */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="h-10 w-10 rounded-full border border-border bg-card/80 backdrop-blur flex items-center justify-center hover:bg-accent/10 hover:border-accent/40 transition-colors"
              >
                {mobileOpen ? (
                  <X className="h-[18px] w-[18px]" />
                ) : (
                  <Menu className="h-[18px] w-[18px]" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-b border-border/60"
          >
            <nav className="mx-auto max-w-6xl px-5 py-3 flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground/85 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
