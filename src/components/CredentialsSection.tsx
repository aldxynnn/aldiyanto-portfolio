"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { CERTIFICATES, UI_COPY } from "@/data/portfolio";
import type {
  CertificateItem,
  Locale,
  ResolvedAssetMap,
  ThemeMode,
} from "@/types/portfolio";

interface CredentialsSectionProps {
  locale: Locale;
  theme: ThemeMode;
  certificateAssets: ResolvedAssetMap["certificates"];
}

function CredentialPlaque({
  cert,
  imageSrc,
  locale,
  isLight,
  inModal = false,
}: {
  cert: CertificateItem;
  imageSrc: string | null;
  locale: Locale;
  isLight: boolean;
  inModal?: boolean;
}) {
  if (imageSrc) {
    if (inModal) {
      return (
        <div
          className={`relative flex w-full items-center justify-center overflow-hidden rounded-xl border p-3 ${
            isLight
              ? "border-[#D4DFD8] bg-white"
              : "border-white/12 bg-[#1B221F]"
          }`}
        >
          <img
            src={imageSrc}
            alt={`${cert.title} — ${cert.issuer}`}
            className="max-h-[62vh] w-auto max-w-full rounded-lg object-contain shadow-md"
          />
        </div>
      );
    }

    return (
      <div
        className={`relative flex aspect-[1.45/1] w-full items-center justify-center overflow-hidden rounded-xl border p-2 ${
          isLight
            ? "border-[#D4DFD8] bg-[#EFF4F1]"
            : "border-[#DDD9CD] bg-[#ECE9E0]"
        }`}
      >
        <img
          src={imageSrc}
          alt={`${cert.title} — ${cert.issuer}`}
          className="h-full w-full rounded-md object-contain drop-shadow-[0_6px_14px_rgba(20,25,23,0.12)] transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-xl border p-4 ${
        isLight
          ? "border-[#D4DFD8] bg-gradient-to-br from-[#FAFBF9] via-[#EFF5F1] to-[#E3EDE6] text-[#18221D]"
          : "border-[#1C6450]/25 bg-gradient-to-br from-[#141917] via-[#19221F] to-[#1E2E28] text-white"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          isLight
            ? "bg-arch-grid-sage opacity-75"
            : "bg-arch-grid-dark opacity-60"
        }`}
      />
      <div className="relative flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[9.5px] font-semibold ${
            isLight
              ? "border-[#176B54]/25 bg-white/90 text-[#176B54]"
              : "border-[#5EC4A0]/30 bg-[#5EC4A0]/12 text-[#86D8BA]"
          }`}
        >
          <Award className="h-3 w-3" />
          {cert.issuer}
        </span>
        <span
          className={`font-mono text-[9px] tracking-wider uppercase ${
            isLight ? "text-[#65756D]" : "text-white/45"
          }`}
        >
          {cert.track}
        </span>
      </div>

      <div className="relative">
        <div
          className={`font-mono text-[9px] uppercase ${
            isLight ? "text-[#65756D]" : "text-white/45"
          }`}
        >
          {cert.category[locale]}
        </div>
        <div
          className={`mt-1 text-sm font-bold leading-snug ${
            isLight ? "text-[#18221D]" : "text-white"
          }`}
        >
          {cert.title}
        </div>
      </div>

      <div
        className={`relative flex items-center justify-between border-t pt-2 font-mono text-[9px] ${
          isLight
            ? "border-[#CFDCD4] text-[#55655D]"
            : "border-white/10 text-white/60"
        }`}
      >
        <span>ALDIYANTO</span>
        <span
          className={`flex items-center gap-1 ${
            isLight ? "font-semibold text-[#176B54]" : "text-[#86D8BA]"
          }`}
        >
          <CheckCircle2 className="h-2.5 w-2.5" />
          {UI_COPY.credentials.verifiedBadge[locale]}
        </span>
      </div>
    </div>
  );
}

