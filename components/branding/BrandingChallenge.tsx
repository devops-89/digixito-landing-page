"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const keyChallenges = [
  "Unclear Brand Positioning",
  "Inconsistent Brand Identity & Messaging",
  "Low Digital Visibility & Audience Engagement",
  "Marketing Campaigns That Struggle to Convert",
];

export default function BrandingChallenge() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">
        {/* Section Index Chip & Title */}
        <Box
          sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}
          className="reveal-on-scroll"
        >
          <Chip
            label="01"
            size="small"
            sx={{
              backgroundColor: "#111111",
              color: "#FFEF46",
              fontWeight: 800,
              fontFamily: "DM Mono, monospace",
              fontSize: "0.6875rem",
              height: 22,
              px: 0.5,
            }}
          />
          <Box
            component="span"
            sx={{
              fontFamily: "DM Mono, monospace",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#cccccc",
            }}
          >
            THE GROWTH CHALLENGE
          </Box>
        </Box>

        <div className="problem-grid">
          <div className="problem-left reveal-on-scroll reveal-delay-1">
            <h2>Great Businesses Need More Than Just Visibility.</h2>
          </div>
          <div className="problem-right reveal-on-scroll reveal-delay-2">
            <p className="problem-lead">
              A strong brand needs clear positioning, memorable creative, and the
              right digital strategy to stand out in a competitive market.
            </p>
            <p className="problem-body">
              Disconnected branding, inconsistent messaging, and
              underperforming marketing campaigns can make it harder to attract
              the right audience and turn attention into business growth.
            </p>
            <p className="problem-body" style={{ marginBottom: "24px" }}>
              Digixito brings brand strategy, creative design, digital marketing,
              and AI-powered insights together to help businesses build
              credibility, reach their audience, and grow with purpose.
            </p>

            <Typography
              sx={{
                fontFamily: "DM Mono, monospace",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#FFEF46",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Key Challenges We Help Address
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {keyChallenges.map((challenge) => (
                <Chip
                  key={challenge}
                  icon={
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#FFEF46",
                        border: "1px solid #111111",
                        marginLeft: 6,
                        display: "inline-block",
                      }}
                    />
                  }
                  label={challenge}
                  sx={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #dedad0",
                    color: "#111111",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    py: 2.25,
                    px: 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#111111",
                      backgroundColor: "#faf8f4",
                      transform: "translateY(-1px)",
                    },
                  }}
                />
              ))}
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
}
