import { profile } from "@/lib/content";

export function Contact() {
  return (
    <>
      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <p className="eyebrow">05 — Contact</p>
          <h2 id="contact-title">Let’s talk about the next product.</h2>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="contact-links">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <span>linkedin.com/in/waleed-tahir</span>
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
                <span>github.com/waleedsimmings</span>
              </a>
            </li>
            <li>
              <a href={profile.phoneHref}>
                Phone
                <span>{profile.phone}</span>
              </a>
            </li>
            <li>
              <a href={profile.resume} download>
                Download CV
                <span>PDF</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer-row">
          <p>© {new Date().getFullYear()} Waleed Tahir</p>
          <p>{profile.location}</p>
          <p>Senior FullStack Engineer</p>
        </div>
      </footer>
    </>
  );
}
