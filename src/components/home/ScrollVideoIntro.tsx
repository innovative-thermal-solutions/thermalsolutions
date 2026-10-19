"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  Gauge,
  Layers,
  Cpu,
  Factory,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  Sliders,
  Flame,
  Droplets,
  Wind,
} from "lucide-react";

const TOTAL_FRAMES = 240;
const DURATION_SECONDS = 10.0;

interface StageInfo {
  stage: string;
  badge: string;
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string; unit?: string }[];
  accentColor: string;
}

const STAGES: { start: number; end: number; data: StageInfo }[] = [
  {
    start: 0,
    end: 0.22,
    data: {
      stage: "01",
      badge: "PHASE 01 // AIR-COOLED ARCHITECTURE",
      category: "HEAT SINK MACHINING",
      title: "Precision Aluminum Fin Profiles",
      description:
        "High-density monolithic 6061-T6 aluminum heat sink matrices engineered to maximize convective surface area under tight volumetric constraints.",
      metrics: [
        { label: "Fin Pitch", value: "1.85", unit: "mm" },
        { label: "Fin Height", value: "45.0", unit: "mm" },
        { label: "Thermal Delta", value: "0.042", unit: "°C/W" },
      ],
      accentColor: "sky",
    },
  },
  {
    start: 0.22,
    end: 0.48,
    data: {
      stage: "02",
      badge: "PHASE 02 // LIQUID COLD PLATES",
      category: "THERMAL INTERFACE",
      title: "Direct Copper Tube Integration",
      description:
        "High-conductivity Cu-DHP seamless tubing routed and press-fitted directly into CNC-pocketed aluminum plates for concentrated heat flux dissipation.",
      metrics: [
        { label: "Coolant Loop", value: "5/16\"", unit: "Cu-DHP" },
        { label: "Flow Rate", value: "4.0–12.0", unit: "LPM" },
        { label: "Pressure Drop", value: "< 0.35", unit: "bar" },
      ],
      accentColor: "amber",
    },
  },
  {
    start: 0.48,
    end: 0.70,
    data: {
      stage: "03",
      badge: "PHASE 03 // IN-HOUSE CNC MACHINING",
      category: "5-AXIS PRECISION",
      title: "5-Axis High-Speed Milling",
      description:
        "Flood-coolant CNC routing of monolithic internal fluid cavities, manifold ports, and component mounting surfaces in our Guelph, Ontario facility.",
      metrics: [
        { label: "Spindle Speed", value: "12,000", unit: "RPM" },
        { label: "Tolerance", value: "±0.012", unit: "mm" },
        { label: "Bed Envelope", value: "Up to 57\"", unit: "VMC" },
      ],
      accentColor: "cyan",
    },
  },
  {
    start: 0.70,
    end: 0.88,
    data: {
      stage: "04",
      badge: "PHASE 04 // SOLID-STATE JOINING",
      category: "HERMETIC SEALING",
      title: "Friction Stir Welding (FSW)",
      description:
        "Solid-state bonding of cold plate covers without melting base metal or using filler wire. Yields 100% parent-metal strength and guaranteed leak prevention.",
      metrics: [
        { label: "Joint Strength", value: "100%", unit: "Parent Metal" },
        { label: "Helium Leak", value: "< 1×10⁻⁸", unit: "mbar·L/s" },
        { label: "Proof Pressure", value: "> 35", unit: "bar proof" },
      ],
      accentColor: "emerald",
    },
  },
  {
    start: 0.88,
    end: 1.0,
    data: {
      stage: "05",
      badge: "PHASE 05 // TURNKEY HARDWARE",
      category: "APPLICATION READY",
      title: "100% Custom · Zero Shelf Stock",
      description:
        "The complete custom assembly: heat sink, liquid cold plate, and FSW sealing integrated under one roof. Engineered to order for your exact envelope.",
      metrics: [
        { label: "Build Type", value: "100%", unit: "Custom" },
        { label: "Facility", value: "Guelph", unit: "ON, Canada" },
        { label: "Certification", value: "ISO 9001", unit: "2015" },
      ],
      accentColor: "sky",
    },
  },
];

