"use client";

import React from "react";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const ServicesPortfolioSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36 bg-surface text-beige border-b border-graphite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/40 border border-graphite text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <span>{t.servicesSection.badge}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tightest leading-tight text-white uppercase mb-4">
            {t.servicesSection.headline}
          </h2>
          <p className="text-base sm:text-lg text-beige/70 leading-relaxed">
            {t.servicesSection.subhead}
          </p>
        </div>

        {/* Alternating Editorial Services List */}
        <div className="space-y-6">
          {ARTIST_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className="group p-8 md:p-10 rounded-3xl bg-surface-elevated border border-graphite hover:border-gold/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Number & Title */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono font-bold text-gold tracking-widest block mb-2">
                  SERVIÇO {service.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 group-hover:text-beige transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-beige/70 leading-relaxed font-normal">
                  {service.tagline}
                </p>

                <div className="mt-4 inline-block px-3 py-1 rounded-full bg-surface text-[11px] font-semibold text-beige/60 border border-graphite">
                  Foco: {service.targetAudience}
                </div>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-graphite lg:pl-8 pt-4 lg:pt-0">
                <span className="text-[11px] font-bold text-beige/40 uppercase tracking-widest block mb-3">
                  Entregas & Diferenciais
                </span>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-beige/80">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <PillButton
                  href={`/contact?category=${encodeURIComponent(service.inquiryCategory)}`}
                  variant="primary"
                  className="w-full lg:w-auto text-xs uppercase"
                >
                  Solicitar Proposta
                </PillButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
