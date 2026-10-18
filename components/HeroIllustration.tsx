"use client";

import { useState } from "react";
import { Cpu, Palette, ArrowUpRight } from "lucide-react";
import LottiePlayer from "@/components/LottiePlayer";

export default function HeroIllustration() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`hero-vector-stage ${isHovered ? "is-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Animated hero illustration showcasing AI Transformation and Intelligent Systems"
    >
      {/* Ambient background glow orbs */}
      <div className="vector-ambient-glow" />
      <div className="vector-ambient-glow-secondary" />

      {/* Decorative Rotating Orbital Rings */}
      <div className="vector-orbital-ring ring-outer" />
      <div className="vector-orbital-ring ring-inner" />

      {/* Primary Center Content: Clean Lottie Animation Banner */}
      <div className="hero-lottie-stage">
        <LottiePlayer
          src="/banners/AI-powered-abstract.json"
          loop={true}
          autoplay={true}
          className="hero-lottie-canvas"
          ariaLabel="AI-powered marketing tools and systems abstract animation"
        />
      </div>

      {/* Floating Interactive Live Badges (Framing the animation without covering key artwork) */}

      {/* Floating Badge 1: Top Right - AI Transformation */}
      <div className="v-float-badge v-badge-top-right">
        <div className="v-badge-pulse-dot" />
        <div className="v-badge-content">
          <div className="v-badge-header">
            <span className="v-badge-val">AI Transformation</span>
            <span className="v-badge-tag">Custom LLMs</span>
          </div>
          <span className="v-badge-sub">Intelligent Automation & MLOps</span>
        </div>
      </div>

      {/* Floating Badge 2: Center Right - Product Engineering */}
      <div className="v-float-badge v-badge-mid-right">
        <div className="v-badge-icon-box gold">
          <Cpu size={15} />
        </div>
        <div className="v-badge-content">
          <div className="v-badge-val">Product Engineering</div>
          <span className="v-badge-sub">High-Availability SaaS & Mobile</span>
        </div>
      </div>

      {/* Floating Badge 3: Bottom Left - Design Intelligence */}
      <div className="v-float-badge v-badge-bottom-left">
        <div className="v-badge-icon-box green">
          <Palette size={14} />
        </div>
        <div className="v-badge-content">
          <div className="v-badge-val">Design Intelligence</div>
          <span className="v-badge-sub">Human-Centered UI/UX Systems</span>
        </div>
      </div>

      {/* Floating Badge 4: Bottom Center - Active Tech Partner */}
      <div className="v-float-pill-bottom">
        <span className="v-pill-live-dot" />
        <span className="v-pill-text">AI & PRODUCT ENGINEERING PARTNER • US MARKET</span>
        <ArrowUpRight size={13} className="v-pill-arrow" />
      </div>
    </div>
  );
}
