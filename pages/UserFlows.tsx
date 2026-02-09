"use client";

import React from "react";
import Link from "next/link";

// ─── MINI SCREEN: Accept Payment Prompt ──────────────────

function MiniAcceptPayment() {
  return (
    <div className="w-[240px] bg-white rounded-sm border border-neutral-100 shadow-card overflow-hidden">
      {/* Mini header */}
      <div className="flex items-center gap-[4px] px-[10px] py-[5px] border-b border-neutral-100">
        <div className="w-[44px] h-[7px] bg-primary-500 rounded-full" />
        <div className="w-px h-[10px] bg-neutral-200" />
        <div className="w-[34px] h-[6px] bg-neutral-300 rounded-full" />
      </div>
      {/* Back */}
      <div className="px-[10px] pt-[6px]">
        <div className="w-[24px] h-[4px] bg-neutral-400 rounded-full" />
      </div>
      {/* Content */}
      <div className="flex flex-col items-center px-[16px] pt-[10px] pb-[10px] gap-[8px]">
        {/* Icon */}
        <div className="w-[16px] h-[12px] rounded-[2px] border border-text-dark-blue" />
        {/* Title */}
        <div className="w-[180px] h-[5px] bg-text-dark-blue rounded-full" />
        <div className="w-[140px] h-[4px] bg-neutral-300 rounded-full" />
        {/* Options */}
        <div className="w-full space-y-[4px] mt-[4px]">
          <div className="h-[14px] rounded-[3px] border border-primary-500 bg-primary-50 flex items-center px-[6px]">
            <div className="w-[80%] h-[3px] bg-neutral-400 rounded-full" />
          </div>
          <div className="h-[14px] rounded-[3px] border border-outline flex items-center px-[6px]">
            <div className="w-[50%] h-[3px] bg-neutral-300 rounded-full" />
          </div>
        </div>
        {/* CTA */}
        <div className="w-[120px] h-[10px] bg-primary-500 rounded-[4px] mt-[2px]" />
      </div>
    </div>
  );
}

// ─── MINI SCREEN: Bank Upsell ────────────────────────────

function MiniBankUpsell() {
  return (
    <div className="w-[240px] bg-white rounded-sm border border-neutral-100 shadow-card overflow-hidden">
      {/* Mini header */}
      <div className="flex items-center gap-[4px] px-[10px] py-[5px] border-b border-neutral-100">
        <div className="w-[44px] h-[7px] bg-primary-500 rounded-full" />
        <div className="w-px h-[10px] bg-neutral-200" />
        <div className="w-[34px] h-[6px] bg-neutral-300 rounded-full" />
        <div className="flex-1" />
        <div className="w-[60px] h-[4px] bg-neutral-200 rounded-full" />
      </div>
      {/* Title */}
      <div className="px-[10px] pt-[8px] pb-[4px] text-center">
        <div className="w-[190px] h-[5px] bg-text-dark-blue rounded-full mx-auto mb-[3px]" />
        <div className="w-[130px] h-[5px] bg-text-dark-blue rounded-full mx-auto" />
      </div>
      {/* Two columns */}
      <div className="flex gap-[6px] px-[10px] pb-[6px]">
        {/* Card */}
        <div className="flex-1 rounded-[3px] border border-outline overflow-hidden">
          <div className="h-[10px] bg-secondary-500 flex items-center justify-center">
            <div className="w-[70px] h-[3px] bg-white/60 rounded-full" />
          </div>
          <div className="p-[5px] space-y-[3px]">
            <div className="flex items-center gap-[3px]">
              <div className="w-[10px] h-[10px] rounded-[2px] bg-neutral-100" />
              <div className="w-[50px] h-[4px] bg-neutral-700 rounded-full" />
              <div className="w-[30px] h-[6px] bg-secondary-50 rounded-full" />
            </div>
            <div className="h-[8px] bg-bonus-bg rounded-[2px]" />
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-[2px]">
                <div className="w-[4px] h-[4px] rounded-full bg-secondary-500 shrink-0" />
                <div className="flex-1 h-[3px] bg-neutral-200 rounded-full" />
              </div>
            ))}
            <div className="flex items-center gap-[3px] pt-[2px] border-t border-neutral-100">
              <div className="w-[4px] h-[4px] rounded-full bg-primary-300" />
              <div className="flex-1 h-[3px] bg-neutral-200 rounded-full" />
            </div>
          </div>
        </div>
        {/* Info panel */}
        <div className="w-[75px] rounded-[3px] bg-info-bg p-[5px] space-y-[3px]">
          <div className="w-[10px] h-[10px] rounded-full bg-secondary-100" />
          <div className="w-full h-[3px] bg-neutral-400 rounded-full" />
          <div className="w-[55px] h-[3px] bg-neutral-400 rounded-full" />
          <div className="space-y-[2px] mt-[3px]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-[2px]">
                <div className="w-[2px] h-[2px] rounded-full bg-neutral-800" />
                <div className="flex-1 h-[2px] bg-neutral-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA row */}
      <div className="flex items-center gap-[8px] px-[10px] pb-[8px] justify-center">
        <div className="w-[70px] h-[10px] bg-primary-500 rounded-[4px]" />
        <div className="w-[36px] h-[4px] bg-primary-300 rounded-full" />
      </div>
    </div>
  );
}

