"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { PERSON } from "@/lib/content";

export function LocalTimeWidget() {
  const [time, setTime] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");

  React.useEffect(() => {
    const update = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: PERSON.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        const dateFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: PERSON.timezone,
          weekday: "short",
          day: "numeric",
          month: "short",
        });
        setTime(formatter.format(now));
        setDate(dateFormatter.format(now));
      } catch {
        const now = new Date();
        setTime(now.toLocaleTimeString());
        setDate(now.toLocaleDateString());
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      <Clock className="h-3 w-3 text-neon" />
      <span className="font-mono-meta text-[0.6rem]">
        {time} · {date} · {PERSON.location.split(",")[0]}
      </span>
    </div>
  );
}
