'use client'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  Cpu,
  Palette,
} from 'lucide-react'

const coreSolutions = [
  {
    id: 'ai-transformation',
    number: '01',
    title: 'AI Transformation',
    icon: Brain,
    description:
      'Deploy custom LLMs, intelligent automations, and predictive data pipelines that eliminate operational friction and unlock scale.',
    tags: ['Custom LLMs', 'AI Automation', 'Enterprise MLOps'],
  },
  {
    id: 'business-transformation',
    number: '02',
    title: 'Business Transformation',
    icon: Briefcase,
    description:
      'Modernize commercial systems, brand architecture, and multi-channel growth engines built to expand your market footprint.',
    tags: ['Commercial Strategy', 'Brand Systems', 'Omnichannel Growth'],
  },
  {
    id: 'product-engineering',
    number: '03',
    title: 'Product Engineering',
    icon: Cpu,
    description:
      'Engineer high-velocity SaaS platforms, mobile applications, and resilient cloud architectures built for security and enterprise scale.',
    tags: ['Cloud & SaaS', 'iOS / Android', 'API Architecture'],
  },
  {
    id: 'design-intelligence',
    number: '04',
    title: 'Design Intelligence',
    icon: Palette,
    description:
      'Craft intuitive digital products, conversion-first user interfaces, and scalable design systems that elevate customer retention.',
    tags: ['Product UI/UX', 'Design Systems', 'CRO & Research'],
  },
]

export default function Solutions() {
  return (
    <Box
      component="section"
      id="solutions"
      sx={{
        backgroundColor: '#f8f6f0',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6, lg: 10 },
        borderTop: '1px solid #dedad0',
      }}
    >
      {/* Section Header */}
      <Box
        className="reveal-on-scroll"
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          mb: 6,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          gap: 3,
        }}
      >
        <Box>
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
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.12,
              color: 'text.primary',
              maxWidth: 680,
            }}
          >
            Four core solutions engineered for measurable impact.
          </Typography>
        </Box>
        <Typography
          sx={{
            maxWidth: 380,
            color: 'text.secondary',
            fontSize: '0.9375rem',
            lineHeight: 1.6,
          }}
        >
          We unify artificial intelligence, strategic business growth, robust product engineering, and design intelligence into one cohesive partner model.
        </Typography>
      </Box>

      {/* Solutions Cards Grid — Clean Minimalist Flat Design (Zero Shadow, Zero Gradient) */}
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 3,
        }}
      >
        {coreSolutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <Card
              key={solution.id}
              elevation={0}
              className={`reveal-on-scroll reveal-delay-${index + 1}`}
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
                {/* Header: Clean Number and Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2.75,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.8125rem',
                      fontWeight: 800,
                      color: '#111111',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {solution.number}
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

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: '#111111',
                    lineHeight: 1.25,
                    mb: 1.5,
                  }}
                >
                  {solution.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '0.84375rem',
                    color: '#55514b',
                    lineHeight: 1.6,
                    mb: 2.75,
                    fontWeight: 500,
                  }}
                >
                  {solution.description}
                </Typography>

                {/* Clean Flat Capability Tags */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 0.85,
                    mb: 3,
                  }}
                >
                  {solution.tags.map((tag) => (
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
                </Box>
              </CardContent>

              {/* Clean Flat Action Button */}
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
          )
        })}
      </Box>
    </Box>
  )
}
