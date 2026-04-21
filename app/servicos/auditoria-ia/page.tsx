// app/servicos/auditoria-ia/page.tsx
// CogniVerse Site — Next.js 14 App Router
// Página de produto: Auditoria de IA CogniVerse

import type { Metadata } from 'next'
import Link from 'next/link'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Auditoria de IA — CogniVerse Agency',
  description:
    'Diagnóstico operacional completo em 48h: mapeamos todos os gargalos do seu negócio e entregamos um plano de automação priorizado e pronto para execução.',
  openGraph: {
    title: 'Auditoria de IA — CogniVerse Agency',
    description:
      'Diagnóstico operacional completo em 48h: mapeamos gargalos e entregamos um plano de automação priorizado.',
    url: 'https://cogniverse-agency.vercel.app/servicos/auditoria-ia',
  },
}

// ─── DADOS ───────────────────────────────────────────────────────────────────

const phases = [
  {
    num: '01',
    label: 'Intake',
    duration: 'Dia 1 — manhã',
    title: 'Mapeamento Operacional',
    items: [
      'Formulário de diagnóstico estruturado',
      'Levantamento de ferramentas e stack atual',
      'Mapeamento de processos críticos do negócio',
      'Identificação de volumes e frequências',
    ],
  },
  {
    num: '02',
    label: 'Análise',
    duration: 'Dia 1 — tarde',
    title: 'Diagnóstico com IA',
    items: [
      'Análise via modelo LLM especializado (Qwen3-32B)',
      'Identificação de gargalos de alto impacto',
      'Avaliação de maturidade de automação',
      'Cálculo de ROI potencial por área',
    ],
  },
  {
    num: '03',
    label: 'Entrega',
    duration: 'Dia 2',
    title: 'Plano de Ação',
    items: [
      'Relatório executivo com priorização clara',
      'Mapa de automações por urgência e impacto',
      'Estimativa de economia de tempo e custo',
      'Recomendação de stack ideal para o estágio atual',
    ],
  },
]

const deliverables = [
  {
    num: '01',
    title: 'Relatório Executivo',
    desc: 'Documento estruturado com o diagnóstico completo da operação — em linguagem de founder, não de consultor.',
  },
  {
    num: '02',
    title: 'Mapa de Automações',
    desc: 'Lista priorizada de automações por impacto e viabilidade. O que implementar primeiro, segundo e terceiro.',
  },
  {
    num: '03',
    title: 'Plano de Ação',
    desc: 'Roadmap de 30/60/90 dias com as iniciativas mais rentáveis e os recursos necessários para cada uma.',
  },
  {
    num: '04',
    title: 'Estimativa de ROI',
    desc: 'Projeção de economia de tempo, redução de custo operacional e receita potencial desbloqueada por cada automação.',
  },
]

const cases = [
  {
    company: 'GrowthLab Ventures',
    segment: 'Venture Capital · B2B',
    kpi: '12 oportunidades de automação mapeadas',
    roi: 'R$180k em economia anual potencial identificada',
    delivery: 'Entregue em 48h',
    status: 'Concluído',
  },
  {
    company: 'TechFlow Solutions',
    segment: 'SaaS B2B · 120 usuários ativos',
    kpi: 'Automação de suporte + qualificação de leads via IA',
    roi: 'Projeção de ROI 340% em 6 meses',
    delivery: 'Auditoria → Sprint iniciado',
    status: 'Em andamento',
  },
]

