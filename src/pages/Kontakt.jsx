import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import AnimatedFireGlow from '@/components/AnimatedFireGlow'

const contactInfo = [
  { icon: Phone, label: 'Telefon', value: '0511 / 123 456 78', href: 'tel:+4951112345678' },
  { icon: Mail, label: 'E-Mail', value: 'info@oezdemir-bau.de', href: 'mailto:info@oezdemir-bau.de' },
  { icon: MapPin, label: 'Adresse', value: 'Musterstraße 1, 30159 Hannover' },
  { icon: Clock, label: 'Bürozeiten', value: 'Mo–Fr: 07:00–17:00 Uhr' },
]

const serviceOptions = [
  'Kernsanierung',
  'Badsanierung',
  'Hochbau',
  'Tiefbau',
  'Gleisbau',
  'Innenausbau',
  'Sonstiges',
]

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-heading > *', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      })
      gsap.from('.contact-card', {
        opacity: 0, y: 20, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.3,
      })
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-[var(--navy)] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <AnimatedFireGlow />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 page-heading">
          <div className="accent-line mb-5" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Kontakt
          </h1>
          <p className="text-white/60 text-base sm:text-lg max-w-xl">
            Sprechen Sie uns an – wir beraten Sie gerne persönlich und unverbindlich.
          </p>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="bg-[var(--stone)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="contact-card flex items-start gap-4">
                <div className="w-11 h-11 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-[var(--navy)] hover:text-[var(--accent)] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[var(--navy)]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--navy)] mb-2">
                Projekt anfragen
              </h2>
              <p className="text-[var(--text-muted)] mb-8">
                Beschreiben Sie Ihr Vorhaben und wir melden uns innerhalb von 24 Stunden.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 sm:p-12 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--navy)] mb-2">Nachricht gesendet!</h3>
                  <p className="text-[var(--text-muted)]">
                    Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm text-[var(--navy)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-colors"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm text-[var(--navy)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-colors"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm text-[var(--navy)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-colors"
                        placeholder="0511 / ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                        Leistung *
                      </label>
                      <select
                        id="service"
                        required
                        className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm text-[var(--navy)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-colors"
                      >
                        <option value="">Bitte wählen</option>
                        {serviceOptions.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[var(--navy)] mb-1.5">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[var(--stone)] border border-[var(--concrete)] rounded-xl text-sm text-[var(--navy)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-colors resize-none"
                      placeholder="Beschreiben Sie Ihr Bauvorhaben..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-8 py-3.5 rounded-xl font-semibold transition-colors active:scale-[0.96]"
                  >
                    <Send size={16} />
                    Anfrage senden
                  </button>
                </form>
              )}
            </div>

            {/* Map placeholder */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden h-72 lg:h-full min-h-[300px] bg-[var(--stone)] border border-[var(--concrete)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38909.69874890627!2d9.7168!3d52.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00d17b1f7cf79%3A0x427f28131548780!2sHannover!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Özdemir Bau"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
