"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Header,
  GreenBanner,
  BonusCallout,
  CheckItem,
  CTAButton,
  SocialProof,
  InfoTip,
  InfoBanner,
  Disclaimer,
  PreferredPartnerBadge,
} from "@/components/formations-ui";
import { MotionFadeIn, MotionStagger } from "@/components/motion";
import Image from "next/image";

// ─── INFO PANEL (Desktop right column) ───────────────────

function InfoPanel() {
  return (
    <div className="bg-info-bg rounded-lg p-xl flex flex-col gap-xl h-fit">
      {/* Icon + headline */}
      <div className="flex items-start gap-md">
        <div className="w-[40px] h-[40px] rounded-full bg-secondary-100 flex items-center justify-center shrink-0">
          <svg
            className="w-[22px] h-[22px] text-secondary-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        <p className="text-body-md font-medium text-neutral-800 leading-[24px]">
          Separating your <span className="font-bold">personal and business finances</span> is a
          necessary step when <span className="font-bold">establishing your business.</span>
        </p>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-lg">
        <p className="text-body-md text-neutral-800 leading-[24px]">
          Open a free business checking account with U.S. Bank to:
        </p>
        <ul className="flex flex-col gap-md pl-xs">
          <li className="text-body-md text-neutral-800 leading-[24px] flex items-start gap-sm">
            <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-neutral-800 shrink-0" />
            <span>
              <span className="font-bold">Save time and money</span> on your tax filings by
              simplifying expense tracking.
            </span>
          </li>
          <li className="text-body-md text-neutral-800 leading-[24px] flex items-start gap-sm">
            <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-neutral-800 shrink-0" />
            <span>
              <span className="font-bold">Streamline cash flow management</span> and improve
              budgeting.
            </span>
          </li>
          <li className="text-body-md text-neutral-800 leading-[24px] flex items-start gap-sm">
            <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-neutral-800 shrink-0" />
            <span>
              <span className="font-bold">Protect your personal assets</span> from business
              liabilities.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ─── PARTNER CARD ────────────────────────────────────────

function PartnerCard() {
  const benefits = [
    "No monthly maintenance fees",
    "Free mobile card reader with $0 software fee",
    "Free same-day access to funds",
    "Unlimited digital transactions and 25 teller and paper transactions per statement cycle",
    "Use bill pay in U.S. Bank online or mobile banking to review, track and pay all your bills",
    "FDIC insured deposits up to $250,000",
  ];

  return (
    <div className="card-partner w-full">
      {/* Green top banner */}
      <GreenBanner />

      {/* Partner logo + name + badge */}
      <div className="flex flex-col tablet:flex-row items-center gap-sm tablet:gap-md py-md px-lg tablet:px-xl">
        <div className="flex items-center gap-md">
          <div className="w-[50px] h-[50px] rounded-sm overflow-hidden bg-neutral-100 shrink-0">
            <Image src="/partners/us-bank.png" alt="U.S. Bank" width={50} height={50} className="object-cover" />
          </div>
          <h3 className="text-body-md tablet:text-body-lg font-bold text-text-dark-blue leading-[30px]">
            Business Essentials Checking Account
          </h3>
        </div>
        <PreferredPartnerBadge />
      </div>

      {/* Bonus callout */}
      <BonusCallout
        regularText="Open a free checking account and earn a"
        highlightText="$400 bonus*"
      />

      {/* Benefits checklist */}
      <div className="flex flex-col gap-md px-xl pb-xl pt-lg">
        {benefits.map((benefit, i) => (
          <CheckItem key={i} text={benefit} />
        ))}
      </div>

      {/* Info tip */}
      <InfoTip text="Complete your U.S. Bank application in your Formations dashboard in just a few minutes!" />
    </div>
  );
}

// ─── MAIN PAGE (RESPONSIVE) ─────────────────────────────

interface BankUpsellProps {
  companyName?: string;
}

export default function BankUpsell({
  companyName = "Razor",
}: BankUpsellProps) {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push("/task-dashboard");
  };

  const handleNoThanks = () => {
    router.push("/task-dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header - responsive */}
      <div className="hidden tablet:block">
        <Header variant="desktop" securedText="This experience is secured by Formations" />
      </div>
      <div className="block tablet:hidden">
        <Header variant="mobile" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-md tablet:px-xl desktop:px-[80px] py-xl tablet:py-2xl gap-xl tablet:gap-2xl pb-[180px] tablet:pb-2xl">
        <MotionStagger className="flex flex-col items-center gap-xl tablet:gap-2xl w-full">
          {/* Page Title */}
          <MotionFadeIn className="max-w-[900px] w-full text-center tablet:text-center px-lg tablet:px-0">
            <h1 className="text-[24px] tablet:text-title-lg font-bold text-text-dark-blue leading-[1.2]">
              Next Up - Let&apos;s Separate{" "}
              <span className="text-primary-500">{companyName}&apos;s</span> Finances With a Business
              Bank Account
            </h1>
          </MotionFadeIn>

          {/* Mobile: Info banner (shown above card on mobile) */}
          <MotionFadeIn className="block tablet:hidden w-full">
            <InfoBanner
              icon={
                <div className="w-[25px] h-[25px] rounded-full bg-secondary-100 flex items-center justify-center">
                  <svg className="w-[19px] h-[19px] text-secondary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18c0 .75.75 3 3 3s3-2.25 3-3M12 2v1m0 14v1m8-9h1M3 9h1m13.657-5.657l.707.707M5.636 4.05l.707.707" strokeLinecap="round"/>
                    <circle cx="12" cy="10" r="4" />
                  </svg>
                </div>
              }
              text="Separating your personal and business finances is a necessary step when establishing your business."
            />
          </MotionFadeIn>

          {/* Two-column on desktop, single column on mobile */}
          <div className="flex flex-col tablet:flex-row gap-xl max-w-[1050px] w-full items-start">
            {/* Left: Partner Card */}
            <motion.div
              className="w-full tablet:w-[55%]"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <PartnerCard />
            </motion.div>

            {/* Right: Info Panel (desktop only) */}
            <MotionFadeIn className="hidden tablet:block w-full tablet:w-[45%]">
              <InfoPanel />
            </MotionFadeIn>
          </div>

          {/* Mobile: Social proof */}
          <MotionFadeIn className="block tablet:hidden px-md w-full">
            <SocialProof text="Millions of businesses trust U.S. Bank as their banking partner" />
          </MotionFadeIn>

          {/* Desktop: CTA Area */}
          <MotionFadeIn className="hidden tablet:flex flex-col items-center gap-xl max-w-[1050px] w-full">
            {/* Apply Now + No thanks row */}
            <div className="flex items-center gap-xl">
              <CTAButton onClick={handleLearnMore} className="w-[300px]">Apply Now</CTAButton>
              <button
                onClick={handleNoThanks}
                className="text-primary-500 font-medium text-body-lg underline decoration-solid"
              >
                No, thanks
              </button>
            </div>

            {/* Social proof */}
            <SocialProof text="Millions of businesses trust U.S. Bank as their banking partner" />
          </MotionFadeIn>

          {/* Disclaimers */}
          <MotionFadeIn className="max-w-[727px] w-full flex flex-col gap-[22px] px-sm tablet:px-0">
            <Disclaimer text="* Earn a $400 bonus by opening a U.S. Bank Business Essentials Account with promo code Q4AFL25 and complete qualifying activities, subject to certain terms and limitations. Offer valid through January 14, 2026." />
          </MotionFadeIn>
        </MotionStagger>
      </main>

      {/* Mobile: Sticky CTA footer */}
      <div className="block tablet:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 p-lg flex flex-col items-center gap-sm">
        <CTAButton onClick={handleLearnMore} fullWidth>Apply Now</CTAButton>
        <button
          onClick={handleNoThanks}
          className="text-primary-500 font-medium text-body-lg underline py-sm"
        >
          No, thanks
        </button>
      </div>
    </div>
  );
}
