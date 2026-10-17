import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ArrowUpRight, BarChart3, Search, Sparkles, Target } from 'lucide-react'

const coreSolutions = [
  {
    number: '01',
    title: 'Paid search and PPC',
    text: 'Reach people actively looking for what you offer. We help shape campaigns around relevant intent, clear messaging, and thoughtful budget management.',
    icon: Search,
    tags: ['Google Ads', 'Intent Targeting', 'Budget Control'],
  },
  {
    number: '02',
    title: 'SEO',
    text: 'Build a stronger foundation for being found in organic search. We focus on useful content, on-page improvements, and technical priorities that support discoverability over time.',
    icon: Sparkles,
    tags: ['Organic Search', 'Technical SEO', 'Content Strategy'],
  },
  {
    number: '03',
    title: 'Landing pages and CRO',
    text: 'Give each campaign a focused destination. We improve page structure, message clarity, and calls to action so visitors can quickly see why your offer matters and what to do next.',
    icon: Target,
    tags: ['Conversion Design', 'A/B Testing', 'Message Clarity'],
  },
  {
    number: '04',
    title: 'Analytics and optimization',
    text: 'Understand how people move from click to conversion. We use measurement and ongoing review to identify what is working, where prospects drop off, and which improvements to prioritize.',
    icon: BarChart3,
    tags: ['Attribution', 'Funnel Tracking', 'Ongoing Review'],
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
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
              HOW DIGIXITO SOLVES IT
            </Box>
          </Box>
          <h2>Four integrated capabilities that turn visibility into action.</h2>
        </div>
        <p>
          We connect search visibility, targeted landing pages, and ongoing measurement into one
          clear growth engine.
        </p>
      </div>

      <div className="services-grid">
        {coreSolutions.map(({ number, title, text, icon: Icon, tags }) => (
          <Card
            key={number}
            elevation={0}
            sx={{
              p: 3.5,
              backgroundColor: '#ffffff',
              border: '1px solid #dedad0',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.25s ease',
              '&:hover': {
                borderColor: '#111111',
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
              },
            }}
          >
            <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Typography sx={{ fontFamily: 'DM Mono, monospace', fontWeight: 700, color: 'text.secondary' }}>
                  {number}
                </Typography>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    backgroundColor: '#f8f6f0',
                    border: '1px solid #dedad0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={18} />
                </Box>
              </Box>

              <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 800, mb: 1, color: 'text.primary' }}>
                {title}
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
                {text}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: '#f8f6f0',
                      border: '1px solid #dedad0',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            </CardContent>

            <Button
              component="a"
              href="#contact"
              variant="outlined"
              fullWidth
              endIcon={<ArrowUpRight size={14} />}
              sx={{
                py: 1.25,
                fontSize: '0.8125rem',
                borderColor: '#dedad0',
                color: 'text.primary',
                '&:hover': {
                  borderColor: '#111111',
                },
              }}
            >
              Discuss this service
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
