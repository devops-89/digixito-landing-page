import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {
  ArrowUpRight,
  BarChart3,
  Search,
  Sparkles,
  Target,
} from 'lucide-react'

const coreSolutions = [
  {
    id: 'paid-search',
    number: '01',
    title: 'Paid Search & PPC',
    icon: Search,
    lead: 'High-Intent Targeting & Revenue Scale',
    description:
      'Reach buyers actively searching for what you offer. We shape paid campaigns around high-intent keywords, audience segmentation, and thoughtful budget management across Google Ads and search networks.',
    highlights: [
      'Intent-Matched Keyword Bidding',
      'Search & Shopping Campaigns',
      'ROI & Budget Efficiency',
    ],
  },
  {
    id: 'seo-disc',
    number: '02',
    title: 'SEO & Discoverability',
    icon: Sparkles,
    lead: 'Organic Authority & Long-Term Search Visibility',
    description:
      'Build a resilient foundation to capture organic demand. We focus on search intent architecture, technical health, on-page optimization, and authoritative content that drives sustainable customer acquisition.',
    highlights: [
      'Technical SEO & Site Architecture',
      'Intent-Focused Content Strategy',
      'Local & National Search Authority',
    ],
  },
  {
    id: 'cro-pages',
    number: '03',
    title: 'Landing Pages & CRO',
    icon: Target,
    lead: 'Conversion Velocity & Frictionless Action',
    description:
      'Give every campaign a focused destination. We engineer bespoke landing pages, refine message clarity, and eliminate friction with continuous A/B testing so visitors become paying customers.',
    highlights: [
      'High-Converting Page Architecture',
      'Empirical A/B Experimentation',
      'Checkout & Intake Optimization',
    ],
  },
  {
    id: 'analytics-review',
    number: '04',
    title: 'Analytics & Review',
    icon: BarChart3,
    lead: 'Closed-Loop Attribution & Actionable Data',
    description:
      'Understand how prospects move from first touch to conversion. We implement robust event tracking, server-side attribution, and transparent sprint reviews so every dollar spent has clear accountability.',
    highlights: [
      'Full-Funnel Attribution Modeling',
      'Drop-Off & Conversion Analysis',
      'Transparent Bi-Weekly Reviews',
    ],
  },
]

export default function Solutions() {
  return (
    <Box
      component="section"
      id="solutions"
      sx={{
        backgroundColor: 'var(--cream)',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6, lg: 10 },
        borderTop: '1px solid #dedad0',
      }}
    >
      <Box
        className="reveal-on-scroll"
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          mb: 5,
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
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 1.08,
              color: 'text.primary',
              maxWidth: 700,
            }}
          >
            Four integrated solutions that turn visibility into action.
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
          We connect search visibility, targeted landing pages, and ongoing measurement into one
          clear, cohesive growth engine.
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 3,
        }}
      >
        {coreSolutions.map((service, index) => {
          const Icon = service.icon
          return (
            <Card
              key={service.id}
              elevation={0}
              className={`reveal-on-scroll reveal-delay-${index + 1}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { xs: 3, md: 4 },
                backgroundColor: '#ffffff',
                border: '1px solid #dedad0',
                borderRadius: '16px',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: '#111111',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 32px rgba(17, 17, 17, 0.07)',
                  '& .service-card-arrow': {
                    backgroundColor: '#FFEF46',
                    color: '#111111',
                    transform: 'translate(2px, -2px)',
                  },
                },
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'text.secondary',
                    }}
                  >
                    {service.number}
                  </Typography>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '10px',
                      backgroundColor: '#f8f6f0',
                      border: '1px solid #dedad0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#111111',
                    }}
                  >
                    <Icon size={20} />
                  </Box>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '1.3125rem',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'text.primary',
                    lineHeight: 1.25,
                    mb: 0.75,
                  }}
                >
                  {service.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: '#111111',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'text.primary',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.lead}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  {service.description}
                </Typography>

                <Stack spacing={1} sx={{ mb: 4 }}>
                  {service.highlights.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.25,
                        fontSize: '0.78125rem',
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          backgroundColor: '#111111',
                          flexShrink: 0,
                        }}
                      />
                      {item}
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
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#111111',
                      color: '#ffffff',
                      transition: 'all 0.2s ease',
                      ml: 0.5,
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </Box>
                }
                sx={{
                  py: 1.25,
                  fontSize: '0.8125rem',
                  borderColor: '#dedad0',
                  color: 'text.primary',
                  justifyContent: 'space-between',
                  px: 2.5,
                  '&:hover': {
                    borderColor: '#111111',
                    backgroundColor: 'rgba(17,17,17,0.03)',
                  },
                }}
              >
                Discuss this solution
              </Button>
            </Card>
          )
        })}
      </Box>
    </Box>
  )
}
