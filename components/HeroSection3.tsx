'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

export interface HeroSection3Props {
  className?: string
}

export default function HeroSection3({ className = '' }: HeroSection3Props) {
  return (
    <section className={`hero-section-3 ${className}`} id="top">
      {/* ========================================================
          BACKGROUND LAYER: Concentric Circular Orbit Radar Rings
          ======================================================== */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Ring 1 */}
        <Box
          sx={{
            position: 'absolute',
            width: 480,
            height: 480,
            borderRadius: '50%',
            border: '1px solid rgba(17, 17, 17, 0.055)',
          }}
        />
        {/* Ring 2 */}
        <Box
          sx={{
            position: 'absolute',
            width: 780,
            height: 780,
            borderRadius: '50%',
            border: '1px solid rgba(17, 17, 17, 0.05)',
          }}
        />
        {/* Ring 3 */}
        <Box
          sx={{
            position: 'absolute',
            width: 1080,
            height: 1080,
            borderRadius: '50%',
            border: '1px solid rgba(17, 17, 17, 0.045)',
          }}
        />
        {/* Ring 4 */}
        <Box
          sx={{
            position: 'absolute',
            width: 1400,
            height: 1400,
            borderRadius: '50%',
            border: '1px solid rgba(17, 17, 17, 0.04)',
          }}
        />
        {/* Ring 5 */}
        <Box
          sx={{
            position: 'absolute',
            width: 1740,
            height: 1740,
            borderRadius: '50%',
            border: '1px solid rgba(17, 17, 17, 0.035)',
          }}
        />
      </Box>

      {/* ========================================================
          4 FLOATING GEOMETRIC ORBIT TILES (Exact match to user's photo)
          ======================================================== */}
      {/* Tile 1: Top-Left (4-Petal Floral / Generative Knot) */}
      <Box
        className="orbit-tile"
        sx={{
          position: 'absolute',
          top: { xs: '10%', sm: '14%', md: '18%' },
          left: { xs: '4%', sm: '10%', md: '15%', lg: '18%' },
          width: { xs: 58, sm: 72, md: 80 },
          height: { xs: 58, sm: 72, md: 80 },
          borderRadius: { xs: '16px', sm: '20px' },
          backgroundColor: '#ffffff',
          border: '1px solid rgba(17, 17, 17, 0.08)',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          animation: 'orbitFloat1 6s ease-in-out infinite',
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111111"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.65 }}
        >
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 10 11 12 12C14 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" />
          <path d="M22 12C22 9.5 20 7.5 17.5 7.5C15 7.5 13 10 12 12C13 14 15 16.5 17.5 16.5C20 16.5 22 14.5 22 12Z" />
          <path d="M12 22C14.5 22 16.5 20 16.5 17.5C16.5 15 14 13 12 12C10 13 7.5 15 7.5 17.5C7.5 20 9.5 22 12 22Z" />
          <path d="M2 12C2 14.5 4 16.5 6.5 16.5C9 16.5 11 14 12 12C11 10 9 7.5 6.5 7.5C4 7.5 2 9.5 2 12Z" />
        </svg>
      </Box>

      {/* Tile 2: Top-Right (Slanted Tilted Stack Layers) */}
      <Box
        className="orbit-tile"
        sx={{
          position: 'absolute',
          top: { xs: '11%', sm: '13%', md: '17%' },
          right: { xs: '4%', sm: '10%', md: '15%', lg: '18%' },
          width: { xs: 58, sm: 72, md: 80 },
          height: { xs: 58, sm: 72, md: 80 },
          borderRadius: { xs: '16px', sm: '20px' },
          backgroundColor: '#ffffff',
          border: '1px solid rgba(17, 17, 17, 0.08)',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          animation: 'orbitFloat2 7s ease-in-out infinite 0.5s',
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111111"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.65 }}
        >
          <path d="M7 5L19 3L16 11L4 13L7 5Z" />
          <path d="M4 13L16 11L19 19L7 21L4 13Z" />
        </svg>
      </Box>

      {/* Tile 3: Bottom-Left (8-Point Starburst / Asterisk) */}
      <Box
        className="orbit-tile"
        sx={{
          position: 'absolute',
          bottom: { xs: '14%', sm: '15%', md: '18%' },
          left: { xs: '3%', sm: '9%', md: '14%', lg: '17%' },
          width: { xs: 58, sm: 72, md: 80 },
          height: { xs: 58, sm: 72, md: 80 },
          borderRadius: { xs: '16px', sm: '20px' },
          backgroundColor: '#ffffff',
          border: '1px solid rgba(17, 17, 17, 0.08)',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          animation: 'orbitFloat3 6.5s ease-in-out infinite 1s',
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111111"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.65 }}
        >
          <path d="M12 2V22" />
          <path d="M2 12H22" />
          <path d="M4.93 4.93L19.07 19.07" />
          <path d="M19.07 4.93L4.93 19.07" />
          <circle cx="12" cy="12" r="2" fill="#111111" />
        </svg>
      </Box>

      {/* Tile 4: Bottom-Right (Isometric 3D Cube) */}
      <Box
        className="orbit-tile"
        sx={{
          position: 'absolute',
          bottom: { xs: '13%', sm: '16%', md: '19%' },
          right: { xs: '3%', sm: '9%', md: '14%', lg: '17%' },
          width: { xs: 58, sm: 72, md: 80 },
          height: { xs: 58, sm: 72, md: 80 },
          borderRadius: { xs: '16px', sm: '20px' },
          backgroundColor: '#ffffff',
          border: '1px solid rgba(17, 17, 17, 0.08)',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
          animation: 'orbitFloat4 5.5s ease-in-out infinite 1.5s',
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#111111"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.65 }}
        >
          <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" />
          <path d="M12 12L21 7.2" />
          <path d="M12 12V22" />
          <path d="M12 12L3 7.2" />
        </svg>
      </Box>

      {/* ========================================================
          CENTERED HERO CONTENT CORE
          ======================================================== */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 960,
          mx: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        {/* Eyebrow Pill */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            py: 0.6,
            px: 1.85,
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            border: '1px solid #dedad0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
            mb: { xs: 2.5, md: 3 },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: '#55514b',
              textTransform: 'uppercase',
            }}
          >
            › DIGITAL AGENCY ‹
          </Typography>
        </Box>

        {/* Main Headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: { xs: '2.5rem', sm: '3.75rem', md: '4.75rem', lg: '5.25rem' },
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: { xs: 1.12, md: 1.08 },
            color: '#111111',
            mb: { xs: 2.5, md: 3 },
            maxWidth: 820,
          }}
        >
          <Box component="span" sx={{ display: 'block' }}>
            We design brands
          </Box>
          <Box component="span" sx={{ display: 'block' }}>
            that move{' '}
            <Box
              component="span"
              sx={{
                position: 'relative',
                display: 'inline-block',
                whiteSpace: 'nowrap',
                zIndex: 1,
                px: 1,
                mx: 0.25,
              }}
            >
              <Box
                component="span"
                sx={{
                  position: 'absolute',
                  left: -2,
                  right: -2,
                  bottom: '10%',
                  height: '42%',
                  backgroundColor: '#FFEF46',
                  zIndex: -1,
                  borderRadius: '4px',
                }}
              />
              people
            </Box>
          </Box>
        </Typography>

        {/* Subtitle / Paragraph */}
        <Typography
          sx={{
            fontSize: { xs: '0.96875rem', sm: '1.0625rem', md: '1.125rem' },
            lineHeight: 1.68,
            color: '#66625c',
            maxWidth: 620,
            mx: 'auto',
            mb: { xs: 4, md: 5 },
            fontWeight: 400,
          }}
        >
          We combine strategy, design, and technology to help ambitious brands stand out &amp; create meaningful digital experiences.
        </Typography>

        {/* CTA Buttons & Handwritten Doodle Arrow Callout */}
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            mb: { xs: 8, md: 10 },
          }}
        >
          {/* Action Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Button
              component="a"
              href="#contact"
              variant="contained"
              sx={{
                whiteSpace: 'nowrap',
                minWidth: 'max-content',
                py: 1.5,
                px: 3.75,
                fontSize: '0.9375rem',
                fontWeight: 800,
                backgroundColor: '#FFEF46',
                color: '#111111',
                border: '1.5px solid #111111',
                borderRadius: '12px',
                textTransform: 'none',
                boxShadow: 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#f5e436',
                  transform: 'translateY(-2px)',
                  boxShadow: 'none',
                },
              }}
            >
              Discuss your ideas
            </Button>
            <Button
              component="a"
              href="#solutions"
              variant="contained"
              sx={{
                whiteSpace: 'nowrap',
                minWidth: 'max-content',
                py: 1.5,
                px: 3.75,
                fontSize: '0.9375rem',
                fontWeight: 700,
                backgroundColor: '#111111',
                color: '#ffffff',
                borderRadius: '12px',
                textTransform: 'none',
                boxShadow: 'none',
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#262626',
                  transform: 'translateY(-2px)',
                  boxShadow: 'none',
                },
              }}
            >
              View Services
            </Button>
          </Stack>

          {/* Hand-drawn curved arrow and cursive text "Schedule a free call now" */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: -10, sm: -42, md: -68 },
              top: { xs: '102%', sm: '88%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              pointerEvents: 'none',
            }}
          >
            <svg
              width="48"
              height="34"
              viewBox="0 0 48 34"
              fill="none"
              style={{ transform: 'rotate(8deg)', overflow: 'visible' }}
            >
              <path
                d="M6 28C14 26 26 18 36 6"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="2 3.5"
              />
              <path
                d="M29 6L38 6L36 15"
                stroke="#111111"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography
              sx={{
                fontFamily: "'Caveat', cursive, sans-serif",
                fontSize: { xs: '1.2rem', sm: '1.35rem' },
                fontWeight: 700,
                color: '#111111',
                backgroundColor: '#FFEF46',
                px: 1.25,
                py: 0.2,
                borderRadius: '6px',
                border: '1px solid #111111',
                transform: 'rotate(-4deg)',
                whiteSpace: 'nowrap',
                mt: 0.35,
                letterSpacing: '0.01em',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              Schedule a free call now
            </Typography>
          </Box>
        </Box>

        {/* Bottom Social Proof / Trust Line */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 780,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2.5,
            pt: { xs: 3, sm: 1 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              height: 1,
              borderTop: '1px dashed #dedad0',
            }}
          />
          <Typography
            sx={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              color: '#88847e',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            TRUSTED BY 100+ GLOBAL LEADERS
          </Typography>
          <Box
            sx={{
              flex: 1,
              height: 1,
              borderTop: '1px dashed #dedad0',
            }}
          />
        </Box>
      </Box>
    </section>
  )
}
