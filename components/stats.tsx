import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section id="numbers" className="bg-card px-6 py-24 md:px-10 xl:px-[6vw]" aria-labelledby="stats-title">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">04 — By the numbers</p>
        <h2 id="stats-title" className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-heading">
          Results that <span className="italic text-heading-accent">speak</span>
          <br />
          for themselves.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px bg-border text-left sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <article key={item.label} className="min-h-[160px] bg-surface/70 p-7 transition-colors hover:bg-surface">
              <p className="font-display text-4xl font-black text-accent">{item.value}</p>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
