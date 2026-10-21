import type { Metadata } from "next";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimationController from "@/components/AnimationController";
import BrandingHero from "@/components/branding/BrandingHero";
import BrandingChallenge from "@/components/branding/BrandingChallenge";
import BrandingSolutions from "@/components/branding/BrandingSolutions";
import BrandingHowWeWork from "@/components/branding/BrandingHowWeWork";
import BrandingClientProof from "@/components/branding/BrandingClientProof";
import BrandingContact from "@/components/branding/BrandingContact";

export const metadata: Metadata = {
  title: "Brand Strategy, Creative & Digital Growth — Digixito",
  description:
    "Digixito brings brand strategy, creative design, digital marketing, and AI-powered insights together to help businesses build credibility, reach their audience, and grow with purpose.",
  openGraph: {
    title: "Brand Strategy, Creative & Digital Growth — Digixito",
    description:
      "We combine strategic thinking, creative execution, performance-focused marketing, and AI-powered capabilities to help businesses build stronger brands.",
    type: "website",
  },
};

export default function BrandingPage() {
  return (
    <>
      <AnimationController />
      <ScrollProgress />
      <Header />
      <main className="site-shell">
        <BrandingHero />
        <BrandingChallenge />
        <BrandingSolutions />
        <BrandingHowWeWork />
        <BrandingClientProof />
        <BrandingContact />
        <WhatsAppButton />
      </main>
    </>
  );
}
