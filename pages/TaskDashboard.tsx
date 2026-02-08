"use client";

import React from "react";
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
} from "lucide-react";
import { MotionFadeIn, MotionStagger } from "@/components/motion";

// ─── TYPES ────────────────────────────────────────────────

type TaskStatus = "available" | "locked" | "completed";

interface ChecklistTask {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  status: TaskStatus;
  bonusText?: string;
  lockedText?: string;
  partnerNote?: string;
  hasGoToTask?: boolean;
}

// ─── TOP HEADER BAR ──────────────────────────────────────

function TopHeader() {
  return (
    <header className="flex items-center justify-between px-xl py-md bg-white border-b border-neutral-100 shrink-0">
      <div className="flex items-center gap-sm">
        <Image src="/logos/formations-logo.svg" alt="Formations" width={141} height={28} />
      </div>
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
    <nav className="hidden tablet:flex w-[220px] bg-white border-r border-neutral-100 flex-col py-lg shrink-0">
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
}

function CompanyHeader({ companyName, orderNumber, ein, lastFourCard }: CompanyHeaderProps) {
  return (
    <div className="flex flex-col tablet:flex-row tablet:items-center justify-between py-lg tablet:py-xl px-lg tablet:px-2xl bg-white border-b border-neutral-100 gap-md">
      {/* Left: company name + status */}
      <div className="flex flex-col gap-xs">
        <h2 className="text-body-lg tablet:text-title-xs font-bold text-text-dark-blue">{companyName}</h2>
        <div className="flex items-center gap-lg tablet:gap-xl text-body-xs">
          <span className="flex items-center gap-xs text-neutral-500">
            <span className="w-[8px] h-[8px] rounded-full bg-secondary-400" />
            Registered
          </span>
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
        {ein && (
          <div className="flex flex-col gap-[2px]">
            <span className="text-neutral-300 flex items-center gap-xs">
              EIN <Info className="w-3 h-3" />
            </span>
            <span className="font-medium text-neutral-600 flex items-center gap-xs">
              {ein} <Eye className="w-3.5 h-3.5 text-primary-500" />
            </span>
          </div>
        )}
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
              <span className={`w-[6px] h-[6px] rounded-full ${task.categoryColor.split(" ")[1]?.replace("text-", "bg-") || "bg-neutral-400"}`} />
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

// ─── MOBILE BOTTOM NAV ───────────────────────────────────

function MobileBottomNav() {
  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: FileText, label: "Documents", active: false },
    { icon: ScrollText, label: "Licenses", active: false },
    { icon: Building2, label: "Profile", active: false },
  ];

  return (
    <nav className="tablet:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 flex items-center justify-around py-sm px-md z-50">
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
}

export default function TaskDashboard({ companyName = "Taylor Tacos, LLC" }: TaskDashboardProps) {
  const router = useRouter();

  const tasks: ChecklistTask[] = [
    {
      id: 1,
      title: "Set Up My U.S. Bank Business Checking Account",
      description: "Separating your personal and business finances is a necessary step when establishing your business.",
      category: "Licensing",
      categoryColor: "bg-primary-50 text-primary-500",
      status: "available",
      bonusText: "Earn $200-550 bonus",
      hasGoToTask: true,
    },
    {
      id: 2,
      title: "File Your Beneficial Ownership Information Report",
      description: "Separating your personal and business finances is a necessary step when establishing your business.",
      category: "Compliance",
      categoryColor: "bg-neutral-100 text-neutral-500",
      status: "locked",
      lockedText: "Available After State Approval",
    },
    {
      id: 3,
      title: `Protect ${companyName} With Business Insurance`,
      description: "Separating your personal and business finances is a necessary step when establishing your business.",
      category: "Risk management",
      categoryColor: "bg-quaternary-50 text-quaternary-500",
      status: "available",
      hasGoToTask: true,
    },
    {
      id: 4,
      title: "Access Your Business Compliance Documents",
      description: "Separating your personal and business finances is a necessary step when establishing your business.",
      category: "Compliance",
      categoryColor: "bg-neutral-100 text-neutral-500",
      status: "locked",
      lockedText: "Available After State Approval",
    },
    {
      id: 5,
      title: "View Your Customized Business License Report",
      description: "Separating your personal and business finances is a necessary step when establishing your business.",
      category: "Compliance",
      categoryColor: "bg-neutral-100 text-neutral-500",
      status: "available",
    },
    {
      id: 6,
      title: "Discover Your Business License Requirements",
      description: "Separating your personal and business finances is a necessary step when establishing your business.",
      category: "Licensing",
      categoryColor: "bg-primary-50 text-primary-500",
      status: "completed",
    },
  ];

  const completedCount = tasks.filter((t) => t.status === "completed").length;

  const handleGoToTask = (taskId: number) => {
    if (taskId === 1) {
      router.push("/bank-upsell");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      {/* Top header */}
      <TopHeader />

      <div className="flex flex-1">
        {/* Sidebar (hidden on mobile) */}
        <SidebarNav />

        {/* Main content area */}
        <div className="flex-1 flex flex-col pb-[72px] tablet:pb-0">
          <MotionStagger className="flex-1 flex flex-col">
            {/* Company header */}
            <MotionFadeIn>
              <CompanyHeader
                companyName={companyName}
                orderNumber="BUHU1236389"
                ein="**-**"
                lastFourCard="4427"
              />
            </MotionFadeIn>

            {/* Checklist section */}
            <MotionFadeIn className="flex-1 px-lg tablet:px-2xl py-lg tablet:py-xl max-w-[1100px]">
              {/* Section title + progress */}
              <div className="flex flex-col gap-sm tablet:gap-md mb-lg tablet:mb-xl">
                <div className="flex flex-col tablet:flex-row tablet:items-center gap-sm tablet:gap-xl">
                  <h1 className="text-[20px] tablet:text-[24px] font-bold text-text-dark-blue">
                    Your Business Launch Checklist
                  </h1>
                  <ProgressBar completed={completedCount} total={tasks.length} />
                </div>
                <p className="text-body-xs tablet:text-body-sm text-neutral-400">
                  Complete these essential steps to take {companyName} to the next level
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
            </MotionFadeIn>
          </MotionStagger>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <MobileBottomNav />
    </div>
  );
}
