"use client";

import React from "react";
import Image from "next/image";

export const EditorialHero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] md:min-h-screen bg-black text-beige flex flex-col justify-end pt-28 pb-16 md:pb-24 overflow-hidden border-b border-graphite">
      {/* Background Official Artist Photography (IMG_8904 / isma-hero-official.jpg) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/hero/isma-hero-official.jpg"
          alt="Isma Ciriaco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left md:object-center filter contrast-[1.05] brightness-[0.88]"
        />
        {/* Layered dark contrast treatment for seamless typography integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/70 md:to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl md:max-w-3xl">
          
          {/* Subtitle / Kicker */}
          <div className="mb-4">
            <span className="font-sans text-[11px] md:text-xs tracking-epic uppercase text-gold font-medium">
              Contrabaixista | Compositor | Produtor Musical | Educador
            </span>
          </div>

          {/* Official Custom Lettering Wordmark */}
          <div className="relative w-[280px] sm:w-[380px] md:w-[480px] lg:w-[540px] h-[90px] sm:h-[120px] md:h-[150px] mb-6 -ml-2 sm:-ml-3">
            <Image
              src="/media/brands/isma-ciriaco-wordmark.png"
              alt="ISMA CIRIACO"
              fill
              priority
              className="object-contain object-left filter brightness-110 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Editorial Hook */}
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white leading-tight mb-6 tracking-wide">
            A música brasileira como identidade. O mundo como palco.
          </h2>

          {/* Short Intro Lead */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-beige/85 leading-relaxed font-light max-w-xl">
            Isma Ciriaco é um contrabaixista, compositor, produtor musical e educador brasileiro, radicado em Austin, Texas, nos Estados Unidos. Com mais de 35 anos de trajetória profissional, conecta as raízes brasileiras à sofisticação do jazz contemporâneo.
          </p>

          {/* Understated Endorsement & Base Metadata */}
          <div className="mt-8 pt-6 border-t border-graphite/80 flex flex-wrap items-center gap-6 text-[11px] font-sans tracking-widest text-beige/60 uppercase">
            <span>Austin, Texas, USA</span>
            <span className="text-graphite">•</span>
            <span>DR Strings</span>
            <span className="text-graphite">•</span>
            <span>Aguilar Amplification</span>
          </div>

        </div>
      </div>
    </section>
  );
};
