'use client'

import { useEffect, useMemo, useState } from 'react'

export function useCounter(target: number, duration: number) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return

    let frameId = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [duration, started, target])

  return useMemo(
    () => ({
      value,
      start: () => setStarted(true),
      started,
    }),
    [started, value]
  )
}
