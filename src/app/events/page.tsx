import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { TRADE_SHOW_EVENTS, TradeShowEvent } from "@/data/eventsData";
import { getCMSEvents } from "@/lib/cms/store";

export const metadata: Metadata = {
  title: "Upcoming Trade Shows & Events | Innovative Thermal Solutions (ITS Cooling)",
  description:
    "Connect with the Innovative Thermal Solutions team at upcoming industry trade shows across North America and Europe.",
};

export default function EventsPage() {
  const cmsEvents = getCMSEvents();
  const allEvents = cmsEvents.length > 0 ? cmsEvents : TRADE_SHOW_EVENTS;

  const events2026 = allEvents.filter((e) => e.year === 2026);
  const events2027 = allEvents.filter((e) => e.year === 2027);
  const otherYears = allEvents.filter((e) => e.year !== 2026 && e.year !== 2027);

  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9] text-[#141f22]">
      {/* 1. Light Theme Hero Section */}
      <section className="relative w-full pt-36 sm:pt-44 lg:pt-48 pb-16 px-6 sm:px-8 lg:px-14 bg-gradient-to-br from-[#004d52] via-[#01747A] to-[#005a5f] text-white border-b border-[#015e63] overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-teal-100 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-semibold">Events</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-teal-100 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-200 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              INDUSTRY ENGAGEMENT & TRADE SHOWS
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium tracking-tight text-white leading-[1.0] mb-6">
              Upcoming Trade Shows <br />
              <em className="not-italic text-teal-200">&amp; Industry Events.</em>
            </h1>

            <p className="text-teal-50 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal">
              Connect with the Innovative Thermal Solutions team at upcoming industry expos. Discover our latest advancements in Friction Stir Welding, micro-channel liquid cold plates, skived &amp; bonded air heat sinks, and custom power distribution busbars.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#events-list"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#01747A] font-bold text-xs font-mono uppercase tracking-wider rounded transition-all shadow-md shadow-black/10"
              >
                <span>View Event Calendar</span>
                <ArrowRight className="w-4 h-4 text-[#01747A]" />
              </a>
              <a
                href="mailto:engineering@itscooling.com?subject=Trade%20Show%20Meeting%20Request"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white/60 bg-white/10 text-white font-medium text-xs font-mono uppercase tracking-wider rounded transition-colors"
              >
                <span>Pre-Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Events Content Grid in Crisp Light Theme */}
      <div id="events-list" className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-20">
        {/* 2026 Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-[#141f22]">2026</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#e6f4f5] text-[#00747a] border border-[#00747a]/20 font-bold">
                Upcoming Shows
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              {events2026.length} Scheduled Event
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events2026.map((event) => (
              <LightEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* 2027 Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 mb-10 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-[#141f22]">2027</span>
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#e6f4f5] text-[#00747a] border border-[#00747a]/20 font-bold">
                Exhibitions &amp; Conferences
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              {events2027.length} Scheduled Events
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events2027.map((event) => (
              <LightEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Light Theme Schedule a Meeting CTA Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00747a]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#00747a] font-bold mb-3">
              <Sparkles className="w-4 h-4 text-[#00747a]" />
              PRE-SCHEDULE AN IN-PERSON ENGINEERING SESSION
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif font-medium text-[#141f22] mb-4">
              Attending One of These Shows?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
              Book a dedicated one-on-one technical consultation with our engineering and technical sales leaders during the show to discuss your cooling specifications, CFD thermal simulations, or prototype schedules.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:engineering@itscooling.com?subject=Trade%20Show%20Meeting%20Request"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#00747a] hover:bg-[#005a5f] text-white font-bold text-xs font-mono uppercase tracking-wider rounded transition-all shadow-md shadow-[#00747a]/20"
              >
                <span>Schedule a Meeting with ITS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-[#141f22] font-semibold text-xs font-mono uppercase tracking-wider rounded border border-slate-200 transition-colors"
              >
                <span>General Inquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function LightEventCard({ event }: { event: typeof TRADE_SHOW_EVENTS[number] }) {
  return (
    <div className="group rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div>
        {/* Logo Container in Clean Light Frame */}
        <div className="h-36 w-full rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-6 mb-6 group-hover:bg-[#e6f4f5]/40 transition-colors relative overflow-hidden">
          <Image
            src={event.logo}
            alt={`${event.name} Logo`}
            width={240}
            height={90}
            className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-white text-[#00747a] border border-slate-200 font-bold shadow-xs">
            {event.year}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#141f22] mb-3 font-['Space_Grotesk'] group-hover:text-[#00747a] transition-colors">
          {event.name}
        </h3>

        {/* Date & Location */}
        <div className="space-y-2.5 mb-6">
          <div className="flex items-start gap-2.5 text-sm text-slate-700">
            <Calendar className="w-4 h-4 text-[#00747a] shrink-0 mt-0.5" />
            <span className="font-semibold text-slate-900">{event.dates}</span>
          </div>
          <div className="flex items-start gap-2.5 text-sm text-slate-500">
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
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-50 hover:bg-[#00747a] text-slate-800 hover:text-white text-xs font-mono font-bold tracking-wider uppercase border border-slate-200 hover:border-[#00747a] transition-all group/btn shadow-xs"
      >
        <span>Event Details</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}
