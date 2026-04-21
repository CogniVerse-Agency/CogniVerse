// app/contato/page.tsx
// CogniVerse Site â€” Next.js 14 App Router
// PÃ¡gina de contato: central de entrada com 3 jornadas distintas

import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'

// â”€â”€â”€ SEO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const metadata: Metadata = {
  title: 'Contato â€” CogniVerse Agency',
  description:
    'Agende uma Discovery Call, escolha o produto certo para o seu momento ou envie uma mensagem direta. A CogniVerse responde em atÃ© 24h.',
  openGraph: {
    title: 'Contato â€” CogniVerse Agency',
    description:
      'Agende uma Discovery Call ou entre em contato direto com a CogniVerse Agency.',
    url: 'https://cogniverse-agency.vercel.app/contato',
  },
}

// â”€â”€â”€ DADOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const services = [
  {
    slug: 'mapeamento-icp',
    label: 'Mapeamento de ICP',
    tag: '10 dias Ãºteis',
    price: 'R$1.800',
    desc: 'ICP estratÃ©gico documentado + lista de 100â€“150 leads qualificados com score de fit.',
    cta: 'Quero o Mapeamento',
    ideal: 'VocÃª prospecta muito e fecha pouco. NÃ£o sabe exatamente quem Ã© seu cliente ideal.',
  },
  {
    slug: 'auditoria-ia',
    label: 'Auditoria de IA',
    tag: '48h',
    price: 'R$800',
    desc: 'DiagnÃ³stico operacional completo com mapa de automaÃ§Ãµes e plano de aÃ§Ã£o priorizado.',
    cta: 'Quero a Auditoria',
    ideal: 'VocÃª sente que pode automatizar mais, mas nÃ£o sabe o quÃª nem por onde comeÃ§ar.',
  },
  {
    slug: 'sprint',
    label: 'Sprint de Ecossistema Digital',
    tag: '30 dias',
    price: 'R$3.200',
    desc: 'Ecossistema multi-plataforma completo: captaÃ§Ã£o automatizada, CRM e fluxos de nutriÃ§Ã£o.',
    cta: 'Quero o Sprint',
    ideal: 'VocÃª precisa de presenÃ§a digital estruturada e sistema de captaÃ§Ã£o funcionando.',
    featured: true,
  },
]

// â”€â”€â”€ COMPONENTES INTERNOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent mb-2">
      {children}
    </p>
  )
}

// â”€â”€â”€ CALENDLY EMBED COMPONENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Injetado via script â€” funciona em Client Component

