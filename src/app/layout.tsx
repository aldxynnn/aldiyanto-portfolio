import type { Metadata } from "next";
import {
  Instrument_Serif,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aldi (Aldiyanto) — Software Engineer | Android & Full-Stack Developer",
  description:
    "Portfolio of Aldi (Aldiyanto / aldxynnn) — Informatics Engineering undergraduate (GPA 3.86/4.00) engineering offline-first Android apps (Kotlin, Jetpack Compose), multi-tenant Next.js/NestJS/Spring Boot systems, and real-time platforms.",
  keywords: [
    "Aldiyanto",
    "aldxynnn",
    "Software Engineer",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Full-Stack Developer",
    "Next.js",
    "NestJS",
    "Spring Boot",
    "Portfolio",
  ],
  authors: [{ name: "Aldiyanto", url: "https://github.com/aldxynnn" }],
  openGraph: {
    title: "Aldiyanto — Software Engineer | Android & Full-Stack Developer",
    description:
      "Resilient offline-first Android applications & multi-tenant full-stack web systems built with Kotlin, Jetpack Compose, Next.js, NestJS, Spring Boot, and Supabase.",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${instrument.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased selection:bg-[#1C6450] selection:text-[#FAF9F5]">
        {children}
      </body>
    </html>
  );
}
