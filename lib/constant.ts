import type { StaticImageData } from "next/image";

import mytreksLogo from "@/public/testimonials/mytreks.png";
import hscoreLogo from "@/public/testimonials/hscore.svg";
import hauteBabyLogo from "@/public/testimonials/haute-baby-logo.png";
import discoverstemLogo from "@/public/testimonials/discoverstem.png";
import slaterMatsilLogo from "@/public/testimonials/slater-matsil.png";
import stacyMontessoriLogo from "@/public/testimonials/stacy-montessori.webp";
import tyiLogo from "@/public/testimonials/TYI-Logo.png";

export {
  mytreksLogo,
  hscoreLogo,
  hauteBabyLogo,
  discoverstemLogo,
  slaterMatsilLogo,
  stacyMontessoriLogo,
  tyiLogo,
};

export interface BaseSlide {
  id: string;
  industry: string;
  badge: string;
  timeline: string;
}

export interface TestimonialSlide extends BaseSlide {
  isApproach: false;
  brandName: string;
  brandColor: string;
  brandType: "treks" | "hscore" | "hautebaby" | string;
  logoUrl?: string | StaticImageData;
  quote: string;
  specialNote: string;
  author: string;
  role: string;
  company: string;
  deliverables: string[];
}

export interface ApproachSlide extends BaseSlide {
  isApproach: true;
  title: string;
  description: string;
  steps: { num: string; title: string; text: string }[];
  note: string;
}

export type ProofSlide = TestimonialSlide | ApproachSlide;

export interface LogoStripItem {
  id: string;
  name: string;
  src: string | StaticImageData;
  height: number;
}

export const proofSlides: ProofSlide[] = [
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
    id: "mytreks-testimonial",
    brandName: "MyTreks",
    brandColor: "#FF6B35",
    brandType: "treks",
    logoUrl: mytreksLogo,
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
    id: "hautebaby-testimonial",
    brandName: "Haute Baby",
    brandColor: "#9333EA",
    brandType: "hautebaby",
    logoUrl: hauteBabyLogo,
    industry: "Luxury Children's Apparel & Shopify",
    badge: "Verified Retail Partner",
    timeline: "Ongoing E-Commerce Growth",
    quote:
      "Working with Digixito has been a positive experience for Haute Baby. Their team has supported our digital marketing efforts and helped us strengthen our online presence. They also built our Shopify website and continue to manage it, helping keep the site updated and running smoothly as our business grows.",
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
];

export const logoStripPartners: LogoStripItem[] = [
  {
    id: "mytreks",
    name: "MyTreks",
    src: mytreksLogo,
    height: 48,
  },
  {
    id: "hscore",
    name: "hScore",
    src: hscoreLogo,
    height: 42,
  },
  {
    id: "hautebaby",
    name: "Haute Baby",
    src: hauteBabyLogo,
    height: 46,
  },
  {
    id: "discoverstem",
    name: "DiscoverSTEM",
    src: discoverstemLogo,
    height: 46,
  },
  {
    id: "slater-matsil",
    name: "Slater Matsil",
    src: slaterMatsilLogo,
    height: 38,
  },
  {
    id: "stacy-montessori",
    name: "Stacy Montessori",
    src: stacyMontessoriLogo,
    height: 98,
  },
  {
    id: "tyi",
    name: "TYI",
    src: tyiLogo,
    height: 48,
  },
];
