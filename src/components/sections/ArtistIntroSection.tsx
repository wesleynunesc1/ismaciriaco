"use client";

import React from "react";
import Image from "next/image";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";

export const ArtistIntroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 bg-surface text-misty border-b border-surface-divider relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Authentic Portrait Image (IMG_8905) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl overflow-hidden border border-surface-divider shadow-2xl bg-raven">
              <Image
                src="/media/about/isma-editorial-bw.jpg"
                alt="Isma Ciriaco Retrato Oficial P&B"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top filter grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
                <span className="font-mono text-crimson-vivid font-bold tracking-widest uppercase text-[10px]">
                  PORTFOLIO OFICIAL
                </span>
                <span className="text-misty/70 font-mono text-[11px]">
                  CAMBUQUIRA ➔ AUSTIN, TX
                </span>
              </div>
            </div>

            {/* Supporting Formations Box */}
            <div className="w-full max-w-[420px] mt-6 p-6 rounded-2xl bg-surface-subtle border border-surface-divider">
              <span className="text-[11px] font-bold text-misty/50 uppercase tracking-widest block mb-3">
                Formações para Shows & Festivais
              </span>
              <div className="space-y-3">
                {ARTIST_DATA.formations.map((f, i) => (
                  <div key={i} className="border-l-2 border-crimson-vivid pl-3">
                    <span className="text-sm font-bold text-white block">{f.title}</span>
                    <span className="text-xs text-misty/70">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Editorial Story Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-antique/20 border border-crimson-antique/40 text-crimson-vivid text-xs font-bold uppercase tracking-widest w-fit">
              <span>{t.artistIntro.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tightest leading-tight uppercase">
              {t.artistIntro.headline}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-misty/80 leading-relaxed font-normal">
              <p>{t.artistIntro.paragraph1}</p>
              <p>{t.artistIntro.paragraph2}</p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-surface-divider">
              {t.artistIntro.pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="text-xs font-mono font-bold text-crimson-vivid block">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-misty/70 leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
