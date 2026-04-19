export interface Service {
  slug: string
  name: string
  tagline: string
  meta: string
  description: string
  includes: string[]
  deliverables?: { id: string; title: string; description: string; tag: string }[]
  price?: { launch: string; regular: string; note: string }
  timeline?: { step: string; day: string; name: string }[]
  badge?: string
  icon: string
}

export const services: Service[] = [
  {
    slug: 'mapeamento-icp',
    name: 'Mapeamento de ICP + Lista Qualificada',
    tagline: 'Descubra exatamente quem vale prospectar.',
    meta: '10 dias úteis · Entrega assíncrona',
    description:
      'Um mapeamento estratégico do seu perfil de cliente ideal, com uma lista de até 150 leads B2B qualificados, prontos para abordagem. A gente faz a inteligência, você faz a abordagem.',
    includes: [
      'Sessão de descoberta (call 45 min)',
      'Documento de ICP Estratégico',
      'Lista de até 150 leads qualificados',
      'Score de Fit por lead (Alto/Médio/Baixo)',
      'Mapa de Segmentos Prioritários',
      'Handoff em vídeo (Loom)',
      'Suporte assíncrono pós-entrega (7 dias)',
      'Entrega em até 10 dias úteis',
    ],
    deliverables: [
      {
        id: 'E1',
        title: 'Documento de ICP Estratégico',
        description:
          'Perfil detalhado com setor, porte, cargo decisor, dores e gatilhos — com 2–3 segmentos rankeados.',
        tag: 'Doc',
      },
      {
        id: 'E2',
        title: 'Lista Qualificada — até 150 Leads B2B',
        description: 'Planilha com Nome, Cargo, Empresa, LinkedIn, E-mail e Score de Fit.',
        tag: 'Planilha',
      },
      {
        id: 'E3',
        title: 'Mapa de Segmentos Prioritários',
        description:
          'Visual com segmentos, tamanho de mercado e canal recomendado para cada um.',
        tag: 'Visual',
      },
      {
        id: 'E4',
        title: 'Handoff em Vídeo (Loom)',
        description: 'Vídeo de até 20 min explicando os entregáveis e próximos passos.',
        tag: 'Async',
      },
    ],
    price: { launch: 'R$ 997', regular: 'R$ 1.497', note: 'Pagamento único · sem mensalidade' },
    timeline: [
      { step: '01', day: 'Dia 1', name: 'Formulário de Descoberta' },
      { step: '02', day: 'Dias 2–3', name: 'Call de Kickoff (45 min)' },
      { step: '03', day: 'Dias 4–7', name: 'Pesquisa e Curadoria de Leads' },
      { step: '04', day: 'Dias 8–9', name: 'QA e Revisão Interna' },
      { step: '05', day: 'Dia 10', name: 'Entrega + Handoff em Vídeo' },
    ],
    icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    slug: 'auditoria-ia',
    name: 'Auditoria de IA CogniVerse',
    tagline: 'Mapeamos seus gargalos. Entregamos o plano.',
    meta: '48h de diagnóstico',
    description:
      'Mapeamos todos os gargalos operacionais do seu negócio e entregamos um plano de automação pronto para execução.',
    includes: [
      'Diagnóstico operacional completo',
      'Mapa de automações priorizadas',
      'Plano de ação com ROI estimado',
      'Relatório executivo em PDF',
    ],
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    slug: 'sprint',
    name: 'Sprint de Ecossistema Digital',
    tagline: 'Sua operação digital do zero ao ar em 30 dias.',
    meta: '30 dias de implementação',
    badge: 'Mais Popular',
    description:
      'Implementamos sua presença multi-plataforma integrada: desde sistemas de captação até automação de relacionamento com clientes.',
    includes: [
      'Setup multi-plataforma completo',
      'Automações de captação ativas',
      'Fluxos de nutrição configurados',
      'SOPs documentados para a equipe',
      'Relatório de resultados quinzenal',
    ],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
