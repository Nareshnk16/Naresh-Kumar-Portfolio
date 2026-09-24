import { spotlight } from '../hooks/UseSpotlight'

export const ProjectCard = ({ title, category, tag, points, index = 0 }) => (
  <article className="card project stagger" style={{ '--i': index }} onMouseMove={spotlight}>
    <span className="badge">{category}</span>
    <h3>{title}</h3>
    <p className="muted">{tag}</p>
    <ul className="list">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </article>
)