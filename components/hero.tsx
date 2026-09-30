import Image from "next/image";
import { heroCard, profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-x-hidden px-5 pb-14 pt-[6.25rem] sm:pt-32 md:px-10 md:min-h-[920px] lg:min-h-screen xl:px-[4.5vw]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-surface" aria-hidden="true" />

      <div className="grid grid-cols-1 items-start gap-8 lg:min-h-[700px] lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:gap-6">
        <div className="relative z-10 pt-2 lg:z-20 lg:pt-0">
          <p className="mb-4 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted">
            <span className="block h-px w-7 bg-accent" aria-hidden="true" />
            {profile.role}
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(2.85rem,12vw,7.5rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] text-heading sm:text-[clamp(3.5rem,11vw,7.5rem)] sm:leading-[0.82]"
          >
            {profile.firstName}
            <br />
            <span className="text-heading-accent">{profile.lastName}.</span>
          </h1>
          <p className="mt-8 max-w-[48ch] text-[0.95rem] font-light leading-relaxed text-muted md:text-base">
            {profile.summary}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-accent hover:text-[#101112]"
            >
              Let&apos;s work together
              <Arrow />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/75 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:border-accent hover:bg-accent hover:text-[#101112]"
            >
              GitHub
              <External />
            </a>
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.68rem] uppercase tracking-wider text-muted">
            <span className="inline-flex items-center gap-2">
              <Pin />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe />
              {profile.availability}
            </span>
          </p>
        </div>

        <div className="relative z-20 mt-2 flex w-full flex-col items-center lg:mt-0 lg:block lg:h-[760px]">
          <div className="relative w-[92%] max-w-[560px] sm:w-[84%] lg:absolute lg:inset-x-[8%] lg:bottom-8 lg:top-0">
            <div className="hero-ring portrait-panel relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[2rem] sm:aspect-auto sm:h-[min(72vh,560px)] lg:h-full lg:max-h-[760px]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_100%,#a8ff2418,transparent_55%)]" />
              <Image
                src="/waleed-portrait.jpeg"
                alt={profile.name}
                width={560}
                height={700}
                className="hero-portrait"
                priority
              />
            </div>
          </div>

          <div className="glass-card relative z-20 mt-4 w-full max-w-[17rem] rounded-2xl p-4 sm:max-w-[11rem] lg:absolute lg:right-4 lg:top-24 lg:mt-0 lg:w-44">
            <p className="text-[0.58rem] uppercase tracking-[0.14em] text-muted">Available for</p>
            <p className="mt-1 font-black uppercase text-accent">{heroCard.availability}</p>
            <div className="mt-3 flex items-center justify-between text-[0.62rem] uppercase tracking-wider">
              <span className="flex items-center gap-2 text-muted">
                <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
                {heroCard.status}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-[#101112]">
                <Spark />
              </span>
            </div>
            <p className="mt-3 text-sm font-bold text-ink">{profile.name}</p>
            <p className="mt-0.5 text-[0.62rem] text-muted">{profile.heroLine}</p>
            <p className="mt-1 text-[0.58rem] uppercase tracking-wider text-muted">{profile.heroTags}</p>
          </div>
        </div>
      </div>

    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function External() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Globe() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}

function Spark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
    </svg>
  );
}
