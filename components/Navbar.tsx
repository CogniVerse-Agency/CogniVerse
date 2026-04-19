'use client'

import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { services } from '@/lib/services'
import Button from '@/components/ui/Button'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (args: { url: string }) => void
    }
  }
}

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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    loadCalendlyScript()
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setServicesOpen(false)
      }
    }

    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  const containerClass = useMemo(
    () =>
      `fixed top-0 z-50 w-full border-b border-border transition-colors backdrop-blur ${
        scrolled ? 'scrolled bg-black/90' : 'bg-black/55'
      }`,
    [scrolled]
  )

  return (
    <header className={containerClass}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="CogniVerse Home">
          <svg
            width="36"
            height="36"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="gBrand" x1="8" y1="8" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="rgb(200,255,62)" />
                <stop offset="1" stopColor="rgb(159,200,50)" />
              </linearGradient>
            </defs>
            <circle cx="22" cy="22" r="15" stroke="url(#gBrand)" strokeWidth="1.6" opacity="0.95" />
            <circle cx="22" cy="22" r="3.4" fill="rgb(200,255,62)" opacity="0.95" />
            <g stroke="url(#gBrand)" strokeWidth="1.2" opacity="0.9">
              <path d="M22 7.3 L26.5 14.2" />
              <path d="M37 16.6 L29.8 20.2" />
              <path d="M37.4 27.3 L30.1 23.8" />
              <path d="M22 37.1 L17.6 30.2" />
              <path d="M7.7 27.2 L14.9 23.7" />
              <path d="M7.6 16.6 L14.9 20.2" />
            </g>
            <g fill="url(#gBrand)">
              <circle cx="22" cy="7.6" r="1.7" />
              <circle cx="36.4" cy="16.2" r="1.7" />
              <circle cx="36.4" cy="27.5" r="1.7" />
              <circle cx="22" cy="36.5" r="1.7" />
              <circle cx="7.6" cy="27.2" r="1.7" />
              <circle cx="7.6" cy="16.3" r="1.7" />
            </g>
          </svg>
          <span className="font-heading text-xl font-bold text-accent">CogniVerse</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-text-secondary lg:flex" aria-label="Navegação principal">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-text-primary"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Serviços
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-card border border-border bg-surface p-2 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicos/${service.slug}`}
                    className="block rounded-xl px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface2 hover:text-text-primary"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/servicos/mapeamento-icp" className="transition-colors hover:text-text-primary">
            Mapeamento de ICP
          </Link>
          <Link href="/#processo" className="transition-colors hover:text-text-primary">
            Como Funciona
          </Link>
          <Link href="/#sobre" className="transition-colors hover:text-text-primary">
            Sobre
          </Link>
          <Link href="/#agendar" className="transition-colors hover:text-text-primary">
            Agendar
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button variant="primary" onClick={openCalendlyPopup}>
            Agendar Discovery Call
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-pill border border-border p-2 text-text-primary lg:hidden"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-surface lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4" aria-label="Navegação mobile">
            <Link href="/#servicos" onClick={() => setMobileOpen(false)} className="text-text-secondary">
              Serviços
            </Link>
            <Link
              href="/servicos/mapeamento-icp"
              onClick={() => setMobileOpen(false)}
              className="text-text-secondary"
            >
              Mapeamento de ICP
            </Link>
            <Link href="/#processo" onClick={() => setMobileOpen(false)} className="text-text-secondary">
              Como Funciona
            </Link>
            <Link href="/#sobre" onClick={() => setMobileOpen(false)} className="text-text-secondary">
              Sobre
            </Link>
            <Link href="/#agendar" onClick={() => setMobileOpen(false)} className="text-text-secondary">
              Agendar
            </Link>
            <Button
              variant="primary"
              onClick={() => {
                setMobileOpen(false)
                openCalendlyPopup()
              }}
              className="mt-2"
            >
              Agendar Discovery Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
