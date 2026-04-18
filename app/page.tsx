'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import HeroCanvas from '@/components/HeroCanvas'
import ServiceCarousel from '@/components/ServiceCarousel'
import Button from '@/components/ui/Button'
import { useCounter } from '@/hooks/useCounter'
import { useReveal } from '@/hooks/useReveal'

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

type MetricCounterProps = {
  target: number
  suffix: string
  decimals?: number
}

function MetricCounter({ target, suffix, decimals = 0 }: MetricCounterProps) {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const { value, start, started } = useCounter(target, 900)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            start()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.35 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [start, started])

  const display = decimals === 0 ? Math.round(value).toString() : value.toFixed(decimals)

  return (
    <p ref={ref} className="font-heading text-4xl font-bold text-accent md:text-5xl">
      {display}
      {suffix}
    </p>
  )
}

export default function Home() {
  const revealRef = useReveal<HTMLDivElement>()
  const [calendlyReady, setCalendlyReady] = useState(false)

  useEffect(() => {
    loadCalendlyScript()
    setCalendlyReady(true)
  }, [])

  return (
    <div ref={revealRef} className="pt-20">
      <section id="hero" className="relative overflow-hidden px-4 py-20 lg:px-8">
        <HeroCanvas />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="reveal text-sm uppercase tracking-[0.22em] text-text-secondary">
              - Chief of Staff Digital para Founders
            </p>
            <h1 className="reveal mt-6 font-heading text-5xl leading-[0.95] md:text-7xl">
              Transforme Visao em
              <span className="block text-accent">Execucao Escalavel</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-base text-text-secondary md:text-lg">
              A CogniVerse e o ecossistema de IA e automacao que liberta seu tempo para o que realmente importa:
              crescimento com previsibilidade.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Button variant="primary" onClick={openCalendlyPopup}>
                Agendar Discovery Call
              </Button>
              <Button variant="secondary" href="/#processo">
                Ver Como Funciona
              </Button>
            </div>
          </div>
          <div className="reveal rounded-card border border-border bg-surface/70 p-6">
            <p className="text-sm text-text-secondary">
              Se o crescimento esta travando por operacoes manuais, falta de governanca e processos sem clareza,
              a CogniVerse transforma isso em um sistema autonomo.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-surface2 p-3 text-sm text-text-secondary">IA aplicada ao fluxo</div>
              <div className="rounded-xl border border-border bg-surface2 p-3 text-sm text-text-secondary">Automacao orientada a ROI</div>
              <div className="rounded-xl border border-border bg-surface2 p-3 text-sm text-text-secondary">Execucao assincrona</div>
              <div className="rounded-xl border border-border bg-surface2 p-3 text-sm text-text-secondary">Governanca operacional</div>
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="px-4 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="reveal rounded-card border border-border bg-surface p-6">
            <h2 className="font-heading text-3xl">O Dilema do Founder</h2>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>Prospeccao no escuro com baixa taxa de resposta.</li>
              <li>Pesquisa manual sem criterio consumindo horas do time.</li>
              <li>Reunioes com leads fora de fit e sem potencial de compra.</li>
              <li>Hipoteses de ICP sem validacao estruturada.</li>
            </ul>
          </article>
          <article className="reveal rounded-card border border-accent-border bg-accent-muted p-6">
            <h2 className="font-heading text-3xl">O Jeito CogniVerse</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-primary">
              Conduzimos descoberta estrategica, mapeamos padroes dos melhores clientes e entregamos plano de
              execucao com dados acionaveis para aumentar conversao e reduzir desperdicio comercial.
            </p>
          </article>
        </div>
      </section>

      <section id="servicos" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Nossos Servicos</p>
            <h2 className="mt-2 font-heading text-4xl md:text-5xl">Escolha o nivel de alavancagem ideal</h2>
          </div>
          <ServiceCarousel />
        </div>
      </section>

      <section id="processo" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-8">
            <h2 className="font-heading text-4xl md:text-5xl">Como Funciona</h2>
            <p className="mt-2 text-text-secondary">Um processo assincrono, orientado a resultados mensuraveis.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {[
              ['01', 'Kickoff estrategico'],
              ['02', 'Mapeamento e diagnostico'],
              ['03', 'Desenho de execucao'],
              ['04', 'Implementacao guiada'],
              ['05', 'Handoff e escala'],
            ].map(([step, name]) => (
              <article key={step} className="reveal rounded-card border border-border bg-surface p-4">
                <p className="text-xs text-text-tertiary">Etapa {step}</p>
                <p className="mt-2 font-heading text-2xl text-accent">{step}</p>
                <p className="mt-2 text-sm text-text-secondary">{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metricas" className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-8">
            <h2 className="font-heading text-4xl md:text-5xl">Foco em impacto, nao em esforco</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="reveal rounded-card border border-border bg-surface p-5">
              <MetricCounter target={80} suffix="%" />
              <p className="mt-2 text-sm text-text-secondary">Reducao de tarefas operacionais repetitivas</p>
            </article>
            <article className="reveal rounded-card border border-border bg-surface p-5">
              <MetricCounter target={48} suffix="h" />
              <p className="mt-2 text-sm text-text-secondary">Primeiros ganhos de eficiencia no diagnostico</p>
            </article>
            <article className="reveal rounded-card border border-border bg-surface p-5">
              <MetricCounter target={50} suffix="%+" />
              <p className="mt-2 text-sm text-text-secondary">Aumento medio da qualidade das oportunidades</p>
            </article>
            <article className="reveal rounded-card border border-border bg-surface p-5">
              <MetricCounter target={9.5} suffix="" decimals={1} />
              <p className="mt-2 text-sm text-text-secondary">Satisfacao media dos founders atendidos</p>
            </article>
          </div>
        </div>
      </section>

      <section id="agendar" className="px-4 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="reveal rounded-card border border-border bg-surface p-6">
            <h2 className="font-heading text-4xl">Pronto para Escalar?</h2>
            <p className="mt-3 text-text-secondary">
              Agende uma Discovery Call de 30 minutos. Sem compromisso. Sem pitch agressivo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary" onClick={openCalendlyPopup}>
                Abrir Calendly
              </Button>
              <Button variant="secondary" href="/contato">
                Preencher Formulario
              </Button>
            </div>
          </article>

          <div className="reveal overflow-hidden rounded-card border border-border bg-surface2">
            {calendlyReady && (
              <div
                className="calendly-inline-widget min-h-[540px] w-full"
                data-url="https://calendly.com/cogniverse-ai"
              />
            )}
          </div>
        </div>
      </section>

      <section id="sobre" className="px-4 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <article className="reveal rounded-card border border-border bg-surface p-6">
            <h2 className="font-heading text-4xl">Pensamos como founders. Executamos como sistemas.</h2>
            <p className="mt-4 text-text-secondary">
              Nossa missao e transformar visao em execucao atraves de sistemas autonomos, rituais leves e
              governanca operacional com dados claros para decisao.
            </p>
          </article>
          <div className="reveal grid grid-cols-2 gap-3">
            {['Notion Ops', 'CRM', 'Automacoes IA', 'Analytics', 'Playbooks', 'Cadencia Comercial'].map((item) => (
              <div key={item} className="rounded-card border border-border bg-surface p-4 text-sm text-text-secondary">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="privacidade" className="px-4 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-card border border-border bg-surface p-6 reveal">
          <h2 className="font-heading text-2xl">Privacidade</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Este site usa o widget oficial do Calendly para agendamento. Ao agendar, voce pode fornecer
            informacoes ao Calendly e/ou a CogniVerse conforme a politica do provedor.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            <Link href="/contato" className="text-accent underline decoration-accent/40 underline-offset-4">
              Prefere nao usar Calendly? Envie seu contexto pelo formulario.
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
