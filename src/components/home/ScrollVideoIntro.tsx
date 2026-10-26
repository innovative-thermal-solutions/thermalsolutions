"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
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
  Maximize2,
  Sliders,
  Flame,
  Droplets,
  Wind,
  Sparkles,
  ArrowRight,
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

  // Preloader state
  const [loadProgress, setLoadProgress] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);

  // Controls state
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  // Animation & LERP refs
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const autoPlayRafRef = useRef<number | null>(null);
  const isInViewRef = useRef(true);
  const currentStageIndexRef = useRef(0);

  const currentStage = STAGES[activeStageIndex].data;

  // Canvas rendering context ref to avoid getContext lookup on every RAF frame
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // High-performance canvas draw with cover scaling
  const drawFrameToCanvas = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext("2d", { alpha: false });
      if (ctxRef.current) {
        ctxRef.current.imageSmoothingEnabled = true;
        ctxRef.current.imageSmoothingQuality = "medium";
      }
    }
    const ctx = ctxRef.current;
    if (!ctx) return;

    const img = imagesRef.current[frameIdx] || imagesRef.current[0];
    if (!img) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1600;
    const ih = img.naturalHeight || 900;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Smoothly dismiss preloader with 700ms dissolve
  const dismissPreloader = useCallback(() => {
    setIsDismissing(true);
    document.body.style.overflow = "";
    setTimeout(() => {
      setShowPreloader(false);
    }, 700);
  }, []);

  const handleEnterExperience = () => {
    dismissPreloader();
  };

  // Complete preloader: Smooth progress calibration & pre-decode all 240 frames
  useEffect(() => {
    // Reset window to top on initial mount/refresh
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }

    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);
    let loaded = 0;
    const total = TOTAL_FRAMES;
    let animProgress = 0;
    let dismissTimer: NodeJS.Timeout | null = null;
    let safetyTimeout: NodeJS.Timeout | null = null;
    let completed = false;

    // Lock body scroll while initial preloader is active
    document.body.style.overflow = "hidden";

    const finishLoading = () => {
      if (completed) return;
      completed = true;
      setIsPreloaded(true);
      setLoadProgress(100);
      drawFrameToCanvas(0);

      // Auto dismiss after 600ms so user can see "100% READY" and enter smoothly
      dismissTimer = setTimeout(() => {
        dismissPreloader();
      }, 700);
    };

    // Smooth progress counter that advances towards actual loaded percentage
    const progressInterval = setInterval(() => {
      const actualPct = Math.round((loaded / total) * 100);
      const targetPct = Math.max(
        actualPct,
        animProgress < 85 ? animProgress + 4 : animProgress
      );

      if (animProgress < targetPct) {
        animProgress = Math.min(100, animProgress + Math.max(1, Math.ceil((targetPct - animProgress) / 3)));
        setLoadProgress(animProgress);
      }

      if ((loaded >= total || (loaded >= total * 0.95 && animProgress >= 98)) && animProgress >= 100) {
        clearInterval(progressInterval);
        finishLoading();
      }
    }, 25);

    // Fallback safety timeout (4.5s max) to guarantee user is never locked out
    safetyTimeout = setTimeout(() => {
      clearInterval(progressInterval);
      finishLoading();
    }, 4500);

    // Parallel load and pre-decode all 240 frames
    for (let i = 0; i < total; i++) {
      const img = new Image();
      img.src = `/scroll-frames/frame_${i.toString().padStart(3, "0")}.webp`;

      const onDecoded = () => {
        imagesRef.current[i] = img;
        loaded++;
        if (i === 0) {
          drawFrameToCanvas(0);
        }
      };

      img.onload = () => {
        if ("decode" in img) {
          img
            .decode()
            .then(onDecoded)
            .catch(onDecoded);
        } else {
          onDecoded();
        }
      };

      img.onerror = onDecoded;
    }

    return () => {
      clearInterval(progressInterval);
      if (dismissTimer) clearTimeout(dismissTimer);
      if (safetyTimeout) clearTimeout(safetyTimeout);
      document.body.style.overflow = "";
    };
  }, [drawFrameToCanvas, dismissPreloader]);

  // Handle Canvas Resize for Retina Screens with capped DPR to prevent fill-rate lag
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const rect = canvas.getBoundingClientRect();
    const targetW = Math.min(1920, Math.round(rect.width * dpr));
    const targetH = Math.min(1080, Math.round(rect.height * dpr));

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      ctxRef.current = canvas.getContext("2d", { alpha: false });
      if (ctxRef.current) {
        ctxRef.current.imageSmoothingEnabled = true;
        ctxRef.current.imageSmoothingQuality = "medium";
      }
      const frameIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );
      drawFrameToCanvas(frameIdx);
    }
  }, [drawFrameToCanvas]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Main 60/120 FPS Animation Loop
  // Updates DOM refs directly to prevent React reconciliation lag
  useEffect(() => {
    let lastRenderedFrame = -1;

    const renderLoop = () => {
      if (isInViewRef.current) {
        // Highly responsive adaptive LERP:
        // Snappy tracking when scrubbing, buttery smooth deceleration
        const diff = targetProgressRef.current - currentProgressRef.current;
        const absDiff = Math.abs(diff);
        let factor = 0.35;
        if (absDiff > 0.08) {
          factor = 0.75; // near-instant response during fast scrubbing
        } else if (absDiff > 0.03) {
          factor = 0.55; // snappy tracking
        } else if (absDiff > 0.008) {
          factor = 0.40;
        }

        if (absDiff > 0.00005) {
          currentProgressRef.current += diff * factor;
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

          // Only trigger React state update when stage actually changes (5 times total across entire scroll)
          let newStageIndex = 0;
          for (let i = 0; i < STAGES.length; i++) {
            if (clampedProgress >= STAGES[i].start && clampedProgress <= STAGES[i].end) {
              newStageIndex = i;
              break;
            }
          }
          if (newStageIndex !== currentStageIndexRef.current) {
            currentStageIndexRef.current = newStageIndex;
            setActiveStageIndex(newStageIndex);
          }
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

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      targetProgressRef.current = clamped;
      isInViewRef.current = rect.bottom > 0 && rect.top < windowHeight;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to cleanly stop auto-tour
  const stopAutoPlay = useCallback(() => {
    if (autoPlayRafRef.current) {
      cancelAnimationFrame(autoPlayRafRef.current);
      autoPlayRafRef.current = null;
    }
    setIsAutoPlaying(false);
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, []);

  // Cancel Auto-Tour immediately on any manual user interaction
  useEffect(() => {
    const handleUserInterrupt = () => {
      if (isAutoPlaying) {
        stopAutoPlay();
      }
    };

    window.addEventListener("wheel", handleUserInterrupt, { passive: true });
    window.addEventListener("touchstart", handleUserInterrupt, { passive: true });
    window.addEventListener("keydown", (e) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Space"].includes(e.code)) {
        handleUserInterrupt();
      }
    });

    return () => {
      window.removeEventListener("wheel", handleUserInterrupt);
      window.removeEventListener("touchstart", handleUserInterrupt);
    };
  }, [isAutoPlaying, stopAutoPlay]);

  // Skip to Products Section
  const handleSkipToProducts = useCallback(() => {
    stopAutoPlay();
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
    }

    const productsSection = document.getElementById("products");
    if (productsSection) {
      const navOffset = 85;
      const targetTop = productsSection.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    } else {
      const container = containerRef.current;
      if (container) {
        window.scrollTo({
          top: container.offsetTop + container.offsetHeight - window.innerHeight + 10,
          behavior: "smooth",
        });
      }
    }
  }, [stopAutoPlay]);

  // Auto Tour Playback
  const toggleAutoPlay = useCallback(() => {
    if (isAutoPlaying) {
      stopAutoPlay();
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const containerTop = container.offsetTop;
    const scrollRange = container.offsetHeight - window.innerHeight;

    let startY = window.scrollY;
    let initialProgress = currentProgressRef.current;

    if (initialProgress >= 0.95 || startY >= containerTop + scrollRange - 10) {
      startY = containerTop;
      window.scrollTo(0, startY);
      initialProgress = 0;
      targetProgressRef.current = 0;
      currentProgressRef.current = 0;
    }

    const targetY = containerTop + scrollRange;
    const distance = targetY - startY;
    const remainingFraction = Math.max(0.05, 1 - initialProgress);
    const totalDurationMs = remainingFraction * DURATION_SECONDS * 1000;
    const startTime = performance.now();

    setIsAutoPlaying(true);

    if (isAudioOn && audioRef.current) {
      audioRef.current.currentTime = Math.min(DURATION_SECONDS - 0.1, initialProgress * DURATION_SECONDS);
      audioRef.current.play().catch(() => {});
    }

    const autoScrollStep = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / totalDurationMs);
      const newY = startY + distance * progress;

      window.scrollTo(0, newY);

      if (progress < 1) {
        autoPlayRafRef.current = requestAnimationFrame(autoScrollStep);
      } else {
        stopAutoPlay();
      }
    };

    autoPlayRafRef.current = requestAnimationFrame(autoScrollStep);
  }, [isAutoPlaying, isAudioOn, stopAutoPlay]);

  // Toggle Audio
  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isAudioOn) {
      audio.pause();
      audio.muted = true;
      setIsAudioOn(false);
    } else {
      audio.muted = false;
      audio.volume = 0.85;
      audio.currentTime = Math.min(
        DURATION_SECONDS - 0.1,
        Math.max(0, currentProgressRef.current * DURATION_SECONDS)
      );
      audio
        .play()
        .then(() => setIsAudioOn(true))
        .catch(() => setIsAudioOn(true));
    }
  }, [isAudioOn]);

  // Auto pause audio if scrolling past video
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isInViewRef.current || currentProgressRef.current >= 0.99) {
      if (!audio.paused) {
        audio.pause();
      }
    }
  }, []);

  return (
    <>
      {/* ======================================================== */}
      {/* PREMIUM HIGH-TECH PRELOADER SCREEN */}
      {/* ======================================================== */}
      {showPreloader && (
        <div
          id="experience-preloader"
          className={`fixed inset-0 z-[100] bg-slate-950 text-white flex flex-col items-center justify-center px-6 transition-all duration-700 ease-out select-none ${
            isDismissing
              ? "opacity-0 pointer-events-none scale-105 blur-sm"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          {/* Ambient Blueprint Grid & Glow */}
          <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none" />
          <div className="absolute w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-400/15 blur-[90px] pointer-events-none animate-pulse" />

          <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center">
            {/* Brand Emblem */}
            <div className="relative mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-sky-400/40 flex items-center justify-center font-extrabold text-xl text-sky-400 shadow-2xl shadow-sky-500/20">
                ITS
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Title & Telemetry Header */}
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400 font-bold mb-2">
              INNOVATIVE THERMAL SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white mb-2">
              Calibrating Thermal Stream
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-mono mb-8 max-w-md">
              Pre-decoding 240 high-resolution frames into hardware GPU memory for zero-latency scroll playback.
            </p>

            {/* Glowing Linear Progress Bar */}
            <div className="w-full bg-slate-900 border border-slate-700/80 rounded-full h-3 p-0.5 mb-4 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-150 relative shadow-lg shadow-sky-500/40"
                style={{ width: `${loadProgress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white animate-ping" />
              </div>
            </div>

            {/* Status Telemetry Stats */}
            <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 mb-8 px-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>GPU VRAM DECODING</span>
              </span>
              <span className="text-white font-bold text-base tracking-wider font-mono">
                {loadProgress}%
              </span>
              <span>
                {Math.round((loadProgress / 100) * TOTAL_FRAMES)} / {TOTAL_FRAMES} FRAMES
              </span>
            </div>

            {/* Terminal Log */}
            <div className="w-full bg-black/60 border border-slate-800/80 rounded-xl p-3 text-left font-mono text-[11px] text-slate-400 space-y-1 mb-8 shadow-xl">
              <div className="text-emerald-400 flex items-center gap-2">
                <span>✓</span>
                <span>CFD Thermal Model Initialized</span>
              </div>
              <div className={loadProgress > 30 ? "text-emerald-400" : "text-slate-500"}>
                {loadProgress > 30 ? "✓" : "⟳"} 5-Axis CNC &amp; FSW Video Pipeline Buffering
              </div>
              <div className={loadProgress >= 100 ? "text-emerald-400" : "text-slate-500"}>
                {loadProgress >= 100 ? "✓" : "⟳"} Hardware Decoding:{" "}
                {loadProgress >= 100 ? "100% Complete · Ready" : `${loadProgress}%`}
              </div>
            </div>

            {/* Manual Enter / Auto Enter Button */}
            {isPreloaded ? (
              <button
                onClick={handleEnterExperience}
                className="shine-sweep inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-xl shadow-cyan-500/25 transition-all transform hover:scale-105 cursor-pointer animate-fade-in"
              >
                <span>ENTER EXPERIENCE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <div className="w-3.5 h-3.5 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
                <span>Allocating 60 FPS GPU Frame Buffer...</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 400vh SCROLL VIDEO INTRO SECTION */}
      {/* ======================================================== */}
      <section
        id="scroll-video-intro"
        ref={containerRef}
        className="relative w-full h-[400vh] bg-slate-950 text-white"
      >
        {/* Audio element with fallback sources */}
        <audio
          ref={audioRef}
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/hero-audio.m4a" type="audio/mp4" />
          <source src="/videos/hero-audio.wav" type="audio/wav" />
          <source src="/videos/hero-scroll-animation.mp4" type="audio/mp4" />
        </audio>

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
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed font-normal drop-shadow-md max-w-xl bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              {currentStage.description}
            </p>
          </div>

          {/* Transition fade into light section as progress approaches 100% */}
          {activeStageIndex === 4 && (
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent pointer-events-none z-30 transition-opacity duration-300" />
          )}
        </div>
      </section>
    </>
  );
}
