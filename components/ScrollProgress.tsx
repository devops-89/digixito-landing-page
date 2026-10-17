'use client'

import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Chip from '@mui/material/Chip'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight > 0) {
        const scrolled = (totalScroll / windowHeight) * 100
        const clamped = Math.min(100, Math.max(0, scrolled))
        setProgress(clamped)
        setIsVisible(totalScroll > 60)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        pointerEvents: 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.25s ease',
      }}
      aria-hidden="true"
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 3,
          backgroundColor: 'rgba(222, 218, 208, 0.4)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#111111',
            backgroundImage: 'linear-gradient(90deg, #111111 0%, #FFEF46 100%)',
          },
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          top: 14,
          right: 20,
          pointerEvents: 'none',
        }}
      >
        <Chip
          label={`${Math.round(progress)}%`}
          size="small"
          sx={{
            height: 24,
            fontSize: '0.75rem',
            fontFamily: 'DM Mono, monospace',
            fontWeight: 700,
            backgroundColor: '#ffffff',
            color: '#111111',
            border: '1px solid #dedad0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            '& .MuiChip-label': {
              px: 1,
            },
          }}
        />
      </Box>
    </Box>
  )
}
