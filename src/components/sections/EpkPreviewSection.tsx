"use client";

import React from "react";
import { PillButton } from "@/components/ui/PillButton";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, Download, CheckCircle, Mail, Phone } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist";

export const EpkPreviewSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36 bg-raven text-misty border-b border-surface-divider relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="p-8 md:p-14 rounded-3xl bg-surface-elevated border border-surface-divider shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-antique/30 border border-crimson-antique/50 text-crimson-vivid text-xs font-bold uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              <span>{t.epkSection.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest leading-tight text-white uppercase">
              {t.epkSection.headline}
            </h2>

            <p className="text-base text-misty/80 leading-relaxed font-normal max-w-2xl">
              {t.epkSection.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-misty/80">
                <CheckCircle className="w-4 h-4 text-crimson-vivid" />
                <span>Biografia em Alta Resolução (PT / EN)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-misty/80">
                <CheckCircle className="w-4 h-4 text-crimson-vivid" />
                <span>Mapa de Palco & Technical Rider</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-misty/80">
                <CheckCircle className="w-4 h-4 text-crimson-vivid" />
                <span>Fotografias Oficiais de Concerto (TIFF/JPG)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-misty/80">
                <CheckCircle className="w-4 h-4 text-crimson-vivid" />
                <span>Canais de Booking USA & Brasil</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <PillButton href="/epk" variant="accent" className="w-full justify-center">
              {t.epkSection.ctaAccess}
            </PillButton>
            <PillButton
              href="/contact?category=EPK%20Request"
              variant="secondary"
              className="w-full justify-center"
            >
              {t.epkSection.ctaDownloadBio}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
};
