"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, UI_COPY } from "@/data/portfolio";
import type { Locale, ThemeMode } from "@/types/portfolio";

interface AboutSectionProps {
  locale: Locale;
  theme: ThemeMode;
  portraitFull: string;
}

export function AboutSection({
  locale,
  theme,
  portraitFull,
}: AboutSectionProps) {
  const isLight = theme === "light";

  return (
    <section
      id="about"
      className={`relative px-2 pt-2 transition-colors duration-300 sm:px-4 ${
        isLight ? "bg-[#FAF9F5]" : "bg-[#F4F2EC]"
      }`}
    >
      {/* Editorial Pine-Charcoal OR Bright Daylight Pale-Sage Surface */}
      <div
        className={`relative overflow-hidden rounded-[28px] transition-colors duration-300 sm:rounded-[36px] ${
          isLight
            ? "border border-[#D8E2DB] bg-[#EDF2EE] text-[#18221D]"
            : "bg-[#141917] text-[#ECEAE2]"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 ${
            isLight
              ? "bg-arch-grid-sage opacity-80"
              : "bg-arch-grid-dark opacity-75"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full ${
            isLight
              ? "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.75)_0%,transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_top,rgba(28,100,80,0.22)_0%,transparent_70%)]"
          }`}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Portrait (Bottom-Anchored, Zero Top Clutter) & Stat Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-5"
            >
              <div
                className={`overflow-hidden rounded-2xl border ${
                  isLight
                    ? "border-[#D4DFD8] bg-white p-2 shadow-[0_20px_48px_-28px_rgba(23,56,44,0.18)]"
                    : "border-white/10 bg-[#1B221F]"
                }`}
              >
                <div
                  className={`relative aspect-[4/3.95] w-full overflow-hidden ${
                    isLight ? "rounded-xl" : ""
                  }`}
                >
                  <img
                    src={portraitFull}
                    alt="Aldiyanto profile portrait"
                    className="h-full w-full object-cover object-bottom"
                  />
                </div>
                <div
                  className={`flex items-center justify-between font-mono text-[10px] tracking-wider uppercase ${
                    isLight
                      ? "px-2 pt-2.5 pb-1 text-[#58675F]"
                      : "border-t border-white/10 bg-[#141917] px-4 py-2.5 text-white/75"
                  }`}
                >
                  <span>UNSERA · INFORMATICS &apos;23</span>
                  <span
                    className={
                      isLight
                        ? "font-semibold text-[#176B54]"
                        : "text-[#86D8BA]"
                    }
                  >
                    KOTLIN · TS · JAVA · PY
                  </span>
                </div>
              </div>

              {/* 4-Stat Readout */}
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {UI_COPY.about.stats.map((stat) => (
                  <div
                    key={stat.label.en}
                    className={`rounded-xl border px-4 py-3.5 ${
                      isLight
                        ? "border-[#D8E2DB] bg-white/95"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div
                      className={`font-mono text-2xl font-bold ${
                        isLight ? "text-[#18221D]" : "text-white"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`mt-1 text-xs ${
                        isLight ? "text-[#58675F]" : "text-white/60"
                      }`}
                    >
                      {stat.label[locale]}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Narrative & 3 Engineering Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-7"
            >
              <div
                className={`font-mono text-xs font-medium tracking-[0.16em] uppercase ${
                  isLight ? "text-[#176B54]" : "text-[#5EC4A0]"
                }`}
              >
                {UI_COPY.about.eyebrow[locale]}
              </div>

              <h2
                className={`mt-4 text-3xl leading-[1.1] font-bold tracking-[-0.03em] sm:text-4xl lg:text-[46px] ${
                  isLight ? "text-[#18221D]" : "text-white"
                }`}
              >
                {UI_COPY.about.headingLead[locale]}{" "}
                <span
                  className={`font-editorial font-normal ${
                    isLight ? "text-[#176B54]" : "text-[#86D8BA]"
                  }`}
                >
                  {UI_COPY.about.headingItalic[locale]}
                </span>
              </h2>

              <div
                className={`mt-6 space-y-4 text-[15px] leading-relaxed sm:text-base ${
                  isLight ? "text-[#47564F]" : "text-[#A9B3AD]"
                }`}
              >
                <p>{UI_COPY.about.p1[locale]}</p>
                <p>{UI_COPY.about.p2[locale]}</p>
              </div>

              {/* 3 Engineering Pillars */}
              <div className="mt-10 space-y-3.5">
                {UI_COPY.about.pillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className={`group rounded-2xl border p-5 transition ${
                      isLight
                        ? "border-[#D8E2DB] bg-white/95 hover:border-[#176B54]/45 hover:shadow-[0_14px_32px_-24px_rgba(23,56,44,0.25)]"
                        : "border-white/10 bg-white/[0.025] hover:border-[#5EC4A0]/35 hover:bg-white/[0.045]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-mono text-xs font-semibold ${
                          isLight
                            ? "border-[#176B54]/20 bg-[#EDF3EF] text-[#176B54]"
                            : "border-[#5EC4A0]/25 bg-[#5EC4A0]/10 text-[#86D8BA]"
                        }`}
                      >
                        {pillar.num}
                      </span>
                      <div>
                        <h3
                          className={`text-base font-semibold ${
                            isLight ? "text-[#18221D]" : "text-white"
                          }`}
                        >
                          {pillar.title[locale]}
                        </h3>
                        <p
                          className={`mt-1.5 text-sm leading-relaxed ${
                            isLight ? "text-[#506058]" : "text-[#9CA7A1]"
                          }`}
                        >
                          {pillar.body[locale]}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* GitHub & Profile Direct Link */}
              <div
                className={`mt-8 flex flex-wrap items-center gap-4 border-t pt-6 ${
                  isLight ? "border-[#D4DFD8]" : "border-white/10"
                }`}
              >
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-mono text-xs font-semibold transition ${
                    isLight
                      ? "text-[#176B54] hover:text-[#125542]"
                      : "text-[#86D8BA] hover:text-emerald-200"
                  }`}
                >
                  <span>github.com/{PROFILE.handle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <span className={isLight ? "text-[#B5C4BB]" : "text-white/20"}>
                  ·
                </span>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-mono text-xs font-medium transition ${
                    isLight
                      ? "text-[#4D5D55] hover:text-[#18221D]"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  <span>linkedin.com/in/{PROFILE.handle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
