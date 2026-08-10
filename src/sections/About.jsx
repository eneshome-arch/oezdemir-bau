import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../hooks/useReveal'
import { Shield, Target, Users, Award } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const VALUES = [
  { icon: Shield, title: 'Qualität', desc: 'Kompromisslose Qualität bei jedem Projekt — vom Material bis zur Ausführung.' },
  { icon: Target, title: 'Präzision', desc: 'Millimetergenau und termingerecht. Jedes Detail zählt bei uns.' },
  { icon: Users, title: 'Partnerschaft', desc: 'Persönliche Betreuung und transparente Kommunikation von Anfang bis Ende.' },
  { icon: Award, title: 'Erfahrung', desc: 'Über 10 Jahre Erfahrung und 500+ erfolgreich abgeschlossene Projekte.' },
]

export default function About() {
  const titleRef = useReveal()
  const quoteRef = useRef(null)
  const valuesRef = useRef(null)

  useEffect(() => {
    // Quote text reveal
    if (quoteRef.current) {
      gsap.fromTo(quoteRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }

    // Values stagger
    if (valuesRef.current) {
      const cards = valuesRef.current.children
      gsap.fromTo(cards,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }
  }, [])

  return (
    <section id="ueber-uns" className="relative py-32 md:py-44">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#d4af37]/3 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="reveal mb-20">
          <span className="text-[#d4af37] text-xs font-semibold tracking-[0.3em] uppercase">Über uns</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight max-w-3xl">
            Bauen mit Vision und Leidenschaft
          </h2>
        </div>

        {/* Two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left — Story */}
          <div ref={quoteRef}>
            <div className="relative pl-6 border-l-2 border-[#d4af37]/30">
              <p className="text-2xl md:text-3xl font-light text-white/80 leading-relaxed">
                „Jedes Gebäude erzählt eine Geschichte.
                <span className="text-[#d4af37]"> Unsere Aufgabe ist es, diese Geschichte zu einem Meisterwerk zu machen.</span>"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962c] flex items-center justify-center text-black font-bold text-xl">
                  CÖ
                </div>
                <div>
                  <p className="text-white font-semibold">Cem Özdemir</p>
                  <p className="text-white/40 text-sm">Geschäftsführer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="space-y-6 text-white/40 leading-relaxed">
            <p>
              Die Özdemir Bau GmbH steht seit über einem Jahrzehnt für höchste Qualität im Bauwesen.
              Was als kleine Firma in Hannover begann, ist heute ein leistungsstarkes Unternehmen mit
              über 50 Mitarbeitern und einem breiten Leistungsspektrum.
            </p>
            <p>
              Unter der Führung von Geschäftsführer Cem Özdemir verbinden wir traditionelles
              Handwerk mit modernster Technik. Ob Kernsanierung, Badsanierung oder Gleisbau —
              wir liefern Ergebnisse, die überzeugen. Termingerecht, budgettreu und in
              kompromissloser Qualität.
            </p>
            <p>
              Unser Erfolgsgeheimnis? Ein eingespieltes Team aus erfahrenen Fachkräften,
              die für jedes Projekt brennen. Denn bei Özdemir Bau bauen wir nicht nur Gebäude —
              wir bauen Vertrauen.
            </p>
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#d4af37]/20 transition-all duration-500 group">
              <Icon size={28} className="text-[#d4af37] mb-4" strokeWidth={1.5} />
              <h4 className="text-white font-semibold text-lg mb-2">{title}</h4>
              <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
