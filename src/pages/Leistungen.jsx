import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Kernsanierung',
    desc: 'Wir sanieren Bestandsgebäude von Grund auf – Statik, Elektrik, Sanitär, Dämmung und Innenausbau. Alles aus einer Hand, termingerecht und budgetsicher.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    features: ['Entkernung & Rückbau', 'Statische Ertüchtigung', 'Energetische Sanierung', 'Schlüsselfertige Übergabe'],
  },
  {
    title: 'Badsanierung',
    desc: 'Vom Altbau-Bad zum modernen Wellness-Bereich. Wir übernehmen Planung, Fliesenarbeiten, Installation und Montage – barrierefrei auf Wunsch.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    features: ['Komplettplanung', 'Barrierefreie Lösungen', 'Hochwertige Materialien', 'Termingarantie'],
  },
  {
    title: 'Hochbau',
    desc: 'Neubau von Wohn- und Gewerbeimmobilien mit modernsten Methoden. Vom Fundament bis zum Dach – präzise, effizient und nachhaltig.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    features: ['Rohbauarbeiten', 'Mauerwerk & Beton', 'Dachkonstruktion', 'Schlüsselfertigbau'],
  },
  {
    title: 'Tiefbau',
    desc: 'Erdarbeiten, Kanalbau, Leitungsverlegung und Straßenbau. Wir schaffen die Grundlage für jedes Bauprojekt.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80',
    features: ['Erdarbeiten', 'Kanalbau', 'Leitungsverlegung', 'Straßenbau'],
  },
  {
    title: 'Gleisbau',
    desc: 'Professioneller Gleisbau und Gleissanierung für Nah- und Fernverkehr. Höchste Sicherheitsstandards und termingerechte Ausführung.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
    features: ['Gleisneubau', 'Gleissanierung', 'Weichenbau', 'Oberbauarbeiten'],
  },
  {
    title: 'Innenausbau',
    desc: 'Trockenbau, Bodenbeläge, Malerarbeiten, Akustik – wir gestalten Innenräume, die funktionieren und begeistern.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    features: ['Trockenbau', 'Bodenbeläge', 'Malerarbeiten', 'Akustiklösungen'],
  },
]

export default function Leistungen() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-heading > *', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      })

      gsap.utils.toArray('.service-section').forEach(section => {
        gsap.from(section.querySelector('.service-img'), {
          scale: 1.15,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' },
        })
        gsap.from(section.querySelector('.service-content'), {
          opacity: 0, x: 40, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%' },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Header */}
      <section className="relative bg-[var(--navy)] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <AnimatedFireGlow />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 page-heading">
          <div className="accent-line mb-5" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl">
            Sechs Fachbereiche, ein Versprechen: Qualität ohne Kompromisse.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => {
        const reversed = i % 2 === 1
        return (
          <section
            key={service.title}
            className={`service-section ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--stone)]'}`}
          >
            <div className={`grid lg:grid-cols-2 min-h-[480px] ${reversed ? '' : ''}`}>
              {/* Image */}
              <div className={`img-reveal relative h-72 lg:h-auto overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`service-content flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-0 ${reversed ? 'lg:order-1' : ''}`}>
                <div className="max-w-lg">
                  <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-widest mb-3 block">
                    0{i + 1}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-2.5">
                        <CheckCircle2 size={16} className="text-[var(--accent)] shrink-0" />
                        <span className="text-sm font-medium text-[var(--navy)]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:gap-3 transition-all"
                  >
                    Projekt anfragen
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section className="bg-[var(--accent)] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir melden uns innerhalb von 24 Stunden.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[var(--navy)] px-8 py-4 rounded-lg font-bold text-base hover:bg-white/90 transition-colors active:scale-[0.96]"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </>
  )
}
