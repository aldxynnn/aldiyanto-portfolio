"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  FileText,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { PROFILE, UI_COPY } from "@/data/portfolio";
import type { Locale, ThemeMode } from "@/types/portfolio";

interface HeroSectionProps {
  locale: Locale;
  theme: ThemeMode;
  portraitHero: string;
}

export function HeroSection({ locale, theme, portraitHero }: HeroSectionProps) {
  const [cvOpen, setCvOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [wibTime, setWibTime] = useState<string>("--:--");
  const cvRef = useRef<HTMLDivElement | null>(null);
  const isLight = theme === "light";

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setWibTime(formatted);
      } catch {
        setWibTime("WIB");
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 15000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="top"
      className={`relative overflow-hidden pt-28 pb-16 transition-colors duration-300 sm:pt-36 sm:pb-24 ${
        isLight ? "bg-[#FAF9F5]" : "bg-[#F4F2EC]"
      }`}
    >
      {/* Subtle Architectural Grid & Warm Atmospheric Depth */}
      <div
        className={`pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_88%)] ${
          isLight ? "bg-arch-grid-sage" : "bg-arch-grid-light"
        }`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(23,107,84,0.085)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] left-[-8%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(201,151,91,0.08)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Column */}
          <div className="lg:col-span-7">
            {/* Availability Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className={`inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 shadow-2xs ${
                isLight
                  ? "border-[#D4DFD8] bg-white"
                  : "border-[#DDD9CD] bg-white/90"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#176B54]" />
              </span>
              <span className="font-mono text-[11px] font-medium tracking-tight text-[#2B3630]">
                {PROFILE.availability[locale]}
              </span>
            </motion.div>

            {/* Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="mt-6 font-mono text-xs font-medium tracking-[0.14em] uppercase text-[#176B54]"
            >
              {UI_COPY.hero.kicker[locale]}
            </motion.p>

            {/* Editorial Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-3 text-[40px] leading-[1.04] font-extrabold tracking-[-0.035em] text-[#18221D] sm:text-[54px] lg:text-[62px]"
            >
              {UI_COPY.hero.headlineLead[locale]}{" "}
              <span className="font-editorial block text-[46px] font-normal text-[#176B54] sm:inline sm:text-[62px] lg:text-[70px]">
                {UI_COPY.hero.headlineItalic[locale]}
              </span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-[#4D5952] sm:text-[17px]"
            >
              {UI_COPY.hero.bio[locale]}
            </motion.p>

            {/* CTA & Social Row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition ${
                  isLight
                    ? "bg-[#176B54] shadow-[0_12px_28px_-12px_rgba(23,107,84,0.45)] hover:bg-[#125542]"
                    : "bg-[#141917] shadow-[0_12px_28px_-12px_rgba(17,21,19,0.55)] hover:bg-[#1C6450]"
                }`}
              >
                <span>{UI_COPY.hero.primaryCta[locale]}</span>
                <ArrowDown className="h-4 w-4" />
              </a>

              {/* Multi-Track CV Dropdown */}
              <div ref={cvRef} className="relative">
                <button
                  type="button"
                  onClick={() => setCvOpen((v) => !v)}
                  aria-expanded={cvOpen}
                  className={`inline-flex items-center gap-2 rounded-full border bg-white px-5 py-3.5 text-sm font-semibold text-[#18221D] transition hover:border-[#176B54] hover:text-[#176B54] ${
                    isLight ? "border-[#D4DFD8]" : "border-[#111513]/15"
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>{UI_COPY.hero.secondaryCta[locale]}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${cvOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {cvOpen ? (
                  <div className="absolute left-0 z-40 mt-2 w-72 overflow-hidden rounded-2xl border border-[#D8E0DA] bg-white p-1.5 shadow-[0_20px_50px_-15px_rgba(17,21,19,0.2)]">
                    {PROFILE.cvFiles.map((cv) => (
                      <a
                        key={cv.id}
                        href={cv.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setCvOpen(false)}
                        className="flex items-start justify-between gap-2 rounded-xl px-3 py-2.5 transition hover:bg-[#EDF3EF]"
                      >
                        <div>
                          <div className="text-[13px] font-semibold text-[#18221D]">
                            {cv.label[locale]}
                          </div>
                          <div className="text-[11px] text-[#5C6861]">
                            {cv.sublabel[locale]}
                          </div>
                        </div>
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#176B54]" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* Compact Quick Links */}
              <div className="flex items-center gap-1.5 sm:ml-1">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#18221D]/12 bg-white text-[#18221D] transition hover:border-[#176B54] hover:bg-[#176B54] hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#18221D]/12 bg-white text-[#18221D] transition hover:border-[#176B54] hover:bg-[#176B54] hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  title={PROFILE.email}
                  className="inline-flex h-11 items-center gap-1.5 rounded-full border border-[#18221D]/12 bg-white px-3.5 font-mono text-xs font-medium text-[#18221D] transition hover:border-[#176B54] hover:text-[#176B54]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#176B54]" />
                      <span>{locale === "id" ? "Tersalin" : "Copied"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Hairline Engineering Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className={`mt-10 grid max-w-xl grid-cols-3 divide-x border-y py-4 ${
                isLight
                  ? "divide-[#DCE4DE] border-[#DCE4DE]"
                  : "divide-[#DDD9CD] border-[#DDD9CD]"
              }`}
            >
              {UI_COPY.hero.metrics.map((m, idx) => (
                <div
                  key={m.value}
                  className={idx === 0 ? "pr-4" : idx === 1 ? "px-4" : "pl-4"}
                >
                  <div className="font-mono text-2xl font-bold tracking-tight text-[#18221D] sm:text-3xl">
                    {m.value}
                  </div>
                  <div className="mt-0.5 text-[11px] font-medium text-[#5B6660] sm:text-xs">
                    {m.label[locale]}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Proportional Portrait Column (Shows Cleanly From Shoes Up, Ideal Size) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-[400px] lg:ml-auto">
              {/* Architectural Backing Frame */}
              <div
                aria-hidden="true"
                className={`absolute -inset-2.5 rounded-[28px] border ${
                  isLight
                    ? "border-[#D4DFD8] bg-[#EDF2EE]/75"
                    : "border-[#DDD9CD] bg-[#FAF9F5]/55"
                }`}
              />

              <div
                className={`relative overflow-hidden rounded-[22px] border transition-colors duration-300 ${
                  isLight
                    ? "border-[#D4DFD8] bg-white shadow-[0_28px_60px_-28px_rgba(23,56,44,0.22)]"
                    : "border-[#1C221F]/12 bg-[#141917] shadow-[0_32px_70px_-28px_rgba(20,25,23,0.42)]"
                }`}
              >
                {/* Top Coordinate Bar */}
                <div
                  className={`flex items-center justify-between border-b px-4 py-2.5 font-mono text-[10px] ${
                    isLight
                      ? "border-[#E3EAE5] bg-[#FAF9F5] text-[#55635C]"
                      : "border-white/10 bg-[#141917] text-white/70"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <MapPin
                      className={`h-3 w-3 ${isLight ? "text-[#176B54]" : "text-[#5EC4A0]"}`}
                    />
                    SERANG, BANTEN · ID
                  </span>
                  <span
                    className={
                      isLight
                        ? "font-semibold text-[#176B54]"
                        : "text-[#86D8BA]"
                    }
                  >
                    {wibTime} WIB
                  </span>
                </div>

                {/* Proportional Portrait Frame (Anchored From Shoes Up, Balanced Height) */}
                <div
                  className={`relative aspect-[4/4.8] w-full overflow-hidden ${
                    isLight ? "bg-[#EDF2EE]" : "bg-[#141917]"
                  }`}
                >
                  <img
                    src={portraitHero}
                    alt="Aldiyanto — Software Engineer & Android Developer"
                    className="h-full w-full object-cover object-bottom transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>

                {/* Clean Identity Footer Bar Below Photo (Zero Overlap on Shoes) */}
                <div
                  className={`flex items-center justify-between gap-3 border-t px-4 py-3 ${
                    isLight
                      ? "border-[#E3EAE5] bg-white"
                      : "border-white/10 bg-[#141917]"
                  }`}
                >
                  <div>
                    <div
                      className={`font-mono text-[9.5px] tracking-[0.14em] uppercase ${
                        isLight
                          ? "font-semibold text-[#176B54]"
                          : "text-[#86D8BA]"
                      }`}
                    >
                      @{PROFILE.handle}
                    </div>
                    <div
                      className={`text-base font-bold leading-tight tracking-tight ${
                        isLight ? "text-[#18221D]" : "text-[#ECEAE2]"
                      }`}
                    >
                      {PROFILE.name}
                    </div>
                    <div
                      className={`mt-0.5 text-[11px] ${
                        isLight ? "text-[#58665E]" : "text-[#A7B2AC]"
                      }`}
                    >
                      {PROFILE.semester[locale]}
                    </div>
                  </div>
                  <div
                    className={`rounded-lg border px-2.5 py-1.5 text-right ${
                      isLight
                        ? "border-[#D4DFD8] bg-[#EDF2EE]"
                        : "border-white/12 bg-[#1B221F]"
                    }`}
                  >
                    <div
                      className={`font-mono text-[9px] uppercase ${
                        isLight ? "text-[#5E6D65]" : "text-white/55"
                      }`}
                    >
                      GPA
                    </div>
                    <div
                      className={`font-mono text-xs font-bold ${
                        isLight ? "text-[#176B54]" : "text-[#86D8BA]"
                      }`}
                    >
                      3.86
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
