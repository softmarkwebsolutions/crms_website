"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { themeForPath } from "@/lib/site";

/** Sets data-theme from the route so navbar, page and footer all share the product's colours. */
export function ThemeShell({ children }: { children: ReactNode }) {
  const theme = themeForPath(usePathname());
  return <div data-theme={theme} className="flex min-h-full flex-1 flex-col">{children}</div>;
}
