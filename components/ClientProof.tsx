"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BaseSlide {
  id: string;
  industry: string;
  badge: string;
  timeline: string;
}

interface TestimonialSlide extends BaseSlide {
  isApproach: false;
  brandName: string;
  brandColor: string;
  brandType: "treks" | "hscore" | "hautebaby";
  logoUrl?: string;
  quote: string;
  specialNote: string;
  author: string;
  role: string;
  company: string;
  deliverables: string[];
}

interface ApproachSlide extends BaseSlide {
  isApproach: true;
  title: string;
  description: string;
  steps: { num: string; title: string; text: string }[];
  note: string;
}

type ProofSlide = TestimonialSlide | ApproachSlide;

const proofSlides: ProofSlide[] = [
  {
    id: "mytreks-testimonial",
    brandName: "MyTreks",
    brandColor: "#FF6B35",
    brandType: "treks",
    logoUrl: "/testimonials/mytreks.png",
    industry: "Travel Tech & Mobile App",
    badge: "Verified Tech Partner",
    timeline: "Rapid Timeline Sprint",
    quote:
      "We partnered with the Digixito team to build the MyTreks app, website, admin portal, and they delivered outstanding results within a tight timeline - without compromising on quality. What truly sets them apart is their flexibility and commitment to going the extra mile, even as our requirements continued to evolve. Every interaction was met with a positive, can-do attitude that made the entire process seamless.",
    specialNote:
      "Special thanks to Team Digixito for their dedication and exceptional support. Grateful to have had them as our tech partners.",
    author: "Abhishek Mallik",
    role: "CTO",
    company: "MyTreks",
    deliverables: [
      "MyTreks App",
      "Web Platform",
      "Admin Portal",
      "Agile Evolution",
    ],
    isApproach: false,
  },
  {
    id: "hscore-testimonial",
    brandName: "hScore",
    brandColor: "#38BDF8",
    brandType: "hscore",
    logoUrl: "/testimonials/hscore.svg",
    industry: "FinTech & Wealth Management",
    badge: "Verified US Partner",
    timeline: "6-Month Partnership",
    quote:
      "Over the past six months, the Digixito team has been instrumental in helping us develop a stock portfolio management app for the U.S. market. They’ve supported us across key areas including design, front-end development, branding, and marketing. We’ve been very pleased with their responsiveness, quality of work, and overall support.",
    specialNote:
      "We look forward to building a long-term partnership with Digixito on the strong foundation we’ve established together.",
    author: "Hari Kusumakar",
    role: "Co-Founder",
    company: "hScore",
    deliverables: [
      "Design (UI/UX)",
      "Front-End Development",
      "Branding",
      "U.S. Market Launch",
    ],
    isApproach: false,
  },
  {
    id: "hautebaby-testimonial",
    brandName: "Haute Baby",
    brandColor: "#9333EA",
    brandType: "hautebaby",
    logoUrl: "/testimonials/haute-baby-logo.png",
    industry: "Luxury Children's Apparel & Shopify",
    badge: "Verified Retail Partner",
    timeline: "Ongoing E-Commerce Growth",
    quote:
      "Digixito has been a valuable partner for Haute Baby. Their team has supported our digital marketing, built and continues to manage our Shopify website, and helped us improve our sales.",
    specialNote:
      "We appreciate their ongoing support and practical approach to growing our business.",
    author: "Haute Baby Team",
    role: "Brand Leadership",
    company: "Haute Baby",
    deliverables: [
      "Shopify Website Build",
      "Store Management",
      "Digital Marketing",
      "Sales Optimization",
    ],
    isApproach: false,
  },
  // {
  //   id: 'transparent-approach',
  //   industry: 'Our Client Philosophy',
  //   badge: 'The Digixito Standard',
  //   timeline: 'Continuous Oversight',
  //   title: 'Documenting the goal, the execution, and the learning',
  //   description:
  //     'When partners prefer to keep private financials confidential, we demonstrate the approach: the baseline audit, weekly iterations, and tactical learnings unlocked.',
  //   steps: [
  //     {
  //       num: '01',
  //       title: 'Baseline Attribution Audit',
  //       text: 'Full funnel tracking audit before allocating live engineering or media budget.',
  //     },
  //     {
  //       num: '02',
  //       title: 'Transparent Weekly Logs',
  //       text: 'Weekly experimentation reports with direct strategist and developer access.',
  //     },
  //     {
  //       num: '03',
  //       title: 'Substantiated Business ROI',
  //       text: 'Focusing exclusively on qualified pipeline and production-grade delivery.',
  //     },
  //   ],
  //   note: 'Client case data and verified outcomes shared with formal partner permission.',
  //   isApproach: true,
  // },
];

