'use client'
// app/contato/ContactForm.tsx
// Formulário simples de contato — Client Component (usa useState)

import { useState } from 'react'

type FormState = {
  nome: string
  email: string
  empresa: string
  mensagem: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const INITIAL: FormState = {
  nome: '',
  email: '',
  empresa: '',
  mensagem: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')

  const set = (key: keyof FormState, value: string) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // POST para a API route do ERP — endpoint de contato
      // Ajuste a URL se o endpoint for diferente
      const res = await fetch('https://cognito-steel.vercel.app/api/icp-discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          origem: 'formulario_contato',
          created_at: new Date().toISOString(),
        }),
      })

      if (!res.ok) throw new Error('Erro no envio')
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  // ── Estilos reutilizáveis ──
  const inputClass =
    'w-full bg-black border border-border rounded-input px-4 py-3 text-sm ' +
    'text-ink-primary placeholder:text-ink-tertiary font-body ' +
    'focus:border-border-focus focus:outline-none transition-colors'

  const labelClass = 'block text-sm font-medium text-ink-primary mb-1.5'

  if (status === 'success') {
    return (
      <div className="bg-surface border border-border rounded-card p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <p className="font-heading font-bold text-lg text-ink-primary mb-2">
          Mensagem recebida.
        </p>
        <p className="text-sm text-ink-secondary leading-relaxed">
          Respondemos em até 24h úteis.
          Se for urgente, mande direto para{' '}
          <a href="mailto:contato@cogniverse.agency" className="text-accent hover:underline">
            contato@cogniverse.agency
          </a>
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-surface border border-border rounded-card p-8 flex flex-col gap-5"
      noValidate
    >
      {/* linha nome + empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className={labelClass}>
            Seu nome <span className="text-accent">*</span>
          </label>
          <input
            id="nome"
            type="text"
            value={form.nome}
            onChange={e => set('nome', e.target.value)}
            placeholder="João Silva"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            value={form.empresa}
            onChange={e => set('empresa', e.target.value)}
            placeholder="Nome da empresa"
            className={inputClass}
          />
        </div>
      </div>

      {/* email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={e => set('email', e.target.value)}
          placeholder="seu@empresa.com"
          required
          className={inputClass}
        />
      </div>

      {/* mensagem */}
      <div>
        <label htmlFor="mensagem" className={labelClass}>
          Mensagem <span className="text-accent">*</span>
        </label>
        <textarea
          id="mensagem"
          value={form.mensagem}
          onChange={e => set('mensagem', e.target.value)}
          placeholder="Conte o que está precisando — quanto mais contexto, melhor a resposta."
          required
          rows={5}
          className={`${inputClass} resize-none leading-relaxed`}
        />
      </div>

      {/* erro */}
      {status === 'error' && (
        <p className="text-sm text-[#FF5A3C] bg-[rgba(255,90,60,0.08)] border border-[rgba(255,90,60,0.2)] rounded-input px-4 py-3">
          Ocorreu um erro. Tente novamente ou mande direto para{' '}
          <a href="mailto:contato@cogniverse.agency" className="underline">
            contato@cogniverse.agency
          </a>
        </p>
      )}

      {/* submit */}
      <button
        type="submit"
        disabled={status === 'loading' || !form.nome || !form.email || !form.mensagem}
        className="font-heading font-bold text-sm tracking-wide bg-accent text-black rounded-pill py-3 px-8 self-start
                   hover:opacity-90 active:scale-[0.98] transition-all
                   disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando…' : 'Enviar mensagem →'}
      </button>

      <p className="text-[0.7rem] text-ink-tertiary">
        Respondemos em até 24h úteis. Sem spam, sem lista de e-mail.
      </p>
    </form>
  )
}
