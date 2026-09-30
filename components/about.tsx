import { about } from "@/lib/content";

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="section-num">01 — About</p>
          <h2 id="about-title">
            {about.titleLead} <em>{about.titleEm}</em>
            <br />
            {about.titleTail}
          </h2>
          <div className="about-body">
            {about.paragraphs.map((p) => (
              <RichParagraph key={p.slice(0, 40)} text={p} />
            ))}
          </div>
          <ul className="badge-row">
            {about.badges.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <aside className="info-card" aria-label="Contact and details">
          {about.sidebar.map((row) => (
            <div key={row.label} className="info-row">
              <p className="info-label">{row.label}</p>
              {"href" in row && row.href ? (
                <a
                  href={row.href}
                  target={"external" in row && row.external ? "_blank" : undefined}
                  rel={"external" in row && row.external ? "noreferrer" : undefined}
                  download={"download" in row && row.download ? true : undefined}
                >
                  {row.value}
                </a>
              ) : (
                <p>{row.value}</p>
              )}
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
