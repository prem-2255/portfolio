import { about, education } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section__eyebrow">01 — About</p>
        <h2 className="section__title">About Me</h2>

        <div className="about">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <ul className="about__focus">
              {about.focus.map((f) => (
                <li key={f} className="tag">
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="edu">
            <h3 className="edu__heading">Education</h3>

            {education.map((e) => (
              <div className="edu__item" key={e.degree}>
                <span
                  className={e.ongoing ? 'edu__dot edu__dot--live' : 'edu__dot'}
                />
                <div>
                  <h4 className="edu__degree">{e.degree}</h4>
                  <p className="edu__detail">{e.detail}</p>
                  <p className="edu__meta">
                    <span>{e.period}</span>
                    <span className="edu__sep">·</span>
                    <span>{e.status}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
