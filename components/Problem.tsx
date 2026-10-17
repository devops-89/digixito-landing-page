import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const problemPoints = [
  'Disconnected campaigns & pages',
  'Unclear conversion attribution',
  'Guesswork over data-driven scale',
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
            THE SILO PROBLEM
          </Box>
        </Box>

        <div className="problem-grid">
          <div className="problem-left reveal-on-scroll reveal-delay-1">
            <h2>When digital channels work in silos, good opportunities get missed.</h2>
          </div>
          <div className="problem-right reveal-on-scroll reveal-delay-2">
            <p className="problem-lead">
              You can invest in ads, publish content, and bring more visitors to your website, yet
              still wonder what is actually driving growth.
            </p>
            <p className="problem-body">
              When campaigns, landing pages, and reporting operate in separate silos, prospective
              customers experience disjointed messages, budgets are wasted on vanity metrics, and it
              becomes harder to know what move to make next. Digixito connects all four corners into
              one clear, cohesive growth system.
            </p>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
              {problemPoints.map((point) => (
                <Chip
                  key={point}
                  icon={
                    <Box
                      component="span"
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#FFEF46',
                        border: '1px solid #111111',
                        ml: 1,
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
