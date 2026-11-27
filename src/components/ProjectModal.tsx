"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Layers,
  X,
} from "lucide-react";
import { UI_COPY } from "@/data/portfolio";
import type {
  Locale,
  ProjectItem,
  ResolvedProjectAssets,
  ThemeMode,
} from "@/types/portfolio";
import { ProjectDeviceStage } from "./DeviceMockups";

interface ProjectModalProps {
  project: ProjectItem | null;
  assets?: ResolvedProjectAssets;
  locale: Locale;
  theme: ThemeMode;
  onClose: () => void;
}

export function ProjectModal({
  project,
  assets,
  locale,
  theme,
  onClose,
}: ProjectModalProps) {
  const [activeShotIdx, setActiveShotIdx] = useState(0);
  const isLight = theme === "light";

  useEffect(() => {
    setActiveShotIdx(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const allRealScreenshots = [
    ...(assets?.desktopImages ?? []).map((src, i) => ({
      src,
      label:
        (assets?.desktopImages?.length ?? 0) === 1
          ? locale === "id"
            ? "Tampilan Web"
            : "Web App"
          : `Web ${i + 1}`,
    })),
    ...(assets?.mobileImages ?? []).map((src, i) => ({
      src,
      label:
        (assets?.mobileImages?.length ?? 0) === 1
          ? locale === "id"
            ? "Aplikasi Android"
            : "Android App"
          : `Screen ${i + 1}`,
    })),
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      className="fixed inset-0 z-[75] flex items-center justify-center bg-[#0B0E0D]/75 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[26px] border border-[#DDDAD0] bg-[#F6F5F1] text-[#111513] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between gap-4 border-b border-[#DDDAD0] bg-[#F6F5F1]/95 px-5 py-4 backdrop-blur sm:px-7">
          <div className="min-w-0">
            <div className="flex items-center gap-2 font-mono text-[11px] font-medium text-[#145A47]">
              <span>{project.index}</span>
              <span>·</span>
              <span>{project.year}</span>
              <span>·</span>
              <span>{project.status[locale]}</span>
            </div>
            <h3 className="mt-0.5 truncate text-xl font-bold tracking-tight text-[#111513] sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden font-mono text-[10px] text-[#707A74] sm:inline">
              {UI_COPY.work.modal.closeHint[locale]}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#111513]/12 bg-white text-[#111513] transition hover:bg-[#111513] hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-5 py-6 sm:px-7">
          {/* Device Preview or Real Screenshot Switcher */}
          {allRealScreenshots.length > 1 ? (
            <div className="space-y-3">
              <div
                className={`flex items-center justify-center overflow-hidden rounded-2xl border p-4 sm:p-5 ${
                  isLight
                    ? "border-[#D4DFD8] bg-[#EDF2EE]"
                    : "border-[#DDDAD0] bg-[#141917]"
                }`}
              >
                <img
                  src={allRealScreenshots[activeShotIdx].src}
                  alt={`${project.title} ${allRealScreenshots[activeShotIdx].label}`}
                  className="max-h-[420px] w-auto rounded-xl object-contain shadow-2xl"
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {allRealScreenshots.map((shot, idx) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setActiveShotIdx(idx)}
                    className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium transition ${
                      idx === activeShotIdx
                        ? isLight
                          ? "bg-[#176B54] text-white"
                          : "bg-[#141917] text-white"
                        : "border border-[#DDDAD0] bg-white text-[#4C5550] hover:border-[#176B54]"
                    }`}
                  >
                    {shot.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <ProjectDeviceStage project={project} assets={assets} />
          )}

          {/* Meta Info Strip */}
          <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-[#DDDAD0] bg-white p-4 sm:grid-cols-3">
            <div>
              <div className="font-mono text-[10px] uppercase text-[#707A74]">
                Role
              </div>
              <div className="mt-0.5 text-sm font-semibold text-[#111513]">
                {project.role[locale]}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase text-[#707A74]">
                Platform
              </div>
              <div className="mt-0.5 text-sm font-semibold text-[#111513]">
                {project.platform[locale]}
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="font-mono text-[10px] uppercase text-[#707A74]">
                Links
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#145A47] hover:underline"
                  >
                    <span>Live</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : null}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#111513] hover:underline"
                >
                  <Github className="h-3 w-3" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Context & Engineering Solution */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#DDDAD0] bg-white p-5">
              <h4 className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#145A47]">
                {UI_COPY.work.modal.problem[locale]}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-[#4C5550]">
                {project.problem[locale]}
              </p>
            </div>
            <div className="rounded-2xl border border-[#DDDAD0] bg-white p-5">
              <h4 className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#145A47]">
                {UI_COPY.work.modal.solution[locale]}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-[#4C5550]">
                {project.solution[locale]}
              </p>
            </div>
          </div>

          {/* System Architecture Layers */}
          <div
            className={`mt-6 rounded-2xl p-5 ${
              isLight
                ? "border border-[#D4DFD8] bg-[#EDF2EE] text-[#18221D]"
                : "bg-[#141917] text-[#ECEAE2]"
            }`}
          >
            <div
              className={`flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider uppercase ${
                isLight ? "text-[#176B54]" : "text-[#5EC4A0]"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>{UI_COPY.work.modal.architecture[locale]}</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {project.architecture.map((node, i) => (
                <div
                  key={node.layer}
                  className={`rounded-xl border p-4 ${
                    isLight
                      ? "border-[#D4DFD8] bg-white"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  <div
                    className={`font-mono text-[10px] ${
                      isLight ? "text-[#63726A]" : "text-white/45"
                    }`}
                  >
                    LAYER 0{i + 1} · {node.layer.toUpperCase()}
                  </div>
                  <div
                    className={`mt-1 font-mono text-xs font-semibold ${
                      isLight ? "text-[#176B54]" : "text-[#86D8BA]"
                    }`}
                  >
                    {node.tech}
                  </div>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      isLight ? "text-[#4D5D55]" : "text-white/70"
                    }`}
                  >
                    {node.detail[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Implementations */}
          <div className="mt-6">
            <h4 className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#145A47]">
              {UI_COPY.work.modal.highlights[locale]}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights[locale].map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[#2C3430]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#145A47]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Tech Stack */}
          <div className="mt-6 border-t border-[#DDDAD0] pt-5">
            <div className="font-mono text-[11px] font-semibold tracking-wider uppercase text-[#707A74]">
              {UI_COPY.work.modal.stack[locale]}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#DDDAD0] bg-white px-3 py-1 font-mono text-xs font-medium text-[#111513]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA Bar */}
        <div className="flex flex-wrap items-center justify-end gap-2.5 border-t border-[#DDDAD0] bg-white px-5 py-3.5 sm:px-7">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#111513]/15 bg-[#F6F5F1] px-4 py-2 text-xs font-semibold text-[#111513] transition hover:border-[#111513]"
          >
            <Github className="h-3.5 w-3.5" />
            <span>{UI_COPY.work.sourceCode[locale]}</span>
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#145A47] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#111513]"
            >
              <span>{UI_COPY.work.liveDemo[locale]}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
