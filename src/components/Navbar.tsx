"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Command, Contrast, Menu, Sun, X } from "lucide-react";
import { PROFILE, UI_COPY } from "@/data/portfolio";
import type { Locale, ThemeMode } from "@/types/portfolio";

interface NavbarProps {
  locale: Locale;
  theme: ThemeMode;
  onToggleLocale: (next: Locale) => void;
  onToggleTheme: (next: ThemeMode) => void;
  onOpenCommand: () => void;
}

const NAV_SECTIONS = [
  { id: "about", key: "about" as const },
  { id: "work", key: "work" as const },
  { id: "capabilities", key: "stack" as const },
  { id: "background", key: "background" as const },
  { id: "credentials", key: "credentials" as const },
  { id: "journal", key: "journal" as const },
];

export function Navbar({
  locale,
  theme,
  onToggleLocale,
  onToggleTheme,
  onOpenCommand,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
      if (window.scrollY < 160) {
        setActiveSection("");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = NAV_SECTIONS.map((s) =>
      document.getElementById(s.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.2] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const nextTheme: ThemeMode = isLight ? "editorial" : "light";
  const themeTooltip =
    locale === "id"
      ? isLight
        ? "Ganti ke Mode Editorial"
        : "Ganti ke Mode Cerah (Light)"
      : isLight
        ? "Switch to Editorial Mode"
        : "Switch to Bright Light Mode";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? isLight
              ? "max-w-5xl rounded-full border border-[#176B54]/14 bg-white/92 px-3.5 py-2 shadow-[0_14px_38px_-18px_rgba(23,56,44,0.18)] backdrop-blur-xl sm:px-4"
              : "max-w-5xl rounded-full border border-[#111513]/10 bg-[#F4F2EC]/90 px-3.5 py-2 shadow-[0_14px_40px_-18px_rgba(17,21,19,0.22)] backdrop-blur-xl sm:px-4"
            : "max-w-7xl rounded-2xl border border-transparent bg-transparent px-1 py-2"
        }`}
      >
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176B54]"
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-semibold text-[#FAF9F5] transition-colors ${
              isLight
                ? "bg-[#176B54] group-hover:bg-[#125542]"
                : "bg-[#141917] group-hover:bg-[#1C6450]"
            }`}
          >
            A.
          </span>
          <span className="text-sm font-bold tracking-[-0.02em] text-[#18221D]">
            {PROFILE.name}
          </span>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_SECTIONS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-all ${
                  isActive
                    ? isLight
                      ? "bg-[#176B54] text-white"
                      : "bg-[#141917] text-[#F4F2EC]"
                    : "text-[#4D5A53] hover:bg-[#176B54]/8 hover:text-[#18221D]"
                }`}
              >
                {UI_COPY.nav[item.key][locale]}
              </a>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Command Trigger */}
          <button
            type="button"
            onClick={onOpenCommand}
            title={UI_COPY.nav.searchHint[locale]}
            className="hidden items-center gap-1.5 rounded-full border border-[#18221D]/12 bg-white/85 px-2.5 py-1.5 font-mono text-[11px] font-medium text-[#4D5A53] transition hover:border-[#176B54]/45 hover:text-[#18221D] xl:inline-flex"
          >
            <Command className="h-3 w-3" />
            <span>K</span>
          </button>

          {/* 2-Mode Theme Switcher: Editorial vs Bright Light */}
          <button
            type="button"
            onClick={() => onToggleTheme(nextTheme)}
            title={themeTooltip}
            aria-label={themeTooltip}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 font-mono text-[11px] font-semibold transition ${
              isLight
                ? "border-[#176B54]/30 bg-[#EDF3EF] text-[#176B54] hover:bg-[#E1ECE5]"
                : "border-[#18221D]/12 bg-white/85 text-[#2C3631] hover:border-[#1C6450]/45 hover:text-[#1C6450]"
            }`}
          >
            {isLight ? (
              <Sun className="h-3.5 w-3.5 text-[#C69150]" />
            ) : (
              <Contrast className="h-3.5 w-3.5 text-[#1C6450]" />
            )}
            <span className="hidden sm:inline">
              {isLight
                ? locale === "id"
                  ? "Cerah"
                  : "Light"
                : "Editorial"}
            </span>
          </button>

          {/* Bilingual Toggle */}
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center rounded-full border border-[#18221D]/12 bg-white/85 p-0.5 text-[11px] font-semibold"
          >
            {(["id", "en"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onToggleLocale(lang)}
                className={`rounded-full px-2 py-1 font-mono uppercase transition-all sm:px-2.5 ${
                  locale === lang
                    ? "bg-[#176B54] text-white shadow-2xs"
                    : "text-[#505A54] hover:text-[#18221D]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold text-white transition sm:inline-flex ${
              isLight
                ? "bg-[#176B54] hover:bg-[#125542]"
                : "bg-[#141917] hover:bg-[#1C6450]"
            }`}
          >
            <span>{UI_COPY.nav.cta[locale]}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Drawer Trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#18221D]/12 bg-white/90 text-[#18221D] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Sheet */}
      {mobileOpen ? (
        <div
          className={`mx-auto mt-2 max-w-5xl rounded-2xl border p-4 shadow-2xl backdrop-blur-xl lg:hidden ${
            isLight
              ? "border-[#D4DFD8] bg-white/96"
              : "border-[#111513]/10 bg-[#F4F2EC]/96"
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? isLight
                      ? "bg-[#176B54] text-white"
                      : "bg-[#141917] text-[#F4F2EC]"
                    : "text-[#18221D] hover:bg-[#176B54]/8"
                }`}
              >
                <span>{UI_COPY.nav[item.key][locale]}</span>
                <ArrowUpRight className="h-4 w-4 opacity-50" />
              </a>
            ))}

            {/* Explicit Theme Switch Row on Mobile */}
            <button
              type="button"
              onClick={() => onToggleTheme(nextTheme)}
              className="mt-1 flex items-center justify-between rounded-xl border border-[#D4DFD8] bg-[#EDF3EF]/70 px-3.5 py-2.5 text-xs font-semibold text-[#18221D]"
            >
              <span className="flex items-center gap-2">
                {isLight ? (
                  <Sun className="h-4 w-4 text-[#C69150]" />
                ) : (
                  <Contrast className="h-4 w-4 text-[#176B54]" />
                )}
                <span>
                  {locale === "id"
                    ? isLight
                      ? "Mode Aktif: Cerah (Light)"
                      : "Mode Aktif: Editorial"
                    : isLight
                      ? "Active Mode: Bright Light"
                      : "Active Mode: Editorial"}
                </span>
              </span>
              <span className="font-mono text-[10px] uppercase text-[#176B54]">
                {locale === "id" ? "Ganti" : "Switch"}
              </span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#176B54] px-4 py-3 text-sm font-semibold text-white"
            >
              <span>{UI_COPY.nav.cta[locale]}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
