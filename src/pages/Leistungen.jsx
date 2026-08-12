import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'
import ParticlesBackground from '@/components/lightswind/ParticlesBackground'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Entkernung & Rückbau',
    desc: 'Professionelle Entkernung, kontrollierter Rückbau und fachgerechte Entsorgung aller Baumaterialien. Wir schaffen die saubere Grundlage für Ihr Sanierungsprojekt.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    features: ['Entkernung von Gebäuden', 'Kontrollierter Rückbau', 'Fachgerechte Entsorgung', 'Schadstoffsanierung'],
  },
  {
    title: 'Trockenbau & Innenausbau',
    desc: 'Vom Ständerwerk bis zur fertigen Wand – wir realisieren Trockenbau, Grundrissänderungen, Wanddurchbrüche und kompletten Innenausbau nach Ihren Wünschen.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    features: ['Trockenbau & Ständerwerk', 'Grundrissänderungen', 'Wanddurchbrüche', 'Akustik- & Brandschutz'],
  },
  {
    title: 'Putz-, Spachtel- & Malerarbeiten',
    desc: 'Perfekte Oberflächen für Innen und Außen. Wir übernehmen sämtliche Putz-, Spachtel- und Malerarbeiten für ein makelloses Ergebnis.',
    image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',
    features: ['Innen- & Außenputz', 'Spachtelarbeiten', 'Malerarbeiten', 'Fassadengestaltung'],
  },
  {
    title: 'Fliesen- & Bodenbeläge',
    desc: 'Fliesen, Parkett, Vinyl oder Estrich – wir verlegen alle Bodenbeläge fachgerecht und sorgen für eine saubere, langlebige Ausführung.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    features: ['Fliesenarbeiten', 'Bodenbeläge aller Art', 'Estricharbeiten', 'Abdichtungsarbeiten'],
  },
  {
    title: 'Bad- & Sanitärsanierung',
    desc: 'Komplettsanierung von Bädern und Sanitäranlagen – von der Planung über Installation bis zur barrierefreien Ausführung. Alles aus einer Hand.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    features: ['Badsanierung', 'Sanitärinstallation', 'Barrierefreie Lösungen', 'Heizungsarbeiten'],
  },
  {
    title: 'Elektro, Heizung & Sanitär',
    desc: 'Fachgerechte Elektroinstallationen sowie Heizungs- und Sanitärarbeiten. Wir sorgen für die komplette Haustechnik in Ihrem Gebäude.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    features: ['Elektroinstallationen', 'Heizungsanlagen', 'Sanitärtechnik', 'Smart-Home-Vorbereitung'],
  },
  {
    title: 'Dämmung & energetische Sanierung',
    desc: 'Senken Sie Ihre Energiekosten nachhaltig. Wir dämmen Fassade, Dach und Keller und tauschen Fenster und Türen für maximale Energieeffizienz.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    features: ['Fassadendämmung', 'Dachdämmung', 'Fenster- & Türentausch', 'Energieberatung'],
  },
  {
    title: 'Fassaden- & Dachsanierung',
    desc: 'Ob Putzfassade, Klinker oder Dacheindeckung – wir sanieren die Gebäudehülle und schützen Ihre Immobilie vor Witterung und Substanzverlust.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    features: ['Fassadensanierung', 'Dachsanierung', 'Abdichtung', 'Wärmeschutz'],
  },
  {
    title: 'Kernsanierung & Koordination',
    desc: 'Komplettsanierung aus einer Hand – wir koordinieren sämtliche Gewerke, managen Ihr Projekt von der Entkernung bis zur bezugsfertigen Übergabe.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    features: ['Gewerke-Koordination', 'Projektmanagement', 'Terminplanung', 'Bezugsfertige Übergabe'],
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
      <section className="relative bg-[var(--navy)] pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <AnimatedFireGlow />
        <ParticlesBackground className="absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto max-w-[90rem] px-[var(--space-container)] page-heading text-center">
          <h1 className="font-extrabold text-white mb-3 sm:mb-4">
            Unsere Leistungen
          </h1>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            Von der Entkernung bis zur bezugsfertigen Übergabe – alle Gewerke aus einer Hand.
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
            <div className={`grid lg:grid-cols-2 min-h-[400px] lg:min-h-[480px] ${reversed ? '' : ''}`}>
              {/* Image */}
              <div className={`img-reveal relative h-52 sm:h-72 lg:h-auto overflow-hidden ${reversed ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`service-content flex items-center px-[var(--space-container)] sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-0 ${reversed ? 'lg:order-1' : ''}`}>
                <div className="max-w-lg">
                  <h2 className="font-extrabold text-[var(--navy)] mb-3 sm:mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                    {service.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
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
      <section className="bg-[var(--accent)] py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-[var(--space-container)] text-center">
          <h2 className="font-extrabold text-white mb-3 sm:mb-4">
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir melden uns innerhalb von 24 Stunden.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-[var(--navy)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-white/90 transition-colors active:scale-[0.96]"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </>
  )
}
