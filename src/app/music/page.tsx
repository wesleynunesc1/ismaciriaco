"use client";

import React from "react";
import { DigitalVinylExperience } from "@/components/sections/DigitalVinylExperience";
import { MusicVideoShowcase } from "@/components/sections/MusicVideoShowcase";
import { BaixoBrazilAnnouncement } from "@/components/sections/BaixoBrazilAnnouncement";

export default function MusicPage() {
  return (
    <div className="pt-28 pb-36 bg-black text-beige min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-16 border-b border-graphite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="font-sans text-[11px] font-bold tracking-widest text-gold uppercase block mb-3">
            DISCOGRAFIA & PROJETOS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-6">
            Música & Produções.
          </h1>
          <p className="font-sans text-base sm:text-lg text-beige/80 max-w-2xl leading-relaxed font-light">
            Conheça as obras autorais e projetos de Isma Ciriaco, mesclando o balanço orgânico do samba à liberdade de improvisação do jazz.
          </p>
        </div>
      </section>

      {/* Featured Vinyl Experience Component (Real Album Art + Em breve em todas as plataformas) */}
      <DigitalVinylExperience />

      {/* 3 Real Music Video Showcases */}
      <MusicVideoShowcase />

      {/* Compact Baixo Brazil Announcement */}
      <BaixoBrazilAnnouncement />

    </div>
  );
}
