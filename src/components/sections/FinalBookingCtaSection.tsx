"use client";

import React, { useState } from "react";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Check, MessageSquare, ArrowUpRight } from "lucide-react";

export const FinalBookingCtaSection: React.FC = () => {
  const { t } = useLanguage();
  const [copiedUS, setCopiedUS] = useState(false);
  const [copiedBR, setCopiedBR] = useState(false);

  const handleCopy = (text: string, type: "us" | "br") => {
    navigator.clipboard.writeText(text);
    if (type === "us") {
      setCopiedUS(true);
      setTimeout(() => setCopiedUS(false), 2000);
    } else {
      setCopiedBR(true);
      setTimeout(() => setCopiedBR(false), 2000);
    }
  };

  return (
    <section className="py-28 md:py-36 bg-black text-misty relative overflow-hidden">
      {/* Dramatic central red noir light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-crimson-antique/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-crimson-vivid uppercase block mb-6">
          [ BOOKING & PARCERIAS INTERNACIONAIS ]
        </span>

        {/* Cinematic headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tightest leading-[0.96] uppercase mb-8">
          {t.finalCta.headline}
        </h2>

        <p className="text-base sm:text-xl text-misty/80 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          {t.finalCta.description}
        </p>

        {/* Central Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
          <PillButton
            href="/contact"
            variant="accent"
            className="!px-10 !py-5 !text-base"
          >
            {t.finalCta.ctaButton}
          </PillButton>
          <PillButton
            href={`https://wa.me/${ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-10 !py-5 !text-base"
          >
            WhatsApp USA (+1)
          </PillButton>
        </div>

        {/* Quick Contacts Bar */}
        <div className="pt-12 border-t border-surface-divider max-w-xl mx-auto">
          <span className="text-xs font-semibold text-misty/50 uppercase tracking-wider block mb-4">
            {t.finalCta.directContact}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* US Booking Card */}
            <div className="p-4 rounded-2xl bg-surface border border-surface-divider text-left flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-crimson-vivid block uppercase tracking-wider">
                  USA / Austin, TX
                </span>
                <span className="text-xs font-mono font-bold text-white">
                  {ARTIST_DATA.contacts.usPhone}
                </span>
              </div>
              <a
                href={`https://wa.me/${ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-crimson-vivid text-white flex items-center justify-center hover:scale-110 transition-transform"
                title="Conversar via WhatsApp"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* BR Booking Card */}
            <div className="p-4 rounded-2xl bg-surface border border-surface-divider text-left flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-crimson-vivid block uppercase tracking-wider">
                  Brasil / Produção
                </span>
                <span className="text-xs font-mono font-bold text-white">
                  {ARTIST_DATA.contacts.brPhone}
                </span>
              </div>
              <a
                href={`https://wa.me/${ARTIST_DATA.contacts.brPhoneRaw.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-crimson-vivid text-white flex items-center justify-center hover:scale-110 transition-transform"
                title="Conversar via WhatsApp"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
