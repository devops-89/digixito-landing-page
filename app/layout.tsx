import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import MUIProvider from '@/components/MUIProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digixito — Digital growth for ambitious US businesses',
  description: 'Digixito connects paid search, SEO, conversion-focused pages, and measurement to help US businesses turn online attention into meaningful action.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f9f7f2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MUIProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </MUIProvider>
      </body>
    </html>
  )
}
