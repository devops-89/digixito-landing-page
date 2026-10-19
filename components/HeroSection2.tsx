"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  ArrowRight,
  ArrowDownRight,
  Megaphone,
  Zap,
  Rocket,
  Brain,
  Briefcase,
  Cpu,
  Palette,
} from "lucide-react";

export interface HeroSection2Props {
  className?: string;
}

const corePillars = [
  { label: "AI Transformation", icon: Brain, href: "#solutions" },
  { label: "Business Transformation", icon: Briefcase, href: "#solutions" },
  { label: "Product Engineering", icon: Cpu, href: "#solutions" },
  { label: "Design Intelligence", icon: Palette, href: "#solutions" },
];

export default function HeroSection2({ className = "" }: HeroSection2Props) {
  return (
    <section className={`hero-section-2 ${className}`} id="top">
      {/* Responsive Container constrained to site grid with matching horizontal padding */}
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: { xl: 1440 },
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          width: "100%",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* 3-Column Hero Grid */}
        <div className="hero2-container">
          {/* LEFT COLUMN: Clean, High-Contrast Modern Minimalist Typography & CTAs */}
          <div className="hero2-left">
            {/* Eyebrow Pill with Live Indicator */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.25,
                py: 0.65,
                px: 1.6,
                borderRadius: 999,
                backgroundColor: "#ffffff",
                border: "1px solid #dedad0",
                boxShadow: "none",
                mb: 2.75,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 8,
                  height: 8,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                    opacity: 0.75,
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#111111",
                }}
              >
                Enterprise Tech & Growth Partner
              </Typography>
            </Box>

            <Typography
              component="h1"
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: {
                  xs: "2.35rem",
                  sm: "2.85rem",
                  md: "3.15rem",
                  lg: "3.45rem",
                },
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: { xs: 1.15, md: 1.12 },
                mb: 2.25,
                color: "#111111",
                maxWidth: 560,
              }}
            >
              <Box component="span" sx={{ display: "block" }}>
                Intelligent Technology.
              </Box>
              <Box component="span" sx={{ display: "block", mt: 0.5 }}>
                Transformative{" "}
                <Box component="span" className="hero2-text-highlight">
                  business scale.
                </Box>
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Manrope, sans-serif",
                fontSize: { xs: "0.95rem", md: "1.03125rem" },
                lineHeight: 1.65,
                color: "#524e47",
                fontWeight: 500,
                maxWidth: 480,
                mb: 3.5,
              }}
            >
              We partner with ambitious enterprises to engineer custom AI platforms,
              resilient product software, and digital growth systems.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 2,
                mb: 4,
              }}
            >
              <Button
                component="a"
                href="#contact"
                variant="contained"
                endIcon={<ArrowRight size={16} />}
                sx={{
                  whiteSpace: "nowrap",
                  minWidth: "max-content",
                  flexShrink: 0,
                  width: { xs: "100%", sm: "fit-content" },
                  py: 1.25,
                  px: 2.75,
                  fontSize: "0.875rem",
                  fontWeight: 800,
                  backgroundColor: "#FFEF46",
                  color: "#111111",
                  borderRadius: 999,
                  boxShadow: "none",
                  border: "1px solid #111111",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    backgroundColor: "#ffe91a",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(255, 239, 70, 0.45)",
                  },
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
                  width: { xs: "100%", sm: "fit-content" },
                  py: 1.25,
                  px: 2.5,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  borderColor: "#dedad0",
                  backgroundColor: "#ffffff",
                  color: "#111111",
                  borderRadius: 999,
                  boxShadow: "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#111111",
                    backgroundColor: "#f8f6f0",
                    transform: "translateY(-2px)",
                    boxShadow: "none",
                  },
                }}
              >
                Explore our solutions
              </Button>
            </Box>
          </div>

          <div className="hero2-center">
            <div className="hero2-backdrop-text" aria-hidden="true">
              BOOST NOW
            </div>

            <div className="hero2-floating-badge hero2-badge-megaphone">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: "#ff6b4a",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                }}
              >
                <Megaphone size={24} />
              </Box>
            </div>

            <div className="hero2-floating-badge hero2-badge-lightning">
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "12px",
                  backgroundColor: "#111111",
                  color: "#FFEF46",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                }}
              >
                <Zap size={24} fill="#FFEF46" />
              </Box>
            </div>

            <div className="hero2-floating-badge hero2-badge-rocket">
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                }}
              >
                <Rocket size={26} />
              </Box>
            </div>

            <div className="hero2-character-wrapper">
              <img
                src="/hero2-character.png"
                alt="Digixito digital growth leader with megaphone leaping forward into innovation"
                className="hero2-character-img"
              />
            </div>
          </div>

          <div className="hero2-right">
            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid #dedad0",
                boxShadow: "none",
                maxWidth: 360,
                width: "100%",
                transition: "transform 0.25s ease, border-color 0.25s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: "#111111",
                  boxShadow: "none",
                },
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#f59e0b",
                  fontSize: "1.05rem",
                  letterSpacing: "2px",
                  mb: 1.25,
                }}
              >
                ★★★★★
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    fontSize: "0.8125rem",
                    fontWeight: 800,
                    color: "#111111",
                    fontFamily: "DM Mono, monospace",
                    backgroundColor: "rgba(255, 239, 70, 0.5)",
                    px: 0.8,
                    py: 0.2,
                    borderRadius: "6px",
                  }}
                >
                  4.9 / 5.0
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "0.9375rem",
                  color: "#111111",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.35,
                  mb: 0.5,
                }}
              >
                Trusted Tech & Product Partner
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8125rem",
                  color: "#55524c",
                  fontFamily: "Manrope, sans-serif",
                  lineHeight: 1.45,
                  mb: 2,
                }}
              >
                Accelerating growth for ambitious US enterprises
              </Typography>

              {/* Avatar Cluster */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/testimonials/abhishek-mallik.jpg"
                    alt="Client avatar"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ffffff",
                      marginLeft: 0,
                    }}
                  />
                  <img
                    src="/testimonials/hari-kusumakar.jpg"
                    alt="Client avatar"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ffffff",
                      marginLeft: -10,
                    }}
                  />
                  <img
                    src="/placeholder-user.jpg"
                    alt="Client avatar"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #ffffff",
                      marginLeft: -10,
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.8125rem",
                    fontFamily: "DM Mono, monospace",
                    fontWeight: 700,
                    color: "#111111",
                  }}
                >
                  450+ Verified Reviews
                </Typography>
              </Box>
            </Box>

            {/* Key Metric Card */}
            <Box
              sx={{
                p: 2.25,
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid #dedad0",
                boxShadow: "none",
                maxWidth: 360,
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "transform 0.25s ease, border-color 0.25s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  borderColor: "#111111",
                  boxShadow: "none",
                },
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "12px",
                  backgroundColor: "#111111",
                  color: "#FFEF46",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "none",
                }}
              >
                <Zap size={22} fill="#FFEF46" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#111111",
                    fontFamily: "Manrope, sans-serif",
                    lineHeight: 1.2,
                  }}
                >
                  3.8x Faster
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8125rem",
                    color: "#55514b",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  From Concept to Production Scale
                </Typography>
              </Box>
            </Box>

            {/* Chevron Indicator Trail */}
            <div className="hero2-chevron-trail" aria-hidden="true">
              <span>&gt;&gt;&gt;&gt;</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
