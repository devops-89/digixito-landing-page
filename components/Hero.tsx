import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { ArrowDownRight, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <Box sx={{ mb: 3 }} className="animate-load-badge">
          <Chip
            icon={
              <Box
                component="span"
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#111111',
                  display: 'inline-block',
                  ml: 1,
                  animation: 'pulse 2s infinite',
                }}
              />
            }
            label="DIGITAL GROWTH FOR AMBITIOUS US BUSINESSES"
            size="small"
            sx={{
              backgroundColor: '#ffffff',
              color: '#111111',
              border: '1px solid #dedad0',
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              py: 2,
              px: 1,
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          />
        </Box>

        <h1 className="animate-load-title">
          More of the right people.<br />
          More reasons to <span className="hero-accent-underline">choose you.</span>
        </h1>

        <p className="hero-sub animate-load-sub">
          Digixito helps growing businesses turn search visibility and paid traffic into meaningful
          action with focused PPC, SEO, conversion-ready landing pages, and ongoing optimization.
        </p>

        <Box sx={{ mt: 4, mb: 3 }} className="animate-load-cta">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
            <Button
              component="a"
              href="#contact"
              variant="contained"
              color="primary"
              endIcon={<ArrowRight size={16} />}
              sx={{
                py: 1.75,
                px: 3.5,
                fontSize: '0.875rem',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
            >
              Talk with a growth strategist
            </Button>
            <Button
              component="a"
              href="#capabilities"
              variant="outlined"
              endIcon={<ArrowDownRight size={16} />}
              sx={{
                py: 1.75,
                px: 3.5,
                fontSize: '0.875rem',
                borderColor: '#dedad0',
                backgroundColor: '#ffffff',
                color: '#111111',
                '&:hover': {
                  borderColor: '#111111',
                  backgroundColor: 'rgba(17,17,17,0.04)',
                },
              }}
            >
              Explore how we can help
            </Button>
          </Stack>
          <p className="hero-cta-subtext">
            Get a practical conversation about your goals, current marketing, and the next
            opportunity to improve.
          </p>
        </Box>

        <div className="hero-proofline animate-load-proof">
          <span className="proof-dot" />
          <span>A clear plan for the next stage of your digital growth.</span>
        </div>

        <a href="#problem" className="scroll-down-hint" aria-label="Scroll down to explore">
          <span className="scroll-down-mouse">
            <span className="scroll-down-wheel" />
          </span>
          <span>Scroll to explore</span>
        </a>
      </div>

      <div
        className="hero-visual animate-load-visual"
        aria-label="Abstract visual map showing paid search, SEO, and conversion flow"
        role="img"
      >
        <div className="hv-orb hv-orb-primary" />
        <div className="hv-orb hv-orb-secondary" />
        <div className="hv-orb hv-orb-accent" />

        <div className="hv-dotgrid" />

        <div className="hv-ring hv-ring-outer" />
        <div className="hv-ring hv-ring-inner" />

        <svg className="hv-paths" viewBox="0 0 600 600" fill="none" preserveAspectRatio="xMidYMid slice">
          <path
            d="M80 420 Q200 320 300 300 Q400 280 520 180"
            stroke="url(#pathGrad1)"
            strokeWidth="2.5"
            strokeDasharray="8 6"
            className="hv-path hv-path-1"
          />
          <path
            d="M60 340 Q180 260 320 250 Q460 240 540 140"
            stroke="url(#pathGrad2)"
            strokeWidth="2"
            className="hv-path hv-path-2"
          />
          <path
            d="M120 500 Q250 400 350 350 Q450 300 500 220"
            stroke="url(#pathGrad3)"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="hv-path hv-path-3"
          />
          <defs>
            <linearGradient id="pathGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="50%" stopColor="#FFEF46" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <linearGradient id="pathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFEF46" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <linearGradient id="pathGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="70%" stopColor="#FFEF46" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
          </defs>
        </svg>

        <span className="hv-node hv-node-start">
          <span className="hv-pulse" />
        </span>
        <span className="hv-node hv-node-mid">
          <span className="hv-pulse" />
        </span>
        <span className="hv-node hv-node-end">
          <span className="hv-pulse" />
        </span>

        <div className="hv-label hv-label-top">
          01 / PAID SEARCH & SEO <span>↗</span>
        </div>
        <div className="hv-label hv-label-right">02 / CONVERSION FUNNEL</div>
        <div className="hv-label hv-label-bottom">
          03 / MEASURED ROI <span>→</span>
        </div>

        <div className="hv-glass-panel">
          <span className="hv-glass-kicker">GROWTH ENGINE</span>
          <strong>
            From visitor<br />to <em>action.</em>
          </strong>
          <p>Targeted demand, high-converting pages, continuous review.</p>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: 2.5,
              pt: 2,
              borderTop: '1px solid rgba(222, 218, 208, 0.7)',
            }}
          >
            <Box
              component="span"
              sx={{
                fontSize: '0.75rem',
                fontFamily: 'DM Mono, monospace',
                fontWeight: 700,
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.75,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                }}
              />
              Active optimization
            </Box>
            <IconButton
              component="a"
              href="#contact"
              aria-label="Start conversation"
              sx={{
                width: 36,
                height: 36,
                backgroundColor: '#FFEF46',
                color: '#111111',
                border: '1px solid rgba(0,0,0,0.08)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: '#ffe91a',
                  transform: 'translateX(2px)',
                },
              }}
            >
              <ArrowRight size={16} />
            </IconButton>
          </Box>
        </div>

        <div className="hv-metric hv-metric-top">
          <span className="hv-metric-badge-dot" />
          <span className="hv-metric-value">+142%</span>
          <span className="hv-metric-label">Organic & Paid Growth</span>
        </div>
        <div className="hv-metric hv-metric-mid">
          <span className="hv-metric-badge-dot" />
          <span className="hv-metric-value">3.2×</span>
          <span className="hv-metric-label">Conversion Rate</span>
        </div>
        <div className="hv-metric hv-metric-bl">
          <span className="hv-metric-badge-dot" />
          <span className="hv-metric-value">↓ 48%</span>
          <span className="hv-metric-label">Cost Per Acquisition</span>
        </div>

        <div className="hv-tagline">
          Turn search intent<br />into measurable business growth.
        </div>
      </div>
    </section>
  )
}
