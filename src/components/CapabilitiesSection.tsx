"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu } from "lucide-react";
import {
  PROJECTS,
  SKILL_GROUPS,
  SYSTEM_CAPABILITIES,
  UI_COPY,
} from "@/data/portfolio";
import type { Locale, ProjectItem, ThemeMode } from "@/types/portfolio";

interface CapabilitiesSectionProps {
  locale: Locale;
  theme: ThemeMode;
  onSelectProject: (project: ProjectItem) => void;
}

export function CapabilitiesSection({
  locale,
  theme,
  onSelectProject,
}: CapabilitiesSectionProps) {
  const [activeCapId, setActiveCapId] = useState<string>(
    SYSTEM_CAPABILITIES[0].id
  );
  const isLight = theme === "light";

  const activeCapability = useMemo(
    () =>
      SYSTEM_CAPABILITIES.find((c) => c.id === activeCapId) ??
      SYSTEM_CAPABILITIES[0],
    [activeCapId]
  );

  const highlightedTech = useMemo(
    () => new Set(activeCapability.techTags),
    [activeCapability]
  );

  const relatedProjects = useMemo(
    () =>
      PROJECTS.filter((p) =>
        activeCapability.usedIn.some(
          (name) => p.title.toLowerCase() === name.toLowerCase()
        )
      ),
    [activeCapability]
  );

  return (
    <section
      id="capabilities"
      className={`relative px-2 transition-colors duration-300 sm:px-4 ${
        isLight ? "bg-[#FAF9F5]" : "bg-[#F4F2EC]"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-[28px] transition-colors duration-300 sm:rounded-[36px] ${
          isLight
            ? "border border-[#D8E2DB] bg-[#EDF2EE] text-[#18221D]"
            : "bg-[#141917] text-[#ECEAE2]"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 ${
            isLight ? "bg-dot-light opacity-75" : "bg-dot-dark opacity-60"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute right-0 bottom-0 h-[420px] w-[520px] rounded-full ${
            isLight
              ? "bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,transparent_70%)]"
              : "bg-[radial-gradient(circle,rgba(28,100,80,0.2)_0%,transparent_70%)]"
          }`}
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          {/* Section Header */}
          <div className="max-w-2xl">
            <div
              className={`font-mono text-xs font-medium tracking-[0.16em] uppercase ${
                isLight ? "text-[#176B54]" : "text-[#5EC4A0]"
              }`}
            >
              {UI_COPY.stack.eyebrow[locale]}
            </div>
            <h2
              className={`mt-3 text-3xl leading-[1.08] font-bold tracking-[-0.03em] sm:text-4xl lg:text-[48px] ${
                isLight ? "text-[#18221D]" : "text-white"
              }`}
            >
              {UI_COPY.stack.headingLead[locale]}{" "}
              <span
                className={`font-editorial font-normal ${
                  isLight ? "text-[#176B54]" : "text-[#86D8BA]"
                }`}
              >
                {UI_COPY.stack.headingItalic[locale]}
              </span>
            </h2>
            <p
              className={`mt-4 text-sm leading-relaxed sm:text-base ${
                isLight ? "text-[#4A5A52]" : "text-[#9CA7A1]"
              }`}
            >
              {UI_COPY.stack.subtitle[locale]}
            </p>
          </div>

          {/* Interactive System Capability Tracer */}
          <div
            className={`mt-10 rounded-2xl border p-5 sm:p-6 ${
              isLight
                ? "border-[#D4DFD8] bg-white shadow-[0_14px_34px_-24px_rgba(23,56,44,0.16)]"
                : "border-white/10 bg-[#1B221F]/90"
            }`}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div
                className={`flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider uppercase ${
                  isLight ? "text-[#176B54]" : "text-[#5EC4A0]"
                }`}
              >
                <Cpu className="h-3.5 w-3.5" />
                <span>{UI_COPY.stack.explorerTitle[locale]}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {SYSTEM_CAPABILITIES.map((cap) => {
                  const active = cap.id === activeCapId;
                  return (
                    <button
                      key={cap.id}
                      type="button"
                      onClick={() => setActiveCapId(cap.id)}
                      className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition ${
                        active
                          ? isLight
                            ? "bg-[#176B54] font-semibold text-white"
                            : "bg-[#5EC4A0] font-semibold text-[#101412]"
                          : isLight
                            ? "border border-[#D4DFD8] bg-[#FAF9F5] text-[#45554D] hover:border-[#176B54]/45 hover:text-[#18221D]"
                            : "border border-white/12 bg-white/[0.03] text-white/75 hover:border-[#5EC4A0]/40 hover:text-white"
                      }`}
                    >
                      {cap.label[locale]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className={`mt-5 grid items-center gap-4 border-t pt-5 lg:grid-cols-12 ${
                isLight ? "border-[#E3EAE5]" : "border-white/10"
              }`}
            >
              <p
                className={`text-sm leading-relaxed lg:col-span-8 ${
                  isLight ? "text-[#42524A]" : "text-[#C4CDC8]"
                }`}
              >
                {activeCapability.description[locale]}
              </p>
              <div className="flex flex-wrap items-center gap-2 lg:col-span-4 lg:justify-end">
                <span
                  className={`font-mono text-[10px] uppercase ${
                    isLight ? "text-[#6E7C74]" : "text-white/45"
                  }`}
                >
                  {UI_COPY.stack.usedInLabel[locale]}
                </span>
                {relatedProjects.map((proj) => (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => onSelectProject(proj)}
                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 font-mono text-[11px] font-semibold transition ${
                      isLight
                        ? "border-[#176B54]/30 bg-[#EDF3EF] text-[#176B54] hover:bg-[#176B54] hover:text-white"
                        : "border-[#5EC4A0]/35 bg-[#5EC4A0]/12 text-[#86D8BA] hover:bg-[#5EC4A0] hover:text-[#101412]"
                    }`}
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 5-Domain Bento Stack Matrix */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {SKILL_GROUPS.map((group, idx) => {
              const spanClass = idx < 3 ? "lg:col-span-2" : "lg:col-span-3";
              return (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={`flex flex-col justify-between rounded-2xl border p-6 transition ${spanClass} ${
                    isLight
                      ? "border-[#D8E2DB] bg-white hover:border-[#176B54]/40 hover:shadow-[0_14px_32px_-24px_rgba(23,56,44,0.2)]"
                      : "border-white/10 bg-white/[0.025] hover:border-white/20"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span
                          className={`font-mono text-[11px] font-semibold ${
                            isLight ? "text-[#176B54]" : "text-[#5EC4A0]"
                          }`}
                        >
                          {group.index}
                        </span>
                        <h3
                          className={`mt-1 text-lg font-bold tracking-tight ${
                            isLight ? "text-[#18221D]" : "text-white"
                          }`}
                        >
                          {group.title[locale]}
                        </h3>
                        <p
                          className={`text-xs ${
                            isLight ? "text-[#63726A]" : "text-white/50"
                          }`}
                        >
                          {group.subtitle[locale]}
                        </p>
                      </div>
                      <span
                        className={`font-mono text-2xl font-bold select-none ${
                          isLight ? "text-[#176B54]/12" : "text-white/8"
                        }`}
                      >
                        {group.index}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {group.items.map((tech) => {
                        const isHighlighted = highlightedTech.has(tech);
                        return (
                          <span
                            key={tech}
                            className={`rounded-lg border px-2.5 py-1 font-mono text-[11.5px] transition-all duration-300 ${
                              isHighlighted
                                ? isLight
                                  ? "border-[#176B54] bg-[#176B54]/12 font-semibold text-[#125542]"
                                  : "border-[#5EC4A0]/75 bg-[#5EC4A0]/18 text-[#B5EAD7] shadow-[0_0_20px_-6px_rgba(94,196,160,0.45)]"
                                : isLight
                                  ? "border-[#E1E8E3] bg-[#FAF9F5] text-[#45554D]"
                                  : "border-white/10 bg-white/[0.03] text-white/75"
                            }`}
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    className={`mt-6 border-t pt-3.5 font-mono text-[11px] ${
                      isLight
                        ? "border-[#E6ECE8] text-[#6A7870]"
                        : "border-white/8 text-white/45"
                    }`}
                  >
                    {group.accentNote[locale]}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
