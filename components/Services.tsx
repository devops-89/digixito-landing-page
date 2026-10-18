'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ArrowUpRight, Brain, Briefcase, Cpu, Palette } from 'lucide-react'

const coreSolutions = [
  {
    number: '01',
    title: 'AI Transformation',
    text: 'Deploy custom LLMs, intelligent automations, and predictive data pipelines that eliminate operational friction and unlock scale.',
    icon: Brain,
    tags: ['Custom LLMs', 'AI Automation', 'Enterprise MLOps'],
  },
  {
    number: '02',
    title: 'Business Transformation',
    text: 'Modernize commercial systems, brand architecture, and multi-channel growth engines built to expand your market footprint.',
    icon: Briefcase,
    tags: ['Commercial Strategy', 'Brand Systems', 'Omnichannel Growth'],
  },
  {
    number: '03',
    title: 'Product Engineering',
    text: 'Engineer high-velocity SaaS platforms, mobile applications, and resilient cloud architectures built for security and enterprise scale.',
    icon: Cpu,
    tags: ['Cloud & SaaS', 'iOS / Android', 'API Architecture'],
  },
  {
    number: '04',
    title: 'Design Intelligence',
    text: 'Craft intuitive digital products, conversion-first user interfaces, and scalable design systems that elevate customer retention.',
    icon: Palette,
    tags: ['Product UI/UX', 'Design Systems', 'CRO & Research'],
  },
]

export default function Services() {
  return (
    <section
      className="services-section"
      id="services"
      style={{
        backgroundColor: '#f8f6f0',
        padding: '80px 24px',
        borderTop: '1px solid #dedad0',
      }}
    >
      <div className="section-heading" style={{ maxWidth: 1440, margin: '0 auto 48px' }}>
        <div>
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Chip
              label="02"
              size="small"
              sx={{
                backgroundColor: '#111111',
                color: '#FFEF46',
                fontWeight: 800,
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.6875rem',
                height: 22,
                px: 0.5,
                boxShadow: 'none',
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
              SOLUTIONS
            </Box>
          </Box>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.12, color: '#111111' }}>
            Four core solutions engineered for measurable scale.
          </h2>
        </div>
        <p className="section-intro" style={{ maxWidth: 380, color: '#55514b', fontSize: '0.9375rem', lineHeight: 1.6 }}>
          We unify artificial intelligence, strategic business growth, robust product engineering, and design intelligence into one cohesive partner model.
        </p>
      </div>

      <div
        className="services-main-grid"
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {coreSolutions.map(({ number, title, text, icon: Icon, tags }) => (
          <Card
            key={number}
            elevation={0}
            className="bento-card"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: { xs: 3, md: 3.5 },
              borderRadius: '20px',
              backgroundColor: '#ffffff',
              border: '1px solid #dedad0',
              boxShadow: 'none',
              transition: 'all 0.25s ease',
              '&:hover': {
                borderColor: '#111111',
                transform: 'translateY(-4px)',
                boxShadow: 'none',
                '& .solution-icon-box': {
                  backgroundColor: '#111111',
                  color: '#FFEF46',
                  borderColor: '#111111',
                },
                '& .service-card-arrow': {
                  backgroundColor: '#FFEF46',
                  color: '#111111',
                  transform: 'translate(2px, -2px)',
                },
              },
            }}
          >
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.75 }}>
                <Typography
                  sx={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.8125rem',
                    fontWeight: 800,
                    color: '#111111',
                    letterSpacing: '0.04em',
                  }}
                >
                  {number}
                </Typography>
                <Box
                  className="solution-icon-box"
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    backgroundColor: '#f8f6f0',
                    border: '1px solid #dedad0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#111111',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Icon size={20} />
                </Box>
              </Box>

              <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 800, mb: 1.5, color: '#111111', lineHeight: 1.25, letterSpacing: '-0.03em' }}>
                {title}
              </Typography>
              <Typography sx={{ fontSize: '0.84375rem', color: '#55514b', lineHeight: 1.6, mb: 2.75, fontWeight: 500 }}>
                {text}
              </Typography>

              <Stack direction="row" spacing={0.85} useFlexGap sx={{ flexWrap: 'wrap', mb: 3 }}>
                {tags.map((tag) => (
                  <Box
                    key={tag}
                    component="span"
                    sx={{
                      fontSize: '0.6875rem',
                      fontFamily: 'DM Mono, monospace',
                      fontWeight: 700,
                      backgroundColor: '#f8f6f0',
                      color: '#111111',
                      border: '1px solid #dedad0',
                      borderRadius: '8px',
                      py: 0.45,
                      px: 1.1,
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      transition: 'border-color 0.2s ease',
                      '&:hover': {
                        borderColor: '#111111',
                      },
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Stack>
            </CardContent>

            <Button
              component="a"
              href="#contact"
              variant="outlined"
              fullWidth
              endIcon={
                <Box
                  component="span"
                  className="service-card-arrow"
                  sx={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#111111',
                    color: '#ffffff',
                    transition: 'all 0.25s ease',
                    ml: 0.5,
                  }}
                >
                  <ArrowUpRight size={14} />
                </Box>
              }
              sx={{
                py: 1.15,
                px: 2,
                fontSize: '0.8125rem',
                fontWeight: 700,
                backgroundColor: '#ffffff',
                border: '1px solid #dedad0',
                color: '#111111',
                justifyContent: 'space-between',
                borderRadius: '12px',
                boxShadow: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: '#111111',
                  backgroundColor: '#f8f6f0',
                  boxShadow: 'none',
                },
              }}
            >
              Discuss solution
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
