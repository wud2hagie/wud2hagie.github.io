"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Send,
  MailOpen,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { SITE } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      toast.success("Message sent! I'll respond within 24-48 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      toast.error("Something went wrong. Please try emailing directly.");
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/60 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 py-20 sm:py-28"
    >
      <div className="paper-texture absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          icon={MailOpen}
          description="Feel free to reach out for academic collaborations, research discussions, or inquiries regarding instructional content."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <ContactItem
              icon={Mail}
              label="Institutional Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            <ContactItem
              icon={Phone}
              label="Direct Phone"
              value={SITE.phone}
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            />
            <ContactItem
              icon={MapPin}
              label="Location"
              value={SITE.location}
            />
            <ContactItem
              icon={Building2}
              label="Affiliation"
              value={SITE.affiliation}
            />

            <a
              href={SITE.orcid}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-accent/5"
            >
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <ExternalLink className="h-4 w-4" />
                </span>
                View ORCID Profile
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>

            <a
              href={SITE.youtube}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-between gap-2 rounded-xl border border-border bg-card px-5 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent/40 hover:bg-accent/5"
            >
              <span className="inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                  <ExternalLink className="h-4 w-4" />
                </span>
                The Hybrid Math Hub (YouTube)
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Sara Tesfaye"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@university.edu"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="Collaboration, supervision, or inquiry"
                />
              </div>
              <div className="mt-4 space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a bit about your inquiry, timeline, and how I can help."
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-muted-foreground">
                  I typically respond within 24-48 hours.
                </p>
                <Button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="min-w-[140px]"
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, ...(href.startsWith("mailto") || href.startsWith("tel") ? {} : { target: "_blank", rel: "noreferrer noopener" }) }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 transition-all ${
        href ? "hover:border-accent/40 hover:bg-accent/5" : ""
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-semibold text-foreground break-words">
          {value}
        </p>
      </div>
    </Wrapper>
  );
}
