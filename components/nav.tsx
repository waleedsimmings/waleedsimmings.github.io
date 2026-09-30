"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between border-b px-6 py-5 transition-all duration-300 md:px-10 ${
          scrolled ? "border-border bg-paper/85 backdrop-blur-xl" : "border-transparent bg-paper/40 backdrop-blur-sm"
        }`}
      >
        <a
          href="#top"
          className="font-display text-xl font-black tracking-[-0.08em] text-ink transition-colors hover:text-accent"
        >
          WT<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-ink px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-accent hover:text-[#101112]"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-[5px] md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-6 bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-[99] bg-paper/95 px-6 pt-28 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-4xl font-black text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="text-accent" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              LinkedIn
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
