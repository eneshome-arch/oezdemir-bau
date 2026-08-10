import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 500, suffix: '+', label: 'Abgeschlossene Projekte' },
  { value: 10, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 50, suffix: '+', label: 'Mitarbeiter' },
  { value: 100, suffix: '%', label: 'Kundenzufriedenheit' },
]

function CountUp({ target, suffix, triggered }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: () => setCount(Math.round(obj.val)),
    })
  }, [triggered, target])

  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const sectionRef = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 75%',
      once: true,
      onEnter: () => setTriggered(true),
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background line */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="relative text-center group">
              <p className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} triggered={triggered} />
              </p>
              <p className="text-white/30 text-sm font-medium mt-3 tracking-wide">
                {stat.label}
              </p>
              {i < STATS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
