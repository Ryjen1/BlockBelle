import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { I18nProvider } from '../contexts/I18nContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BlockBelle',
  description: 'A decentralized social platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}