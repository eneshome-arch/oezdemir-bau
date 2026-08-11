import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import Projekte from './pages/Projekte'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'
import Karriere from './pages/Karriere'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  useLenis()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/projekte" element={<Projekte />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/karriere" element={<Karriere />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
