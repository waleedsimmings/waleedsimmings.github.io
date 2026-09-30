import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="bg-paper px-6 py-24 md:px-10 xl:px-[6vw]" aria-labelledby="experience-title">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">03 — Experience</p>
        <h2 id="experience-title" className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-ink">
          Where I&apos;ve <span className="italic text-accent">built</span>
          <br />
          things that matter.
        </h2>

        <ol className="mt-12 divide-y divide-border border-t border-border">
          {experience.map((role) => (
            <li key={`${role.org}-${role.period}`} className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[200px_1fr] md:gap-12">
              <div className="text-[0.72rem] uppercase tracking-wider text-muted">
                <p className="font-semibold text-ink/80">{role.period}</p>
                <p className="mt-2">{role.place}</p>
              </div>
              <div>
                <p className="text-[0.62rem] font-black uppercase tracking-widest text-accent">{role.org}</p>
                <h3 className="mt-2 font-display text-2xl font-black text-ink md:text-3xl">{role.title}</h3>
                {role.summary ? <p className="mt-3 max-w-[62ch] text-sm font-light leading-relaxed text-muted">{role.summary}</p> : null}
                <ul className="mt-5 space-y-2 text-sm font-light text-muted">
                  {role.points.map((point) => (
                    <li key={point}>→ {point}</li>
                  ))}
                </ul>
                {role.stack ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {role.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[0.62rem] uppercase tracking-wider text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
