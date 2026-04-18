import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Button from '@/components/ui/Button'
import { getService, services } from '@/lib/services'

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) {
    return {
      title: 'Servico nao encontrado - CogniVerse Agency',
      description: 'A pagina solicitada nao foi encontrada.',
    }
  }

  return {
    title: `${service.name} - CogniVerse Agency`,
    description: service.description,
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = getService(params.slug)
  if (!service) notFound()

  const relatedServices = services.filter((s) => s.slug !== service.slug)

  return (
    <div className="px-4 pb-16 pt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="text-sm text-text-secondary">
          <Link href="/" className="hover:text-text-primary">
            Home
          </Link>{' '}
          &gt;{' '}
          <Link href="/#servicos" className="hover:text-text-primary">
            Servicos
          </Link>{' '}
          &gt; <span className="text-text-primary">{service.name}</span>
        </nav>

        <section className="mt-6 rounded-card border border-border bg-surface p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-text-tertiary">Servico CogniVerse</p>
          <h1 className="mt-3 font-heading text-4xl md:text-6xl">{service.name}</h1>
          <p className="mt-4 max-w-4xl text-base text-text-secondary">{service.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-pill border border-border px-3 py-1 text-xs text-text-secondary">{service.meta}</span>
            {service.badge && (
              <span className="rounded-pill border border-accent-border bg-accent-muted px-3 py-1 text-xs text-accent">
                {service.badge}
              </span>
            )}
          </div>
        </section>

        {service.deliverables && (
          <section className="mt-10">
            <h2 className="font-heading text-3xl">Entregaveis</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <article key={item.id} className="rounded-card border border-border bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-heading text-xl text-accent">{item.id}</p>
                    <span className="rounded-pill border border-border px-2 py-1 text-xs text-text-secondary">{item.tag}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {service.timeline && (
          <section className="mt-10">
            <h2 className="font-heading text-3xl">Processo</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-5">
              {service.timeline.map((step) => (
                <article key={step.step} className="rounded-card border border-border bg-surface p-4">
                  <p className="text-xs text-text-tertiary">Etapa {step.step}</p>
                  <p className="mt-2 font-heading text-xl text-accent">{step.day}</p>
                  <p className="mt-2 text-sm text-text-secondary">{step.name}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {service.price && (
          <section className="mt-10">
            <h2 className="font-heading text-3xl">Preco</h2>
            <article className="mt-5 rounded-card border border-accent-border bg-accent-muted p-6">
              <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-secondary">Preco de Lancamento</p>
                  <p className="mt-2 font-heading text-5xl">{service.price.launch}</p>
                </div>
                <div className="hidden h-16 w-px bg-accent-border md:block" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-secondary">Preco Regular</p>
                  <p className="mt-2 font-heading text-4xl text-text-secondary">{service.price.regular}</p>
                  <p className="mt-2 text-sm text-text-secondary">{service.price.note}</p>
                </div>
              </div>
            </article>
          </section>
        )}

        <section className="mt-10">
          <h2 className="font-heading text-3xl">Funil CogniVerse</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Mapeamento de ICP + Lista Qualificada',
              'Auditoria de IA - Diagnostico Operacional',
              'Sprint de Ecossistema Digital - 30 dias',
              'Sequencia de Outreach Automatizada',
            ].map((stage, idx) => {
              const current =
                (idx === 0 && service.slug === 'mapeamento-icp') ||
                (idx === 1 && service.slug === 'auditoria-ia') ||
                (idx === 2 && service.slug === 'sprint')

              return (
                <article
                  key={stage}
                  className={`rounded-card border p-4 ${
                    current ? 'border-accent-border bg-accent-muted' : 'border-border bg-surface'
                  }`}
                >
                  <p className="text-xs text-text-tertiary">0{idx + 1}</p>
                  <p className="mt-2 font-heading text-xl">{stage}</p>
                  <p className={`mt-2 text-xs ${current ? 'text-accent' : 'text-text-secondary'}`}>
                    {current ? 'Voce esta aqui' : 'Proxima fase da jornada'}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="mt-10 rounded-card border border-border bg-surface2 p-6 text-center">
          <h2 className="font-heading text-4xl">Pronto para avancar?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-text-secondary">
            Agende sua discovery call ou envie um e-mail com seu contexto e objetivo atual.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="primary" href="https://calendly.com/cogniverse-ai">
              Agendar Discovery Call
            </Button>
            <Button variant="secondary" href="mailto:nohat.inc@gmail.com">
              Falar por E-mail
            </Button>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-3xl">Servicos Relacionados</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {relatedServices.map((item) => (
              <article key={item.slug} className="rounded-card border border-border bg-surface p-5">
                <h3 className="font-heading text-2xl">{item.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.tagline}</p>
                <p className="mt-2 text-xs text-text-tertiary">{item.meta}</p>
                <Link
                  href={`/servicos/${item.slug}`}
                  className="mt-4 inline-flex text-sm text-accent underline decoration-accent/40 underline-offset-4"
                >
                  Ver servico
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
