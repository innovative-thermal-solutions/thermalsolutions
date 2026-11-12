"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, ExternalLink, Download, ShieldCheck, CheckCircle2 } from "lucide-react";

interface CertificateModalProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  badge?: string;
  metadata?: { label: string; value: string }[];
  aspectRatio?: string;
}

export function CertificateCard({
  imageSrc,
  title,
  subtitle,
  badge,
  metadata,
  aspectRatio = "aspect-[3/4]",
}: CertificateModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl border border-[#d8dedf] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
        {/* Certificate Preview Frame */}
        <div
          onClick={() => setIsOpen(true)}
          className={`relative w-full ${aspectRatio} bg-slate-100 cursor-pointer overflow-hidden border-b border-[#e5e9ea] group-hover:bg-slate-50 transition-colors`}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain p-4 group-hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#004d52]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ZoomIn className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Click to Enlarge Certificate
            </span>
          </div>

          {badge && (
            <div className="absolute top-3 left-3 bg-[#01747A] text-white text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}
        </div>

        {/* Certificate Info */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-medium text-slate-900 mb-1 leading-snug">
              {title}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm font-normal mb-4">
              {subtitle}
            </p>

            {metadata && metadata.length > 0 && (
              <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                {metadata.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400 uppercase">{item.label}</span>
                    <span className="text-slate-800 font-semibold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setIsOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider font-semibold text-[#01747A] bg-[#01747A]/10 hover:bg-[#01747A] hover:text-white rounded-lg transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>View Full Size</span>
            </button>
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-[#01747A] hover:bg-slate-100 rounded-lg transition-colors"
              title="Open raw image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#141f22] text-white border-b border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#01747A]" />
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-medium">{title}</h4>
                  <p className="text-xs text-slate-400 font-mono">{subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={imageSrc}
                  download
                  className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Download Certificate"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex-1 min-h-[500px] max-h-[78vh] p-4 bg-slate-900 flex items-center justify-center overflow-auto">
              <div className="relative w-full h-full min-h-[500px]">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
