"use client";

import { useEffect, useState } from "react";

/** Ticking mm:ss for the live-call demo card; loops after 9:59 so it never looks stuck. */
export function CallTimer({ from = 134 }: { from?: number }) {
  const [s, setS] = useState(from);
  useEffect(() => {
    const t = setInterval(() => setS((n) => (n >= 599 ? 0 : n + 1)), 1000);
    return () => clearInterval(t);
  }, []);
  return <span suppressHydrationWarning>{String(Math.floor(s / 60)).padStart(2, "0")}:{String(s % 60).padStart(2, "0")}</span>;
}
