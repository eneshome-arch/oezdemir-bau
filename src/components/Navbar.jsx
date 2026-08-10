import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[#d4af37] rounded-lg flex items-center justify-center group-hover:bg-[#d4af37]/10 transition-colors duration-300">
              <span className="text-[#d4af37] font-bold text-lg">Ö</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-semibold text-sm tracking-wide leading-none">ÖZDEMIR</p>
              <p className="text-[#d4af37] text-[10px] font-medium tracking-[0.3em] uppercase">Bau GmbH</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-5 py-2.5 text-sm text-white/60 hover:text-white font-medium tracking-wide transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-5 right-5 h-px bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#kontakt"
              onClick={(e) => handleClick(e, '#kontakt')}
              className="hidden md:inline-flex px-6 py-2.5 bg-[#d4af37] text-black text-sm font-semibold rounded-full hover:bg-[#e8c84a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Projekt anfragen
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-3xl font-light text-white/80 hover:text-[#d4af37] transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={(e) => handleClick(e, '#kontakt')}
            className="mt-4 px-10 py-4 bg-[#d4af37] text-black text-lg font-semibold rounded-full hover:bg-[#e8c84a] transition-all duration-300"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </>
  )
}
