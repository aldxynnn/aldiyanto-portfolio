"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Languages,
  Wrench,
} from "lucide-react";
import { EDUCATION, EXPERIENCE, UI_COPY } from "@/data/portfolio";
import type { Locale, ThemeMode } from "@/types/portfolio";

interface BackgroundSectionProps {
  locale: Locale;
  theme: ThemeMode;
}

export function BackgroundSection({ locale, theme }: BackgroundSectionProps) {
  const isLight = theme === "light";

  return (
    <section
      id="background"
      className={`relative py-24 transition-colors duration-300 sm:py-32 ${
        isLight ? "bg-[#FAF9F5]" : "bg-[#F4F2EC]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-medium tracking-[0.16em] uppercase text-[#145A47]">
            {UI_COPY.background.eyebrow[locale]}
          </div>
          <h2 className="mt-3 text-3xl leading-[1.08] font-bold tracking-[-0.03em] text-[#111513] sm:text-4xl lg:text-[48px]">
            {UI_COPY.background.headingLead[locale]}{" "}
            <span className="font-editorial font-normal text-[#145A47]">
              {UI_COPY.background.headingItalic[locale]}
            </span>
          </h2>
        </div>

        {/* Asymmetric 2-Column Editorial Split */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left 6 Cols — Formal Education */}
          <div className="space-y-5 lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase text-[#5C6660]">
              <GraduationCap className="h-4 w-4 text-[#145A47]" />
              <span>{UI_COPY.background.educationTitle[locale]}</span>
            </div>

            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-[24px] border border-[#DDDAD0] bg-white p-6 shadow-[0_14px_35px_-28px_rgba(17,21,19,0.22)] sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="font-mono text-[11px] font-medium text-[#145A47]">
                      {edu.period[locale]}
                    </span>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-[#111513]">
                      {edu.institution}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-[#4C5550]">
                      {edu.degree[locale]}
                    </p>
                  </div>

                  {edu.highlightValue ? (
                    <div
                      className={`rounded-xl px-3.5 py-2.5 text-right ${
                        isLight
                          ? "border border-[#D4DFD8] bg-[#EDF2EE] text-[#18221D]"
                          : "bg-[#141917] text-white"
                      }`}
                    >
                      <div
                        className={`font-mono text-[9.5px] uppercase ${
                          isLight ? "text-[#58675F]" : "text-white/55"
                        }`}
                      >
                        {edu.highlightLabel?.[locale]}
                      </div>
                      <div
                        className={`mt-0.5 font-mono text-lg font-bold ${
                          isLight ? "text-[#176B54]" : "text-[#86D8BA]"
                        }`}
                      >
                        {edu.highlightValue}
                      </div>
                    </div>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#4C5550]">
                  {edu.description[locale]}
                </p>

                <ul className="mt-4 space-y-2 border-t border-[#ECEAE2] pt-4">
                  {edu.focusAreas[locale].map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-xs font-medium text-[#2A322E]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#145A47]" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Languages Compact Strip */}
            <div className="rounded-2xl border border-[#DDDAD0] bg-[#EFECE4]/70 p-5">
              <div className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider uppercase text-[#145A47]">
                <Languages className="h-3.5 w-3.5" />
                <span>{UI_COPY.background.languagesTitle[locale]}</span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {UI_COPY.background.languages.map((lang) => (
                  <div
                    key={lang.name.en}
                    className="rounded-xl border border-[#DDDAD0] bg-white px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-[#111513]">
                      {lang.name[locale]}
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] text-[#5C6660]">
                      {lang.level[locale]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 6 Cols — Industry Experience */}
          <div className="space-y-5 lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase text-[#5C6660]">
              <Briefcase className="h-4 w-4 text-[#145A47]" />
              <span>{UI_COPY.background.experienceTitle[locale]}</span>
            </div>

            <div className="relative space-y-5 pl-6 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-[#CFCBC0]">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="relative rounded-[24px] border border-[#DDDAD0] bg-white p-6 shadow-[0_14px_35px_-28px_rgba(17,21,19,0.22)] sm:p-7"
                >
                  {/* Timeline Node */}
                  <span
                    aria-hidden="true"
                    className="absolute top-7 -left-[25px] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#F6F5F1] bg-[#145A47]"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                    <span className="font-semibold text-[#145A47]">
                      {exp.period[locale]}
                    </span>
                    <span className="rounded-full bg-[#F6F5F1] px-2.5 py-0.5 text-[#525B56]">
                      {exp.type[locale]}
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-[#111513]">
                    {exp.role[locale]}
                  </h3>
                  <div className="text-sm font-semibold text-[#4C5550]">
                    {exp.company}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#4C5550]">
                    {exp.summary[locale]}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets[locale].map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#2D3531]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#145A47]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[#ECEAE2] pt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#E2DFD6] bg-[#F6F5F1] px-2.5 py-0.5 font-mono text-[10.5px] text-[#3B443F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Engineering Perspective Callout */}
            <div className="rounded-2xl border border-[#145A47]/20 bg-[#145A47]/[0.06] p-5">
              <div className="flex items-start gap-3">
                <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-[#145A47]" />
                <div>
                  <div className="text-sm font-bold text-[#111513]">
                    {locale === "id"
                      ? "Dari Hardware & Jaringan ke Software Engineering"
                      : "From Hardware & Networking to Software Engineering"}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#3F4944]">
                    {locale === "id"
                      ? "Pengalaman 1+ tahun menangani perakitan, QA produksi, serta jaringan MikroTik membentuk cara saya mendesain perangkat lunak: teliti terhadap edge-case jaringan, disiplin pada pengujian, dan fokus pada keandalan operasional."
                      : "Hands-on production QA and MikroTik network troubleshooting directly shaped my software habits: respecting flaky networks with offline-first queues, rigorous testing, and dependable field operations."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
