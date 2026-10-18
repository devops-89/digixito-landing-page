'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Hero from '@/components/Hero'
import HeroSection2 from '@/components/HeroSection2'

export default function HeroSwitcher() {
  const [activeHero, setActiveHero] = useState<'hero1' | 'hero2'>('hero2')

  return (
    <div style={{ position: 'relative' }}>
      {/* Floating interactive switcher to compare Hero 1 & Hero 2 */}
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 80, sm: 24 },
          left: 24,
          zIndex: 9999,
          backgroundColor: '#111111',
          color: '#ffffff',
          borderRadius: 999,
          p: 0.6,
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 239, 70, 0.35)',
        }}
      >
        <Chip
          label="Hero v1"
          size="small"
          onClick={() => setActiveHero('hero1')}
          sx={{
            cursor: 'pointer',
            backgroundColor: activeHero === 'hero1' ? '#FFEF46' : 'transparent',
            color: activeHero === 'hero1' ? '#111111' : '#ffffff',
            fontWeight: 800,
            fontSize: '0.71875rem',
            fontFamily: 'DM Mono, monospace',
            '&:hover': {
              backgroundColor: activeHero === 'hero1' ? '#FFEF46' : 'rgba(255,255,255,0.15)',
            },
          }}
        />
        <Chip
          label="Hero v2 (New)"
          size="small"
          onClick={() => setActiveHero('hero2')}
          sx={{
            cursor: 'pointer',
            backgroundColor: activeHero === 'hero2' ? '#FFEF46' : 'transparent',
            color: activeHero === 'hero2' ? '#111111' : '#ffffff',
            fontWeight: 800,
            fontSize: '0.71875rem',
            fontFamily: 'DM Mono, monospace',
            '&:hover': {
              backgroundColor: activeHero === 'hero2' ? '#FFEF46' : 'rgba(255,255,255,0.15)',
            },
          }}
        />
      </Box>

      {/* Render selected Hero */}
      {activeHero === 'hero1' ? <Hero /> : <HeroSection2 />}
    </div>
  )
}
