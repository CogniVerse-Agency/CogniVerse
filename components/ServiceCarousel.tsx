'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { services } from '@/lib/services'
import Button from '@/components/ui/Button'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (args: { url: string }) => void
    }
  }
}

const AUTO_ADVANCE_MS = 4000

function loadCalendlyScript() {
  if (document.querySelector('script[data-calendly="true"]')) return
  const script = document.createElement('script')
  script.src = 'https://assets.calendly.com/assets/external/widget.js'
  script.async = true
  script.dataset.calendly = 'true'
  document.body.appendChild(script)
}

function openCalendlyPopup() {
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/cogniverse-ai' })
    return
  }
  const section = document.getElementById('agendar')
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    loadCalendlyScript()
  }, [])

  const setActive = useCallback((index: number) => {
    setActiveIndex(index)
    setCycle((v) => v + 1)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
      setCycle((v) => v + 1)
    }, AUTO_ADVANCE_MS)

    return () => window.clearTimeout(timer)
  }, [activeIndex, paused])

  const activeService = useMemo(() => services[activeIndex], [activeIndex])

  return (
    <div
      className="grid gap-8 rounded-card border border-border bg-surface p-4 md:p-6 lg:grid-cols-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="order-1">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
          {services.map((service, index) => {
            const active = index === activeIndex
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => setActive(index)}
                className={`min-w-max rounded-xl border-l-2 px-3 py-3 text-left transition-colors lg:min-w-0 ${
                  active
                    ? 'border-accent bg-surface2 text-text-primary'
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary lg:text-[11px]">
                  {(index + 1).toString().padStart(2, '0')}
                </p>
                <p className="font-heading text-base leading-tight">{service.name}</p>
                <p className="mt-1 hidden text-xs lg:block">{service.meta}</p>
              </button>
            )
          })}
        </div>
      </div>

      <div className="order-2 rounded-card border border-border bg-surface2 p-6">
        {activeService.badge && (
          <span className="inline-flex rounded-pill border border-accent-border bg-accent-muted px-3 py-1 text-xs font-medium text-accent">
            {activeService.badge}
          </span>
        )}
        <h3 className="mt-4 font-heading text-3xl leading-tight md:text-4xl">{activeService.name}</h3>
        <p className="mt-2 text-sm text-text-secondary">{activeService.meta}</p>
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">{activeService.description}</p>

        <ul className="mt-5 space-y-2">
          {activeService.includes.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/servicos/${activeService.slug}`}
            className="inline-flex items-center rounded-pill border border-border px-5 py-3 text-sm text-text-primary transition-colors hover:border-border-hover"
          >
            Saiba Mais -&gt;
          </Link>
          <Button variant="primary" onClick={openCalendlyPopup}>
            Agendar Discovery Call
          </Button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex gap-2">
            {services.map((service, index) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 w-2.5 rounded-full ${index === activeIndex ? 'bg-accent' : 'bg-text-tertiary'}`}
                aria-label={`Ir para ${service.name}`}
              />
            ))}
          </div>
          <div className="relative h-1 flex-1 overflow-hidden rounded bg-black/40">
            <div
              key={`${activeService.slug}-${cycle}`}
              className="absolute inset-y-0 left-0 bg-accent"
              style={{
                width: paused ? '100%' : undefined,
                animation: paused ? 'none' : `progress ${AUTO_ADVANCE_MS}ms linear forwards`,
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