// ─── MINI SCREEN: Task Dashboard (EIN Pending) ──────────

function MiniDashboardPending() {
  return (
    <div className="w-[240px] bg-white rounded-sm border border-neutral-100 shadow-card overflow-hidden">
      <div className="flex">
        {/* Mini sidebar */}
        <div className="w-[20px] bg-white border-r border-neutral-100 flex flex-col items-center py-[6px] gap-[5px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-[8px] h-[8px] rounded-[2px] ${i === 1 ? "bg-primary-500" : "bg-neutral-200"}`} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1">
          {/* Company header with amber dot = filing in progress */}
          <div className="px-[8px] py-[5px] border-b border-neutral-100">
            <div className="w-[80px] h-[5px] bg-text-dark-blue rounded-full mb-[3px]" />
            <div className="flex items-center gap-[4px]">
              <div className="w-[4px] h-[4px] rounded-full bg-amber-400" />
              <div className="w-[40px] h-[3px] bg-neutral-300 rounded-full" />
            </div>
          </div>
          {/* Progress */}
          <div className="px-[8px] pt-[6px]">
            <div className="flex items-center gap-[4px] mb-[4px]">
              <div className="w-[70px] h-[5px] bg-text-dark-blue rounded-full" />
              <div className="w-[14px] h-[8px] bg-tertiary-300 rounded-full" />
              <div className="flex-1 h-[3px] bg-neutral-100 rounded-full overflow-hidden">
                <div className="w-[17%] h-full bg-secondary-400 rounded-full" />
              </div>
            </div>
          </div>
          {/* Task rows — some locked */}
          <div className="px-[8px] pb-[6px] space-y-[3px]">
            {[
              { color: "bg-primary-100", status: "number" },
              { color: "bg-neutral-100", status: "lock" },
              { color: "bg-quaternary-50", status: "number" },
              { color: "bg-neutral-100", status: "lock" },
              { color: "bg-neutral-100", status: "number" },
              { color: "bg-primary-100", status: "check" },
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-[4px] py-[2px] border-b border-neutral-100">
                <div className={`w-[6px] h-[6px] rounded-full shrink-0 ${
                  task.status === "check" ? "bg-secondary-500" : task.status === "lock" ? "bg-neutral-300" : "bg-primary-500"
                }`} />
                <div className={`w-[16px] h-[5px] rounded-[2px] ${task.color}`} />
                <div className="flex-1 h-[3px] bg-neutral-200 rounded-full" />
                {task.status === "number" && <div className="w-[14px] h-[3px] bg-primary-300 rounded-full" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MINI SCREEN: Task Dashboard (EIN Received) ─────────

function MiniDashboardEINReceived() {
  return (
    <div className="w-[240px] bg-white rounded-sm border border-neutral-100 shadow-card overflow-hidden relative">
      <div className="flex">
        {/* Mini sidebar */}
        <div className="w-[20px] bg-white border-r border-neutral-100 flex flex-col items-center py-[6px] gap-[5px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-[8px] h-[8px] rounded-[2px] ${i === 1 ? "bg-primary-500" : "bg-neutral-200"}`} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1">
          {/* Company header with green dot = registered */}
          <div className="px-[8px] py-[5px] border-b border-neutral-100">
            <div className="w-[80px] h-[5px] bg-text-dark-blue rounded-full mb-[3px]" />
            <div className="flex items-center gap-[4px]">
              <div className="w-[4px] h-[4px] rounded-full bg-secondary-400" />
              <div className="w-[30px] h-[3px] bg-neutral-300 rounded-full" />
            </div>
          </div>
          {/* EIN received banner */}
          <div className="mx-[6px] mt-[5px] rounded-[3px] bg-[#E8F5E9] px-[5px] py-[3px] flex items-center gap-[3px]">
            <div className="w-[5px] h-[5px] rounded-full bg-secondary-500 shrink-0" />
            <div className="flex-1 h-[3px] bg-secondary-300 rounded-full" />
          </div>
          {/* Progress */}
          <div className="px-[8px] pt-[5px]">
            <div className="flex items-center gap-[4px] mb-[4px]">
              <div className="w-[70px] h-[5px] bg-text-dark-blue rounded-full" />
              <div className="w-[14px] h-[8px] bg-tertiary-300 rounded-full" />
              <div className="flex-1 h-[3px] bg-neutral-100 rounded-full overflow-hidden">
                <div className="w-[17%] h-full bg-secondary-400 rounded-full" />
              </div>
            </div>
          </div>
          {/* Task rows — all unlocked */}
          <div className="px-[8px] pb-[6px] space-y-[3px]">
            {[
              { color: "bg-primary-100", status: "number", highlight: true },
              { color: "bg-neutral-100", status: "number" },
              { color: "bg-quaternary-50", status: "number" },
              { color: "bg-neutral-100", status: "number" },
              { color: "bg-neutral-100", status: "number" },
              { color: "bg-primary-100", status: "check" },
            ].map((task, i) => (
              <div key={i} className={`flex items-center gap-[4px] py-[2px] border-b border-neutral-100 ${"highlight" in task && task.highlight ? "bg-primary-50 rounded-[2px] px-[2px] -mx-[2px]" : ""}`}>
                <div className={`w-[6px] h-[6px] rounded-full shrink-0 ${
                  task.status === "check" ? "bg-secondary-500" : "bg-primary-500"
                }`} />
                <div className={`w-[16px] h-[5px] rounded-[2px] ${task.color}`} />
                <div className="flex-1 h-[3px] bg-neutral-200 rounded-full" />
                {task.status === "number" && <div className="w-[14px] h-[3px] bg-primary-300 rounded-full" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Overlay modal indicator */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-sm">
        <div className="w-[140px] bg-white rounded-[6px] shadow-lg p-[8px] flex flex-col items-center gap-[4px]">
          <div className="w-[14px] h-[14px] rounded-full bg-secondary-500 flex items-center justify-center">
            <svg className="w-[8px] h-[8px] text-white" viewBox="0 0 12 12" fill="none">
              <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="w-[100px] h-[4px] bg-text-dark-blue rounded-full" />
          <div className="w-[70px] h-[3px] bg-neutral-300 rounded-full" />
          <div className="w-[80px] h-[8px] bg-primary-500 rounded-[3px] mt-[2px]" />
        </div>
      </div>
    </div>
  );
}

// ─── FLOW ARROW ──────────────────────────────────────────

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-xs shrink-0 self-center">
      <span className="text-[10px] font-semibold text-primary-500 bg-primary-50 px-sm py-[2px] rounded-full whitespace-nowrap">
        {label}
      </span>
      <div className="flex items-center">
        <div className="w-[40px] h-[2px] bg-primary-300" />
        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-primary-300" />
      </div>
    </div>
  );
}

// ─── FLOW SCREEN CARD ────────────────────────────────────

interface FlowScreenProps {
  title: string;
  subtitle: string;
  href: string;
  stepNumber: number;
  children: React.ReactNode;
  touchpointLabel?: string;
  touchpointColor?: string;
}

function FlowScreen({ title, subtitle, href, stepNumber, children, touchpointLabel, touchpointColor }: FlowScreenProps) {
  return (
    <div className="flex flex-col items-center gap-md shrink-0">
      {/* Touchpoint badge */}
      {touchpointLabel && (
        <span className={`text-[10px] font-semibold px-md py-[3px] rounded-full ${touchpointColor || "text-secondary-600 bg-secondary-50"}`}>
          {touchpointLabel}
        </span>
      )}

      {/* Step badge */}
      <div className="flex items-center gap-sm">
        <div className="w-[26px] h-[26px] rounded-full bg-primary-500 text-white text-[11px] font-bold flex items-center justify-center">
          {stepNumber}
        </div>
        <span className="text-body-xs font-bold text-text-dark-blue">{title}</span>
      </div>

      {/* Screen preview (clickable) */}
      <Link
        href={href}
        className="group block transition-all hover:scale-[1.02] hover:shadow-lg rounded-sm"
      >
        {children}
        <div className="mt-sm text-center">
          <span className="text-[11px] font-medium text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to view →
          </span>
        </div>
      </Link>

      {/* Description */}
      <p className="text-body-xs text-neutral-400 text-center max-w-[220px]">{subtitle}</p>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────

export default function UserFlows() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-neutral-100 px-xl py-lg">
        <h1 className="text-title-sm font-bold text-text-dark-blue">
          US Bank Upsell — Consolidated User Flow
        </h1>
        <p className="text-body-sm text-neutral-400 mt-xs">
          Single end-to-end journey: LLC Application → Upsell → Dashboard (EIN Pending) → EIN Received → Dashboard (EIN Received).
          Click any screen to view it live.
        </p>
      </header>

      {/* Flow content */}
      <main className="p-xl">
        {/* Flow diagram */}
        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
          <div className="px-xl py-lg bg-neutral-50 border-b border-neutral-200">
            <h3 className="text-title-xs font-bold text-text-dark-blue">
              Consolidated User Journey — 3 US Bank Touchpoints
            </h3>
            <p className="text-body-xs text-neutral-400 mt-xs">
              LLC purchase → In-purchase upsell → Filing submitted → Task dashboard (EIN pending) → EIN received notification → Dashboard updated
            </p>
          </div>

          <div className="p-xl overflow-x-auto">
            <div className="flex items-start gap-md min-w-max">
              {/* Step 1: Accept Payment Prompt */}
              <FlowScreen
                stepNumber={1}
                title="LLC Application"
                subtitle="Customer completes LLC purchase and answers formation questions"
                href="/accept-payment-prompt"
              >
                <MiniAcceptPayment />
              </FlowScreen>

              <FlowArrow label="Completes form" />

              {/* Step 2: Bank Upsell (Touchpoint 1) */}
              <FlowScreen
                stepNumber={2}
                title="In-Purchase Upsell"
                subtitle="US Bank offer appears as a recommended next step for receiving business payments"
                href="/bank-upsell"
                touchpointLabel="Touchpoint 1: In-Purchase"
                touchpointColor="text-white bg-primary-500"
              >
                <MiniBankUpsell />
              </FlowScreen>

              <FlowArrow label="Opt in / Dismiss" />

              {/* Step 3: Dashboard — EIN Pending (Touchpoint 2) */}
              <FlowScreen
                stepNumber={3}
                title="Dashboard (EIN Pending)"
                subtitle="LLC filing submitted. Checklist includes US Bank task as a top recommended action"
                href="/task-dashboard"
                touchpointLabel="Touchpoint 2: Post-Formation"
                touchpointColor="text-secondary-600 bg-secondary-50"
              >
                <MiniDashboardPending />
              </FlowScreen>

              <FlowArrow label="EIN arrives" />

              {/* Step 4: EIN Received Modal + Dashboard (Touchpoint 3) */}
              <FlowScreen
                stepNumber={4}
                title="EIN Received"
                subtitle="Modal notification with EIN. US Bank offer resurfaced as top priority action"
                href="/task-dashboard?state=ein-received"
                touchpointLabel="Touchpoint 3: EIN Received"
                touchpointColor="text-white bg-secondary-500"
              >
                <MiniDashboardEINReceived />
              </FlowScreen>
            </div>

            {/* Touchpoint context annotations */}
            <div className="mt-2xl border-t border-dashed border-neutral-200 pt-xl">
              <p className="text-body-xs font-semibold text-neutral-500 mb-lg">Touchpoint context — user state of mind:</p>
              <div className="grid grid-cols-1 tablet:grid-cols-3 gap-lg">
                <div className="bg-primary-50 rounded-lg p-md">
                  <p className="text-[11px] font-bold text-primary-500 mb-xs">Touchpoint 1: In-Purchase</p>
                  <p className="text-[11px] text-neutral-600 leading-[16px]">
                    &ldquo;I&apos;m setting up my business, what else should I be thinking about to strengthen my liability shield?&rdquo;
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-lg p-md">
                  <p className="text-[11px] font-bold text-secondary-600 mb-xs">Touchpoint 2: Post-Formation</p>
                  <p className="text-[11px] text-neutral-600 leading-[16px]">
                    &ldquo;My LLC is in progress, what else should I be doing while I wait?&rdquo;
                  </p>
                </div>
                <div className="bg-secondary-50 rounded-lg p-md border border-secondary-200">
                  <p className="text-[11px] font-bold text-secondary-600 mb-xs">Touchpoint 3: EIN Received</p>
                  <p className="text-[11px] text-neutral-600 leading-[16px]">
                    &ldquo;My EIN is here! What&apos;s next? I can now open my business bank account.&rdquo; For opted-in users, EIN auto-forwarded to US Bank.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend flow annotation */}
            <div className="mt-xl border-t border-dashed border-neutral-200 pt-xl">
              <p className="text-body-xs font-semibold text-neutral-500 mb-lg">Behind the scenes (lead flow):</p>
              <div className="flex items-center gap-sm flex-wrap">
                {[
                  "User Opts In at Touchpoint 1",
                  "Lead Generation Consent Obtained",
                  "LLC Filing Submitted",
                  "Lead Created in DB",
                  "EIN Received from IRS",
                  "EIN Forwarded to US Bank",
                  "US Bank Agent Reaches Out",
                ].map((step, i, arr) => (
                  <React.Fragment key={i}>
                    <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-md py-xs rounded-full whitespace-nowrap">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <div className="flex items-center">
                        <div className="w-[16px] h-[1px] bg-neutral-300" />
                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-neutral-300" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick launch */}
        <div className="mt-xl p-xl bg-white rounded-lg border border-neutral-200">
          <p className="text-body-xs font-semibold text-neutral-500 mb-md">Jump to any touchpoint:</p>
          <div className="flex gap-md flex-wrap">
            <Link
              href="/accept-payment-prompt"
              className="text-body-sm font-medium text-primary-500 bg-primary-50 px-lg py-sm rounded-sm hover:bg-primary-100 transition-colors"
            >
              Start from Beginning
            </Link>
            <Link
              href="/bank-upsell"
              className="text-body-sm font-medium text-primary-500 bg-primary-50 px-lg py-sm rounded-sm hover:bg-primary-100 transition-colors"
            >
              Touchpoint 1: In-Purchase Upsell
            </Link>
            <Link
              href="/task-dashboard"
              className="text-body-sm font-medium text-primary-500 bg-primary-50 px-lg py-sm rounded-sm hover:bg-primary-100 transition-colors"
            >
              Touchpoint 2: Dashboard (EIN Pending)
            </Link>
            <Link
              href="/task-dashboard?state=ein-received"
              className="text-body-sm font-medium text-primary-500 bg-primary-50 px-lg py-sm rounded-sm hover:bg-primary-100 transition-colors"
            >
              Touchpoint 3: EIN Received
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
