import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ExternalLink, ArrowRight, Clock, Shield, Sparkles } from "lucide-react";
import { TRADE_SHOW_EVENTS } from "@/data/eventsData";

export const metadata: Metadata = {
  title: "Upcoming Trade Shows & Events | Innovative Thermal Solutions (ITS Cooling)",
  description:
    "Connect with the Innovative Thermal Solutions team at upcoming industry trade shows across North America and Europe.",
};

export default function EventsPage() {
  const events2026 = TRADE_SHOW_EVENTS.filter((e) => e.year === 2026);
  const events2027 = TRADE_SHOW_EVENTS.filter((e) => e.year === 2027);

  return (
    <div className="min-h-screen bg-[#0d1618] text-white pt-28 pb-24 selection:bg-[#00747a] selection:text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 right-1/4 w-[700px] h-[700px] bg-[#00747a]/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-[#005256]/15 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#9da8a9] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#00747a]">Events</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00747a]/20 border border-[#00747a]/40 rounded-full text-xs font-mono text-teal-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00747a] animate-pulse" />
            INDUSTRY ENGAGEMENT & TRADE SHOWS
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-['Space_Grotesk'] leading-[1.1]">
            Upcoming Trade Shows & Events
          </h1>
          <p className="text-lg sm:text-xl text-[#9da8a9] leading-relaxed">
            Connect with the Innovative Thermal Solutions team at upcoming industry trade shows. Discover our latest advancements in Friction Stir Welding, micro-channel liquid cold plates, skived & bonded air heat sinks, and custom power distribution busbars.
          </p>
        </div>

        {/* 2026 Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
            <span className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">2026</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-[#00747a]/30 to-transparent" />
            <span className="text-xs font-mono text-[#9da8a9] uppercase tracking-wider">
              {events2026.length} Scheduled Event
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events2026.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* 2027 Section */}
        <div>
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
            <span className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">2027</span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-[#00747a]/30 to-transparent" />
            <span className="text-xs font-mono text-[#9da8a9] uppercase tracking-wider">
              {events2027.length} Scheduled Events
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events2027.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Schedule a Meeting CTA Card */}
        <div className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#141f22] via-[#0d1618] to-[#0a2327] border border-[#00747a]/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono text-[#00747a] tracking-widest uppercase mb-2 block font-semibold">
              Pre-Schedule An Engineering Session
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Attending One of These Shows?
            </h3>
            <p className="text-sm sm:text-base text-[#9da8a9] mb-6 leading-relaxed">
              Book a dedicated one-on-one technical consultation with our engineering and technical sales leaders during the show to discuss your cooling specifications, thermal simulations, or prototype schedules.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:engineering@itscooling.com?subject=Trade%20Show%20Meeting%20Request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00747a] hover:bg-[#008f96] text-white font-semibold rounded-lg text-sm transition-all shadow-lg hover:shadow-[#00747a]/25"
              >
                Schedule a Meeting with ITS
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg text-sm border border-white/10 transition-colors"
              >
                General Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }: { event: typeof TRADE_SHOW_EVENTS[number] }) {
  return (
    <div className="group rounded-2xl bg-[#141f22]/90 border border-white/10 hover:border-[#00747a]/70 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#00747a]/10 hover:-translate-y-1">
      <div>
        {/* Logo Container */}
        <div className="h-32 w-full rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-6 mb-6 group-hover:bg-white/[0.08] transition-colors relative overflow-hidden">
          <Image
            src={event.logo}
            alt={`${event.name} Logo`}
            width={240}
            height={90}
            className="max-h-20 w-auto object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#00747a]/30 text-teal-300 border border-[#00747a]/40">
            {event.year}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk'] group-hover:text-teal-300 transition-colors">
          {event.name}
        </h3>

        {/* Date & Location */}
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-2.5 text-sm text-[#9da8a9]">
            <Calendar className="w-4 h-4 text-[#00747a] shrink-0 mt-0.5" />
            <span className="font-medium text-white/90">{event.dates}</span>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-[#9da8a9]">
            <MapPin className="w-4 h-4 text-[#00747a] shrink-0 mt-0.5" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>

      {/* Button link */}
      <a
        href={event.detailsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-[#00747a] text-white text-xs font-mono tracking-wider uppercase border border-white/10 hover:border-[#00747a] transition-all group/btn"
      >
        <span>Event Details</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
