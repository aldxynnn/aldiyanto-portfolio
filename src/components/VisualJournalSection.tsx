"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Disc3,
  Grid3X3,
  Layers,
  Maximize2,
  Music2,
  Shuffle,
} from "lucide-react";
import { GALLERY_PHOTOS, SOUNDTRACK, UI_COPY } from "@/data/portfolio";
import type { GalleryCategory, Locale, ThemeMode } from "@/types/portfolio";
import { PhotoLightbox } from "./PhotoLightbox";

interface VisualJournalSectionProps {
  locale: Locale;
  theme: ThemeMode;
  localAudioUrl: string | null;
}

const FILTER_OPTIONS: GalleryCategory[] = [
  "all",
  "architecture",
  "afterhours",
  "candid",
];

type ViewMode = "sheet" | "stack";

export function VisualJournalSection({
  locale,
  theme,
  localAudioUrl,
}: VisualJournalSectionProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("stack");
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [stackOrder, setStackOrder] = useState<number[]>(() =>
    GALLERY_PHOTOS.map((_, i) => i)
  );
  const isLight = theme === "light";

  const counts = useMemo(
    () => ({
      all: GALLERY_PHOTOS.length,
      architecture: GALLERY_PHOTOS.filter((p) => p.category === "architecture")
        .length,
      afterhours: GALLERY_PHOTOS.filter((p) => p.category === "afterhours")
        .length,
      candid: GALLERY_PHOTOS.filter((p) => p.category === "candid").length,
    }),
    []
  );

  const filteredPhotos = useMemo(() => {
    if (filter === "all") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === filter);
  }, [filter]);

  const openPhotoById = (id: string) => {
    const idx = GALLERY_PHOTOS.findIndex((p) => p.id === id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  const cycleNextCard = () => {
    setStackOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  const cyclePrevCard = () => {
    setStackOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  const shuffleStack = () => {
    setStackOrder((prev) => {
      const next = [...prev];
      for (let i = next.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [next[j], next[i]];
      }
      if (next[0] === prev[0] && next.length > 1) {
        [next[0], next[1]] = [next[1], next[0]];
      }
      return next;
    });
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -75 || info.velocity.x < -400) {
      cycleNextCard();
    } else if (info.offset.x > 75 || info.velocity.x > 400) {
      cyclePrevCard();
    }
  };

  const frontPhoto = GALLERY_PHOTOS[stackOrder[0]];

  return (
    <section
      id="journal"
      className={`relative py-24 transition-colors duration-300 sm:py-32 ${
        isLight ? "bg-[#FAF9F5]" : "bg-[#F4F2EC]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header + Soundtrack Cue + Mode Switch */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="font-mono text-xs font-medium tracking-[0.16em] uppercase text-[#176B54]">
              {UI_COPY.journal.eyebrow[locale]}
            </div>
            <h2 className="mt-3 text-3xl leading-[1.08] font-bold tracking-[-0.03em] text-[#18221D] sm:text-4xl lg:text-[46px]">
              {UI_COPY.journal.headingLead[locale]}{" "}
              <span className="font-editorial font-normal text-[#176B54]">
                {UI_COPY.journal.headingItalic[locale]}
              </span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4E5C55] sm:text-base">
              {UI_COPY.journal.subtitle[locale]}
            </p>
          </div>

          {/* Right Controls: Soundtrack Badge + Mode Switcher */}
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <button
              type="button"
              onClick={() => setLightboxIndex(0)}
              className={`group inline-flex items-center gap-3 rounded-full border py-1.5 pr-4 pl-2 shadow-2xs transition hover:border-[#176B54]/45 ${
                isLight
                  ? "border-[#D4DFD8] bg-white"
                  : "border-[#DDD9CD] bg-[#FAF9F5]"
              }`}
            >
              <span
                className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                  isLight
                    ? "bg-[#176B54] text-white"
                    : "bg-[#141917] text-[#5EC4A0]"
                }`}
              >
                <Disc3 className="h-4 w-4 transition-transform duration-700 group-hover:rotate-180" />
              </span>
              <div className="text-left">
                <div className="font-mono text-[9.5px] tracking-wider uppercase text-[#6D7B74]">
                  {UI_COPY.journal.soundtrackHint[locale]}
                </div>
                <div className="text-xs font-semibold text-[#18221D]">
                  {SOUNDTRACK.artist} —{" "}
                  <span className="text-[#176B54]">{SOUNDTRACK.title}</span>
                </div>
              </div>
            </button>

            <div
              className={`inline-flex rounded-xl border p-1 ${
                isLight
                  ? "border-[#D4DFD8] bg-white"
                  : "border-[#DDD9CD] bg-[#FAF9F5]"
              }`}
            >
              <button
                type="button"
                onClick={() => setViewMode("stack")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  viewMode === "stack"
                    ? isLight
                      ? "bg-[#176B54] text-white"
                      : "bg-[#141917] text-[#ECEAE2]"
                    : "text-[#505A54] hover:text-[#18221D]"
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>{UI_COPY.journal.modes.stack[locale]}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("sheet")}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  viewMode === "sheet"
                    ? isLight
                      ? "bg-[#176B54] text-white"
                      : "bg-[#141917] text-[#ECEAE2]"
                    : "text-[#505A54] hover:text-[#18221D]"
                }`}
              >
                <Grid3X3 className="h-3.5 w-3.5" />
                <span>{UI_COPY.journal.modes.sheet[locale]}</span>
              </button>
            </div>
          </div>
        </div>

        {/* MODE A: Editorial Contact Sheet */}
        {viewMode === "sheet" ? (
          <div className="mt-10">
            <div
              className={`flex flex-wrap items-center justify-between gap-3 border-b pb-5 ${
                isLight ? "border-[#DCE5DF]" : "border-[#DDD9CD]"
              }`}
            >
              <div className="flex flex-wrap gap-1.5">
                {FILTER_OPTIONS.map((opt) => {
                  const active = filter === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFilter(opt)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                        active
                          ? "bg-[#176B54] text-white"
                          : isLight
                            ? "border border-[#D4DFD8] bg-white text-[#4E5C55] hover:border-[#176B54]/45 hover:text-[#18221D]"
                            : "border border-[#DDD9CD] bg-[#FAF9F5] text-[#505A54] hover:border-[#1C6450]/45 hover:text-[#1C221F]"
                      }`}
                    >
                      <span>{UI_COPY.journal.filters[opt][locale]}</span>
                      <span
                        className={`ml-1.5 font-mono text-[10px] ${
                          active ? "text-[#B5EAD7]" : "text-[#7D8781]"
                        }`}
                      >
                        {counts[opt]}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="font-mono text-[11px] text-[#6E7C74]">
                ROLL 01 · {filteredPhotos.length} FRAMES
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((photo, idx) => (
                <motion.button
                  key={photo.id}
                  type="button"
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.42, delay: (idx % 3) * 0.05 }}
                  onClick={() => openPhotoById(photo.id)}
                  className={`group flex flex-col overflow-hidden rounded-[22px] border p-2.5 text-left transition duration-300 hover:-translate-y-1 hover:border-[#176B54]/45 ${
                    isLight
                      ? "border-[#D8E2DB] bg-white hover:shadow-[0_22px_46px_-28px_rgba(23,56,44,0.22)]"
                      : "border-[#DDD9CD] bg-[#FAF9F5] hover:shadow-[0_22px_48px_-30px_rgba(20,25,23,0.35)]"
                  }`}
                >
                  <div className="flex items-center justify-between px-1.5 pb-2 font-mono text-[10px]">
                    <span className="font-semibold text-[#176B54]">
                      NO. {photo.frame}
                    </span>
                    <span className="text-[#6F7C75]">{photo.mood[locale]}</span>
                  </div>

                  <div
                    className={`relative w-full overflow-hidden rounded-[15px] bg-[#141917] ${
                      photo.aspect === "tall" ? "aspect-[4/5]" : "aspect-[4/4.6]"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title[locale]}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{ objectPosition: photo.objectPosition }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141917]/75 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

                    <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-2">
                      <div>
                        <div className="text-sm font-bold tracking-tight text-[#FAF9F5]">
                          {photo.title[locale]}
                        </div>
                        <div className="mt-0.5 line-clamp-1 text-[11px] text-white/75">
                          {photo.caption[locale]}
                        </div>
                      </div>
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#141917]/75 text-[#86D8BA] backdrop-blur transition group-hover:bg-[#5EC4A0] group-hover:text-[#101412]">
                        <Music2 className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          /* MODE B: Tactile 3D Interactive Draggable Print Stack */
          <div
            className={`mt-10 overflow-hidden rounded-[28px] border p-6 transition-colors duration-300 sm:p-10 lg:p-12 ${
              isLight
                ? "border-[#D8E2DB] bg-[#EDF2EE] text-[#18221D]"
                : "border-[#222B27] bg-[#141917] text-[#ECEAE2]"
            }`}
          >
            <div className="grid items-center gap-10 lg:grid-cols-12">
              {/* Draggable Print Deck */}
              <div className="relative flex h-[430px] items-center justify-center sm:h-[480px] lg:col-span-7">
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 ${
                    isLight
                      ? "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,transparent_65%)]"
                      : "bg-[radial-gradient(circle_at_center,rgba(94,196,160,0.12)_0%,transparent_65%)]"
                  }`}
                />

                <AnimatePresence initial={false}>
                  {stackOrder
                    .slice(0, 4)
                    .reverse()
                    .map((photoIdx, renderPos, arr) => {
                      const depthFromFront = arr.length - 1 - renderPos;
                      const photo = GALLERY_PHOTOS[photoIdx];
                      const isFront = depthFromFront === 0;
                      const tilt =
                        depthFromFront === 0
                          ? 0
                          : depthFromFront === 1
                            ? -4.5
                            : depthFromFront === 2
                              ? 4
                              : -2;

                      return (
                        <motion.div
                          key={photo.id}
                          style={{ zIndex: 20 - depthFromFront }}
                          initial={{ scale: 0.92, opacity: 0 }}
                          animate={{
                            scale: 1 - depthFromFront * 0.045,
                            y: depthFromFront * 12,
                            rotate: tilt,
                            opacity: 1 - depthFromFront * 0.16,
                          }}
                          exit={{ opacity: 0, scale: 0.88 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 24,
                          }}
                          drag={isFront ? "x" : false}
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.65}
                          onDragEnd={isFront ? handleDragEnd : undefined}
                          whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                          onClick={
                            isFront
                              ? () => setLightboxIndex(photoIdx)
                              : undefined
                          }
                          className={`absolute w-[265px] rounded-[22px] border p-2.5 pb-4 text-[#18221D] select-none sm:w-[310px] ${
                            isLight
                              ? "border-[#D4DFD8] bg-white shadow-[0_24px_55px_-22px_rgba(23,56,44,0.28)]"
                              : "border-white/14 bg-[#FAF9F5] shadow-[0_28px_65px_-22px_rgba(0,0,0,0.75)]"
                          } ${isFront ? "cursor-grab" : "pointer-events-none"}`}
                        >
                          <div className="relative aspect-[4/4.85] w-full overflow-hidden rounded-[14px] bg-[#141917]">
                            <img
                              src={photo.src}
                              alt={photo.title[locale]}
                              draggable={false}
                              className="h-full w-full object-cover"
                              style={{ objectPosition: photo.objectPosition }}
                            />
                            {isFront ? (
                              <span className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1 rounded-full bg-[#141917]/80 px-2.5 py-1 font-mono text-[10px] font-medium text-[#86D8BA] backdrop-blur">
                                <Maximize2 className="h-3 w-3" />
                                <span>♪ View</span>
                              </span>
                            ) : null}
                          </div>
                          <div className="mt-2.5 flex items-center justify-between px-1 font-mono text-[10px]">
                            <span className="font-bold text-[#18221D]">
                              {photo.title[locale]}
                            </span>
                            <span className="text-[#6F7B75]">
                              NO. {photo.frame}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>

              {/* Right Interactive Deck Controls & Narrative */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span
                      className={
                        isLight
                          ? "font-semibold text-[#176B54]"
                          : "text-[#86D8BA]"
                      }
                    >
                      FRAME {frontPhoto.frame} / 0{GALLERY_PHOTOS.length}
                    </span>
                    <span className={isLight ? "text-[#B5C4BB]" : "text-white/25"}>
                      ·
                    </span>
                    <span className="text-[#B88446]">
                      {frontPhoto.mood[locale]}
                    </span>
                  </div>
                  <h3
                    className={`mt-2.5 text-2xl font-bold tracking-tight sm:text-3xl ${
                      isLight ? "text-[#18221D]" : "text-[#ECEAE2]"
                    }`}
                  >
                    {frontPhoto.title[locale]}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isLight ? "text-[#4A5A52]" : "text-[#A7B2AC]"
                    }`}
                  >
                    {frontPhoto.caption[locale]}
                  </p>
                  <p
                    className={`mt-4 font-mono text-[11px] ${
                      isLight ? "text-[#6D7B74]" : "text-white/45"
                    }`}
                  >
                    {UI_COPY.journal.stackHint[locale]}
                  </p>
                </div>

                {/* Tactile Controls */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={cyclePrevCard}
                      aria-label="Previous card"
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                        isLight
                          ? "border-[#C9D7CE] bg-white text-[#18221D] hover:border-[#176B54] hover:text-[#176B54]"
                          : "border-white/15 bg-white/5 text-[#ECEAE2] hover:border-[#5EC4A0] hover:text-[#86D8BA]"
                      }`}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={cycleNextCard}
                      aria-label="Next card"
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                        isLight
                          ? "border-[#C9D7CE] bg-white text-[#18221D] hover:border-[#176B54] hover:text-[#176B54]"
                          : "border-white/15 bg-white/5 text-[#ECEAE2] hover:border-[#5EC4A0] hover:text-[#86D8BA]"
                      }`}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={shuffleStack}
                      aria-label="Shuffle stack"
                      className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-4 font-mono text-xs transition ${
                        isLight
                          ? "border-[#C9D7CE] bg-white text-[#18221D] hover:border-[#176B54] hover:text-[#176B54]"
                          : "border-white/15 bg-white/5 text-[#ECEAE2] hover:border-[#C9975B] hover:text-[#C9975B]"
                      }`}
                    >
                      <Shuffle className="h-3.5 w-3.5" />
                      <span>Shuffle</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxIndex(stackOrder[0])}
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold transition sm:w-auto ${
                      isLight
                        ? "bg-[#176B54] text-white hover:bg-[#125542]"
                        : "bg-[#5EC4A0] text-[#101412] hover:bg-[#86D8BA]"
                    }`}
                  >
                    <Music2 className="h-4 w-4" />
                    <span>{UI_COPY.journal.openFrame[locale]}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cinema / Daylight Gallery Photo Lightbox + Soundtrack Console */}
      <PhotoLightbox
        photos={GALLERY_PHOTOS}
        activeIndex={lightboxIndex}
        locale={locale}
        theme={theme}
        localAudioUrl={localAudioUrl}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </section>
  );
}
