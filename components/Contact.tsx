'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ArrowRight, Check } from 'lucide-react'

const serviceHelpOptions = [
  'Paid search / PPC',
  'SEO',
  'Landing pages / CRO',
  'Analytics and optimization',
  'Not sure yet',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('Paid search / PPC')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    goal: '',
    budget: '',
    source: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip
            label="06"
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
            CONNECT WITH US
          </Box>
        </Box>

        <h2>Let’s make your next move a clear one.</h2>
        <p>
          Tell us a little about your business and what you want to improve. We will follow up to
          understand your goals and explore whether Digixito is the right partner to help.
        </p>

        <Stack spacing={2} sx={{ my: 4 }}>
          {[
            'No obligation — just a practical growth conversation.',
            'Direct feedback on your search intent and landing pages.',
            'Strict data privacy: your information is used only to reply.',
          ].map((perk) => (
            <Box key={perk} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
              <Typography sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                {perk}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Box sx={{ pt: 2, borderTop: '1px solid #dedad0' }}>
          <Typography sx={{ fontSize: '0.8125rem', color: 'text.secondary', mb: 0.5 }}>
            Prefer to email directly?
          </Typography>
          <Box
            component="a"
            href="mailto:hello@digixito.com"
            sx={{
              fontWeight: 700,
              fontSize: '0.9375rem',
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            hello@digixito.com
          </Box>
        </Box>
      </div>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          backgroundColor: '#ffffff',
          border: '1px solid #dedad0',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
        }}
      >
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                backgroundColor: '#FFEF46',
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              <Check size={28} />
            </Box>
            <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 800, mb: 1, color: 'text.primary' }}>
              Request received.
            </Typography>
            <Typography sx={{ fontSize: '0.9375rem', color: 'text.secondary', maxWidth: 440, mx: 'auto', mb: 4 }}>
              Thank you for reaching out. A Digixito growth strategist will review your goals and follow
              up with tailored observations within one business day.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSubmitted(false)}
              sx={{ py: 1.5, px: 3.5 }}
            >
              Send another message
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} aria-label="Request a growth conversation form">
            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="First name"
                  variant="outlined"
                  size="small"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Last name"
                  variant="outlined"
                  size="small"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Work email"
                  variant="outlined"
                  size="small"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Company name"
                  variant="outlined"
                  size="small"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Website (optional)"
                  variant="outlined"
                  size="small"
                  placeholder="https://yourcompany.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </Grid>

              <Grid size={12}>
                <Typography sx={{ fontSize: '0.8125rem', fontWeight: 700, color: 'text.primary', mb: 1 }}>
                  What would you like help with? *
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {serviceHelpOptions.map((opt) => {
                    const isSelected = selectedService === opt
                    return (
                      <Chip
                        key={opt}
                        label={opt}
                        clickable
                        onClick={() => setSelectedService(opt)}
                        sx={{
                          py: 2,
                          px: 1,
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          backgroundColor: isSelected ? '#111111' : '#f8f6f0',
                          color: isSelected ? '#FFEF46' : 'text.primary',
                          border: `1px solid ${isSelected ? '#111111' : '#dedad0'}`,
                          '&:hover': {
                            backgroundColor: isSelected ? '#222222' : '#f0ece2',
                          },
                        }}
                      />
                    )
                  })}
                </Box>
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={3}
                  label="What is your primary growth goal?"
                  variant="outlined"
                  placeholder="Tell us what you are trying to make easier to see, improve, or scale..."
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Monthly marketing budget (optional)"
                  variant="outlined"
                  size="small"
                  placeholder="e.g. $5k - $15k / mo"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="How did you hear about Digixito? (optional)"
                  variant="outlined"
                  size="small"
                  placeholder="e.g. Search, referral, LinkedIn"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                />
              </Grid>

              <Grid size={12}>
                <Box sx={{ mt: 1 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    endIcon={<ArrowRight size={16} />}
                    sx={{
                      py: 1.75,
                      fontSize: '0.9375rem',
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    Request a growth conversation
                  </Button>
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', textAlign: 'center', mt: 1.5 }}>
                    No obligation. Just a focused conversation about your goals and possible next steps.
                  </Typography>
                </Box>
              </Grid>

              <Grid size={12}>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', textAlign: 'center' }}>
                  Your information will be used to respond to your inquiry.{' '}
                  <Box
                    component="a"
                    href="#top"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      textDecoration: 'underline',
                    }}
                  >
                    Digixito’s privacy policy.
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
    </section>
  )
}
