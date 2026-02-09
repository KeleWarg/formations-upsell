"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Home,
  FileText,
  ScrollText,
  Building2,
  Lock,
  ArrowRight,
  ChevronDown,
  Info,
  Eye,
  CreditCard,
  User,
  Clock,
  X,
  PartyPopper,
  Bell,
} from "lucide-react";
import { MotionFadeIn, MotionStagger } from "@/components/motion";

// ─── DASHBOARD STATE TYPE ─────────────────────────────────

type DashboardState = "ein-pending" | "ein-received";

// ─── TYPES ────────────────────────────────────────────────

type TaskStatus = "available" | "locked" | "completed";

interface ChecklistTask {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  dotColor: string;
  status: TaskStatus;
  bonusText?: string;
  lockedText?: string;
  partnerNote?: string;
  hasGoToTask?: boolean;
}

// ─── TOP HEADER BAR ──────────────────────────────────────

function TopHeader() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-xl py-md bg-white border-b border-neutral-100 shrink-0">
      <button onClick={() => router.push("/")} className="flex items-center gap-sm hover:opacity-80 transition-opacity cursor-pointer">
        <Image src="/logos/formations-logo.svg" alt="Formations" width={141} height={28} />
      </button>
      <button className="w-[36px] h-[36px] rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors">
        <User className="w-5 h-5" />
      </button>
    </header>
  );
}

// ─── SIDEBAR NAV ──────────────────────────────────────────

function SidebarNav() {
  const navItems = [
    { icon: Home, label: "Dashboard", active: true, hasChevron: false },
    { icon: FileText, label: "Document Hub", active: false, hasChevron: true },
    { icon: ScrollText, label: "Business Licenses", active: false, hasChevron: false },
    { icon: Building2, label: "Company Profile", active: false, hasChevron: false },
  ];

  return (
    <nav className="hidden lg:flex w-[220px] bg-white border-r border-neutral-100 flex-col py-lg shrink-0">
      {navItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <button
            key={i}
            className={`flex items-center gap-md px-xl py-md text-left transition-colors ${
              item.active
                ? "bg-primary-50 text-primary-500 border-l-[3px] border-primary-500"
                : "text-neutral-500 hover:bg-neutral-50 border-l-[3px] border-transparent"
            }`}
          >
            <Icon className="w-[18px] h-[18px] shrink-0" />
            <span className="text-body-sm font-medium flex-1">{item.label}</span>
            {item.hasChevron && <ChevronDown className="w-4 h-4 text-neutral-300" />}
          </button>
        );
      })}
    </nav>
  );
}

// ─── COMPANY HEADER ───────────────────────────────────────

interface CompanyHeaderProps {
  companyName: string;
  orderNumber: string;
  ein?: string;
  lastFourCard?: string;
  dashboardState: DashboardState;
}

