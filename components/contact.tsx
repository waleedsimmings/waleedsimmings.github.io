import { profile } from "@/lib/content";

export function Contact() {
  return (
    <>
      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact-inner">
          <p className="section-num">08 — Contact</p>
          <h2 id="contact-title">
            Ready to <em>build</em>
            <br />
            something great?
          </h2>
          <p className="contact-lede">
            Scaling a product, shipping a new feature, or need a senior full-stack engineer who owns UI through cloud — let&apos;s talk.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="contact-row">
            <li>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/waleed-tahir ↗
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                github.com/waleedsimmings ↗
              </a>
            </li>
            <li>
              <a href={profile.resume} download>
                Download CV ↗
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer-row">
          <p>© {new Date().getFullYear()} Waleed Tahir. Products, engineered.</p>
          <p>{profile.location}</p>
          <p>{profile.role}</p>
        </div>
      </footer>
    </>
  );
}
