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
} from "lucide-react";
import { CAREERS_INTRO, JOB_OPENINGS, JobOpportunity } from "@/data/careersData";

export default function CareersClient() {
  const [selectedJob, setSelectedJob] = useState<string>(JOB_OPENINGS[0]?.title || "");
  const [expandedJobs, setExpandedJobs] = useState<Record<string, boolean>>({
    [JOB_OPENINGS[0]?.id || ""]: true,
  });

  // Form State
  const formRef = useRef<HTMLDivElement>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState(JOB_OPENINGS[0]?.title || "");
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
          <span className="text-[#00747a]">Careers</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00747a]/20 border border-[#00747a]/40 rounded-full text-xs font-mono text-teal-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00747a] animate-pulse" />
            {CAREERS_INTRO.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-['Space_Grotesk'] leading-[1.1]">
            {CAREERS_INTRO.heading}
          </h1>
          <p className="text-xl sm:text-2xl text-teal-100 font-medium mb-8 leading-snug">
            {CAREERS_INTRO.subheading}
          </p>

          <div className="space-y-4 text-sm sm:text-base text-[#9da8a9] leading-relaxed">
            {CAREERS_INTRO.descriptionParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {CAREERS_INTRO.facilityStats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[11px] font-mono text-[#00747a] uppercase tracking-wider block mb-1">
                  {stat.label}
                </span>
                <span className="text-sm font-semibold text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div>
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] text-white">
                Current Openings
              </h2>
              <p className="text-sm text-[#9da8a9] mt-1 font-mono">
                {JOB_OPENINGS.length} available technical & operations positions in Guelph, ON
              </p>
            </div>
            <button
              onClick={() => {
                const allExpanded = Object.keys(expandedJobs).length === JOB_OPENINGS.length;
                if (allExpanded) {
                  setExpandedJobs({});
                } else {
                  const all: Record<string, boolean> = {};
                  JOB_OPENINGS.forEach((j) => (all[j.id] = true));
                  setExpandedJobs(all);
                }
              }}
              className="text-xs font-mono text-teal-300 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg bg-white/5 transition-colors"
            >
              {Object.keys(expandedJobs).length === JOB_OPENINGS.length ? "Collapse All" : "Expand All"}
            </button>
          </div>

          <div className="space-y-6">
            {JOB_OPENINGS.map((job) => {
              const isExpanded = !!expandedJobs[job.id];
              return (
                <div
                  key={job.id}
                  className="rounded-2xl bg-[#141f22]/90 border border-white/10 hover:border-[#00747a]/50 transition-all duration-300 overflow-hidden shadow-lg"
                >
                  {/* Job Header */}
                  <div
                    onClick={() => toggleJob(job.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-[#00747a]/20 text-teal-300 border border-[#00747a]/30">
                          {job.employmentType}
                        </span>
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-white/5 text-[#9da8a9] border border-white/10">
                          {job.workArrangement}
                        </span>
                        {job.reportingTo && (
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono text-xs text-white/70">
                            Reports to: {job.reportingTo}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold font-['Space_Grotesk'] text-white">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#9da8a9]">
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
                        className="px-5 py-2.5 rounded-lg bg-[#00747a] hover:bg-[#008f96] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-md hover:shadow-[#00747a]/20 flex items-center gap-2"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-teal-300" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white/70" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content with full verbatim subsections */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 bg-black/20 space-y-8">
                      {job.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-3">
                          <h4 className="text-lg font-bold font-['Space_Grotesk'] text-teal-200 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00747a]" />
                            {section.title}
                          </h4>
                          <div className="space-y-3 pl-3.5 border-l-2 border-[#00747a]/30">
                            {section.content.map((item, cIdx) => {
                              if (item.type === "p" && item.text) {
                                return (
                                  <p key={cIdx} className="text-sm sm:text-base text-[#9da8a9] leading-relaxed">
                                    {item.text}
                                  </p>
                                );
                              }
                              if (item.type === "ul" && item.items) {
                                return (
                                  <ul key={cIdx} className="space-y-2 list-disc list-inside text-sm sm:text-base text-[#9da8a9]">
                                    {item.items.map((bullet, bIdx) => (
                                      <li key={bIdx} className="leading-relaxed">
                                        <span className="text-[#c8d3d5]">{bullet}</span>
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
                      <div className="pt-4 flex items-center justify-between border-t border-white/10">
                        <span className="text-xs font-mono text-[#9da8a9]">
                          Ready to apply for this opening?
                        </span>
                        <button
                          type="button"
                          onClick={() => handleApplyClick(job.title)}
                          className="px-6 py-2.5 rounded-lg bg-[#00747a] hover:bg-[#008f96] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
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
        </div>

        {/* Application Form Section */}
        <div ref={formRef} className="scroll-mt-32 max-w-3xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-b from-[#141f22] to-[#0c1618] border border-[#00747a]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00747a]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8">
              <span className="text-xs font-mono text-[#00747a] tracking-widest uppercase mb-2 block font-semibold">
                Direct Candidate Application
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white mb-3">
                Apply for a Position
              </h2>
              <p className="text-sm sm:text-base text-[#9da8a9]">
                Submit your credentials and documents directly to our talent team at ITS Cooling.
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-8 p-6 rounded-2xl bg-[#00747a]/20 border border-[#00747a]/60 text-white flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-teal-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg mb-1 font-['Space_Grotesk'] text-teal-200">
                    Application Successfully Submitted!
                  </h4>
                  <p className="text-sm text-[#9da8a9] leading-relaxed">
                    Thank you for applying to ITS Cooling. Your application has been logged and forwarded to our recruiting team. If your background matches our technical needs, we will reach out to arrange an interview.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-8 p-6 rounded-2xl bg-rose-950/40 border border-rose-500/50 text-white flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-lg mb-1 font-['Space_Grotesk'] text-rose-300">
                    Submission Error
                  </h4>
                  <p className="text-sm text-[#9da8a9] leading-relaxed">
                    {errorMessage}
                  </p>
                  <p className="text-xs text-[#9da8a9] mt-2 font-mono">
                    Alternatively, please email your resume and cover letter directly to{" "}
                    <a href="mailto:engineering@itscooling.com" className="text-teal-300 underline">
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9da8a9] mb-2">
                    First Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00747a] focus:bg-white/[0.08] text-white text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9da8a9] mb-2">
                    Last Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00747a] focus:bg-white/[0.08] text-white text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9da8a9] mb-2">
                    Email Address <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane.doe@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00747a] focus:bg-white/[0.08] text-white text-sm outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9da8a9] mb-2">
                    Cell Phone <span className="text-[#9da8a9]/60">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#00747a] focus:bg-white/[0.08] text-white text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Position Select */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9da8a9] mb-2">
                  Position Applied For <span className="text-teal-400">*</span>
                </label>
                <div className="relative">
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#141f22] border border-white/10 focus:border-[#00747a] text-white text-sm outline-none appearance-none transition-all cursor-pointer"
                  >
                    {JOB_OPENINGS.map((job) => (
                      <option key={job.id} value={job.title} className="bg-[#141f22] text-white">
                        {job.title} ({job.employmentType})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#9da8a9] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#9da8a9]">
                    Resume Upload <span className="text-teal-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-[#9da8a9]/70">PDF, DOC, DOCX (Max 5MB)</span>
                </div>
                <div className="relative border-2 border-dashed border-white/20 hover:border-[#00747a] rounded-2xl p-6 text-center transition-colors bg-white/[0.02]">
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
                      <FileText className="w-6 h-6 text-teal-300" />
                      <div className="text-left">
                        <span className="text-sm font-semibold text-white block">{resumeFile.name}</span>
                        <span className="text-xs text-[#9da8a9] font-mono">
                          {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResumeFile(null);
                        }}
                        className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white ml-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2 pointer-events-none">
                      <Upload className="w-6 h-6 text-[#00747a] mx-auto" />
                      <p className="text-xs sm:text-sm text-white font-medium">
                        Click to upload or drag & drop your resume
                      </p>
                      <p className="text-xs text-[#9da8a9]">1 file up to 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Cover Letter Upload */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#9da8a9]">
                    Cover Letter <span className="text-[#9da8a9]/60">(Optional)</span>
                  </label>
                  <span className="text-[11px] font-mono text-[#9da8a9]/70">PDF, DOC, DOCX (Max 5MB)</span>
                </div>
                <div className="relative border-2 border-dashed border-white/20 hover:border-[#00747a] rounded-2xl p-6 text-center transition-colors bg-white/[0.02]">
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
                      <FileText className="w-6 h-6 text-teal-300" />
                      <div className="text-left">
                        <span className="text-sm font-semibold text-white block">{coverLetterFile.name}</span>
                        <span className="text-xs text-[#9da8a9] font-mono">
                          {(coverLetterFile.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCoverLetterFile(null);
                        }}
                        className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white ml-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2 pointer-events-none">
                      <Upload className="w-6 h-6 text-white/50 mx-auto" />
                      <p className="text-xs sm:text-sm text-white font-medium">
                        Click to upload or drag & drop your cover letter
                      </p>
                      <p className="text-xs text-[#9da8a9]">1 file up to 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#00747a] hover:bg-[#008f96] disabled:bg-gray-700 text-white font-bold font-['Space_Grotesk'] text-base tracking-wide transition-all shadow-xl hover:shadow-[#00747a]/25 flex items-center justify-center gap-2"
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
                <p className="text-xs text-[#9da8a9] leading-relaxed">
                  By submitting, you agree to allow Innovative Thermal Solutions to retain and review your information for recruitment purposes.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

