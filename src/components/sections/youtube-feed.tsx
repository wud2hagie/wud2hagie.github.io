"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Youtube, Play, ExternalLink } from "lucide-react";
import { SITE, YOUTUBE_VIDEOS } from "@/lib/content";
import { SectionHeading } from "./section-heading";
import { SectionTransition } from "@/components/micro/section-transition";

export function YouTubeFeed() {
  return (
    <SectionTransition
      id="youtube"
      className="relative overflow-hidden border-y border-border/40 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 py-20 sm:py-32"
    >
      <div className="paper-texture absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <SectionHeading
          index="07"
          eyebrow="The Hybrid Math Hub"
          title="Math, Made Accessible"
          icon={Youtube}
          description="My educational channel where I conceptualize, script, and produce high-quality video tutorials breaking down complex mathematical concepts into engaging, structured lessons."
          align="center"
        />

        {/* Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-sm border border-red-600/30 bg-gradient-to-br from-red-50/40 via-card to-amber-50/30 p-6 shadow-sm sm:flex-row sm:text-left dark:from-red-950/15 dark:to-amber-950/10"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/10 text-red-600 shrink-0">
            <Youtube className="h-7 w-7" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-serif-display text-base font-semibold text-foreground">
              {SITE.youtubeHandle}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Subscribe for new tutorials on numerical analysis, calculus, and
              computational mathematics.
            </p>
          </div>
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Youtube className="h-4 w-4" />
            Visit Channel
          </a>
        </motion.div>

        {/* Video grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE_VIDEOS.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SITE.youtube}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
          >
            View all videos on YouTube
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </SectionTransition>
  );
}

function VideoCard({
  video,
  index,
}: {
  video: (typeof YOUTUBE_VIDEOS)[number];
  index: number;
}) {
  const [playing, setPlaying] = React.useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden border border-border bg-card shadow-sm transition-all hover:shadow-lg hover:border-gold/40"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group/play absolute inset-0 h-full w-full"
            aria-label={`Play: ${video.title}`}
          >
            <img
              src={thumb}
              alt={video.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform group-hover/play:scale-110">
                <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
              <p className="font-mono-meta text-[0.55rem] text-white/80">
                The Hybrid Math Hub
              </p>
            </div>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif-display text-base font-semibold leading-snug text-foreground">
          {video.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {video.description}
        </p>
      </div>
    </motion.div>
  );
}
