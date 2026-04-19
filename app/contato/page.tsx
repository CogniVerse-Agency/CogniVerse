'use client'

import { useMemo, useState } from 'react'

type Stage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 'success'

type FormState = {
  q1: string
  q2: string
  q3: string
  q4: string[]
  q5: string[]
  q5OutrosText: string
  q6: string
  q7: string
  q8: string[]
  q8OutroText: string
  q9: string[]
  q10: string
  q11: string
  contactName: string
  contactEmail: string
  contactCompany: string
  qExtra: string
}

const TOTAL_STEPS = 6

const defaultState: FormState = {
  q1: '',
  q2: '',
  q3: '',
  q4: [],
  q5: [],
  q5OutrosText: '',
  q6: '',
  q7: '',
  q8: [],
  q8OutroText: '',
  q9: [],
  q10: '',
  q11: '',
  contactName: '',
  contactEmail: '',
  contactCompany: '',
  qExtra: '',
}

function toggleArrayValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((v) => v !== value) : [...values, value]
}

export default function ContactPage() {
  const [stage, setStage] = useState<Stage>(0)
  const [form, setForm] = useState<FormState>(defaultState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  const stepCounter = useMemo(() => {
    if (stage === 0) return 'Inicio'
    if (stage === 'success') return 'Concluido'
    return `Etapa ${stage} de ${TOTAL_STEPS}`
  }, [stage])

  const progress = stage === 'success' ? 100 : Number(stage) * (100 / TOTAL_STEPS)

  const validateStep = (from: number) => {
    const nextErrors: Record<string, string> = {}

    if (from === 1) {
      if (!form.q1.trim()) nextErrors.q1 = 'Por favor, preencha este campo.'
      if (!form.q2) nextErrors.q2 = 'Selecione uma opção.'
    }

    if (from === 2) {
      if (!form.q3.trim()) nextErrors.q3 = 'Por favor, preencha este campo.'
      if (form.q4.length === 0) nextErrors.q4 = 'Selecione pelo menos uma opção.'
    }

    if (from === 3) {
      if (form.q5.length === 0) nextErrors.q5 = 'Selecione pelo menos um cargo.'
    }

    if (from === 4) {
      if (!form.q7.trim()) nextErrors.q7 = 'Por favor, preencha este campo.'
    }

    if (from === 5) {
      if (!form.q10.trim()) nextErrors.q10 = 'Por favor, preencha este campo.'
    }

    if (from === 6) {
      if (!form.q11) nextErrors.q11 = 'Selecione uma opção.'
      if (!form.contactName.trim()) nextErrors.contactName = 'Preencha seu nome.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail.trim())) {
        nextErrors.contactEmail = 'Insira um e-mail valido.'
      }
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const next = (from: 1 | 2 | 3 | 4 | 5, to: 2 | 3 | 4 | 5 | 6) => {
    if (validateStep(from)) setStage(to)
  }

  const collectFormData = () => {
    return {
      negocio: form.q1,
      estagio: form.q2,
      melhores_clientes: form.q3,
      porte_alvo: form.q4,
      cargos_decisores: form.q5,
      cargo_outros: form.q5OutrosText,
      influenciador: form.q6,
      dor_principal: form.q7,
      gatilhos: form.q8,
      setores_fit: form.q9,
      desqualificacao: form.q10,
      objetivo_lista: form.q11,
      contato_nome: form.contactName,
      contato_email: form.contactEmail,
      contato_empresa: form.contactCompany,
      contexto_extra: form.qExtra,
      timestamp: new Date().toISOString(),
    }
  }

  const submitForm = async () => {
    if (!validateStep(6)) return

    setLoading(true)
    try {
      const payload = collectFormData()
      const response = await fetch('https://cognito-steel.vercel.app/api/icp-discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Falha ao enviar formulario')
      }

      setStage('success')
    } catch {
      setErrors({ submit: 'Não foi possivel enviar agora. Tente novamente em alguns minutos.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-4 pb-16 pt-28 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-card border border-border bg-surface">
        <header className="border-b border-border px-6 py-5">
          <div className="flex items-center justify-between">
            <p className="font-heading text-lg">Formulario de Descoberta - Mapeamento de ICP</p>
            <p className="text-sm text-text-secondary">{stepCounter}</p>
          </div>
          <div className="mt-4 h-1 overflow-hidden rounded bg-black/40">
            <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
          </div>
        </header>

        <main className="px-6 py-8">
          {stage === 0 && (
            <section>
              <p className="inline-flex rounded-pill border border-accent-border bg-accent-muted px-3 py-1 text-xs text-accent">
                Mapeamento de ICP - Formulario de Descoberta
              </p>
              <h1 className="mt-4 font-heading text-4xl md:text-5xl">
                Vamos encontrar
                <span className="block text-accent">seu cliente ideal.</span>
              </h1>
              <p className="mt-4 text-text-secondary">
                Este formulario e o primeiro passo do seu Mapeamento de ICP. Suas respostas orientam toda a
                pesquisa e definem a qualidade dos leads que você vai receber.
              </p>
              <div className="mt-6 grid gap-2 text-sm text-text-secondary md:grid-cols-2">
                <p>10-15 minutos para preencher</p>
                <p>11 perguntas no total</p>
                <p>Respostas salvas automaticamente</p>
                <p>Sem resposta errada</p>
              </div>
              <button
                type="button"
                onClick={() => setStage(1)}
                className="mt-8 rounded-pill border border-accent bg-accent px-6 py-3 font-heading font-bold text-black"
              >
                Comecar
              </button>
            </section>
          )}

          {stage === 1 && (
            <section className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl"><span className="text-accent">01.</span> Contexto do Negocio</h2>
                <p className="mt-2 text-sm text-text-secondary">
                  Queremos entender o que você vende antes de olhar para quem compra.
                </p>
              </div>
              <div>
                <label className="mb-2 block text-sm">Q1 Qual e o nome da sua empresa e o que ela faz?</label>
                <textarea
                  value={form.q1}
                  onChange={(e) => setForm((prev) => ({ ...prev, q1: e.target.value }))}
                  className="min-h-28 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                  placeholder="Descreva em 1-2 frases o problema que você resolve e para quem."
                />
                {errors.q1 && <p className="mt-1 text-xs text-red-300">{errors.q1}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm">Q2 Em qual estagio está sua startup?</label>
                <div className="space-y-2">
                  {[
                    ['pre-revenue', 'Pre-receita - MVP ou desenvolvimento'],
                    ['early-traction', 'Tração inicial - até R$30k MRR'],
                    ['growing', 'Crescimento - entre R$30k e R$150k MRR'],
                    ['scaling', 'Escala - acima de R$150k MRR'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex cursor-pointer gap-2 rounded-xl border border-border bg-surface2 p-3 text-sm">
                      <input
                        type="radio"
                        checked={form.q2 === value}
                        onChange={() => setForm((prev) => ({ ...prev, q2: value }))}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {errors.q2 && <p className="mt-1 text-xs text-red-300">{errors.q2}</p>}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => next(1, 2)}
                  className="rounded-pill border border-accent bg-accent px-6 py-3 font-heading font-bold text-black"
                >
                  Proximo
                </button>
                <button type="button" onClick={() => setStage(0)} className="rounded-pill border border-border px-6 py-3 text-text-secondary">
                  Voltar
                </button>
              </div>
            </section>
          )}

          {stage === 2 && (
            <section className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl"><span className="text-accent">02.</span> Seus Clientes Atuais</h2>
              </div>
              <div>
                <label className="mb-2 block text-sm">Q3 Descreva seus 2-3 melhores clientes atuais.</label>
                <textarea
                  value={form.q3}
                  onChange={(e) => setForm((prev) => ({ ...prev, q3: e.target.value }))}
                  className="min-h-32 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                />
                {errors.q3 && <p className="mt-1 text-xs text-red-300">{errors.q3}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm">Q4 Qual o porte das empresas que você quer atingir?</label>
                <div className="grid gap-2 md:grid-cols-2">
                  {[
                    ['micro', 'Micro (1-10 funcionarios)'],
                    ['pequena', 'Pequena (11-50)'],
                    ['media', 'Media (51-250)'],
                    ['grande', 'Grande (250+)'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex cursor-pointer gap-2 rounded-xl border border-border bg-surface2 p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={form.q4.includes(value)}
                        onChange={() => setForm((prev) => ({ ...prev, q4: toggleArrayValue(prev.q4, value) }))}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {errors.q4 && <p className="mt-1 text-xs text-red-300">{errors.q4}</p>}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => next(2, 3)} className="rounded-pill border border-accent bg-accent px-6 py-3 font-heading font-bold text-black">Proximo</button>
                <button type="button" onClick={() => setStage(1)} className="rounded-pill border border-border px-6 py-3 text-text-secondary">Voltar</button>
              </div>
            </section>
          )}

          {stage === 3 && (
            <section className="space-y-6">
              <h2 className="font-heading text-3xl"><span className="text-accent">03.</span> Quem Decide a Compra?</h2>
              <div>
                <label className="mb-2 block text-sm">Q5 Qual cargo normalmente autoriza ou assina a compra?</label>
                <div className="space-y-2">
                  {[
                    ['ceo', 'CEO / Founder / Socio'],
                    ['cto', 'CTO / VP de Tecnologia / Head de Produto'],
                    ['coo', 'COO / Head de Operacoes'],
                    ['cmo', 'CMO / Head de Marketing / Growth'],
                    ['cfo', 'CFO / Head Financeiro'],
                    ['outros', 'Outro cargo'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex cursor-pointer gap-2 rounded-xl border border-border bg-surface2 p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={form.q5.includes(value)}
                        onChange={() => setForm((prev) => ({ ...prev, q5: toggleArrayValue(prev.q5, value) }))}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {form.q5.includes('outros') && (
                  <input
                    type="text"
                    value={form.q5OutrosText}
                    onChange={(e) => setForm((prev) => ({ ...prev, q5OutrosText: e.target.value }))}
                    className="mt-2 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                    placeholder="Qual cargo?"
                  />
                )}
                {errors.q5 && <p className="mt-1 text-xs text-red-300">{errors.q5}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm">Q6 Existe influenciador antes do decisor? Quem?</label>
                <textarea
                  value={form.q6}
                  onChange={(e) => setForm((prev) => ({ ...prev, q6: e.target.value }))}
                  className="min-h-24 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                />
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => next(3, 4)} className="rounded-pill border border-accent bg-accent px-6 py-3 font-heading font-bold text-black">Proximo</button>
                <button type="button" onClick={() => setStage(2)} className="rounded-pill border border-border px-6 py-3 text-text-secondary">Voltar</button>
              </div>
            </section>
          )}

          {stage === 4 && (
            <section className="space-y-6">
              <h2 className="font-heading text-3xl"><span className="text-accent">04.</span> Dores e Gatilhos de Compra</h2>
              <div>
                <label className="mb-2 block text-sm">Q7 Qual o principal problema que você resolve?</label>
                <textarea
                  value={form.q7}
                  onChange={(e) => setForm((prev) => ({ ...prev, q7: e.target.value }))}
                  className="min-h-28 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                />
                {errors.q7 && <p className="mt-1 text-xs text-red-300">{errors.q7}</p>}
              </div>
              <div>
                <label className="mb-2 block text-sm">Q8 Qual gatilho antecede a busca pela sua solucao?</label>
                <div className="space-y-2">
                  {[
                    ['captou-rodada', 'Acabou de captar rodada'],
                    ['crescimento-rapido', 'Crescimento rapido sem operacao'],
                    ['contratacao', 'Contratando e expandindo time'],
                    ['troca-lideranca', 'Mudanca de lideranca'],
                    ['dor-cronica', 'Dor cronica chegou no limite'],
                    ['outro-gatilho', 'Outro gatilho'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex cursor-pointer gap-2 rounded-xl border border-border bg-surface2 p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={form.q8.includes(value)}
                        onChange={() => setForm((prev) => ({ ...prev, q8: toggleArrayValue(prev.q8, value) }))}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {form.q8.includes('outro-gatilho') && (
                  <textarea
                    value={form.q8OutroText}
                    onChange={(e) => setForm((prev) => ({ ...prev, q8OutroText: e.target.value }))}
                    className="mt-2 min-h-20 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                    placeholder="Descreva o gatilho..."
                  />
                )}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => next(4, 5)} className="rounded-pill border border-accent bg-accent px-6 py-3 font-heading font-bold text-black">Proximo</button>
                <button type="button" onClick={() => setStage(3)} className="rounded-pill border border-border px-6 py-3 text-text-secondary">Voltar</button>
              </div>
            </section>
          )}

          {stage === 5 && (
            <section className="space-y-6">
              <h2 className="font-heading text-3xl"><span className="text-accent">05.</span> Mercado e Desqualificacao</h2>
              <div>
                <label className="mb-2 block text-sm">Q9 Quais setores tem mais fit com sua solucao?</label>
                <div className="grid gap-2 md:grid-cols-2">
                  {[
                    ['fintech', 'Fintech / Financeiro'],
                    ['healthtech', 'Healthtech / Saude'],
                    ['edtech', 'Edtech / Educacao'],
                    ['saas', 'SaaS / Software B2B'],
                    ['ecommerce', 'E-commerce / Varejo'],
                    ['logistica', 'Logistica / Supply Chain'],
                    ['hr', 'RH / People Tech'],
                    ['agencias', 'Agencias / Serviços'],
                    ['industria', 'Industria / Manufatura'],
                    ['outro-setor', 'Outro setor'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex cursor-pointer gap-2 rounded-xl border border-border bg-surface2 p-3 text-sm">
                      <input
                        type="checkbox"
                        checked={form.q9.includes(value)}
                        onChange={() => setForm((prev) => ({ ...prev, q9: toggleArrayValue(prev.q9, value) }))}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm">Q10 Quais perfis não vale a pena abordar?</label>
                <textarea
                  value={form.q10}
                  onChange={(e) => setForm((prev) => ({ ...prev, q10: e.target.value }))}
                  className="min-h-28 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                />
                {errors.q10 && <p className="mt-1 text-xs text-red-300">{errors.q10}</p>}
              </div>
              <div className="flex gap-3">
                <button type="button" onClick={() => next(5, 6)} className="rounded-pill border border-accent bg-accent px-6 py-3 font-heading font-bold text-black">Proximo</button>
                <button type="button" onClick={() => setStage(4)} className="rounded-pill border border-border px-6 py-3 text-text-secondary">Voltar</button>
              </div>
            </section>
          )}

          {stage === 6 && (
            <section className="space-y-6">
              <h2 className="font-heading text-3xl"><span className="text-accent">06.</span> Objetivo com esta lista</h2>
              <div>
                <label className="mb-2 block text-sm">Q11 Qual o principal objetivo com esta lista de leads?</label>
                <div className="space-y-2">
                  {[
                    ['cold-outreach', 'Cold outreach - e-mail ou LinkedIn'],
                    ['events', 'Prospeccao em eventos / networking'],
                    ['ads-targeting', 'Segmentacao para campanhas pagas'],
                    ['parceiros', 'Identificar parceiros estrategicos'],
                    ['validacao', 'Validar hipoteses de ICP antes de escalar'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex cursor-pointer gap-2 rounded-xl border border-border bg-surface2 p-3 text-sm">
                      <input
                        type="radio"
                        checked={form.q11 === value}
                        onChange={() => setForm((prev) => ({ ...prev, q11: value }))}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
                {errors.q11 && <p className="mt-1 text-xs text-red-300">{errors.q11}</p>}
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    value={form.contactName}
                    onChange={(e) => setForm((prev) => ({ ...prev, contactName: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                    placeholder="Seu nome completo"
                  />
                  {errors.contactName && <p className="mt-1 text-xs text-red-300">{errors.contactName}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    value={form.contactEmail}
                    onChange={(e) => setForm((prev) => ({ ...prev, contactEmail: e.target.value }))}
                    className="w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                    placeholder="Seu e-mail"
                  />
                  {errors.contactEmail && <p className="mt-1 text-xs text-red-300">{errors.contactEmail}</p>}
                </div>
              </div>

              <input
                type="text"
                value={form.contactCompany}
                onChange={(e) => setForm((prev) => ({ ...prev, contactCompany: e.target.value }))}
                className="w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                placeholder="Nome da empresa"
              />

              <div>
                <label className="mb-2 block text-sm">Contexto adicional (opcional)</label>
                <textarea
                  value={form.qExtra}
                  onChange={(e) => setForm((prev) => ({ ...prev, qExtra: e.target.value }))}
                  className="min-h-24 w-full rounded-xl border border-border bg-surface2 p-3 text-sm"
                />
              </div>

              {errors.submit && <p className="text-sm text-red-300">{errors.submit}</p>}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={submitForm}
                  disabled={loading}
                  className="rounded-pill border border-accent bg-accent px-6 py-3 font-heading font-bold text-black disabled:opacity-60"
                >
                  {loading ? 'Enviando...' : 'Enviar Formulario'}
                </button>
                <button type="button" onClick={() => setStage(5)} className="rounded-pill border border-border px-6 py-3 text-text-secondary">
                  Voltar
                </button>
              </div>
            </section>
          )}

          {stage === 'success' && (
            <section className="text-center">
              <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent-border bg-accent-muted text-2xl text-accent">
                ✓
              </p>
              <h2 className="mt-5 font-heading text-5xl">
                Formulario <span className="text-accent">recebido.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
                Suas respostas chegaram para a equipe da CogniVerse. Vamos analisar e entrar em contato em até 24h.
              </p>
              <div className="mx-auto mt-7 max-w-2xl space-y-3 rounded-card border border-border bg-surface2 p-5 text-left text-sm text-text-secondary">
                <p>01. Revisamos suas respostas e preparamos a call de descoberta (45 min).</p>
                <p>02. Você recebe um convite de calendario com a data confirmada.</p>
                <p>03. A pesquisa comeca apos a call, com entrega em até 10 dias úteis.</p>
                <p>04. Você recebe Documento de ICP, Lista de Leads e Loom de Handoff.</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}



