import { about } from "@/lib/content";

function RichParagraph({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-medium text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="bg-paper px-6 py-24 text-ink md:px-10 xl:px-[6vw]" aria-labelledby="about-title">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">01 — About</p>
          <span className="h-px flex-1 bg-border" />
        </div>

        <h2 id="about-title" className="mt-8 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-heading">
          The engineer who <span className="italic text-heading-accent">ships</span>
          <br />
          end to end.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-muted font-light leading-[1.75]">
            {about.paragraphs.map((p) => (
              <RichParagraph key={p.slice(0, 40)} text={p} />
            ))}
            <ul className="mt-8 flex flex-wrap gap-2">
              {about.badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[0.72rem] uppercase tracking-wider text-muted"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <aside className="glass-card divide-y divide-border rounded-2xl overflow-hidden">
            {about.sidebar.map((row) => (
              <div key={row.label} className="flex flex-col gap-1 px-5 py-4">
                <p className="text-[0.58rem] uppercase tracking-[0.14em] text-muted">{row.label}</p>
                {"href" in row && row.href ? (
                  <a
                    href={row.href}
                    className="text-sm font-medium text-ink transition-colors hover:text-accent"
                    target={"external" in row && row.external ? "_blank" : undefined}
                    rel={"external" in row && row.external ? "noreferrer" : undefined}
                    download={"download" in row && row.download ? true : undefined}
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-ink">{row.value}</p>
                )}
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
