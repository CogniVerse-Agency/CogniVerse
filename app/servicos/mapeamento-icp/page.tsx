// app/servicos/mapeamento-icp/page.tsx
// CogniVerse Site — Next.js 14 App Router
// Página de produto: Mapeamento de ICP + Lista Qualificada

import type { Metadata } from 'next'
import Link from 'next/link'

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Mapeamento de ICP + Lista Qualificada — CogniVerse Agency',
  description:
    'Descubra exatamente quem é seu cliente ideal e receba uma lista de 100–150 leads qualificados e prontos para abordagem. Entrega em 10 dias úteis.',
  openGraph: {
    title: 'Mapeamento de ICP + Lista Qualificada — CogniVerse Agency',
    description:
      'ICP estratégico + lista de 100–150 leads qualificados. Entrega em 10 dias úteis.',
    url: 'https://cogniverse-agency.vercel.app/servicos/mapeamento-icp',
  },
}

// ─── DADOS ───────────────────────────────────────────────────────────────────

const phases = [
  {
    num: '01',
    label: 'Dias 1–3',
    title: 'Kickoff & Descoberta',
    items: [
      'Formulário de descoberta preenchido',
      'Call de 45–60 min com o founder',
      'Validação das hipóteses de ICP',
      'Definição dos 2–3 segmentos a mapear',
    ],
  },
  {
    num: '02',
    label: 'Dias 4–7',
    title: 'ICP Estratégico + Pesquisa',
    items: [
      'Redação do Documento de ICP estratégico',
      'Pesquisa no LinkedIn Sales Navigator + Apollo',
      'Curadoria manual de 100–150 contatos',
      'Score de fit: Alto / Médio / Baixo por lead',
    ],
  },
  {
    num: '03',
    label: 'Dias 8–9',
    title: 'QA e Revisão Interna',
    items: [
      'Verificação de duplicatas e dados incompletos',
      'Revisão de consistência do score com o ICP',
      'Checagem ortográfica e coerência do documento',
      'Aprovação final por Weber antes da entrega',
    ],
  },
  {
    num: '04',
    label: 'Dia 10',
    title: 'Handoff + Entrega',
    items: [
      'Loom de 15–20 min explicando a lista e o ICP',
      'Planilha (.xlsx) com todos os leads',
      'PDF do Documento de ICP estratégico',
      'Próximos passos recomendados por segmento',
    ],
  },
]

const deliverables = [
  {
    num: '01',
    title: 'Documento de ICP Estratégico',
    desc: 'Perfil detalhado do cliente ideal: setor, porte, cargo, dores, contexto de compra, critérios de qualificação e desqualificação. Nos 2–3 segmentos mais promissores.',
  },
  {
    num: '02',
    title: 'Lista de 100–150 Leads Qualificados',
    desc: 'Planilha com nome, cargo, empresa, setor, porte, LinkedIn verificado, e-mail (quando confirmado) e score de fit. Mínimo 60% com score Alto.',
  },
  {
    num: '03',
    title: 'Score de Fit por Lead',
    desc: 'Cada contato classificado como Alto, Médio ou Baixo fit com base no ICP definido. Você sabe com quem falar primeiro — sem julgamento por intuição.',
  },
  {
    num: '04',
    title: 'Loom de Handoff (15–20 min)',
    desc: 'Vídeo assíncrono explicando o ICP, como navegar a lista, como interpretar os scores e qual canal de abordagem usar por segmento.',
  },
]

const painPoints = [
  {
    title: 'Você prospecta muito, fecha pouco',
    desc: 'Sem um ICP claro, o esforço de venda se dispersa em leads que nunca vão comprar. Cada abordagem sem critério é tempo e energia desperdiçados.',
  },
  {
    title: 'Seus "melhores clientes" não têm perfil definido',
    desc: 'Você sabe que alguns clientes são melhores do que outros — mas não consegue articular exatamente por quê, e menos ainda replicar esse perfil sistematicamente.',
  },
  {
    title: 'Monta lista na base do Google e do feeling',
    desc: 'Planilhas montadas manualmente, sem critério de fit, sem dados de contato verificados. O pipeline parece cheio, mas na prática não converte.',
  },
  {
    title: 'Não tem tempo pra fazer pesquisa de leads com qualidade',
    desc: 'Pesquisa de mercado séria leva semanas. Com o Mapeamento de ICP, a CogniVerse entrega em 10 dias — com rigor metodológico que seu time não teria capacidade de replicar no mesmo prazo.',
  },
]

