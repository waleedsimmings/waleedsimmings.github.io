import { profile, snapshot, ticker } from "@/lib/content";

export function Hero() {
  const loop = [...ticker, ...ticker];

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-body">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" />
            {profile.role}
            <span className="eyebrow-sep">·</span>
            {profile.location}
          </p>
          <h1 id="hero-title">
            {profile.firstName} <em>{profile.lastName}</em>
          </h1>
          <p className="lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              Selected work
              <Arrow />
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <aside className="snapshot" aria-label="At a glance">
          <p className="snapshot-kicker">At a glance</p>
          <dl>
            {snapshot.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <ul>
            {loop.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
