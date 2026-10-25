import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Users, MapPin, Award, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyContent";
import { SubpageCta } from "@/components/common/SubpageCta";
import { DitherWave } from "@/components/ui/DitherWave";

export const metadata = {
  title: "Thermal engineering backed by in-house manufacturing. | ITS Cooling",
  description:
    "ITS works with customers to understand the thermal challenge, develop the right architecture and carry the design into controlled manufacturing.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="w-full min-h-screen bg-slate-50 pt-28 pb-20">
      {/* Detail Hero */}
      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-sky-50 border-b border-slate-200 py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
        {/* Dynamic Dither Wave Background */}
        <DitherWave
          color1="#0284c7"
          color2="#38bdf8"
          speed={0.35}
          frequency={2.2}
          amplitude={0.28}
          ditherSize={2.0}
          opacity={0.16}
        />
        <div className="absolute inset-0 bg-grid-blueprint opacity-60 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold text-sky-600 px-2 py-0.5 bg-white border border-slate-200 rounded-sm">
                ITS
              </span>
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-slate-500 font-semibold">
                What We Do At ITS Cooling
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-950 uppercase leading-[0.92] mb-6">
              Custom thermal engineering. <br />
              <span className="text-sky-600">Zero shelf stock.</span>
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              ITS Cooling designs and manufactures custom heat sinks and liquid cold plates based on our customers&#39; specific requirements. A one-stop solution from initial concept to finished hardware under one roof.
            </p>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white flex items-center justify-center p-6">
            <Image
              src="/images/manufacturing/precision-manufacturing.png"
              alt="Inside ITS Manufacturing Facility"
              width={480}
              height={360}
              priority
              className="object-contain max-h-[300px] drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Detail Content Articles */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="divide-y divide-slate-200 mb-20">
          {/* 01 What We Do at ITS Cooling */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">01</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Identity
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  What We Do at ITS Cooling
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal mb-4">
                  We don’t just sell standard cooling products. We work with customers to develop and manufacture cooling solutions that fit their applications.
                </p>
                <p className="text-slate-600 text-base leading-relaxed font-normal mb-6">
                  The main message is simple: <strong>Customers can come to us with their cooling requirements, and we can take care of the entire process, from concept to finished product, all under one roof.</strong>
                </p>
                <div className="p-4 bg-sky-50 rounded-lg border border-sky-200 text-slate-800 text-xs font-mono mb-4 leading-relaxed">
                  <strong>Zero Shelf Inventory:</strong> There is no product on shelves and nobody can purchase it. Everything is custom for a specific application. Simple idea: there will be different thermal requirements for different projects. Hence the new part all the time.
                </div>
                <div className="p-4 bg-slate-100 rounded-lg border-l-4 border-sky-600 italic text-slate-700 text-sm">
                  &ldquo;{COMPANY_INFO.ceoQuote}&rdquo;
                  <span className="block mt-2 font-mono text-xs font-bold text-slate-900 not-italic">
                    — Dr. Ahmed Zaghlol, Founder &amp; CEO
                  </span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block font-semibold">
                  Core Values
                </span>
                {COMPANY_INFO.values.map((v) => (
                  <div key={v.title} className="text-xs font-mono">
                    <strong className="text-slate-900 block">{v.title}</strong>
                    <span className="text-slate-500 leading-normal">{v.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* 02 Experience */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">02</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Heritage
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Experience
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal mb-6">
                  The current ITS website states that its engineering team brings more than 75 years of combined thermal-management experience.
                </p>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-sky-600 hover:text-sky-800"
                >
                  <span>Meet Our Engineering Specialists</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="block font-mono text-3xl font-bold text-slate-950">75+</span>
                  <span className="text-xs font-mono uppercase text-slate-500">Years Combined Exp</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="block font-mono text-3xl font-bold text-sky-600">26</span>
                  <span className="text-xs font-mono uppercase text-slate-500">CEO Thermal Exp</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="block font-mono text-3xl font-bold text-slate-950">2</span>
                  <span className="text-xs font-mono uppercase text-slate-500">Registered Patents</span>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="block font-mono text-3xl font-bold text-sky-600">27+</span>
                  <span className="text-xs font-mono uppercase text-slate-500">Engineering Team</span>
                </div>
              </div>
            </div>
          </article>

          {/* 03 Manufacturing in Ontario */}
          <article className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className="font-mono text-2xl font-bold text-sky-600">03</span>
              <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mt-1">
                Facilities
              </span>
            </div>
            <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 uppercase tracking-tight mb-4">
                  Manufacturing in Ontario
                </h2>
                <p className="text-slate-600 text-base leading-relaxed font-normal mb-6">
                  CNC machining and friction stir welding are operated from the ITS manufacturing facility in Guelph. For high-volume, cost-effective production, ITS also works with trusted manufacturing partners in Asia.
                </p>
                <Link
                  href="/facility"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-sky-600 hover:text-sky-800"
                >
                  <span>Tour the 6,000 sq ft Guelph Plant</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>290 Southgate Drive, Unit #2, Guelph, ON</span>
                </div>
                <p className="text-slate-500 leading-normal">
                  Strategically situated in Ontario&#39;s advanced manufacturing corridor, offering same-day prototype reviews and resilient North American supply chain security.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Inline CTA */}
        <SubpageCta
          eyebrow="Have an application to discuss?"
          title="Let's engineer the solution."
          description="Connect directly with our thermal and mechanical engineering team in Guelph, Ontario to explore our in-house manufacturing capabilities."
          primaryCtaText="Talk to a thermal engineer"
          primaryCtaHref="/contact"
        />
      </section>
    </main>
  );
}
