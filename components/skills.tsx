import { certifications, education, skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="eyebrow">04 — Skills</p>
            <h2 id="skills-title">Tools in production</h2>
          </div>
          <p className="section-lead">
            The stack behind the platforms above — frontend, services, data, and the cloud pieces that keep them running.
          </p>
        </header>

        <div className="skill-grid">
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

        <div className="edu-band">
          <article>
            <p className="eyebrow">Education</p>
            <h3>{education.degree}</h3>
            <p>
              {education.school} · {education.year}
            </p>
            <p className="muted">{education.place}</p>
            <p className="muted">Coursework: {education.coursework}</p>
          </article>
          <article>
            <p className="eyebrow">Certifications</p>
            <ul className="cert-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
