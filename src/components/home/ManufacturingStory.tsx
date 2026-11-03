"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ArrowRight, ShieldCheck, MapPin, Gauge, Cpu, CheckCircle2 } from "lucide-react";

export function ManufacturingStory() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="manufacturing" className="relative w-full py-24 px-6 lg:px-12 bg-white border-b border-slate-200 overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Video Preview Window with Custom Telemetry HUD */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl bg-slate-950 aspect-[16/10]">
            <video
              ref={videoRef}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              poster="/images/manufacturing/fsw-process-01.png"
              className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08]"
            >
              <source src="/video/fsw-process.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>

            {/* Top Telemetry HUD Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono z-10 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/75 backdrop-blur-md rounded-md border border-white/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="font-bold">FSW SOLID-STATE PROCESS</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-black/75 backdrop-blur-md rounded-md border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>GUELPH, ONTARIO FACILITY</span>
              </div>
            </div>

            {/* Bottom Controls & Live Process Parameters */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="p-2.5 rounded-full bg-white text-slate-900 hover:bg-sky-400 transition-colors shadow-lg cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="p-2.5 rounded-full bg-white text-slate-900 hover:bg-sky-400 transition-colors shadow-lg cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono text-white px-3 py-1.5 bg-black/75 backdrop-blur-md rounded-md border border-white/20">
                <span>Spindle: <strong>1,800 RPM</strong></span>
                <span className="text-white/40">•</span>
                <span>Downforce: <strong>14.2 kN</strong></span>
                <span className="text-white/40">•</span>
                <span className="text-emerald-400 font-bold">Porosity: 0.0%</span>
              </div>
            </div>
          </div>

          {/* Right: Typography & Facility Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-sky-700 px-2.5 py-0.5 bg-sky-50 border border-sky-300 rounded shadow-xs">
                02
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                In-House Manufacturing
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-950 uppercase leading-[0.9] mb-6">
              <span className="block">Engineered.</span>
              <span className="block text-slate-700">Milled.</span>
              <span className="block text-slate-500">Welded.</span>
              <span className="block text-sky-600">Tested Here.</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Turnkey engineering and in-house advanced thermal manufacturing executed under one roof in Guelph, Ontario. From custom channel CNC routing and Friction Stir Welding to CMM coordinate metrology and helium mass-spectrometer leak certification.
            </p>

            {/* Facility Highlights Box */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl mb-8 space-y-2.5 text-xs font-mono text-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ISO 9001:2015 Certified Quality Management System</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-sky-600 shrink-0" />
                <span>6,000 sq ft dedicated advanced thermal machining & FSW cell</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>North American supply-chain proximity & rapid prototyping</span>
              </div>
            </div>

            <div>
              <Link
                href="/about"
                className="shine-sweep inline-flex items-center gap-2 px-7 py-3.5 bg-slate-950 text-white hover:bg-sky-600 font-bold text-xs uppercase tracking-[0.14em] rounded-md transition-all shadow-md group"
              >
                <span>Inside ITS Manufacturing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
