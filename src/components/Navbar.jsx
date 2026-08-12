import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Startseite' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/projekte', label: 'Projekte' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/karriere', label: 'Karriere' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-[var(--navy)]' : 'text-white'
  const logoAccent = scrolled || !isHome ? 'text-[var(--accent)]' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${mobileOpen ? 'bg-transparent shadow-none' : navBg}`}>
        <div className="mx-auto max-w-[90rem] px-[var(--space-container)]">
          <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-1.5 relative z-[1002]">
              <span className={`text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight transition-colors ${mobileOpen ? 'text-white' : textColor}`}>ÖZDEMIR</span>
              <span className={`text-lg sm:text-xl lg:text-2xl font-light tracking-tight transition-colors ${mobileOpen ? 'text-white' : logoAccent}`}>BAU</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === to
                      ? 'text-[var(--accent)] bg-[var(--accent)]/8'
                      : `${textColor} hover:text-[var(--accent)]`
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href="tel:+4951112345678"
                className="ml-4 inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors active:scale-[0.96]"
              >
                <Phone size={15} />
                Anrufen
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-[1002] w-10 h-10 flex items-center justify-center rounded-lg transition-colors"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className={textColor} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-[1001] bg-[var(--accent)] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map(({ to, label }, i) => (
            <li
              key={to}
              className={`transition-all duration-500 ${
                mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 0.08}s` : '0s' }}
            >
              <Link
                to={to}
                className={`text-3xl sm:text-4xl font-bold transition-colors ${
                  location.pathname === to ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+4951112345678"
          className={`mt-10 inline-flex items-center gap-2 bg-white text-[var(--accent)] px-6 py-3 rounded-xl font-bold transition-all duration-500 active:scale-[0.96] ${
            mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: mobileOpen ? `${links.length * 0.08}s` : '0s' }}
        >
          <Phone size={16} />
          Jetzt anrufen
        </a>
      </div>
    </>
  )
}
