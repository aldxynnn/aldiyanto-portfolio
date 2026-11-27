import type {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  GalleryPhoto,
  ProjectItem,
  SkillGroup,
  SystemCapability,
} from "@/types/portfolio";

export const SOUNDTRACK = {
  title: "Wyw my sweetie",
  artist: "nissi, 25Hzz",
  tag: "#JerseyClub",
  spotifyUrl: "https://open.spotify.com/track/6C84em7tTcjuCdSeh7zwM9",
  youtubeOriginalId: "BrUY52CJb9s",
  youtubeSlowedId: "zf5aWUZcaiQ",
  youtubeExtendedId: "icaYfpLaXZA",
  coverArt:
    "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0250432a9b2b84007b3a7116c6",
};

export const PROFILE = {
  name: "Aldi",
  fullName: "Aldiyanto",
  handle: "aldxynnn",
  email: "aldiyantooo94@gmail.com",
  phone: "+62 812-9689-5924",
  whatsappUrl:
    "https://wa.me/6281296895924?text=Halo%20Aldi%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20peluang%20kerja%20sama.",
  linkedinUrl: "https://linkedin.com/in/aldxynnn",
  githubUrl: "https://github.com/aldxynnn",
  location: {
    id: "Serang, Banten — Indonesia",
    en: "Serang, Banten — Indonesia",
  },
  gpa: "3.86 / 4.00",
  semester: {
    id: "Semester 7 · S1 Teknik Informatika",
    en: "7th Semester · B.Sc. Informatics Engineering",
  },
  availability: {
    id: "Terbuka untuk Magang & Entry-Level SWE / Android",
    en: "Open to Internship & Entry-Level SWE / Android",
  },
  cvFiles: [
    {
      id: "fullstack",
      label: {
        id: "CV Full-Stack & SWE",
        en: "Full-Stack & SWE Resume",
      },
      sublabel: {
        id: "Next.js, NestJS, Backend & Android",
        en: "Next.js, NestJS, Backend & Android",
      },
      href: "/cv/CV_Aldiyanto_FullStack_SWE.pdf",
    },
    {
      id: "android",
      label: {
        id: "CV Android Developer",
        en: "Android Developer Resume",
      },
      sublabel: {
        id: "Kotlin, Jetpack Compose, Offline-First",
        en: "Kotlin, Jetpack Compose, Offline-First",
      },
      href: "/cv/CV_Aldiyanto_Android.pdf",
    },
    {
      id: "general",
      label: {
        id: "CV Umum (Software Engineering)",
        en: "General Software Engineering CV",
      },
      sublabel: {
        id: "Ringkasan End-to-End Engineering",
        en: "End-to-End Engineering Overview",
      },
      href: "/cv/CV_Aldiyanto_General.pdf",
    },
  ],
};

