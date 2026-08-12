import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, Loader2 } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'
import ParticlesBackground from '@/components/lightswind/ParticlesBackground'
import { Iphone16Pro } from '@/components/lightswind/Iphone16Pro'

gsap.registerPlugin(ScrollTrigger)

const serviceOptions = [
  'Entkernung & Rückbau',
  'Trockenbau & Innenausbau',
  'Putz- & Malerarbeiten',
  'Fliesen & Bodenbeläge',
  'Bad- & Sanitärsanierung',
  'Elektro & Haustechnik',
  'Dämmung & Energiesanierung',
  'Fassaden- & Dachsanierung',
  'Kernsanierung',
  'Sonstiges',
]

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-heading > *', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('.contact-item', {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' },
      })
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const formData = new FormData(e.target)
    formData.append('_subject', `Neue Projektanfrage: ${formData.get('Leistung')}`)
    formData.append('_template', 'table')

    try {
      await fetch('https://formsubmit.co/ajax/info@oezdemir-bau.de', {
        method: 'POST',
        body: formData,
      })
      setSubmitted(true)
    } catch {
      alert('Fehler beim Senden. Bitte versuchen Sie es erneut.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = "w-full px-4 py-3.5 bg-white border border-[var(--concrete)] rounded-xl text-sm text-[var(--navy)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-colors"

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--navy)] pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <AnimatedFireGlow />
        <ParticlesBackground className="absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto max-w-[90rem] px-[var(--space-container)] page-heading text-center">
          <h1 className="font-extrabold text-white mb-3 sm:mb-4">
            Kontakt
          </h1>
          <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
            Sprechen Sie uns an – wir beraten Sie gerne persönlich und unverbindlich.
          </p>
        </div>
      </section>

      {/* Kontakt-Info Karten */}
      <section className="bg-white" style={{ padding: 'var(--space-section) 0' }}>
        <div className="mx-auto max-w-[90rem] px-[var(--space-container)]">
          <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <a href="tel:+4951112345678" className="contact-item group bg-[var(--stone)] rounded-2xl p-6 hover:bg-[var(--navy)] transition-colors duration-300">
              <div className="w-12 h-12 bg-[var(--accent)]/10 group-hover:bg-[var(--accent)] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Phone size={20} className="text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-white/40 mb-1 transition-colors duration-300">Telefon</p>
              <p className="text-sm font-bold text-[var(--navy)] group-hover:text-white transition-colors duration-300">0511 / 123 456 78</p>
            </a>

            <a href="mailto:info@oezdemir-bau.de" className="contact-item group bg-[var(--stone)] rounded-2xl p-6 hover:bg-[var(--navy)] transition-colors duration-300">
              <div className="w-12 h-12 bg-[var(--accent)]/10 group-hover:bg-[var(--accent)] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Mail size={20} className="text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-white/40 mb-1 transition-colors duration-300">E-Mail</p>
              <p className="text-sm font-bold text-[var(--navy)] group-hover:text-white transition-colors duration-300">info@oezdemir-bau.de</p>
            </a>

            <div className="contact-item group bg-[var(--stone)] rounded-2xl p-6 hover:bg-[var(--navy)] transition-colors duration-300">
              <div className="w-12 h-12 bg-[var(--accent)]/10 group-hover:bg-[var(--accent)] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <MapPin size={20} className="text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-white/40 mb-1 transition-colors duration-300">Adresse</p>
              <p className="text-sm font-bold text-[var(--navy)] group-hover:text-white transition-colors duration-300">Bremer Straße 31<br />30827 Garbsen</p>
            </div>

            <div className="contact-item group bg-[var(--stone)] rounded-2xl p-6 hover:bg-[var(--navy)] transition-colors duration-300">
              <div className="w-12 h-12 bg-[var(--accent)]/10 group-hover:bg-[var(--accent)] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <Clock size={20} className="text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] group-hover:text-white/40 mb-1 transition-colors duration-300">Bürozeiten</p>
              <p className="text-sm font-bold text-[var(--navy)] group-hover:text-white transition-colors duration-300">Mo–Fr: 07:00–17:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formular + Karte */}
      <section className="bg-[var(--stone)]" style={{ padding: 'var(--space-section) 0' }}>
        <div className="mx-auto max-w-[90rem] px-[var(--space-container)]">

          {submitted ? (
            <div className="text-center py-12 max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--navy)] mb-3">
                Anfrage gesendet!
              </h2>
              <p className="text-[var(--text-muted)] max-w-md mx-auto">
                Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
              {/* Phone-Karte links */}
              <div className="hidden lg:flex justify-center">
                <div className="phone-card">
                  <div className="phone-card-int">
                    <iframe
                      src="https://www.google.com/maps?q=Bremer+Straße+31,+30827+Garbsen,+Deutschland&output=embed&z=16"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Standort Özdemir Bau"
                    />
                  </div>
                  <div className="phone-top">
                    <div className="phone-speaker" />
                    <div className="phone-camera"><div className="phone-camera-int" /></div>
                  </div>
                  <div className="phone-btn1" />
                  <div className="phone-btn2" />
                  <div className="phone-btn3" />
                  <div className="phone-btn4" />
                </div>
              </div>

              {/* Formular rechts */}
              <div>
                <div className="mb-8">
                  <h2 className="font-extrabold text-[var(--navy)] mb-3">
                    Projekt anfragen
                  </h2>
                  <p className="text-[var(--text-muted)] text-sm sm:text-base">
                    Beschreiben Sie Ihr Vorhaben – wir melden uns innerhalb von 24 Stunden.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[var(--concrete)] space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Name *</label>
                      <input type="text" id="name" name="Name" required className={inputClass} placeholder="Ihr vollständiger Name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">E-Mail *</label>
                      <input type="email" id="email" name="E-Mail" required className={inputClass} placeholder="ihre@email.de" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Telefon</label>
                      <input type="tel" id="phone" name="Telefon" className={inputClass} placeholder="0511 / ..." />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Leistung *</label>
                      <select id="service" name="Leistung" required className={inputClass}>
                        <option value="">Bitte wählen</option>
                        {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Objekt-Adresse</label>
                    <input type="text" id="address" name="Objekt-Adresse" className={inputClass} placeholder="Straße, PLZ, Ort des Bauvorhabens" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">Nachricht *</label>
                    <textarea id="message" name="Nachricht" required rows={5} className={`${inputClass} resize-none`} placeholder="Beschreiben Sie Ihr Bauvorhaben..." />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-colors active:scale-[0.96]"
                    >
                      {sending ? (
                        <><Loader2 size={18} className="animate-spin" /> Wird gesendet...</>
                      ) : (
                        <><Send size={16} /> Anfrage senden</>
                      )}
                    </button>
                    <p className="text-xs text-[var(--text-muted)]">* Pflichtfelder</p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