export function ScrollVideoIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Scroll state & progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isNearEnd, setIsNearEnd] = useState(false);

  // References for animation loop & lerp
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const autoPlayRafRef = useRef<number | null>(null);
  const isInViewRef = useRef(false);

  // Get current stage info based on progress
  const currentStage =
    STAGES.find((s) => scrollProgress >= s.start && scrollProgress <= s.end)?.data ||
    STAGES[0].data;

  // Progressive frame loader
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);
    let loaded = 0;

    // Load Frame 0 first immediately
    const img0 = new Image();
    img0.src = `/scroll-frames/frame_000.webp`;
    img0.onload = () => {
      imagesRef.current[0] = img0;
      loaded++;
      setLoadedCount(loaded);
      // Immediate first draw
      drawFrameToCanvas(0);
    };

    // Priority Tier 1: Keyframes spaced every 8 frames (0, 8, 16... 239)
    const keyframeIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i += 8) {
      if (i !== 0) keyframeIndices.push(i);
    }

    keyframeIndices.forEach((idx) => {
      const img = new Image();
      img.src = `/scroll-frames/frame_${idx.toString().padStart(3, "0")}.webp`;
      img.onload = () => {
        imagesRef.current[idx] = img;
        loaded++;
        setLoadedCount(loaded);
      };
    });

    // Priority Tier 2: Remaining in-between frames
    const remainingIndices: number[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i % 8 !== 0) remainingIndices.push(i);
    }

    // Stagger load remaining frames to avoid socket saturation
    const loadRemaining = () => {
      remainingIndices.forEach((idx) => {
        const img = new Image();
        img.src = `/scroll-frames/frame_${idx.toString().padStart(3, "0")}.webp`;
        img.onload = () => {
          imagesRef.current[idx] = img;
          loaded++;
          setLoadedCount(loaded);
        };
      });
    };

    const timer = setTimeout(loadRemaining, 120);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Find the closest loaded frame to prevent any blank canvas
  const getRenderableImage = useCallback((targetIdx: number): HTMLImageElement | null => {
    const images = imagesRef.current;
    if (images[targetIdx]) return images[targetIdx];

    // Search outward for nearest loaded frame
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const forward = targetIdx + offset;
      if (forward < TOTAL_FRAMES && images[forward]) return images[forward];
      const backward = targetIdx - offset;
      if (backward >= 0 && images[backward]) return images[backward];
    }
    return null;
  }, []);

  // High-performance canvas draw with cover scaling
  const drawFrameToCanvas = useCallback(
    (frameIdx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const img = getRenderableImage(frameIdx);
      if (!img) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || 1920;
      const ih = img.naturalHeight || 1080;

      // Cover scaling math (center cropped to fill viewport)
      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.drawImage(img, dx, dy, dw, dh);
    },
    [getRenderableImage]
  );

  // Handle Canvas Resize for Retina Screens
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      // Re-draw current frame
      drawFrameToCanvas(currentFrame);
    }
  }, [currentFrame, drawFrameToCanvas]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Main Animation & LERP loop
  useEffect(() => {
    let lastRenderedFrame = -1;

    const renderLoop = () => {
      if (isInViewRef.current) {
        // Silky smooth LERP damping: 0.14 gives responsive yet buttery feel
        const diff = targetProgressRef.current - currentProgressRef.current;
        if (Math.abs(diff) > 0.0001) {
          currentProgressRef.current += diff * 0.14;
        } else {
          currentProgressRef.current = targetProgressRef.current;
        }

        const clampedProgress = Math.max(0, Math.min(1, currentProgressRef.current));
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(clampedProgress * (TOTAL_FRAMES - 1)))
        );

        if (frameIndex !== lastRenderedFrame) {
          drawFrameToCanvas(frameIndex);
          lastRenderedFrame = frameIndex;
          setCurrentFrame(frameIndex);
          setScrollProgress(clampedProgress);
          setIsNearEnd(clampedProgress >= 0.94);
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [drawFrameToCanvas]);

  // Scroll listener tracking container progress
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const totalScrollDistance = containerHeight - windowHeight;

      if (totalScrollDistance <= 0) return;

      // Distance from top of container to top of viewport
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      targetProgressRef.current = clamped;

      // Check if in view
      isInViewRef.current = rect.bottom > 0 && rect.top < windowHeight;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skip to Hero Section
  const handleSkipToHero = () => {
    const heroSection = document.getElementById("story");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      const container = containerRef.current;
      if (container) {
        window.scrollTo({
          top: container.offsetTop + container.offsetHeight - window.innerHeight + 10,
          behavior: "smooth",
        });
      }
    }
  };

  // Auto Tour Playback
  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      if (autoPlayRafRef.current) cancelAnimationFrame(autoPlayRafRef.current);
    } else {
      setIsAutoPlaying(true);
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.offsetTop;
      const scrollRange = container.offsetHeight - window.innerHeight;
      const startTime = performance.now();
      const startScroll = window.scrollY;
      const targetScroll = containerTop + scrollRange;
      const totalDistance = targetScroll - startScroll;
      const durationMs = (1 - scrollProgress) * (DURATION_SECONDS * 1000);

      const autoScrollStep = (now: number) => {
        const elapsed = now - startTime;
        const p = Math.min(1, elapsed / durationMs);
        window.scrollTo(0, startScroll + totalDistance * p);

        if (p < 1) {
          autoPlayRafRef.current = requestAnimationFrame(autoScrollStep);
        } else {
          setIsAutoPlaying(false);
        }
      };

      autoPlayRafRef.current = requestAnimationFrame(autoScrollStep);
    }
  };

  // Toggle Audio
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const currentTimeFormatted = (scrollProgress * DURATION_SECONDS).toFixed(2);
  const percentFormatted = Math.round(scrollProgress * 100);

  return (
    <section
      id="scroll-video-intro"
      ref={containerRef}
      className="relative w-full h-[400vh] bg-slate-950 text-white"
    >
      {/* Audio element linked to the video sound track */}
      <audio
        ref={audioRef}
        src="/videos/hero-scroll-animation.mp4"
        loop
        muted={isMuted}
        preload="metadata"
      />

      {/* Pinned Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* Fullscreen Canvas GPU Renderer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        />

        {/* Ambient Vignette & Blueprint Matrix Overlays */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10 opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/60 pointer-events-none z-10" />

        {/* TOP HUD: Live Telemetry & Brand Banner */}
        <header className="relative z-20 pt-28 lg:pt-32 px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-auto">
          {/* Brand & Stage Tag */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 rounded-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-wider text-sky-300 uppercase">
                INNOVATIVE THERMAL SOLUTIONS
              </span>
            </div>
            <span className="hidden md:inline-block font-mono text-[11px] text-slate-400 uppercase tracking-widest px-2.5 py-1 bg-black/40 backdrop-blur-md border border-slate-800 rounded">
              GUELPH, ONTARIO · FACILITY TOUR
            </span>
          </div>

          {/* Controls Bar: Auto Tour, Sound, Skip */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 rounded-md text-slate-200 hover:text-white transition-all cursor-pointer shadow-md"
              title={isAutoPlaying ? "Pause Auto-Tour" : "Auto-Play Tour"}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-sky-400" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
                  <span>Auto Tour</span>
                </>
              )}
            </button>

            <button
              onClick={toggleAudio}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 rounded-md text-slate-200 hover:text-white transition-all cursor-pointer shadow-md"
              title={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span className="hidden sm:inline">{isMuted ? "Audio Off" : "Audio On"}</span>
            </button>

            <button
              onClick={handleSkipToHero}
              className="flex items-center gap-1.5 px-3.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-md shadow-lg transition-all cursor-pointer group"
            >
              <span>Skip to Hero</span>
              <SkipForward className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </header>

        {/* CENTER-LEFT HUD: Dynamic Phase Story Card */}
        <div className="relative z-20 px-6 lg:px-12 my-auto max-w-2xl pointer-events-none select-none">
          {/* Phase Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/70 border border-sky-500/40 rounded-full backdrop-blur-md text-xs font-mono font-semibold text-sky-300 mb-4 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span>{currentStage.badge}</span>
          </div>

          {/* Stage Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-2xl mb-4 transition-all duration-300">
            {currentStage.title}
          </h2>

          {/* Description */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal drop-shadow-md max-w-xl mb-6 bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            {currentStage.description}
          </p>

          {/* Real-time Engineering Telemetry Metrics */}
          <div className="grid grid-cols-3 gap-3 max-w-lg pointer-events-auto">
            {currentStage.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 shadow-lg"
              >
                <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                  {m.label}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-xl font-bold font-mono text-white">
                    {m.value}
                  </span>
                  {m.unit && (
                    <span className="text-[10px] font-mono text-sky-400 font-semibold">
                      {m.unit}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM HUD: Interactive Scrubbing Timeline & Stage Indicator */}
        <footer className="relative z-20 pb-8 px-6 lg:px-12 pointer-events-auto">
          {/* 5 Stages Tracker Pills */}
          <div className="grid grid-cols-5 gap-2 mb-4 max-w-3xl">
            {STAGES.map((s, idx) => {
              const isActive = scrollProgress >= s.start && scrollProgress <= s.end;
              const isPassed = scrollProgress > s.end;
              return (
                <button
                  key={s.data.stage}
                  onClick={() => {
                    const container = containerRef.current;
                    if (!container) return;
                    const containerTop = container.offsetTop;
                    const scrollRange = container.offsetHeight - window.innerHeight;
                    const target = containerTop + scrollRange * s.start;
                    window.scrollTo({ top: target, behavior: "smooth" });
                  }}
                  className={`text-left p-2 rounded-lg border transition-all cursor-pointer backdrop-blur-md ${
                    isActive
                      ? "bg-sky-600/30 border-sky-400 text-white shadow-lg shadow-sky-500/20"
                      : isPassed
                      ? "bg-slate-900/60 border-slate-700 text-slate-400 hover:text-white"
                      : "bg-black/40 border-white/5 text-slate-600 hover:text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-mono text-[10px] font-bold">
                      {s.data.stage}
                    </span>
                    {isPassed && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    )}
                  </div>
                  <span className="hidden sm:block text-[10px] font-mono truncate font-medium">
                    {s.data.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Scrubbing Bar */}
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 max-w-[1440px] mx-auto">
            {/* Playhead Time & Frame Telemetry */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-white tracking-wider">
                  {currentTimeFormatted}s / {DURATION_SECONDS.toFixed(1)}s
                </span>
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">
                FRAME <strong className="text-sky-400">{currentFrame.toString().padStart(3, "0")}</strong> / 240
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-sky-300 font-bold">{percentFormatted}%</span>
            </div>

            {/* Interactive Progress Bar */}
            <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden flex-1 mx-2">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-400 transition-all duration-75"
                style={{ width: `${percentFormatted}%` }}
              />
            </div>

            {/* Scroll Cue or Completion Cue */}
            <div className="shrink-0 flex items-center gap-2">
              {isNearEnd ? (
                <button
                  onClick={handleSkipToHero}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 hover:text-sky-300 bg-sky-950/60 px-3 py-1 rounded-md border border-sky-500/40 animate-pulse cursor-pointer"
                >
                  <span>ENTER HERO CHAPTERS</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="animate-pulse">SCROLL TO INSPECT</span>
                  <ChevronDown className="w-3.5 h-3.5 animate-bounce text-sky-400" />
                </div>
              )}
            </div>
          </div>
        </footer>

        {/* Transition fade into light hero section as progress approaches 100% */}
        {scrollProgress >= 0.88 && (
          <div
            className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none z-30 transition-opacity duration-200"
            style={{ opacity: Math.min(1, Math.max(0, (scrollProgress - 0.88) / 0.12)) }}
          />
        )}
      </div>
    </section>
  );
}
