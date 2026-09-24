import { useState } from 'react'
import { profile } from '../data/Portfolio'
import { useReveal } from '../hooks/UseReveal'

const empty = { name: '', email: '', message: '' }

export const Contact = () => {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const ref = useReveal()

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm(empty)
  }

  return (
    <section className="section" id="connect">
      <div className="wrap wrap--narrow reveal" ref={ref}>
        <h2>Let's talk.</h2>
        <p className="sub">Have a project in mind? Send a note.</p>
        <form className="form" onSubmit={onSubmit}>
          <input required placeholder="Name" autoComplete="name" value={form.name} onChange={set('name')} />
          <input required type="email" placeholder="Email" autoComplete="email" value={form.email} onChange={set('email')} />
          <textarea required rows="5" placeholder="Message" value={form.message} onChange={set('message')} />
          <button className="btn btn--primary" type="submit">
            Send message
          </button>
          {sent && <p className="muted" role="status">Opening your email app…</p>}
        </form>
        <p className="direct">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>·</span>
          <a href={`tel:+91${profile.phone}`}>{profile.phone}</a>
          <span>·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  )
}