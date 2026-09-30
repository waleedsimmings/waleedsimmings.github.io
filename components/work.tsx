import { featured, work, type CaseStudy } from "@/lib/content";

export function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <header className="section-intro">
          <div>
            <p className="section-num">02 — Selected work</p>
            <h2 id="work-title">
              Products I&apos;ve <em>built</em>
              <br />
              and shipped.
            </h2>
          </div>
          <p className="section-lead">
            Commerce, realtime trading, chat, payments, and team-scale backends — the systems behind production user experiences.
          </p>
        </header>

        <div className="product-featured">
          {featured.map((item) => (
            <ProductCard key={item.name} item={item} featured />
          ))}
        </div>

        <div className="product-grid">
          {work.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, featured = false }: { item: CaseStudy; featured?: boolean }) {
  const Tag = item.href ? "a" : "article";
  const linkProps = item.href
    ? { href: item.href, target: "_blank", rel: "noreferrer" as const }
    : {};

  return (
    <Tag className={featured ? "product-card is-featured" : "product-card"} {...linkProps}>
      <p className="product-kicker">{item.org}</p>
      <h3>{item.name}</h3>
      <p className="product-period">{item.period}</p>
      <p className="product-summary">{item.summary}</p>
      <ul className="stack">
        {item.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      {item.href ? <span className="product-cta">View profile ↗</span> : null}
    </Tag>
  );
}
