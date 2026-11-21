"use client";

import React from "react";
import Image from "next/image";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";

export const BaixoBrazilAnnouncement: React.FC = () => {
  const { locale } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-surface border-t border-graphite text-beige relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="p-8 md:p-14 rounded-3xl bg-black border border-graphite flex flex-col md:flex-row items-center gap-10 md:gap-14 shadow-2xl">
          
          {/* Official Course Logo */}
          <div className="relative w-48 sm:w-56 md:w-64 aspect-square shrink-0 rounded-full overflow-hidden border border-graphite bg-black shadow-lg">
            <Image
              src="/media/education/baixo-brazil-logo.jpg"
              alt="Baixo Brazil - Projeto Educacional Isma Ciriaco"
              fill
              className="object-cover"
            />
          </div>

          {/* Announcement Copy */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-graphite border border-graphite text-[10px] font-sans font-bold uppercase tracking-widest text-gold">
              {locale === "en" ? "EDUCATIONAL PROJECT" : "PROJETO EDUCACIONAL"}
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-wide">
              {ARTIST_DATA.courseAnnouncement.title}
            </h3>

            <p className="font-serif italic text-lg sm:text-xl text-gold leading-relaxed">
              {locale === "en" ? "Three editions. A Brazilian musical experience." : ARTIST_DATA.courseAnnouncement.subtitle}
            </p>

            <p className="font-sans text-sm sm:text-base text-beige/80 leading-relaxed font-light">
              {locale === "en"
                ? "An immersive methodology dedicated to the language, phrasing, and percussive foundation of the Brazilian electric bass, from foundational grooves to advanced contemporary jazz improvisation."
                : ARTIST_DATA.courseAnnouncement.description}
            </p>

            {/* Three Editions Tags */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2">
              {ARTIST_DATA.courseAnnouncement.editions.map((edition, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-graphite/60 border border-graphite text-xs font-sans text-white font-medium"
                >
                  {edition}
                </span>
              ))}
            </div>

            {/* Mandatory Release Text */}
            <div className="pt-3">
              <span className="font-sans text-xs tracking-widest uppercase font-bold text-gold inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                {locale === "en" ? "Coming soon to streaming and education platforms." : ARTIST_DATA.courseAnnouncement.platformStatus}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
