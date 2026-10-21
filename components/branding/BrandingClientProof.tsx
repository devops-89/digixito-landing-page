"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ArrowRight } from "lucide-react";

import {
  ProofSliderControls,
  TestimonialCard,
  LogoStrip,
} from "@/components/proof";
import {
  hauteBabyLogo,
  hscoreLogo,
  mytreksLogo,
  type TestimonialSlide,
} from "@/lib/constant";

export const brandingProofSlides: TestimonialSlide[] = [
  {
    id: "hautebaby-testimonial",
    brandName: "Haute Baby",
    brandColor: "#9333EA",
    brandType: "hautebaby",
    logoUrl: hauteBabyLogo,
    industry: "Luxury Children's Apparel & Shopify",
    badge: "Verified Retail Partner",
    timeline: "Ongoing E-Commerce Growth",
    quote:
      "“Working with Digixito has been a positive experience for Haute Baby. Their team has supported our digital marketing efforts and helped us strengthen our online presence. They also built our Shopify website and continue to manage it, helping keep the site updated and running smoothly as our business grows.”",
    specialNote:
      "Having a team we can rely on for both digital marketing and website support has made Digixito a valuable partner in Haute Baby’s growth.",
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
  {
    id: "hscore-testimonial",
    brandName: "hScore",
    brandColor: "#38BDF8",
    brandType: "hscore",
    logoUrl: hscoreLogo,
    industry: "FinTech & Wealth Management",
    badge: "Verified US Partner",
    timeline: "6-Month Partnership",
    quote:
      "“Over the past six months, the Digixito team has been instrumental in helping us develop a stock portfolio management app for the U.S. market. They’ve supported us across key areas including design, front-end development, branding, and marketing. We’ve been very pleased with their responsiveness, quality of work, and overall support.”",
    specialNote:
      "We look forward to building a long-term partnership with Digixito on the strong foundation we’ve established together.",
    author: "Hari Kusumakar",
    role: "Co-Founder",
    company: "hScore",
    deliverables: [
      "UI/UX Design",
      "Front-End Development",
      "Branding",
      "U.S. Market Launch",
    ],
    isApproach: false,
  },
  {
    id: "mytreks-testimonial",
    brandName: "MyTreks",
    brandColor: "#FF6B35",
    brandType: "treks",
    logoUrl: mytreksLogo,
    industry: "Travel Tech & Mobile App",
    badge: "Verified Tech Partner",
    timeline: "Rapid Timeline Sprint",
    quote:
      "“We partnered with the Digixito team to build the MyTreks app, website, admin portal, and they delivered outstanding results within a tight timeline - without compromising on quality. What truly sets them apart is their flexibility and commitment to going the extra mile.”",
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
];

export default function BrandingClientProof() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="proof-section" id="proof">
      {/* Proof Header with Branding Content */}
      <Box
        sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}
        className="reveal-on-scroll"
      >
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
          <h2>Real Partnerships. Meaningful Work. Shared Growth.</h2>
          <p>
            Hear from businesses that have worked with Digixito across branding,
            digital marketing, design, and digital product development.
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
              READY TO ELEVATE YOUR BRAND?
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
              Partner with a dedicated brand and growth team.
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              Discuss your brand positioning, creative strategy, and marketing
              roadmap with our team.
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

      <ProofSliderControls
        onPrev={() => swiperInstance?.slidePrev()}
        onNext={() => swiperInstance?.slideNext()}
        isBeginning={isBeginning}
        isEnd={isEnd}
      />

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
          {brandingProofSlides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="proof-slide"
              style={{ height: "auto", display: "flex" }}
            >
              <TestimonialCard slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="proof-swiper-pagination" />
      </div>

      {/* Retain Approved Client Logos */}
      <LogoStrip label="TRUSTED BY BUSINESSES ACROSS INDUSTRIES" />
    </section>
  );
}
