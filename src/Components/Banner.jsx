import { useEffect, useState } from 'react'
import { profile, stats } from '../data/Portfolio'

const focus = ['e-commerce storefronts', 'SaaS dashboards', 'fintech platforms', 'multi-tenant apps']
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const Stat = ({ value, label }) => {
  const target = parseInt(value, 10)
  const suffix = value.replace(/[0-9]/g, '')
  const [n, setN] = useState(() => (reduced() ? target : 0))

  useEffect(() => {
    if (reduced()) return
    let raf
    const t0 = performance.now() + 500
    const step = (t) => {
      const p = Math.min(Math.max((t - t0) / 1400, 0), 1)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target])

  return (
    <div>
      <dt>
        {n}
        {suffix}
      </dt>
      <dd>{label}</dd>
    </div>
  )
}

export const Banner = () => {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % focus.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="aurora" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="eyebrow rise">{profile.role}</p>
      <h1 className="rise d1">
        Interfaces that feel <span className="grad">effortless.</span>
      </h1>
      <p className="focus rise d2">
        I build <span key={i} className="swap">{focus[i]}</span>
      </p>
      <p className="lede rise d3">
        Hi, I'm {profile.name}. {profile.summary}
      </p>
      <div className="cta rise d4">
        <a className="btn btn--primary" href="#projects">
          View my work
        </a>
        <a className="btn btn--ghost" href="#connect">
          Get in touch
        </a>
      </div>
      <dl className="stats rise d5">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </dl>
      <a className="scroll-cue rise d5" href="#skills" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}