export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-[#d4af37] rounded-lg flex items-center justify-center">
                <span className="text-[#d4af37] font-bold text-lg">Ö</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wide leading-none">ÖZDEMIR</p>
                <p className="text-[#d4af37] text-[10px] font-medium tracking-[0.3em] uppercase">Bau GmbH</p>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-sm">
              Ihr Partner für anspruchsvolle Bauprojekte in Hannover und der Region.
              Qualität, Präzision und Leidenschaft — seit über 10 Jahren.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Leistungen</h4>
            <ul className="space-y-2.5">
              {['Kernsanierung', 'Badsanierung', 'Gleisbau', 'Hochbau', 'Innenausbau', 'Tiefbau'].map(s => (
                <li key={s}>
                  <a href="#leistungen" className="text-white/30 text-sm hover:text-[#d4af37] transition-colors duration-300">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Rechtliches</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-white/30 text-sm hover:text-[#d4af37] transition-colors duration-300">Impressum</a></li>
              <li><a href="#" className="text-white/30 text-sm hover:text-[#d4af37] transition-colors duration-300">Datenschutz</a></li>
              <li><a href="#" className="text-white/30 text-sm hover:text-[#d4af37] transition-colors duration-300">AGB</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Özdemir Bau GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            {['Instagram', 'TikTok', 'LinkedIn'].map(s => (
              <a key={s} href="#" className="text-white/20 text-xs hover:text-[#d4af37] transition-colors duration-300">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
