import { projects } from '../data.js'
import { GithubIcon, ExternalIcon } from './Icons.jsx'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section__eyebrow">03 — Work</p>
        <h2 className="section__title">Featured Projects</h2>

        <div className="projects">
          {projects.map((p) => (
            <article
              className={p.featured ? 'card card--featured' : 'card'}
              key={p.title}
            >
              {p.featured && <span className="card__flag">Featured</span>}

              <h3 className="card__title">{p.title}</h3>
              {p.subtitle && <p className="card__subtitle">{p.subtitle}</p>}
              <p className="card__desc">{p.description}</p>

              {p.metrics && (
                <div className="card__metrics">
                  {p.metrics.map((m) => (
                    <div className="metric" key={m.label}>
                      <span className="metric__value">{m.value}</span>
                      <span className="metric__label">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="card__tech">
                {p.tech.map((t) => (
                  <li key={t} className="tag tag--sm">
                    {t}
                  </li>
                ))}
              </ul>

              {(p.live || p.code) && (
                <div className="card__links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live Demo <ExternalIcon />
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer">
                      <GithubIcon width="16" height="16" /> Code
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
