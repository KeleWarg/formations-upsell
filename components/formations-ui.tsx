"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Lock, Info, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// ─── TYPES ────────────────────────────────────────────────

export interface PartnerBenefit {
  text: string;
}

export interface PartnerOffer {
  name: string;
  logoSrc: string;
  bonusText: string;
  bonusHighlight: string;
  preferredPartner?: boolean;
  benefits: PartnerBenefit[];
  infoBanner?: string;
  socialProof?: {
    avatars: string[];
    text: string;
  };
  disclaimers?: string[];
}

// ─── HEADER ───────────────────────────────────────────────

interface HeaderProps {
  variant?: "desktop" | "mobile";
  securedText?: string;
}

export function Header({ variant = "desktop", securedText = "Secured by Formations" }: HeaderProps) {
  if (variant === "mobile") {
    return (
      <header className="flex items-center justify-between px-[15px] py-lg bg-white border-b border-neutral-100 shadow-header">
        <div className="flex items-center gap-xs">
          {/* Formations logo + Forbes co-brand */}
          <Link href="/" className="flex items-center gap-[6px] hover:opacity-80 transition-opacity">
            <Image src="/logos/formations-logo.svg" alt="Formations" width={70} height={14} />
            <div className="w-px h-[17px] bg-neutral-200" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[6px] font-semibold text-neutral-300 leading-tight">In partnership with</span>
              <Image src="/logos/forbesadvisor-logo.svg" alt="Forbes Advisor" width={56} height={7} />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-xs">
          <Lock className="w-4 h-4 text-neutral-400" />
          <span className="text-body-xs font-medium text-neutral-500">{securedText}</span>
        </div>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between px-xl py-lg bg-white border-b border-neutral-100 shadow-header">
      <Link href="/" className="flex items-center gap-lg hover:opacity-80 transition-opacity">
        {/* Formations logo */}
        <Image src="/logos/formations-logo.svg" alt="Formations" width={141} height={28} />
        {/* Divider */}
        <div className="w-px h-[34px] bg-neutral-200" />
        {/* Co-brand */}
        <div className="flex flex-col gap-xs">
          <span className="text-[10px] font-semibold text-neutral-300 leading-[1.6]">In partnership with</span>
          <Image src="/logos/forbesadvisor-logo.svg" alt="Forbes Advisor" width={111} height={14} />
        </div>
      </Link>
      <div className="flex items-center gap-sm">
        <Lock className="w-4 h-4 text-neutral-400" />
        <span className="text-body-xs font-medium text-neutral-500">{securedText}</span>
      </div>
    </header>
  );
}

// ─── BACK BUTTON ──────────────────────────────────────────

interface BackButtonProps {
  onClick?: () => void;
  className?: string;
}

export function BackButton({ onClick, className = "" }: BackButtonProps) {
  return (
    <button onClick={onClick} className={`flex items-center gap-xs text-neutral-700 ${className}`}>
      <ChevronLeft className="w-4 h-4" />
      <span className="text-body-xs font-medium">Back</span>
    </button>
  );
}

// ─── PRIMARY CTA BUTTON ──────────────────────────────────

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  fullWidth?: boolean;
}

export function CTAButton({
  children,
  onClick,
  variant = "primary",
  className = "",
  fullWidth = false,
}: CTAButtonProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <motion.button
      onClick={onClick}
      className={`${base} ${fullWidth ? "w-full" : ""} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.button>
  );
}

// ─── CHECK CIRCLE ICON ───────────────────────────────────

export function CheckCircle({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`text-secondary-500 shrink-0 ${className}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6668 7.38625V7.99959C14.666 9.43722 14.2005 10.836 13.3397 11.9878C12.4789 13.1395 11.2689 13.9816 9.89038 14.3892C8.51191 14.7968 7.03837 14.7479 5.6898 14.2496C4.34123 13.7514 3.18993 12.8306 2.40749 11.6246C1.62505 10.4185 1.25336 8.99195 1.34795 7.55731C1.44254 6.12267 1.99862 4.75718 2.93235 3.66437C3.86608 2.57157 5.12865 1.80938 6.53094 1.49309C7.93324 1.1768 9.39924 1.32331 10.7135 1.91292" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6667 2.66626L8 9.33959L6 7.33959" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── BENEFIT CHECK ITEM ──────────────────────────────────

interface CheckItemProps {
  text: string;
  iconSize?: number;
}

export function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="check-item">
      <CheckCircle className="w-4 h-4 mt-0.5" />
      <span className="text-body-sm font-medium text-neutral-800 leading-[20px]">{text}</span>
    </div>
  );
}

// ─── GREEN TOP BANNER ────────────────────────────────────

interface GreenBannerProps {
  text?: string;
}

export function GreenBanner({ text = "APPLY ONLINE IN A FEW MINUTES" }: GreenBannerProps) {
  return <div className="banner-green">{text}</div>;
}

