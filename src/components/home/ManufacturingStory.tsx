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
    <section id="manufacturing" className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-[#091113] text-white overflow-hidden border-b border-[#233134]">
      {/* Background Full-Bleed Video from 25s to 36s */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12] scale-[1.02]"
        >
          <source src="/videos/designed-built-tested-loop.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>

        {/* Cinematic Dark Gradient Overlays matching Screenshot 2 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091113]/90 via-[#091113]/35 to-[#091113]/80" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
      </div>

      {/* Center Content Overlay matching user reference screenshot 2 */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-24 sm:py-32 relative z-10 flex flex-col items-center justify-center text-center">
        {/* Top Tag: 10 / REAL MANUFACTURING */}
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00747a]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#00747a] font-bold">
            10 / REAL MANUFACTURING
          </span>
        </div>

        {/* Giant Hero Overlay Typography matching Screenshot 2 */}
        <h2 className="font-sans font-black tracking-[-0.04em] uppercase leading-[0.88] sm:leading-[0.85] text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] text-center mb-8 max-w-5xl">
          <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            DESIGNED.
          </span>
          <span className="block text-[#a0a6a7] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            BUILT.
          </span>
          <span className="block text-[#687072] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            TESTED.
          </span>
          <span className="block text-[#00747a] drop-shadow-[0_6px_28px_rgba(0,116,122,0.45)]">
            HERE.
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#c5cecf] text-xs sm:text-sm font-mono tracking-wider mb-8 max-w-md drop-shadow-md">
          Engineering and manufacturing in Guelph, Ontario
        </p>

        {/* Link / CTA matching Screenshot 2 */}
        <div className="flex items-center gap-4">
          <Link
            href="/facility"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.16em] text-white hover:text-[#00747a] transition-colors group cursor-pointer py-2 border-b border-white/20 hover:border-[#00747a]"
          >
            <span>INSIDE ITS MANUFACTURING</span>
            <span className="text-sm font-sans group-hover:translate-x-1 transition-transform">↗</span>
          </Link>
        </div>

        {/* Bottom Corner Video Controls */}
        <div className="absolute bottom-6 right-6 sm:right-10 flex items-center gap-2 z-20">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="p-2.5 rounded-full bg-black/60 hover:bg-[#00747a] text-white backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="p-2.5 rounded-full bg-black/60 hover:bg-[#00747a] text-white backdrop-blur-md border border-white/15 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
