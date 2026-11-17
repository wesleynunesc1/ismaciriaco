"use client";

import React from "react";
import Image from "next/image";
import { PillButton } from "@/components/ui/PillButton";
import { useLanguage } from "@/context/LanguageContext";

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 bg-raven text-misty overflow-hidden border-b border-surface-divider">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-raven via-raven/90 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Meta Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated border border-surface-divider text-misty/80 text-xs font-semibold tracking-widest uppercase mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-crimson-vivid" />
              <span>{t.hero.tagline}</span>
            </div>

            {/* Sub-label */}
            <span className="text-xs md:text-sm font-extrabold tracking-widest text-crimson-vivid uppercase mb-3 block">
              {t.hero.subtitle}
            </span>

            {/* Massive Editorial Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-extrabold text-white tracking-tightest leading-[0.96] uppercase mb-8">
              <span className="block">{t.hero.headlineLine1}</span>
              <span className="block text-misty font-light italic">{t.hero.headlineLine2}</span>
              <span className="block text-white">
                {t.hero.headlineLine3}
              </span>
            </h1>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-misty/80 max-w-xl leading-relaxed mb-10 font-normal">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <PillButton href="/contact" variant="accent" className="!text-sm md:!text-base">
                {t.hero.ctaBook}
              </PillButton>
              <PillButton href="/music" variant="primary" className="!text-sm md:!text-base">
                {t.hero.ctaExplore}
              </PillButton>
            </div>

            {/* Verified Endorser Badges in Hero */}
            <div className="mt-12 pt-6 border-t border-surface-divider flex items-center gap-6 text-xs text-misty/50 uppercase tracking-wider font-semibold">
              <span>ARTIST ENDORSER:</span>
              <div className="flex items-center gap-4">
                <span className="text-misty/90 font-bold">DR STRINGS</span>
                <span className="text-misty/30">•</span>
                <span className="text-misty/90 font-bold">AGUILAR AMPLIFICATION</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Artist Photography (IMG_8904 / isma-hero-main.jpg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden border border-surface-divider shadow-[0_20px_50px_rgba(0,0,0,0.8)] group bg-surface">
              <Image
                src="/media/hero/isma-hero-main.jpg"
                alt="Isma Ciriaco com Contrabaixo elétrico"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 460px"
                className="object-cover object-center filter grayscale contrast-[1.08] brightness-[0.92] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              
              {/* Subtle bottom vignette to blend metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Editorial Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs text-misty/90 z-10">
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-mono text-crimson-vivid font-bold block mb-0.5">
                    AUSTIN, TEXAS LIVE SESSIONS
                  </span>
                  <span className="font-extrabold text-white text-base tracking-tight">
                    ISMA CIRIACO
                  </span>
                </div>
                <div className="text-right font-mono text-[11px] text-misty/60">
                  <span>35+ ANOS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
