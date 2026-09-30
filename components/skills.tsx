import { certifications, education, skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <>
      <section id="skills" className="bg-card px-6 py-24 md:px-10 xl:px-[6vw]" aria-labelledby="skills-title">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">06 — Skills</p>
          <h2 id="skills-title" className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-heading">
            The full <span className="italic text-heading-accent">toolkit.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.label} className="bg-surface/70 p-6 transition-colors hover:bg-surface">
                <h3 className="font-display text-lg font-black text-heading">{group.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-light text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="bg-paper px-6 py-24 md:px-10 xl:px-[6vw]" aria-labelledby="edu-title">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">07 — Education</p>
          <h2 id="edu-title" className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-heading">
            Credentialed &amp; <span className="italic text-heading-accent">committed</span>
            <br />
            to the craft.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border lg:grid-cols-2">
            <article className="bg-surface/70 p-7">
              <h3 className="font-display text-xl font-black text-heading">{education.degree}</h3>
              <p className="mt-2 text-sm text-muted">
                {education.school} · {education.year}
              </p>
              <p className="mt-1 text-sm text-muted">{education.place}</p>
            </article>
            <article className="bg-surface/70 p-7">
              <h3 className="font-display text-xl font-black text-heading">Certifications</h3>
              <ul className="mt-4 divide-y divide-border">
                {certifications.map((c) => (
                  <li key={c} className="py-3 text-sm font-light text-muted">
                    {c}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
