"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label="Waleed Tahir, back to top">
        <span className="brand-mark">WT</span>
        <span className="brand-name">Waleed Tahir</span>
      </a>

      <nav className="nav-links" aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-end">
        <a className="nav-social" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="nav-social" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={`menu-bars${open ? " is-open" : ""}`} aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="mobile-menu">
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              GitHub
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
