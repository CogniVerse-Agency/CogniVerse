import Link from 'next/link'

const links = [
  { href: '/#servicos', label: 'Servicos' },
  { href: '/servicos/mapeamento-icp', label: 'Mapeamento de ICP' },
  { href: '/#processo', label: 'Como Funciona' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#privacidade', label: 'Privacidade' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-heading text-2xl font-bold text-accent">CogniVerse</p>
          <p className="mt-3 max-w-xs text-sm text-text-secondary">
            Connected Minds, Smart Decisions. Chief of Staff Digital para founders em tracao.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-text-primary">Links</p>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-text-primary">CTAs</p>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="https://calendly.com/cogniverse-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Agendar Discovery Call
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-text-tertiary">
        © 2026 CogniVerse Agency. Todos os direitos reservados.
      </div>
    </footer>
  )
}
