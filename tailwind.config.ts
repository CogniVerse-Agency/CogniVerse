import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0C0C0A',
        surface: '#141412',
        surface2: '#1C1C19',
        accent: '#C8FF3E',
        'accent-dim': '#9FC832',
        'accent-muted': 'rgba(200,255,62,0.08)',
        'accent-border': 'rgba(200,255,62,0.20)',
        'text-primary': '#F9F8F4',
        'text-secondary': '#A09F98',
        'text-tertiary': '#5C5C58',
        border: 'rgba(255,255,255,0.07)',
        'border-hover': 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        heading: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
