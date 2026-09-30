import { methodology } from "@/lib/content";

export function Methodology() {
  return (
    <section className="section" id="methodology" aria-labelledby="methodology-title">
      <div className="wrap">
        <header className="section-intro">
          <div>
            <p className="section-num">05 — Methodology</p>
            <h2 id="methodology-title">
              How I <em>deliver</em>
              <br />
              full-stack work.
            </h2>
          </div>
          <p className="section-lead">{methodology.lead}</p>
        </header>
        <ol className="method-grid">
          {methodology.steps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
