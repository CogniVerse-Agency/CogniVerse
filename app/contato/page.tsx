// app/contato/page.tsx
// CogniVerse Site — Next.js 14 App Router
// CORRIGIDO: encoding de caracteres especiais + URL Calendly atualizada

import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Contato — CogniVerse Agency',
  description:
    'Agende uma Discovery Call, escolha o produto certo para o seu momento ou envie uma mensagem direta. A CogniVerse responde em ate 24h.',
  openGraph: {
    title: 'Contato — CogniVerse Agency',
    description:
      'Agende uma Discovery Call ou entre em contato direto com a CogniVerse Agency.',
    url: 'https://cogniverse-agency.vercel.app/contato',
  },
}

// ─── DADOS (fora do JSX para evitar problemas de encoding) ────────────────────

const HERO_TITLE_1 = 'Por onde voc\u00ea'
const HERO_TITLE_2 = 'quer come\u00e7ar?'
const HERO_SUB = 'Escolha a jornada que faz mais sentido pro seu momento. Respondemos em at\u00e9 24h.'

const OPCAO_A_TITLE = 'Discovery Call'
const OPCAO_A_SUBTITLE = '30 minutos'
const OPCAO_A_DESC = 'Conversa direta com Weber. Diagn\u00f3stico r\u00e1pido do seu maior gargalo operacional e clareza sobre qual produto faz sentido pro seu momento.'

const OPCAO_A_CHECKS = [
  'Sem pitch agressivo',
  'Sem compromisso de compra',
  'Diagn\u00f3stico real em 30 min',
  '100% ass\u00edncrono se preferir',
]

const OPCAO_A_NOTE_TITLE = 'Prefere n\u00e3o usar Calendly?'
const OPCAO_A_NOTE_DESC = 'Use a'
const OPCAO_A_NOTE_LINK = 'Op\u00e7\u00e3o C abaixo'
const OPCAO_A_NOTE_SUFFIX = 'e nos mande uma mensagem direta.'
const OPCAO_A_POWERED = 'Powered by Calendly \u00b7 Seus dados s\u00e3o tratados conforme a pol\u00edtica do provedor'

const OPCAO_B_TITLE = 'J\u00e1 sabe o que precisa?'
const OPCAO_B_DESC = 'Escolha o produto e v\u00e1 direto para a p\u00e1gina com todos os detalhes.'

const OPCAO_C_TITLE = 'Tem uma d\u00favida?'
const OPCAO_C_SUBTITLE = 'Manda uma mensagem.'
const OPCAO_C_DESC = 'Sem formul\u00e1rio longo. S\u00f3 o essencial. Respondemos em at\u00e9 24h \u00fateis.'
const OPCAO_C_EMAIL_TEXT = 'Ou fale direto:'

const services = [
  {
    slug: 'mapeamento-icp',
    label: 'Mapeamento de ICP',
    tag: '10 dias \u00fateis',
    price: 'R$1.800',
    desc: 'ICP estrat\u00e9gico documentado + lista de 100\u2013150 leads qualificados com score de fit.',
    cta: 'Quero o Mapeamento',
    ideal: 'Voc\u00ea prospecta muito e fecha pouco. N\u00e3o sabe exatamente quem \u00e9 seu cliente ideal.',
  },
  {
    slug: 'auditoria-ia',
    label: 'Auditoria de IA',
    tag: '48h',
    price: 'R$800',
    desc: 'Diagn\u00f3stico operacional completo com mapa de automa\u00e7\u00f5es e plano de a\u00e7\u00e3o priorizado.',
    cta: 'Quero a Auditoria',
    ideal: 'Voc\u00ea sente que pode automatizar mais, mas n\u00e3o sabe o qu\u00ea nem por onde come\u00e7ar.',
  },
  {
    slug: 'sprint',
    label: 'Sprint de Ecossistema Digital',
    tag: '30 dias',
    price: 'R$3.200',
    desc: 'Ecossistema multi-plataforma completo: capta\u00e7\u00e3o automatizada, CRM e fluxos de nutri\u00e7\u00e3o.',
    cta: 'Quero o Sprint',
    ideal: 'Voc\u00ea precisa de presen\u00e7a digital estruturada e sistema de capta\u00e7\u00e3o funcionando.',
    featured: true,
  },
]

// ─── COMPONENTES INTERNOS ─────────────────────────────────────────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent mb-2">
      {text}
    </p>
  )
}

