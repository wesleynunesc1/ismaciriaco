"use client";

import React from "react";
import { LiveExperienceSection } from "@/components/sections/LiveExperienceSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";

export default function LivePage() {
  return (
    <div className="pt-28 pb-36 bg-black text-beige min-h-screen">
      {/* Page Hero */}
      <section className="relative py-16 border-b border-graphite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="font-sans text-[11px] font-bold tracking-widest text-gold uppercase block mb-3">
            PERFORMANCES & TOURS
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-6">
            A Energia do Palco.
          </h1>
          <p className="font-sans text-base sm:text-lg text-beige/80 max-w-2xl leading-relaxed font-light">
            Apresentações em clubes históricos de jazz, teatros e festivais internacionais nos Estados Unidos e no Brasil.
          </p>
        </div>
      </section>

      {/* Live Photography - Pure & Clean */}
      <LiveExperienceSection />

      {/* Verified Venues in Austin & Beyond */}
      <CredibilitySection />
    </div>
  );
}
