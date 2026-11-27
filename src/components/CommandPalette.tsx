"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  Contrast,
  Copy,
  FileDown,
  Github,
  Globe,
  Linkedin,
  Search,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { PROFILE, PROJECTS } from "@/data/portfolio";
import type { Locale, ProjectItem, ThemeMode } from "@/types/portfolio";

interface CommandPaletteProps {
  open: boolean;
  locale: Locale;
  theme: ThemeMode;
  onClose: () => void;
  onToggleLocale: (next: Locale) => void;
  onToggleTheme: (next: ThemeMode) => void;
  onSelectProject: (project: ProjectItem) => void;
}

interface CommandAction {
  id: string;
  group: string;
  label: string;
  sublabel?: string;
  icon: React.ReactNode;
  run: () => void;
}

export function CommandPalette({
  open,
  locale,
  theme,
  onClose,
  onToggleLocale,
  onToggleTheme,
  onSelectProject,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const onGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", onGlobalKey);
    return () => window.removeEventListener("keydown", onGlobalKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const actions = useMemo<CommandAction[]>(() => {
    const jumpTo = (id: string) => {
      onClose();
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    };

    const navGroup = locale === "id" ? "Navigasi" : "Navigation";
    const projGroup = locale === "id" ? "Bedah Proyek" : "Inspect Projects";
    const quickGroup = locale === "id" ? "Aksi Cepat" : "Quick Actions";

    const list: CommandAction[] = [
      {
        id: "nav-about",
        group: navGroup,
        label: locale === "id" ? "Tentang & Pendekatan" : "About & Philosophy",
        icon: <ArrowRight className="h-4 w-4" />,
        run: () => jumpTo("about"),
      },
      {
        id: "nav-work",
        group: navGroup,
        label: locale === "id" ? "Proyek & Studi Kasus" : "Selected Work",
        icon: <ArrowRight className="h-4 w-4" />,
        run: () => jumpTo("work"),
      },
      {
        id: "nav-stack",
        group: navGroup,
        label: locale === "id" ? "Kapabilitas & Stack" : "Technical Capabilities",
        icon: <ArrowRight className="h-4 w-4" />,
        run: () => jumpTo("capabilities"),
      },
      {
        id: "nav-bg",
        group: navGroup,
        label: locale === "id" ? "Pendidikan & Pengalaman" : "Education & Experience",
        icon: <ArrowRight className="h-4 w-4" />,
        run: () => jumpTo("background"),
      },
      {
        id: "nav-journal",
        group: navGroup,
        label:
          locale === "id"
            ? "Jurnal Visual & Soundtrack (Wyw my sweetie)"
            : "Visual Journal & Soundtrack (Wyw my sweetie)",
        icon: <ArrowRight className="h-4 w-4" />,
        run: () => jumpTo("journal"),
      },
      {
        id: "nav-contact",
        group: navGroup,
        label: locale === "id" ? "Hubungi Aldi" : "Contact Aldi",
        icon: <ArrowRight className="h-4 w-4" />,
        run: () => jumpTo("contact"),
      },
      {
        id: "act-theme",
        group: quickGroup,
        label: isLight
          ? locale === "id"
            ? "Ganti ke Mode Editorial (Kontras)"
            : "Switch to Editorial Contrast Mode"
          : locale === "id"
            ? "Ganti ke Mode Cerah (Full Light)"
            : "Switch to Bright Daylight Mode",
        icon: isLight ? (
          <Contrast className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        ),
        run: () => {
          onToggleTheme(isLight ? "editorial" : "light");
          onClose();
        },
      },
      {
        id: "act-lang",
        group: quickGroup,
        label:
          locale === "id"
            ? "Switch to English (EN)"
            : "Ubah ke Bahasa Indonesia (ID)",
        icon: <Globe className="h-4 w-4" />,
        run: () => {
          onToggleLocale(locale === "id" ? "en" : "id");
          onClose();
        },
      },
      {
        id: "act-email",
        group: quickGroup,
        label:
          locale === "id"
            ? `Salin Email (${PROFILE.email})`
            : `Copy Email (${PROFILE.email})`,
        icon: copied ? (
          <Check className="h-4 w-4 text-emerald-500" />
        ) : (
          <Copy className="h-4 w-4" />
        ),
        run: () => {
          navigator.clipboard?.writeText(PROFILE.email);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
            onClose();
          }, 600);
        },
      },
      ...PROFILE.cvFiles.slice(0, 2).map((cv) => ({
        id: `cv-${cv.id}`,
        group: quickGroup,
        label: cv.label[locale],
        sublabel: cv.sublabel[locale],
        icon: <FileDown className="h-4 w-4" />,
        run: () => {
          window.open(cv.href, "_blank", "noopener,noreferrer");
          onClose();
        },
      })),
      {
        id: "act-gh",
        group: quickGroup,
        label: "GitHub — github.com/aldxynnn",
        icon: <Github className="h-4 w-4" />,
        run: () => {
          window.open(PROFILE.githubUrl, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "act-li",
        group: quickGroup,
        label: "LinkedIn — linkedin.com/in/aldxynnn",
        icon: <Linkedin className="h-4 w-4" />,
        run: () => {
          window.open(PROFILE.linkedinUrl, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      ...PROJECTS.map((project) => ({
        id: `proj-${project.id}`,
        group: projGroup,
        label: `${project.index} · ${project.title}`,
        sublabel: project.subtitle[locale],
        icon: <Terminal className="h-4 w-4" />,
        run: () => {
          onClose();
          onSelectProject(project);
        },
      })),
    ];
    return list;
  }, [
    locale,
    isLight,
    copied,
    onClose,
    onToggleLocale,
    onToggleTheme,
    onSelectProject,
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        (a.sublabel?.toLowerCase().includes(q) ?? false) ||
        a.group.toLowerCase().includes(q)
    );
  }, [actions, query]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick command palette"
      className={`fixed inset-0 z-[80] flex items-start justify-center px-4 pt-20 backdrop-blur-sm sm:pt-28 ${
        isLight ? "bg-[#18221D]/28" : "bg-[#0B0E0D]/65"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-full max-w-xl overflow-hidden rounded-2xl border shadow-2xl ${
          isLight
            ? "border-[#D4DFD8] bg-white text-[#18221D]"
            : "border-white/12 bg-[#141917] text-[#ECEAE2]"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex items-center gap-3 border-b px-4 py-3.5 ${
            isLight ? "border-[#E3EAE5]" : "border-white/10"
          }`}
        >
          <Search
            className={`h-4 w-4 ${isLight ? "text-[#707B75]" : "text-white/45"}`}
          />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === "id"
                ? "Cari proyek, bagian, mode tampilan, atau CV..."
                : "Search projects, sections, display mode, or CV..."
            }
            className={`w-full bg-transparent text-sm focus:outline-none ${
              isLight
                ? "text-[#18221D] placeholder:text-[#7E8A83]"
                : "text-white placeholder:text-white/40"
            }`}
          />
          <button
            type="button"
            onClick={onClose}
            className={`rounded-lg p-1 ${
              isLight
                ? "text-[#707B75] hover:bg-[#EDF2EE] hover:text-[#18221D]"
                : "text-white/50 hover:bg-white/10 hover:text-white"
            }`}
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[380px] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div
              className={`px-4 py-8 text-center text-sm ${
                isLight ? "text-[#707B75]" : "text-white/45"
              }`}
            >
              {locale === "id"
                ? "Tidak ada hasil yang cocok."
                : "No matching commands found."}
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={item.run}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                  isLight ? "hover:bg-[#EDF2EE]" : "hover:bg-white/8"
                }`}
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span
                    className={isLight ? "text-[#176B54]" : "text-[#5EC4A0]"}
                  >
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <div
                      className={`truncate text-sm font-medium ${
                        isLight ? "text-[#18221D]" : "text-white"
                      }`}
                    >
                      {item.label}
                    </div>
                    {item.sublabel ? (
                      <div
                        className={`truncate text-xs ${
                          isLight ? "text-[#637069]" : "text-white/50"
                        }`}
                      >
                        {item.sublabel}
                      </div>
                    ) : null}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded px-2 py-0.5 font-mono text-[10px] ${
                    isLight
                      ? "bg-[#EDF2EE] text-[#4E5E55]"
                      : "bg-white/8 text-white/55"
                  }`}
                >
                  {item.group}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
