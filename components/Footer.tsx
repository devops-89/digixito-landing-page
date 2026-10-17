import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <Box
      component="footer"
      className="site-footer"
      sx={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #dedad0',
        pt: { xs: 8, md: 10 },
        pb: 6,
        px: { xs: 3, md: 6, lg: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.5fr 1fr 1fr 1.2fr' },
          gap: { xs: 5, md: 6 },
          mb: 8,
        }}
      >
        <Box>
          <Box
            component="a"
            href="#top"
            className="brand brand-footer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.25,
              fontWeight: 800,
              fontSize: '1.3125rem',
              letterSpacing: '-0.06em',
              color: 'text.primary',
              textDecoration: 'none',
              mb: 2,
            }}
          >
            <span className="brand-mark">
              <span />
              <span />
            </span>
            <span>
              digixito<span className="brand-dot">.</span>
            </span>
          </Box>
          <Typography sx={{ fontSize: '0.9375rem', color: 'text.secondary', lineHeight: 1.6, maxWidth: 280 }}>
            A clearer path from digital activity to business action.
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6875rem',
              fontWeight: 800,
              color: 'text.secondary',
              letterSpacing: '0.08em',
              mb: 2,
            }}
          >
            SOLUTIONS
          </Typography>
          <Stack spacing={1.5}>
            {['Paid Search & PPC', 'SEO & Discoverability', 'Landing Pages & CRO', 'Analytics & Review'].map(
              (item) => (
                <Box
                  key={item}
                  component="a"
                  href="#solutions"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'text.secondary' },
                  }}
                >
                  {item}
                </Box>
              )
            )}
          </Stack>
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6875rem',
              fontWeight: 800,
              color: 'text.secondary',
              letterSpacing: '0.08em',
              mb: 2,
            }}
          >
            CAPABILITIES
          </Typography>
          <Stack spacing={1.5}>
            {['AI Transformation', 'Business Transformation', 'Product Engineering', 'Design Intelligence'].map(
              (item) => (
                <Box
                  key={item}
                  component="a"
                  href="#capabilities"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'text.primary',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'text.secondary' },
                  }}
                >
                  {item}
                </Box>
              )
            )}
          </Stack>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            color="primary"
            endIcon={<ArrowUpRight size={16} />}
            sx={{
              py: 1.5,
              px: 3,
              fontSize: '0.875rem',
              mb: 2,
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            Start a conversation
          </Button>
          <Chip
            label="US Market Digital Growth"
            size="small"
            sx={{
              backgroundColor: '#f8f6f0',
              border: '1px solid #dedad0',
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: 'text.secondary',
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#dedad0', mb: 4 }} />

      <Box
        sx={{
          maxWidth: 1440,
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: 2,
          fontSize: '0.8125rem',
          color: 'text.secondary',
        }}
      >
        <span>© 2026 Digixito. All rights reserved.</span>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {['Solutions', 'Capabilities', 'How We Work', 'Proof', 'Contact', 'Privacy Policy'].map((item) => (
            <Box
              key={item}
              component="a"
              href={item === 'Privacy Policy' ? '#top' : `#${item.toLowerCase().replace(/ /g, '-')}`}
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                transition: 'color 0.2s',
                '&:hover': { color: 'text.primary' },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
