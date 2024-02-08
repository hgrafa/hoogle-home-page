import type { Metadata } from 'next'
import { Roboto, Josefin_Sans as JosefinSans } from 'next/font/google'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'

const roboto = Roboto({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const josefinSans = JosefinSans({
  variable: '--font-josefin',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Hoogle',
  description: 'Seu próximo nível em programação',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={cn(
        'antialised min-h-screen bg-background font-sans',
        josefinSans.variable,
        roboto.variable,
      )}
      lang="pt"
      suppressHydrationWarning
    >
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
