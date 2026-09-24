import { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { categories, projects, profile } from '../data/Portfolio'
import { useReveal } from '../hooks/UseReveal'

export const Projects = () => {
  const [active, setActive] = useState('All')
  const ref = useReveal()
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="section" id="projects">
      <div className="wrap reveal" ref={ref}>
        <h2>Work.</h2>
        <p className="sub">
          Front-end Developer at {profile.company} since {profile.since}.
        </p>
        <div className="tabs" role="tablist" aria-label="Project categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={active === c ? 'tab is-active' : 'tab'}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid--3">
          {shown.map((p, i) => (
            <ProjectCard key={active + p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}