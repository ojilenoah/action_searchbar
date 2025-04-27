import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'action searchbar',
  description: 'showcasing my beautiful action searchbar',
  generator: 'Noah Ojile',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