function CalendlyEmbed() {
  return (
    <div className="calendly-wrapper w-full rounded-card overflow-hidden border border-border">
      {/* 
        Altura mÃ­nima de 700px para o Calendly renderizar completamente.
        min-h garante que o container nÃ£o colapse antes do script carregar.
        O iframe interno do Calendly precisa de espaÃ§o pra exibir 
        cabeÃ§alho + seleÃ§Ã£o de horÃ¡rio + formulÃ¡rio sem scroll interno.
      */}
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/cogniverse-ai/discovery?hide_gdpr_banner=1&background_color=141412&text_color=F9F8F4&primary_color=C8FF3E"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}

// â”€â”€â”€ PAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function ContatoPage() {
  return (
    <main className="bg-black text-ink-primary font-body">

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="relative px-6 md:px-16 lg:px-24 pt-32 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200,255,62,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl">
          <p className="font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent mb-4">
            Fale com a CogniVerse
          </p>
          <h1 className="font-heading font-extrabold tracking-tight leading-[1.05] mb-4 text-[clamp(2.5rem,5vw,4rem)]">
            Por onde vocÃª<br />
            quer <span className="text-accent">comeÃ§ar?</span>
          </h1>
          <p className="text-ink-secondary font-light text-lg leading-relaxed max-w-lg">
            Escolha a jornada que faz mais sentido pro seu momento.
            Respondemos em atÃ© 24h.
          </p>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* â”€â”€ JORNADA A: CALENDLY â”€â”€ */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">

            {/* copy lateral */}
            <div className="lg:sticky lg:top-28">
              <SectionLabel>OpÃ§Ã£o A</SectionLabel>
              <h2 className="font-heading font-bold text-2xl tracking-tight leading-tight mb-4">
                Discovery Call<br />
                <span className="text-accent">30 minutos</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                Conversa direta com Weber. DiagnÃ³stico rÃ¡pido do seu maior gargalo
                operacional e clareza sobre qual produto faz sentido pro seu momento.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Sem pitch agressivo',
                  'Sem compromisso de compra',
                  'DiagnÃ³stico real em 30 min',
                  '100% assÃ­ncrono se preferir',
                ].map(item => (
                  <li key={item} className="text-sm text-ink-secondary flex items-center gap-2">
                    <span className="text-accent">âœ“</span> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-surface border border-border rounded-card p-4">
                <p className="text-[0.72rem] text-ink-tertiary uppercase tracking-widest font-heading font-bold mb-1">
                  Prefere nÃ£o usar Calendly?
                </p>
                <p className="text-sm text-ink-secondary">
                  Use a{' '}
                  <a href="#formulario" className="text-accent hover:underline">
                    OpÃ§Ã£o C abaixo
                  </a>
                  {' '}e nos mande uma mensagem direta.
                </p>
              </div>
            </div>

            {/* embed Calendly */}
            <div>
              <CalendlyEmbed />
              <p className="text-[0.7rem] text-ink-tertiary mt-3 text-center">
                Powered by Calendly Â· Seus dados sÃ£o tratados conforme a polÃ­tica do provedor
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* â”€â”€ JORNADA B: ESCOLHA O PRODUTO â”€â”€ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>OpÃ§Ã£o B</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight leading-tight mb-2">
            JÃ¡ sabe o que precisa?
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Escolha o produto e vÃ¡ direto pra pÃ¡gina com todos os detalhes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(({ slug, label, tag, price, desc, cta, ideal, featured }) => (
              <div
                key={slug}
                className={`rounded-card p-6 flex flex-col transition-all ${
                  featured
                    ? 'bg-accent'
                    : 'bg-black border border-border hover:border-accent/25 hover:bg-accent/[0.02]'
                }`}
              >
                {featured && (
                  <span className="inline-block font-heading text-[0.6rem] font-bold tracking-[0.15em] uppercase bg-black text-accent rounded-pill px-2.5 py-1 mb-4 self-start">
                    Mais popular
                  </span>
                )}

                <p className={`font-heading text-[0.62rem] font-bold tracking-[0.15em] uppercase mb-1 ${featured ? 'text-black/50' : 'text-accent/70'}`}>
                  {tag}
                </p>
                <p className={`font-heading font-bold text-base mb-3 leading-snug ${featured ? 'text-black' : 'text-ink-primary'}`}>
                  {label}
                </p>
                <p className={`text-[0.78rem] leading-relaxed mb-4 flex-1 ${featured ? 'text-black/70' : 'text-ink-secondary'}`}>
                  {desc}
                </p>

                {/* "ideal para" */}
                <div className={`rounded-[8px] px-3 py-2.5 mb-5 ${featured ? 'bg-black/10' : 'bg-surface border border-border'}`}>
                  <p className={`text-[0.68rem] leading-snug ${featured ? 'text-black/60' : 'text-ink-tertiary'}`}>
                    <span className={`font-heading font-bold text-[0.62rem] uppercase tracking-wider block mb-0.5 ${featured ? 'text-black/50' : 'text-ink-tertiary'}`}>
                      Ideal se
                    </span>
                    {ideal}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className={`font-heading font-bold text-xl ${featured ? 'text-black' : 'text-ink-primary'}`}>
                    {price}
                  </span>
                  <Link
                    href={`/servicos/${slug}`}
                    className={`font-heading font-bold text-[0.75rem] tracking-wide rounded-pill px-4 py-2 transition-all ${
                      featured
                        ? 'bg-black text-accent hover:opacity-90'
                        : 'bg-accent text-black hover:opacity-90'
                    }`}
                  >
                    {cta} â†’
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* â”€â”€ JORNADA C: FORMULÃRIO SIMPLES â”€â”€ */}
      <section id="formulario" className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

            {/* copy lateral */}
            <div className="lg:sticky lg:top-28">
              <SectionLabel>OpÃ§Ã£o C</SectionLabel>
              <h2 className="font-heading font-bold text-2xl tracking-tight leading-tight mb-4">
                Tem uma dÃºvida?<br />
                <span className="text-accent">Manda uma mensagem.</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                Sem formulÃ¡rio longo. SÃ³ o essencial. Respondemos em atÃ© 24h Ãºteis.
              </p>
              <p className="text-sm text-ink-secondary">
                Ou fale direto:{' '}
                <a
                  href="mailto:contato@cogniverse.agency"
                  className="text-accent hover:underline"
                >
                  contato@cogniverse.agency
                </a>
              </p>
            </div>

            {/* formulÃ¡rio */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Script Calendly â€” carrega no final do body */}
      {/* 
        IMPORTANTE para o Codex:
        Este script precisa ser injetado via next/script no layout.tsx ou nesta pÃ¡gina.
        Ver instruÃ§Ãµes no prompt do Codex.
      */}

    </main>
  )
}


