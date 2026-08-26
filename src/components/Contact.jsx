import { socials } from '../data.js'
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <p className="section__eyebrow">04 — Say hello</p>
        <h2 className="section__title">Let's Connect</h2>
        <p className="contact__text">
          I'm always open to discussing new projects, internships, learning
          opportunities, or collaboration. Feel free to reach out!
        </p>

        <a href={`mailto:${socials.email}`} className="btn btn--primary btn--lg">
          <MailIcon />
          {socials.email}
        </a>

        <div className="contact__links">
          <a href={socials.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