const painPoints = [
  {
    title: 'Você sente que tem gargalos, mas não sabe exatamente onde',
    desc: 'O tempo some sem que você consiga identificar o que está consumindo mais recurso — e o que traria mais retorno se fosse resolvido.',
  },
  {
    title: 'Já tentou automatizar, mas não sabe por onde começar',
    desc: 'O mercado de ferramentas de IA é enorme e confuso. Sem um diagnóstico claro, você acaba pagando por ferramentas que não resolvem o problema certo.',
  },
  {
    title: 'Sua operação cresce, mas o esforço manual cresce junto',
    desc: 'Cada novo cliente ou processo adiciona complexidade manual. A escala que deveria liberar seu tempo está consumindo mais dele.',
  },
  {
    title: 'Você não tem tempo pra fazer um levantamento detalhado',
    desc: 'Um diagnóstico interno levaria semanas e ainda ficaria enviesado. Em 48h, a CogniVerse faz isso com metodologia estruturada e visão externa.',
  },
]

const faqs = [
  {
    q: 'A Auditoria é presencial ou remota?',
    a: '100% remota e assíncrona. Nenhuma reunião longa necessária. Você preenche o formulário de diagnóstico, nós analisamos e entregamos o relatório no prazo.',
  },
  {
    q: 'Precisa ter experiência com IA ou automação?',
    a: 'Não. A Auditoria funciona exatamente para quem ainda não tem estrutura de automação — e para quem tem mas não sabe o que priorizar. O relatório é escrito em linguagem de negócio, não técnica.',
  },
  {
    q: 'O que acontece após a Auditoria?',
    a: 'Você recebe um plano de ação priorizado. Se quiser executar, o Sprint de Ecossistema Digital é o próximo passo natural — e o valor da Auditoria é descontado do Sprint.',
  },
  {
    q: 'Em quanto tempo recebo o relatório?',
    a: 'Após o formulário preenchido, o relatório é entregue em até 48 horas úteis. Sem enrolação, sem call de apresentação obrigatória — você lê no seu tempo.',
  },
  {
    q: 'Meu negócio é muito pequeno pra isso valer a pena?',
    a: 'O diagnóstico é mais valioso em estágios iniciais, quando cada hora do founder tem custo de oportunidade alto. Identificar 2 ou 3 automações certas pode liberar 10+ horas por semana.',
  },
]

// ─── COMPONENTES INTERNOS ─────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-heading text-[0.65rem] font-bold tracking-[0.18em] uppercase text-accent border border-accent/20 bg-accent/[0.08] rounded-pill px-3 py-1">
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

