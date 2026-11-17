"use client";

import React from "react";
import Image from "next/image";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap } from "lucide-react";

export const EducationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36 bg-raven text-misty border-b border-surface-divider relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-antique/20 border border-crimson-antique/40 text-crimson-vivid text-xs font-bold uppercase tracking-widest">
              <GraduationCap className="w-4 h-4" />
              <span>{t.educationSection.badge}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tightest leading-tight text-white uppercase">
              {t.educationSection.headline}
            </h2>

            <p className="text-lg text-crimson-vivid font-semibold">
              {t.educationSection.subtitle}
            </p>

            <p className="text-base text-misty/70 leading-relaxed font-normal">
              {t.educationSection.description}
            </p>

            {/* Modalitie Overview List */}
            <div className="space-y-3 pt-2">
              {ARTIST_DATA.educationProject.modalities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface border border-surface-divider flex items-center gap-4"
                >
                  <div className="w-7 h-7 rounded-full bg-crimson-antique/30 text-crimson-vivid flex items-center justify-center font-bold text-xs shrink-0">
                    0{idx + 1}
                  </div>
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <PillButton href="/education" variant="primary">
                {t.educationSection.ctaLearn}
              </PillButton>
              <PillButton
                href="/contact?category=Education"
                variant="secondary"
              >
                {t.educationSection.ctaInquire}
              </PillButton>
            </div>
          </div>

          {/* Right Real Education & Bass Technique Photography Column (IMG_6706 & IMG_6708) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-surface-divider bg-black group shadow-xl">
              <Image
                src="/media/education/masterclass-bass.jpg"
                alt="Isma Ciriaco ensinando contrabaixo em estúdio"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover filter contrast-[1.05] grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs">
                <span className="font-mono text-[10px] text-crimson-vivid font-bold uppercase block">
                  DIDÁTICA PRÁTICA
                </span>
                <span className="font-bold text-white text-sm">Aulas Presenciais & Online</span>
              </div>
            </div>

            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-surface-divider bg-black group shadow-xl">
              <Image
                src="/media/education/bass-technique-closeup.jpg"
                alt="Detalhe de técnica de contrabaixo"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover filter contrast-[1.05] grayscale group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs">
                <span className="font-mono text-[10px] text-crimson-vivid font-bold uppercase block">
                  TIMBRE & PEGADA
                </span>
                <span className="font-bold text-white text-sm">Fraseado Brasileiro</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
