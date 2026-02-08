"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─── MINI SCREEN: Accept Payment Prompt ──────────────────

function MiniAcceptPayment() {
  return (
    <div className="w-[260px] bg-white rounded-sm border border-neutral-100 shadow-card overflow-hidden">
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
    <div className="w-[260px] bg-white rounded-sm border border-neutral-100 shadow-card overflow-hidden">
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
        <div className="w-[200px] h-[5px] bg-text-dark-blue rounded-full mx-auto mb-[3px]" />
        <div className="w-[140px] h-[5px] bg-text-dark-blue rounded-full mx-auto" />
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
        <div className="w-[80px] rounded-[3px] bg-info-bg p-[5px] space-y-[3px]">
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

// ─── MINI SCREEN: Task Dashboard ─────────────────────────

function MiniTaskDashboard() {
  return (
    <div className="w-[260px] bg-white rounded-sm border border-neutral-100 shadow-card overflow-hidden">
      <div className="flex">
        {/* Mini sidebar */}
        <div className="w-[20px] bg-white border-r border-neutral-100 flex flex-col items-center py-[6px] gap-[5px]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-[8px] h-[8px] rounded-[2px] ${i === 1 ? "bg-primary-500" : "bg-neutral-200"}`} />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1">
          {/* Company header */}
          <div className="px-[8px] py-[5px] border-b border-neutral-100">
            <div className="w-[80px] h-[5px] bg-text-dark-blue rounded-full mb-[3px]" />
            <div className="flex items-center gap-[4px]">
              <div className="w-[4px] h-[4px] rounded-full bg-secondary-400" />
              <div className="w-[30px] h-[3px] bg-neutral-300 rounded-full" />
            </div>
          </div>
          {/* Progress */}
          <div className="px-[8px] pt-[6px]">
            <div className="flex items-center gap-[4px] mb-[4px]">
              <div className="w-[70px] h-[5px] bg-text-dark-blue rounded-full" />
              <div className="w-[14px] h-[8px] bg-tertiary-300 rounded-full" />
              <div className="flex-1 h-[3px] bg-neutral-100 rounded-full overflow-hidden">
                <div className="w-[30%] h-full bg-secondary-400 rounded-full" />
              </div>
            </div>
          </div>
          {/* Task rows */}
          <div className="px-[8px] pb-[6px] space-y-[3px]">
            {[
              { color: "bg-primary-100", status: "number" },
              { color: "bg-neutral-100", status: "lock" },
              { color: "bg-quaternary-50", status: "number" },
              { color: "bg-neutral-100", status: "lock" },
              { color: "bg-neutral-100", status: "number" },
              { color: "bg-primary-100", status: "check" },
              { color: "bg-secondary-50", status: "check" },
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

// ─── FLOW ARROW ──────────────────────────────────────────

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-xs shrink-0 self-center">
      <span className="text-[10px] font-semibold text-primary-500 bg-primary-50 px-sm py-[2px] rounded-full whitespace-nowrap">
        {label}
      </span>
      <div className="flex items-center">
        <div className="w-[50px] h-[2px] bg-primary-300" />
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
  flowLabel?: string;
}

function FlowScreen({ title, subtitle, href, stepNumber, children, flowLabel }: FlowScreenProps) {
  return (
    <div className="flex flex-col items-center gap-md shrink-0">
      {/* Step badge */}
      <div className="flex items-center gap-sm">
        <div className="w-[28px] h-[28px] rounded-full bg-primary-500 text-white text-body-xs font-bold flex items-center justify-center">
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
      <p className="text-body-xs text-neutral-400 text-center max-w-[240px]">{subtitle}</p>

      {/* Flow label */}
      {flowLabel && (
        <span className="text-[10px] font-semibold text-secondary-600 bg-secondary-50 px-md py-[2px] rounded-full">
          {flowLabel}
        </span>
      )}
    </div>
  );
}

// ─── FLOW DIAGRAM ────────────────────────────────────────

function FlowDiagram({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
      <div className="px-xl py-lg bg-neutral-50 border-b border-neutral-200">
        <h3 className="text-title-xs font-bold text-text-dark-blue">{title}</h3>
        <p className="text-body-xs text-neutral-400 mt-xs">{description}</p>
      </div>
      <div className="p-xl overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────

export default function UserFlows() {
  const [activeFlow, setActiveFlow] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <header className="bg-white border-b border-neutral-100 px-xl py-lg flex items-center justify-between">
        <div>
          <h1 className="text-title-sm font-bold text-text-dark-blue">
            US Bank Upsell — User Flows
          </h1>
          <p className="text-body-sm text-neutral-400 mt-xs">
            Click any screen to view it live. Screens are wired together as a clickable prototype.
          </p>
        </div>
        <Link
          href="/accept-payment-prompt"
          className="text-body-xs font-medium text-primary-500 hover:underline"
        >
          ← Start flow
        </Link>
      </header>

      {/* Tab switcher */}
      <div className="bg-white border-b border-neutral-100 px-xl">
        <div className="flex gap-xl">
          <button
            onClick={() => setActiveFlow(1)}
            className={`py-md text-body-sm font-semibold border-b-2 transition-colors ${
              activeFlow === 1
                ? "border-primary-500 text-primary-500"
                : "border-transparent text-neutral-400 hover:text-neutral-600"
            }`}
          >
            Flow 1: Standalone Upsell
          </button>
          <button
            onClick={() => setActiveFlow(2)}
            className={`py-md text-body-sm font-semibold border-b-2 transition-colors ${
              activeFlow === 2
                ? "border-primary-500 text-primary-500"
                : "border-transparent text-neutral-400 hover:text-neutral-600"
            }`}
          >
            Flow 2: Bundled Upsell
          </button>
        </div>
      </div>

      {/* Flow content */}
      <main className="p-xl">
        {activeFlow === 1 ? (
          <FlowDiagram
            title="Flow 1: Standalone Upsell within Purchase Path"
            description="Customer answers credit card question → views US Bank upsell → proceeds to task dashboard"
          >
            <div className="flex items-start gap-md">
              <FlowScreen
                stepNumber={1}
                title="Accept Payment Prompt"
                subtitle="Customer answers whether they'll accept credit card payments"
                href="/accept-payment-prompt"
              >
                <MiniAcceptPayment />
              </FlowScreen>

              <FlowArrow label="Selects option" />

              <FlowScreen
                stepNumber={2}
                title="Bank Upsell"
                subtitle="US Bank partner offer with benefits — 'Learn More' triggers lead generation"
                href="/bank-upsell"
                flowLabel="Standalone Upsell"
              >
                <MiniBankUpsell />
              </FlowScreen>

              <FlowArrow label="Learn More / No thanks" />

              <FlowScreen
                stepNumber={3}
                title="Task Dashboard"
                subtitle="Business launch checklist — customer sees all tasks including banking setup"
                href="/task-dashboard"
              >
                <MiniTaskDashboard />
              </FlowScreen>
            </div>

            {/* Backend flow annotation */}
            <div className="mt-2xl border-t border-dashed border-neutral-200 pt-xl">
              <p className="text-body-xs font-semibold text-neutral-500 mb-lg">Behind the scenes (on "Learn More"):</p>
              <div className="flex items-center gap-sm flex-wrap">
                {[
                  "Lead Generation Consent Obtained",
                  "User Completes Order + Payment",
                  "Lead Created in DB",
                  "Lead Payload Sent to US Bank",
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
          </FlowDiagram>
        ) : (
          <FlowDiagram
            title="Flow 2: Bundled Upsell within Purchase Path"
            description="Customer sees US Bank offer bundled into the task dashboard directly"
          >
            <div className="flex items-start gap-md">
              <FlowScreen
                stepNumber={1}
                title="Accept Payment Prompt"
                subtitle="Customer answers whether they'll accept credit card payments"
                href="/accept-payment-prompt"
              >
                <MiniAcceptPayment />
              </FlowScreen>

              <FlowArrow label="Selects option" />

              <FlowScreen
                stepNumber={2}
                title="Task Dashboard"
                subtitle="Checklist includes 'Set Up Business Checking' task with the US Bank offer bundled in"
                href="/task-dashboard"
                flowLabel="Bundled Upsell"
              >
                <MiniTaskDashboard />
              </FlowScreen>

              <FlowArrow label="Clicks 'Go To Task'" />

              <FlowScreen
                stepNumber={3}
                title="Bank Upsell"
                subtitle="Same US Bank offer — 'Learn More' triggers lead generation consent"
                href="/bank-upsell"
              >
                <MiniBankUpsell />
              </FlowScreen>
            </div>

            {/* Backend flow annotation */}
            <div className="mt-2xl border-t border-dashed border-neutral-200 pt-xl">
              <p className="text-body-xs font-semibold text-neutral-500 mb-lg">Behind the scenes (on "Learn More"):</p>
              <div className="flex items-center gap-sm flex-wrap">
                {[
                  "Lead Generation Consent Obtained",
                  "User Completes Order + Payment",
                  "Lead Created in DB",
                  "Lead Payload Sent to US Bank",
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
          </FlowDiagram>
        )}

        {/* Quick launch */}
        <div className="mt-xl p-xl bg-white rounded-lg border border-neutral-200">
          <p className="text-body-xs font-semibold text-neutral-500 mb-md">Quick launch — start the flow:</p>
          <div className="flex gap-md">
            <Link
              href="/accept-payment-prompt"
              className="text-body-sm font-medium text-primary-500 bg-primary-50 px-lg py-sm rounded-sm hover:bg-primary-100 transition-colors"
            >
              Start Flow 1 (Accept Payment →)
            </Link>
            <Link
              href="/task-dashboard"
              className="text-body-sm font-medium text-primary-500 bg-primary-50 px-lg py-sm rounded-sm hover:bg-primary-100 transition-colors"
            >
              Start Flow 2 (Task Dashboard →)
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
