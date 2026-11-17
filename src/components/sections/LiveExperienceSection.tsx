"use client";

import React from "react";
import Image from "next/image";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";

export const LiveExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36 bg-raven text-misty relative border-b border-surface-divider overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-antique/20 border border-crimson-antique/40 text-crimson-vivid text-xs font-bold uppercase tracking-widest mb-4">
              <span>{t.liveSection.badge}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tightest leading-tight text-white uppercase">
              {t.liveSection.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-misty/70 max-w-md leading-relaxed">
            {t.liveSection.description}
          </p>
        </div>

        {/* Real Live Performance Photography Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 items-stretch">
          
          {/* Main Large Concert Stage Photo (IMG_6456 / Monk's Jazz Club) */}
          <div className="md:col-span-7 relative min-h-[380px] md:min-h-[480px] rounded-3xl overflow-hidden border border-surface-divider bg-black group">
            <Image
              src="/media/live/live-stage-monks.jpg"
              alt="Isma Ciriaco ao vivo no Monk's Jazz Club Austin"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center filter contrast-[1.05] brightness-90 group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs z-10">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-crimson-vivid font-bold block mb-1">
                  CIRCUITO DE JAZZ • AUSTIN, TEXAS
                </span>
                <span className="text-lg font-bold text-white tracking-tight">
                  Monk&apos;s Jazz Club & Elephant Room
                </span>
              </div>
              <span className="text-misty/60 font-mono text-[11px]">SESSÕES AO VIVO</span>
            </div>
          </div>

          {/* Right Column: 2 Asymmetric Real Concert Photos */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            {/* Top Photo: Live Bass solo vertical/horizontal (IMG_8290) */}
            <div className="relative min-h-[220px] rounded-3xl overflow-hidden border border-surface-divider bg-black group">
              <Image
                src="/media/live/live-bass-vertical.jpg"
                alt="Isma Ciriaco solo de contrabaixo ao vivo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter grayscale contrast-110 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 text-xs z-10">
                <span className="text-[10px] font-mono text-crimson-vivid font-bold uppercase">
                  VIRTUOSISMO & PEGADA
                </span>
                <span className="font-bold text-white block">Contrabaixo Elétrico no Jazz Brasileiro</span>
              </div>
            </div>

            {/* Bottom Photo: Duo/Trio Live (IMG_8291) */}
            <div className="relative min-h-[220px] rounded-3xl overflow-hidden border border-surface-divider bg-black group">
              <Image
                src="/media/live/live-concert-intimate.jpg"
                alt="Apresentação intimista trio de jazz"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter contrast-[1.05] brightness-90 group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 text-xs z-10">
                <span className="text-[10px] font-mono text-crimson-vivid font-bold uppercase">
                  FORMAÇÕES DINÂMICAS
                </span>
                <span className="font-bold text-white block">Trio Instrumental & Banda Completa</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Formations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ARTIST_DATA.formations.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-surface border border-surface-divider hover:border-crimson-vivid/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-crimson-vivid block mb-3">
                  FORMAÇÃO 0{idx + 1}
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-misty/70 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-divider flex items-center justify-between text-xs text-misty/50 font-medium">
                <span>Disponibilidade Global</span>
                <span className="text-crimson-vivid font-bold">Consulte Agenda</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action bar */}
        <div className="p-8 md:p-12 rounded-3xl bg-surface-elevated border border-surface-divider flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-extrabold text-white">
              Pronto para levar a assinatura do jazz brasileiro ao seu evento?
            </h4>
            <p className="text-sm text-misty/60">
              Contratações com suporte completo de rider técnico e atendimento direto.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <PillButton href="/contact" variant="accent">
              {t.liveSection.ctaBookEvent}
            </PillButton>
            <PillButton href="/epk" variant="secondary">
              {t.liveSection.ctaEpk}
            </PillButton>
          </div>
        </div>

      </div>
    </section>
  );
};
