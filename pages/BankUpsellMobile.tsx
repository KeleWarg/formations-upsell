"use client";

import React from "react";
import {
  Header,
  GreenBanner,
  BonusCallout,
  CheckItem,
  CTAButton,
  SocialProof,
  InfoBanner,
  InfoTip,
  Disclaimer,
  PreferredPartnerBadge,
} from "@/components/formations-ui";
import Image from "next/image";

// ─── MOBILE PARTNER CARD ──────────────────────────────────

function MobilePartnerCard() {
  const benefits = [
    "No hidden fees, monthly fees, or minimum balance",
    "Award-winning digital solution with expert human support",
    "Free ACH, checks, and incoming wires with express availability",
    "Automated budgeting and integrations with top business tools such as Quickbooks",
    "Automated budgeting and integrations with top business tools",
    "FDIC insured deposits up to $250,000 through our partner bank",
  ];

  return (
    <div className="card-partner w-full">
      {/* Green Banner */}
      <GreenBanner />

      {/* Logo row with preferred partner badge */}
      <div className="flex flex-col items-center gap-sm py-md px-lg">
        <div className="flex items-center gap-md">
          <div className="w-[50px] h-[50px] rounded-sm overflow-hidden bg-neutral-100">
            <Image src="/partners/us-bank.png" alt="US Bank" width={50} height={50} className="object-cover" />
          </div>
          <PreferredPartnerBadge />
        </div>
        <h3 className="text-body-md font-bold text-text-dark-blue text-center leading-[30px]">
          Novo Business Checking Account
        </h3>
      </div>

      {/* Bonus callout */}
      <BonusCallout
        regularText="Open a free checking account and earn a"
        highlightText="$200-$550 bonus*"
      />

      {/* Benefits */}
      <div className="flex flex-col gap-md px-xl py-lg">
        {benefits.map((b, i) => (
          <CheckItem key={i} text={b} />
        ))}
      </div>

      {/* Info tip */}
      <InfoTip text="Complete your Novo application in your Formations dashboard in less than 5 minutes!" />
    </div>
  );
}

// ─── MAIN MOBILE PAGE ────────────────────────────────────

interface BankUpsellMobileProps {
  companyName?: string;
}

export default function BankUpsellMobile({ companyName = "<company name>" }: BankUpsellMobileProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-[375px] mx-auto">
      {/* Header */}
      <Header variant="mobile" />

      {/* Scrollable content */}
      <main className="flex-1 px-md py-xl flex flex-col gap-xl overflow-y-auto pb-[180px]">
        {/* Title */}
        <div className="px-lg">
          <h1 className="text-[24px] font-bold text-text-dark-blue leading-[1.2]">
            Next Up - Let&apos;s Separate{" "}
            <span className="text-primary-500">{companyName}&apos;s</span> Finances With a Business Bank Account
          </h1>
        </div>

        {/* Info banner */}
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

        {/* Partner Card */}
        <MobilePartnerCard />

        {/* Social Proof */}
        <div className="px-md">
          <SocialProof text="Over 250,000 business owners trust Novo as their banking platform" />
        </div>

        {/* Disclaimer */}
        <div className="px-sm">
          <Disclaimer text="*Earn a $200 cash bonus after making $4,000 or more, or a $550 bonus after making $12,000 in eligible purchases using your Novo Debit Card within 90 days of account opening. See full details" />
        </div>
      </main>

      {/* Sticky CTA footer */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto bg-white border-t border-neutral-100 p-lg flex flex-col items-center gap-sm">
        <CTAButton fullWidth>Learn More*</CTAButton>
        <button className="text-primary-500 font-medium text-body-lg underline py-sm">
          No, thanks
        </button>
      </div>
    </div>
  );
}
