import Link from 'next/link'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  children: ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 px-5 py-3 text-sm transition-all duration-300 rounded-pill border'

const variants = {
  primary:
    'bg-accent text-black border-accent font-heading font-bold hover:bg-accent-dim hover:border-accent-dim',
  secondary:
    'bg-transparent border-border text-text-secondary hover:border-border-hover hover:text-text-primary',
}

export default function Button({
  variant,
  children,
  onClick,
  href,
  className,
}: ButtonProps) {
  const cls = `${baseStyles} ${variants[variant]} ${className ?? ''}`.trim()

  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#')
    if (isInternal) {
      return (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
