import { skills, education } from '../data/Portfolio'
import { useReveal } from '../hooks/UseReveal'
import { spotlight } from '../hooks/UseSpotlight'

const all = skills.flatMap((g) => g.items)

export const Skills = () => {
  const ref = useReveal()
  return (
    <section className="section" id="skills">
      <div className="marquee" aria-hidden="true">
        <ul>
          {[...all, ...all].map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
      <div className="wrap reveal" ref={ref}>
        <h2>Skills.</h2>
        <p className="sub">The tools I ship with every day.</p>
        <div className="grid grid--4">
          {skills.map((g, i) => (
            <article className="card stagger" style={{ '--i': i }} onMouseMove={spotlight} key={g.title}>
              <h3>{g.title}</h3>
              <ul className="chips">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <article className="card card--wide stagger" style={{ '--i': 4 }} onMouseMove={spotlight}>
          <h3>{education.degree}</h3>
          <p className="muted">
            {education.school} · {education.meta}
          </p>
          <ul className="list">
            {education.certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}