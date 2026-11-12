"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ArrowRight, ArrowUpRight } from "lucide-react";

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
    <section id="manufacturing" className="relative w-full min-h-[90vh] lg:min-h-[96vh] flex items-center bg-[#091113] text-white overflow-hidden border-b border-[#233134]">
      {/* Background Full-Bleed Video - Made Much Brighter and Vibrant */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.15] saturate-[1.1] scale-[1.02]"
        >
          <source src="/videos/designed-built-tested-loop.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>

        {/* Minimal soft gradient on the left edge only to keep text readable without blocking center welding tool */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#091113]/90 via-[#091113]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#091113] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#091113]/80 to-transparent pointer-events-none" />
      </div>

      {/* Content moved to Left side so the Center-Right Friction Stir Welding Tool and joint seam are 100% visible */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 relative z-10">
        <div className="max-w-2xl text-left">
          {/* Typography arranged cleanly on the left with brand highlights */}
          <h2 className="font-sans font-black tracking-[-0.04em] uppercase leading-[0.88] sm:leading-[0.84] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-left mb-6">
            <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              IN-HOUSE
            </span>
            <span className="block text-[#c5cecf] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              FRICTION
            </span>
            <span className="block text-[#7f888a] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
              STIR
            </span>
            <span className="block text-[#00747a] drop-shadow-[0_6px_28px_rgba(0,116,122,0.6)]">
              WELDING.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[#e2e8e9] text-xs sm:text-sm font-mono tracking-wider mb-8 max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#091113]/60 p-3 rounded-lg border border-white/10 backdrop-blur-sm">
            Hermetic solid-state joining and precision thermal manufacturing under one roof in Guelph, Ontario.
          </p>

          {/* Link / CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/facility"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#00747a] hover:bg-[#005d62] text-white text-xs font-mono font-bold uppercase tracking-[0.16em] rounded-md transition-all group cursor-pointer shadow-lg shadow-[#00747a]/30"
            >
              <span>INSIDE ITS MANUFACTURING</span>
              <span className="text-sm font-sans group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
          </div>
        </div>

        {/* Bottom Corner Video Controls */}
        <div className="absolute bottom-6 right-6 sm:right-10 flex items-center gap-2 z-20">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="p-2.5 rounded-full bg-black/75 hover:bg-[#00747a] text-white backdrop-blur-md border border-white/20 transition-colors cursor-pointer shadow-lg"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="p-2.5 rounded-full bg-black/75 hover:bg-[#00747a] text-white backdrop-blur-md border border-white/20 transition-colors cursor-pointer shadow-lg"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
