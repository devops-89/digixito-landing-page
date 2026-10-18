'use client'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const problemPoints = [
  'Legacy Tech Debt & Fragile Systems',
  'Fragmented AI & Data Silos',
  'Slow Product Engineering Velocity',
  'Disconnected Customer Experiences',
]

export default function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }} className="reveal-on-scroll">
          <Chip
            label="01"
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
            THE FRAGMENTATION PROBLEM
          </Box>
        </Box>

        <div className="problem-grid">
          <div className="problem-left reveal-on-scroll reveal-delay-1">
            <h2>When technology and strategy operate in silos, growth stalls.</h2>
          </div>
          <div className="problem-right reveal-on-scroll reveal-delay-2">
            <p className="problem-lead">
              Outdated platforms, disconnected digital tools, and fragmented tech stacks slow innovation and burn valuable engineering bandwidth.
            </p>
            <p className="problem-body">
              Digixito unifies AI Transformation, Business Transformation, Product Engineering, and Design Intelligence into one cohesive partner model — helping you build scalable products, automate core operations, and accelerate market expansion.
            </p>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
              {problemPoints.map((point) => (
                <Chip
                  key={point}
                  icon={
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#FFEF46',
                        border: '1px solid #111111',
                        marginLeft: 6,
                        display: 'inline-block',
                      }}
                    />
                  }
                  label={point}
                  sx={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #dedad0',
                    color: '#111111',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    py: 2.25,
                    px: 1,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: '#111111',
                      backgroundColor: '#faf8f4',
                      transform: 'translateY(-1px)',
                    },
                  }}
                />
              ))}
            </Box>
          </div>
        </div>
      </div>
    </section>
  )
}
