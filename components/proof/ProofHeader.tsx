"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ArrowRight } from "lucide-react";

interface ProofHeaderProps {
  badgeNumber?: string;
  badgeLabel?: string;
  title?: string;
  subtitle?: string;
}

export function ProofHeader({
  badgeNumber = "04",
  badgeLabel = "CLIENT TESTIMONIALS & PROOF",
  title = "Real partners. Real platforms. Measurable impact.",
  subtitle = "Direct feedback from founders and CTOs who build, launch, and scale with Digixito.",
}: ProofHeaderProps) {
  return (
    <>
      <Box
        sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}
        className="reveal-on-scroll"
      >
        <Chip
          label={badgeNumber}
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
            color: "text.secondary",
          }}
        >
          {badgeLabel}
        </Box>
      </Box>

      <div className="proof-layout reveal-on-scroll reveal-delay-1">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            backgroundColor: "#ffffff",
            border: "1px solid #dedad0",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontFamily: "DM Mono, monospace",
                fontSize: "0.6875rem",
                fontWeight: 700,
                color: "text.secondary",
                letterSpacing: "0.08em",
                mb: 1,
              }}
            >
              READY TO SCALE YOUR APP OR PRODUCT?
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.25rem",
                fontWeight: 800,
                color: "text.primary",
                mb: 1,
              }}
            >
              Partner with a dedicated tech and growth team.
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              Discuss your product, architecture, and marketing roadmap with our
              senior team.
            </Typography>
          </Box>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            color="primary"
            endIcon={<ArrowRight size={16} />}
            sx={{
              py: 1.5,
              px: 3.5,
              fontSize: "0.875rem",
              alignSelf: "flex-start",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            Talk with our team
          </Button>
        </Paper>
      </div>
    </>
  );
}
