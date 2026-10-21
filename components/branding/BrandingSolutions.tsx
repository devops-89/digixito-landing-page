"use client";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ArrowUpRight, Palette, Megaphone, Layout, Sparkles } from "lucide-react";

const brandingSolutions = [
  {
    id: "brand-strategy-identity",
    number: "01",
    title: "Brand Strategy & Identity",
    icon: Palette,
    description:
      "Build a brand that communicates your value, stands out from competitors, and earns customer trust. From brand positioning to visual identity, we help create a consistent brand experience aligned with your business goals.",
    tags: [
      "Brand Strategy & Positioning",
      "Brand Identity & Guidelines",
      "Branding for Startups",
      "Creative Campaign Development",
    ],
  },
  {
    id: "digital-marketing-performance",
    number: "02",
    title: "Digital Marketing & Performance",
    icon: Megaphone,
    description:
      "Reach the right audience with digital marketing strategies designed around your business objectives. Combine audience insights, targeted campaigns, and continuous optimization to improve visibility, attract relevant prospects, and support measurable growth.",
    tags: [
      "Search Engine Optimization (SEO) / Local SEO",
      "AEO / AIO",
      "Google Ads & PPC Management",
      "Social Media Marketing",
      "Marketing Automation & Lead Gen",
    ],
  },
  {
    id: "uiux-experience-design",
    number: "03",
    title: "UI/UX & Digital Experience Design",
    icon: Layout,
    description:
      "Create intuitive digital experiences that make it easier for people to interact with your brand. We bring user research, thoughtful interface design, and conversion-focused thinking together to create experiences across websites, mobile apps, and digital products.",
    tags: [
      "UI/UX Design for Websites & Apps",
      "Product Design & Prototyping",
      "User Research & Optimization",
      "Conversion Rate Optimization (CRO)",
    ],
  },
  {
    id: "ai-powered-marketing-creative",
    number: "04",
    title: "AI-Powered Marketing & Creative",
    icon: Sparkles,
    description:
      "Bring AI into your marketing workflow to uncover useful insights, streamline repetitive tasks, and support smarter creative and campaign decisions. We combine AI capabilities with human strategy and creative thinking to help businesses identify opportunities and improve operational efficiency.",
    tags: [
      "AI-Driven Marketing Insights",
      "Marketing Workflow Automation",
      "AI-Assisted Creative Solutions",
      "Data-Informed Campaign Optimization",
    ],
  },
];

export default function BrandingSolutions() {
  return (
    <Box
      component="section"
      id="solutions"
      sx={{
        backgroundColor: "#f8f6f0",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6, lg: 10 },
        borderTop: "1px solid #dedad0",
      }}
    >
      {/* Section Header */}
      <Box
        className="reveal-on-scroll"
        sx={{
          maxWidth: 1440,
          mx: "auto",
          mb: 6,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: 3,
        }}
      >
        <Box>
          <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
            <Chip
              label="02"
              size="small"
              sx={{
                backgroundColor: "#111111",
                color: "#FFEF46",
                fontWeight: 800,
                fontFamily: "DM Mono, monospace",
                fontSize: "0.6875rem",
                height: 22,
                px: 0.5,
                boxShadow: "none",
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
              OUR SOLUTIONS
            </Box>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.12,
              color: "text.primary",
              maxWidth: 720,
            }}
          >
            Brand Strategy, Creative & Digital Growth — Connected.
          </Typography>
        </Box>
        <Typography
          sx={{
            maxWidth: 420,
            color: "text.secondary",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
          }}
        >
          We combine strategic thinking, creative execution, performance-focused
          marketing, and AI-powered capabilities to help businesses build stronger
          brands and create meaningful digital experiences.
        </Typography>
      </Box>

      {/* Solutions Cards Grid — Clean Minimalist Flat Design */}
      <Box
        sx={{
          maxWidth: 1440,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {brandingSolutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <Card
              key={solution.id}
              elevation={0}
              className={`reveal-on-scroll reveal-delay-${index + 1}`}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: { xs: 3, md: 3.5 },
                borderRadius: "20px",
                backgroundColor: "#ffffff",
                border: "1px solid #dedad0",
                boxShadow: "none",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "#111111",
                  transform: "translateY(-4px)",
                  boxShadow: "none",
                  "& .solution-icon-box": {
                    backgroundColor: "#111111",
                    color: "#FFEF46",
                    borderColor: "#111111",
                  },
                  "& .service-card-arrow": {
                    backgroundColor: "#FFEF46",
                    color: "#111111",
                    transform: "translate(2px, -2px)",
                  },
                },
              }}
            >
              <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                {/* Header: Clean Number and Icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2.75,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "DM Mono, monospace",
                      fontSize: "0.8125rem",
                      fontWeight: 800,
                      color: "#111111",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {solution.number}
                  </Typography>
                  <Box
                    className="solution-icon-box"
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "#f8f6f0",
                      border: "1px solid #dedad0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#111111",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <Icon size={20} />
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#111111",
                    lineHeight: 1.25,
                    mb: 1.5,
                  }}
                >
                  {solution.title}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: "0.84375rem",
                    color: "#55514b",
                    lineHeight: 1.6,
                    mb: 2.75,
                    fontWeight: 500,
                  }}
                >
                  {solution.description}
                </Typography>

                {/* Capability Tags */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.85,
                    mb: 3,
                  }}
                >
                  {solution.tags.map((tag) => (
                    <Box
                      key={tag}
                      component="span"
                      sx={{
                        fontSize: "0.6875rem",
                        fontFamily: "DM Mono, monospace",
                        fontWeight: 700,
                        backgroundColor: "#f8f6f0",
                        color: "#111111",
                        border: "1px solid #dedad0",
                        borderRadius: "8px",
                        py: 0.45,
                        px: 1.1,
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                        transition: "border-color 0.2s ease",
                        "&:hover": {
                          borderColor: "#111111",
                        },
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </CardContent>

              {/* Action Button */}
              <Button
                component="a"
                href="#contact"
                variant="outlined"
                fullWidth
                endIcon={
                  <Box
                    component="span"
                    className="service-card-arrow"
                    sx={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#111111",
                      color: "#ffffff",
                      transition: "all 0.25s ease",
                      ml: 0.5,
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </Box>
                }
                sx={{
                  py: 1.15,
                  px: 2,
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  backgroundColor: "#ffffff",
                  border: "1px solid #dedad0",
                  color: "#111111",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  boxShadow: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#111111",
                    backgroundColor: "#f8f6f0",
                    boxShadow: "none",
                  },
                }}
              >
                Discuss solution
              </Button>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
