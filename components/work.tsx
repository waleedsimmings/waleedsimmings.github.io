import { featured, work, type CaseStudy } from "@/lib/content";

export function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-ink px-6 py-24 text-paper noise-grid md:px-10 xl:px-[6vw]"
      aria-labelledby="work-title"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">02 — Selected work</p>
        <h2 id="work-title" className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-heading">
          Products I&apos;ve <span className="italic text-heading-accent">built</span>
          <br />
          and shipped.
        </h2>
        <p className="mt-6 max-w-[44ch] text-sm font-light leading-relaxed text-paper/60">
          Commerce, realtime trading, chat, payments, and team-scale backends — the systems behind production user experiences.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
          {featured.map((item) => (
            <ProductCard key={item.name} item={item} featured />
          ))}
        </div>

        <div className="mt-px grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {work.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  const inner = (
    <>
      <p className="text-[0.62rem] font-black uppercase tracking-widest text-accent">{item.org}</p>
      <h3 className={`mt-3 font-display font-black tracking-tight text-heading ${featured ? "text-3xl" : "text-2xl"}`}>
        {item.name}
      </h3>
      <p className="mt-1 text-[0.68rem] uppercase tracking-wider text-paper/45">{item.period}</p>
      <p className="mt-4 text-sm font-light leading-relaxed text-paper/65">{item.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {item.stack.map((s) => (
          <li
            key={s}
            className="rounded-full border border-paper/10 bg-paper/5 px-2.5 py-1 text-[0.62rem] uppercase tracking-wider text-paper/55"
          >
            {s}
          </li>
        ))}
      </ul>
      {item.href ? (
        <span className="mt-6 inline-block text-[0.72rem] font-semibold uppercase tracking-wider text-accent">
          View profile ↗
        </span>
      ) : null}
    </>
  );

  const className = `group block min-h-[280px] bg-card p-6 transition-colors hover:bg-surface/20 sm:p-7 ${featured ? "min-h-[320px]" : ""}`;

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <article className={className}>{inner}</article>;
}
