"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header, BackButton, CTAButton, FormOption } from "@/components/formations-ui";
import { MotionFadeIn, MotionStagger } from "@/components/motion";

// ─── ACCEPT PAYMENT PROMPT ───────────────────────────────

interface AcceptPaymentPromptProps {
  companyName?: string;
}

export default function AcceptPaymentPrompt({
  companyName = "Razor",
}: AcceptPaymentPromptProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<"yes" | "no" | null>(null);

  const handleSubmit = () => {
    if (selected) {
      router.push("/bank-upsell");
    }
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

      {/* Back button */}
      <div className="px-xl py-lg">
        <BackButton onClick={() => router.push("/")} />
      </div>

      {/* Main content - centered */}
      <main className="flex-1 flex flex-col items-center px-lg tablet:px-xl pb-[120px] tablet:pb-0">
        <MotionStagger className="flex flex-col items-center gap-[30px] max-w-[630px] w-full pt-xl tablet:pt-[60px]">
          {/* Icon */}
          <MotionFadeIn className="flex flex-col items-center gap-xl">
            {/* Credit card check icon */}
            <svg className="w-[48px] h-[48px] tablet:w-[24px] tablet:h-[24px] text-text-dark-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
              <path d="M16 17l2 2 4-4" />
            </svg>

            {/* Title + subtitle */}
            <div className="flex flex-col items-center gap-[5px]">
              <h1 className="text-[20px] tablet:text-title-sm font-bold text-text-dark-blue text-center leading-[32px]">
                Will {companyName} be accepting credit card payments?
              </h1>
              <p className="text-body-md font-medium text-[#393939] opacity-60 text-center">
                Just your best guess is fine – you can always change this later
              </p>
            </div>
          </MotionFadeIn>

          {/* Options */}
          <div className="flex flex-col gap-lg w-full max-w-[424px]">
            <MotionFadeIn>
              <FormOption
                label="Yes, I'll need to accept credit card payments"
                selected={selected === "yes"}
                onClick={() => setSelected("yes")}
              />
            </MotionFadeIn>
            <MotionFadeIn>
              <FormOption
                label="No, not at this time"
                selected={selected === "no"}
                onClick={() => setSelected("no")}
              />
            </MotionFadeIn>
          </div>

          {/* Desktop CTA */}
          <MotionFadeIn className="hidden tablet:block">
            <CTAButton onClick={handleSubmit} className={`w-[366px] max-w-full ${!selected ? "opacity-50 cursor-not-allowed" : ""}`}>
              Learn More
            </CTAButton>
          </MotionFadeIn>
        </MotionStagger>
      </main>

      {/* Mobile: sticky CTA at bottom */}
      <div className="block tablet:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 p-lg">
        <CTAButton onClick={handleSubmit} fullWidth className={!selected ? "opacity-50 cursor-not-allowed" : ""}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
}
