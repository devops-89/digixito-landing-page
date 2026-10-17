import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ArrowRight, Target } from 'lucide-react'

const howWeWorkSteps = [
  {
    number: '01',
    title: 'Start with your audience, offer, and business goal.',
    text: 'We identify your best prospective buyers, uncover what makes your offer compelling, and define clear business metrics instead of vanity traffic numbers.',
  },
  {
    number: '02',
    title: 'Build or refine the campaign and page experience around that goal.',
    text: 'We connect search queries, high-converting ad copy, and targeted landing page structures into a frictionless conversion path.',
  },
  {
    number: '03',
    title: 'Measure meaningful actions, review the results, and make focused improvements.',
    text: 'We analyze real customer drop-off points, test message variations, and systematically optimize every stage of the funnel.',
  },
]

export default function HowWeWork() {
  return (
    <section className="approach-section" id="how-we-work">
      <div className="approach-visual reveal-on-scroll reveal-scale">
        <div className="orbit-rotation" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <span className="orbit-tag tag-search">AUDIENCE</span>
          <span className="orbit-tag tag-page">OFFER</span>
          <span className="orbit-tag tag-proof">CAMPAIGN</span>
          <span className="orbit-tag tag-data">METRICS</span>
        </div>
        <div className="orbit-core">
          <Target />
          <span>
            PRACTICAL
            <br />
            GROWTH
          </span>
        </div>
      </div>

      <div className="approach-copy reveal-on-scroll reveal-delay-1">
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip
            label="04"
            size="small"
            sx={{
              backgroundColor: '#111111',
              color: '#FFEF46',
              fontWeight: 800,
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6875rem',
              height: 22,
              px: 0.5,
            }}
          />
          <Box
            component="span"
            sx={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'text.secondary',
            }}
          >
            HOW WE WORK
          </Box>
        </Box>

        <h2>A disciplined process built around your goals.</h2>
        <p className="lead">
          We don’t believe in disconnected marketing tactics. Every campaign and page change is
          measured against actual business progress.
        </p>

        <Stack spacing={3} className="steps" sx={{ my: 4 }}>
          {howWeWorkSteps.map(({ number, title, text }, index) => (
            <Paper
              key={number}
              elevation={0}
              className={`reveal-on-scroll reveal-delay-${index + 1}`}
              sx={{
                display: 'flex',
                gap: 2.5,
                p: 2.5,
                backgroundColor: '#ffffff',
                border: '1px solid #dedad0',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#111111',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                },
              }}
            >
              <Chip
                label={number}
                size="small"
                sx={{
                  backgroundColor: '#111111',
                  color: '#ffffff',
                  fontFamily: 'DM Mono, monospace',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  height: 32,
                  width: 36,
                  borderRadius: '8px',
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'text.primary',
                    mb: 0.5,
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: 'text.secondary',
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>

        <Paper
          elevation={0}
          className="reveal-on-scroll reveal-delay-3"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2.5,
            p: 3,
            backgroundColor: '#ffffff',
            border: '1px solid #dedad0',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: '0.9375rem', color: 'text.primary', mb: 0.5 }}>
              Find your next growth opportunity
            </Typography>
            <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary' }}>
              Share what you are working toward. We will help you identify a useful place to start.
            </Typography>
          </Box>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            color="primary"
            endIcon={<ArrowRight size={16} />}
            sx={{
              py: 1.25,
              px: 3,
              fontSize: '0.8125rem',
              whiteSpace: 'nowrap',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            Start a conversation
          </Button>
        </Paper>
      </div>
    </section>
  )
}
