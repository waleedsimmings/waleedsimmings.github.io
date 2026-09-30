import { heroCard, profile, proof } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-main">
          <p className="kicker">
            <span className="live-dot" aria-hidden="true" />
            {profile.role}
          </p>
          <h1 id="hero-title">
            Shipping <em>Products.</em>
          </h1>
          <p className="hero-lede">{profile.summary}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Let&apos;s work together
              <Arrow />
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <p className="hero-locate">
            {profile.location}
            <span> · </span>
            {profile.availability}
          </p>
        </div>

        <aside className="hero-card" aria-label="Availability">
          <p className="hero-card-name">{profile.name}</p>
          <div className="hero-card-row">
            <span className="hero-card-label">Available for</span>
            <span className="hero-card-value">{heroCard.availability}</span>
          </div>
          <div className="hero-card-status">
            <span className="live-dot" aria-hidden="true" />
            <span>{heroCard.status}</span>
          </div>
          <p className="hero-card-line">{profile.heroLine}</p>
          <p className="hero-card-tags">{profile.heroTags}</p>
        </aside>
      </div>

      <div className="proof-strip wrap" aria-label="Highlights">
        {proof.map((item) => (
          <div key={item.index} className="proof-item">
            <p className="proof-meta">
              {item.index} {item.label}
            </p>
            <p className="proof-value">{item.value}</p>
            <p className="proof-detail">{item.detail}</p>
          </div>
        ))}
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
