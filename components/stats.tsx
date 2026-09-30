import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="section section-muted" id="numbers" aria-labelledby="stats-title">
      <div className="wrap">
        <header className="section-intro center">
          <p className="section-num">04 — By the numbers</p>
          <h2 id="stats-title">
            Results that <em>speak</em>
            <br />
            for themselves.
          </h2>
        </header>
        <div className="stats-grid">
          {stats.map((item) => (
            <article key={item.value + item.label.slice(0, 20)}>
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
