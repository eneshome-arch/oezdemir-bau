import { useEffect, useRef, useState } from 'react'

export function ThreeDScrollTriggerContainer({ children, className = '', perspective = 1200 }) {
  return (
    <div
      className={className}
      style={{ perspective: `${perspective}px`, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export function ThreeDScrollTriggerRow({ children, className = '', index = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Small delay so initial hidden state is painted first
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0) rotateX(0deg) scale(1)'
          : 'translateY(80px) rotateX(15deg) scale(0.9)',
        transformOrigin: 'center bottom',
        transition: `opacity 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.2}s, transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.2}s`,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}