export const UI_COPY = {
  nav: {
    about: { id: "Tentang", en: "About" },
    work: { id: "Proyek", en: "Work" },
    stack: { id: "Keahlian", en: "Capabilities" },
    background: { id: "Pengalaman", en: "Background" },
    credentials: { id: "Sertifikasi", en: "Credentials" },
    journal: { id: "Jurnal Visual", en: "Journal" },
    contact: { id: "Kontak", en: "Contact" },
    cta: { id: "Hubungi Saya", en: "Get in Touch" },
    searchHint: { id: "Navigasi cepat", en: "Quick jump" },
  },
  hero: {
    kicker: {
      id: "Software Engineer · Android & Full-Stack",
      en: "Software Engineer · Android & Full-Stack",
    },
    headlineLead: {
      id: "Membangun sistem Android & Web yang",
      en: "Engineering Android & Full-Stack systems",
    },
    headlineItalic: {
      id: "tangguh di lapangan.",
      en: "built for real operations.",
    },
    bio: {
      id: "Mahasiswa semester 7 Teknik Informatika (IPK 3,86/4,00) yang merancang aplikasi end-to-end dengan arsitektur offline-first, backend multi-tenant, komunikasi real-time WebSocket, hingga automated testing.",
      en: "Final-year Informatics Engineering undergraduate (GPA 3.86/4.00) building production-minded systems across native Android (Kotlin/Compose), multi-tenant backends, real-time WebSocket ops, and automated testing.",
    },
    primaryCta: {
      id: "Lihat Karya Pilihan",
      en: "Explore Selected Work",
    },
    secondaryCta: {
      id: "Unduh CV",
      en: "Download CV",
    },
    scrollLabel: {
      id: "Gulir untuk menelusuri arsitektur karya",
      en: "Scroll to inspect engineered systems",
    },
    metrics: [
      {
        value: "08",
        label: { id: "Sistem End-to-End", en: "End-to-End Systems" },
      },
      {
        value: "3.86",
        label: { id: "IPK / 4.00 UNSERA", en: "GPA / 4.00 UNSERA" },
      },
      {
        value: "05",
        label: { id: "Aplikasi Live Deploy", en: "Live Deployments" },
      },
    ],
  },
  about: {
    eyebrow: { id: "01 / PROFIL & PENDEKATAN", en: "01 / PROFILE & APPROACH" },
    headingLead: {
      id: "Bukan sekadar antarmuka—saya merancang",
      en: "Beyond interfaces—I architect",
    },
    headingItalic: {
      id: "alur kerja yang benar-benar berjalan.",
      en: "workflows that hold up in production.",
    },
    p1: {
      id: "Berawal dari pengalaman langsung di lantai produksi perangkat keras dan infrastruktur jaringan MikroTik, saya memahami bagaimana teknologi digunakan dalam kondisi operasional nyata—termasuk saat koneksi tidak stabil atau pengguna memiliki peran akses berbeda.",
      en: "Starting from hands-on hardware assembly QA and MikroTik network troubleshooting gave me an instinct for real-world operational constraints—where networks drop, devices vary, and role boundaries matter.",
    },
    p2: {
      id: "Saat ini saya memfokuskan keahlian pada pengembangan native Android dengan Kotlin & Jetpack Compose serta full-stack web dengan Next.js, NestJS, Spring Boot, FastAPI, dan Supabase—memastikan setiap proyek terstruktur rapi dari skema database hingga CI/CD.",
      en: "Today I focus on native Android with Kotlin & Jetpack Compose alongside full-stack platforms using Next.js, NestJS, Spring Boot, FastAPI, and Supabase—bringing disciplined schema design, RBAC, and CI/CD to every build.",
    },
    pillars: [
      {
        num: "01",
        title: {
          id: "Arsitektur Offline-First",
          en: "Offline-First Architecture",
        },
        body: {
          id: "Antrean aksi lokal dengan Room & sinkronisasi latar belakang WorkManager agar teknisi lapangan dan driver tetap produktif tanpa sinyal.",
          en: "Local Room action queues paired with WorkManager background synchronization so field technicians and fleet drivers operate reliably offline.",
        },
      },
      {
        num: "02",
        title: {
          id: "Multi-Tenant, RBAC & Real-Time",
          en: "Multi-Tenant, RBAC & Real-Time",
        },
        body: {
          id: "Isolasi data antar-tenant, Row Level Security PostgreSQL, autentikasi JWT, antrean BullMQ, dan pembaruan GPS/event via WebSocket.",
          en: "Tenant-scoped access, PostgreSQL Row Level Security, JWT auth interceptors, Redis/BullMQ background jobs, and live WebSocket telemetry.",
        },
      },
      {
        num: "03",
        title: {
          id: "Disiplin Kualitas & Pengujian",
          en: "Testing & Release Discipline",
        },
        body: {
          id: "Unit test JUnit & Vitest, Android UI instrumentation test, E2E Playwright, kontainerisasi Docker, serta pipeline CI GitHub Actions.",
          en: "JUnit & Vitest suites, Android UI instrumentation tests, Playwright E2E coverage, Dockerized backends, and GitHub Actions CI pipelines.",
        },
      },
    ],
    stats: [
      { value: "8+", label: { id: "Proyek Terbangun", en: "Systems Built" } },
      { value: "5", label: { id: "Live di Vercel", en: "Live on Vercel" } },
      { value: "3.86", label: { id: "IPK Kumulatif", en: "Cumulative GPA" } },
      { value: "5", label: { id: "Sertifikasi Teknis", en: "Certifications" } },
    ],
  },
  work: {
    eyebrow: { id: "02 / KARYA & STUDI KASUS", en: "02 / SELECTED WORK" },
    headingLead: {
      id: "Sistem nyata dari",
      en: "Shipped systems across",
    },
    headingItalic: {
      id: "mobile hingga cloud.",
      en: "mobile, web & backend.",
    },
    subtitle: {
      id: "Setiap proyek dibangun untuk memecahkan skenario operasional spesifik—lengkap dengan dokumentasi arsitektur, repository GitHub, dan demo langsung.",
      en: "Each project addresses a concrete operational workflow—engineered end-to-end with documented architecture, GitHub source, and live demos.",
    },
    filters: {
      all: { id: "Semua", en: "All" },
      android: { id: "Android / Kotlin", en: "Android / Kotlin" },
      fullstack: { id: "Full-Stack Web", en: "Full-Stack Web" },
      crossplatform: { id: "Flutter", en: "Flutter" },
    },
    featuredLabel: { id: "Proyek Unggulan", en: "Flagship Systems" },
    archiveLabel: { id: "Karya Teknikal Lainnya", en: "Additional Engineering Projects" },
    inspectCaseStudy: { id: "Bedah Arsitektur", en: "Inspect Architecture" },
    liveDemo: { id: "Demo Langsung", en: "Live Demo" },
    sourceCode: { id: "Kode Sumber", en: "Source Code" },
    modal: {
      problem: { id: "Konteks & Tantangan", en: "Context & Challenge" },
      solution: { id: "Pendekatan Teknis", en: "Engineering Approach" },
      highlights: { id: "Implementasi Kunci", en: "Key Implementations" },
      architecture: { id: "Arsitektur Sistem", en: "System Architecture" },
      stack: { id: "Teknologi Utama", en: "Core Tech Stack" },
      closeHint: { id: "Tekan Esc untuk menutup", en: "Press Esc to close" },
    },
  },
  stack: {
    eyebrow: { id: "03 / KAPABILITAS TEKNIS", en: "03 / TECHNICAL CAPABILITIES" },
    headingLead: {
      id: "Fondasi teknologi untuk",
      en: "A pragmatic stack built for",
    },
    headingItalic: {
      id: "skala & keandalan.",
      en: "clarity & reliability.",
    },
    subtitle: {
      id: "Bukan sekadar daftar logo—klik kapabilitas sistem di bawah untuk melihat bagaimana setiap lapisan teknologi saling terhubung di proyek saya.",
      en: "Not a generic logo wall—select a system capability below to trace how each layer connects across my shipped repositories.",
    },
    explorerTitle: {
      id: "Peta Kapabilitas Sistem",
      en: "System Capability Tracer",
    },
    usedInLabel: { id: "Diterapkan pada:", en: "Applied in:" },
  },
  background: {
    eyebrow: { id: "04 / PENDIDIKAN & PENGALAMAN", en: "04 / EDUCATION & EXPERIENCE" },
    headingLead: {
      id: "Disiplin akademik bertemu",
      en: "Academic rigor meets",
    },
    headingItalic: {
      id: "pengalaman lapangan.",
      en: "operational grit.",
    },
    educationTitle: { id: "Pendidikan Formal", en: "Education" },
    experienceTitle: { id: "Pengalaman Industri", en: "Industry Experience" },
    languagesTitle: { id: "Bahasa", en: "Languages" },
    languages: [
      { name: { id: "Bahasa Indonesia", en: "Indonesian" }, level: { id: "Penutur Asli", en: "Native" } },
      { name: { id: "Bahasa Inggris", en: "English" }, level: { id: "Menengah (Teknis & Dokumentasi)", en: "Intermediate (Technical & Docs)" } },
    ],
  },
  credentials: {
    eyebrow: { id: "05 / SERTIFIKASI & PELATIHAN", en: "05 / CERTIFICATIONS" },
    headingLead: {
      id: "Validasi kompetensi",
      en: "Verified technical",
    },
    headingItalic: {
      id: "terstruktur.",
      en: "credentials.",
    },
    subtitle: {
      id: "Pelatihan terfokus pada Mobile Development (Kotlin/Android), Frontend Development, Data Science, Dasar AI, dan Manajemen Proyek.",
      en: "Focused training across Mobile Development (Kotlin/Android), Frontend Engineering, Data Science, AI Fundamentals, and Project Management.",
    },
    viewDetail: { id: "Lihat Detail", en: "Inspect" },
    verifiedBadge: { id: "Tercatat di CV", en: "Verified Credential" },
  },
  journal: {
    eyebrow: {
      id: "06 / BEYOND THE CODE · JURNAL VISUAL",
      en: "06 / BEYOND THE CODE · VISUAL JOURNAL",
    },
    headingLead: {
      id: "Di luar baris kode—",
      en: "Beyond the terminal—",
    },
    headingItalic: {
      id: "ruang, cahaya & jeda.",
      en: "frames, light & quiet perspective.",
    },
    subtitle: {
      id: "Kumpulan potret kurasi di sela membangun perangkat lunak. Klik foto mana saja untuk melihat detail dalam tampilan sinema lengkap dengan soundtrack pilihan.",
      en: "Curated frames captured away from the keyboard. Select any photograph to open the cinema viewer paired with its soundtrack.",
    },
    soundtrackHint: {
      id: "Klik foto untuk membuka & memutar",
      en: "Click any photo to view & play",
    },
    modes: {
      sheet: { id: "Contact Sheet", en: "Contact Sheet" },
      stack: { id: "Tumpukan Interaktif", en: "Interactive Stack" },
    },
    filters: {
      all: { id: "Semua", en: "All" },
      architecture: { id: "Arsitektur & Kota", en: "Architecture & City" },
      afterhours: { id: "Malam & Cahaya", en: "After Hours" },
      candid: { id: "Candid & Gerak", en: "Candid & Motion" },
    },
    stackHint: {
      id: "Geser kartu ke kiri/kanan atau klik foto teratas untuk membuka layar penuh + musik.",
      en: "Drag the top print left/right or tap it to open the full cinema lightbox with music.",
    },
    openFrame: { id: "Buka & Putar Musik", en: "Open with Soundtrack" },
    lightbox: {
      nowPlaying: { id: "Sedang Memutar", en: "Now Playing" },
      paused: { id: "Dijeda · Klik Play", en: "Paused · Tap Play" },
      loading: { id: "Menyiapkan Audio...", en: "Loading Audio..." },
      tapToUnmute: {
        id: "Klik Play jika browser menahan autoplay",
        en: "Tap Play if browser pauses autoplay",
      },
      original: { id: "Original", en: "Original" },
      slowed: { id: "Slowed", en: "Slowed" },
      localAudio: { id: "Audio Lokal", en: "Local Audio" },
      keyboardHint: {
        id: "← → Ganti foto · Spasi Play/Pause · Esc Tutup",
        en: "← → Switch photo · Space Play/Pause · Esc Close",
      },
    },
  },
  contact: {
    eyebrow: { id: "07 / KONTAK & KOLABORASI", en: "07 / GET IN TOUCH" },
    headingLead: { id: "Mari berdiskusi tentang", en: "Let's talk about your" },
    headingItalic: { id: "tim & proyek Anda.", en: "next engineering role." },
    subtitle: {
      id: "Saya terbuka untuk peluang magang (internship), posisi entry-level Android Developer, Full-Stack Developer, maupun Software Engineer.",
      en: "Available for Software Engineering, Android Developer, Backend, and Full-Stack Web internships or entry-level engineering roles.",
    },
    copyEmail: { id: "Salin Email", en: "Copy Email" },
    copied: { id: "Email tersalin!", en: "Email copied!" },
    directChannels: { id: "Kanal Langsung", en: "Direct Channels" },
    form: {
      title: { id: "Kirim Pesan Cepat", en: "Send a Quick Note" },
      name: { id: "Nama Anda", en: "Your Name" },
      namePlaceholder: { id: "Budi Santoso · Recruiter", en: "Alex Rivera · Tech Lead" },
      email: { id: "Email", en: "Email" },
      emailPlaceholder: { id: "nama@perusahaan.com", en: "you@company.com" },
      subject: { id: "Topik", en: "Subject" },
      subjectPlaceholder: { id: "Magang / Entry-Level / Proyek", en: "Role or collaboration inquiry" },
      message: { id: "Pesan", en: "Message" },
      messagePlaceholder: { id: "Ceritakan singkat mengenai peran, tim, atau kebutuhan proyek Anda...", en: "Share a quick overview of the role, team, or project..." },
      submitEmail: { id: "Buka di Email Client", en: "Compose in Mail App" },
      submitWhatsApp: { id: "Kirim via WhatsApp", en: "Send via WhatsApp" },
      sentNotice: {
        id: "Draft pesan siap dikirim! Anda juga bisa langsung menyalin email di sebelah kiri.",
        en: "Message draft opened! You can also copy my email directly on the left.",
      },
      validationError: {
        id: "Mohon isi nama, email, dan pesan terlebih dahulu.",
        en: "Please enter your name, email, and a short message first.",
      },
    },
  },
  footer: {
    tagline: {
      id: "Dirancang dan dibangun sendiri oleh Aldi menggunakan Next.js, TypeScript, dan Tailwind CSS.",
      en: "Designed and engineered by Aldi with Next.js, TypeScript, and Tailwind CSS.",
    },
    backToTop: { id: "Kembali ke atas", en: "Back to top" },
    rights: { id: "Seluruh hak cipta dilindungi.", en: "All rights reserved." },
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "procureflow",
    slug: "procureflow",
    index: "01",
    title: "ProcureFlow",
    subtitle: {
      id: "Platform Multi-Tenant Procurement & Spend Management",
      en: "Multi-Tenant Procurement & Spend Management Platform",
    },
    category: "fullstack",
    featured: true,
    year: "2026",
    role: {
      id: "Full-Stack Software Engineer",
      en: "Full-Stack Software Engineer",
    },
    platform: {
      id: "Web App · Modular Monolith API",
      en: "Web Platform · Modular Monolith API",
    },
    status: { id: "Live Production", en: "Live Deployed" },
    summary: {
      id: "Platform B2B multi-tenant yang mengotomasi siklus pengadaan lengkap—dari Purchase Request, Approval berjenjang, RFQ, Vendor Quotation, Purchase Order, Goods Receipt, hingga Invoice Verification.",
      en: "B2B multi-tenant web platform automating the full procurement golden path—from Purchase Request and multi-step Approval to RFQ, Vendor Quotes, Purchase Order, Goods Receipt, and Invoice Verification.",
    },
    problem: {
      id: "Proses pengadaan di organisasi sering tersebar di spreadsheet dan email, menyulitkan audit trail, isolasi data antar unit/tenant, serta validasi tiga arah antara PO, barang masuk, dan faktur.",
      en: "Organizational procurement often fragments across spreadsheets and ad-hoc emails, breaking audit trails, tenant data isolation, and 3-way verification across POs, receipts, and invoices.",
    },
    solution: {
      id: "Merancang backend modular monolith NestJS dengan PostgreSQL/Prisma yang menegakkan tenant-scoped data access, workflow transaksional, antrean job asinkron Redis/BullMQ, penyimpanan dokumen S3, dan cakupan automated testing plus CI/CD.",
      en: "Architected a NestJS modular monolith backed by PostgreSQL/Prisma enforcing tenant-scoped queries, transactional workflows, Redis/BullMQ background jobs, S3 document storage, and automated test + CI/CD pipelines.",
    },
    highlights: {
      id: [
        "Alur pengadaan end-to-end: PR → Approval → RFQ → Quotation → PO → Goods Receipt → Invoice Verification.",
        "JWT authentication, Role-Based Access Control (RBAC), dan isolasi data ketat per tenant.",
        "Audit logging transaksional, background worker Redis/BullMQ, dan manajemen lampiran dokumen S3.",
        "Dilengkapi automated testing, kontainerisasi Docker, serta pipeline CI/CD GitHub Actions.",
      ],
      en: [
        "End-to-end golden path: PR → Approval → RFQ → Quotes → PO → Goods Receipt → Invoice Verification.",
        "JWT authentication, Role-Based Access Control (RBAC), and strict tenant-scoped data isolation.",
        "Transactional audit logging, Redis/BullMQ background job queues, and S3 document storage.",
        "Backed by automated testing, Docker Compose environments, and GitHub Actions CI/CD.",
      ],
    },
    architecture: [
      {
        layer: "Web Client",
        tech: "Next.js · React · TypeScript",
        detail: {
          id: "Dashboard pengadaan, approval queue, perbandingan penawaran vendor, dan verifikasi invoice.",
          en: "Procurement workspace, approval queues, vendor quote comparisons, and invoice matching.",
        },
      },
      {
        layer: "API Modular Monolith",
        tech: "NestJS · JWT · RBAC",
        detail: {
          id: "Domain terpisah untuk Auth/Tenancy, Procurement, Invoice Verification, dan Audit Log.",
          en: "Isolated domains for Auth/Tenancy, Procurement lifecycles, Invoicing, and Audit Trails.",
        },
      },
      {
        layer: "Data & Async Workers",
        tech: "PostgreSQL · Prisma · Redis · BullMQ · S3",
        detail: {
          id: "Persistensi relasional transaksional, background notifications/jobs, dan storage dokumen.",
          en: "Transactional relational storage, asynchronous queue processing, and object storage.",
        },
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    liveUrl: "https://procure-flow-ivory.vercel.app",
    liveLabel: "procure-flow-ivory.vercel.app",
    githubUrl: "https://github.com/aldxynnn/ProcureFlow",
    mockupKind: "procureflow",
    hasDesktopPreview: true,
    hasMobilePreview: false,
    desktopAssetBasenames: ["procureflow-desktop", "procureflow"],
  },
  {
    id: "aroma-pos",
    slug: "aroma-pos",
    index: "02",
    title: "AROMA POS",
    subtitle: {
      id: "Sistem Pemesanan Mandiri QR & Kasir POS Kuliner UMKM",
      en: "Restaurant QR Self-Ordering & Native Android POS Ecosystem",
    },
    category: "android",
    featured: true,
    year: "2026",
    role: {
      id: "Android & Full-Stack Developer",
      en: "Android & Full-Stack Developer",
    },
    platform: {
      id: "Android Native (Kotlin) · Customer Web · NestJS API",
      en: "Native Android (Kotlin) · Customer Web · NestJS API",
    },
    status: { id: "Live Web + Android POS", en: "Live Web + Android POS" },
    summary: {
      id: "Ekosistem operasional restoran yang menyatukan aplikasi kasir Android native (Jetpack Compose) untuk admin/kasir dengan website pemesanan mandiri via QR meja untuk pelanggan secara real-time.",
      en: "Full restaurant operations ecosystem uniting a native Kotlin/Compose Android POS for cashiers and admins with a QR table self-ordering web app and live order tracking for diners.",
    },
    problem: {
      id: "UMKM kuliner kerap mengalami antrean panjang di kasir, miskomunikasi status dapur, dan pencatatan biaya maupun laporan keuangan harian yang masih manual.",
      en: "Culinary MSMEs struggle with cashier bottlenecks, kitchen queue miscommunication, and fragmented manual expense tracking and daily financial reporting.",
    },
    solution: {
      id: "Membangun tiga komponen terintegrasi: aplikasi Android POS dengan cetak struk native (Android PrintManager) & ekspor PDF, web pelanggan React untuk scan QR meja, dan backend NestJS/Prisma/PostgreSQL dalam Docker.",
      en: "Engineered three cohesive surfaces: an Android POS app with native receipt printing (Android PrintManager) & PDF exports, a React QR customer web app, and a Dockerized NestJS/Prisma/PostgreSQL API.",
    },
    highlights: {
      id: [
        "Android POS kasir & admin: input pesanan manual, antrean dapur, konfirmasi tunai/QRIS, upload foto menu, catat biaya, dan laporan keuangan.",
        "Login JWT dengan Retrofit/OkHttp auth interceptor, cetak struk via Android PrintManager, dan ekspor PDF.",
        "Website pelanggan React untuk scan QR meja dan pelacakan status pesanan secara langsung.",
        "REST API NestJS + Prisma + PostgreSQL yang di-deploy menggunakan Docker dan Vercel.",
      ],
      en: [
        "Native Android POS: manual order entry, live kitchen queue, cash/QRIS verification, menu photo uploads, expense ledger, and financial reports.",
        "JWT auth with Retrofit/OkHttp interceptors, native receipt printing (Android PrintManager), and PDF export.",
        "React customer web portal enabling frictionless QR table self-ordering with live status tracking.",
        "NestJS + Prisma + PostgreSQL backend containerized with Docker alongside Vercel web deployment.",
      ],
    },
    architecture: [
      {
        layer: "Cashier & Admin POS",
        tech: "Kotlin · Jetpack Compose · Material 3 · Coil",
        detail: {
          id: "Antarmuka kasir native, manajemen menu, PrintManager cetak struk, dan laporan PDF.",
          en: "Native cashier interface, menu catalog, Android PrintManager receipts, and PDF reports.",
        },
      },
      {
        layer: "Customer QR Web",
        tech: "React · TypeScript · Vercel",
        detail: {
          id: "Pemesanan mandiri dari meja pelanggan via QR Code lengkap dengan pelacakan status dapur.",
          en: "Tabletop QR self-ordering web flow with live kitchen status tracking.",
        },
      },
      {
        layer: "Core API & Ledger",
        tech: "NestJS · Prisma · PostgreSQL · Docker",
        detail: {
          id: "Orkestrasi order, validasi pembayaran tunai/QRIS, media upload, dan agregasi laporan.",
          en: "Order orchestration, cash/QRIS confirmation, photo uploads, and revenue/expense reporting.",
        },
      },
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Retrofit",
      "OkHttp",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React",
      "Docker",
    ],
    liveUrl: "https://aroma-ayam-goreng-lengkuas.vercel.app/",
    liveLabel: "aroma-ayam-goreng-lengkuas.vercel.app",
    githubUrl: "https://github.com/aldxynnn/kuliner-msme",
    mockupKind: "aroma-pos",
    hasDesktopPreview: true,
    hasMobilePreview: true,
    desktopAssetBasenames: ["aroma-pos-web", "aroma-pos-desktop"],
    mobileAssetBasenames: ["aroma-pos-android", "aroma-pos-mobile"],
  },
  {
    id: "flow",
    slug: "flow",
    index: "03",
    title: "FLOW",
    subtitle: {
      id: "Platform Operasional Armada & Pelacakan Real-Time",
      en: "Real-Time Fleet & Operations Management Platform",
    },
    category: "android",
    featured: true,
    year: "2026",
    role: {
      id: "Android & Backend Engineer",
      en: "Android & Backend Engineer",
    },
    platform: {
      id: "Android Driver App · Web Ops Console · Spring Boot",
      en: "Android Driver App · Web Ops Console · Spring Boot",
    },
    status: { id: "End-to-End CI Verified", en: "End-to-End CI Verified" },
    summary: {
      id: "Sistem operasional armada berbasis peran untuk mengelola siklus perjalanan kendaraan—plan → assign → execute → track → complete—dengan pelacakan GPS real-time WebSocket dan aksi driver offline-first.",
      en: "Role-based internal fleet operations platform covering the full vehicle trip lifecycle—plan → assign → execute → track → complete—with real-time WebSocket GPS telemetry and offline-first driver sync.",
    },
    problem: {
      id: "Operasional kendaraan logistik membutuhkan visibilitas status perjalanan secara langsung di pusat kontrol, sementara driver sering melintasi area minim sinyal saat memperbarui status pengiriman.",
      en: "Fleet operations demand live dispatch visibility across vehicles, yet drivers frequently lose cellular connectivity while executing and updating trip milestones on the road.",
    },
    solution: {
      id: "Menggabungkan backend Kotlin/Spring Boot + PostgreSQL, aliran event real-time via WebSocket, konsol web dispatcher, dan aplikasi Android driver dengan antrean aksi lokal plus sinkronisasi latar belakang WorkManager.",
      en: "Unified a Kotlin/Spring Boot + PostgreSQL backend, real-time WebSocket event streams, a web operations console, and an offline-first Android driver app powered by local queues and WorkManager sync.",
    },
    highlights: {
      id: [
        "Siklus operasional penuh: perencanaan perjalanan, penugasan armada, eksekusi driver, tracking, dan penyelesaian.",
        "Pelacakan GPS dan siaran event perjalanan secara real-time via WebSocket ke konsol web.",
        "Aksi driver offline-first menggunakan antrean lokal dan sinkronisasi otomatis WorkManager.",
        "Role-based authorization dan pipeline GitHub Actions CI untuk pengujian backend serta build Android.",
      ],
      en: [
        "Complete operational loop: trip planning, vehicle dispatch, driver execution, live tracking, and completion.",
        "Real-time GPS coordinates and trip milestone streaming over WebSocket to the web console.",
        "Offline-first driver execution backed by a local action queue and automatic WorkManager sync.",
        "Role-based authorization plus GitHub Actions CI covering backend tests and Android builds.",
      ],
    },
    architecture: [
      {
        layer: "Android Driver App",
        tech: "Kotlin · Jetpack Compose · WorkManager · GPS",
        detail: {
          id: "Eksekusi perjalanan driver dengan ketahanan offline dan pengiriman lokasi berkala.",
          en: "Offline-resilient trip execution with background sync queue and GPS telemetry.",
        },
      },
      {
        layer: "Web Operations Console",
        tech: "Web Console · WebSocket Client",
        detail: {
          id: "Pemantauan armada real-time, penugasan perjalanan, dan kontrol operasional berbasis peran.",
          en: "Live fleet monitoring, trip dispatch board, and role-scoped operational controls.",
        },
      },
      {
        layer: "Backend & CI",
        tech: "Kotlin · Spring Boot · PostgreSQL · GitHub Actions",
        detail: {
          id: "REST + WebSocket broker, otorisasi peran, dan validasi otomatis lewat GitHub Actions.",
          en: "REST + WebSocket event broker, RBAC enforcement, and automated CI validation.",
        },
      },
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Spring Boot",
      "PostgreSQL",
      "WebSocket",
      "WorkManager",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/aldxynnn/FLOW",
    mockupKind: "flow",
    hasDesktopPreview: true,
    hasMobilePreview: true,
    desktopAssetBasenames: ["flow-web", "flow-desktop"],
    mobileAssetBasenames: ["flow-android", "flow-mobile"],
  },
  {
    id: "ritma",
    slug: "ritma",
    index: "04",
    title: "RITMA",
    subtitle: {
      id: "Platform Manajemen Bisnis Kebugaran Multi-Tenant",
      en: "Unified Multi-Tenant Fitness Business Platform",
    },
    category: "crossplatform",
    featured: true,
    year: "2026",
    role: {
      id: "Cross-Platform & Backend Engineer",
      en: "Cross-Platform & Backend Engineer",
    },
    platform: {
      id: "Flutter (Web & Mobile) · Supabase PostgreSQL + RLS",
      en: "Flutter (Web & Mobile) · Supabase PostgreSQL + RLS",
    },
    status: { id: "Live Production", en: "Live Deployed" },
    summary: {
      id: "Platform terpadu untuk gym tradisional, studio butik (Pilates, Yoga, Cycling), hingga fasilitas multi-cabang dengan empat mesin operasional terpisah dan akses QR berotasi bertanda tangan.",
      en: "Unified multi-tenant platform built with Flutter and Supabase for gyms, boutique studios, and multi-branch fitness brands—powered by four decoupled operational engines and signed rotating QR access passes.",
    },
    problem: {
      id: "Bisnis kebugaran sering memakai perangkat terpisah untuk membership, jadwal kelas, akses pintu cabang, dan personal training sehingga aturan hak akses antar-cabang mudah bocor.",
      en: "Fitness operators juggle disconnected tools for memberships, branch access, and studio scheduling—leading to entitlement leaks and inconsistent multi-branch verification.",
    },
    solution: {
      id: "Memisahkan domain ke dalam empat engine operasional yang jelas di atas PostgreSQL + Row Level Security Supabase—termasuk Membership & Entitlement Engine serta Facility Access Engine dengan signed rotating QR dan proteksi double-scan cooldown.",
      en: "Separated core domains into four explicit engines backed by Supabase PostgreSQL RLS—including a Membership & Entitlement Engine and a Facility Access Engine with short-lived signed rotating QR passes and double-scan cooldowns.",
    },
    highlights: {
      id: [
        "Arsitektur 4 engine operasional terpisah untuk skalabilitas gym tunggal hingga jaringan multi-cabang.",
        "Membership & Entitlement Engine untuk siklus langganan komersial dan hak akses eksplisit.",
        "Facility Access Engine dengan short-lived signed rotating QR passes, cek kelayakan cabang, dan cooldown double-scan.",
        "Dibangun lintas platform menggunakan Flutter/Dart dengan keamanan data Supabase Row Level Security.",
      ],
      en: [
        "Four decoupled operational engines supporting single studios through multi-branch fitness networks.",
        "Membership & Entitlement Engine governing commercial packages, subscription lifecycles, and explicit access rights.",
        "Facility Access Engine featuring short-lived signed rotating QR passes, branch eligibility checks, and double-scan cooldowns.",
        "Cross-platform Flutter/Dart client deployed on Vercel over Supabase PostgreSQL with Row Level Security.",
      ],
    },
    architecture: [
      {
        layer: "Cross-Platform Client",
        tech: "Flutter · Dart · Responsive Web/Mobile",
        detail: {
          id: "Satu basis kode untuk konsol operasional, member pass, dan pemindaian akses fasilitas.",
          en: "Unified Flutter codebase powering operator consoles, member apps, and check-in flows.",
        },
      },
      {
        layer: "Operational Engines",
        tech: "Entitlement · Access QR · Multi-Branch",
        detail: {
          id: "Pemisahan tanggung jawab ketat antara paket komersial, validasi QR berotasi, dan kontrol cabang.",
          en: "Clear domain isolation across commercial plans, signed rotating QR verification, and branch rules.",
        },
      },
      {
        layer: "Data & Security",
        tech: "Supabase · PostgreSQL · Row Level Security",
        detail: {
          id: "Isolasi multi-tenant langsung di level database PostgreSQL melalui kebijakan RLS.",
          en: "Database-enforced multi-tenant isolation via PostgreSQL Row Level Security policies.",
        },
      },
    ],
    stack: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "Row Level Security",
      "Vercel",
    ],
    liveUrl: "https://ritma-pi.vercel.app",
    liveLabel: "ritma-pi.vercel.app",
    githubUrl: "https://github.com/aldxynnn/Ritma",
    mockupKind: "ritma",
    hasDesktopPreview: true,
    hasMobilePreview: true,
    desktopAssetBasenames: ["ritma-desktop", "ritma-web"],
    mobileAssetBasenames: ["ritma-mobile", "ritma-app"],
  },
  {
    id: "fieldops",
    slug: "fieldops",
    index: "05",
    title: "FieldOps",
    subtitle: {
      id: "Aplikasi Android Offline-First untuk Teknisi Lapangan (v1.0.0)",
      en: "Enterprise Offline-First Android Field Service App (v1.0.0)",
    },
    category: "android",
    featured: false,
    year: "2026",
    role: {
      id: "Android Developer",
      en: "Android Developer",
    },
    platform: {
      id: "Android Native · Node.js REST API",
      en: "Native Android · Node.js REST API",
    },
    status: { id: "v1.0.0 · 6 UI Tests Passed", en: "v1.0.0 · 6 UI Tests Passed" },
    summary: {
      id: "Aplikasi layanan lapangan berbasis MVVM + Hilt untuk manajemen work order, data pelanggan/aset, bukti foto & GPS, serta sinkronisasi latar belakang offline-first.",
      en: "Enterprise-grade MVVM + Hilt Android app for field technicians—covering work orders, customer assets, photo & GPS proof capture, role-based workflows, and offline-first WorkManager sync.",
    },
    problem: {
      id: "Teknisi lapangan sering bekerja di basement atau area terpencil tanpa koneksi internet, namun tetap wajib mencatat progres work order, foto bukti, dan koordinat GPS secara akurat.",
      en: "Field technicians routinely operate in basements or remote sites without reliable data, yet must record work order status updates, photographic evidence, and GPS timestamps without data loss.",
    },
    solution: {
      id: "Menerapkan Room database lokal + antrean aksi offline yang disinkronisasi otomatis oleh WorkManager ke REST API Node.js ber-JWT dengan 4 peran (Administrator, Manager, Dispatcher, Technician), divalidasi dengan unit test & 6 Android UI test.",
      en: "Built a Room-backed offline action queue synchronized automatically via WorkManager to a JWT-secured Node.js API supporting 4 roles (Admin, Manager, Dispatcher, Technician), verified with unit tests and 6 passing UI instrumentation tests.",
    },
    highlights: {
      id: [
        "Manajemen work order lengkap: filter, penugasan teknisi, aset pelanggan, catatan, bukti foto, dan GPS.",
        "Arsitektur offline-first dengan Room, antrean aksi lokal, dan sinkronisasi latar belakang WorkManager.",
        "Akses berbasis peran (Administrator, Manager, Dispatcher, Technician) pada REST API Node.js + JWT.",
        "Rilis v1.0.0 dilengkapi unit test dan 6 Android UI instrumentation test yang seluruhnya lulus.",
      ],
      en: [
        "Full work order lifecycle: search/filter, technician assignment, customer & asset records, notes, photo & GPS proof.",
        "Offline-first persistence with Room, local mutation queue, and WorkManager background sync.",
        "Four-role RBAC (Administrator, Manager, Dispatcher, Technician) backed by Node.js + JWT.",
        "Shipped v1.0.0 with unit tests and 6 passing Android UI instrumentation tests.",
      ],
    },
    architecture: [
      {
        layer: "Presentation",
        tech: "Jetpack Compose · Material 3 · MVVM · Hilt",
        detail: {
          id: "UI reaktif berbasis state flow dan dependency injection terstruktur.",
          en: "Reactive StateFlow UI layers with clean Hilt dependency injection.",
        },
      },
      {
        layer: "Offline Engine",
        tech: "Room DB · WorkManager · Sync Queue",
        detail: {
          id: "Menyimpan perubahan lokal saat offline dan melakukan sinkronisasi ulang saat jaringan pulih.",
          en: "Captures field updates locally offline and reconciles reliably once connectivity returns.",
        },
      },
      {
        layer: "API & QA",
        tech: "Retrofit · Node.js · JWT · Android UI Tests",
        detail: {
          id: "Kontrak REST terautentikasi dengan cakupan unit test dan instrumentation test.",
          en: "Authenticated REST API paired with JUnit and Android UI instrumentation verification.",
        },
      },
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "Hilt",
      "Room",
      "WorkManager",
      "Retrofit",
      "Node.js",
      "JWT",
    ],
    githubUrl: "https://github.com/aldxynnn/FieldOps",
    mockupKind: "fieldops",
    hasDesktopPreview: false,
    hasMobilePreview: true,
    mobileAssetBasenames: ["fieldops-android", "fieldops-mobile", "fieldops"],
  },
  {
    id: "thesislab",
    slug: "thesislab",
    index: "06",
    title: "ThesisLab",
    subtitle: {
      id: "Platform Pemesanan Layanan & Pembayaran Midtrans",
      en: "Service Ordering, Revision Workflow & Midtrans Payment Platform",
    },
    category: "fullstack",
    featured: false,
    year: "2026",
    role: {
      id: "Full-Stack Web Developer",
      en: "Full-Stack Web Developer",
    },
    platform: {
      id: "Next.js Full-Stack · Supabase · Midtrans",
      en: "Next.js Full-Stack · Supabase · Midtrans",
    },
    status: { id: "Live Production", en: "Live Deployed" },
    summary: {
      id: "Platform pemesanan layanan akademik dengan dashboard pelanggan & admin, kalkulator harga dinamis, alur revisi, invoice cetak, storage file privat, serta sinkronisasi webhook pembayaran Midtrans.",
      en: "Production Next.js platform featuring customer and admin dashboards, dynamic pricing calculator, revision tracking, private file storage, printable invoices, and automated Midtrans webhook payment sync.",
    },
    problem: {
      id: "Pemesanan layanan jasa yang dikelola lewat chat manual menyulitkan pelacakan status revisi, pengiriman dokumen privat, dan rekonsiliasi status pembayaran pelanggan.",
      en: "Manual chat-based service orders make it hard to track revision cycles, protect uploaded client documents, and keep payment confirmation synchronized with order status.",
    },
    solution: {
      id: "Membangun aplikasi Next.js + Supabase (Auth, PostgreSQL RLS, Private Storage) yang terhubung ke payment gateway Midtrans dengan verifikasi webhook untuk memperbarui status order dan menerbitkan invoice otomatis.",
      en: "Engineered a Next.js + Supabase (Auth, PostgreSQL RLS, Private Storage) web platform integrated with Midtrans payment webhooks that automatically reconcile payment states and generate printable invoices.",
    },
    highlights: {
      id: [
        "Dashboard terpisah untuk pelanggan dan admin dengan manajemen katalog layanan, harga, dan voucher.",
        "Kalkulator harga dinamis, pelacakan progres order, alur revisi terstruktur, dan invoice siap cetak.",
        "Supabase Auth, PostgreSQL dengan Row Level Security, dan bucket storage privat untuk dokumen klien.",
        "Integrasi payment gateway Midtrans dengan webhook otomatis yang menyinkronkan status pembayaran.",
      ],
      en: [
        "Dedicated customer & admin dashboards with admin-managed services, dynamic pricing, and voucher codes.",
        "Interactive pricing calculator, order milestone tracking, revision workflows, and printable invoices.",
        "Supabase Auth, PostgreSQL Row Level Security, and private file storage for confidential proposals/data.",
        "Midtrans payment gateway integration with verified webhook handlers synchronizing order statuses.",
      ],
    },
    architecture: [
      {
        layer: "App & Portals",
        tech: "Next.js · React · TypeScript · Tailwind CSS",
        detail: {
          id: "Portal pelanggan, kalkulator harga, tracking revisi, dan panel manajemen admin.",
          en: "Customer ordering flow, pricing calculator, revision workspace, and admin operations.",
        },
      },
      {
        layer: "Data & Security",
        tech: "Supabase Auth · PostgreSQL RLS · Storage",
        detail: {
          id: "Kebijakan akses per pengguna dan penyimpanan dokumen privat terproteksi.",
          en: "User-isolated database policies and access-controlled private document buckets.",
        },
      },
      {
        layer: "Payments",
        tech: "Midtrans · Next.js API Webhooks · Vercel",
        detail: {
          id: "Sinkronisasi status transaksi real-time dari webhook Midtrans ke database order.",
          en: "Automated transaction reconciliation via verified Midtrans webhook routes.",
        },
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Midtrans",
      "Vercel",
    ],
    liveUrl: "https://thesislab-wheat.vercel.app",
    liveLabel: "thesislab-wheat.vercel.app",
    githubUrl: "https://github.com/aldxynnn/thesislab",
    mockupKind: "thesislab",
    hasDesktopPreview: true,
    hasMobilePreview: false,
    desktopAssetBasenames: ["thesislab-desktop", "thesislab-web", "thesislab"],
  },
  {
    id: "devlens",
    slug: "devlens",
    index: "07",
    title: "DevLens",
    subtitle: {
      id: "Platform Analisis Kesehatan Repository GitHub",
      en: "GitHub Repository Intelligence & Health Analyzer",
    },
    category: "fullstack",
    featured: false,
    year: "2026",
    role: {
      id: "Full-Stack Developer",
      en: "Full-Stack Developer",
    },
    platform: {
      id: "Next.js · Prisma · PostgreSQL · Vitest & Playwright",
      en: "Next.js · Prisma · PostgreSQL · Vitest & Playwright",
    },
    status: { id: "Live + E2E Tested", en: "Live + E2E Tested" },
    summary: {
      id: "Aplikasi web yang menganalisis repository GitHub publik lewat GitHub REST API secara deterministik dan menyajikan laporan skor kesehatan di 5 dimensi beserta rekomendasi perbaikan prioritas.",
      en: "Web intelligence tool that inspects public GitHub repositories via the GitHub REST API, scores five engineering health dimensions deterministically, and persists prioritized recommendations.",
    },
    problem: {
      id: "Developer dan reviewer sering membutuhkan evaluasi cepat terhadap kualitas dokumentasi, cakupan testing, dan maintainability sebuah repository tanpa audit manual yang memakan waktu.",
      en: "Engineers and reviewers often need a rapid, objective snapshot of a repository's documentation, testing posture, and maintainability without tedious manual inspection.",
    },
    solution: {
      id: "Membangun pipeline pengumpulan sinyal terukur dari GitHub REST API, deteksi ekosistem otomatis, rule-based scoring 5 dimensi, persistensi PostgreSQL/Prisma, dan pengujian unit + E2E lewat Vitest serta Playwright.",
      en: "Built a bounded GitHub REST API ingestion pipeline with ecosystem detection, deterministic 5-dimension scoring, PostgreSQL/Prisma persistence, and full Vitest + Playwright test suites.",
    },
    highlights: {
      id: [
        "Analisis otomatis struktur repo, dokumentasi, testing, code quality, dan maintainability.",
        "Ecosystem detection dan rule-based scoring deterministik lengkap dengan rekomendasi aksi prioritas.",
        "Penyimpanan riwayat analisis ke PostgreSQL melalui Prisma ORM.",
        "Diuji menyeluruh menggunakan Vitest (unit) dan Playwright (end-to-end), live di Vercel.",
      ],
      en: [
        "Evaluates repository structure, documentation, testing signals, code quality, and maintainability.",
        "Automatic ecosystem detection with deterministic rule-based scoring and actionable next steps.",
        "Persists generated health reports in PostgreSQL via Prisma ORM.",
        "Verified with Vitest unit tests and Playwright E2E coverage; deployed on Vercel.",
      ],
    },
    architecture: [
      {
        layer: "Analysis UI",
        tech: "Next.js · TypeScript · Tailwind CSS",
        detail: {
          id: "Input URL repo publik, visualisasi skor 5 dimensi, dan daftar rekomendasi terprioritas.",
          en: "Public repo URL intake, 5-axis health report visualization, and prioritized fixes.",
        },
      },
      {
        layer: "Scoring Engine",
        tech: "GitHub REST API · Deterministic Rules",
        detail: {
          id: "Pengumpulan metadata terukur, deteksi ekosistem, dan kalkulasi skor transparan.",
          en: "Bounded metadata collection, stack detection, and transparent heuristic scoring.",
        },
      },
      {
        layer: "Persistence & QA",
        tech: "PostgreSQL · Prisma · Vitest · Playwright",
        detail: {
          id: "Penyimpanan laporan terstruktur serta jaminan kualitas unit & E2E browser testing.",
          en: "Relational report history safeguarded by Vitest and Playwright end-to-end tests.",
        },
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    liveUrl: "https://devlens-e3a3.vercel.app",
    liveLabel: "devlens-e3a3.vercel.app",
    githubUrl: "https://github.com/aldxynnn/devlens",
    mockupKind: "devlens",
    hasDesktopPreview: true,
    hasMobilePreview: false,
    desktopAssetBasenames: ["devlens-desktop", "devlens-web", "devlens"],
  },
  {
    id: "nexus",
    slug: "nexus",
    index: "08",
    title: "NEXUS",
    subtitle: {
      id: "Aplikasi Produktivitas Android Bertenaga Local AI",
      en: "AI-Powered Android Productivity App (FastAPI + Ollama)",
    },
    category: "android",
    featured: false,
    year: "2026",
    role: {
      id: "Android & AI Backend Developer",
      en: "Android & AI Backend Developer",
    },
    platform: {
      id: "Android Native (Compose) · FastAPI · Ollama (Qwen3 8B)",
      en: "Native Android (Compose) · FastAPI · Ollama (Qwen3 8B)",
    },
    status: { id: "Real App Screenshots", en: "Real App Screenshots" },
    summary: {
      id: "Aplikasi produktivitas Android dengan manajemen tugas, focus session timer, penyimpanan lokal Room, serta asisten AI lokal (Chat, Planner, Insights) yang ditenagai FastAPI dan Ollama Qwen3 8B.",
      en: "Android productivity companion uniting task management, focus timer sessions, Room local persistence, and AI Chat, Planner & Insights powered by a FastAPI backend and local Ollama (Qwen3 8B).",
    },
    problem: {
      id: "Aplikasi to-do biasa hanya menyimpan daftar tanpa membantu pengguna memecah prioritas, menjaga ritme fokus, atau menganalisis pola produktivitas secara privat.",
      en: "Conventional to-do apps remain passive checklists without helping users decompose workloads, sustain deep focus blocks, or review personal productivity insights privately.",
    },
    solution: {
      id: "Menggabungkan Jetpack Compose + Room di sisi klien Android dengan layanan FastAPI/PostgreSQL dan inferensi LLM lokal Ollama (Qwen3 8B) untuk menghadirkan AI Chat, AI Planner, dan AI Insights.",
      en: "Paired a Jetpack Compose + Room Android client with a FastAPI/PostgreSQL backend integrating local Ollama (Qwen3 8B) inference for context-aware AI Chat, Planner, and Insights.",
    },
    highlights: {
      id: [
        "Autentikasi pengguna berbasis akun, manajemen tugas, dan pelacakan sesi fokus (focus timer).",
        "Tiga modul AI terintegrasi: AI Chat assistant, AI Planner pembuat rencana tugas, dan AI Insights.",
        "Persistensi data lokal menggunakan Room Database dan komunikasi API lewat Retrofit/OkHttp.",
        "Backend FastAPI + PostgreSQL terhubung langsung ke model lokal Ollama (Qwen3 8B).",
      ],
      en: [
        "Account-based authentication, structured task management, and interactive focus session timer.",
        "Three integrated AI workflows: AI Chat assistant, AI Planner for task breakdown, and AI Insights.",
        "Local data persistence with Room Database paired with Retrofit/OkHttp API integration.",
        "FastAPI + PostgreSQL backend running private LLM inference via Ollama (Qwen3 8B).",
      ],
    },
    architecture: [
      {
        layer: "Android App",
        tech: "Kotlin · Jetpack Compose · Material 3 · Room",
        detail: {
          id: "Task management, focus timer, dan antarmuka percakapan AI dengan cache lokal Room.",
          en: "Task workflows, focus timer, and conversational AI UI backed by local Room storage.",
        },
      },
      {
        layer: "AI Service Backend",
        tech: "Python · FastAPI · PostgreSQL",
        detail: {
          id: "REST API autentikasi, sinkronisasi tugas, dan orkestrasi prompt untuk fitur AI.",
          en: "Authenticated REST endpoints, task persistence, and prompt orchestration.",
        },
      },
      {
        layer: "Local LLM Inference",
        tech: "Ollama · Qwen3 8B",
        detail: {
          id: "Menghasilkan rencana tugas dan analisis produktivitas secara privat menggunakan LLM lokal.",
          en: "Private on-host LLM inference powering AI Chat, Planner, and productivity insights.",
        },
      },
    ],
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Retrofit",
      "FastAPI",
      "PostgreSQL",
      "Ollama",
    ],
    githubUrl: "https://github.com/aldxynnn/NEXUS",
    mockupKind: "nexus",
    hasDesktopPreview: false,
    hasMobilePreview: true,
    mobileAssetBasenames: [
      "nexus-mobile-1",
      "nexus-mobile-2",
      "nexus-android",
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "android",
    index: "01",
    title: { id: "Android & Mobile", en: "Android & Mobile" },
    subtitle: {
      id: "Native Kotlin & Cross-Platform",
      en: "Native Kotlin & Cross-Platform",
    },
    items: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "MVVM",
      "Hilt",
      "Coroutines & Flow",
      "Room Database",
      "WorkManager",
      "Retrofit & OkHttp",
      "Coil",
      "Flutter & Dart",
    ],
    accentNote: {
      id: "4 aplikasi native Compose + 1 platform Flutter multi-tenant",
      en: "4 native Compose apps + 1 multi-tenant Flutter platform",
    },
  },
  {
    id: "frontend",
    index: "02",
    title: { id: "Frontend & Web", en: "Frontend & Web" },
    subtitle: {
      id: "Antarmuka Cepat & Responsif",
      en: "Fast, Typed Web Interfaces",
    },
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Laravel",
      "HTML5 & CSS3",
    ],
    accentNote: {
      id: "5 aplikasi produksi live di Vercel dengan UX konsisten",
      en: "5 production web apps live on Vercel with typed UI systems",
    },
  },
  {
    id: "backend",
    index: "03",
    title: { id: "Backend & Sistem Real-Time", en: "Backend & Real-Time" },
    subtitle: {
      id: "API Modular & Arsitektur Aman",
      en: "Modular APIs & Secure Architecture",
    },
    items: [
      "NestJS",
      "Spring Boot",
      "Node.js",
      "FastAPI",
      "Python",
      "PHP",
      "REST API",
      "WebSocket",
      "JWT Auth",
      "RBAC",
      "Multi-Tenancy",
    ],
    accentNote: {
      id: "Poliglot backend: TypeScript, Kotlin/JVM, dan Python",
      en: "Polyglot backend engineering across TypeScript, Kotlin, and Python",
    },
  },
  {
    id: "data",
    index: "04",
    title: { id: "Database, Queue & Layanan", en: "Data, Queues & Services" },
    subtitle: {
      id: "Persistensi, Antrean & Pembayaran",
      en: "Relational Data, Workers & Payments",
    },
    items: [
      "PostgreSQL",
      "SQL",
      "Prisma ORM",
      "Supabase (Auth / RLS / Storage)",
      "SQLite",
      "Redis",
      "BullMQ",
      "S3 Storage",
      "Midtrans Webhook",
      "Ollama LLM",
    ],
    accentNote: {
      id: "Desain skema relasional, Row Level Security, dan async worker",
      en: "Relational schema design, RLS isolation, and async workers",
    },
  },
  {
    id: "devops",
    index: "05",
    title: { id: "Testing & DevOps", en: "Testing & DevOps" },
    subtitle: {
      id: "Otomasi Kualitas & Deployment",
      en: "Automated QA & Release Pipelines",
    },
    items: [
      "JUnit",
      "Android UI Tests",
      "Vitest",
      "Jest",
      "Playwright E2E",
      "Supertest",
      "Git & GitHub Actions",
      "Docker",
      "Gradle",
      "Vercel",
      "Android Studio",
    ],
    accentNote: {
      id: "CI pipeline, kontainerisasi Docker, dan pengujian otomatis",
      en: "CI workflows, Dockerized stacks, and unit-to-E2E verification",
    },
  },
];

export const SYSTEM_CAPABILITIES: SystemCapability[] = [
  {
    id: "offline-first",
    label: { id: "Offline-First Sync", en: "Offline-First Sync" },
    description: {
      id: "Menyimpan aksi pengguna ke database lokal saat jaringan terputus dan menyinkronkannya otomatis lewat WorkManager tanpa duplikasi.",
      en: "Persisting mutations locally when offline and reconciling reliably via WorkManager queues once network returns.",
    },
    techTags: ["Room Database", "WorkManager", "Coroutines & Flow", "Kotlin"],
    usedIn: ["FieldOps", "FLOW", "NEXUS"],
  },
  {
    id: "multi-tenant",
    label: { id: "Multi-Tenancy & RBAC", en: "Multi-Tenancy & RBAC" },
    description: {
      id: "Isolasi data antar organisasi serta kontrol peran berlapis di tingkat API maupun Row Level Security PostgreSQL.",
      en: "Strict tenant data scoping and layered role authorization enforced both in API guards and PostgreSQL RLS.",
    },
    techTags: [
      "Multi-Tenancy",
      "RBAC",
      "JWT Auth",
      "Supabase (Auth / RLS / Storage)",
      "PostgreSQL",
    ],
    usedIn: ["ProcureFlow", "RITMA", "ThesisLab", "FieldOps"],
  },
  {
    id: "realtime",
    label: { id: "Real-Time Telemetry", en: "Real-Time Telemetry" },
    description: {
      id: "Streaming posisi GPS armada, event perjalanan, dan pembaruan antrean dapur secara real-time lintas perangkat.",
      en: "Live vehicle GPS streaming, trip state broadcasts, and synchronized kitchen/cashier queues across clients.",
    },
    techTags: ["WebSocket", "Spring Boot", "NestJS", "Jetpack Compose"],
    usedIn: ["FLOW", "AROMA POS"],
  },
  {
    id: "payments-async",
    label: { id: "Webhooks & Async Jobs", en: "Webhooks & Async Jobs" },
    description: {
      id: "Integrasi pembayaran Midtrans berbasis webhook, antrean proses asinkron BullMQ/Redis, serta audit logging transaksional.",
      en: "Verified Midtrans payment webhooks, Redis/BullMQ background workers, and transactional audit trails.",
    },
    techTags: ["Midtrans Webhook", "Redis", "BullMQ", "Prisma ORM"],
    usedIn: ["ThesisLab", "ProcureFlow"],
  },
  {
    id: "testing-ci",
    label: { id: "Automated Testing & CI", en: "Automated Testing & CI" },
    description: {
      id: "Menjaga stabilitas rilis lewat JUnit, Android instrumentation tests, Vitest, Playwright E2E, dan GitHub Actions.",
      en: "Protecting release quality through JUnit, Android UI tests, Vitest, Playwright E2E, and GitHub Actions CI.",
    },
    techTags: [
      "JUnit",
      "Android UI Tests",
      "Vitest",
      "Playwright E2E",
      "Git & GitHub Actions",
      "Docker",
    ],
    usedIn: ["FieldOps", "DevLens", "ProcureFlow", "FLOW"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "unsera",
    institution: "Universitas Serang Raya (UNSERA)",
    shortName: "UNSERA",
    degree: {
      id: "S1 Teknik Informatika (Semester 7)",
      en: "B.Sc. in Informatics Engineering (7th Semester)",
    },
    period: { id: "Okt 2023 — Sekarang", en: "Oct 2023 — Present" },
    highlightLabel: { id: "IPK Kumulatif", en: "Cumulative GPA" },
    highlightValue: "3.86 / 4.00",
    description: {
      id: "Menempuh pendidikan sarjana Teknik Informatika dengan fokus praktis pada Software Engineering, arsitektur aplikasi Android, perancangan basis data relasional, serta pengembangan sistem web full-stack.",
      en: "Pursuing a Bachelor's degree in Informatics Engineering with hands-on focus across Software Engineering, native Android architecture, relational database design, and full-stack web platforms.",
    },
    focusAreas: {
      id: [
        "Software Engineering & End-to-End Architecture",
        "Android Development (Kotlin & Jetpack Compose)",
        "Backend API, Database Design & Automated Testing",
      ],
      en: [
        "Software Engineering & End-to-End Architecture",
        "Native Android Development (Kotlin & Jetpack Compose)",
        "Backend APIs, Database Design & Automated Testing",
      ],
    },
  },
  {
    id: "smkn1",
    institution: "SMKN 1 Kragilan",
    shortName: "SMKN 1",
    degree: {
      id: "Teknik Komputer dan Jaringan (TKJ)",
      en: "Computer & Network Engineering (Vocational)",
    },
    period: { id: "Jul 2019 — Jul 2022", en: "Jul 2019 — Jul 2022" },
    description: {
      id: "Membangun pondasi kuat pada arsitektur perangkat keras komputer, instalasi jaringan LAN, administrasi perangkat MikroTik, dan metodologi troubleshooting sistematis.",
      en: "Built a strong technical foundation in computer hardware architecture, structured LAN cabling, MikroTik networking administration, and methodical systems troubleshooting.",
    },
    focusAreas: {
      id: [
        "Jaringan Komputer & Konfigurasi MikroTik",
        "Perakitan & Diagnostik Perangkat Keras",
      ],
      en: [
        "Computer Networking & MikroTik Configuration",
        "Hardware Diagnostics & Infrastructure Support",
      ],
    },
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "eki-operator",
    role: { id: "Production Operator", en: "Production Operator" },
    company: "PT. Energi Kesejahteraan Indonesia",
    period: { id: "Agu 2022 — Agu 2023", en: "Aug 2022 — Aug 2023" },
    type: { id: "Penuh Waktu · 1 Tahun", en: "Full-Time · 1 Year" },
    summary: {
      id: "Bertanggung jawab atas perakitan, konfigurasi sistem, serta pengujian kualitas perangkat elektronik komputasi sesuai standar mutu produksi.",
      en: "Responsible for hardware assembly, system configuration, quality assurance testing, and diagnostics across computing equipment.",
    },
    bullets: {
      id: [
        "Merakit dan mengonfigurasi PC, laptop, serta proyektor sesuai standar kualitas produksi yang ketat.",
        "Mendukung proses pengujian fungsi (QA testing) dan melakukan troubleshooting perangkat keras maupun perangkat lunak sebelum rilis unit.",
      ],
      en: [
        "Assembled and configured PCs, laptops, and projectors strictly aligned with production quality standards.",
        "Supported functional QA testing and executed systematic hardware/software troubleshooting prior to shipment.",
      ],
    },
    tags: ["Hardware QA", "System Configuration", "Troubleshooting", "Quality Control"],
  },
  {
    id: "eki-intern",
    role: { id: "IT Support Intern (PKL)", en: "IT Support Intern" },
    company: "PT. Energi Kesejahteraan Indonesia",
    period: { id: "Okt 2021 — Jan 2022", en: "Oct 2021 — Jan 2022" },
    type: { id: "Magang Industri · 4 Bulan", en: "Internship · 4 Months" },
    summary: {
      id: "Menangani pemeliharaan infrastruktur IT harian, perangkat jaringan, dan dukungan teknis pengguna di lingkungan operasional perusahaan.",
      en: "Maintained day-to-day IT infrastructure, network hardware, and technical troubleshooting across office operations.",
    },
    bullets: {
      id: [
        "Melakukan troubleshooting perangkat CCTV, printer, dan komputer operasional secara cepat dan terukur.",
        "Melaksanakan instalasi kabel jaringan LAN serta konfigurasi perangkat routing jaringan MikroTik.",
      ],
      en: [
        "Diagnosed and resolved issues across CCTV systems, office printers, and employee workstations.",
        "Executed LAN cabling installations and configured MikroTik networking equipment.",
      ],
    },
    tags: ["MikroTik", "LAN Networking", "IT Support", "CCTV & Hardware"],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "surosowan-mobile",
    slug: "surosowan-mobile",
    title: "Mobile Development (Kotlin / Android)",
    issuer: "Surosowan Cyber",
    category: { id: "Pengembangan Mobile", en: "Mobile Engineering" },
    track: "Android · Kotlin",
    description: {
      id: "Pelatihan intensif pengembangan aplikasi Android menggunakan Kotlin, arsitektur aplikasi modern, dan integrasi komponen mobile.",
      en: "Focused Android development training covering Kotlin fundamentals, modern mobile architecture, and application components.",
    },
    skills: ["Kotlin", "Android", "Mobile Architecture"],
    assetBasename: "surosowan-mobile",
  },
  {
    id: "myskill-frontend",
    slug: "myskill-frontend",
    title: "Frontend Development",
    issuer: "MySkill",
    category: { id: "Pengembangan Web", en: "Frontend Engineering" },
    track: "Web · UI Systems",
    description: {
      id: "Pelatihan pengembangan antarmuka web modern, praktik responsif lintas perangkat, serta struktur komponen frontend yang bersih.",
      en: "Structured frontend engineering certification covering responsive web layouts, modern UI patterns, and clean component structure.",
    },
    skills: ["HTML/CSS", "JavaScript", "Responsive UI"],
    assetBasename: "myskill-frontend",
  },
  {
    id: "dicoding-ai",
    slug: "dicoding-ai",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    category: { id: "Kecerdasan Buatan", en: "Artificial Intelligence" },
    track: "AI Foundations",
    description: {
      id: "Memahami konsep fundamental Artificial Intelligence, Machine Learning, Deep Learning, dan penerapannya pada produk perangkat lunak modern.",
      en: "Foundational concepts of Artificial Intelligence, Machine Learning, Deep Learning, and practical integration in modern software.",
    },
    skills: ["AI Concepts", "Machine Learning Basics", "Data Literacy"],
    assetBasename: "dicoding-ai",
  },
  {
    id: "surosowan-datascience",
    slug: "surosowan-datascience",
    title: "Data Science (Python / Data Analysis)",
    issuer: "Surosowan Cyber",
    category: { id: "Analisis Data", en: "Data Science" },
    track: "Python · Analytics",
    description: {
      id: "Pengolahan, eksplorasi, dan analisis data menggunakan ekosistem Python untuk menghasilkan wawasan yang terstruktur.",
      en: "Data wrangling, exploratory analysis, and structured insight generation using the Python data ecosystem.",
    },
    skills: ["Python", "Data Analysis", "Problem Solving"],
    assetBasename: "surosowan-datascience",
  },
  {
    id: "dicoding-pm",
    slug: "dicoding-pm",
    title: "Belajar Dasar Manajemen Proyek",
    issuer: "Dicoding Indonesia",
    category: { id: "Manajemen Proyek", en: "Project Management" },
    track: "Delivery · Agile",
    description: {
      id: "Metodologi pengelolaan siklus hidup proyek perangkat lunak, perencanaan ruang lingkup, manajemen risiko, dan kolaborasi tim lintas fungsi.",
      en: "Software project lifecycle management covering scope planning, risk mitigation, delivery discipline, and cross-functional collaboration.",
    },
    skills: ["Project Lifecycle", "Scope & Risk", "Team Delivery"],
    assetBasename: "dicoding-pm",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "stone-arches",
    frame: "01",
    src: "/images/gallery/01-stone-arches.jpg",
    title: { id: "Stone & Glass Arches", en: "Stone & Glass Arches" },
    caption: {
      id: "Langkah tenang melintasi fasad batu alam dan kaca arsitektural di siang hari.",
      en: "In stride past textured limestone columns and reflective glass arches.",
    },
    mood: { id: "Arsitektur · Siang", en: "Architecture · Daylight" },
    category: "architecture",
    objectPosition: "50% 92%",
    aspect: "tall",
  },
  {
    id: "canal-night",
    frame: "02",
    src: "/images/gallery/02-canal-night.jpg",
    title: { id: "Canal After Hours", en: "Canal After Hours" },
    caption: {
      id: "Refleksi lampu hangat di permukaan air kanal di bawah langit malam yang tenang.",
      en: "Warm promenade lamps mirrored across dark canal water under a quiet night sky.",
    },
    mood: { id: "Malam · Promenade", en: "Night · Promenade" },
    category: "afterhours",
    objectPosition: "56% 90%",
    aspect: "tall",
  },
  {
    id: "gallery-threshold",
    frame: "03",
    src: "/images/gallery/03-gallery-threshold.jpg",
    title: { id: "Gallery Threshold", en: "Gallery Threshold" },
    caption: {
      id: "Menyeberangi ambang ruang pameran seni dengan cahaya alami yang lembut.",
      en: "Stepping into a sunlit contemporary gallery space between quiet reflections.",
    },
    mood: { id: "Ruang Seni · Eksplorasi", en: "Art Space · Exploration" },
    category: "architecture",
    objectPosition: "50% 85%",
    aspect: "tall",
  },
  {
    id: "open-horizon",
    frame: "04",
    src: "/images/gallery/04-open-horizon.jpg",
    title: { id: "Open Horizon", en: "Open Horizon" },
    caption: {
      id: "Jeda sejenak memandang kanopi hijau dan langit biru cerah untuk menjernihkan pikiran.",
      en: "A calm overlook into green foliage and wide clear sky to reset perspective.",
    },
    mood: { id: "Langit Terbuka · Tenang", en: "Open Sky · Stillness" },
    category: "architecture",
    objectPosition: "50% 96%",
    aspect: "portrait",
  },
  {
    id: "malioboro-night",
    frame: "05",
    src: "/images/gallery/05-malioboro-night.jpg",
    title: { id: "Rainlit Boulevard", en: "Rainlit Boulevard" },
    caption: {
      id: "Langkah santai menyusuri trotoar basah selepas hujan dengan pendar lampu jalan keemasan.",
      en: "An unhurried evening walk along rain-glossed stone and warm streetlamp glow.",
    },
    mood: { id: "Malam · Yogyakarta", en: "Evening · Streetlight" },
    category: "afterhours",
    objectPosition: "46% 94%",
    aspect: "portrait",
  },
  {
    id: "quiet-pause",
    frame: "06",
    src: "/images/gallery/06-quiet-pause.jpg",
    title: { id: "Quiet Pause", en: "Quiet Pause" },
    caption: {
      id: "Momen singkat menyapa dua kucing di tepi jalan setapak—pengingat untuk menikmati hal kecil.",
      en: "Pausing along a shaded walkway to greet two curious cats—appreciating small moments.",
    },
    mood: { id: "Candid · Hangat", en: "Candid · Warmth" },
    category: "candid",
    objectPosition: "48% 72%",
    aspect: "portrait",
  },
  {
    id: "in-transit-1",
    frame: "07",
    src: "/images/gallery/08-in-transit-1.jpg",
    title: { id: "In Transit I", en: "In Transit I" },
    caption: {
      id: "Nuansa beton dingin dan ritme perjalanan sebelum menuju agenda berikutnya.",
      en: "Cool architectural concrete and motion right before heading to the next stop.",
    },
    mood: { id: "Candid · Perjalanan", en: "Candid · Motion" },
    category: "candid",
    objectPosition: "50% 96%",
    aspect: "balanced",
  },
  {
    id: "in-transit-2",
    frame: "08",
    src: "/images/gallery/09-in-transit-2.jpg",
    title: { id: "In Transit II", en: "In Transit II" },
    caption: {
      id: "Bingkai profil bernuansa film jalanan dengan pencahayaan dingin khas ruang parkir kota.",
      en: "Street-film side profile framed in muted slate lighting and quiet momentum.",
    },
    mood: { id: "Candid · Film Tone", en: "Candid · Film Tone" },
    category: "candid",
    objectPosition: "52% 96%",
    aspect: "balanced",
  },
];
