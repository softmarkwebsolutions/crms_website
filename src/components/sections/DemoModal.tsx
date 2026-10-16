"use client";

import { useEffect, useState } from "react";
import { DemoForm } from "./DemoForm";
import { Icon } from "@/components/ui/Icon";

/** Opens a name + mobile lead form whenever an "#demo" link is clicked (e.g. "Schedule Demo", "Request a demo"). */
export function DemoModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      if (!a || !/^(\/)?#demo$/.test(href)) return;
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md animate-rise overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-lift)]">
        <div className="bg-[linear-gradient(135deg,var(--color-deep),var(--color-deep-2))] px-6 py-5 text-white">
          <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 grid size-8 place-items-center rounded-full bg-white/15 hover:bg-white/25"><Icon name="close" className="size-4" /></button>
          <h2 id="demo-modal-title" className="pr-8 text-xl font-bold">Request a demo</h2>
          <p className="mt-1 text-sm text-white/75">Share your name and mobile number and our team will call you.</p>
        </div>
        <div className="p-6"><DemoForm /></div>
      </div>
    </div>
  );
}
