"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { PROFILE, UI_COPY } from "@/data/portfolio";
import type { Locale, ThemeMode } from "@/types/portfolio";

interface ContactSectionProps {
  locale: Locale;
  theme: ThemeMode;
}

export function ContactSection({ locale, theme }: ContactSectionProps) {
  const [wibTime, setWibTime] = useState("--:--");
  const [copied, setCopied] = useState(false);
  const isLight = theme === "light";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  useEffect(() => {
    const tick = () => {
      try {
        const t = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setWibTime(t);
      } catch {
        setWibTime("WIB");
      }
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({
        type: "error",
        text: UI_COPY.contact.form.validationError[locale],
      });
      return false;
    }
    return true;
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const finalSubject =
      subject.trim() ||
      (locale === "id"
        ? `Diskusi Peluang dari ${name.trim()}`
        : `Engineering Inquiry from ${name.trim()}`);
    const body = `${message.trim()}\n\n—\n${name.trim()}\n${email.trim()}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      finalSubject
    )}&body=${encodeURIComponent(body)}`;
    setFeedback({
      type: "success",
      text: UI_COPY.contact.form.sentNotice[locale],
    });
  };

  const handleWhatsAppSend = () => {
    if (!validate()) return;
    const text = `Halo Aldi, saya ${name.trim()} (${email.trim()}).${
      subject.trim() ? `\nTopik: ${subject.trim()}` : ""
    }\n\n${message.trim()}`;
    window.open(
      `https://wa.me/6281296895924?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setFeedback({
      type: "success",
      text: UI_COPY.contact.form.sentNotice[locale],
    });
  };

  return (
    <footer
      id="contact"
      className={`relative px-2 pt-4 pb-2 transition-colors duration-300 sm:px-4 sm:pb-4 ${
        isLight ? "bg-[#FAF9F5]" : "bg-[#F4F2EC]"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-[28px] transition-colors duration-300 sm:rounded-[36px] ${
          isLight
            ? "border border-[#D4DFD8] bg-[#EAF0EC] text-[#18221D]"
            : "bg-[#141917] text-[#ECEAE2]"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 ${
            isLight
              ? "bg-arch-grid-sage opacity-80"
              : "bg-arch-grid-dark opacity-70"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 left-1/2 h-[440px] w-[760px] -translate-x-1/2 rounded-full ${
            isLight
              ? "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8)_0%,transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_top,rgba(28,100,80,0.26)_0%,transparent_70%)]"
          }`}
        />

        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8 sm:pt-28">
          {/* Top Local Time Telemetry */}
          <div
            className={`flex flex-wrap items-center justify-between gap-3 border-b pb-6 font-mono text-xs ${
              isLight ? "border-[#D0DDD5]" : "border-white/10"
            }`}
          >
            <span className={isLight ? "font-semibold text-[#176B54]" : "text-[#5EC4A0]"}>
              {UI_COPY.contact.eyebrow[locale]}
            </span>
            <span className={isLight ? "text-[#54645C]" : "text-white/65"}>
              {PROFILE.location[locale]} · {wibTime} WIB
            </span>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Direct Contact Channels */}
            <div className="lg:col-span-6">
              <h2
                className={`text-3xl leading-[1.06] font-bold tracking-[-0.03em] sm:text-5xl ${
                  isLight ? "text-[#18221D]" : "text-white"
                }`}
              >
                {UI_COPY.contact.headingLead[locale]}{" "}
                <span
                  className={`font-editorial block font-normal ${
                    isLight ? "text-[#176B54]" : "text-[#86D8BA]"
                  }`}
                >
                  {UI_COPY.contact.headingItalic[locale]}
                </span>
              </h2>

              <p
                className={`mt-5 max-w-lg text-sm leading-relaxed sm:text-base ${
                  isLight ? "text-[#495851]" : "text-[#9CA7A1]"
                }`}
              >
                {UI_COPY.contact.subtitle[locale]}
              </p>

              {/* Copyable Primary Email Block */}
              <div
                className={`mt-8 rounded-2xl border p-4 sm:p-5 ${
                  isLight
                    ? "border-[#D4DFD8] bg-white shadow-[0_12px_30px_-22px_rgba(23,56,44,0.16)]"
                    : "border-white/12 bg-white/[0.03]"
                }`}
              >
                <div
                  className={`font-mono text-[10.5px] uppercase ${
                    isLight ? "text-[#6D7B74]" : "text-white/45"
                  }`}
                >
                  Direct Email
                </div>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className={`font-mono text-base font-semibold transition sm:text-lg ${
                      isLight
                        ? "text-[#18221D] hover:text-[#176B54]"
                        : "text-white hover:text-[#86D8BA]"
                    }`}
                  >
                    {PROFILE.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-mono text-xs font-semibold transition ${
                      isLight
                        ? "border-[#176B54]/30 bg-[#EDF3EF] text-[#176B54] hover:bg-[#176B54] hover:text-white"
                        : "border-[#5EC4A0]/35 bg-[#5EC4A0]/12 text-[#86D8BA] hover:bg-[#5EC4A0] hover:text-[#101412]"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>{UI_COPY.contact.copied[locale]}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{UI_COPY.contact.copyEmail[locale]}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Channel Pills */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  {
                    label: "WhatsApp",
                    href: PROFILE.whatsappUrl,
                    icon: <MessageCircle className="h-4 w-4" />,
                  },
                  {
                    label: "LinkedIn",
                    href: PROFILE.linkedinUrl,
                    icon: <Linkedin className="h-4 w-4" />,
                  },
                  {
                    label: "GitHub",
                    href: PROFILE.githubUrl,
                    icon: <Github className="h-4 w-4" />,
                  },
                ].map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-xs font-semibold transition ${
                      isLight
                        ? "border-[#D4DFD8] bg-white text-[#18221D] hover:border-[#176B54]/50 hover:text-[#176B54]"
                        : "border-white/10 bg-white/[0.025] text-white hover:border-[#5EC4A0]/40 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={isLight ? "text-[#176B54]" : "text-[#5EC4A0]"}
                      >
                        {ch.icon}
                      </span>
                      {ch.label}
                    </span>
                    <ArrowUpRight
                      className={`h-3.5 w-3.5 ${
                        isLight ? "text-[#7A8981]" : "text-white/45"
                      }`}
                    />
                  </a>
                ))}
              </div>

              {/* Direct CV Links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {PROFILE.cvFiles.slice(0, 2).map((cv) => (
                  <a
                    key={cv.id}
                    href={cv.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] font-medium transition ${
                      isLight
                        ? "border-[#CBD8D0] bg-white text-[#2B3731] hover:border-[#176B54] hover:text-[#176B54]"
                        : "border-white/15 bg-white/[0.04] text-white/85 hover:border-[#5EC4A0]/50 hover:text-[#86D8BA]"
                    }`}
                  >
                    <FileDown className="h-3.5 w-3.5" />
                    <span>{cv.label[locale]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Interactive Quick-Note Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleComposeEmail}
                className={`rounded-[24px] border p-6 sm:p-7 ${
                  isLight
                    ? "border-[#D4DFD8] bg-white shadow-[0_18px_44px_-28px_rgba(23,56,44,0.18)]"
                    : "border-white/12 bg-[#1B221F]/95"
                }`}
              >
                <div
                  className={`flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase ${
                    isLight ? "text-[#176B54]" : "text-[#5EC4A0]"
                  }`}
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{UI_COPY.contact.form.title[locale]}</span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className={`block font-mono text-[11px] ${
                        isLight ? "text-[#516058]" : "text-white/65"
                      }`}
                    >
                      {UI_COPY.contact.form.name[locale]}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setFeedback(null);
                      }}
                      placeholder={UI_COPY.contact.form.namePlaceholder[locale]}
                      className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm focus:outline-none ${
                        isLight
                          ? "border-[#D4DFD8] bg-[#FAF9F5] text-[#18221D] placeholder:text-[#88958E] focus:border-[#176B54]"
                          : "border-white/12 bg-[#141917] text-white placeholder:text-white/30 focus:border-[#5EC4A0]"
                      }`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className={`block font-mono text-[11px] ${
                        isLight ? "text-[#516058]" : "text-white/65"
                      }`}
                    >
                      {UI_COPY.contact.form.email[locale]}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setFeedback(null);
                      }}
                      placeholder={UI_COPY.contact.form.emailPlaceholder[locale]}
                      className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm focus:outline-none ${
                        isLight
                          ? "border-[#D4DFD8] bg-[#FAF9F5] text-[#18221D] placeholder:text-[#88958E] focus:border-[#176B54]"
                          : "border-white/12 bg-[#141917] text-white placeholder:text-white/30 focus:border-[#5EC4A0]"
                      }`}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact-subject"
                    className={`block font-mono text-[11px] ${
                      isLight ? "text-[#516058]" : "text-white/65"
                    }`}
                  >
                    {UI_COPY.contact.form.subject[locale]}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={UI_COPY.contact.form.subjectPlaceholder[locale]}
                    className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm focus:outline-none ${
                      isLight
                        ? "border-[#D4DFD8] bg-[#FAF9F5] text-[#18221D] placeholder:text-[#88958E] focus:border-[#176B54]"
                        : "border-white/12 bg-[#141917] text-white placeholder:text-white/30 focus:border-[#5EC4A0]"
                    }`}
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="contact-message"
                    className={`block font-mono text-[11px] ${
                      isLight ? "text-[#516058]" : "text-white/65"
                    }`}
                  >
                    {UI_COPY.contact.form.message[locale]}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setFeedback(null);
                    }}
                    placeholder={UI_COPY.contact.form.messagePlaceholder[locale]}
                    className={`mt-1.5 w-full resize-none rounded-xl border px-3.5 py-2.5 text-sm focus:outline-none ${
                      isLight
                        ? "border-[#D4DFD8] bg-[#FAF9F5] text-[#18221D] placeholder:text-[#88958E] focus:border-[#176B54]"
                        : "border-white/12 bg-[#141917] text-white placeholder:text-white/30 focus:border-[#5EC4A0]"
                    }`}
                  />
                </div>

                {feedback ? (
                  <p
                    className={`mt-3 text-xs font-medium ${
                      feedback.type === "error"
                        ? isLight
                          ? "text-amber-700"
                          : "text-amber-300"
                        : isLight
                          ? "text-[#176B54]"
                          : "text-[#86D8BA]"
                    }`}
                  >
                    {feedback.text}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2.5">
                  <button
                    type="submit"
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold transition ${
                      isLight
                        ? "bg-[#176B54] text-white hover:bg-[#125542]"
                        : "bg-[#5EC4A0] text-[#101412] hover:bg-[#86D8BA]"
                    }`}
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{UI_COPY.contact.form.submitEmail[locale]}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-xs font-semibold transition ${
                      isLight
                        ? "border-[#CBD8D0] bg-[#FAF9F5] text-[#18221D] hover:border-[#176B54] hover:text-[#176B54]"
                        : "border-white/15 bg-white/[0.04] text-white hover:border-[#5EC4A0]/50 hover:text-[#86D8BA]"
                    }`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>{UI_COPY.contact.form.submitWhatsApp[locale]}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Bar & Architectural Wordmark */}
          <div
            className={`mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 text-xs sm:flex-row sm:items-center ${
              isLight
                ? "border-[#D0DDD5] text-[#58675F]"
                : "border-white/10 text-white/50"
            }`}
          >
            <div>
              <p>{UI_COPY.footer.tagline[locale]}</p>
              <p
                className={`mt-1 font-mono text-[11px] ${
                  isLight ? "text-[#7A8981]" : "text-white/35"
                }`}
              >
                © {new Date().getFullYear()} {PROFILE.fullName}.{" "}
                {UI_COPY.footer.rights[locale]}
              </p>
            </div>

            <a
              href="#top"
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-[11px] font-medium transition ${
                isLight
                  ? "border-[#CBD8D0] bg-white text-[#18221D] hover:border-[#176B54] hover:text-[#176B54]"
                  : "border-white/15 bg-white/[0.04] text-white/80 hover:border-[#5EC4A0]/50 hover:text-[#86D8BA]"
              }`}
            >
              <span>{UI_COPY.footer.backToTop[locale]}</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Subtle Editorial Oversized Wordmark */}
          <div
            aria-hidden="true"
            className="mt-8 overflow-hidden text-center select-none"
          >
            <div
              className={`font-sans text-[18vw] leading-[0.82] font-extrabold tracking-[-0.05em] xl:text-[210px] ${
                isLight ? "text-[#176B54]/[0.065]" : "text-white/[0.045]"
              }`}
            >
              ALDI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