function CompanyHeader({ companyName, orderNumber, ein, lastFourCard, dashboardState }: CompanyHeaderProps) {
  const isPending = dashboardState === "ein-pending";

  return (
    <div className="flex flex-col tablet:flex-row tablet:items-center justify-between py-lg tablet:py-xl px-lg tablet:px-2xl bg-white border-b border-neutral-100 gap-md">
      {/* Left: company name + status */}
      <div className="flex flex-col gap-xs">
        <h2 className="text-body-lg tablet:text-title-xs font-bold text-text-dark-blue">{companyName}</h2>
        <div className="flex items-center gap-lg tablet:gap-xl text-body-xs">
          {isPending ? (
            <span className="flex items-center gap-xs text-neutral-500">
              <span className="w-[8px] h-[8px] rounded-full bg-amber-400" />
              Filing In Progress
            </span>
          ) : (
            <span className="flex items-center gap-xs text-neutral-500">
              <span className="w-[8px] h-[8px] rounded-full bg-secondary-400" />
              Registered
            </span>
          )}
          <button className="flex items-center gap-xs text-primary-500 font-medium hover:underline">
            <FileText className="w-3.5 h-3.5" /> Access Company Documents
          </button>
        </div>
      </div>

      {/* Right: order info */}
      <div className="flex flex-wrap items-center gap-lg tablet:gap-2xl text-body-xs">
        <div className="flex flex-col gap-[2px]">
          <span className="text-neutral-300 flex items-center gap-xs">
            Order number <Info className="w-3 h-3" />
          </span>
          <span className="font-medium text-neutral-600 flex items-center gap-xs">
            <FileText className="w-3.5 h-3.5" /> {orderNumber}
          </span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="text-neutral-300 flex items-center gap-xs">
            EIN <Info className="w-3 h-3" />
          </span>
          {isPending ? (
            <span className="font-medium text-amber-600 flex items-center gap-xs">
              <Clock className="w-3.5 h-3.5" /> Pending
            </span>
          ) : (
            <span className="font-medium text-neutral-600 flex items-center gap-xs">
              {ein || "12-3456789"} <Eye className="w-3.5 h-3.5 text-primary-500" />
            </span>
          )}
        </div>
        {lastFourCard && (
          <div className="flex flex-col gap-[2px]">
            <span className="text-neutral-300" />
            <span className="font-medium text-neutral-600 flex items-center gap-xs">
              <CreditCard className="w-3.5 h-3.5" /> **-**{lastFourCard} <Eye className="w-3.5 h-3.5 text-primary-500" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PROGRESS BAR ─────────────────────────────────────────

interface ProgressBarProps {
  completed: number;
  total: number;
}

function ProgressBar({ completed, total }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="flex items-center gap-md flex-1">
      <div className="bg-tertiary-300 text-text-dark-blue text-body-xs font-bold rounded-full px-md py-[2px] whitespace-nowrap">
        {percentage}%
      </div>
      <div className="flex-1 h-[6px] bg-neutral-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-secondary-400 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-body-xs font-medium text-neutral-400 whitespace-nowrap">
        {total - completed} tasks left
      </span>
    </div>
  );
}

// ─── SINGLE CHECKLIST TASK ───────────────────────────────

interface TaskRowProps {
  task: ChecklistTask;
  onGoToTask?: (taskId: number) => void;
}

function TaskRow({ task, onGoToTask }: TaskRowProps) {
  const isLocked = task.status === "locked";
  const isCompleted = task.status === "completed";

  return (
    <div className={`bg-white rounded-lg border border-neutral-100 px-lg tablet:px-xl py-lg ${isLocked ? "opacity-60" : ""}`}>
      <div className="flex items-start gap-md tablet:gap-lg">
        {/* Left: Number or status icon */}
        <div className="w-[28px] h-[28px] flex items-center justify-center shrink-0 mt-[2px]">
          {isCompleted ? (
            <div className="w-7 h-7 rounded-full bg-secondary-500 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ) : isLocked ? (
            <Lock className="w-5 h-5 text-neutral-300" />
          ) : (
            <div className="w-7 h-7 rounded-full border-2 border-primary-500 flex items-center justify-center">
              <span className="text-body-xs font-bold text-primary-500">{task.id}</span>
            </div>
          )}
        </div>

        {/* Middle: Content */}
        <div className="flex-1 flex flex-col gap-[4px] min-w-0">
          {/* Category badge row */}
          <div className="flex items-center gap-sm flex-wrap">
            <span className="flex items-center gap-[4px] text-[11px] font-medium">
              <span className={`w-[6px] h-[6px] rounded-full ${task.dotColor}`} />
              <span className="text-neutral-500">{task.category}</span>
            </span>
            {task.lockedText && (
              <span className="flex items-center gap-[4px] text-[11px] font-medium text-neutral-300">
                <Lock className="w-3 h-3" /> {task.lockedText}
              </span>
            )}
            {task.bonusText && (
              <span className="flex items-center gap-[4px] text-body-xs font-medium text-secondary-500">
                <span className="w-[6px] h-[6px] rounded-full bg-secondary-500" />
                {task.bonusText}
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className={`text-body-sm font-bold leading-[22px] ${
            isLocked ? "text-neutral-400" : "text-text-dark-blue"
          }`}>
            {task.title}
          </h4>

          {/* Description */}
          <p className="text-body-xs text-neutral-400 leading-[18px]">
            {task.description}
          </p>

          {/* Partner note (green bar) */}
          {task.partnerNote && (
            <div className="bg-secondary-500 text-white text-body-xs font-medium px-md py-xs rounded-xs mt-xs inline-block">
              {task.partnerNote}
            </div>
          )}

          {/* Mobile: Go To Task (below content) */}
          {task.hasGoToTask && !isLocked && (
            <button
              onClick={() => onGoToTask?.(task.id)}
              className="tablet:hidden group flex items-center gap-xs text-primary-500 text-body-xs font-medium mt-sm hover:underline"
            >
              Go To Task <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        {/* Desktop: Go To Task (right side) */}
        {task.hasGoToTask && !isLocked && (
          <button
            onClick={() => onGoToTask?.(task.id)}
            className="hidden tablet:flex group items-center gap-xs text-primary-500 text-body-xs font-medium shrink-0 mt-sm hover:underline"
          >
            Go To Task <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── YOUR NEXT STEPS SECTION ─────────────────────────────

function NextStepsSection() {
  return (
    <div className="flex flex-col gap-lg">
      <h2 className="text-[20px] tablet:text-[24px] font-bold text-text-dark-blue">
        Your Next Steps
      </h2>

      {/* Step card */}
      <div className="bg-white rounded-lg border border-neutral-100 p-lg tablet:p-xl">
        {/* Step header */}
        <div className="flex items-center gap-md mb-lg">
          <div className="w-8 h-8 rounded-full border-2 border-primary-500 flex items-center justify-center shrink-0">
            <span className="text-body-xs font-bold text-primary-500">1</span>
          </div>
          <h3 className="text-body-lg font-bold text-text-dark-blue">
            Set Your My Business Checking Account
          </h3>
        </div>

        {/* Advantages badge */}
        <div className="inline-flex items-center gap-xs bg-neutral-50 border border-neutral-100 rounded-full px-md py-xs mb-lg">
          <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.09 6.26L20.18 9l-5.09 3.74L16.82 19 12 15.27 7.18 19l1.73-6.26L3.82 9l6.09-.74z" />
          </svg>
          <span className="text-body-xs font-medium text-text-dark-blue">
            Advantages Of Separating Your Business Account
          </span>
        </div>

        {/* Description + bullets */}
        <p className="text-body-sm text-neutral-500 mb-md">
          Separating your personal and business finances is a necessary step when establishing your business. Open a free business account to:
        </p>
        <ul className="list-disc list-inside space-y-xs text-body-sm text-neutral-500 mb-md">
          <li>
            <strong className="text-text-dark-blue">Save time and money</strong> on your tax filings by simplifying expense tracking.
          </li>
          <li>
            <strong className="text-text-dark-blue">Streamline cash flow management,</strong> and improve budgeting.
          </li>
          <li>
            <strong className="text-text-dark-blue">Protect your personal assets</strong> from business liabilities.
          </li>
        </ul>
        <a href="#" className="text-primary-500 text-body-sm font-medium hover:underline inline-block mb-xl">
          Learn more
        </a>

        {/* Bank partner card */}
        <div className="border border-neutral-200 rounded-lg overflow-hidden">
            {/* Bank logo */}
            <div className="flex items-center justify-center px-xl border-b border-neutral-100">
              <img src="/partners/us-bank.png" alt="U.S. Bank" className="w-[180px] object-contain" />
            </div>

            {/* Bonus banner */}
            <div className="bg-[#E8F5E9] px-lg py-sm flex items-center gap-xs">
              <svg className="w-5 h-5 text-secondary-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-body-sm text-text-dark-blue">
                Open a free checking account and earn a <strong className="text-secondary-600">$400 bonus*</strong>
              </span>
            </div>

            {/* Benefits list */}
            <div className="px-lg py-lg space-y-md">
              {[
                "No monthly maintenance fees",
                "Free mobile card reader with $0 software fee",
                "Free same-day access to funds",
                "Unlimited digital transactions and 25 teller transactions per cycle",
                "Use bill pay in U.S. Bank online or mobile banking to track and pay all your bills",
                "FDIC insured deposits up to $250,000",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-sm">
                  <svg className="w-4 h-4 text-secondary-500 shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-body-xs text-neutral-600">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-100" />

            {/* Social proof */}
            <div className="flex items-center justify-center gap-sm px-lg py-md">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-primary-100 border-2 border-white" />
                <div className="w-7 h-7 rounded-full bg-primary-200 border-2 border-white" />
                <div className="w-7 h-7 rounded-full bg-primary-300 border-2 border-white" />
              </div>
              <span className="text-body-xs text-secondary-500 font-medium">
                Millions of businesses trust U.S. Bank as their banking partner
              </span>
            </div>

            {/* CTA */}
            <div className="px-lg pb-lg flex justify-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-white text-body-sm font-semibold px-2xl py-md rounded-full transition-colors w-full max-w-[320px]">
                Speak with a Banking Specialist
              </button>
            </div>

            {/* Disclaimer */}
            <div className="px-lg pb-lg">
              <p className="text-[10px] text-neutral-400 leading-[14px]">
                <Info className="w-3 h-3 inline-block mr-[2px] -mt-[1px]" />
                Earn a $400 bonus by opening a U.S. Bank Business Essentials Account with promo code Q4AFL25 and complete qualifying activities, subject to certain terms and limitations.{" "}
                <a href="#" className="underline">See full details</a>.
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

// ─── EIN RECEIVED BANNER ─────────────────────────────────

function EINReceivedBanner() {
  return (
    <div className="bg-[#E8F5E9] border border-secondary-200 rounded-lg px-lg py-md flex items-center gap-md mb-lg">
      <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center shrink-0">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-body-sm font-bold text-text-dark-blue">
          Your EIN has been received!
        </p>
        <p className="text-body-xs text-neutral-500">
          Your EIN is ready — complete your business bank account setup to start accepting payments.
        </p>
      </div>
    </div>
  );
}

// ─── EIN RECEIVED MODAL ─────────────────────────────────

interface EINReceivedModalProps {
  companyName: string;
  onDismiss: () => void;
  onSetUpBank: () => void;
}

function EINReceivedModal({ companyName, onDismiss, onSetUpBank }: EINReceivedModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onDismiss} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-[480px] mx-auto overflow-hidden">
        {/* Close button */}
        <button
          onClick={onDismiss}
          className="absolute top-md right-md w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4 text-neutral-500" />
        </button>

        {/* Green celebration header */}
        <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 px-xl pt-xl pb-lg text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-md">
            <Bell className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-title-sm font-bold text-white mb-xs">
            Your EIN is ready!
          </h2>
          <p className="text-body-sm text-white/80">
            Great news for {companyName}
          </p>
        </div>

        {/* Content */}
        <div className="px-xl py-xl">
          {/* EIN display */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg px-lg py-md flex items-center justify-between mb-xl">
            <div>
              <span className="text-body-xs text-neutral-400 block">Employer Identification Number</span>
              <span className="text-title-xs font-bold text-text-dark-blue tracking-wide">12-3456789</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-secondary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          {/* Forwarded notice */}
          <div className="flex items-start gap-sm bg-primary-50 border border-primary-100 rounded-lg px-md py-md mb-xl">
            <Info className="w-4 h-4 text-primary-500 shrink-0 mt-[2px]" />
            <p className="text-body-xs text-neutral-600">
              We&apos;ve forwarded your EIN to <strong>U.S. Bank</strong> to expedite your business checking account setup.
            </p>
          </div>

          {/* Recommended next step */}
          <p className="text-body-xs font-semibold text-neutral-400 uppercase tracking-wide mb-md">
            Recommended Next Step
          </p>

          {/* US Bank mini card */}
          <div className="border border-neutral-200 rounded-lg p-md flex items-center gap-md mb-xl">
            <div className="w-[50px] h-[50px] rounded-sm overflow-hidden bg-neutral-100 shrink-0">
              <img src="/partners/us-bank.png" alt="U.S. Bank" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-body-sm font-bold text-text-dark-blue">Open a Business Checking Account</p>
              <p className="text-body-xs text-secondary-500 font-medium">Earn a $400 bonus*</p>
            </div>
          </div>

          {/* CTAs */}
          <button
            onClick={onSetUpBank}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white text-body-sm font-semibold py-md rounded-full transition-colors mb-sm"
          >
            Set Up Your Business Bank Account
          </button>
          <button
            onClick={onDismiss}
            className="w-full text-primary-500 text-body-sm font-medium py-sm hover:underline"
          >
            I&apos;ll do this later
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── EIN PENDING MODAL ──────────────────────────────────

interface EINPendingModalProps {
  companyName: string;
  onDismiss: () => void;
}

function EINPendingModal({ companyName, onDismiss }: EINPendingModalProps) {
  const handleViewChecklist = () => {
    onDismiss();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onDismiss} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-[480px] mx-auto overflow-hidden">
        {/* Close button */}
        <button
          onClick={onDismiss}
          className="absolute top-md right-md w-8 h-8 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 px-xl pt-xl pb-lg text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-md">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-title-sm font-bold text-white mb-xs">
            Your LLC Filing Is In Progress!
          </h2>
          <p className="text-body-sm text-white/80">
            {companyName} is on its way
          </p>
        </div>

        {/* Content */}
        <div className="px-xl py-xl">
          {/* Status info */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-lg py-md flex items-center gap-md mb-xl">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-body-sm font-bold text-text-dark-blue">EIN Pending</p>
              <p className="text-body-xs text-neutral-500">We&apos;ll notify you as soon as it&apos;s received from the IRS.</p>
            </div>
          </div>

          {/* What to do in the meantime */}
          <p className="text-body-xs font-semibold text-neutral-400 uppercase tracking-wide mb-md">
            While You Wait
          </p>
          <p className="text-body-sm text-neutral-600 mb-lg">
            Get a head start on setting up your business. Your launch checklist has tasks you can complete right now, including opening a business bank account.
          </p>

          {/* Checklist preview */}
          <div className="border border-neutral-200 rounded-lg p-md space-y-sm mb-lg">
            {[
              { label: "Set up a business bank account", highlight: true },
              { label: "Get business insurance", highlight: false },
              { label: "Review your license requirements", highlight: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-sm">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${item.highlight ? "border-primary-500" : "border-neutral-300"}`}>
                  <span className={`text-[10px] font-bold ${item.highlight ? "text-primary-500" : "text-neutral-300"}`}>{i + 1}</span>
                </div>
                <span className={`text-body-xs ${item.highlight ? "font-medium text-text-dark-blue" : "text-neutral-400"}`}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* US Bank mini upsell */}
          <div className="border border-secondary-200 bg-[#F6FBF6] rounded-lg p-md flex items-center gap-md mb-xl">
            <div className="w-[44px] h-[44px] rounded-sm overflow-hidden bg-white border border-neutral-100 shrink-0 flex items-center justify-center">
              <img src="/partners/us-bank.png" alt="U.S. Bank" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-body-xs font-bold text-text-dark-blue leading-tight">Open a Free Business Checking Account</p>
              <p className="text-body-xs text-secondary-500 font-medium">Earn a $400 bonus*</p>
            </div>
            <svg className="w-4 h-4 text-secondary-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          {/* CTA */}
          <button
            onClick={handleViewChecklist}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white text-body-sm font-semibold py-md rounded-full transition-colors mb-sm"
          >
            View Your Business Launch Checklist
          </button>
          <button
            onClick={onDismiss}
            className="w-full text-primary-500 text-body-sm font-medium py-sm hover:underline"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MOBILE BOTTOM NAV ───────────────────────────────────

function MobileBottomNav() {
  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: FileText, label: "Documents", active: false },
    { icon: ScrollText, label: "Licenses", active: false },
    { icon: Building2, label: "Profile", active: false },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 flex items-center justify-around py-sm px-md z-50">
      {navItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <button
            key={i}
            className={`flex flex-col items-center gap-[2px] px-sm py-xs rounded-md transition-colors ${
              item.active ? "text-primary-500" : "text-neutral-400"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ─── MAIN DASHBOARD ──────────────────────────────────────

interface TaskDashboardProps {
  companyName?: string;
  dashboardState?: DashboardState;
}

export default function TaskDashboard({ companyName = "Taylor Tacos, LLC", dashboardState = "ein-pending" }: TaskDashboardProps) {
  const router = useRouter();
  const [showPendingModal, setShowPendingModal] = useState(dashboardState === "ein-pending");
  const [showReceivedModal, setShowReceivedModal] = useState(dashboardState === "ein-received");
  const [pendingModalDismissed, setPendingModalDismissed] = useState(false);

  useEffect(() => {
    if (dashboardState === "ein-received") {
      setShowReceivedModal(true);
      setShowPendingModal(false);
    } else if (dashboardState === "ein-pending") {
      setShowPendingModal(true);
      setShowReceivedModal(false);
      setPendingModalDismissed(false);
    }
  }, [dashboardState]);

  // Auto-trigger EIN received modal 8 seconds after the pending modal is closed
  useEffect(() => {
    if (pendingModalDismissed && dashboardState === "ein-pending") {
      const timer = setTimeout(() => {
        setShowReceivedModal(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [pendingModalDismissed, dashboardState]);

  const isPending = dashboardState === "ein-pending";

  // Tasks differ based on dashboard state
  const tasks: ChecklistTask[] = isPending
    ? [
        {
          id: 1,
          title: "Set Up My U.S. Bank Business Checking Account",
          description: "Separating your personal and business finances is a necessary step when establishing your business.",
          category: "Banking",
          categoryColor: "bg-primary-50 text-primary-500",
          dotColor: "bg-primary-500",
          status: "available",
          bonusText: "Earn $400 bonus",
          hasGoToTask: true,
        },
        {
          id: 2,
          title: "File Your Beneficial Ownership Information Report",
          description: "Required federal filing for all LLCs — available once your EIN is issued.",
          category: "Compliance",
          categoryColor: "bg-neutral-100 text-neutral-500",
          dotColor: "bg-neutral-500",
          status: "locked",
          lockedText: "Available After EIN",
        },
        {
          id: 3,
          title: `Protect ${companyName} With Business Insurance`,
          description: "Separating your personal and business finances is a necessary step when establishing your business.",
          category: "Risk management",
          categoryColor: "bg-quaternary-50 text-quaternary-500",
          dotColor: "bg-quaternary-500",
          status: "available",
          hasGoToTask: true,
        },
        {
          id: 4,
          title: "Access Your Business Compliance Documents",
          description: "View your formation documents once your state filing is approved.",
          category: "Compliance",
          categoryColor: "bg-neutral-100 text-neutral-500",
          dotColor: "bg-neutral-500",
          status: "locked",
          lockedText: "Available After EIN",
        },
        {
          id: 5,
          title: "View Your Customized Business License Report",
          description: "Separating your personal and business finances is a necessary step when establishing your business.",
          category: "Compliance",
          categoryColor: "bg-neutral-100 text-neutral-500",
          dotColor: "bg-neutral-500",
          status: "available",
        },
        {
          id: 6,
          title: "Discover Your Business License Requirements",
          description: "Separating your personal and business finances is a necessary step when establishing your business.",
          category: "Licensing",
          categoryColor: "bg-primary-50 text-primary-500",
          dotColor: "bg-primary-500",
          status: "completed",
        },
      ]
    : [
        // EIN Received — US Bank resurfaced as top priority, previously locked tasks now available
        {
          id: 1,
          title: "Set Up My U.S. Bank Business Checking Account",
          description: "Your EIN is ready — complete your bank account setup to start accepting payments.",
          category: "Banking",
          categoryColor: "bg-primary-50 text-primary-500",
          dotColor: "bg-primary-500",
          status: "available",
          bonusText: "Earn $400 bonus",
          partnerNote: "Your EIN has been forwarded to U.S. Bank",
          hasGoToTask: true,
        },
        {
          id: 2,
          title: "File Your Beneficial Ownership Information Report",
          description: "Required federal filing for all LLCs. Your EIN is now available to complete this step.",
          category: "Compliance",
          categoryColor: "bg-neutral-100 text-neutral-500",
          dotColor: "bg-neutral-500",
          status: "available",
          hasGoToTask: true,
        },
        {
          id: 3,
          title: `Protect ${companyName} With Business Insurance`,
          description: "Separating your personal and business finances is a necessary step when establishing your business.",
          category: "Risk management",
          categoryColor: "bg-quaternary-50 text-quaternary-500",
          dotColor: "bg-quaternary-500",
          status: "available",
          hasGoToTask: true,
        },
        {
          id: 4,
          title: "Access Your Business Compliance Documents",
          description: "Your formation documents are now available for download.",
          category: "Compliance",
          categoryColor: "bg-neutral-100 text-neutral-500",
          dotColor: "bg-neutral-500",
          status: "available",
          hasGoToTask: true,
        },
        {
          id: 5,
          title: "View Your Customized Business License Report",
          description: "Separating your personal and business finances is a necessary step when establishing your business.",
          category: "Compliance",
          categoryColor: "bg-neutral-100 text-neutral-500",
          dotColor: "bg-neutral-500",
          status: "available",
        },
        {
          id: 6,
          title: "Discover Your Business License Requirements",
          description: "Separating your personal and business finances is a necessary step when establishing your business.",
          category: "Licensing",
          categoryColor: "bg-primary-50 text-primary-500",
          dotColor: "bg-primary-500",
          status: "completed",
        },
      ];

  const completedCount = tasks.filter((t) => t.status === "completed").length;

  const handleGoToTask = (taskId: number) => {
    if (taskId === 1) {
      router.push("/bank-upsell");
    }
  };

  const handleModalSetUpBank = () => {
    setShowReceivedModal(false);
    setTimeout(() => {
      document.getElementById("next-steps")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      {/* EIN Pending Modal */}
      {showPendingModal && (
        <EINPendingModal
          companyName={companyName}
          onDismiss={() => {
            setShowPendingModal(false);
            setPendingModalDismissed(true);
          }}
        />
      )}

      {/* EIN Received Modal */}
      {showReceivedModal && (
        <EINReceivedModal
          companyName={companyName}
          onDismiss={() => setShowReceivedModal(false)}
          onSetUpBank={handleModalSetUpBank}
        />
      )}

      {/* Top header */}
      <TopHeader />

      <div className="flex flex-1">
        {/* Sidebar (hidden on mobile) */}
        <SidebarNav />

        {/* Main content area */}
        <div className="flex-1 flex flex-col pb-[72px] lg:pb-0">
          <MotionStagger className="flex-1 flex flex-col">
            {/* Company header */}
            <MotionFadeIn>
              <CompanyHeader
                companyName={companyName}
                orderNumber="BUHU1236389"
                ein="12-3456789"
                lastFourCard="4427"
                dashboardState={dashboardState}
              />
            </MotionFadeIn>

            {/* Checklist section */}
            <MotionFadeIn id="checklist-section" className="flex-1 px-lg tablet:px-2xl py-lg tablet:py-xl max-w-[1100px]">
              {/* EIN Received banner (only in ein-received state) */}
              {!isPending && <EINReceivedBanner />}

              {/* Section title + progress */}
              <div className="flex flex-col gap-sm tablet:gap-md mb-lg tablet:mb-xl">
                <div className="flex flex-col tablet:flex-row tablet:items-center gap-sm tablet:gap-xl">
                  <h1 className="text-[20px] tablet:text-[24px] font-bold text-text-dark-blue">
                    Your Business Launch Checklist
                  </h1>
                  <ProgressBar completed={completedCount} total={tasks.length} />
                </div>
                <p className="text-body-xs tablet:text-body-sm text-neutral-400">
                  {isPending
                    ? `Your LLC filing is in progress. Complete these steps while you wait.`
                    : `Complete these essential steps to take ${companyName} to the next level`}
                </p>
              </div>

              {/* Task list */}
              <MotionStagger className="flex flex-col gap-sm tablet:gap-md">
                {tasks.map((task) => (
                  <MotionFadeIn key={task.id}>
                    <TaskRow task={task} onGoToTask={handleGoToTask} />
                  </MotionFadeIn>
                ))}
              </MotionStagger>

              {/* Prototype-only: state switcher (EIN pending → EIN received) */}
              {isPending && (
                <div className="mt-xl pt-xl border-t border-dashed border-neutral-200">
                  <div className="flex items-center gap-md">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wide">Prototype</span>
                    <button
                      onClick={() => router.push("/task-dashboard?state=ein-received")}
                      className="text-body-xs font-medium text-primary-500 bg-primary-50 px-lg py-sm rounded-full hover:bg-primary-100 transition-colors flex items-center gap-xs"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      Simulate EIN Received
                    </button>
                  </div>
                </div>
              )}
            </MotionFadeIn>

            {/* Your Next Steps section */}
            <MotionFadeIn id="next-steps" className="px-lg tablet:px-2xl py-lg tablet:py-xl max-w-[1100px]">
              <NextStepsSection />
            </MotionFadeIn>
          </MotionStagger>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <MobileBottomNav />
    </div>
  );
}
