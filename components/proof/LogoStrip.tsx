"use client";

import Box from "@mui/material/Box";
import { logoStripPartners, type LogoStripItem } from "@/lib/constant";

interface LogoStripProps {
  label?: string;
  partners?: LogoStripItem[];
}

export function LogoStrip({
  label = "TRUSTED BY AMBITIOUS TECH & US BUSINESSES",
  partners = logoStripPartners,
}: LogoStripProps) {
  // Duplicate partners for seamless, continuous infinite marquee
  const marqueePartners = [...partners, ...partners];

  return (
    <div className="logo-strip-section reveal-on-scroll">
      <div className="logo-strip-label">
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#FFEF46",
            border: "1px solid #111111",
            display: "inline-block",
          }}
        />
        <span>{label}</span>
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#FFEF46",
            border: "1px solid #111111",
            display: "inline-block",
          }}
        />
      </div>

      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {marqueePartners.map((partner, index) => {
            const imgSrc =
              typeof partner.src === "object" &&
              partner.src !== null &&
              "src" in partner.src
                ? partner.src.src
                : partner.src;

            return (
              <div
                key={`${partner.id}-${index}`}
                className="logo-item"
                title={partner.name}
              >
                <Box
                  component="img"
                  src={imgSrc}
                  alt={partner.name}
                  sx={{
                    height: {
                      xs: Math.round(partner.height * 1.08),
                      sm: partner.height,
                      md: partner.height,
                    },
                    width: "auto",
                    maxWidth: { xs: 240, sm: 260, md: 300 },
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