export function CredentialsSection({
  locale,
  theme,
  certificateAssets,
}: CredentialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isLight = theme === "light";

  useEffect(() => {
    if (activeIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((idx) =>
          idx === null ? null : (idx + 1) % CERTIFICATES.length
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((idx) =>
          idx === null
            ? null
            : (idx - 1 + CERTIFICATES.length) % CERTIFICATES.length
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex]);

  const activeCert = activeIndex !== null ? CERTIFICATES[activeIndex] : null;

  return (
    <section
      id="credentials"
      className={`relative border-t py-24 transition-colors duration-300 sm:py-28 ${
        isLight
          ? "border-[#DCE5DF] bg-[#EFF3F0]/80"
          : "border-[#DDD9CD] bg-[#EAE7DD]/70"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="font-mono text-xs font-medium tracking-[0.16em] uppercase text-[#176B54]">
            {UI_COPY.credentials.eyebrow[locale]}
          </div>
          <h2 className="mt-3 text-3xl leading-[1.08] font-bold tracking-[-0.03em] text-[#18221D] sm:text-4xl lg:text-[46px]">
            {UI_COPY.credentials.headingLead[locale]}{" "}
            <span className="font-editorial font-normal text-[#176B54]">
              {UI_COPY.credentials.headingItalic[locale]}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#4E5C55] sm:text-base">
            {UI_COPY.credentials.subtitle[locale]}
          </p>
        </div>

        {/* 5 Verified Credentials Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, idx) => {
            const img = certificateAssets[cert.id] ?? null;
            return (
              <motion.button
                key={cert.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group flex flex-col justify-between rounded-[22px] border bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-[#176B54]/45 hover:shadow-[0_18px_40px_-28px_rgba(23,56,44,0.22)] ${
                  isLight ? "border-[#D8E2DB]" : "border-[#DDDAD0]"
                }`}
              >
                <div>
                  <CredentialPlaque
                    cert={cert}
                    imageSrc={img}
                    locale={locale}
                    isLight={isLight}
                  />

                  <div className="mt-4 flex items-center justify-between font-mono text-[10.5px]">
                    <span className="font-semibold text-[#176B54]">
                      {cert.issuer}
                    </span>
                    <span className="text-[#6F7B75]">
                      {cert.category[locale]}
                    </span>
                  </div>

                  <h3 className="mt-1.5 text-base font-bold tracking-tight text-[#18221D]">
                    {cert.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#526059]">
                    {cert.description[locale]}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#ECEAE2] pt-3">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 2).map((sk) => (
                      <span
                        key={sk}
                        className="rounded-md bg-[#F4F6F4] px-2 py-0.5 font-mono text-[10px] text-[#3F4D46]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-[#176B54]">
                    <span>{UI_COPY.credentials.viewDetail[locale]}</span>
                    <Maximize2 className="h-3 w-3" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Accessible Keyboard-Navigable Lightbox Modal */}
      {activeCert && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.title}
          className={`fixed inset-0 z-[75] flex items-center justify-center p-4 backdrop-blur-md ${
            isLight ? "bg-[#18221D]/30" : "bg-[#0B0E0D]/80"
          }`}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="grid w-full max-w-4xl overflow-hidden rounded-[24px] border border-[#D8E2DB] bg-[#FAF9F5] shadow-2xl md:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Preview Pane */}
            <div
              className={`flex flex-col justify-between p-5 sm:p-6 md:col-span-7 ${
                isLight ? "bg-[#EDF2EE]" : "bg-[#141917]"
              }`}
            >
              <div className="my-auto">
                <CredentialPlaque
                  cert={activeCert}
                  imageSrc={certificateAssets[activeCert.id] ?? null}
                  locale={locale}
                  isLight={isLight}
                  inModal
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span
                  className={`font-mono text-xs ${
                    isLight ? "text-[#54645C]" : "text-white/60"
                  }`}
                >
                  {activeIndex + 1} / {CERTIFICATES.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous certificate"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + CERTIFICATES.length) %
                          CERTIFICATES.length
                      )
                    }
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition ${
                      isLight
                        ? "border-[#C9D7CE] bg-white text-[#18221D] hover:bg-[#176B54] hover:text-white"
                        : "border-white/15 bg-white/8 text-white hover:bg-white/20"
                    }`}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next certificate"
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % CERTIFICATES.length)
                    }
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition ${
                      isLight
                        ? "border-[#C9D7CE] bg-white text-[#18221D] hover:bg-[#176B54] hover:text-white"
                        : "border-white/15 bg-white/8 text-white hover:bg-white/20"
                    }`}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Metadata Pane */}
            <div className="flex flex-col justify-between bg-white p-6 md:col-span-5">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-full bg-[#176B54]/10 px-2.5 py-1 font-mono text-[10.5px] font-semibold text-[#176B54]">
                    {activeCert.issuer}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(null)}
                    aria-label="Close certificate preview"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#18221D]/12 text-[#18221D] transition hover:bg-[#176B54] hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#18221D]">
                  {activeCert.title}
                </h3>
                <div className="mt-1 font-mono text-xs text-[#6F7B75]">
                  {activeCert.category[locale]} · {activeCert.track}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#4E5C55]">
                  {activeCert.description[locale]}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {activeCert.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#D8E2DB] bg-[#FAF9F5] px-2.5 py-1 font-mono text-[11px] text-[#2B3630]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-[#ECEAE2] pt-4 font-mono text-[11px] text-[#176B54]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{UI_COPY.credentials.verifiedBadge[locale]}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
