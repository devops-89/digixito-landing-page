"use client";

import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Zap } from "lucide-react";

interface TrustMetricsCardsProps {
  sx?: BoxProps["sx"];
  showChevron?: boolean;
}

export default function TrustMetricsCards({
  sx,
  showChevron = false,
}: TrustMetricsCardsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        alignItems: "center",
        ...sx,
      }}
    >
      {/* Social Proof Review Card */}
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          border: "1px solid #dedad0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
          maxWidth: { xs: "100%", sm: 380, md: 360 },
          width: "100%",
          transition: "transform 0.25s ease, border-color 0.25s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            borderColor: "#111111",
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
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
          maxWidth: { xs: "100%", sm: 380, md: 360 },
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 2,
          transition: "transform 0.25s ease, border-color 0.25s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            borderColor: "#111111",
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

      {/* Optional Chevron Indicator Trail */}
      {showChevron && (
        <div className="hero2-chevron-trail" aria-hidden="true">
          <span>&gt;&gt;&gt;&gt;</span>
        </div>
      )}
    </Box>
  );
}
