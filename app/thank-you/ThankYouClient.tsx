"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  FileText,
  Sparkles,
} from "lucide-react";

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const service = searchParams.get("service") || "";
  const company = searchParams.get("company") || "";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#faf6eb",
        color: "#111111",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Header with Brand Logo */}
      <Box
        component="header"
        sx={{
          width: "100%",
          py: { xs: 2.5, md: 3 },
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          backgroundColor: "#faf6eb",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            maxWidth: { xl: 1440 },
            px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            component={Link}
            href="/"
            aria-label="Digixito Home"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              "&:hover": {
                transform: "scale(1.02)",
                opacity: 0.9,
              },
            }}
          >
            <Box
              component="img"
              src="/final_logo.svg"
              alt="Digixito"
              sx={{
                height: { xs: 42, md: 64 },
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>

          <Button
            component={Link}
            href="/"
            variant="outlined"
            startIcon={<ArrowLeft size={16} />}
            sx={{
              borderColor: "#dedad0",
              color: "#111111",
              backgroundColor: "#ffffff",
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "none",
              py: 1,
              px: 2.5,
              borderRadius: "10px",
              "&:hover": {
                borderColor: "#111111",
                backgroundColor: "#f8f6f0",
              },
            }}
          >
            Back to Home
          </Button>
        </Container>
      </Box>

      {/* Main Content Hero */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 5, md: 9 },
          px: { xs: 2.5, sm: 4, md: 6 },
          flex: "1 0 auto",
        }}
      >
        {/* Confirmation Hero Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3.5, sm: 5, md: 7 },
            backgroundColor: "#ffffff",
            border: "1px solid #dedad0",
            borderRadius: "24px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.04)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            mb: 5,
          }}
        >
          {/* Subtle Top Accent Bar */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: "linear-gradient(90deg, #111111, #FFEF46, #111111)",
            }}
          />

          {/* Glowing Animated Success Badge */}
          <Box
            sx={{
              width: { xs: 68, md: 80 },
              height: { xs: 68, md: 80 },
              borderRadius: "50%",
              backgroundColor: "#FFEF46",
              color: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
              boxShadow: "0 0 0 8px rgba(255, 239, 70, 0.22), 0 8px 24px rgba(255, 239, 70, 0.4)",
              position: "relative",
            }}
          >
            <Check size={38} strokeWidth={2.75} />
          </Box>

          {/* Status Chip */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
              mb: 2.5,
              width: "100%",
            }}
          >
            <Chip
              label="INQUIRY CONFIRMED"
              size="small"
              sx={{
                backgroundColor: "#111111",
                color: "#FFEF46",
                fontWeight: 800,
                fontFamily: "DM Mono, monospace",
                fontSize: "0.6875rem",
                height: 24,
                letterSpacing: "0.08em",
                px: 0.75,
              }}
            />
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
              label="DISPATCHED TO SENIOR ARCHITECTS"
              size="small"
              sx={{
                backgroundColor: "#f8f6f0",
                border: "1px solid #dedad0",
                fontSize: "0.6875rem",
                fontFamily: "DM Mono, monospace",
                fontWeight: 700,
                color: "text.primary",
              }}
            />
          </Box>

          {/* Heading */}
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.5rem" },
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              color: "text.primary",
              textAlign: "center",
              alignSelf: "center",
              width: "100%",
              mx: "auto",
              mb: 2,
            }}
          >
            {name ? `Thank you, ${name}!` : "Thank you for reaching out!"}
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1875rem" },
              color: "text.secondary",
              maxWidth: 680,
              mx: "auto",
              width: "100%",
              textAlign: "center",
              lineHeight: 1.7,
              mb: 3.5,
            }}
          >
            We’ve received your inquiry
            {company ? (
              <>
                {" "}for <strong>{company}</strong>
              </>
            ) : null}
            . Our senior engineering leadership and growth strategists are
            already reviewing your objectives.
          </Typography>

          {/* Service & Context Pills */}
          {service && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1.5,
                justifyContent: "center",
                alignSelf: "center",
                p: 1.5,
                backgroundColor: "#f8f6f0",
                border: "1px solid #dedad0",
                borderRadius: "14px",
                mb: 4,
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "text.secondary",
                }}
              >
                FOCUS AREA:
              </Typography>
              <Chip
                label={service}
                size="small"
                sx={{
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  fontFamily: "DM Mono, monospace",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: "0.75rem",
                  color: "#047857",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Clock size={14} /> Response window: Under 24h
              </Typography>
            </Box>
          )}

          {/* Primary Action Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              component={Link}
              href="/"
              variant="contained"
              color="primary"
              endIcon={<ArrowRight size={18} />}
              sx={{
                py: 1.75,
                px: 4.5,
                fontSize: "0.9375rem",
                fontWeight: 800,
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              Explore Digixito Platform
            </Button>
          </Box>
        </Paper>

        {/* What Happens Next Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "DM Mono, monospace",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "text.secondary",
                letterSpacing: "0.1em",
                mb: 1,
              }}
            >
              OUR ONBOARDING PROTOCOL
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "text.primary",
              }}
            >
              What happens next?
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {[
              {
                step: "01",
                title: "Scope & Architecture Review",
                timeline: "Within 2–4 hours",
                description:
                  "Our principal architects study your project goals, tech stack, and scalability requirements to formulate an informed perspective before we talk.",
                icon: <FileText size={20} color="#111111" />,
              },
              {
                step: "02",
                title: "Senior Discovery Consultation",
                timeline: "Scheduled at your convenience",
                description:
                  "A focused 30-minute technical exchange with senior engineers who build and ship platforms — zero sales pitch, 100% actionable solutions.",
                icon: <Sparkles size={20} color="#111111" />,
              },
              {
                step: "03",
                title: "Tailored Technical Roadmap",
                timeline: "Within 48 hours",
                description:
                  "You receive an executable milestone blueprint detailing architecture, sprint cadence, team composition, and transparent commercial options.",
                icon: <Clock size={20} color="#111111" />,
              },
            ].map((item) => (
              <Box key={item.step}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3.5,
                    backgroundColor: "#ffffff",
                    border: "1px solid #dedad0",
                    borderRadius: "18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 2.5,
                      }}
                    >
                      <Chip
                        label={item.step}
                        size="small"
                        sx={{
                          backgroundColor: "#111111",
                          color: "#FFEF46",
                          fontFamily: "DM Mono, monospace",
                          fontWeight: 800,
                          fontSize: "0.75rem",
                          height: 26,
                          width: 32,
                          borderRadius: "6px",
                        }}
                      />
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "10px",
                          backgroundColor: "#f8f6f0",
                          border: "1px solid #dedad0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: 800,
                        color: "text.primary",
                        mb: 0.75,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "DM Mono, monospace",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: "#047857",
                        mb: 1.5,
                        display: "inline-block",
                      }}
                    >
                      {item.timeline}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.875rem",
                        color: "text.secondary",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Footer Copyright */}
      <Box
        component="footer"
        sx={{
          py: 3,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          textAlign: "center",
          backgroundColor: "#faf6eb",
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Mono, monospace",
            fontSize: "0.75rem",
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Digixito Technologies. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
