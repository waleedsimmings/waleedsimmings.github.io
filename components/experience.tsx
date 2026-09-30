import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <header className="section-intro">
          <div>
            <p className="section-num">03 — Experience</p>
            <h2 id="experience-title">
              Where I&apos;ve <em>built</em>
              <br />
              things that matter.
            </h2>
          </div>
          <p className="section-lead">
            From an Express internship in Peshawar to senior product engineering and leading a 12-engineer backend team.
          </p>
        </header>

        <ol className="role-list">
          {experience.map((role) => (
            <li key={`${role.org}-${role.period}`} className={role.current ? "is-current" : undefined}>
              <div className="role-aside">
                <p>{role.period}</p>
                <p>{role.place}</p>
              </div>
              <div className="role-main">
                <p className="role-org">{role.org}</p>
                <h3>{role.title}</h3>
                {role.summary ? <p className="role-summary">{role.summary}</p> : null}
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>→ {point}</li>
                  ))}
                </ul>
                {role.stack ? (
                  <ul className="stack">
                    {role.stack.map((s) => (
                      <li key={s}>{s}</li>
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
