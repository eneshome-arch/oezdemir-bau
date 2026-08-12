import { useEffect, useRef, useState } from 'react'
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
import ParticlesBackground from '@/components/lightswind/ParticlesBackground'
import { InfiniteDrift } from '@/components/lightswind/infinite-drift'

gsap.registerPlugin(ScrollTrigger)

const carouselItems = [
  { image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', title: 'Entkernung & Rückbau', category: 'Sanierung', description: 'Professionelle Entkernung, Rückbau und fachgerechte Entsorgung aller Baumaterialien.' },
  { image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', title: 'Trockenbau & Innenausbau', category: 'Ausbau', description: 'Ständerwerk, Grundrissänderungen, Wanddurchbrüche und kompletter Innenausbau.' },
  { image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80', title: 'Putz- & Malerarbeiten', category: 'Ausbau', description: 'Perfekte Oberflächen – Innen- und Außenputz, Spachtel- und Malerarbeiten.' },
  { image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', title: 'Fliesen & Bodenbeläge', category: 'Ausbau', description: 'Fliesen, Parkett, Vinyl, Estrich – alle Bodenbeläge fachgerecht verlegt.' },
  { image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80', title: 'Bad- & Sanitärsanierung', category: 'Sanierung', description: 'Komplettsanierung von Bädern und Sanitäranlagen – barrierefrei auf Wunsch.' },
  { image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80', title: 'Elektro & Haustechnik', category: 'Technik', description: 'Elektroinstallationen, Heizungs- und Sanitärarbeiten aus einer Hand.' },
  { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', title: 'Dämmung & Energiesanierung', category: 'Sanierung', description: 'Fassade, Dach, Fenster – energetische Sanierung für maximale Effizienz.' },
  { image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', title: 'Fassaden- & Dachsanierung', category: 'Sanierung', description: 'Schutz der Gebäudehülle vor Witterung und Substanzverlust.' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', title: 'Kernsanierung', category: 'Sanierung', description: 'Koordination sämtlicher Gewerke bis zur bezugsfertigen Übergabe.' },
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
  '15+ Jahre Erfahrung in Sanierung & Ausbau.',
  '50+ qualifizierte Fachkräfte im Team.',
  'Von der Entkernung bis zur bezugsfertigen Übergabe.',
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
  const [activeCard, setActiveCard] = useState(null)

  const handleCardTap = (card) => {
    setActiveCard(prev => prev === card ? null : card)
  }

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

        <div className="relative z-10 mx-auto max-w-[90rem] px-[var(--space-container)] w-full py-24 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
            <div>
              <h1 className="hero-heading font-extrabold text-white leading-[1.02] mb-5 sm:mb-6">
                Wir bauen<br />
                <span className="text-[var(--accent)]">Ihre Zukunft.</span>
              </h1>

              <p className="hero-sub text-sm sm:text-base lg:text-lg text-white/50 max-w-lg mb-8 sm:mb-10 leading-relaxed">
                Von der Entkernung bis zur bezugsfertigen Übergabe – Özdemir Bau steht für Qualität, Zuverlässigkeit und handwerkliche Exzellenz seit über 15 Jahren.
              </p>

              <div className="hero-cta flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-colors active:scale-[0.96]"
                >
                  Projekt anfragen
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-colors border border-white/10 active:scale-[0.96]"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </div>

            <div className="hero-slider relative h-[300px] sm:h-[420px] lg:h-[550px]">
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
        <div className="mx-auto max-w-5xl px-[var(--space-container)] py-4 sm:py-6 lg:py-8 text-center">
          <p className="font-medium text-white/80 whitespace-nowrap flex items-center justify-center text-[0.65rem] sm:text-xs lg:text-sm" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Source Code Pro', monospace" }}>
            <TypewriterInput
              phrases={typewriterPhrases}
              typingSpeed={60}
              deletingSpeed={30}
              pauseDelay={2500}
              cursorColor="var(--accent)"
            />
          </p>
        </div>
      </section>

      {/* ═══ SERVICES — 3D Arc Carousel ═══ */}
      <section style={{ padding: 'var(--space-section) 0' }} className="relative bg-[var(--stone)] overflow-hidden">
        <ParticlesBackground className="absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto max-w-[90rem] px-[var(--space-container)]">
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
            <div className="accent-line mb-4 sm:mb-5 mx-auto" />
            <h2 className="font-extrabold text-[var(--navy)] mb-3 sm:mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg">
              Komplette Sanierung und Ausbau – von der ersten Wand bis zum letzten Detail.
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
      <section className="relative bg-[var(--navy)] overflow-hidden" style={{ padding: 'var(--space-section) 0' }}>
        <AnimatedFireGlow />
        <div className="relative z-10 mx-auto max-w-[90rem] px-[var(--space-container)]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <div className="accent-line mb-4 sm:mb-5" />
              <h2 className="font-extrabold text-white mb-4 sm:mb-5">
                Tätig in Hannover<br />
                <span className="text-[var(--accent)]">und Umgebung</span>
              </h2>
              <p className="text-white/50 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
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
            <div className="flex items-center justify-center">
              <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[450px] lg:h-[450px]">
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
                    src="https://www.google.com/maps?q=Bremer+Straße+31,+30827+Garbsen,+Deutschland&output=embed&z=16"
                    width="150%"
                    height="150%"
                    style={{ border: 0, filter: 'saturate(0.3) brightness(0.7) contrast(1.2)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
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
      <section className="bg-[var(--stone)]" style={{ padding: 'var(--space-section) 0' }}>
        <div className="mx-auto max-w-[90rem] px-[var(--space-container)]">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="accent-line mb-4 sm:mb-5 mx-auto" />
            <h2 className="font-extrabold text-[var(--navy)] mb-3 sm:mb-4">
              Privat oder gewerblich
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg">
              Ob Eigenheim oder Großprojekt – wir sind für beide Seiten der richtige Partner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Privatkunden */}
            <div
              className="group relative rounded-xl overflow-hidden bg-white text-[var(--navy)] shadow-[0px_10px_20px_rgba(80,80,80,0.15)] hover:shadow-[0px_15px_30px_rgba(80,80,80,0.25)] transition-shadow duration-300 cursor-pointer min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]"
              onClick={() => handleCardTap('privat')}
            >
              {/* Cover — slides up on hover/tap */}
              <div
                className={`absolute inset-0 z-[2] transition-transform duration-300 ease-in-out group-hover:-translate-y-full ${activeCard === 'privat' ? '-translate-y-full' : ''}`}
                style={{ background: 'linear-gradient(to top, var(--accent), #f5a623)' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 sm:p-8">
                  <HomeIcon size={44} strokeWidth={1.5} className="mb-3 sm:mb-4 sm:w-14 sm:h-14" />
                  <h3 className="font-extrabold">Privatkunden</h3>
                </div>
              </div>

              {/* Content underneath */}
              <div className="relative z-[1] p-6 sm:p-8 lg:p-10 flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center">
                    <HomeIcon size={22} className="text-[var(--accent)] sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-bold text-[var(--navy)]">Privatkunden</h3>
                </div>
                <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                  Ihr Zuhause verdient das Beste. Von der Badsanierung über Putz- und Malerarbeiten bis zur kompletten Kernsanierung – wir verwandeln Ihre Wohnträume in Realität.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: Bath, text: 'Bad- & Sanitärsanierung' },
                    { icon: Wrench, text: 'Kernsanierung & Entkernung' },
                    { icon: PaintBucket, text: 'Putz-, Maler- & Fliesenarbeiten' },
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
            <div
              className="group relative rounded-xl overflow-hidden bg-[var(--navy)] text-white shadow-[0px_10px_20px_rgba(80,80,80,0.15)] hover:shadow-[0px_15px_30px_rgba(80,80,80,0.25)] transition-shadow duration-300 cursor-pointer min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]"
              onClick={() => handleCardTap('gewerbe')}
            >
              {/* Cover — slides up on hover/tap */}
              <div
                className={`absolute inset-0 z-[2] transition-transform duration-300 ease-in-out group-hover:-translate-y-full ${activeCard === 'gewerbe' ? '-translate-y-full' : ''}`}
                style={{ background: 'linear-gradient(to top, #0f1923, #1e3a5f)' }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 sm:p-8">
                  <Building size={44} strokeWidth={1.5} className="mb-3 sm:mb-4 sm:w-14 sm:h-14" />
                  <h3 className="font-extrabold">Gewerbekunden</h3>
                </div>
              </div>

              {/* Content underneath */}
              <div className="relative z-[1] p-6 sm:p-8 lg:p-10 flex flex-col justify-center h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[var(--accent)]/15 rounded-xl flex items-center justify-center">
                    <Building size={22} className="text-[var(--accent)] sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-bold text-white">Gewerbekunden</h3>
                </div>
                <p className="text-white/50 leading-relaxed mb-6">
                  Für Unternehmen, Kommunen und Hausverwaltungen realisieren wir Sanierungsprojekte jeder Größenordnung – termingerecht, budgetsicher und mit Koordination aller Gewerke.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: Building, text: 'Kernsanierung & Fassadensanierung' },
                    { icon: Ruler, text: 'Energetische Sanierung & Dämmung' },
                    { icon: Wrench, text: 'Gewerke-Koordination & Übergabe' },
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
      <section className="bg-white" style={{ padding: 'var(--space-section) 0' }}>
        <div className="mx-auto max-w-[90rem] px-[var(--space-container)]">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <div className="accent-line mb-4 sm:mb-5" />
            <h2 className="font-extrabold text-[var(--navy)] mb-3 sm:mb-4">
              Das sagen unsere Kunden
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base lg:text-lg">
              Vertrauen entsteht durch Ergebnisse – hier sprechen unsere Auftraggeber.
            </p>
          </div>

          <ThreeDScrollTriggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8" perspective={1200}>
            {testimonials.map(({ text, name, role }, i) => (
              <ThreeDScrollTriggerRow key={name} index={i}>
                <div className="relative bg-[var(--stone)] rounded-2xl p-6 sm:p-8 lg:p-10 h-full">
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

      {/* ═══ PROJEKTE DRIFT ═══ */}
      <section className="bg-[var(--navy)] overflow-hidden" style={{ padding: 'var(--space-section) 0' }}>
        <div className="mx-auto max-w-[90rem] px-[var(--space-container)] mb-6 sm:mb-8">
          <div className="accent-line mb-4 sm:mb-5" />
          <h2 className="font-extrabold text-white mb-2 sm:mb-3">Unsere Projekte</h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl">Einblicke in erfolgreich abgeschlossene Bauvorhaben.</p>
        </div>
        <InfiniteDrift
          bands={[
            {
              offsetY: -150, speed: 0.8, rotation: 5, rotationType: 'fromLeft', curveAmount: 30, curveDirection: 1,
              images: [
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
                'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
              ],
            },
            {
              offsetY: -50, speed: 1.2, rotation: 5, rotationType: 'fromCenter', curveAmount: 25, curveDirection: 1,
              images: [
                'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400',
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
                'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
                'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400',
              ],
            },
            {
              offsetY: 50, speed: 0.6, rotation: 5, curveAmount: 30, curveDirection: 1,
              images: [
                'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400',
                'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
                'https://images.unsplash.com/photo-1590013330451-3946e83e0392?w=400',
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400',
              ],
            },
            {
              offsetY: 150, speed: 1.0, rotation: 5, curveAmount: 25, curveDirection: 1,
              images: [
                'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400',
                'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=400',
              ],
            },
          ]}
          height={280}
          gap={12}
          imageHeight={80}
          bandHeight={100}
          maxImageWidth={220}
          inertia={0.93}
          className="bg-[var(--navy)]"
        />
      </section>

      {/* ═══ CTA SPLIT ═══ */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
          <div className="img-reveal relative h-48 sm:h-64 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=960&q=80"
              alt="Bauprojekt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[var(--navy)] flex items-center px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-0">
            <div className="max-w-lg">
              <div className="accent-line mb-5 sm:mb-6" />
              <h2 className="font-extrabold text-white mb-4 sm:mb-5 leading-tight">
                Ihr nächstes Projekt<br />beginnt hier.
              </h2>
              <p className="text-white/60 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Ob Kernsanierung, Badsanierung oder Innenausbau – wir bringen die Erfahrung, das Team und die Leidenschaft mit, um Ihre Vision Realität werden zu lassen.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-colors active:scale-[0.96]"
                >
                  Kostenlose Beratung
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/projekte"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium transition-colors"
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