export default function ClientProof() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="proof-section" id="proof">
      <Box sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1.5 }} className="reveal-on-scroll">
        <Chip
          label="04"
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
          CLIENT TESTIMONIALS & PROOF
        </Box>
      </Box>

      <div className="proof-layout reveal-on-scroll reveal-delay-1">
        <div>
          <h2>Real partners. Real platforms. Measurable impact.</h2>
          <p>
            Direct feedback from founders and CTOs who build, launch, and scale with Digixito.
          </p>
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

      <div className="proof-slider-header reveal-on-scroll reveal-delay-1">
        <div className="slider-label-group">
          <Chip
            label="VERIFIED TESTIMONIALS"
            size="small"
            sx={{
              backgroundColor: "#111111",
              color: "#FFEF46",
              fontFamily: "DM Mono, monospace",
              fontSize: "0.6875rem",
              fontWeight: 800,
              height: 24,
            }}
          />
          <span className="slider-subtext">
            Swipe through verified feedback from leadership
          </span>
        </div>

        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={() => swiperInstance?.slidePrev()}
            disabled={isBeginning}
            aria-label="Previous testimonial"
            sx={{
              width: 44,
              height: 44,
              border: "1px solid #dedad0",
              backgroundColor: "#ffffff",
              color: "#111111",
              "&:hover": {
                borderColor: "#111111",
                backgroundColor: "#f8f6f0",
              },
              "&.Mui-disabled": {
                opacity: 0.35,
              },
            }}
          >
            <ArrowLeft size={18} />
          </IconButton>
          <IconButton
            onClick={() => swiperInstance?.slideNext()}
            disabled={isEnd}
            aria-label="Next testimonial"
            sx={{
              width: 44,
              height: 44,
              border: "1px solid #dedad0",
              backgroundColor: "#ffffff",
              color: "#111111",
              "&:hover": {
                borderColor: "#111111",
                backgroundColor: "#f8f6f0",
              },
              "&.Mui-disabled": {
                opacity: 0.35,
              },
            }}
          >
            <ArrowRight size={18} />
          </IconButton>
        </Stack>
      </div>

      <div className="proof-swiper-container reveal-on-scroll reveal-delay-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.2,
              spaceBetween: 28,
            },
            1080: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
          }}
          pagination={{
            clickable: true,
            el: ".proof-swiper-pagination",
          }}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="proof-swiper"
        >
          {proofSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="proof-slide" style={{ height: "auto", display: "flex" }}>
              {slide.isApproach ? (
                /* Approach Philosophy Card */
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
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
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
              ) : (
                /* Redesigned Testimonial Card matching user's photo format */
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
                      boxShadow: `0 20px 50px rgba(0,0,0,0.35)`,
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
                    {/* Top Row: Brand Logo & Executive Polaroid Photo */}
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
                            justifyContent: "center",
                            py: 0.85,
                            px: 1.75,
                            borderRadius: "12px",
                            backgroundColor: "#ffffff",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            height: 48,
                            minWidth: 100,
                          }}
                        >
                          <Box
                            component="img"
                            src={slide.logoUrl}
                            alt={slide.brandName}
                            sx={{
                              height:
                                slide.brandType === "treks"
                                  ? 32
                                  : slide.brandType === "hscore"
                                  ? 24
                                  : 24,
                              maxWidth: 130,
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
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4, mt: "auto" }}
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
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="proof-swiper-pagination" />
      </div>

      <div className="logo-strip-section">
        <span className="logo-strip-label">
          TRUSTED BY AMBITIOUS TECH & US BUSINESSES
        </span>
        <div className="logo-strip">
          <div
            className="logo-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 22px",
            }}
          >
            <Box
              component="img"
              src="/testimonials/mytreks.png"
              alt="MyTreks"
              sx={{
                height: 28,
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <div
            className="logo-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 22px",
            }}
          >
            <Box
              component="img"
              src="/testimonials/hscore.svg"
              alt="hScore"
              sx={{
                height: 22,
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
          <div
            className="logo-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 22px",
            }}
          >
            <Box
              component="img"
              src="/testimonials/haute-baby-logo.png"
              alt="Haute Baby"
              sx={{
                height: 24,
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