const qualityStandards = [
  { label: 'Leads entregues', value: '100–150', sub: 'por mapeamento' },
  { label: 'Score Alto mínimo', value: '60%', sub: 'da lista total' },
  { label: 'E-mails inventados', value: 'zero', sub: 'política interna rígida' },
  { label: 'Prazo de entrega', value: '10 dias', sub: 'a partir do kickoff' },
]

const cases = [
  {
    company: 'GrowthLab',
    segment: 'Startup · B2B',
    kpi: 'Sistema operacional completo + ICP validado em 30 dias',
    roi: 'Economia de 15h/semana reportada pelo founder · ROI: 280%',
    note: 'Founder pediu indicação para 2 outros founders após entrega.',
    status: 'Concluído',
  },
]

const faqs = [
  {
    q: 'A lista inclui e-mails dos leads?',
    a: 'Incluímos e-mails apenas quando confirmados com certeza — nunca adivinhados. Por padrão, todos os leads têm URL do LinkedIn verificada. E-mails confirmados aparecem quando disponíveis na pesquisa.',
  },
  {
    q: 'Posso escolher o segmento ou mercado a ser mapeado?',
    a: 'Sim. A call de descoberta serve exatamente para isso — você traz suas hipóteses e a CogniVerse valida, aprofunda e define os 2–3 segmentos com maior potencial com base nos seus melhores clientes atuais.',
  },
  {
    q: 'Qual ferramenta é usada para pesquisar leads?',
    a: 'LinkedIn Sales Navigator e Apollo (free tier), com curadoria manual. Não usamos scraping automatizado genérico — cada lead passa por revisão humana antes de entrar na lista.',
  },
  {
    q: 'O que acontece se os 10 dias não forem suficientes?',
    a: 'Atrasos de até 2 dias são comunicados proativamente ao cliente. Acima de 3 dias, Weber notifica pessoalmente. Na prática, 90% das entregas ocorrem no prazo ou antes.',
  },
  {
    q: 'O Mapeamento de ICP é um pré-requisito para os outros produtos?',
    a: 'Não é obrigatório, mas é o ponto de partida mais natural. Um ICP bem definido multiplica o resultado do Sprint de Ecossistema Digital e da Auditoria de IA — porque todos os sistemas são construídos em cima do perfil certo.',
  },
  {
    q: 'Posso usar a lista para automação de outreach?',
    a: 'Sim. A lista é entregue em formato .xlsx estruturado exatamente para isso. Cada campo está padronizado para importação direta em ferramentas de outreach como Apollo, Lemlist ou sequências via N8N/Make.',
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

export default function MapeamentoICPPage() {
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
          <Badge>Consultoria Assistida · 10 dias úteis</Badge>

          <h1 className="font-heading font-extrabold tracking-tight leading-[1.05] mt-6 mb-5 text-[clamp(2.8rem,6vw,5rem)]">
            Pare de prospectar<br />
            <span className="text-accent">no escuro.</span>
          </h1>

          <p className="text-ink-secondary font-light text-lg leading-relaxed max-w-xl mb-10">
            Definimos exatamente quem é seu cliente ideal e entregamos uma lista de
            100–150 leads qualificados, com score de fit e dados verificados —
            prontos para abordagem.
          </p>

          {/* meta stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { val: '10 dias', label: 'Prazo de entrega' },
              { val: '100–150', label: 'Leads qualificados' },
              { val: '≥60%', label: 'Score Alto garantido' },
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
              <span className="font-heading font-extrabold text-3xl text-accent">R$1.800</span>
              <span className="text-sm text-ink-tertiary">· pagamento único</span>
            </div>
            <Link
              href="/contato"
              className="font-heading font-bold text-sm tracking-wide bg-accent text-black rounded-pill px-7 py-3 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Solicitar Mapeamento →
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5">
            {[
              'ICP estratégico documentado',
              'Lista verificada — zero e-mails inventados',
              'Loom de handoff incluso',
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
            Você até prospecta.<br />
            Mas prospecta <span className="text-accent">as pessoas certas?</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Sem ICP claro e lista qualificada, o esforço de venda se perde em leads que nunca vão comprar.
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

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── COMO FUNCIONA ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>02 — Como Funciona</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            10 dias úteis.<br />
            4 fases. <span className="text-accent">1 lista pronta para usar.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-12">
            Processo estruturado com call de descoberta, produção interna e QA rigoroso antes de qualquer entrega.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map(({ num, label, title, items }) => (
              <div
                key={num}
                className="bg-black border border-border rounded-card p-6 hover:border-accent/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-heading font-extrabold text-4xl text-accent/15 leading-none">{num}</span>
                  <span className="font-heading text-[0.6rem] font-bold tracking-[0.15em] uppercase text-accent/60 text-right">
                    {label}
                  </span>
                </div>
                <p className="font-heading font-bold text-sm text-ink-primary mb-4">{title}</p>
                <ul className="space-y-2">
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

          {/* nota metodológica */}
          <div className="mt-8 flex items-start gap-3 bg-accent/[0.05] border border-accent/15 rounded-card px-5 py-4">
            <span className="text-accent text-lg flex-shrink-0 mt-0.5">🔍</span>
            <p className="text-sm text-ink-secondary leading-relaxed">
              <strong className="text-ink-primary">Curadoria manual, não automação.</strong>{' '}
              Cada lead passa por revisão humana antes de entrar na lista. Usamos LinkedIn Sales Navigator
              e Apollo como fontes — mas a decisão de incluir ou excluir cada contato é feita pela equipe,
              com base no ICP definido na call de descoberta.
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
            Não uma lista genérica.<br />
            Um <span className="text-accent">ativo de prospecção</span> do seu negócio.
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Cada entregável é construído a partir da sua call de descoberta. Nada de template copy-paste.
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

      {/* ── PADRÕES DE QUALIDADE ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>04 — Padrões de Qualidade</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Critérios que <span className="text-accent">não são negociáveis.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Toda lista passa por QA interno antes de chegar ao cliente. Esses são os critérios mínimos de entrega.
          </p>

          {/* métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {qualityStandards.map(({ label, value, sub }) => (
              <div key={label} className="bg-black border border-border rounded-card p-5 text-center">
                <p className="font-heading font-bold text-2xl text-accent leading-none mb-1">{value}</p>
                <p className="font-heading text-[0.72rem] font-bold text-ink-primary uppercase tracking-wide mt-1 mb-0.5">{label}</p>
                <p className="text-[0.68rem] text-ink-tertiary">{sub}</p>
              </div>
            ))}
          </div>

          {/* checklist QA */}
          <div className="bg-black border border-border rounded-card overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <p className="font-heading font-bold text-sm text-ink-primary">
                Checklist de QA — aplicado em toda entrega
              </p>
            </div>
            {[
              'Zero linhas duplicadas (mesmo nome + empresa)',
              'Campos obrigatórios preenchidos: Nome, Cargo, Empresa, LinkedIn, Score',
              'E-mails no formato correto quando presentes — nunca adivinhados',
              'Score de fit consistente com o ICP definido na call',
              'Leads de segmentos fora do ICP marcados como Baixo ou removidos',
              'Documento de ICP revisado para ortografia e coerência',
              'Aprovação final de Weber antes de qualquer envio',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-5 py-3.5 border-b border-border last:border-0 hover:bg-surface transition-colors"
              >
                <span className="text-accent flex-shrink-0 mt-0.5 text-sm">✓</span>
                <p className="text-sm text-ink-secondary leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── CASE ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>05 — Resultado Real</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-10">
            O que um founder descobriu<br />
            com o <span className="text-accent">ICP certo.</span>
          </h2>

          {cases.map(({ company, segment, kpi, roi, note, status }) => (
            <div key={company} className="bg-surface border border-border rounded-card p-8 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-heading font-bold text-xl text-ink-primary">{company}</p>
                  <p className="text-sm text-ink-tertiary mt-0.5">{segment}</p>
                </div>
                <span className="font-heading text-[0.6rem] font-bold tracking-[0.12em] uppercase rounded-pill px-3 py-1 bg-[rgba(0,212,160,0.1)] text-[#00D4A0] border border-[rgba(0,212,160,0.2)] flex-shrink-0">
                  {status}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div className="flex gap-2">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-sm text-ink-secondary">{kpi}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-accent flex-shrink-0 mt-0.5">↑</span>
                  <p className="text-sm font-medium text-ink-primary">{roi}</p>
                </div>
              </div>
              <div className="bg-accent/[0.05] border border-accent/15 rounded-[10px] px-4 py-3">
                <p className="text-[0.78rem] text-ink-secondary italic">{'"'}{note}{'"'}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── INVESTIMENTO ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-surface">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>06 — Investimento</SectionLabel>
          <h2 className="font-heading font-bold text-[clamp(1.8rem,4vw,3rem)] tracking-tight leading-[1.15] mb-2">
            Um ativo que você usa<br />
            <span className="text-accent">por meses.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-10">
            Uma lista bem feita não fica obsoleta em 30 dias. O ICP documentado orienta toda sua estratégia de aquisição.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* card preço */}
            <div className="bg-accent rounded-card p-7">
              <span className="inline-block font-heading text-[0.62rem] font-bold tracking-[0.15em] uppercase bg-black text-accent rounded-pill px-3 py-1 mb-5">
                Preço único
              </span>
              <p className="font-heading font-extrabold text-[2.8rem] text-black leading-none mb-1">R$1.800</p>
              <p className="text-sm text-black/60 mb-6">Pagamento único · entrega em 10 dias úteis</p>
              <hr className="border-black/10 mb-5" />
              <ul className="space-y-2 mb-6">
                {[
                  'Documento de ICP estratégico (PDF)',
                  'Lista de 100–150 leads qualificados (.xlsx)',
                  'Score de fit por lead (Alto/Médio/Baixo)',
                  'Loom de handoff 15–20 min',
                  'Follow-up D+7 incluído',
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
                Solicitar Mapeamento →
              </Link>
            </div>

            {/* próximos passos */}
            <div className="flex flex-col gap-4">
              <div className="bg-black border border-border rounded-card p-6">
                <p className="font-heading font-bold text-[0.72rem] uppercase tracking-widest text-accent mb-3">Incluso sem custo extra</p>
                <p className="font-heading font-bold text-base text-ink-primary mb-2">
                  Follow-up D+7
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  7 dias após a entrega, a CogniVerse faz follow-up para garantir que você está usando a lista,
                  tirar dúvidas sobre o ICP e confirmar próximos passos.
                </p>
              </div>

              <div className="bg-black border border-accent/15 rounded-card p-6">
                <p className="font-heading font-bold text-[0.72rem] uppercase tracking-widest text-accent mb-3">Naturalmente, o próximo passo</p>
                <p className="font-heading font-bold text-base text-ink-primary mb-2">
                  Sprint de Ecossistema Digital
                </p>
                <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                  Com o ICP definido, o Sprint constrói todo o sistema de captação em cima do perfil certo.
                  Os dois produtos juntos são a base de um funil de aquisição completo.
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/servicos/sprint" className="font-heading font-semibold text-sm text-accent hover:underline">
                    Ver Sprint de Ecossistema →
                  </Link>
                  <Link href="/servicos/auditoria-ia" className="font-heading font-semibold text-sm text-ink-tertiary hover:text-accent transition-colors">
                    Ver Auditoria de IA →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border mx-6 md:mx-16 lg:mx-24" />

      {/* ── FAQ ── */}
      <section className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>07 — Perguntas Frequentes</SectionLabel>
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
            Em 10 dias você sabe<br />
            <span className="text-accent">exatamente com quem falar.</span>
          </h2>
          <p className="text-ink-secondary font-light mb-8 leading-relaxed">
            ICP estratégico documentado. Lista qualificada. Score de fit por contato.
            Pronto para abordagem imediata.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contato"
              className="font-heading font-bold text-sm tracking-wide bg-accent text-black rounded-pill px-8 py-3.5 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              Solicitar Mapeamento de ICP →
            </Link>
            <Link
              href="/"
              className="font-heading font-semibold text-sm text-ink-secondary border border-border rounded-pill px-8 py-3.5 hover:text-ink-primary hover:border-border-hover transition-all"
            >
              Ver todos os serviços
            </Link>
          </div>
          <p className="text-[0.78rem] text-ink-tertiary mt-5">
            R$1.800 · pagamento único · entrega em 10 dias úteis
          </p>
        </div>
      </section>

    </main>
  )
}
