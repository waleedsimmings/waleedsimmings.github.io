import { profile } from "@/lib/content";

export function Contact() {
  return (
    <>
      <section id="contact" className="bg-paper px-6 py-24 text-center md:px-10 xl:px-[6vw]" aria-labelledby="contact-title">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-accent">08 — Contact</p>
          <h2 id="contact-title" className="mt-4 font-display text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.1] tracking-tight text-ink">
            Ready to <span className="italic text-accent">build</span>
            <br />
            something great?
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-sm font-light leading-relaxed text-muted">
            Scaling a product, shipping a new feature, or need a senior full-stack engineer who owns UI through cloud — let&apos;s talk.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block font-display text-2xl font-black text-ink underline decoration-accent/50 underline-offset-8 transition-colors hover:text-accent md:text-4xl"
          >
            {profile.email}
          </a>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.72rem] font-medium uppercase tracking-wider text-muted">
            <a href={profile.phoneHref} className="transition-colors hover:text-accent">
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              linkedin.com/in/waleed-tahir ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              github.com/waleedsimmings ↗
            </a>
            <a href={profile.resume} download className="transition-colors hover:text-accent">
              Download CV ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-paper px-6 py-8 md:px-10 xl:px-[6vw]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-[0.68rem] uppercase tracking-wider text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Waleed Tahir. Products, engineered.</p>
          <p>{profile.location}</p>
          <p>{profile.role}</p>
        </div>
      </footer>
    </>
  );
}
