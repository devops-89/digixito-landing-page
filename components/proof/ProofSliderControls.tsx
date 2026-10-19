"use client";

import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProofSliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
  isBeginning: boolean;
  isEnd: boolean;
  label?: string;
  subtext?: string;
}

export function ProofSliderControls({
  onPrev,
  onNext,
  isBeginning,
  isEnd,
  label = "VERIFIED TESTIMONIALS",
  subtext = "Swipe through verified feedback from leadership",
}: ProofSliderControlsProps) {
  return (
    <div className="proof-slider-header reveal-on-scroll reveal-delay-1">
      <div className="slider-label-group">
        <Chip
          label={label}
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
        <span className="slider-subtext">{subtext}</span>
      </div>

      <Stack direction="row" spacing={1}>
        <IconButton
          onClick={onPrev}
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
          onClick={onNext}
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
  );
}
