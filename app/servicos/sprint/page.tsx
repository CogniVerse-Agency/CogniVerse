// app/servicos/sprint/page.tsx
// CogniVerse Site — Next.js 14 App Router
// Página de produto: Sprint de Ecossistema Digital

import type { Metadata } from 'next'
import Link from 'next/link'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Sprint de Ecossistema Digital — CogniVerse Agency',
  description:
    'Em 30 dias implementamos sua presença multi-plataforma integrada: captação automatizada, fluxos de nutrição e CRM. R$3.200 à vista.',
  openGraph: {
    title: 'Sprint de Ecossistema Digital — CogniVerse Agency',
    description:
      'Em 30 dias implementamos sua presença multi-plataforma integrada: captação automatizada, fluxos de nutrição e CRM.',
    url: 'https://cogniverse-agency.vercel.app/servicos/sprint',
  },
}

// ─── DADOS ───────────────────────────────────────────────────────────────────

const weeks = [
  {
    label: 'Semana 1',
    title: 'Discovery & Arquitetura',
    items: [
      'Auditoria de presença atual',
      'Mapeamento de ICP e jornada',
      'Definição da stack de ferramentas',
      'Arquitetura do ecossistema',
    ],
  },
  {
    label: 'Semana 2',
    title: 'Setup Multi-Plataforma',
    items: [
      'Configuração de perfis e páginas',
      'Setup de CRM (Notion + integração)',
      'Formulários e landing de captação',
      'Pixel e tags de rastreamento',
    ],
  },
  {
    label: 'Semana 3',
    title: 'Automações & Fluxos',
    items: [
      'Fluxo de boas-vindas automatizado',
      'Sequência de nutrição (5–7 e-mails)',
      'Integração Make/N8N conectando tudo',
      'Notificações de lead em tempo real',
    ],
  },
  {
    label: 'Semana 4',
    title: 'Validação & Entrega',
    items: [
      'Testes end-to-end de todos os fluxos',
      'Relatório de resultados + métricas',
      'Documentação de SOPs internos',
      'Handoff + call de encerramento',
    ],
  },
]

const deliverables = [
  {
    num: '01',
    title: 'Ecossistema Multi-Plataforma',
    desc: 'Perfis configurados, otimizados e interconectados onde seu ICP está — prontos pra operar.',
  },
  {
    num: '02',
    title: 'Sistema de Captação Automatizado',
    desc: 'Formulários, landing pages e integrações que coletam e classificam leads sem intervenção manual.',
  },
  {
    num: '03',
    title: 'Fluxos de Nutrição',
    desc: 'Sequência de e-mails segmentados que trabalham 24/7, aquecendo leads até o momento certo.',
  },
  {
    num: '04',
    title: 'CRM Integrado (Notion)',
    desc: 'Pipeline de leads centralizado com automação de status e visibilidade total do funil.',
  },
  {
    num: '05',
    title: 'Integrações Make / N8N',
    desc: 'Um lead entra, o sistema inteiro sabe — sem planilha manual, sem nada perdido.',
  },
  {
    num: '06',
    title: 'Relatório Final + SOPs',
    desc: 'Documentação completa de tudo que foi construído. Você opera sem depender da agência.',
  },
]

const painPoints = [
  {
    title: 'Sem tempo pra construir',
    desc: 'Você pilota produto, vendas e equipe ao mesmo tempo. Presença digital fica sempre pra "depois".',
  },
  {
    title: 'Ferramentas desconectadas',
    desc: 'CRM num lugar, automação em outro, leads caindo no WhatsApp. Nenhuma fonte única de verdade.',
  },
  {
    title: 'Leads que somem',
    desc: 'Sem fluxo de nutrição, leads interessados esfriam antes do follow-up. Receita perdida silenciosamente.',
  },
  {
    title: 'Agência = custo fixo alto',
    desc: 'Agências tradicionais cobram R$5–8k/mês pra gerenciar rede social. Você paga pela presença deles, não pelos seus resultados.',
  },
]

