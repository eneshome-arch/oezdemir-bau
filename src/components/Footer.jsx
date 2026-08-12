import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-[90rem] px-[var(--space-container)] py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight">ÖZDEMIR</span>
              <span className="text-lg sm:text-xl font-light tracking-tight text-[var(--accent)]">BAU</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-5">
              Ihr zuverlässiger Partner für Sanierung, Innenausbau und Kernsanierung in Hannover und Umgebung.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/oezdemir.bau"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group/social w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#d62976] active:scale-90"
              >
                <svg className="w-4 h-4 group-hover/social:animate-[slideInTop_0.3s_both]" viewBox="0 0 16 16" fill="white">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@oezdemir.bau"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group/social w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-black active:scale-90"
              >
                <svg className="w-4 h-4 group-hover/social:animate-[slideInTop_0.3s_both]" viewBox="0 0 16 16" fill="white">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/oezdemir-bau"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group/social w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#0072b1] active:scale-90"
              >
                <svg className="w-4 h-4 group-hover/social:animate-[slideInTop_0.3s_both]" viewBox="0 0 16 16" fill="white">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/4951112345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group/social w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#128c7e] active:scale-90"
              >
                <svg className="w-4 h-4 group-hover/social:animate-[slideInTop_0.3s_both]" viewBox="0 0 16 16" fill="white">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
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
              <span className="text-sm text-white/70">Entkernung & Rückbau</span>
              <span className="text-sm text-white/70">Trockenbau & Innenausbau</span>
              <span className="text-sm text-white/70">Putz- & Malerarbeiten</span>
              <span className="text-sm text-white/70">Fliesen & Bodenbeläge</span>
              <span className="text-sm text-white/70">Bad- & Sanitärsanierung</span>
              <span className="text-sm text-white/70">Kernsanierung</span>
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
        <div className="mt-10 sm:mt-14 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Özdemir Bau GmbH. Alle Rechte vorbehalten.
          </p>
          <span className="text-xs text-white/30">Designed by <a href="https://vyomedia.de" target="_blank" rel="noopener noreferrer" className="underline text-white/40 hover:text-white/70 transition-colors">VYOMedia</a></span>
          <div className="flex gap-6">
            <Link to="/impressum" className="text-xs text-white/40 hover:text-white/70 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-white/40 hover:text-white/70 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
