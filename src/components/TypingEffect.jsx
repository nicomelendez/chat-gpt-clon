import { useEffect, useState } from 'react'

export function TypingEffect ({ text }) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!text.length) return

    const randomTime = Math.floor(Math.random() * 40) + 15

    const intervaleId = setInterval(() => {
      if (index >= text.length) {
        clearInterval(intervaleId)
        setShowCursor(false)
        return
      }

      const nextIndex = text.indexOf(' ', index + 1)
      if (nextIndex < 0) {
        setDisplayText(text)
        setIndex(text.length)
        return
      }

      setDisplayText(text.slice(0, nextIndex))

      setIndex(index + 1)
    }, randomTime)

    return () => clearInterval(intervaleId)
  }, [text, index])

  return (
    <span className={`${showCursor ? 'after:content-["▋"] after:ml-1 after:animate-pulse' : ''}`}>{displayText}</span>
  )
}
