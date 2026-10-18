"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowRight, ArrowDownRight, CheckCircle2 } from "lucide-react";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section className="hero" id="top">
      {/* LEFT: Shortened, high-converting copy aligned with the 4 core solutions */}
      <div className="hero-copy">
        <Box sx={{ mb: 2.5 }} className="animate-load-badge">
          <Chip
            icon={
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#111111",
                  display: "inline-block",
                  marginLeft: 6,
                  animation: "pulse 2s infinite",
                }}
              />
            }
            label="ENTERPRISE TECH & GROWTH PARTNER"
            size="small"
            sx={{
              backgroundColor: "#ffffff",
              color: "#111111",
              border: "1px solid #dedad0",
              fontFamily: "DM Mono, monospace",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              py: 2,
              px: 1,
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            }}
          />
        </Box>

        <h1 className="animate-load-title">
          Intelligent technology.<br />
          Transformative <span className="hero-accent-underline">business scale.</span>
        </h1>

        <p className="hero-sub animate-load-sub">
          Digixito partners with ambitious businesses to innovate and scale through AI Transformation,
          Business Transformation, Product Engineering, and Design Intelligence.
        </p>

        <Box sx={{ mt: 3.5, mb: 2.5 }} className="animate-load-cta">
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
            <Button
              component="a"
              href="#contact"
              variant="contained"
              color="primary"
              endIcon={<ArrowRight size={16} />}
              sx={{
                whiteSpace: "nowrap",
                minWidth: "max-content",
                flexShrink: 0,
                width: "fit-content",
                py: 1.35,
                px: 3,
                fontSize: "0.875rem",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              Talk with our team
            </Button>
            <Button
              component="a"
              href="#solutions"
              variant="outlined"
              endIcon={<ArrowDownRight size={16} />}
              sx={{
                whiteSpace: "nowrap",
                minWidth: "max-content",
                flexShrink: 0,
                width: "fit-content",
                py: 1.35,
                px: 3,
                fontSize: "0.875rem",
                borderColor: "#dedad0",
                backgroundColor: "#ffffff",
                color: "#111111",
                "&:hover": {
                  borderColor: "#111111",
                  backgroundColor: "rgba(17,17,17,0.04)",
                },
              }}
            >
              Explore our solutions
            </Button>
          </Stack>

          {/* Core solution tags */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: { xs: 1.25, sm: 2 },
              color: "text.secondary",
              fontSize: "0.78125rem",
              fontFamily: "DM Mono, monospace",
              fontWeight: 600,
              mt: 1.5,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <CheckCircle2 size={13} color="#111111" />
              <span>AI Transformation</span>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <CheckCircle2 size={13} color="#111111" />
              <span>Business Transformation</span>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <CheckCircle2 size={13} color="#111111" />
              <span>Product Engineering</span>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
              <CheckCircle2 size={13} color="#111111" />
              <span>Design Intelligence</span>
            </Box>
          </Box>
        </Box>

        {/* Social Proof Line */}
        <Box
          className="hero-proofline animate-load-proof"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mt: 3.5,
            pt: 2.5,
            borderTop: "1px solid #e8e4da",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              color: "#f59e0b",
              fontSize: "0.875rem",
              letterSpacing: "1px",
            }}
          >
            ★★★★★
          </Box>
          <Typography
            sx={{
              fontSize: "0.78125rem",
              color: "text.secondary",
              fontFamily: "DM Mono, monospace",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            TRUSTED TECH & PRODUCT PARTNER FOR AMBITIOUS U.S. BUSINESSES
          </Typography>
        </Box>

        <a href="#problem" className="scroll-down-hint" aria-label="Scroll down to explore">
          <span className="scroll-down-mouse">
            <span className="scroll-down-wheel" />
          </span>
          <span>Scroll to explore</span>
        </a>
      </div>

      {/* RIGHT: Animated Vector Illustration (instead of text card) */}
      <div className="hero-illustration-wrapper animate-load-visual">
        <HeroIllustration />
      </div>
    </section>
  );
}
