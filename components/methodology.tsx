import { methodology } from "@/lib/content";

export function Methodology() {
  return (
    <section id="methodology" className="bg-paper px-6 py-24 md:px-10 xl:px-[6vw]" aria-labelledby="methodology-title">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">05 — Methodology</p>
        <h2 id="methodology-title" className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-heading">
          How I <span className="italic text-heading-accent">deliver</span>
          <br />
          full-stack work.
        </h2>
        <p className="mt-6 max-w-[48ch] text-sm font-light leading-relaxed text-muted">{methodology.lead}</p>

        <ol className="mt-12 grid grid-cols-1 gap-px bg-border lg:grid-cols-3">
          {methodology.steps.map((step) => (
            <li key={step.number} className="min-h-[240px] bg-surface/70 p-7 transition-colors hover:bg-surface">
              <span className="font-display text-2xl font-black italic text-accent">{step.number}</span>
              <h3 className="mt-10 font-display text-xl font-black text-heading">{step.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
