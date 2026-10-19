"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { ApproachSlide } from "@/lib/constant";

interface ApproachCardProps {
  slide: ApproachSlide;
}

export function ApproachCard({ slide }: ApproachCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        p: { xs: 3, md: 4.5 },
        backgroundColor: "#ffffff",
        border: "1px solid #dedad0",
        borderRadius: "20px",
        height: "100%",
        width: "100%",
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
      }}
    >
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1.5,
            mb: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Chip
              label={slide.industry}
              size="small"
              sx={{
                backgroundColor: "#f8f6f0",
                border: "1px solid #dedad0",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "text.primary",
              }}
            />
            <Chip
              label={slide.timeline}
              size="small"
              sx={{
                backgroundColor: "#111111",
                color: "#FFEF46",
                fontFamily: "DM Mono, monospace",
                fontSize: "0.6875rem",
                fontWeight: 700,
              }}
            />
          </Box>
          <Chip
            icon={
              <Box
                component="span"
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  ml: 1,
                }}
              />
            }
            label={slide.badge}
            size="small"
            sx={{
              backgroundColor: "#ffffff",
              border: "1px solid #dedad0",
              fontSize: "0.6875rem",
              fontFamily: "DM Mono, monospace",
              fontWeight: 700,
            }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "1.25rem",
              fontWeight: 800,
              mb: 1,
              color: "text.primary",
            }}
          >
            {slide.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            {slide.description}
          </Typography>
        </Box>

        <Stack spacing={2} sx={{ mb: 3 }}>
          {slide.steps.map((step) => (
            <Paper
              key={step.title}
              elevation={0}
              sx={{
                display: "flex",
                gap: 2,
                p: 2,
                backgroundColor: "#f8f6f0",
                border: "1px solid #dedad0",
                borderRadius: "10px",
              }}
            >
              <Chip
                label={step.num}
                size="small"
                sx={{
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  fontFamily: "DM Mono, monospace",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  height: 26,
                  width: 28,
                  borderRadius: "6px",
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "text.primary",
                    mb: 0.25,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8125rem",
                    color: "text.secondary",
                  }}
                >
                  {step.text}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </CardContent>

      <Box sx={{ pt: 2, borderTop: "1px solid #dedad0" }}>
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "text.secondary",
            fontStyle: "italic",
          }}
        >
          {slide.note}
        </Typography>
      </Box>
    </Card>
  );
}
