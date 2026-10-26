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
  slatWidth = 8,
  slatHeight = 22,
  gap = 3,
  roundness = 0.65,
  scale = 1.6,
  speed = 0.45,
  direction = 250,
  chop = 0.45,
  stretch = 0.15,
  glint = 0.6,
  contrast = 1.2,
  perspective = 0.6,
  fog = 0.5,
  interactive = true,
  cursorStrength = 1.1,
  cursorSize = 45,
  swirl = 0.15,
  trail = 1.4,
  lean = 0.2,
  intro = true,
  introDuration = 1.5,
  opacity = 0.22,
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