export default function AuditoriaIAPage() {
  return (
    <main className="bg-black text-ink-primary font-body">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200,255,62,0.07) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl">
          <Badge>Diagnóstico Operacional · 48h</Badge>

          <h1 className="font-heading font-extrabold tracking-tight leading-[1.05] mt-6 mb-5 text-[clamp(2.8rem,6vw,5rem)]">
            Descubra exatamente onde<br />
            a IA pode <span className="text-accent">transformar</span><br />
            sua operação.
          </h1>

          <p className="text-ink-secondary font-light text-lg leading-relaxed max-w-xl mb-10">
            Em 48 horas mapeamos todos os gargalos operacionais do seu negócio
            e entregamos um plano de automação priorizado e pronto para execução.
            Sem reuniões longas. Sem jargão técnico.
          </p>

          {/* meta stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { val: '48h', label: 'Prazo de entrega' },
              { val: '100%', label: 'Assíncrono' },
              { val: 'R$180k', label: 'Economia mapeada (GrowthLab)' },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="font-heading font-bold text-3xl leading-none">{val}</p>
                <p className="text-[0.72rem] text-ink-tertiary uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* price + CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-baseline gap-2 bg-accent/[0.08] border border-accent/20 rounded-card px-5 py-3">
              <span className="font-heading font-extrabold text-3xl text-accent">R$800</span>
              <span className="text-sm text-ink-tertiary">· desconta do Sprint</span>
            </div>
            <Link
              href="/contato"
              className="font-heading font-bold text-sm tracking-wide bg-accent text-black rounded-pill px-7 py-3 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Solicitar Auditoria →
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5">
            {[
              'Relatório entregue em até 48h',
              'Plano de ação priorizado incluído',
              'Valor descontado no Sprint',
            ].map(item => (
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
          <SectionLabel>01 — Para Quem É</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Você sente que pode automatizar mais.<br />
            Mas não sabe <span className="text-accent">o quê nem por onde.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            A Auditoria existe pra resolver exatamente essa ambiguidade — com metodologia, não com palpite.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-card overflow-hidden">
            {painPoints.map(({ title, desc }) => (
              <div key={title} className="bg-black p-8 hover:bg-surface transition-colors">
                <p className="font-heading font-bold text-base text-ink-primary mb-2">{title}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:px-24" />

      {/* ── COMO FUNCIONA ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>02 — Como Funciona</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            48 horas.<br />
            3 fases. <span className="text-accent">1 plano claro.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-12">
            Processo estruturado e assíncrono. Você não precisa estar disponível — só preencher o formulário de diagnóstico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map(({ num, label, duration, title, items }) => (
              <div key={num} className="relative">
                {/* conector horizontal entre cards (md+) */}
                <div className="hidden md:block absolute top-6 left-full w-6 h-px bg-accent/20 z-10" />

                <div className="bg-black border border-border rounded-card p-6 h-full hover:border-accent/20 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-heading font-extrabold text-4xl text-accent/15 leading-none">{num}</span>
                    <span className="font-heading text-[0.6rem] font-bold tracking-[0.15em] uppercase text-accent/60 text-right">
                      {label}<br />{duration}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-base text-ink-primary mb-4">{title}</p>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="text-[0.78rem] text-ink-secondary flex gap-2 leading-snug">
                        <span className="text-accent/40 flex-shrink-0 mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* powered by */}
          <div className="mt-8 flex items-center gap-3 bg-accent/[0.05] border border-accent/15 rounded-card px-5 py-4">
            <span className="text-accent text-lg flex-shrink-0">⚡</span>
            <p className="text-sm text-ink-secondary">
              <strong className="text-ink-primary">Powered by Qwen3-32B via Groq API.</strong>{' '}
              Análise assistida por LLM especializado em diagnóstico operacional — velocidade de processamento que nenhuma consultoria tradicional consegue entregar em 48h.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── ENTREGÁVEIS ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>03 — O Que Você Recebe</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Não um relatório genérico.<br />
            Um <span className="text-accent">plano operacional</span> do seu negócio.
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Cada entregável é construído com base nas respostas do seu formulário. Nada de template copy-paste.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      {/* ── CASES ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>04 — Resultados Reais</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            O que founders descobriram<br />
            nas <span className="text-accent">primeiras 48h.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Casos reais de auditorias conduzidas pela CogniVerse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map(({ company, segment, kpi, roi, delivery, status }) => (
              <div key={company} className="bg-black border border-border rounded-card p-6 hover:border-accent/20 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-heading font-bold text-base text-ink-primary">{company}</p>
                    <p className="text-[0.72rem] text-ink-tertiary mt-0.5">{segment}</p>
                  </div>
                  <span className={`font-heading text-[0.6rem] font-bold tracking-[0.12em] uppercase rounded-pill px-2.5 py-1 flex-shrink-0 ${
                    status === 'Concluído'
                      ? 'bg-[rgba(0,212,160,0.1)] text-[#00D4A0] border border-[rgba(0,212,160,0.2)]'
                      : 'bg-[rgba(200,255,62,0.08)] text-accent border border-accent/20'
                  }`}>
                    {status}
                  </span>
                </div>

                <div className="space-y-3 mt-4 pt-4 border-t border-border">
                  <div className="flex gap-2">
                    <span className="text-accent flex-shrink-0 text-sm">✓</span>
                    <p className="text-sm text-ink-secondary">{kpi}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent flex-shrink-0 text-sm">↑</span>
                    <p className="text-sm font-medium text-ink-primary">{roi}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-ink-tertiary flex-shrink-0 text-sm">⏱</span>
                    <p className="text-[0.78rem] text-ink-tertiary">{delivery}</p>
                  </div>
                </div>
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
            Preço fixo.<br />
            <span className="text-accent">Retorno mensurável.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Diagnóstico completo por uma fração do custo de uma consultoria tradicional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* card preço */}
            <div className="bg-accent rounded-card p-7">
              <span className="inline-block font-heading text-[0.62rem] font-bold tracking-[0.15em] uppercase bg-black text-accent rounded-pill px-3 py-1 mb-5">
                Preço único
              </span>
              <p className="font-heading font-extrabold text-[2.8rem] text-black leading-none mb-1">R$800</p>
              <p className="text-sm text-black/60 mb-6">Pagamento único · entrega em 48h</p>
              <hr className="border-black/10 mb-5" />
              <ul className="space-y-2 mb-6">
                {[
                  'Diagnóstico operacional completo',
                  'Relatório executivo personalizado',
                  'Mapa de automações priorizado',
                  'Plano de ação 30/60/90 dias',
                  'Estimativa de ROI por iniciativa',
                ].map(item => (
                  <li key={item} className="text-sm text-black flex gap-2">
                    <span className="text-black/50">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contato"
                className="block font-heading font-bold text-sm tracking-wide bg-black text-accent text-center rounded-pill px-7 py-3 hover:opacity-90 transition-all"
              >
                Solicitar Auditoria →
              </Link>
            </div>

            {/* bonus + upgrade */}
            <div className="flex flex-col gap-4">
              <div className="bg-surface border border-border rounded-card p-6">
                <p className="font-heading font-bold text-[0.72rem] uppercase tracking-widest text-accent mb-3">Bônus incluído</p>
                <p className="font-heading font-bold text-base text-ink-primary mb-2">
                  Sessão de alinhamento pós-relatório
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  30 minutos assíncronos via Loom ou call para tirar dúvidas sobre o plano entregue.
                  Sem custo adicional.
                </p>
              </div>

              <div className="bg-surface border border-accent/15 rounded-card p-6">
                <p className="font-heading font-bold text-[0.72rem] uppercase tracking-widest text-accent mb-3">Próximo passo natural</p>
                <p className="font-heading font-bold text-base text-ink-primary mb-2">
                  Sprint de Ecossistema Digital
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                  Aprovada a Auditoria, o Sprint executa o plano — e os R$800 da Auditoria são descontados
                  integralmente do investimento do Sprint.
                </p>
                <Link
                  href="/servicos/sprint"
                  className="font-heading font-semibold text-sm text-accent hover:underline"
                >
                  Ver Sprint de Ecossistema →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── FAQ ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>06 — Perguntas Frequentes</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,2.5rem)] tracking-tight leading-[1.15] mb-10">
            Dúvidas antes de <span className="text-accent">decidir.</span>
          </h2>

          <div className="divide-y divide-border">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-6">
                <p className="font-heading font-bold text-base text-ink-primary mb-2">{q}</p>
                <p className="text-sm text-ink-secondary leading-relaxed">{a}</p>
              </div>
            ))}
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
            Em 48h você sabe exatamente<br />
            <span className="text-accent">o que automatizar primeiro.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-8 leading-relaxed">
            Sem reuniões longas. Sem jargão técnico. Só um plano claro baseado na realidade do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="font-heading font-bold text-sm tracking-wide bg-accent text-black rounded-pill px-8 py-3.5 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Solicitar Auditoria de IA →
            </Link>
            <Link
              href="/"
              className="font-heading font-semibold text-sm text-ink-secondary border border-border rounded-pill px-8 py-3.5 hover:text-ink-primary hover:border-border-hover transition-all"
            >
              Ver todos os serviços
            </Link>
          </div>
          <p className="text-[0.78rem] text-ink-tertiary mt-5">
            R$800 · desconta integralmente no Sprint · entrega em 48h
          </p>
        </div>
      </section>

    </main>
  )
}
