"use client";

import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import type { AnimationItem } from "lottie-web";

export interface LottiePlayerProps {
  src?: string;
  animationData?: any;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  renderer?: "svg" | "canvas" | "html";
  ariaLabel?: string;
  preserveAspectRatio?: string;
  onLoaded?: () => void;
  onError?: (err: any) => void;
}

export interface LottiePlayerHandle {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setSpeed: (speed: number) => void;
  goToAndPlay: (value: number, isFrame?: boolean) => void;
  goToAndStop: (value: number, isFrame?: boolean) => void;
  getInstance: () => AnimationItem | null;
}

const LottiePlayer = forwardRef<LottiePlayerHandle, LottiePlayerProps>(
  function LottiePlayer(
    {
      src,
      animationData,
      loop = true,
      autoplay = true,
      speed = 1,
      className = "",
      style,
      renderer = "svg",
      ariaLabel = "Lottie animation",
      onLoaded,
      onError,
      preserveAspectRatio = "xMidYMid meet",
    },
    ref,
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const animItemRef = useRef<AnimationItem | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    useImperativeHandle(
      ref,
      () => ({
        play: () => animItemRef.current?.play(),
        pause: () => animItemRef.current?.pause(),
        stop: () => animItemRef.current?.stop(),
        setSpeed: (s: number) => animItemRef.current?.setSpeed(s),
        goToAndPlay: (v: number, isFrame = false) =>
          animItemRef.current?.goToAndPlay(v, isFrame),
        goToAndStop: (v: number, isFrame = false) =>
          animItemRef.current?.goToAndStop(v, isFrame),
        getInstance: () => animItemRef.current,
      }),
      [],
    );

    useEffect(() => {
      let isCancelled = false;
      let currentAnim: AnimationItem | null = null;

      const initLottie = async () => {
        try {
          const lottieModule = await import("lottie-web");
          const lottie = lottieModule.default || lottieModule;

          if (isCancelled || !containerRef.current) return;

          if (animItemRef.current) {
            animItemRef.current.destroy();
            animItemRef.current = null;
          }

          const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          const animConfig: any = {
            container: containerRef.current,
            renderer,
            loop: prefersReducedMotion ? false : loop,
            autoplay: prefersReducedMotion ? false : autoplay,
            rendererSettings: {
              preserveAspectRatio,
              clearCanvas: true,
              progressiveLoad: true,
              hideOnTransparent: true,
            },
          };

          if (animationData) {
            animConfig.animationData = animationData;
          } else if (src) {
            animConfig.path = src;
          } else {
            return;
          }

          currentAnim = lottie.loadAnimation(animConfig);
          animItemRef.current = currentAnim;

          if (speed !== 1) {
            currentAnim.setSpeed(speed);
          }

          currentAnim.addEventListener("DOMLoaded", () => {
            if (!isCancelled) {
              setIsLoaded(true);
              onLoaded?.();
            }
          });

          currentAnim.addEventListener("data_failed", (err) => {
            if (!isCancelled) {
              setHasError(true);
              onError?.(err);
            }
          });
        } catch (err) {
          if (!isCancelled) {
            setHasError(true);
            onError?.(err);
          }
        }
      };

      initLottie();

      return () => {
        isCancelled = true;
        if (currentAnim) {
          currentAnim.destroy();
        }
        if (animItemRef.current) {
          animItemRef.current.destroy();
          animItemRef.current = null;
        }
      };
    }, [
      src,
      animationData,
      loop,
      autoplay,
      speed,
      renderer,
      preserveAspectRatio,
      onLoaded,
      onError,
    ]);

    return (
      <div
        ref={containerRef}
        className={`lottie-player-container ${className}`}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.4s ease",
          opacity: isLoaded ? 1 : 0.4,
          ...style,
        }}
        role="img"
        aria-label={ariaLabel}
      />
    );
  },
);

export default LottiePlayer;
