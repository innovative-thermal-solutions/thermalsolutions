"use client";

import React from "react";
import MicroSlats, { MicroSlatsProps } from "@/components/ui/MicroSlats";

export interface GlobalMicroSlatsBackgroundProps extends Partial<MicroSlatsProps> {
  opacity?: number;
  fixed?: boolean;
}

/**
 * GlobalMicroSlatsBackground
 * Provides an interactive WebGL wave slat effect inspired by precision heat-sink fin matrices & fluid flow.
 * Default color palette is tuned to ITS high-tech coolant blue & pure white glint highlights.
 */
export function GlobalMicroSlatsBackground({
  preset = "swell",
  color = "#0284c7", // ITS Coolant Blue (matches fin array & fluid coolant)
  glintColor = "#38bdf8", // Crest light glint
  backgroundColor = "transparent",
  slatWidth = 9,
  slatHeight = 24,
  gap = 3,
  roundness = 0.7,
  scale = 1.4,
  speed = 0.55,
  direction = 250,
  chop = 0.5,
  stretch = 0.18,
  glint = 0.9,
  contrast = 1.4,
  perspective = 0.6,
  fog = 0.35,
  interactive = true,
  cursorStrength = 1.4,
  cursorSize = 50,
  swirl = 0.2,
  trail = 1.6,
  lean = 0.25,
  intro = true,
  introDuration = 1.5,
  opacity = 0.6,
  fixed = true,
  className = "",
  style,
}: GlobalMicroSlatsBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`${
        fixed ? "fixed inset-0" : "absolute inset-0"
      } w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
      style={{
        opacity,
        ...style,
      }}
    >
      <MicroSlats
        preset={preset}
        color={color}
        glintColor={glintColor}
        backgroundColor={backgroundColor}
        slatWidth={slatWidth}
        slatHeight={slatHeight}
        gap={gap}
        roundness={roundness}
        scale={scale}
        speed={speed}
        direction={direction}
        chop={chop}
        stretch={stretch}
        glint={glint}
        contrast={contrast}
        perspective={perspective}
        fog={fog}
        interactive={interactive}
        cursorStrength={cursorStrength}
        cursorSize={cursorSize}
        swirl={swirl}
        trail={trail}
        lean={lean}
        intro={intro}
        introDuration={introDuration}
      />
    </div>
  );
}

export default GlobalMicroSlatsBackground;
