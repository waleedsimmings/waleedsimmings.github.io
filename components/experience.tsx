import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="eyebrow">03 — Experience</p>
            <h2 id="experience-title">Roles</h2>
          </div>
          <p className="section-lead">
            From an Express internship in Peshawar to senior product engineering and a backend team lead role.
          </p>
        </header>

        <ol className="timeline">
          {experience.map((role) => (
            <li key={`${role.org}-${role.period}`} className={role.current ? "is-current" : undefined}>
              <div className="role-meta">
                <p className="role-period">{role.period}</p>
                <p className="role-place">{role.place}</p>
              </div>
              <div className="role-body">
                <p className="role-org">{role.org}</p>
                <h3>{role.title}</h3>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
