'use client'

import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/lib/theme'

export default function MUIProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Clean section hash from URL if already present on initial load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#')) return

      e.preventDefault()
      const targetId = href.substring(1)

      if (!targetId || targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const targetEl = document.getElementById(targetId)
        if (targetEl) {
          const headerOffset = 70
          const elementPosition = targetEl.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth',
          })
        }
      }

      // Ensure URL stays clean without section id / hash
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search)
      }
    }

    // Capture click events on all in-page anchors
    document.addEventListener('click', handleAnchorClick, true)
    return () => {
      document.removeEventListener('click', handleAnchorClick, true)
    }
  }, [])

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
