"use client";

import React from "react";
import Image from "next/image";
import { BiographySection } from "@/components/sections/BiographySection";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-36 bg-black text-beige min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 border-b border-graphite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="font-sans text-[11px] font-bold tracking-widest text-gold uppercase block mb-3">
            BIOGRAFIA OFICIAL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-6">
            A História de Isma Ciriaco.
          </h1>
          <p className="font-sans text-base sm:text-lg text-beige/80 max-w-2xl leading-relaxed font-light">
            Mais de 35 anos de trajetória profissional conectando as raízes brasileiras à sofisticação do jazz contemporâneo.
          </p>
        </div>
      </section>

      {/* Official Approved Full Biography */}
      <BiographySection />
    </div>
  );
}
