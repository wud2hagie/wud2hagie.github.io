"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MailOpen } from "lucide-react";
import { PERSON } from "@/lib/content";
import { SectionTransition } from "@/components/micro/section-transition";
import { LocalTimeWidget } from "@/components/micro/local-time";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const formData = new URLSearchParams({
        "form-name": "contact",
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
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
    <SectionTransition
      id="contact"
      className="relative py-20 sm:py-28 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon/10 text-neon">
              <MailOpen className="h-4 w-4" />
            </span>
            <span className="font-mono-meta text-neon">08 — Contact</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
            Get in Touch
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">
            For collaborations, speaking, or just to say hello — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <a
              href={`mailto:${PERSON.email}`}
              className="glass-card glass-card-hover rounded-xl p-5 flex items-center gap-4 group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10 text-neon">
                <Send className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono-meta text-[0.55rem] text-muted-foreground">Email</p>
                <p className="text-sm font-semibold text-foreground break-all">
                  {PERSON.email}
                </p>
              </div>
            </a>

            <div className="glass-card rounded-xl p-5">
              <p className="font-mono-meta text-[0.55rem] text-muted-foreground">Location</p>
              <p className="text-sm font-semibold text-foreground mt-1">
                {PERSON.location}
              </p>
              <div className="mt-3">
                <LocalTimeWidget />
              </div>
            </div>

            <a
              href={PERSON.academicPortfolio}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-card glass-card-hover rounded-xl p-5 flex items-center justify-between group"
            >
              <div>
                <p className="font-mono-meta text-[0.55rem] text-muted-foreground">Academic Portfolio</p>
                <p className="text-sm font-semibold text-foreground mt-1">
                  Full CV & publications
                </p>
              </div>
              <Send className="h-4 w-4 text-muted-foreground group-hover:text-neon transition-colors" />
            </a>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              hidden
            >
              <input type="hidden" name="form-name" value="contact" />
              <input name="name" />
              <input name="email" />
              <input name="subject" />
              <textarea name="message" />
            </form>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 sm:p-8 flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
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
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@university.edu"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a bit about what you're working on or what you need."
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <p className="text-xs text-muted-foreground">
                  I typically respond within 24-48 hours.
                </p>
                <Button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="min-w-[140px] bg-neon text-background hover:bg-neon/90"
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
    </SectionTransition>
  );
}