// ─── COMPONENTES INTERNOS ─────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-heading text-[0.65rem] font-bold tracking-[0.18em] uppercase text-accent border border-accent/20 bg-accent/8 rounded-pill px-3 py-1">
      {children}
    </span>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-heading text-[0.65rem] font-bold tracking-[0.2em] uppercase text-accent mb-2">
      {children}
    </p>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function SprintPage() {
  return (
    <main className="bg-black text-ink-primary font-body">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 overflow-hidden">
        {/* glow decorativo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200,255,62,0.07) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl">
          <Badge>Productized Service · 30 dias</Badge>

          <h1 className="font-heading font-extrabold tracking-tight leading-[1.05] mt-6 mb-5 text-[clamp(2.8rem,6vw,5rem)]">
            Sua presença digital<br />
            funcionando como{' '}
            <span className="text-accent">máquina</span><br />
            de aquisição.
          </h1>

          <p className="text-ink-secondary font-light text-lg leading-relaxed max-w-xl mb-10">
            Em 30 dias implantamos seu ecossistema multi-plataforma completo —
            com automação de captação, fluxos de nutrição e CRM integrado.
            Sem contratar equipe.
          </p>

          {/* meta stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { val: '30', label: 'Dias de Sprint' },
              { val: '4', label: 'Semanas Estruturadas' },
              { val: '100%', label: 'Assíncrono' },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="font-heading font-bold text-3xl leading-none">{val}</p>
                <p className="text-[0.72rem] text-ink-tertiary uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* price + CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-baseline gap-2 bg-accent/8 border border-accent/20 rounded-card px-5 py-3">
              <span className="font-heading font-extrabold text-3xl text-accent">R$3.200</span>
              <span className="text-sm text-ink-tertiary">à vista</span>
            </div>
            <Link
              href="/contato"
              className="font-heading font-bold text-sm tracking-wide bg-accent text-black rounded-pill px-7 py-3 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Agendar Discovery Call →
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5">
            {['Onboarding em menos de 7 dias', 'Metodologia 100% assíncrona', 'ROI mensurável em 30 dias'].map(item => (
              <p key={item} className="text-sm text-ink-secondary flex items-center gap-2">
                <span className="text-accent">✓</span> {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── PROBLEMA ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>01 — O Problema</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Founders não faltam <span className="text-accent">intenção.</span><br />
            Faltam sistemas.
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Você sabe que precisa de presença digital. O problema é que construir tudo do zero
            consome um tempo que você não tem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-card overflow-hidden">
            {painPoints.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-black p-8 hover:bg-surface transition-colors"
              >
                <p className="font-heading font-bold text-base text-ink-primary mb-2">{title}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── SOLUÇÃO / TIMELINE ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>02 — A Solução</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            30 dias. 4 semanas.<br />
            Um ecossistema <span className="text-accent">funcionando.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-12">
            Cada semana tem entregáveis claros. Você sabe o que está sendo construído — e quando vai estar pronto.
          </p>

          {/* timeline */}
          <div className="relative">
            {/* linha horizontal */}
            <div
              className="hidden md:block absolute left-0 right-0 h-px top-[10px]"
              style={{ background: 'linear-gradient(90deg, #C8FF3E 0%, rgba(200,255,62,0.1) 100%)' }}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {weeks.map(({ label, title, items }) => (
                <div key={label} className="relative pt-0 md:pt-8">
                  {/* dot na linha */}
                  <div className="hidden md:block absolute top-[-4px] left-0 w-3 h-3 rounded-full bg-accent border-2 border-black" />

                  <p className="font-heading text-[0.65rem] font-bold tracking-[0.15em] uppercase text-accent mb-1 md:mt-0">
                    {label}
                  </p>
                  <p className="font-heading font-bold text-[0.95rem] text-ink-primary mb-3">{title}</p>
                  <ul className="space-y-1.5">
                    {items.map(item => (
                      <li key={item} className="text-[0.78rem] text-ink-secondary flex gap-2 leading-snug">
                        <span className="text-accent/40 flex-shrink-0 mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── ENTREGÁVEIS ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>03 — O Que Você Recebe</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Entregáveis concretos,<br />
            não <span className="text-accent">promessas.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Cada item é documentado, testado e entregue em formato operável. Não é consultoria — é implementação.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map(({ num, title, desc }) => (
              <div
                key={num}
                className="bg-surface border border-border rounded-card p-6 hover:border-accent/25 hover:bg-accent/[0.03] transition-all"
              >
                <p className="font-heading font-extrabold text-3xl text-accent/15 leading-none mb-3">{num}</p>
                <p className="font-heading font-bold text-sm text-ink-primary mb-2">{title}</p>
                <p className="text-[0.78rem] text-ink-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── ROI ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>04 — O Retorno</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Quanto vale <span className="text-accent">1 cliente extra</span><br />
            por mês no seu negócio?
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Se o seu ticket médio é R$3k, o Sprint se paga no primeiro cliente que o sistema captar pra você.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* antes */}
            <div className="rounded-card p-6 bg-black border border-[rgba(255,90,60,0.15)]">
              <p className="font-heading text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#FF5A3C] mb-4">Antes do Sprint</p>
              <ul className="space-y-3">
                {[
                  'Leads chegando de boca a boca, sem previsibilidade',
                  'Follow-up manual e inconsistente',
                  'Sem visibilidade de funil — cada lead é uma missão de rastreamento',
                  'Presença digital fragmentada e sem coerência',
                  'Tempo do founder consumido por operacional',
                ].map(item => (
                  <li key={item} className="text-sm text-ink-secondary flex gap-2 leading-snug">
                    <span className="text-[#FF5A3C]/60 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* depois */}
            <div className="rounded-card p-6 bg-black border border-[rgba(0,212,160,0.15)]">
              <p className="font-heading text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#00D4A0] mb-4">Depois do Sprint</p>
              <ul className="space-y-3">
                {[
                  'Fluxo de leads contínuo e automatizado',
                  'Nutrição rodando 24/7 sem toque manual',
                  'Pipeline visual — você sabe onde cada lead está',
                  'Presença integrada e consistente em todas as plataformas',
                  'Founder livre pra fechar, não pra operar',
                ].map(item => (
                  <li key={item} className="text-sm text-ink-secondary flex gap-2 leading-snug">
                    <span className="text-[#00D4A0]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* números */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { val: '72h', label: 'Tempo de resposta do sistema ao lead' },
              { val: '100%', label: 'Documentado para operar sem suporte' },
              { val: '30 dias', label: 'Do kick-off à entrega completa' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-black border border-border rounded-card p-5 text-center">
                <p className="font-heading font-bold text-2xl text-accent leading-none mb-2">{val}</p>
                <p className="text-[0.72rem] text-ink-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── INVESTIMENTO ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>05 — Investimento</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Transparente.<br />
            <span className="text-accent">Sem surpresas.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Preço fixo. Escopo claro. Sem mensalidade obrigatória.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* à vista */}
            <div className="flex-1 bg-accent rounded-card p-7 relative overflow-hidden">
              <span className="inline-block font-heading text-[0.62rem] font-bold tracking-[0.15em] uppercase bg-black text-accent rounded-pill px-3 py-1 mb-5">
                Recomendado
              </span>
              <p className="font-heading font-extrabold text-[2.8rem] text-black leading-none mb-1">R$3.200</p>
              <p className="text-sm text-black/60 mb-6">Pagamento único à vista</p>
              <hr className="border-black/10 mb-5" />
              <ul className="space-y-2">
                {[
                  'Sprint completo de 30 dias',
                  'Todos os 6 entregáveis inclusos',
                  'Documentação e SOPs completos',
                  'Call de kickoff + call de encerramento',
                  '5% de desconto vs parcelado',
                ].map(item => (
                  <li key={item} className="text-sm text-black flex gap-2">
                    <span className="text-black/50">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* parcelado */}
            <div className="flex-1 bg-surface border border-border rounded-card p-7">
              <span className="inline-block font-heading text-[0.62rem] font-bold tracking-[0.15em] uppercase bg-white/8 text-ink-tertiary rounded-pill px-3 py-1 mb-5">
                Parcelado
              </span>
              <p className="font-heading font-extrabold text-[2.5rem] text-ink-primary leading-none mb-1">R$1.700 × 2</p>
              <p className="text-sm text-ink-tertiary mb-6">50% na assinatura · 50% na entrega</p>
              <hr className="border-border mb-5" />
              <ul className="space-y-2">
                {[
                  'Mesmo escopo completo',
                  'Pagamento vinculado à entrega',
                  'Ideal para validar com menos risco',
                  'Segunda parcela só após aprovação',
                ].map(item => (
                  <li key={item} className="text-sm text-ink-secondary flex gap-2">
                    <span className="text-accent/40">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* garantia */}
          <div className="flex gap-3 bg-surface border border-border rounded-card p-5">
            <span className="text-xl flex-shrink-0">🛡</span>
            <p className="text-sm text-ink-secondary leading-relaxed">
              <strong className="text-ink-primary">Garantia de escopo:</strong>{' '}
              Se na entrega final qualquer um dos 6 entregáveis não estiver funcionando conforme documentado,
              trabalhamos até estar — sem custo adicional.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── CTA ── */}
      <section className="relative px-6 md:px-16 lg:px-24 py-32 text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(200,255,62,0.05) 0%, transparent 65%)' }}
        />
        <div className="max-w-xl mx-auto relative">
          <p className="font-heading text-[0.7rem] font-bold tracking-[0.2em] uppercase text-accent mb-5">
            Próximo Passo
          </p>
          <h2 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,4rem)] tracking-tight leading-[1.05] mb-5">
            Pronto para sair do{' '}
            <span className="text-accent">improviso</span>{' '}
            pra sistema?
          </h2>
          <p className="text-ink-secondary font-light mb-8 leading-relaxed">
            Agende uma Discovery Call de 30 minutos. Diagnóstico gratuito do seu maior gargalo de aquisição.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="font-heading font-bold text-sm tracking-wide bg-accent text-black rounded-pill px-8 py-3.5 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Agendar Discovery Call →
            </Link>
            <Link
              href="/"
              className="font-heading font-semibold text-sm text-ink-secondary border border-border rounded-pill px-8 py-3.5 hover:text-ink-primary hover:border-border-hover transition-all"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
