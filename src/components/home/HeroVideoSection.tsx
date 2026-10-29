"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Factory,
} from "lucide-react";

export function HeroVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoaded(true);
    };

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    // Attempt auto-play with mute
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
      });

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const seekTime = Number(e.target.value);
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      video.requestFullscreen().catch(() => {});
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section
      id="hero-video"
      className="relative w-full pt-28 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-12 bg-slate-950 text-white overflow-hidden border-b border-slate-800"
    >
      {/* Background blueprint grid & dynamic ambient glow */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Top Eyebrow & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-sky-400 px-2.5 py-0.5 bg-sky-950/80 border border-sky-500/40 rounded-sm">
              ITS
            </span>
            <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-400 font-semibold">
              North American Thermal Engineering &amp; Manufacturing
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Guelph, Ontario Facility</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">100% In-House FSW &amp; 5-Axis CNC</span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.92] text-white mb-4">
            Custom Thermal Hardware. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
              Engineered From First Principles.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl">
            We don&#39;t sell standard catalogue products off shelves. ITS Cooling designs, simulates, machines, and friction-stir-welds bespoke liquid cold plates and air-cooled heat sinks under one roof in Guelph, Ontario.
          </p>
        </div>

        {/* RAW VIDEO PLAYER CONTAINER */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl shadow-sky-950/50 group">
          <video
            ref={videoRef}
            src="/videos/hero-raw-video.mp4"
            poster="/videos/hero-poster.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Subtle vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

          {/* Top Status Bar Inside Video */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono pointer-events-none z-20">
            <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-slate-200">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>LIVE WORKSHOP &amp; CFD FOOTAGE</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-slate-300">
              <span>1080p HD</span>
              <span>•</span>
              <span>100% IN-HOUSE</span>
            </div>
          </div>

          {/* Big Center Play/Pause Indicator (fades out when playing) */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-sky-500/90 text-slate-950 hover:bg-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 z-20 cursor-pointer"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 fill-current translate-x-0.5" />
            </button>
          )}

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2 z-20 transition-opacity">
            {/* Progress Scrubber */}
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400 focus:outline-hidden"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Play / Pause Button */}
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  )}
                </button>

                {/* Restart Button */}
                <button
                  onClick={handleRestart}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Restart video"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Mute / Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-slate-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-sky-400" />
                  )}
                </button>

                {/* Time Display */}
                <span className="text-xs font-mono text-slate-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Right Controls: Fullscreen */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid Below Video */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <Cpu className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">CFD Simulation</h4>
              <p className="text-xs text-slate-400 font-mono">EATON SmartCFD &amp; SolidWorks</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <Factory className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">5-Axis CNC Milling</h4>
              <p className="text-xs text-slate-400 font-mono">Haas VF-6 &amp; UMC-1000SS</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <Layers className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">Friction Stir Welding</h4>
              <p className="text-xs text-slate-400 font-mono">Zero-leak solid-state joining</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm uppercase text-white mb-0.5">Helium Leak Testing</h4>
              <p className="text-xs text-slate-400 font-mono">&lt; 1×10⁻⁸ mbar·L/s verification</p>
            </div>
          </div>
        </div>

        {/* Quick Consultation CTA Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-slate-800/80">
          <p className="text-slate-400 text-sm">
            Have a custom heat sink or cold plate specification to review?
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-sky-500 hover:bg-white text-slate-950 font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
            >
              <span>Talk to a Thermal Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors border border-slate-700"
            >
              <span>Explore Products</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
