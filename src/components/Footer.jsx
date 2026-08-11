import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-xl font-extrabold tracking-tight">ÖZDEMIR</span>
              <span className="text-xl font-light tracking-tight text-[var(--accent)]">BAU</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Ihr zuverlässiger Partner für Hoch- und Tiefbau, Sanierung und Gleisbau in Hannover und Umgebung.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/leistungen" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors">Leistungen</Link>
              <Link to="/projekte" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors">Projekte</Link>
              <Link to="/ueber-uns" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors">Über uns</Link>
              <Link to="/karriere" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors">Karriere</Link>
              <Link to="/kontakt" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors">Kontakt</Link>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Leistungen</h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm text-white/70">Kernsanierung</span>
              <span className="text-sm text-white/70">Badsanierung</span>
              <span className="text-sm text-white/70">Hochbau</span>
              <span className="text-sm text-white/70">Tiefbau</span>
              <span className="text-sm text-white/70">Gleisbau</span>
              <span className="text-sm text-white/70">Innenausbau</span>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+4951112345678" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[var(--accent)] transition-colors">
                <Phone size={14} className="shrink-0" />
                0511 / 123 456 78
              </a>
              <a href="mailto:info@oezdemir-bau.de" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-[var(--accent)] transition-colors">
                <Mail size={14} className="shrink-0" />
                info@oezdemir-bau.de
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>Musterstraße 1<br />30159 Hannover</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Özdemir Bau GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-white/40 hover:text-white/70 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-white/40 hover:text-white/70 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
