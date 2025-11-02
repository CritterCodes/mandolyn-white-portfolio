import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mandolyn White - Mural Artist',
  description: 'Portfolio of Mandolyn White, professional mural artist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}