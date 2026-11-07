"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, RotateCw, Check } from "lucide-react";

const HERO_VIDEOS = [
  "/videos/hero-workshop-bg.mp4",
  "/videos/hero-bg-1.mp4",
  "/videos/hero-bg-2.mp4",
  "/videos/hero-bg-3.mp4",
  "/videos/hero-bg-4.mp4",
];

export function ReferenceHeroSection() {
  const [liquidHero, setLiquidHero] = useState(false);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [slotSources, setSlotSources] = useState<[string, string]>([
    HERO_VIDEOS[0],
    HERO_VIDEOS[1],
  ]);
  const videoIndexRef = useRef(0);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];

  // Keep the inactive video element preloaded with the upcoming video source
  const handleVideoEnded = (slotEnded: 0 | 1) => {
    if (slotEnded !== activeSlot) return;

    const nextIndex = (videoIndexRef.current + 1) % HERO_VIDEOS.length;
    videoIndexRef.current = nextIndex;

    const inactiveSlot = (slotEnded === 0 ? 1 : 0) as 0 | 1;
    const inactiveVideo = videoRefs[inactiveSlot].current;

    if (inactiveVideo) {
      inactiveVideo.currentTime = 0;
      inactiveVideo.play().catch(() => {});
    }

    // Smoothly cross-fade to the inactive slot
    setActiveSlot(inactiveSlot);

    // Prepare the video after next for the newly inactive slot
    const afterNextIndex = (nextIndex + 1) % HERO_VIDEOS.length;
    setSlotSources((prev) => {
      const updated: [string, string] = [...prev];
      updated[slotEnded] = HERO_VIDEOS[afterNextIndex];
      return updated;
    });
  };

  // Preload and start playback
  useEffect(() => {
    videoRefs[0].current?.play().catch(() => {});
  }, []);

  const openInquiry = (cooling?: string) => {
    window.dispatchEvent(
      new CustomEvent("its-reference-modal", {
        detail: { type: "open-inquiry", payload: { cooling } },
      })
    );
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-between bg-[#091f26] text-[#f4f6ef] overflow-hidden border-b border-slate-800">
      {/* Background Video Layer - Dual Video Cross-fading Loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Video Slot A */}
        <video
          ref={videoRefs[0]}
          src={slotSources[0]}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnded(0)}
          className={`absolute inset-0 w-full h-full object-cover object-center brightness-105 scale-105 transition-opacity duration-1000 ease-in-out ${
            activeSlot === 0 ? "opacity-85 z-10" : "opacity-0 z-0"
          }`}
        />
        {/* Video Slot B */}
        <video
          ref={videoRefs[1]}
          src={slotSources[1]}
          muted
          playsInline
          preload="auto"
          onEnded={() => handleVideoEnded(1)}
          className={`absolute inset-0 w-full h-full object-cover object-center brightness-105 scale-105 transition-opacity duration-1000 ease-in-out ${
            activeSlot === 1 ? "opacity-85 z-10" : "opacity-0 z-0"
          }`}
        />
        {/* Soft gradient overlay for text readability without washing out the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091f26]/85 via-[#091f26]/45 to-transparent z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091f26] via-transparent to-[#091f26]/40 z-20" />
      </div>

      {/* Blueprint Grid with Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(117,185,181,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(117,185,181,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(90deg, transparent, #000 25%)",
        }}
      />
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#19655a]/20 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-36 sm:pt-44 lg:pt-52 pb-16 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Main Hero Copy */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#81e6d6] shadow-[0_0_8px_#81e6d6]" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3c0bb] font-semibold">
              THERMAL ENGINEERING. WITHOUT LIMITS.
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-white leading-[1.05] mb-6 uppercase">
            THERMAL MANAGEMENT <br className="hidden sm:inline" />
            <span className="text-[#81e6d6]">SOLUTIONS</span>
          </h1>

          <p className="text-slate-200 text-lg sm:text-2xl font-medium leading-relaxed max-w-2xl mb-8">
            From Thermal Design to Manufacturing
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10">
            <a
              href="#solutions"
              className="inline-flex items-center justify-between gap-6 px-7 py-4 bg-[#81e6d6] hover:bg-[#a4f5e7] text-[#091f26] font-bold text-xs uppercase tracking-wider rounded transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore our solutions</span>
              <span className="text-lg">↗</span>
            </a>

            <button
              onClick={() => openInquiry()}
              className="inline-flex items-center gap-3 text-sm font-medium text-white hover:text-[#81e6d6] transition-colors cursor-pointer"
            >
              <span>Talk to an engineer</span>
              <span className="text-lg">↗</span>
            </button>
          </div>

          {/* Verification Proof Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800 text-xs font-mono text-[#a9bfb9]">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#0b252c] border border-slate-700 rounded">
              <Check className="w-3.5 h-3.5 text-[#81e6d6]" />
              <span>ISO 9001:2015 certified</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="tracking-wider">Made in Ontario. Built for your world.</span>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="w-full bg-[#07191f] border-t border-slate-800/80 py-6 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-mono text-[#81e6d6]">75+</span>
            <span className="text-slate-300 font-sans">
              years of combined <br />
              <strong>engineering experience</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-mono text-[#81e6d6]">5-axis</span>
            <span className="text-slate-300 font-sans">
              precision CNC <br />
              <strong>manufacturing in-house</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl font-bold font-mono text-[#81e6d6]">In-house</span>
            <span className="text-slate-300 font-sans">
              friction stir welding <br />
              <strong>solid-state technology</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-base font-bold font-mono text-[#81e6d6]">North America</span>
            <span className="text-slate-300 font-sans">
              engineering &amp; manufacturing <br />
              <strong>with global production partners</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
