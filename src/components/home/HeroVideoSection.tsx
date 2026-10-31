"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Factory,
  ChevronDown,
} from "lucide-react";

export function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const scrollToNextSection = () => {
    const nextElem = document.getElementById("products-overview");
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-video"
      className="relative w-full min-h-[94vh] lg:min-h-screen flex flex-col justify-between pt-28 lg:pt-36 pb-12 px-4 sm:px-6 lg:px-12 bg-black text-white overflow-hidden border-b border-slate-800"
    >
      {/* =========================================================================
          BACKGROUND VIDEO LAYER: Completely fit, sharp, clear & clearly visible
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/videos/hero-bg-loop.mp4"
          poster="/videos/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center brightness-90 contrast-105"
        />

        {/* Lightweight translucent dark gradient overlay:
            Ensures text readability while keeping the entire video crisp, clear, and visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* =========================================================================
          FOREGROUND CONTENT CONTAINER
          ========================================================================= */}
      <div className="max-w-[1440px] w-full mx-auto relative z-10 my-auto">
        {/* Top Eyebrow & Live Facility Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-sky-400 px-2.5 py-1 bg-black/75 border border-sky-400/50 rounded-sm shadow-md backdrop-blur-md">
              ITS // COOLING
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.22em] text-slate-200 font-semibold drop-shadow-md">
              Custom Thermal Engineering &amp; Manufacturing
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-200 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/70" />
              <span className="font-medium text-slate-100">Guelph, Ontario Facility Active</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-200">100% In-House FSW &amp; 5-Axis CNC</span>
          </div>
        </div>

        {/* Main Hero Headline & Value Proposition */}
        <div className="max-w-4xl mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.93] text-white mb-6 drop-shadow-2xl">
            Custom Thermal Hardware. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 drop-shadow-lg">
              Engineered From First Principles.
            </span>
          </h1>
          <p className="text-slate-100 text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl drop-shadow-lg bg-black/35 backdrop-blur-xs p-3 rounded-lg border border-white/5">
            We don&#39;t sell standard catalogue products off shelves. ITS Cooling designs, simulates, machines, and friction-stir-welds bespoke liquid cold plates and air-cooled heat sinks under one roof in Guelph, Ontario.
          </p>
        </div>

        {/* Action Buttons & Background Video Micro-Controls */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-sky-500 hover:bg-white text-slate-950 font-bold text-sm uppercase tracking-wider rounded-sm transition-all shadow-xl shadow-sky-500/30 hover:shadow-sky-400/50"
          >
            <span>Talk to a Thermal Engineer</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-7 py-4 bg-black/60 hover:bg-black/90 text-white font-bold text-sm uppercase tracking-wider rounded-sm transition-all border border-white/20 backdrop-blur-md hover:border-white/40 shadow-lg"
          >
            <span>Explore Custom Capabilities</span>
          </Link>

          {/* Video backdrop ambient playback controls */}
          <div className="flex items-center gap-2 ml-auto bg-black/70 border border-white/20 backdrop-blur-md rounded-full px-3 py-1.5 text-xs font-mono text-slate-200 shadow-xl">
            <span className="hidden sm:inline text-slate-300 mr-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>FACILITY FOOTAGE:</span>
            </span>

            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? "Pause background video" : "Play background video"}
              aria-label={isPlaying ? "Pause background video" : "Play background video"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-1.5 rounded-full hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title={isMuted ? "Unmute facility sound" : "Mute facility sound"}
              aria-label={isMuted ? "Unmute facility sound" : "Mute facility sound"}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-sky-400" />
              )}
            </button>
          </div>
        </div>

        {/* Feature Highlights Translucent Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-black/55 hover:bg-black/75 border border-white/15 backdrop-blur-md flex items-start gap-3 transition-colors shadow-lg">
            <Cpu className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">CFD Simulation</h4>
              <p className="text-xs text-slate-300 font-mono">SmartCFD &amp; SolidWorks Flow</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/55 hover:bg-black/75 border border-white/15 backdrop-blur-md flex items-start gap-3 transition-colors shadow-lg">
            <Factory className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">5-Axis CNC Milling</h4>
              <p className="text-xs text-slate-300 font-mono">Haas VF-6 &amp; UMC-1000SS</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/55 hover:bg-black/75 border border-white/15 backdrop-blur-md flex items-start gap-3 transition-colors shadow-lg">
            <Layers className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">Friction Stir Welding</h4>
              <p className="text-xs text-slate-300 font-mono">Zero-leak solid-state joining</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/55 hover:bg-black/75 border border-white/15 backdrop-blur-md flex items-start gap-3 transition-colors shadow-lg">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">Helium Leak Testing</h4>
              <p className="text-xs text-slate-300 font-mono">&lt; 1×10⁻⁸ mbar·L/s verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <button
          onClick={scrollToNextSection}
          className="group flex flex-col items-center gap-1 text-slate-300 hover:text-sky-400 transition-colors cursor-pointer bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs border border-white/10"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-300 group-hover:text-sky-300">
            Explore Hardware Solutions
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
