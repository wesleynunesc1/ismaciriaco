"use client";

import React from "react";
import Image from "next/image";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, MapPin } from "lucide-react";

export const CredibilitySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36 bg-surface text-misty border-b border-surface-divider relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-antique/20 border border-crimson-antique/40 text-crimson-vivid text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.credibilitySection.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tightest leading-tight text-white uppercase mb-4">
            {t.credibilitySection.headline}
          </h2>
          <p className="text-sm sm:text-base text-misty/70">
            Trajetória validada nos principais palcos do circuito de jazz do Texas e por marcas de classe mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Verified Historic Venues */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold tracking-widest text-misty/50 uppercase border-b border-surface-divider pb-3">
              {t.credibilitySection.venuesTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARTIST_DATA.verifiedVenues.map((venue, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface-elevated border border-surface-divider flex flex-col justify-between hover:border-misty/30 transition-colors"
                >
                  <div>
                    <span className="text-xs font-mono text-crimson-vivid block mb-1">
                      0{idx + 1}
                    </span>
                    <h4 className="text-lg font-bold text-white">{venue.name}</h4>
                    <p className="text-xs text-misty/60 mt-1">{venue.type}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-surface-divider flex items-center gap-1.5 text-[11px] text-misty/40">
                    <MapPin className="w-3 h-3 text-crimson-vivid" />
                    <span>{venue.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Endorsements with Real Brand Assets */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-bold tracking-widest text-misty/50 uppercase border-b border-surface-divider pb-3">
              {t.credibilitySection.endorsementsTitle}
            </h3>

            <div className="space-y-4">
              {/* DR STRINGS Partner Card */}
              <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-divider relative group hover:border-crimson-vivid/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-12 w-28">
                      <Image
                        src="/media/brands/aguilar-partner.png"
                        alt="DR Strings Official Brand"
                        fill
                        className="object-contain object-left filter contrast-125"
                      />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-crimson-antique/40 text-crimson-vivid font-bold">
                      OFFICIAL ENDORSER
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white">DR Handmade Strings</h4>
                  <span className="text-xs font-medium text-crimson-vivid block mb-2">
                    Handmade in USA • Bass Strings
                  </span>
                  <p className="text-xs text-misty/70 leading-relaxed font-normal">
                    Precisão, timbre quente e durabilidade essencial para o fraseado e pegada do contrabaixo jazz.
                  </p>
                </div>
              </div>

              {/* AGUILAR AMPLIFICATION Partner Card */}
              <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-divider relative group hover:border-crimson-vivid/50 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-12 w-28">
                      <Image
                        src="/media/brands/dr-strings-partner.png"
                        alt="Aguilar Amplification NYC Official Brand"
                        fill
                        className="object-contain object-left filter contrast-125"
                      />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-crimson-antique/40 text-crimson-vivid font-bold">
                      OFFICIAL ENDORSER
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Aguilar Amplification NYC</h4>
                  <span className="text-xs font-medium text-crimson-vivid block mb-2">
                    World Class Bass Amplification & Pickups
                  </span>
                  <p className="text-xs text-misty/70 leading-relaxed font-normal">
                    Fidelidade acústica impecável, definição harmônica de graves e presença de palco em turnês mundiais.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
