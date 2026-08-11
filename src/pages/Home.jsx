import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2, Quote, Home as HomeIcon, Building, Wrench, PaintBucket, Bath, Ruler } from 'lucide-react'
import ImageSlider3D from '@/components/lightswind/3d-image-slider'
import ThreeDArcCarousel from '@/components/ThreeDArcCarousel'
import TypewriterInput from '@/components/TypewriterInput'
import { ThreeDScrollTriggerContainer, ThreeDScrollTriggerRow } from '@/components/lightswind/ThreeDScrollTrigger'
import SatinFlow from '@/components/lightswind/satin-flow'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'

gsap.registerPlugin(ScrollTrigger)

const carouselItems = [
  { image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', title: 'Kernsanierung', category: 'Sanierung', description: 'Komplettsanierung von Bestandsgebäuden – Statik, Elektrik, Sanitär und Innenausbau aus einer Hand.' },
  { image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', title: 'Badsanierung', category: 'Sanierung', description: 'Vom Altbau-Bad zum modernen Wellness-Bereich. Planung, Fliesen, Installation – barrierefrei auf Wunsch.' },
  { image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', title: 'Hochbau', category: 'Neubau', description: 'Neubau von Wohn- und Gewerbeimmobilien. Vom Fundament bis zum Dach.' },
  { image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80', title: 'Tiefbau', category: 'Infrastruktur', description: 'Erdarbeiten, Kanalbau, Leitungsverlegung und Straßenbau.' },
  { image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80', title: 'Gleisbau', category: 'Infrastruktur', description: 'Professioneller Gleisbau und Gleissanierung für Nah- und Fernverkehr.' },
  { image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', title: 'Innenausbau', category: 'Ausbau', description: 'Trockenbau, Bodenbeläge, Malerarbeiten und Akustik – alles aus einer Hand.' },
]

const sliderImages = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=70',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=70',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=70',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=70',
  'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=70',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=70',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=70',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=70',
  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=70',
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=70',
]

const typewriterPhrases = [
  '500+ Projekte erfolgreich abgeschlossen.',
  '15+ Jahre Erfahrung im Hoch- und Tiefbau.',
  '50+ qualifizierte Fachkräfte im Team.',
  '100% Kundenzufriedenheit – ohne Kompromisse.',
  'Ihr zuverlässiger Partner in der Region Hannover.',
]


const testimonials = [
  {
    text: 'Özdemir Bau hat unsere Altbauvilla komplett kernsaniert. Die Qualität der Arbeit und die Termintreue waren herausragend. Absolut empfehlenswert!',
    name: 'Familie Berger',
    role: 'Kernsanierung, Hannover-Linden',
  },
  {
    text: 'Professionell, sauber und immer erreichbar. Unser neues Bürogebäude wurde pünktlich und im Budget fertiggestellt. Vielen Dank an das gesamte Team!',
    name: 'Thomas Kraft',
    role: 'Geschäftsführer, Kraft Immobilien GmbH',
  },
  {
    text: 'Die Gleisbauarbeiten wurden trotz enger Zeitfenster tadellos ausgeführt. Özdemir Bau ist ein verlässlicher Partner für Infrastrukturprojekte.',
    name: 'Stadtwerke Hannover',
    role: 'Gleissanierung, Innenstadtstrecke',
  },
]

const regions = [
  'Hannover', 'Langenhagen', 'Laatzen', 'Garbsen', 'Barsinghausen',
  'Burgdorf', 'Isernhagen', 'Seelze', 'Wunstorf', 'Neustadt a. Rbge.',
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-heading', { opacity: 0, y: 60, duration: 1, delay: 0.3 })
        .from('.hero-sub', { opacity: 0, y: 30, duration: 0.7 }, '-=0.5')
        .from('.hero-cta', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
        .from('.hero-slider', { opacity: 0, scale: 0.9, duration: 1 }, '-=0.6')



    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy)]">
        <AnimatedFireGlow />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full py-28 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.02] mb-6">
                Wir bauen<br />
                <span className="text-[var(--accent)]">Ihre Zukunft.</span>
              </h1>

              <p className="hero-sub text-base sm:text-lg text-white/50 max-w-lg mb-10 leading-relaxed">
                Von der Kernsanierung bis zum Gleisbau – Özdemir Bau steht für Qualität, Zuverlässigkeit und handwerkliche Exzellenz seit über 15 Jahren.
              </p>

              <div className="hero-cta flex flex-wrap gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-colors active:scale-[0.96]"
                >
                  Projekt anfragen
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] text-white px-7 py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-colors border border-white/10 active:scale-[0.96]"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </div>

            <div className="hero-slider relative h-[400px] sm:h-[500px] lg:h-[550px]">
              <ImageSlider3D
                images={sliderImages}
                duration={28}
                cardWidth="14em"
                cardAspectRatio="3/4"
                perspective="30em"
                imageClassName="shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TYPEWRITER BANNER ═══ */}
      <section className="bg-[var(--navy)] border-t border-white/5">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-5 sm:py-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug min-h-[2.5em] flex items-center justify-center">
            <TypewriterInput
              phrases={typewriterPhrases}
              typingSpeed={60}
              deletingSpeed={30}
              pauseDelay={2500}
              cursorColor="var(--accent)"
            />
          </h2>
        </div>
      </section>

      {/* ═══ SERVICES — 3D Arc Carousel ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--stone)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-10">
            <div className="accent-line mb-5" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg">
              Sechs Kernbereiche, ein Anspruch: Ergebnisse, die überzeugen.
            </p>
          </div>

          <ThreeDArcCarousel items={carouselItems} autoPlay autoPlayDelay={4000} />

          <div className="mt-14 text-center">
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:gap-3 transition-all"
            >
              Alle Leistungen entdecken
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ STANDORT — Globe ═══ */}
      <section className="relative py-20 sm:py-28 bg-[var(--navy)] overflow-hidden">
        <AnimatedFireGlow />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-line mb-5" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
                Tätig in Hannover<br />
                <span className="text-[var(--accent)]">und Umgebung</span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Unser Einzugsgebiet umfasst die gesamte Region Hannover. Ob Innenstadt oder Umland – wir sind für Sie vor Ort.
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map(r => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 text-white/70 text-sm px-3.5 py-1.5 rounded-lg"
                  >
                    <CheckCircle2 size={13} className="text-[var(--accent)]" />
                    {r}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:-mt-16">
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
                {/* Orange glow ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    boxShadow: '0 0 40px rgba(232,113,10,0.4), 0 0 80px rgba(232,113,10,0.15), inset 0 0 30px rgba(232,113,10,0.1)',
                    border: '2px solid rgba(232,113,10,0.5)',
                  }}
                />
                {/* Circular Maps container */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <iframe
                    title="Özdemir Bau Standort"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.5!2d9.5955!3d52.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b074c8e5b7e8a7%3A0x0!2sBremer+Stra%C3%9Fe+31%2C+30827+Garbsen!5e0!3m2!1sde!2sde!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'saturate(0.3) brightness(0.7) contrast(1.2)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRIVAT ODER GEWERBLICH ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--stone)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="accent-line mb-5 mx-auto" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4">
              Privat oder gewerblich
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg">
              Ob Eigenheim oder Großprojekt – wir sind für beide Seiten der richtige Partner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Privatkunden */}
            <div className="group relative rounded-xl overflow-hidden bg-white text-[var(--navy)] shadow-[0px_10px_20px_rgba(80,80,80,0.15)] hover:shadow-[0px_15px_30px_rgba(80,80,80,0.25)] transition-shadow duration-300" style={{ minHeight: '420px' }}>
              {/* Cover — slides up on hover */}
              <div
                className="absolute inset-0 z-[2] transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
                style={{ background: 'linear-gradient(to top, var(--accent), #f5a623)' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-8">
                  <HomeIcon size={56} strokeWidth={1.5} className="mb-4" />
                  <h3 className="text-3xl font-extrabold">Privatkunden</h3>
                </div>
              </div>

              {/* Content underneath */}
              <div className="relative z-[1] p-8 sm:p-10 flex flex-col justify-center h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center">
                    <HomeIcon size={28} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--navy)]">Privatkunden</h3>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                  Ihr Zuhause verdient das Beste. Von der Badsanierung über den Dachausbau bis zur kompletten Kernsanierung – wir verwandeln Ihre Wohnträume in Realität.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: Bath, text: 'Badsanierung & Modernisierung' },
                    { icon: Wrench, text: 'Kernsanierung & Umbau' },
                    { icon: PaintBucket, text: 'Innenausbau & Renovierung' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-sm text-[var(--navy)]">
                      <Icon size={16} className="text-[var(--accent)] shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gewerbekunden */}
            <div className="group relative rounded-xl overflow-hidden bg-[var(--navy)] text-white shadow-[0px_10px_20px_rgba(80,80,80,0.15)] hover:shadow-[0px_15px_30px_rgba(80,80,80,0.25)] transition-shadow duration-300" style={{ minHeight: '420px' }}>
              {/* Cover — slides up on hover */}
              <div
                className="absolute inset-0 z-[2] transition-transform duration-300 ease-in-out group-hover:-translate-y-full"
                style={{ background: 'linear-gradient(to top, #0f1923, #1e3a5f)' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-8">
                  <Building size={56} strokeWidth={1.5} className="mb-4" />
                  <h3 className="text-3xl font-extrabold">Gewerbekunden</h3>
                </div>
              </div>

              {/* Content underneath */}
              <div className="relative z-[1] p-8 sm:p-10 flex flex-col justify-center h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[var(--accent)]/15 rounded-xl flex items-center justify-center">
                    <Building size={28} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Gewerbekunden</h3>
                </div>
                <p className="text-white/50 leading-relaxed mb-6">
                  Für Unternehmen, Kommunen und Bauträger realisieren wir Projekte jeder Größenordnung – termingerecht, budgetsicher und nach höchsten Standards.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: Building, text: 'Gewerbe- & Industriebau' },
                    { icon: Ruler, text: 'Tief- & Gleisbau' },
                    { icon: Wrench, text: 'Öffentliche Infrastrukturprojekte' },
                  ].map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-sm text-white/70">
                      <Icon size={16} className="text-[var(--accent)] shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KUNDENSTIMMEN ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <div className="accent-line mb-5" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--navy)] mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg">
              Vertrauen entsteht durch Ergebnisse – hier sprechen unsere Auftraggeber.
            </p>
          </div>

          <ThreeDScrollTriggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" perspective={1200}>
            {testimonials.map(({ text, name, role }, i) => (
              <ThreeDScrollTriggerRow key={name} index={i}>
                <div className="relative bg-[var(--stone)] rounded-2xl p-8 sm:p-10 h-full">
                  <Quote size={32} className="text-[var(--accent)]/20 mb-4" />
                  <p className="text-[var(--navy)] text-base leading-relaxed mb-6">
                    „{text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--navy)] flex items-center justify-center text-white text-xs font-bold">
                      {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--navy)]">{name}</p>
                      <p className="text-xs text-[var(--text-muted)]">{role}</p>
                    </div>
                  </div>
                </div>
              </ThreeDScrollTriggerRow>
            ))}
          </ThreeDScrollTriggerContainer>
        </div>
      </section>

      {/* ═══ CTA SPLIT ═══ */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          <div className="img-reveal relative h-64 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=960&q=80"
              alt="Bauprojekt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[var(--navy)] flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-0">
            <div className="max-w-lg">
              <div className="accent-line mb-6" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
                Ihr nächstes Projekt<br />beginnt hier.
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Ob Neubau, Sanierung oder Spezialprojekt – wir bringen die Erfahrung, das Team und die Leidenschaft mit, um Ihre Vision Realität werden zu lassen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-7 py-3.5 rounded-lg font-semibold transition-colors active:scale-[0.96]"
                >
                  Kostenlose Beratung
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/projekte"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white px-4 py-3.5 font-medium transition-colors"
                >
                  Projekte ansehen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
