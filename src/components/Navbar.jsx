import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { HamburgerMenuOverlay } from '@/components/lightswind/HamburgerMenuOverlay'

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
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-[var(--navy)]' : 'text-white'
  const logoAccent = scrolled || !isHome ? 'text-[var(--accent)]' : 'text-white'

  const menuItems = links.map(({ to, label }) => ({
    label,
    onClick: () => navigate(to),
  }))

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-18 sm:h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-1.5 relative z-[1002]">
              <span className={`text-xl sm:text-2xl font-extrabold tracking-tight ${textColor} transition-colors`}>ÖZDEMIR</span>
              <span className={`text-xl sm:text-2xl font-light tracking-tight ${logoAccent} transition-colors`}>BAU</span>
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

            {/* Mobile Hamburger */}
            <div className="lg:hidden relative">
              <HamburgerMenuOverlay
                items={menuItems}
                buttonTop="40px"
                buttonLeft="calc(100vw - 40px)"
                buttonSize="md"
                buttonColor="var(--accent)"
                overlayBackground="var(--navy)"
                textColor="#ffffff"
                fontSize="lg"
                fontFamily="'Inter', system-ui, sans-serif"
                fontWeight="bold"
                animationDuration={0.8}
                staggerDelay={0.08}
                menuAlignment="center"
                zIndex={1000}
                ariaLabel="Hauptnavigation"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
