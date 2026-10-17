import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  Cpu,
  Palette,
} from 'lucide-react'

const coreCapabilities = [
  {
    id: 'ai-trans',
    number: '01',
    title: 'AI Transformation',
    icon: Brain,
    lead: 'Intelligent Automation & Predictive Pipelines',
    description:
      'Bespoke machine learning, predictive modeling, custom LLMs, and intelligent automation pipelines that eliminate operational friction and unlock actionable business intelligence.',
    highlights: [
      'Machine Learning & Predictive Models',
      'Generative AI & Custom LLMs',
      'Data Engineering & MLOps Pipelines',
    ],
  },
  {
    id: 'biz-trans',
    number: '02',
    title: 'Business Transformation',
    icon: Briefcase,
    lead: 'Commercial, Creative & Operational Scale',
    description:
      'We align commercial strategy, creative brand transformation, media discovery, and multi-channel commerce into a singular growth engine built to expand your market footprint.',
    highlights: [
      'Commercial & Brand Strategy',
      '360° Creative Campaigns',
      'Multi-Channel Commerce Scale',
    ],
  },
  {
    id: 'prod-eng',
    number: '03',
    title: 'Product Engineering',
    icon: Cpu,
    lead: 'Resilient Cloud & Digital Platforms',
    description:
      'High-availability SaaS applications, web and mobile platforms, resilient cloud architectures, and seamless API integrations engineered for speed, security, and scale.',
    highlights: [
      'SaaS & Mobile Applications',
      'API Integrations & Systems',
      'Resilient Cloud Infrastructure',
    ],
  },
  {
    id: 'design-intel',
    number: '04',
    title: 'Design Intelligence',
    icon: Palette,
    lead: 'Human-Centered UI/UX & Digital Experience',
    description:
      'Modern UI/UX design, conversational interfaces, rapid prototyping, and empirical user research designed to elevate brand perception and increase conversion velocity.',
    highlights: [
      'UI/UX Product Architecture',
      'Conversational Interface Design',
      'Prototyping & Experience CRO',
    ],
  },
]

export default function Capabilities() {
  return (
    <Box
      component="section"
      id="capabilities"
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6, lg: 10 },
        borderBottom: '1px solid #dedad0',
      }}
    >
      <Box
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
              label="03"
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
              CAPABILITIES
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
            Advanced engineering and strategic capabilities for scale.
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
          Deep technical and creative execution across artificial intelligence, full-stack product engineering,
          commercial transformation, and design intelligence.
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
        {coreCapabilities.map((capability) => {
          const Icon = capability.icon
          return (
            <Card
              key={capability.id}
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { xs: 3, md: 4 },
                backgroundColor: '#fbfaf7',
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
                    {capability.number}
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
                  {capability.title}
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
                    {capability.lead}
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
                  {capability.description}
                </Typography>

                <Stack spacing={1} sx={{ mb: 4 }}>
                  {capability.highlights.map((item) => (
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
                Discuss this capability
              </Button>
            </Card>
          )
        })}
      </Box>
    </Box>
  )
}
