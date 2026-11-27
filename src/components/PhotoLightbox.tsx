"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Disc3,
  ExternalLink,
  Music2,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { SOUNDTRACK, UI_COPY } from "@/data/portfolio";
import type { GalleryPhoto, Locale, ThemeMode } from "@/types/portfolio";

interface PhotoLightboxProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  locale: Locale;
  theme: ThemeMode;
  localAudioUrl: string | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

type TrackVariant = "original" | "slowed";

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (vol: number) => void;
  loadVideoById: (videoId: string) => void;
  destroy: () => void;
}

interface YTWindow extends Window {
  YT?: {
    Player: new (
      el: HTMLElement | string,
      config: {
        height: string;
        width: string;
        videoId: string;
        playerVars?: Record<string, string | number>;
        events?: {
          onReady?: (e: { target: YTPlayerInstance }) => void;
          onStateChange?: (e: { data: number; target: YTPlayerInstance }) => void;
          onError?: () => void;
        };
      }
    ) => YTPlayerInstance;
  };
  onYouTubeIframeAPIReady?: () => void;
}

let ytApiPromise: Promise<void> | null = null;

function loadYouTubeIframeAPI(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const win = window as YTWindow;
  if (win.YT?.Player) return Promise.resolve();
  if (ytApiPromise) return ytApiPromise;

  ytApiPromise = new Promise<void>((resolve) => {
    const prevCallback = win.onYouTubeIframeAPIReady;
    win.onYouTubeIframeAPIReady = () => {
      prevCallback?.();
      resolve();
    };
    const existing = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );
    if (!existing) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.head.appendChild(tag);
    }
  });
  return ytApiPromise;
}

