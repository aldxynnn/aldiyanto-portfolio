"use client";

import React from "react";
import {
  Activity,
  CheckCircle2,
  Clock,
  Cpu,
  CreditCard,
  Database,
  FileCheck2,
  GitBranch,
  MapPin,
  QrCode,
  Radio,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Truck,
  WifiOff,
  Wrench,
} from "lucide-react";
import type {
  MockupKind,
  ProjectItem,
  ResolvedProjectAssets,
} from "@/types/portfolio";

interface ProjectVisualProps {
  project: ProjectItem;
  assets?: ResolvedProjectAssets;
  compact?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Bespoke Architectural UI Previews (shown until user drops real PNGs in     */
/* /public/images/projects/ — automatically replaced when real files exist!)  */
/* -------------------------------------------------------------------------- */

function ProcureFlowScreen() {
  const stages = [
    { step: "PR", label: "Request", count: "14", done: true },
    { step: "APR", label: "Approval", count: "09", done: true },
    { step: "RFQ", label: "Quotes", count: "06", active: true },
    { step: "PO", label: "Issued", count: "11", done: false },
    { step: "GRN", label: "Receipt", count: "08", done: false },
    { step: "INV", label: "3-Way Match", count: "05", done: false },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-[#0E1311] p-3.5 text-[#ECF0ED] select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] font-semibold tracking-wider text-emerald-300">
            PROCUREFLOW · TENANT: ACME-ID
          </span>
        </div>
        <span className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-[9px] text-white/70">
          RBAC: APPROVER
        </span>
      </div>

      {/* Golden Path Pipeline */}
      <div className="mt-2.5 grid grid-cols-6 gap-1.5">
        {stages.map((s) => (
          <div
            key={s.step}
            className={`rounded-md border p-1.5 ${
              s.active
                ? "border-emerald-400/60 bg-emerald-500/15"
                : s.done
                  ? "border-white/12 bg-white/5"
                  : "border-white/8 bg-white/[0.02]"
            }`}
          >
            <div className="flex items-center justify-between font-mono text-[8px] text-white/60">
              <span>{s.step}</span>
              <span className={s.active ? "text-emerald-300 font-semibold" : ""}>
                {s.count}
              </span>
            </div>
            <div className="mt-1 truncate text-[9px] font-medium text-white/90">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Quote & Audit Split */}
      <div className="mt-2.5 grid flex-1 grid-cols-12 gap-2">
        <div className="col-span-8 rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <div className="flex items-center justify-between text-[9px] text-white/60">
            <span className="font-mono uppercase">RFQ-2026-041 · Vendor Matrix</span>
            <span className="text-emerald-300">3 Quotes Received</span>
          </div>
          <div className="mt-2 space-y-1.5">
            {[
              { v: "PT Mitra Industri", amt: "Rp 48.200.000", badge: "Lowest" },
              { v: "CV Karya Logistik", amt: "Rp 51.900.000", badge: "SLA 2d" },
              { v: "PT Nusantara Tech", amt: "Rp 54.000.000", badge: "Verified" },
            ].map((row, idx) => (
              <div
                key={row.v}
                className={`flex items-center justify-between rounded px-2 py-1 text-[9.5px] ${
                  idx === 0
                    ? "bg-emerald-500/12 border border-emerald-400/30"
                    : "bg-white/[0.03]"
                }`}
              >
                <span className="truncate font-medium">{row.v}</span>
                <div className="flex items-center gap-1.5 font-mono text-[8.5px]">
                  <span className="text-white/80">{row.amt}</span>
                  <span className="rounded bg-white/10 px-1 py-0.5 text-[7.5px] text-emerald-300">
                    {row.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.03] p-2">
          <div className="font-mono text-[8.5px] text-white/55">AUDIT & QUEUE</div>
          <div className="space-y-1.5 text-[8.5px]">
            <div className="flex items-center gap-1 text-emerald-300">
              <FileCheck2 className="h-3 w-3 shrink-0" />
              <span className="truncate">BullMQ Job #884 OK</span>
            </div>
            <div className="flex items-center gap-1 text-white/75">
              <ShieldCheck className="h-3 w-3 shrink-0 text-emerald-400" />
              <span className="truncate">Tenant Scope Guard</span>
            </div>
            <div className="flex items-center gap-1 text-white/60">
              <Database className="h-3 w-3 shrink-0" />
              <span className="truncate">S3 Invoice PDF Synced</span>
            </div>
          </div>
          <div className="rounded bg-emerald-500/15 px-1.5 py-1 text-center font-mono text-[8px] text-emerald-300">
            CI/CD PASSING
          </div>
        </div>
      </div>
    </div>
  );
}

function AromaWebScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#FBF9F4] p-3.5 text-[#171A18] select-none">
      <div className="flex items-center justify-between border-b border-black/10 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#145A47] font-mono text-[9px] font-bold text-white">
            A
          </div>
          <div>
            <div className="text-[10px] font-bold leading-none">AROMA POS · QR Order</div>
            <div className="font-mono text-[8px] text-black/50">MEJA #07 · LIVE TRACKING</div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[8px] font-semibold text-emerald-800">
          KITCHEN: PREPARING
        </span>
      </div>
      <div className="mt-2.5 grid flex-1 grid-cols-12 gap-2">
        <div className="col-span-7 space-y-1.5">
          {[
            { name: "Ayam Bakar Madu", price: "Rp 32.000", qty: "2x" },
            { name: "Es Kopi Susu Aren", price: "Rp 18.000", qty: "2x" },
            { name: "Tahu Crispy Sambal", price: "Rp 15.000", qty: "1x" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-md border border-black/8 bg-white px-2 py-1.5"
            >
              <div>
                <div className="text-[9.5px] font-semibold">{item.name}</div>
                <div className="font-mono text-[8px] text-black/50">{item.price}</div>
              </div>
              <span className="rounded bg-[#145A47]/10 px-1.5 py-0.5 font-mono text-[8.5px] font-bold text-[#145A47]">
                {item.qty}
              </span>
            </div>
          ))}
        </div>
        <div className="col-span-5 flex flex-col justify-between rounded-lg bg-[#111513] p-2.5 text-white">
          <div className="font-mono text-[8px] text-emerald-300">ORDER #ARM-204</div>
          <div className="space-y-1 text-[8.5px]">
            <div className="flex items-center gap-1 text-emerald-300">
              <CheckCircle2 className="h-2.5 w-2.5" /> Diterima Kasir
            </div>
            <div className="flex items-center gap-1 text-amber-300">
              <Clock className="h-2.5 w-2.5" /> Antrean Dapur (#2)
            </div>
            <div className="flex items-center gap-1 text-white/40">
              <Receipt className="h-2.5 w-2.5" /> Siap Disajikan
            </div>
          </div>
          <div className="border-t border-white/10 pt-1.5 font-mono text-[9px] font-semibold">
            QRIS · Rp 115.000
          </div>
        </div>
      </div>
    </div>
  );
}

function AromaMobileScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#121614] p-2.5 text-white select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
        <span className="font-mono text-[8px] font-semibold text-emerald-300">
          POS KASIR
        </span>
        <span className="rounded bg-emerald-500/20 px-1 py-0.5 font-mono text-[7px] text-emerald-300">
          M3 · KOTLIN
        </span>
      </div>
      <div className="mt-2 rounded-md border border-emerald-400/30 bg-emerald-500/10 p-1.5">
        <div className="font-mono text-[7px] text-emerald-200">OMZET HARI INI</div>
        <div className="mt-0.5 font-mono text-[11px] font-bold">Rp 4.820.000</div>
      </div>
      <div className="mt-2 flex-1 space-y-1">
        {[
          { id: "#204", st: "QRIS OK", tbl: "Meja 07" },
          { id: "#205", st: "TUNAI", tbl: "Takeaway" },
          { id: "#206", st: "DAPUR", tbl: "Meja 03" },
        ].map((o) => (
          <div
            key={o.id}
            className="flex items-center justify-between rounded bg-white/[0.06] px-1.5 py-1 text-[8px]"
          >
            <span className="font-mono font-semibold">{o.id}</span>
            <span className="text-white/60">{o.tbl}</span>
            <span className="rounded bg-white/10 px-1 text-[6.5px] text-emerald-300">
              {o.st}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-1.5 rounded bg-[#145A47] py-1 text-center font-mono text-[7.5px] font-semibold">
        CETAK STRUK · PDF
      </div>
    </div>
  );
}

function FlowWebScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0B100E] p-3.5 text-[#EEF2F0] select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <Truck className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-mono text-[10px] font-semibold tracking-wider">
            FLOW · FLEET OPS CONSOLE
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[8px] text-emerald-300">
          <Radio className="h-3 w-3 animate-pulse" />
          WS LIVE · 12 VEHICLES
        </div>
      </div>
      <div className="mt-2.5 grid flex-1 grid-cols-12 gap-2">
        {/* Vector Telemetry Map */}
        <div className="relative col-span-7 overflow-hidden rounded-lg border border-white/10 bg-[#0F1714] p-2">
          <svg
            viewBox="0 0 220 120"
            className="h-full w-full opacity-90"
            aria-hidden="true"
          >
            <defs>
              <pattern id="fgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.7"
                />
              </pattern>
            </defs>
            <rect width="220" height="120" fill="url(#fgrid)" />
            <path
              d="M 18 96 Q 68 84, 94 56 T 192 26"
              fill="none"
              stroke="#34D399"
              strokeWidth="2.2"
              strokeDasharray="4 3"
            />
            <circle cx="18" cy="96" r="4" fill="#10B981" />
            <circle cx="114" cy="48" r="5" fill="#34D399" />
            <circle cx="114" cy="48" r="10" fill="#34D399" fillOpacity="0.2" />
            <circle cx="192" cy="26" r="4" fill="#F59E0B" />
          </svg>
          <div className="absolute bottom-1.5 left-2 rounded bg-black/70 px-1.5 py-0.5 font-mono text-[7.5px] text-emerald-300">
            TRK-04 · -6.1104, 106.1640 · 58 km/h
          </div>
        </div>
        {/* Trip Dispatch Column */}
        <div className="col-span-5 flex flex-col justify-between space-y-1.5">
          {[
            { id: "TRP-891", route: "Serang → Merak", st: "IN TRANSIT", ok: true },
            { id: "TRP-892", route: "Cilegon → Cikande", st: "ASSIGNED", ok: false },
            { id: "TRP-887", route: "Balaraja → Serang", st: "COMPLETED", ok: true },
          ].map((t) => (
            <div
              key={t.id}
              className="rounded-md border border-white/10 bg-white/[0.04] p-1.5"
            >
              <div className="flex items-center justify-between font-mono text-[8px]">
                <span className="font-semibold text-white">{t.id}</span>
                <span className={t.ok ? "text-emerald-300" : "text-amber-300"}>
                  {t.st}
                </span>
              </div>
              <div className="mt-0.5 truncate text-[8.5px] text-white/65">{t.route}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowMobileScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0F1512] p-2.5 text-white select-none">
      <div className="flex items-center justify-between font-mono text-[7.5px]">
        <span className="text-emerald-300 font-semibold">FLOW DRIVER</span>
        <span className="flex items-center gap-0.5 text-amber-300">
          <RefreshCw className="h-2.5 w-2.5" /> SYNC
        </span>
      </div>
      <div className="mt-2 rounded-md border border-white/10 bg-white/[0.05] p-2">
        <div className="font-mono text-[7px] text-white/55">ACTIVE TRIP</div>
        <div className="mt-0.5 text-[9.5px] font-bold">TRP-891</div>
        <div className="mt-1 flex items-center gap-1 text-[7.5px] text-emerald-300">
          <MapPin className="h-2.5 w-2.5" /> Pelabuhan Merak
        </div>
      </div>
      <div className="mt-2 flex-1 space-y-1 text-[7.5px]">
        <div className="rounded bg-emerald-500/15 px-1.5 py-1 text-emerald-200">
          ✓ Departed Warehouse
        </div>
        <div className="rounded bg-white/[0.06] px-1.5 py-1 text-white/80">
          • GPS Telemetry Active
        </div>
        <div className="rounded bg-amber-500/15 px-1.5 py-1 text-amber-200">
          Queue: 0 Pending Offline
        </div>
      </div>
      <div className="rounded bg-emerald-600 py-1 text-center font-mono text-[7.5px] font-semibold">
        COMPLETE TRIP
      </div>
    </div>
  );
}

function RitmaWebScreen() {
  const engines = [
    { name: "Membership Engine", state: "412 Active" },
    { name: "Facility Access", state: "Rotating QR" },
    { name: "Branch Eligibility", state: "4 Studios" },
    { name: "Supabase RLS", state: "Enforced" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-[#101413] p-2.5 text-[#F2F4F2] select-none sm:p-3.5">
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5 sm:pb-2">
        <div className="flex min-w-0 items-center gap-1.5">
          <Activity className="h-3 w-3 shrink-0 text-emerald-400 sm:h-3.5 sm:w-3.5" />
          <span className="truncate font-mono text-[8.5px] font-bold tracking-wider sm:text-[10px]">
            RITMA · FITNESS OS
          </span>
        </div>
        <span className="shrink-0 rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[7px] text-emerald-300 sm:text-[8px]">
          FLUTTER + RLS
        </span>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-2 gap-1.5 sm:mt-2.5 sm:gap-2">
        {engines.map((e, i) => (
          <div
            key={e.name}
            className="flex flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] p-1.5 sm:p-2"
          >
            <div className="flex items-center justify-between font-mono text-[7px] text-white/45 sm:text-[8px]">
              <span>ENG 0{i + 1}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-[8.5px] font-semibold leading-tight text-white sm:text-[9.5px]">
                {e.name}
              </div>
              <div className="mt-0.5 truncate font-mono text-[7px] text-emerald-300 sm:text-[8px]">
                {e.state}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RitmaMobileScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between bg-[#0E1311] p-2.5 text-white select-none">
      <div className="w-full text-center">
        <div className="font-mono text-[7.5px] tracking-widest text-emerald-300">
          RITMA ACCESS PASS
        </div>
        <div className="text-[9px] font-semibold">All-Branch Studio</div>
      </div>
      <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-emerald-400/40 bg-white p-2 text-[#0E1311]">
        <QrCode className="h-14 w-14" />
      </div>
      <div className="w-full space-y-1">
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex justify-between font-mono text-[7px] text-white/60">
          <span>ROTATING SIG</span>
          <span className="text-emerald-300">21s LEFT</span>
        </div>
      </div>
    </div>
  );
}

function FieldOpsMobileScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#111513] p-3 text-white select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <Wrench className="h-3 w-3 text-emerald-400" />
          <span className="font-mono text-[9px] font-bold">FIELDOPS v1.0.0</span>
        </div>
        <span className="flex items-center gap-1 rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[7.5px] text-amber-300">
          <WifiOff className="h-2.5 w-2.5" /> OFFLINE-FIRST
        </span>
      </div>
      <div className="mt-2.5 space-y-2 flex-1">
        {[
          { wo: "WO-1042", title: "HVAC Compressor Check", sync: "Queued · Room DB" },
          { wo: "WO-1045", title: "Generator Panel Inspect", sync: "GPS + Photo Proof" },
          { wo: "WO-1048", title: "Site Fiber Switch Audit", sync: "Synced · WorkMgr" },
        ].map((item, idx) => (
          <div
            key={item.wo}
            className={`rounded-lg border p-2 ${
              idx === 0
                ? "border-amber-400/35 bg-amber-500/10"
                : "border-white/10 bg-white/[0.04]"
            }`}
          >
            <div className="flex items-center justify-between font-mono text-[8px]">
              <span className="font-semibold">{item.wo}</span>
              <span className={idx === 0 ? "text-amber-300" : "text-emerald-300"}>
                {item.sync}
              </span>
            </div>
            <div className="mt-0.5 text-[9.5px] font-medium text-white/90">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded bg-emerald-500/15 px-2 py-1 font-mono text-[7.5px] text-emerald-300">
        <span>ROLE: TECHNICIAN</span>
        <span>6/6 UI TESTS PASS</span>
      </div>
    </div>
  );
}

function ThesisLabWebScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F9F8F4] p-2.5 text-[#131715] select-none sm:p-3.5">
      <div className="flex items-center justify-between gap-2 border-b border-black/10 pb-1.5 sm:pb-2">
        <span className="truncate font-mono text-[8.5px] font-bold tracking-wider sm:text-[10px]">
          THESISLAB · ORDER & PAYMENT
        </span>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-1.5 py-0.5 font-mono text-[7px] font-semibold text-emerald-800 sm:px-2 sm:text-[8px]">
          <CreditCard className="h-2.5 w-2.5" /> MIDTRANS OK
        </span>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-12 gap-1.5 sm:mt-2.5 sm:gap-2">
        <div className="col-span-7 flex flex-col justify-between rounded-lg border border-black/8 bg-white p-2 sm:p-2.5">
          <div>
            <div className="font-mono text-[7px] text-black/45 sm:text-[8px]">ORDER #TL-2026-88</div>
            <div className="mt-0.5 truncate text-[9px] font-bold sm:text-[10.5px]">
              Data Analysis + Revision
            </div>
          </div>
          <div className="space-y-0.5 font-mono text-[7.5px] sm:space-y-1 sm:text-[8.5px]">
            <div className="flex justify-between">
              <span className="text-black/60">Service Fee</span>
              <span>Rp 450K</span>
            </div>
            <div className="flex justify-between text-emerald-700">
              <span>Voucher</span>
              <span>-Rp 67.5K</span>
            </div>
            <div className="flex justify-between border-t border-black/10 pt-0.5 font-bold sm:pt-1">
              <span>Settled</span>
              <span>Rp 382.5K</span>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex flex-col justify-between rounded-lg bg-[#111513] p-2 text-white sm:p-2.5">
          <div className="font-mono text-[7px] text-emerald-300 sm:text-[8px]">WORKFLOW</div>
          <div className="space-y-0.5 text-[7px] sm:space-y-1 sm:text-[8px]">
            <div className="truncate text-emerald-300">✓ RLS Private File</div>
            <div className="truncate text-emerald-300">✓ Webhook Synced</div>
            <div className="truncate text-white/75">• Revision #1</div>
          </div>
          <div className="rounded bg-white/10 py-0.5 text-center font-mono text-[6.5px] sm:py-1 sm:text-[7.5px]">
            INVOICE PDF
          </div>
        </div>
      </div>
    </div>
  );
}

function DevLensWebScreen() {
  const axes = [
    { label: "Documentation", score: 92 },
    { label: "Testing Signals", score: 86 },
    { label: "Code Quality", score: 90 },
    { label: "Maintainability", score: 84 },
    { label: "Repo Hygiene", score: 88 },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-[#0C100F] p-3.5 text-[#ECF0EE] select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-1.5">
          <GitBranch className="h-3.5 w-3.5 text-emerald-400" />
          <span className="font-mono text-[10px] font-semibold">
            DEVLENS · REPO HEALTH REPORT
          </span>
        </div>
        <span className="font-mono text-[8.5px] text-emerald-300">
          aldxynnn/ProcureFlow
        </span>
      </div>
      <div className="mt-2.5 grid flex-1 grid-cols-12 gap-2.5">
        <div className="col-span-4 flex flex-col items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-500/10 p-2">
          <div className="font-mono text-[8px] text-emerald-200">OVERALL SCORE</div>
          <div className="mt-1 font-mono text-2xl font-bold text-emerald-300">88</div>
          <div className="font-mono text-[7.5px] text-white/60">GRADE A · TS/NEXT</div>
        </div>
        <div className="col-span-8 flex flex-col justify-center space-y-1.5">
          {axes.map((ax) => (
            <div key={ax.label} className="space-y-0.5">
              <div className="flex justify-between font-mono text-[8px]">
                <span className="text-white/75">{ax.label}</span>
                <span className="text-emerald-300">{ax.score}/100</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#145A47] to-[#34D399]"
                  style={{ width: `${ax.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NexusFallbackMobileScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#0D0F16] p-3 text-white select-none">
      <div className="flex items-center gap-1.5">
        <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
        <span className="font-mono text-[9.5px] font-bold">NEXUS AI</span>
      </div>
      <div className="mt-2 rounded-lg border border-indigo-400/30 bg-indigo-500/10 p-2 text-[8.5px]">
        Local Ollama · Qwen3 8B Productivity Copilot
      </div>
      <div className="mt-auto flex items-center gap-1 font-mono text-[7.5px] text-white/60">
        <Cpu className="h-3 w-3" /> FastAPI + Room DB
      </div>
    </div>
  );
}

function renderDesktopFallback(kind: MockupKind) {
  switch (kind) {
    case "procureflow":
      return <ProcureFlowScreen />;
    case "aroma-pos":
      return <AromaWebScreen />;
    case "flow":
      return <FlowWebScreen />;
    case "ritma":
      return <RitmaWebScreen />;
    case "thesislab":
      return <ThesisLabWebScreen />;
    case "devlens":
      return <DevLensWebScreen />;
    default:
      return <ProcureFlowScreen />;
  }
}

function renderMobileFallback(kind: MockupKind) {
  switch (kind) {
    case "aroma-pos":
      return <AromaMobileScreen />;
    case "flow":
      return <FlowMobileScreen />;
    case "ritma":
      return <RitmaMobileScreen />;
    case "fieldops":
      return <FieldOpsMobileScreen />;
    case "nexus":
      return <NexusFallbackMobileScreen />;
    default:
      return <FieldOpsMobileScreen />;
  }
}

/* -------------------------------------------------------------------------- */
/* Hardware Frames                                                            */
/* -------------------------------------------------------------------------- */

export function ProjectDeviceStage({
  project,
  assets,
  compact = false,
}: ProjectVisualProps) {
  const desktopImg = assets?.desktopImages?.[0] ?? null;
  const mobileImages = assets?.mobileImages ?? [];
  const hasRealDualMobile = !project.hasDesktopPreview && mobileImages.length >= 2;

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[#DDDAD0] bg-gradient-to-br from-[#ECEAE2] via-[#E5E2D7] to-[#D9D5C7] ${
        compact ? "h-[268px] p-4 sm:p-5" : "h-[300px] sm:h-[348px] p-4 sm:p-6"
      }`}
    >
      {/* Architectural blueprint subtle grid */}
      <div className="bg-arch-grid-light pointer-events-none absolute inset-0 opacity-70" />

      {/* Case 1: Dual Surface (Desktop Web + Native Mobile App) */}
      {project.hasDesktopPreview && project.hasMobilePreview ? (
        <div className="relative z-10 flex w-full max-w-[548px] items-center justify-center gap-2.5 sm:gap-3.5">
          {/* Desktop Browser Frame (19:10 exact ratio for real screenshots, 16:10 for fallbacks) */}
          <div className="w-[75%] shrink-0 overflow-hidden rounded-xl border border-black/15 bg-[#121514] shadow-[0_24px_48px_-20px_rgba(17,21,19,0.42)] sm:w-[76%]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#1B1F1D] px-2.5 py-1.5 sm:px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white/25 sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25 sm:h-2 sm:w-2" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25 sm:h-2 sm:w-2" />
              <span className="ml-1.5 truncate font-mono text-[8px] text-white/50 sm:text-[8.5px]">
                {project.liveLabel ?? `github.com/aldxynnn/${project.slug}`}
              </span>
            </div>
            <div
              className={`w-full overflow-hidden bg-[#121514] ${
                desktopImg ? "aspect-[19/10]" : "aspect-[16/10]"
              }`}
            >
              {desktopImg ? (
                <img
                  src={desktopImg}
                  alt={`${project.title} web preview`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                renderDesktopFallback(project.mockupKind)
              )}
            </div>
          </div>

          {/* Paired Side-by-Side Android / Mobile Frame (9:20 exact ratio for real 1080x2400 screens!) */}
          <div className="w-[22.5%] min-w-[74px] max-w-[118px] shrink-0 overflow-hidden rounded-[15px] border-[2.5px] border-[#1D2220] bg-[#0B0E0D] shadow-[0_20px_44px_-12px_rgba(0,0,0,0.52)] sm:rounded-[18px] sm:border-[3px]">
            {!mobileImages[0] ? (
              <div className="mx-auto mt-1 h-1 w-7 rounded-full bg-white/15" />
            ) : null}
            <div
              className={`w-full overflow-hidden bg-[#0B0E0D] ${
                mobileImages[0] ? "aspect-[9/20]" : "aspect-[9/17]"
              }`}
            >
              {mobileImages[0] ? (
                <img
                  src={mobileImages[0]}
                  alt={`${project.title} mobile preview`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                renderMobileFallback(project.mockupKind)
              )}
            </div>
          </div>
        </div>
      ) : project.hasDesktopPreview ? (
        /* Case 2: Desktop Web Focus (19:10 exact match for 1908x999 screenshots!) */
        <div
          className={`relative z-10 w-full overflow-hidden rounded-xl border border-black/15 bg-[#121514] shadow-[0_26px_52px_-22px_rgba(17,21,19,0.48)] ${
            compact ? "max-w-[440px]" : "max-w-[530px]"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-[#1B1F1D] px-3 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
              <span className="h-2 w-2 rounded-full bg-white/25" />
            </div>
            <span className="truncate font-mono text-[9px] text-white/50">
              {project.liveLabel ?? `github.com/aldxynnn/${project.slug}`}
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          </div>
          <div
            className={`w-full overflow-hidden bg-[#121514] ${
              desktopImg ? "aspect-[19/10]" : "aspect-[16/10]"
            }`}
          >
            {desktopImg ? (
              <img
                src={desktopImg}
                alt={`${project.title} desktop screenshot`}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              renderDesktopFallback(project.mockupKind)
            )}
          </div>
        </div>
      ) : hasRealDualMobile ? (
        /* Case 3: Mobile-Only with 2 Real 9:20 Screenshots (e.g. NEXUS) */
        <div className="relative z-10 flex items-center justify-center gap-3.5 py-2">
          {mobileImages.slice(0, 2).map((src, idx) => (
            <div
              key={src}
              className={`h-[224px] w-auto overflow-hidden rounded-[20px] border-[3px] border-[#1D2220] bg-[#0B0E0D] shadow-[0_18px_38px_-12px_rgba(0,0,0,0.55)] transition-transform duration-500 ${
                idx === 0 ? "-rotate-2" : "rotate-2"
              }`}
            >
              <img
                src={src}
                alt={`${project.title} Android screen ${idx + 1}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      ) : (
        /* Case 4: Single Android Mobile App Focus (matches NEXUS 224px height cleanly) */
        <div className="relative z-10 flex items-center justify-center py-2">
          {mobileImages[0] ? (
            <div
              className={`w-auto overflow-hidden rounded-[20px] border-[3px] border-[#1D2220] bg-[#0B0E0D] shadow-[0_18px_38px_-12px_rgba(0,0,0,0.55)] ${
                compact ? "h-[224px]" : "h-[268px]"
              }`}
            >
              <img
                src={mobileImages[0]}
                alt={`${project.title} Android preview`}
                className="h-full w-auto object-contain"
              />
            </div>
          ) : (
            <div className="w-[126px] overflow-hidden rounded-[20px] border-[3px] border-[#1D2220] bg-[#0B0E0D] shadow-[0_18px_38px_-12px_rgba(0,0,0,0.55)]">
              <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-white/15" />
              <div className="aspect-[9/16] w-full overflow-hidden">
                {renderMobileFallback(project.mockupKind)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
