import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CogniVerse Agency - Connected Minds, Smart Decisions',
  description:
    'CogniVerse Agency: Chief of Staff Digital para founders que querem escalar com IA, automacao e execucao mensuravel.',
  openGraph: {
    title: 'CogniVerse Agency',
    description: 'Chief of Staff Digital para founders em tracao.',
    url: 'https://cogniverse-agency.vercel.app',
    siteName: 'CogniVerse Agency',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
