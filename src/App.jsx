import { NavBar } from './Components/NavBar'
import { Banner } from './Components/Banner'
import { Skills } from './Components/Skills'
import { Projects } from './Components/Projects'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}