// ─── BONUS CALLOUT ──────────────────────────────────────

interface BonusCalloutProps {
  regularText: string;
  highlightText: string;
}

export function BonusCallout({ regularText, highlightText }: BonusCalloutProps) {
  return (
    <div className="callout-bonus flex items-center gap-md px-[30px] py-md">
      {/* Discount icon */}
      <div className="w-[26px] h-[26px] shrink-0">
        <svg viewBox="0 0 26 26" fill="none" className="w-full h-full">
          <circle cx="13" cy="13" r="11" stroke="#2F7F51" strokeWidth="1.5" />
          <circle cx="9.5" cy="9.5" r="1.5" fill="#2F7F51" />
          <circle cx="16.5" cy="16.5" r="1.5" fill="#2F7F51" />
          <line x1="17" y1="9" x2="9" y2="17" stroke="#2F7F51" strokeWidth="1.5" />
        </svg>
      </div>
      <p className="text-body-sm text-neutral-800">
        {regularText} <span className="font-bold text-primary-500">{highlightText}</span>
      </p>
    </div>
  );
}

// ─── INFO BANNER (Slate background) ─────────────────────

interface InfoBannerProps {
  icon?: React.ReactNode;
  text: string;
  learnMore?: boolean;
}

export function InfoBanner({ icon, text, learnMore = true }: InfoBannerProps) {
  return (
    <div className="callout-info flex flex-col items-center gap-[6px] py-sm px-lg">
      <div className="flex items-center gap-sm w-full">
        {icon && <div className="shrink-0">{icon}</div>}
        <p className="text-body-md font-medium text-neutral-800 leading-[24px]">{text}</p>
      </div>
      {learnMore && (
        <button className="flex items-center gap-[10px] text-primary-500 font-regular text-body-md">
          Learn more <ChevronDown className="w-3 h-[6px]" />
        </button>
      )}
    </div>
  );
}

// ─── SOCIAL PROOF ────────────────────────────────────────

interface SocialProofProps {
  text: string;
  avatarSrcs?: string[];
}

export function SocialProof({ text, avatarSrcs }: SocialProofProps) {
  return (
    <div className="flex items-center gap-[11px]">
      {/* Overlapping avatar circles */}
      <div className="flex -space-x-[10px]">
        {(avatarSrcs || []).map((src, i) => (
          <div key={i} className="w-[33px] h-[33px] rounded-full border-2 border-white overflow-hidden bg-neutral-200">
            <Image src={src} alt="" width={33} height={33} className="object-cover" />
          </div>
        ))}
        {/* Fallback placeholders if no avatars */}
        {(!avatarSrcs || avatarSrcs.length === 0) && (
          <>
            <div className="w-[33px] h-[33px] rounded-full bg-secondary-200 border-2 border-white" />
            <div className="w-[33px] h-[33px] rounded-full bg-tertiary-300 border-2 border-white" />
            <div className="w-[33px] h-[33px] rounded-full bg-primary-200 border-2 border-white" />
          </>
        )}
      </div>
      <p className="text-body-sm font-medium text-text-dark-blue leading-[20px]">{text}</p>
    </div>
  );
}

// ─── INFO TIP (bottom of card) ──────────────────────────

interface InfoTipProps {
  text: string;
}

export function InfoTip({ text }: InfoTipProps) {
  return (
    <div className="flex items-start gap-lg bg-neutral-50 border-t border-neutral-100 p-lg">
      <Info className="w-6 h-6 text-primary-500 shrink-0" />
      <p className="text-body-sm font-medium text-neutral-800 leading-[18px]">{text}</p>
    </div>
  );
}

// ─── DISCLAIMER TEXT ────────────────────────────────────

interface DisclaimerProps {
  text: string;
}

export function Disclaimer({ text }: DisclaimerProps) {
  return (
    <p className="text-body-xs font-regular text-text-secondary-blue text-center leading-[18px]">{text}</p>
  );
}

// ─── PREFERRED PARTNER BADGE ────────────────────────────

export function PreferredPartnerBadge() {
  return (
    <div className="flex items-center gap-xs bg-secondary-50 rounded-full px-md py-xs">
      <div className="w-[10px] h-[10px] rounded-full bg-secondary-500" />
      <span className="text-body-xs font-semibold text-secondary-600 tracking-wider uppercase">
        PREFERRED PARTNER
      </span>
    </div>
  );
}

// ─── FORM OPTION (Radio card) ───────────────────────────

interface FormOptionProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function FormOption({ label, selected = false, onClick }: FormOptionProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left py-lg px-lg rounded-sm border shadow-input transition-colors ${
        selected ? "border-primary-500 bg-white ring-1 ring-primary-200" : "border-outline bg-white hover:border-primary-300"
      }`}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="text-body-xs font-medium text-neutral-700 leading-[1.6]">{label}</span>
    </motion.button>
  );
}
