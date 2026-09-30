import { certifications, education, skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <>
      <section className="section" id="skills" aria-labelledby="skills-title">
        <div className="wrap">
          <header className="section-intro">
            <div>
              <p className="section-num">06 — Skills</p>
              <h2 id="skills-title">
                The full <em>toolkit.</em>
              </h2>
            </div>
            <p className="section-lead">
              Frontend, services, data, and cloud — the stack behind the products above.
            </p>
          </header>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="education" aria-labelledby="edu-title">
        <div className="wrap">
          <header className="section-intro">
            <div>
              <p className="section-num">07 — Education</p>
              <h2 id="edu-title">
                Credentialed &amp; <em>committed</em>
                <br />
                to the craft.
              </h2>
            </div>
          </header>
          <div className="edu-grid">
            <article>
              <h3>{education.degree}</h3>
              <p>
                {education.school} · {education.year}
              </p>
              <p className="muted">{education.place}</p>
            </article>
            <article>
              <h3>Certifications</h3>
              <ul className="cert-list">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
