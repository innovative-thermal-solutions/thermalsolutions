"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  UserCheck,
  ChevronDown,
  ChevronUp,
  Upload,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Send,
  X,
  FileText,
  Building2,
} from "lucide-react";
import { CAREERS_INTRO as FALLBACK_INTRO, JOB_OPENINGS as FALLBACK_OPENINGS } from "@/data/careersData";
import { CMSCareersContent, CMSJobOpportunity } from "@/lib/cms/types";

interface CareersClientProps {
  initialCareers?: CMSCareersContent;
}

export default function CareersClient({ initialCareers }: CareersClientProps) {
  const intro = initialCareers?.intro || FALLBACK_INTRO;
  const openings: CMSJobOpportunity[] = (initialCareers?.openings && initialCareers.openings.length > 0)
    ? initialCareers.openings
    : (FALLBACK_OPENINGS as any);

  const [selectedJob, setSelectedJob] = useState<string>(openings[0]?.title || "");
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({
    [openings[0]?.id || ""]: true,
  });

  // Form State
  const formRef = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState(openings[0]?.title || "");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleJob = (jobId: string) => {
    setExpandedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  const handleApplyClick = (jobTitle: string) => {
    setPosition(jobTitle);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      if (!resumeFile) {
        throw new Error("Please upload your resume before submitting.");
      }

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("position", position);
      formData.append("resume", resumeFile);
      if (coverLetterFile) {
        formData.append("coverLetter", coverLetterFile);
      }

      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setSubmitStatus("success");
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setResumeFile(null);
      setCoverLetterFile(null);
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main id="main-content" className="w-full min-h-screen bg-[#f8faf9] text-[#141f22]">
      {/* 1. Standard Pattern Hero Section */}
      <section className="relative w-full min-h-[580px] lg:min-h-[660px] border-b border-[#d8dedf] bg-[#f8faf9] overflow-hidden pt-28 lg:pt-32 flex flex-col justify-end">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,116,122,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,122,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-12 lg:py-16 relative z-10 flex-1 flex flex-col justify-end">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00747a] font-bold mb-4">
            {intro.badge} · GUELPH, ONTARIO
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-serif font-medium tracking-tight text-[#141f22] leading-[0.98] sm:leading-[0.96] max-w-4xl mb-6">
            Join our team.<br />
            <span className="text-[#00747a]">Build the future of cooling.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal">
            {intro.subheading}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-7 py-4 bg-[#00747a] hover:bg-[#005d62] text-white font-mono text-xs uppercase tracking-wider font-bold rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Browse Open Positions ({openings.length})</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
            <a
              href="#apply-form"
              className="inline-flex items-center gap-2 px-6 py-4 border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-mono text-xs uppercase tracking-wider font-bold rounded transition-colors shadow-2xs"
            >
              <span>Submit General Application</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Company Capabilities Overview & Stats (Light Theme) */}
      <section className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
            {intro.descriptionParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
              <div className="text-xs font-mono uppercase tracking-wider text-[#00747a] font-bold mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Guelph Facility At A Glance</span>
              </div>
              <div className="space-y-4">
                {intro.facilityStats.map((stat, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-100 last:border-none last:pb-0">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-0.5">
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold text-[#141f22]">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#e6f4f5] border border-[#00747a]/20">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#00747a] font-bold mb-2">
                <ShieldCheck className="w-4 h-4 text-[#00747a]" />
                <span>Direct Inquiries</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Questions about joining ITS Cooling or seeking custom role inquiries?
              </p>
              <a
                href="mailto:engineering@itscooling.com"
                className="text-xs font-mono font-bold text-[#00747a] hover:underline block"
              >
                engineering@itscooling.com ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Job Listings Section (Light Theme Accordion / Cards) */}
      <section id="openings" className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
          <div>
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-[#141f22]">
              Current Openings
            </h2>
            <p className="text-sm text-slate-500 mt-1 font-mono">
              {openings.length} available technical &amp; operations positions in Guelph, ON
            </p>
          </div>
          <button
            onClick={() => {
              const allExpanded = Object.keys(expandedJobs).length === openings.length;
              if (allExpanded) {
                setExpandedJobs({});
              } else {
                const all: Record<string, boolean> = {};
                openings.forEach((j) => (all[j.id] = true));
                setExpandedJobs(all);
              }
            }}
            className="text-xs font-mono font-bold text-[#00747a] hover:text-[#005a5f] border border-slate-200 px-4 py-2 rounded-lg bg-white shadow-xs hover:border-[#00747a] transition-colors"
          >
            {Object.keys(expandedJobs).length === openings.length ? "Collapse All Positions" : "Expand All Positions"}
          </button>
        </div>

        <div className="space-y-6">
          {openings.map((job) => {
            const isExpanded = !!expandedJobs[job.id];
            return (
              <div
                key={job.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-[#00747a] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              >
                {/* Job Header */}
                <div
                  onClick={() => toggleJob(job.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/70 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-[#e6f4f5] text-[#00747a] border border-[#00747a]/20 font-bold">
                        {job.employmentType}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
                        {job.workArrangement}
                      </span>
                      {job.reportingTo && (
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-500">
                          Reports to: <span className="font-semibold text-slate-700">{job.reportingTo}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-[#141f22]">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#00747a]" />
                      <span>{job.companyLocation}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyClick(job.title);
                      }}
                      className="px-5 py-2.5 rounded-lg bg-[#00747a] hover:bg-[#005a5f] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-md shadow-[#00747a]/20 flex items-center gap-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-[#00747a]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content with full verbatim subsections */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-200 bg-slate-50/50 space-y-8">
                    {job.sections.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <h4 className="text-lg font-bold font-['Space_Grotesk'] text-[#00747a] flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00747a]" />
                          {section.title}
                        </h4>
                        <div className="space-y-3 pl-4 border-l-2 border-[#00747a]/20">
                          {section.content.map((item, cIdx) => {
                            if (item.type === "p" && item.text) {
                              return (
                                <p key={cIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                                  {item.text}
                                </p>
                              );
                            }
                            if (item.type === "ul" && item.items) {
                              return (
                                <ul key={cIdx} className="space-y-2 list-disc list-inside text-sm sm:text-base text-slate-700">
                                  {item.items.map((bullet, bIdx) => (
                                    <li key={bIdx} className="leading-relaxed">
                                      <span className="text-slate-800">{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    ))}

                    {/* Card bottom Apply Now CTA */}
                    <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-slate-200 gap-4">
                      <span className="text-xs font-mono text-slate-500">
                        Interested in joining our team for this position?
                      </span>
                      <button
                        type="button"
                        onClick={() => handleApplyClick(job.title)}
                        className="px-6 py-2.5 rounded-lg bg-[#00747a] hover:bg-[#005a5f] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-2 shadow-xs"
                      >
                        Apply for {job.title}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Application Form Section (Light Theme Clean Form) */}
      <section id="apply-form" ref={formRef} className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-14 pb-24 scroll-mt-32">
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00747a]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="mb-8">
            <span className="text-xs font-mono text-[#00747a] tracking-widest uppercase mb-2 block font-bold">
              Direct Candidate Application
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-[#141f22] mb-3">
              Apply for a Position
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Submit your credentials and documents directly to our recruitment team at ITS Cooling.
            </p>
          </div>

          {submitStatus === "success" && (
            <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-lg mb-1 font-['Space_Grotesk'] text-emerald-900">
                  Application Successfully Submitted!
                </h4>
                <p className="text-sm text-emerald-800 leading-relaxed">
                  Thank you for applying to ITS Cooling. Your application has been logged and forwarded to our recruiting team. If your background matches our technical needs, we will reach out to arrange an interview.
                </p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-8 p-6 rounded-2xl bg-rose-50 border border-rose-300 text-rose-950 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-lg mb-1 font-['Space_Grotesk'] text-rose-900">
                  Submission Error
                </h4>
                <p className="text-sm text-rose-800 leading-relaxed">
                  {errorMessage}
                </p>
                <p className="text-xs text-rose-700 mt-2 font-mono">
                  Alternatively, please email your resume and cover letter directly to{" "}
                  <a href="mailto:engineering@itscooling.com" className="text-rose-900 underline font-semibold">
                    engineering@itscooling.com
                  </a>.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                  First Name <span className="text-[#00747a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00747a] focus:bg-white text-slate-900 text-sm outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                  Last Name <span className="text-[#00747a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00747a] focus:bg-white text-slate-900 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                  Email Address <span className="text-[#00747a]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane.doe@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00747a] focus:bg-white text-slate-900 text-sm outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                  Cell Phone <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00747a] focus:bg-white text-slate-900 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Position Select */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-2">
                Position Applied For <span className="text-[#00747a]">*</span>
              </label>
              <div className="relative">
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#00747a] focus:bg-white text-slate-900 text-sm outline-none appearance-none transition-all cursor-pointer font-medium"
                >
                  {openings.map((job) => (
                    <option key={job.id} value={job.title} className="bg-white text-slate-900">
                      {job.title} {job.employmentType ? `(${job.employmentType})` : ''}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                  Resume Upload <span className="text-[#00747a]">*</span>
                </label>
                <span className="text-[11px] font-mono text-slate-400">PDF, DOC, DOCX (Max 5MB)</span>
              </div>
              <div className="relative border-2 border-dashed border-slate-300 hover:border-[#00747a] rounded-2xl p-6 text-center transition-colors bg-slate-50/70">
                <input
                  type="file"
                  required={!resumeFile}
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setResumeFile(e.target.files[0]);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {resumeFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-6 h-6 text-[#00747a]" />
                    <div className="text-left">
                      <span className="text-sm font-semibold text-slate-900 block">{resumeFile.name}</span>
                      <span className="text-xs text-slate-500 font-mono">
                        {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setResumeFile(null);
                      }}
                      className="p-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 ml-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2 pointer-events-none">
                    <Upload className="w-6 h-6 text-[#00747a] mx-auto" />
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      Click to upload or drag &amp; drop your resume
                    </p>
                    <p className="text-xs text-slate-400">1 file up to 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Cover Letter Upload */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                  Cover Letter <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <span className="text-[11px] font-mono text-slate-400">PDF, DOC, DOCX (Max 5MB)</span>
              </div>
              <div className="relative border-2 border-dashed border-slate-300 hover:border-[#00747a] rounded-2xl p-6 text-center transition-colors bg-slate-50/70">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setCoverLetterFile(e.target.files[0]);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {coverLetterFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-6 h-6 text-[#00747a]" />
                    <div className="text-left">
                      <span className="text-sm font-semibold text-slate-900 block">{coverLetterFile.name}</span>
                      <span className="text-xs text-slate-500 font-mono">
                        {(coverLetterFile.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCoverLetterFile(null);
                      }}
                      className="p-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 ml-2"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2 pointer-events-none">
                    <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">
                      Click to upload or drag &amp; drop your cover letter
                    </p>
                    <p className="text-xs text-slate-400">1 file up to 5MB</p>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-[#00747a] hover:bg-[#005a5f] disabled:bg-slate-300 text-white font-bold font-['Space_Grotesk'] text-base tracking-wide transition-all shadow-md shadow-[#00747a]/20 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="text-xs text-slate-500 leading-relaxed">
                By submitting, you agree to allow Innovative Thermal Solutions to retain and review your information for recruitment purposes.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
