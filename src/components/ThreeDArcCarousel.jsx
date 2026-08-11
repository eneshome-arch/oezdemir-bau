import { useState, useEffect, useRef } from 'react'

export default function ThreeDArcCarousel({ items = [], autoPlay = true, autoPlayDelay = 4000 }) {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const count = items.length

  useEffect(() => {
    if (!autoPlay || count === 0) return
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % count)
    }, autoPlayDelay)
    return () => clearInterval(timerRef.current)
  }, [autoPlay, autoPlayDelay, count])

  const handleClick = (i) => {
    setActive(i)
    if (timerRef.current) clearInterval(timerRef.current)
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        setActive(prev => (prev + 1) % count)
      }, autoPlayDelay)
    }
  }

  if (count === 0) return null

  return (
    <div className="relative w-full" style={{ perspective: '1200px', height: '480px' }}>
      {items.map((item, i) => {
        const offset = i - active
        // Wrap around for smooth circular positioning
        let adj = offset
        if (adj > count / 2) adj -= count
        if (adj < -count / 2) adj += count

        const absAdj = Math.abs(adj)
        const translateX = adj * 220
        const translateZ = -absAdj * 180
        const rotateY = -adj * 18
        const opacity = absAdj > 2 ? 0 : 1 - absAdj * 0.25
        const scale = 1 - absAdj * 0.1
        const zIndex = 20 - absAdj

        return (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className="absolute left-1/2 top-1/2 cursor-pointer"
            style={{
              width: '280px',
              height: '400px',
              transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
              opacity,
              zIndex,
              transition: 'all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className="w-full h-full rounded-2xl overflow-hidden relative group"
              style={{
                boxShadow: adj === 0
                  ? '0 25px 60px rgba(0,0,0,0.3), 0 0 30px rgba(232,113,10,0.2)'
                  : '0 15px 40px rgba(0,0,0,0.15)',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 text-white transition-all duration-500"
                style={{ opacity: adj === 0 ? 1 : 0.4, transform: adj === 0 ? 'translateY(0)' : 'translateY(8px)' }}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--accent)] mb-1 block">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold leading-tight mb-1">{item.title}</h3>
                {adj === 0 && (
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-2">{item.description}</p>
                )}
              </div>

              {/* Active glow border */}
              {adj === 0 && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 2px rgba(232,113,10,0.4)' }}
                />
              )}
            </div>
          </div>
        )
      })}

      {/* Navigation dots */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i === active ? 'var(--accent)' : 'var(--concrete)',
              transform: i === active ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
