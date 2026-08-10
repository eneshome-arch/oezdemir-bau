import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Stats from './sections/Stats'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  useLenis()

  return (
    <div className="noise">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
