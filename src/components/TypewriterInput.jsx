import { useState, useEffect, useRef } from 'react'

export default function TypewriterInput({
  phrases = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDelay = 2000,
  className = '',
  cursorColor = 'var(--accent)',
}) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (phrases.length === 0) return

    const current = phrases[phraseIndex]

    if (!isDeleting && text === current) {
      // Pause before deleting
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDelay)
    } else if (isDeleting && text === '') {
      // Move to next phrase
      setIsDeleting(false)
      setPhraseIndex((phraseIndex + 1) % phrases.length)
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed
      timeoutRef.current = setTimeout(() => {
        setText(prev =>
          isDeleting
            ? prev.slice(0, -1)
            : current.slice(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDelay])

  return (
    <span className={className}>
      {text}
      <span
        className="inline-block w-[3px] ml-1 animate-pulse"
        style={{
          height: '1em',
          backgroundColor: cursorColor,
          verticalAlign: 'text-bottom',
        }}
      />
    </span>
  )
}
