"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Check } from "lucide-react";

import type { TestimonialSlide } from "@/lib/constant";

interface TestimonialCardProps {
  slide: TestimonialSlide;
}

export function TestimonialCard({ slide }: TestimonialCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 3, md: 4.5 },
        backgroundColor: "#18191c",
        color: "#ffffff",
        border: "1px solid #2e3036",
        borderRadius: "24px",
        height: "100%",
        width: "100%",
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 16px 48px rgba(0,0,0,0.22)",
        transition: "all 0.3s ease",
        boxSizing: "border-box",
        "&:hover": {
          borderColor: slide.brandColor,
          transform: "translateY(-4px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
        },
      }}
    >
      <CardContent
        sx={{
          p: 0,
          "&:last-child": { pb: 0 },
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          flex: "1 1 auto",
        }}
      >
        {/* Top Row: Brand Logo & Industry */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            mb: 3.5,
            minHeight: { xs: "auto", sm: 84 },
          }}
        >
          {/* Stylized Brand Logo */}
          <Box>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: 44,
              }}
            >
              <Box
                component="img"
                src={
                  typeof slide.logoUrl === "object" &&
                  slide.logoUrl !== null &&
                  "src" in slide.logoUrl
                    ? slide.logoUrl.src
                    : slide.logoUrl
                }
                alt={slide.brandName}
                sx={{
                  height:
                    slide.brandType === "treks"
                      ? 34
                      : slide.brandType === "hscore"
                        ? 26
                        : 28,
                  maxWidth: 160,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "DM Mono, monospace",
                fontSize: "0.6875rem",
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: "0.08em",
                mt: 0.75,
              }}
            >
              {slide.industry}
            </Typography>
          </Box>
        </Box>

        {/* Main Testimonial Quote */}
        <Typography
          sx={{
            fontSize: { xs: "0.9375rem", md: "1rem" },
            color: "#f1f5f9",
            lineHeight: 1.7,
            fontWeight: 400,
            letterSpacing: "-0.01em",
            mb: 2.5,
            flexGrow: 1,
          }}
        >
          {slide.quote}
        </Typography>

        {/* Special Note / Closing Dedication */}
        <Typography
          sx={{
            fontSize: { xs: "0.875rem", md: "0.9375rem" },
            color: "#cbd5e1",
            lineHeight: 1.6,
            fontStyle: "italic",
            mb: 3,
            borderLeft: `2px solid ${slide.brandColor}`,
            pl: 2,
          }}
        >
          {slide.specialNote}
        </Typography>

        {/* Key Deliverable Tags */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 4,
            mt: "auto",
          }}
        >
          {slide.deliverables.map((item) => (
            <Chip
              key={item}
              icon={<Check size={12} color="#FFEF46" />}
              label={item}
              size="small"
              sx={{
                backgroundColor: "#24262b",
                border: "1px solid #373a42",
                color: "#e2e8f0",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Footer: Author Block & Large Neon Quote Marks */}
      <Box
        sx={{
          pt: 2.5,
          borderTop: "1px solid #2e3036",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          zIndex: 1,
          mt: "auto",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "1.125rem",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {slide.author}
          </Typography>
          <Typography
            sx={{
              fontFamily: "DM Mono, monospace",
              fontSize: "0.8125rem",
              fontWeight: 700,
              color: "#FFEF46",
              mt: 0.35,
              letterSpacing: "0.04em",
            }}
          >
            {slide.role} • {slide.company}
          </Typography>
        </Box>

        {/* Distinctive Yellow Quote Mark Accent */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 32,
              height: 2,
              backgroundColor: "#FFEF46",
              display: { xs: "none", sm: "block" },
            }}
          />
          <Box
            sx={{
              color: "#FFEF46",
              fontSize: "2.5rem",
              fontWeight: 900,
              lineHeight: 0.7,
              fontFamily: "Georgia, serif",
            }}
          >
            ”
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