// ─── CALENDLY EMBED ───────────────────────────────────────────────────────────
// IMPORTANTE: O script do Calendly deve ser carregado via next/script no layout.tsx
// com strategy="lazyOnload". Ver instruções no prompt do Codex.
// O style height:700px é obrigatório via inline — não usar classes Tailwind h-[700px]
// pois o script do Calendly lê o atributo style diretamente do DOM.

function CalendlyEmbed() {
  return (
    <div className="w-full rounded-card overflow-hidden border border-border">
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/cogniverse-ai/30min?hide_gdpr_banner=1&background_color=141412&text_color=F9F8F4&primary_color=C8FF3E"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContatoPage() {
  return (
    <main className="bg-black text-ink-primary font-body">

      {/* ── HERO ── */}
      <section className="relative px-6 md:px-16 lg:px-24 pt-32 pb-16 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200,255,62,0.07) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl">
          <p className="font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent mb-4">
            {'Fale com a CogniVerse'}
          </p>
          <h1 className="font-heading font-extrabold tracking-tight leading-[1.05] mb-4 text-[clamp(2.5rem,5vw,4rem)]">
            {HERO_TITLE_1}
            <br />
            <span className="text-accent">{HERO_TITLE_2}</span>
          </h1>
          <p className="text-ink-secondary font-light text-lg leading-relaxed max-w-lg">
            {HERO_SUB}
          </p>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── OPCAO A: CALENDLY ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">

            {/* copy lateral */}
            <div className="lg:sticky lg:top-28">
              <SectionLabel text={'Op\u00e7\u00e3o A'} />
              <h2 className="font-heading font-bold text-2xl tracking-tight leading-tight mb-4">
                {OPCAO_A_TITLE}
                <br />
                <span className="text-accent">{OPCAO_A_SUBTITLE}</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-6">
                {OPCAO_A_DESC}
              </p>
              <ul className="space-y-2 mb-6">
                {OPCAO_A_CHECKS.map(item => (
                  <li key={item} className="text-sm text-ink-secondary flex items-center gap-2">
                    <span className="text-accent">{'\u2713'}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-surface border border-border rounded-card p-4">
                <p className="text-[0.72rem] text-ink-tertiary uppercase tracking-widest font-heading font-bold mb-1">
                  {OPCAO_A_NOTE_TITLE}
                </p>
                <p className="text-sm text-ink-secondary">
                  {OPCAO_A_NOTE_DESC}{' '}
                  <a href="#formulario" className="text-accent hover:underline">
                    {OPCAO_A_NOTE_LINK}
                  </a>
                  {' '}{OPCAO_A_NOTE_SUFFIX}
                </p>
              </div>
            </div>

            {/* embed Calendly */}
            <div>
              <CalendlyEmbed />
              <p className="text-[0.7rem] text-ink-tertiary mt-3 text-center">
                {OPCAO_A_POWERED}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── OPCAO B: PRODUTOS ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel text={'Op\u00e7\u00e3o B'} />
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight leading-tight mb-2">
            {OPCAO_B_TITLE}
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            {OPCAO_B_DESC}
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
                    {'Mais popular'}
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

                <div className={`rounded-[8px] px-3 py-2.5 mb-5 ${featured ? 'bg-black/10' : 'bg-black border border-border'}`}>
                  <p className={`text-[0.68rem] leading-snug ${featured ? 'text-black/60' : 'text-ink-tertiary'}`}>
                    <span className={`font-heading font-bold text-[0.62rem] uppercase tracking-wider block mb-0.5 ${featured ? 'text-black/50' : 'text-ink-tertiary'}`}>
                      {'Ideal se'}
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
                    {cta}{' \u2192'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── OPCAO C: FORMULARIO ── */}
      <section id="formulario" className="px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">

            <div className="lg:sticky lg:top-28">
              <SectionLabel text={'Op\u00e7\u00e3o C'} />
              <h2 className="font-heading font-bold text-2xl tracking-tight leading-tight mb-4">
                {OPCAO_C_TITLE}
                <br />
                <span className="text-accent">{OPCAO_C_SUBTITLE}</span>
              </h2>
              <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                {OPCAO_C_DESC}
              </p>
              <p className="text-sm text-ink-secondary">
                {OPCAO_C_EMAIL_TEXT}{' '}
                <a
                  href="mailto:contato@cogniverse.agency"
                  className="text-accent hover:underline"
                >
                  {'contato@cogniverse.agency'}
                </a>
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  )
}
