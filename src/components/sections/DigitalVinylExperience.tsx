"use client";

import React from "react";
import Image from "next/image";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";

export const DigitalVinylExperience: React.FC = () => {
  const { locale } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 bg-black text-beige overflow-hidden border-b border-graphite">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-gold block mb-3">
            {locale === "en" ? "FEATURED ALBUM" : "ÁLBUM AUTORAL"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide uppercase mb-4">
            {ARTIST_DATA.featuredAlbum.title}
          </h2>
          <p className="font-sans text-xs md:text-sm tracking-widest uppercase font-semibold text-gold inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            {locale === "en" ? "Coming soon to all digital platforms." : ARTIST_DATA.featuredAlbum.statusText}
          </p>
        </div>

        {/* Real Album Composition with IMG_8202 (Red Vinyl + Black Cover) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Real Photograph: Red Vinyl Record Artwork */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden border border-graphite shadow-2xl bg-black">
              <Image
                src="/media/music/samba-for-the-world-vinyl.jpg"
                alt="Samba for the World - Authentic Physical Vinyl Record with Red Vinyl"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-center filter contrast-[1.05]"
                priority
              />
            </div>
          </div>

          {/* Description & Curated Concept */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              {locale === "en" ? "The Essence of Samba Jazz" : "A Essência do Samba Jazz"}
            </h3>
            <p className="font-sans text-sm sm:text-base text-beige/80 leading-relaxed font-light">
              {locale === "en"
                ? "An original instrumental manifesto celebrating the richness of Brazilian rhythms and global dialogue, blending samba jazz, bossa nova, smooth jazz, and contemporary instrumental fusion."
                : ARTIST_DATA.featuredAlbum.description}
            </p>
            <div className="p-4 rounded-xl bg-surface border border-graphite inline-block text-left w-full">
              <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-gold block mb-1">
                {locale === "en" ? "OFFICIAL RELEASE STATUS" : "STATUS OFICIAL DE LANÇAMENTO"}
              </span>
              <p className="text-xs font-sans text-white">
                {locale === "en" ? "Coming soon to all streaming platforms." : "Em breve em todas as plataformas digitais."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
