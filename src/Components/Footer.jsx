import { profile } from '../data/Portfolio'

export const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()} {profile.name}. {profile.location}.
    </p>
    <a href="#home">Back to top ↑</a>
  </footer>
)