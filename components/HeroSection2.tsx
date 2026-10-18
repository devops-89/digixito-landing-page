'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {
  ArrowRight,
  ArrowDownRight,
  Megaphone,
  Zap,
  Rocket,
  Brain,
  Briefcase,
  Cpu,
  Palette,
} from 'lucide-react'

export interface HeroSection2Props {
  className?: string
}

const corePillars = [
  { label: 'AI Transformation', icon: Brain, href: '#solutions' },
  { label: 'Business Transformation', icon: Briefcase, href: '#solutions' },
  { label: 'Product Engineering', icon: Cpu, href: '#solutions' },
  { label: 'Design Intelligence', icon: Palette, href: '#solutions' },
]

export default function HeroSection2({ className = '' }: HeroSection2Props) {
  return (
    <section className={`hero-section-2 ${className}`} id="top">
      {/* 3-Column Hero Grid */}
      <div className="hero2-container">
        {/* LEFT COLUMN: Clean, High-Contrast Modern Minimalist Typography & CTAs */}
        <div className="hero2-left">
          {/* Eyebrow Pill with Live Indicator */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.25,
              py: 0.65,
              px: 1.6,
              borderRadius: 999,
              backgroundColor: '#ffffff',
              border: '1px solid #dedad0',
              boxShadow: 'none',
              mb: 2.75,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 8,
                height: 8,
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                  opacity: 0.75,
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#111111',
              }}
            >
              Enterprise Tech & Growth Partner
            </Typography>
            <Box
              component="span"
              sx={{
                width: 3,
                height: 3,
                borderRadius: '50%',
                backgroundColor: 'rgba(17, 17, 17, 0.25)',
                mx: 0.25,
              }}
            />
            <Typography
              sx={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: '#66625c',
                letterSpacing: '0.02em',
              }}
            >
              EST. 2024
            </Typography>
          </Box>

          {/* Main Headline with Modern Typographic Rhythm (Zero Gradient) */}
          <Typography
            component="h1"
            sx={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: { xs: '2.5rem', sm: '3.125rem', md: '3.5rem', lg: '3.875rem' },
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: { xs: 1.14, md: 1.1 },
              mb: 2.75,
              color: '#111111',
              maxWidth: 580,
            }}
          >
            <Box component="span" sx={{ display: 'block' }}>
              Intelligent Technology.
            </Box>
            <Box component="span" sx={{ display: 'block', color: '#111111' }}>
              Transformative business scale.
            </Box>
          </Typography>

          {/* Subtext Paragraph with Typographic Hierarchy */}
          <Typography
            sx={{
              fontSize: { xs: '0.96875rem', md: '1.03125rem' },
              lineHeight: 1.7,
              maxWidth: 480,
              mb: 3.75,
              color: '#524e47',
              fontWeight: 400,
            }}
          >
            Digixito partners with ambitious enterprises to innovate and scale at the intersection of{' '}
            <strong style={{ color: '#111111', fontWeight: 700 }}>AI Transformation</strong>,{' '}
            <strong style={{ color: '#111111', fontWeight: 700 }}>Product Engineering</strong>, and{' '}
            <strong style={{ color: '#111111', fontWeight: 700 }}>Design Intelligence</strong>.
          </Typography>

          {/* CTA Buttons (Single Line, Never Wrapped) */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{
              mb: 4,
              flexWrap: 'wrap',
              alignItems: { xs: 'stretch', sm: 'center' },
            }}
          >
            <Button
              component="a"
              href="#contact"
              variant="contained"
              endIcon={<ArrowRight size={16} />}
              sx={{
                whiteSpace: 'nowrap',
                minWidth: 'max-content',
                flexShrink: 0,
                width: 'fit-content',
                py: 1.25,
                px: 2.75,
                fontSize: '0.875rem',
                fontWeight: 800,
                backgroundColor: '#111111',
                color: '#ffffff',
                borderRadius: 999,
                boxShadow: 'none',
                border: '1px solid #111111',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#262626',
                  transform: 'translateY(-2px)',
                  boxShadow: 'none',
                },
              }}
            >
              Talk with our team
            </Button>
            <Button
              component="a"
              href="#solutions"
              variant="outlined"
              endIcon={<ArrowDownRight size={16} />}
              sx={{
                whiteSpace: 'nowrap',
                minWidth: 'max-content',
                flexShrink: 0,
                width: 'fit-content',
                py: 1.25,
                px: 2.5,
                fontSize: '0.875rem',
                fontWeight: 700,
                borderColor: '#dedad0',
                backgroundColor: '#ffffff',
                color: '#111111',
                borderRadius: 999,
                boxShadow: 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: '#111111',
                  backgroundColor: '#f8f6f0',
                  transform: 'translateY(-2px)',
                  boxShadow: 'none',
                },
              }}
            >
              Explore our solutions
            </Button>
          </Stack>

          {/* Capability Capsule Grid (Zero Shadow, Zero Gradient) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 1.5,
              maxWidth: 480,
            }}
          >
            {corePillars.map((pillar) => {
              const PillarIcon = pillar.icon
              return (
                <Box
                  key={pillar.label}
                  component="a"
                  href={pillar.href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    py: 1.1,
                    px: 1.75,
                    borderRadius: '14px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #dedad0',
                    boxShadow: 'none',
                    color: '#111111',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: '#111111',
                      transform: 'translateY(-2px)',
                      boxShadow: 'none',
                      '& .pillar-icon-box': {
                        backgroundColor: '#111111',
                        color: '#FFEF46',
                      },
                    },
                  }}
                >
                  <Box
                    className="pillar-icon-box"
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: '8px',
                      backgroundColor: '#f8f6f0',
                      color: '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <PillarIcon size={15} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: '#111111',
                      letterSpacing: '-0.01em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {pillar.label}
                  </Typography>
                </Box>
              )
            })}
          </Box>
        </div>

        {/* CENTER COLUMN: Leaping Hero Character + Centered Backdrop Text + Badges */}
        <div className="hero2-center">
          {/* Dramatic Backdrop Typography Anchored Behind Character */}
          <div className="hero2-backdrop-text" aria-hidden="true">
            BOOST NOW
          </div>

          {/* Floating Megaphone Badge */}
          <div className="hero2-floating-badge hero2-badge-megaphone">
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '12px',
                backgroundColor: '#ff6b4a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none',
              }}
            >
              <Megaphone size={24} />
            </Box>
          </div>

          {/* Floating Lightning Badge */}
          <div className="hero2-floating-badge hero2-badge-lightning">
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: '12px',
                backgroundColor: '#111111',
                color: '#FFEF46',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none',
              }}
            >
              <Zap size={24} fill="#FFEF46" />
            </Box>
          </div>

          {/* Floating Rocket Badge */}
          <div className="hero2-floating-badge hero2-badge-rocket">
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '14px',
                backgroundColor: '#10b981',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none',
              }}
            >
              <Rocket size={26} />
            </Box>
          </div>

          {/* Seamless Transparent Cutout Character */}
          <div className="hero2-character-wrapper">
            <img
              src="/hero2-character.png"
              alt="Digixito digital growth leader with megaphone leaping forward into innovation"
              className="hero2-character-img"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Verified Social Proof & Performance Velocity Metrics (Zero Shadow, Zero Gradient) */}
        <div className="hero2-right">
          {/* Proof Badge Card */}
          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid #dedad0',
              boxShadow: 'none',
              maxWidth: 360,
              width: '100%',
              transition: 'transform 0.25s ease, border-color 0.25s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                borderColor: '#111111',
                boxShadow: 'none',
              },
            }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                color: '#f59e0b',
                fontSize: '1.05rem',
                letterSpacing: '2px',
                mb: 1.25,
              }}
            >
              ★★★★★
              <Box
                component="span"
                sx={{
                  ml: 1,
                  fontSize: '0.8125rem',
                  fontWeight: 800,
                  color: '#111111',
                  fontFamily: 'DM Mono, monospace',
                  backgroundColor: 'rgba(255, 239, 70, 0.5)',
                  px: 0.8,
                  py: 0.2,
                  borderRadius: '6px',
                }}
              >
                4.9 / 5.0
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: '0.8125rem',
                color: '#111111',
                fontFamily: 'DM Mono, monospace',
                fontWeight: 700,
                letterSpacing: '0.04em',
                lineHeight: 1.5,
                mb: 2,
              }}
            >
              TRUSTED TECH & PRODUCT PARTNER FOR AMBITIOUS U.S. BUSINESSES
            </Typography>

            {/* Avatar Cluster */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src="/testimonials/abhishek-mallik.jpg"
                  alt="Client avatar"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #ffffff',
                    marginLeft: 0,
                  }}
                />
                <img
                  src="/testimonials/hari-kusumakar.jpg"
                  alt="Client avatar"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #ffffff',
                    marginLeft: -10,
                  }}
                />
                <img
                  src="/placeholder-user.jpg"
                  alt="Client avatar"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #ffffff',
                    marginLeft: -10,
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: '0.8125rem',
                  fontFamily: 'DM Mono, monospace',
                  fontWeight: 700,
                  color: '#111111',
                }}
              >
                450+ Verified Reviews
              </Typography>
            </Box>
          </Box>

          {/* Key Metric Card */}
          <Box
            sx={{
              p: 2.25,
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid #dedad0',
              boxShadow: 'none',
              maxWidth: 360,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              transition: 'transform 0.25s ease, border-color 0.25s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                borderColor: '#111111',
                boxShadow: 'none',
              },
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '12px',
                backgroundColor: '#111111',
                color: '#FFEF46',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: 'none',
              }}
            >
              <Zap size={22} fill="#FFEF46" />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#111111',
                  fontFamily: 'Manrope, sans-serif',
                  lineHeight: 1.2,
                }}
              >
                3.8x Faster
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  color: '#55514b',
                  fontFamily: 'DM Mono, monospace',
                  fontWeight: 600,
                }}
              >
                Concept to Production Scale
              </Typography>
            </Box>
          </Box>

          {/* Chevron Indicator Trail */}
          <div className="hero2-chevron-trail" aria-hidden="true">
            <span>&gt;&gt;&gt;&gt;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
