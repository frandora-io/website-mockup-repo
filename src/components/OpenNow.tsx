"use client";
import { useEffect, useState } from "react";

// Hours map: 0 = Sun, 1 = Mon, … 6 = Sat
// Each entry is null (closed) or [openHour, closeHour] in 24h local time.
const HOURS: (readonly [number, number] | null)[] = [
  [16, 21], // Sun 4pm – 9pm
  null,     // Mon closed
  null,     // Tue closed
  [17, 22], // Wed 5pm – 10pm
  [17, 22], // Thu 5pm – 10pm
  [17, 23], // Fri 5pm – 11pm
  [17, 23], // Sat 5pm – 11pm
];

function format12h(hour: number): string {
  const h = hour % 12 === 0 ? 12 : hour % 12;
  const suffix = hour < 12 || hour === 24 ? "AM" : "PM";
  return `${h} ${suffix}`;
}

function getStatus(now: Date): {
  open: boolean;
  label: string;
} {
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const todays = HOURS[day];

  if (todays) {
    const [openH, closeH] = todays;
    // Open if current time is between open and close
    const afterOpen = hour > openH || (hour === openH && minute >= 0);
    const beforeClose = hour < closeH;
    if (afterOpen && beforeClose) {
      return { open: true, label: `Open now · closes ${format12h(closeH)}` };
    }
    // Before opening today
    if (hour < openH) {
      return { open: false, label: `Opens today at ${format12h(openH)}` };
    }
  }

  // Find next open day
  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7;
    const next = HOURS[nextDay];
    if (next) {
      const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
        nextDay
      ];
      return {
        open: false,
        label: `Opens ${i === 1 ? "tomorrow" : dayName} at ${format12h(next[0])}`,
      };
    }
  }

  return { open: false, label: "Closed" };
}

export default function OpenNow({
  className = "",
}: {
  className?: string;
}) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(
    null
  );

  useEffect(() => {
    const update = () => setStatus(getStatus(new Date()));
    update();
    // Re-check every minute in case the user leaves the tab open.
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase ${className}`}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full ${
          status.open ? "bg-emerald-400 animate-pulse" : "bg-cream-muted/50"
        }`}
        aria-hidden="true"
      />
      <span className={status.open ? "text-cream" : "text-cream-muted"}>
        {status.label}
      </span>
    </div>
  );
}
