import { skills } from '../data.js'

// "Advanced" -> "level--advanced" (CSS me colour is se aata hai)
const levelClass = (level) =>
  `level level--${level.toLowerCase().replace(/[^a-z]/g, '')}`

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section__eyebrow">02 — Toolkit</p>
        <h2 className="section__title">Skills &amp; Technologies</h2>

        <div className="skills">
          {skills.map((group) => (
            <div className="skills__group" key={group.category}>
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li className="skill" key={item.name}>
                    <span className="skill__name">{item.name}</span>
                    <span className={levelClass(item.level)}>{item.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
