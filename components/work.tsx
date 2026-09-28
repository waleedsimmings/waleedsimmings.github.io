import { featured, principles, work, type CaseStudy } from "@/lib/content";

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="eyebrow">01 — Focus</p>
            <h2 id="approach-title">What I build</h2>
          </div>
          <p className="section-lead">
            Full-stack product work: the interface, the APIs and payments behind it, and the team that ships it.
          </p>
        </header>
        <ol className="principles">
          {principles.map((item) => (
            <li key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="eyebrow">02 — Work</p>
            <h2 id="work-title">Selected work</h2>
          </div>
          <p className="section-lead">
            Products and platforms I have designed, built, and shipped — commerce, trading, chat, data, and team-scale backends.
          </p>
        </header>

        <div className="feature-grid">
          {featured.map((item) => (
            <article key={item.name} className="feature-card">
              <CaseHeader item={item} featured />
              <p>{item.summary}</p>
              {item.points ? (
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              <Stack items={item.stack} />
            </article>
          ))}
        </div>

        <div className="work-grid">
          {work.map((item, index) => (
            <article key={item.name} className="work-card">
              <div>
                <p className="card-index">{String(index + 1).padStart(2, "0")}</p>
                <CaseHeader item={item} />
                <p>{item.summary}</p>
              </div>
              <Stack items={item.stack} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseHeader({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  return (
    <header className={featured ? "case-head is-featured" : "case-head"}>
      <h3>{item.name}</h3>
      <p>
        {item.org}
        <span> · </span>
        {item.period}
      </p>
    </header>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
