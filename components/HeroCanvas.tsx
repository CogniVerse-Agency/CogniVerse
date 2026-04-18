'use client'

import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let frameId = 0
    const points: Point[] = []
    const count = 90
    const linkDistance = 120

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    const resize = () => {
      dpr = Math.max(1, Math.min(2.25, window.devicePixelRatio || 1))
      width = Math.floor(canvas.clientWidth)
      height = Math.floor(canvas.clientHeight)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      points.length = 0
      const pad = 40
      for (let i = 0; i < count; i += 1) {
        points.push({
          x: rand(pad, width - pad),
          y: rand(pad, height - pad),
          vx: rand(-0.18, 0.18),
          vy: rand(-0.18, 0.18),
          r: rand(1.0, 2.2),
        })
      }
    }

    let last = performance.now()
    const frame = (now: number) => {
      const dt = now - last
      last = now

      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'source-over'

      for (let i = 0; i < points.length; i += 1) {
        const p = points[i]
        p.x += p.vx * (dt / 16.67)
        p.y += p.vy * (dt / 16.67)

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }

      for (let i = 0; i < points.length; i += 1) {
        const a = points[i]
        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > linkDistance) continue

          const t = 1 - dist / linkDistance
          const alpha = 0.18 * t * t
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(200, 255, 62, ${alpha})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      for (let i = 0; i < points.length; i += 1) {
        const p = points[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(200, 255, 62, 0.5)'
        ctx.fill()
      }

      frameId = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    frameId = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-65"
    />
  )
}
