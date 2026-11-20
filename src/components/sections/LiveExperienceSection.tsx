"use client";

import React from "react";
import Image from "next/image";

export const LiveExperienceSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-black text-beige relative border-b border-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with refined, lighter typography */}
        <div className="max-w-2xl mb-14">
          <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-gold block mb-3">
            PERFORMANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-normal">
            A música acontece ao vivo.
          </h2>
          <p className="font-sans text-sm sm:text-base text-beige/70 mt-3 font-light leading-relaxed">
            Registros autênticos de apresentações em clubes de jazz, teatros e festivais internacionais.
          </p>
        </div>

        {/* Clean Photography Grid - No Overlaid Promotional Text Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Concert Stage Photo (Monk's Jazz Club) */}
          <div className="md:col-span-7 relative min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden border border-graphite bg-black">
            <Image
              src="/media/live/live-stage-monks.jpg"
              alt="Isma Ciriaco ao vivo no Monk's Jazz Club em Austin"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center filter contrast-[1.05] brightness-90"
            />
          </div>

          {/* Right Column: 2 Clean Real Concert Photos */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="relative min-h-[200px] rounded-2xl overflow-hidden border border-graphite bg-black">
              <Image
                src="/media/live/live-bass-vertical.jpg"
                alt="Isma Ciriaco solo de contrabaixo ao vivo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter grayscale contrast-110"
              />
            </div>

            <div className="relative min-h-[200px] rounded-2xl overflow-hidden border border-graphite bg-black">
              <Image
                src="/media/live/live-concert-intimate.jpg"
                alt="Apresentação intimista ao vivo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter contrast-[1.05] brightness-90"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
