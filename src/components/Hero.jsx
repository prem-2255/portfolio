import { profile, socials } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from './Icons.jsx'

export default function Hero() {
  // Vite ka BASE_URL lagana zaroori hai, warna GitHub Pages pe resume link toot jaata hai
  const resumeHref = profile.resume
    ? `${import.meta.env.BASE_URL}${profile.resume}`
    : null

  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero__eyebrow">{profile.role}</p>

        <h1 className="hero__title">{profile.headline}</h1>

        <p className="hero__tagline">{profile.tagline}</p>

        {profile.available && (
          <p className="hero__badge">
            <span className="hero__dot" />
            {profile.available}
          </p>
        )}

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>

          {resumeHref && (
            <a href={resumeHref} className="btn btn--ghost" download>
              <DownloadIcon />
              Resume
            </a>
          )}
        </div>

        <div className="hero__socials">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a href={`mailto:${socials.email}`} aria-label="Email" title="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
