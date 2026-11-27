"use client";

import React, { useEffect, useState } from "react";
import type {
  Locale,
  ProjectItem,
  ResolvedAssetMap,
  ThemeMode,
} from "@/types/portfolio";
import { Navbar } from "./Navbar";
import { CommandPalette } from "./CommandPalette";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { ProjectModal } from "./ProjectModal";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { BackgroundSection } from "./BackgroundSection";
import { CredentialsSection } from "./CredentialsSection";
import { VisualJournalSection } from "./VisualJournalSection";
import { ContactSection } from "./ContactSection";

interface PortfolioClientProps {
  assets: ResolvedAssetMap;
}

export function PortfolioClient({ assets }: PortfolioClientProps) {
  const [locale, setLocale] = useState<Locale>("id");
  const [theme, setTheme] = useState<ThemeMode>("editorial");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    try {
      const savedLocale = window.localStorage.getItem("aldiyanto_locale");
      if (savedLocale === "id" || savedLocale === "en") {
        setLocale(savedLocale);
      }
      const savedTheme = window.localStorage.getItem("aldiyanto_theme");
      if (savedTheme === "editorial" || savedTheme === "light") {
        setTheme(savedTheme);
      }
    } catch {
      // ignore storage restrictions
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem("aldiyanto_locale", locale);
    } catch {
      // ignore storage restrictions
    }
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("aldiyanto_theme", theme);
    } catch {
      // ignore storage restrictions
    }
  }, [theme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isLight = theme === "light";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight
          ? "bg-[#FAF9F5] text-[#18221D]"
          : "bg-[#F4F2EC] text-[#1C221F]"
      }`}
    >
      <Navbar
        locale={locale}
        theme={theme}
        onToggleLocale={setLocale}
        onToggleTheme={setTheme}
        onOpenCommand={() => setCommandOpen(true)}
      />

      <main>
        <HeroSection
          locale={locale}
          theme={theme}
          portraitHero={assets.portraitHero}
        />
        <AboutSection
          locale={locale}
          theme={theme}
          portraitFull={assets.portraitFull}
        />
        <ProjectsSection
          locale={locale}
          theme={theme}
          projectAssets={assets.projects}
          onSelectProject={setSelectedProject}
        />
        <CapabilitiesSection
          locale={locale}
          theme={theme}
          onSelectProject={setSelectedProject}
        />
        <BackgroundSection locale={locale} theme={theme} />
        <CredentialsSection
          locale={locale}
          theme={theme}
          certificateAssets={assets.certificates}
        />
        <VisualJournalSection
          locale={locale}
          theme={theme}
          localAudioUrl={assets.localAudioUrl}
        />
      </main>

      <ContactSection locale={locale} theme={theme} />

      <ProjectModal
        project={selectedProject}
        assets={selectedProject ? assets.projects[selectedProject.id] : undefined}
        locale={locale}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />

      <CommandPalette
        open={commandOpen}
        locale={locale}
        theme={theme}
        onClose={() => setCommandOpen(false)}
        onToggleLocale={setLocale}
        onToggleTheme={setTheme}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}
