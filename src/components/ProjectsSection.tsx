"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { PROJECTS, UI_COPY } from "@/data/portfolio";
import type {
  Locale,
  ProjectCategory,
  ProjectItem,
  ResolvedAssetMap,
  ThemeMode,
} from "@/types/portfolio";
import { ProjectDeviceStage } from "./DeviceMockups";

interface ProjectsSectionProps {
  locale: Locale;
  theme: ThemeMode;
  projectAssets: ResolvedAssetMap["projects"];
  onSelectProject: (project: ProjectItem) => void;
}

const FILTER_OPTIONS: ProjectCategory[] = [
  "all",
  "android",
  "fullstack",
  "crossplatform",
];

export function ProjectsSection({
  locale,
  theme,
  projectAssets,
  onSelectProject,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const isLight = theme === "light";

  const counts = useMemo(() => {
    return {
      all: PROJECTS.length,
      android: PROJECTS.filter((p) => p.category === "android").length,
      fullstack: PROJECTS.filter((p) => p.category === "fullstack").length,
      crossplatform: PROJECTS.filter((p) => p.category === "crossplatform").length,
    };
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const flagship = filtered.filter((p) => p.featured);
  const additional = filtered.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className={`relative py-24 transition-colors duration-300 sm:py-32 ${
        isLight ? "bg-[#FAF9F5]" : "bg-[#F4F2EC]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header + Filter Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-medium tracking-[0.16em] uppercase text-[#145A47]">
              {UI_COPY.work.eyebrow[locale]}
            </div>
            <h2 className="mt-3 text-3xl leading-[1.08] font-bold tracking-[-0.03em] text-[#111513] sm:text-4xl lg:text-[48px]">
              {UI_COPY.work.headingLead[locale]}{" "}
              <span className="font-editorial font-normal text-[#145A47]">
                {UI_COPY.work.headingItalic[locale]}
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4C5550] sm:text-base">
              {UI_COPY.work.subtitle[locale]}
            </p>
          </div>

          {/* Crisp Segmented Filter Bar */}
          <div className="flex shrink-0 flex-wrap gap-1 rounded-2xl border border-[#DDDAD0] bg-white p-1.5 shadow-2xs sm:flex-nowrap">
            {FILTER_OPTIONS.map((opt) => {
              const active = filter === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFilter(opt)}
                  className={`relative whitespace-nowrap rounded-xl px-3 py-2 text-xs font-semibold transition ${
                    active
                      ? isLight
                        ? "bg-[#176B54] text-white"
                        : "bg-[#141917] text-[#F4F2EC]"
                      : "text-[#4C5550] hover:bg-[#EDF2EE] hover:text-[#18221D]"
                  }`}
                >
                  <span>{UI_COPY.work.filters[opt][locale]}</span>
                  <span
                    className={`ml-1.5 font-mono text-[10px] ${
                      active ? "text-emerald-300" : "text-[#7D8781]"
                    }`}
                  >
                    {counts[opt]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Case Studies (Alternating 2-Column Editorial Rows) */}
        {flagship.length > 0 ? (
          <div className="mt-14 space-y-12">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#5A645E]">
                {UI_COPY.work.featuredLabel[locale]}
              </span>
              <div className="h-px flex-1 bg-[#DDDAD0]" />
            </div>

            {flagship.map((project, idx) => {
              const reversed = idx % 2 === 1;
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5 }}
                  className="group grid items-center gap-8 rounded-[28px] border border-[#DDDAD0] bg-white p-5 shadow-[0_18px_45px_-34px_rgba(17,21,19,0.28)] transition hover:border-[#145A47]/40 sm:p-8 lg:grid-cols-12 lg:gap-10"
                >
                  {/* Visual Preview */}
                  <div
                    className={`cursor-pointer lg:col-span-6 ${
                      reversed ? "lg:order-2" : "lg:order-1"
                    }`}
                    onClick={() => onSelectProject(project)}
                  >
                    <div className="transition-transform duration-500 group-hover:scale-[1.012]">
                      <ProjectDeviceStage
                        project={project}
                        assets={projectAssets[project.id]}
                      />
                    </div>
                  </div>

                  {/* Narrative Content */}
                  <div
                    className={`lg:col-span-6 ${
                      reversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                      <span
                        className={`rounded-md px-2 py-0.5 font-semibold text-white ${
                          isLight ? "bg-[#176B54]" : "bg-[#111513]"
                        }`}
                      >
                        {project.index}
                      </span>
                      <span className="text-[#5C6660]">{project.year}</span>
                      <span className="text-[#C7C3B7]">/</span>
                      <span className="font-semibold text-[#145A47]">
                        {project.status[locale]}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-[#111513] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#145A47]">
                      {project.subtitle[locale]}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-[#4C5550] sm:text-[15px]">
                      {project.summary[locale]}
                    </p>

                    {/* Stack Chips */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 7).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#E2DFD6] bg-[#F6F5F1] px-2.5 py-1 font-mono text-[11px] font-medium text-[#2E3632]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 7 ? (
                        <span className="rounded-full border border-[#E2DFD6] bg-[#F6F5F1] px-2.5 py-1 font-mono text-[11px] text-[#707A74]">
                          +{project.stack.length - 7}
                        </span>
                      ) : null}
                    </div>

                    {/* Action Row */}
                    <div className="mt-7 flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition ${
                          isLight
                            ? "bg-[#176B54] hover:bg-[#125542]"
                            : "bg-[#111513] hover:bg-[#145A47]"
                        }`}
                      >
                        <Layers className="h-3.5 w-3.5" />
                        <span>{UI_COPY.work.inspectCaseStudy[locale]}</span>
                      </button>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#145A47]/25 bg-[#145A47]/6 px-4 py-2.5 text-xs font-semibold text-[#145A47] transition hover:bg-[#145A47] hover:text-white"
                        >
                          <span>{UI_COPY.work.liveDemo[locale]}</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : null}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#111513]/14 bg-white px-4 py-2.5 text-xs font-semibold text-[#111513] transition hover:border-[#111513]"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : null}

        {/* Additional Engineering Projects (2-Column Grid) */}
        {additional.length > 0 ? (
          <div className="mt-16">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#5A645E]">
                {UI_COPY.work.archiveLabel[locale]}
              </span>
              <div className="h-px flex-1 bg-[#DDDAD0]" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {additional.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.45 }}
                  className="group flex flex-col justify-between rounded-[24px] border border-[#DDDAD0] bg-white p-5 transition hover:border-[#145A47]/45 hover:shadow-[0_18px_40px_-28px_rgba(17,21,19,0.28)] sm:p-6"
                >
                  <div>
                    <div
                      className="cursor-pointer"
                      onClick={() => onSelectProject(project)}
                    >
                      <ProjectDeviceStage
                        project={project}
                        assets={projectAssets[project.id]}
                        compact
                      />
                    </div>

                    <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
                      <span className="font-semibold text-[#145A47]">
                        {project.index} · {project.status[locale]}
                      </span>
                      <span className="text-[#707A74]">{project.year}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-bold tracking-tight text-[#111513]">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-[#525B56]">
                      {project.subtitle[locale]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#4C5550]">
                      {project.summary[locale]}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#E2DFD6] bg-[#F6F5F1] px-2.5 py-0.5 font-mono text-[10.5px] text-[#2E3632]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#ECEAE2] pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition ${
                        isLight
                          ? "bg-[#176B54] hover:bg-[#125542]"
                          : "bg-[#111513] hover:bg-[#145A47]"
                      }`}
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>{UI_COPY.work.inspectCaseStudy[locale]}</span>
                    </button>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-[#145A47]/25 bg-[#145A47]/6 px-3.5 py-2 text-xs font-semibold text-[#145A47] transition hover:bg-[#145A47] hover:text-white"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#111513]/14 px-3.5 py-2 text-xs font-semibold text-[#111513] transition hover:border-[#111513]"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