export function PhotoLightbox({
  photos,
  activeIndex,
  locale,
  theme,
  localAudioUrl,
  onClose,
  onChangeIndex,
}: PhotoLightboxProps) {
  const isOpen = activeIndex !== null && Boolean(photos[activeIndex]);
  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;
  const isLight = theme === "light";

  const [variant, setVariant] = useState<TrackVariant>("original");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(60);
  const [audioProgress, setAudioProgress] = useState(0);

  const localAudioRef = useRef<HTMLAudioElement | null>(null);
  const ytContainerRef = useRef<HTMLDivElement | null>(null);
  const ytPlayerRef = useRef<YTPlayerInstance | null>(null);
  const ytReadyRef = useRef(false);
  const volumeRef = useRef(volume);
  volumeRef.current = volume;

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex - 1 + photos.length) % photos.length);
  }, [activeIndex, onChangeIndex, photos.length]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    onChangeIndex((activeIndex + 1) % photos.length);
  }, [activeIndex, onChangeIndex, photos.length]);

  const togglePlay = useCallback(() => {
    if (localAudioUrl && localAudioRef.current) {
      const audio = localAudioRef.current;
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
      return;
    }

    const player = ytPlayerRef.current;
    if (!player || !ytReadyRef.current) return;
    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.unMute();
      player.setVolume(volumeRef.current);
      player.playVideo();
      setIsMuted(false);
    }
  }, [isPlaying, localAudioUrl]);

  const toggleMute = useCallback(() => {
    if (localAudioUrl && localAudioRef.current) {
      const next = !isMuted;
      localAudioRef.current.muted = next;
      setIsMuted(next);
      return;
    }

    const player = ytPlayerRef.current;
    if (!player || !ytReadyRef.current) return;
    if (isMuted) {
      player.unMute();
      player.setVolume(volumeRef.current);
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  }, [isMuted, localAudioUrl]);

  // Body scroll lock & Keyboard Shortcuts
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goNext, goPrev, togglePlay, toggleMute]);

  // Priority 1: Local Audio Playback Lifecycle
  useEffect(() => {
    if (!localAudioUrl) return;
    const audio = localAudioRef.current;
    if (!audio) return;

    if (isOpen) {
      audio.volume = volumeRef.current / 100;
      audio.muted = false;
      setIsMuted(false);
      setIsLoading(true);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsLoading(false);
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setAudioProgress(0);
    }
  }, [isOpen, localAudioUrl]);

  // Priority 2: Embedded YouTube Official Track Lifecycle (runs while modal is open; uninterrupted across photo switches!)
  useEffect(() => {
    if (localAudioUrl) return;

    if (!isOpen) {
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.pauseVideo();
          ytPlayerRef.current.destroy();
        } catch {
          // ignore teardown race
        }
        ytPlayerRef.current = null;
        ytReadyRef.current = false;
      }
      setIsPlaying(false);
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);
    const initialVideoId =
      variant === "slowed"
        ? SOUNDTRACK.youtubeSlowedId
        : SOUNDTRACK.youtubeOriginalId;

    loadYouTubeIframeAPI().then(() => {
      if (cancelled || !ytContainerRef.current) return;
      const win = window as YTWindow;
      if (!win.YT?.Player) {
        setIsLoading(false);
        return;
      }

      ytContainerRef.current.innerHTML = "";
      const mountNode = document.createElement("div");
      ytContainerRef.current.appendChild(mountNode);

      ytPlayerRef.current = new win.YT.Player(mountNode, {
        height: "120",
        width: "200",
        videoId: initialVideoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          playlist: initialVideoId,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            if (cancelled) return;
            ytReadyRef.current = true;
            event.target.setVolume(volumeRef.current);
            event.target.playVideo();
            setIsLoading(false);
          },
          onStateChange: (event) => {
            if (cancelled) return;
            // 1 = PLAYING, 2 = PAUSED, 3 = BUFFERING, 0 = ENDED
            if (event.data === 1) {
              setIsPlaying(true);
              setIsLoading(false);
            } else if (event.data === 2) {
              setIsPlaying(false);
              setIsLoading(false);
            } else if (event.data === 3) {
              setIsLoading(true);
            } else if (event.data === 0) {
              event.target.playVideo();
            }
          },
          onError: () => {
            if (cancelled) return;
            setIsLoading(false);
            setIsPlaying(false);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      if (ytPlayerRef.current) {
        try {
          ytPlayerRef.current.pauseVideo();
          ytPlayerRef.current.destroy();
        } catch {
          // ignore
        }
        ytPlayerRef.current = null;
        ytReadyRef.current = false;
      }
    };
    // Intentionally mounted per open/close session; variant changes handled via loadVideoById below
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, localAudioUrl]);

  // Switch between Original & Slowed smoothly without closing lightbox
  const handleVariantChange = (nextVariant: TrackVariant) => {
    if (nextVariant === variant) return;
    setVariant(nextVariant);
    if (!localAudioUrl && ytPlayerRef.current && ytReadyRef.current) {
      const nextId =
        nextVariant === "slowed"
          ? SOUNDTRACK.youtubeSlowedId
          : SOUNDTRACK.youtubeOriginalId;
      setIsLoading(true);
      ytPlayerRef.current.loadVideoById(nextId);
    }
  };

  const handleVolumeChange = (nextVol: number) => {
    setVolume(nextVol);
    if (nextVol > 0 && isMuted) setIsMuted(false);
    if (localAudioUrl && localAudioRef.current) {
      localAudioRef.current.volume = nextVol / 100;
      localAudioRef.current.muted = nextVol === 0;
    } else if (ytPlayerRef.current && ytReadyRef.current) {
      if (nextVol === 0) {
        ytPlayerRef.current.mute();
      } else {
        ytPlayerRef.current.unMute();
        ytPlayerRef.current.setVolume(nextVol);
      }
    }
  };

  return (
    <>
      {/* Optional Local Audio Element */}
      {localAudioUrl ? (
        <audio
          ref={localAudioRef}
          src={localAudioUrl}
          loop
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(e) => {
            const el = e.currentTarget;
            if (el.duration > 0) {
              setAudioProgress((el.currentTime / el.duration) * 100);
            }
          }}
        />
      ) : null}

      <AnimatePresence>
        {isOpen && activePhoto && activeIndex !== null ? (
          <motion.div
            key="photo-cinema-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${activePhoto.title[locale]} — ${SOUNDTRACK.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-[85] flex flex-col justify-between p-3 backdrop-blur-xl sm:p-6 ${
              isLight
                ? "bg-[#F6F7F4]/96 text-[#18221D]"
                : "bg-[#101412]/95 text-[#ECEAE2]"
            }`}
            onClick={onClose}
          >
            {/* Off-screen (non-display:none) YouTube Audio Engine Mount */}
            {!localAudioUrl ? (
              <div
                ref={ytContainerRef}
                aria-hidden="true"
                className="pointer-events-none fixed -top-[9999px] -left-[9999px] h-px w-px overflow-hidden opacity-0"
              />
            ) : null}

            {/* Top Editorial Cinema Header */}
            <div
              className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 pb-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span
                  className={`rounded-md border px-2 py-0.5 font-semibold ${
                    isLight
                      ? "border-[#176B54]/25 bg-[#EDF3EF] text-[#176B54]"
                      : "border-[#5EC4A0]/35 bg-[#5EC4A0]/12 text-[#86D8BA]"
                  }`}
                >
                  FRAME {activePhoto.frame} / 0{photos.length}
                </span>
                <span
                  className={`hidden sm:inline ${
                    isLight ? "text-[#58675F]" : "text-[#A7B2AC]"
                  }`}
                >
                  {activePhoto.mood[locale]}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`hidden font-mono text-[10.5px] md:inline ${
                    isLight ? "text-[#6D7B74]" : "text-white/45"
                  }`}
                >
                  {UI_COPY.journal.lightbox.keyboardHint[locale]}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close photo viewer"
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${
                    isLight
                      ? "border-[#D0DDD5] bg-white text-[#18221D] hover:bg-[#176B54] hover:text-white"
                      : "border-white/15 bg-white/6 text-[#ECEAE2] hover:bg-white/16"
                  }`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Main Cinema Stage + Caption Side Panel */}
            <div
              className="mx-auto grid min-h-0 w-full max-w-6xl flex-1 items-center gap-3 overflow-y-auto py-1 sm:gap-5 lg:grid-cols-12 lg:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Viewport */}
              <div className="relative flex items-center justify-center lg:col-span-8 lg:h-full lg:max-h-[68vh]">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous photo"
                  className={`absolute left-1 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur transition sm:left-3 sm:h-10 sm:w-10 ${
                    isLight
                      ? "border-[#D0DDD5] bg-white/90 text-[#18221D] hover:border-[#176B54] hover:bg-[#176B54] hover:text-white"
                      : "border-white/15 bg-[#141917]/80 text-[#ECEAE2] hover:border-[#5EC4A0]/60 hover:bg-[#1C6450]"
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.28 }}
                    className="relative flex w-full items-center justify-center px-11 sm:px-16"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border p-1.5 ${
                        isLight
                          ? "border-[#D4DFD8] bg-white shadow-[0_28px_70px_-24px_rgba(23,56,44,0.28)]"
                          : "border-white/12 bg-[#1B221F] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)]"
                      }`}
                    >
                      <img
                        src={activePhoto.src}
                        alt={activePhoto.title[locale]}
                        className="max-h-[38vh] w-auto rounded-xl object-contain sm:max-h-[46vh] lg:max-h-[64vh]"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next photo"
                  className={`absolute right-1 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur transition sm:right-3 sm:h-10 sm:w-10 ${
                    isLight
                      ? "border-[#D0DDD5] bg-white/90 text-[#18221D] hover:border-[#176B54] hover:bg-[#176B54] hover:text-white"
                      : "border-white/15 bg-[#141917]/80 text-[#ECEAE2] hover:border-[#5EC4A0]/60 hover:bg-[#1C6450]"
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Editorial Plaque + Vinyl Audio Console */}
              <div
                className={`flex flex-col justify-between gap-3 rounded-2xl border p-3.5 sm:gap-4 sm:p-5 lg:col-span-4 ${
                  isLight
                    ? "border-[#D4DFD8] bg-white shadow-[0_18px_42px_-24px_rgba(23,56,44,0.16)]"
                    : "border-white/10 bg-[#181E1C]/95"
                }`}
              >
                {/* Frame Narrative */}
                <div>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#B88446]">
                    {activePhoto.mood[locale]}
                  </div>
                  <h3
                    className={`mt-1.5 text-xl font-bold tracking-tight sm:text-2xl ${
                      isLight ? "text-[#18221D]" : "text-[#ECEAE2]"
                    }`}
                  >
                    {activePhoto.title[locale]}
                  </h3>
                  <p
                    className={`mt-2 text-xs leading-relaxed sm:text-sm ${
                      isLight ? "text-[#506058]" : "text-[#A7B2AC]"
                    }`}
                  >
                    {activePhoto.caption[locale]}
                  </p>
                </div>

                {/* Integrated Soundtrack Console: nissi, 25Hzz - Wyw my sweetie */}
                <div
                  className={`rounded-xl border p-3.5 ${
                    isLight
                      ? "border-[#DCE5DF] bg-[#F3F6F4]"
                      : "border-white/10 bg-[#111614]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase">
                      {isPlaying ? (
                        <span className="inline-flex h-3 items-end gap-0.5">
                          <span
                            className={`animate-eq-1 h-full w-0.5 origin-bottom rounded-full ${
                              isLight ? "bg-[#176B54]" : "bg-[#5EC4A0]"
                            }`}
                          />
                          <span
                            className={`animate-eq-2 h-full w-0.5 origin-bottom rounded-full ${
                              isLight ? "bg-[#176B54]" : "bg-[#5EC4A0]"
                            }`}
                          />
                          <span
                            className={`animate-eq-3 h-full w-0.5 origin-bottom rounded-full ${
                              isLight ? "bg-[#176B54]" : "bg-[#5EC4A0]"
                            }`}
                          />
                          <span
                            className={`animate-eq-4 h-full w-0.5 origin-bottom rounded-full ${
                              isLight ? "bg-[#176B54]" : "bg-[#5EC4A0]"
                            }`}
                          />
                        </span>
                      ) : (
                        <Music2 className="h-3 w-3 text-[#B88446]" />
                      )}
                      <span
                        className={
                          isPlaying
                            ? isLight
                              ? "font-semibold text-[#176B54]"
                              : "text-[#86D8BA]"
                            : isLight
                              ? "text-[#5E6D65]"
                              : "text-[#A7B2AC]"
                        }
                      >
                        {isLoading
                          ? UI_COPY.journal.lightbox.loading[locale]
                          : isPlaying
                            ? UI_COPY.journal.lightbox.nowPlaying[locale]
                            : UI_COPY.journal.lightbox.paused[locale]}
                      </span>
                    </div>

                    {localAudioUrl ? (
                      <span
                        className={`rounded-full px-2 py-0.5 font-mono text-[9.5px] ${
                          isLight
                            ? "bg-[#176B54]/12 text-[#176B54]"
                            : "bg-[#5EC4A0]/15 text-[#86D8BA]"
                        }`}
                      >
                        {UI_COPY.journal.lightbox.localAudio[locale]}
                      </span>
                    ) : (
                      <div
                        className={`inline-flex rounded-full border p-0.5 font-mono text-[9.5px] ${
                          isLight
                            ? "border-[#D4DFD8] bg-white"
                            : "border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        {(["original", "slowed"] as const).map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => handleVariantChange(v)}
                            className={`rounded-full px-2 py-0.5 transition ${
                              variant === v
                                ? isLight
                                  ? "bg-[#176B54] font-semibold text-white"
                                  : "bg-[#5EC4A0] font-semibold text-[#101412]"
                                : isLight
                                  ? "text-[#5B6B62] hover:text-[#18221D]"
                                  : "text-white/60 hover:text-white"
                            }`}
                          >
                            {UI_COPY.journal.lightbox[v][locale]}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Track Row with Spinning Vinyl Disc */}
                  <div className="mt-3 flex items-center gap-3">
                    <div
                      className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border shadow-md ${
                        isLight
                          ? "border-[#C9D7CE] bg-white"
                          : "border-white/15 bg-[#1C221F]"
                      } ${isPlaying ? "animate-vinyl-spin" : ""}`}
                    >
                      <img
                        src={SOUNDTRACK.coverArt}
                        alt={`${SOUNDTRACK.title} cover art`}
                        className="h-full w-full object-cover opacity-95"
                      />
                      <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9975B]/70 bg-[#141917]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div
                        className={`truncate text-sm font-bold ${
                          isLight ? "text-[#18221D]" : "text-[#ECEAE2]"
                        }`}
                      >
                        {SOUNDTRACK.title}
                      </div>
                      <div
                        className={`truncate font-mono text-[11px] ${
                          isLight ? "text-[#58675F]" : "text-[#A7B2AC]"
                        }`}
                      >
                        {SOUNDTRACK.artist} · {SOUNDTRACK.tag}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
                        isPlaying
                          ? isLight
                            ? "bg-[#176B54] text-white hover:bg-[#125542]"
                            : "bg-[#5EC4A0] text-[#101412] hover:bg-[#86D8BA]"
                          : "bg-[#C9975B] text-[#101412] ring-4 ring-[#C9975B]/20 hover:bg-[#d8aa71]"
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4 fill-current" />
                      ) : (
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      )}
                    </button>
                  </div>

                  {localAudioUrl ? (
                    <div
                      className={`mt-3 h-1 w-full overflow-hidden rounded-full ${
                        isLight ? "bg-[#DCE5DF]" : "bg-white/10"
                      }`}
                    >
                      <div
                        className={`h-full rounded-full transition-all ${
                          isLight ? "bg-[#176B54]" : "bg-[#5EC4A0]"
                        }`}
                        style={{ width: `${audioProgress}%` }}
                      />
                    </div>
                  ) : null}

                  {/* Volume + Spotify Row */}
                  <div
                    className={`mt-3 flex items-center justify-between gap-3 border-t pt-2.5 ${
                      isLight ? "border-[#DCE5DF]" : "border-white/8"
                    }`}
                  >
                    <div className="flex flex-1 items-center gap-2">
                      <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? "Unmute" : "Mute"}
                        className={
                          isLight
                            ? "text-[#58675F] transition hover:text-[#18221D]"
                            : "text-white/65 transition hover:text-white"
                        }
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="h-3.5 w-3.5" />
                        ) : (
                          <Volume2 className="h-3.5 w-3.5" />
                        )}
                      </button>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={isMuted ? 0 : volume}
                        onChange={(e) =>
                          handleVolumeChange(Number(e.target.value))
                        }
                        aria-label="Soundtrack volume"
                        className={`h-1 w-24 cursor-pointer ${
                          isLight ? "accent-[#176B54]" : "accent-[#5EC4A0]"
                        }`}
                      />
                    </div>

                    <a
                      href={SOUNDTRACK.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 font-mono text-[10px] font-semibold transition hover:underline ${
                        isLight ? "text-[#176B54]" : "text-[#86D8BA]"
                      }`}
                    >
                      <Disc3 className="h-3 w-3" />
                      <span>Spotify</span>
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Clickable Filmstrip Thumbnail Dock */}
            <div
              className="mx-auto mt-3 flex w-full max-w-4xl items-center justify-center gap-2 overflow-x-auto pb-1"
              onClick={(e) => e.stopPropagation()}
            >
              {photos.map((p, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onChangeIndex(idx)}
                    aria-label={`View ${p.title[locale]}`}
                    className={`relative h-12 w-10 shrink-0 overflow-hidden rounded-lg border transition-all sm:h-14 sm:w-11 ${
                      active
                        ? isLight
                          ? "scale-105 border-[#176B54] ring-2 ring-[#176B54]/35"
                          : "scale-105 border-[#5EC4A0] ring-2 ring-[#5EC4A0]/40"
                        : isLight
                          ? "border-[#CFDCD4] opacity-60 hover:opacity-95"
                          : "border-white/15 opacity-55 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={p.src}
                      alt={p.title[locale]}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: p.objectPosition }}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
