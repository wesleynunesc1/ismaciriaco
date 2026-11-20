"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const EditorialHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black text-beige flex flex-col justify-end pt-24 pb-12 sm:pb-16 md:pb-24 overflow-hidden border-b border-graphite">
      {/* Background Official Artist Photography */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background: Vertical portrait matching Marcus Miller reference */}
        <div className="relative w-full h-full block md:hidden">
          <Image
            src="/media/hero/isma-hero-vertical.jpg"
            alt="Isma Ciriaco"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top filter contrast-[1.08] brightness-[0.85]"
          />
          {/* Gradients tailored for mobile legibility like Marcus Miller site */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
        </div>

        {/* Desktop Background: Full horizontal stage composition */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/media/hero/isma-hero-official.jpg"
            alt="Isma Ciriaco"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left lg:object-center filter contrast-[1.05] brightness-[0.88]"
          />
          {/* Layered dark contrast treatment for seamless typography integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/70 lg:to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl md:max-w-3xl">
          
          {/* Subtitle / Kicker */}
          <div className="mb-3 md:mb-4">
            <span className="font-sans text-[10px] sm:text-[11px] md:text-xs tracking-epic uppercase text-gold font-medium">
              Contrabaixista | Compositor | Produtor | Educador
            </span>
          </div>

          {/* Official Custom Lettering Wordmark (Cleaned - No Bazaart watermark) */}
          <div className="relative w-[260px] sm:w-[360px] md:w-[480px] lg:w-[540px] h-[75px] sm:h-[105px] md:h-[140px] mb-4 md:mb-6 -ml-1 sm:-ml-2 md:-ml-3">
            <Image
              src="/media/brands/isma-ciriaco-wordmark.png"
              alt="ISMA CIRIACO"
              fill
              priority
              className="object-contain object-left filter brightness-110 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Editorial Hook inspired by Marcus Miller reference */}
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white leading-tight mb-4 md:mb-6 tracking-wide">
            A música brasileira como identidade. <span className="not-italic font-bold text-beige block sm:inline">O mundo como palco.</span>
          </h2>

          {/* Short Editorial Lead */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-beige/85 leading-relaxed font-light max-w-xl mb-6">
            Isma Ciriaco é um contrabaixista, compositor, produtor musical e educador brasileiro, radicado em Austin, Texas. Com mais de 35 anos de trajetória profissional, conecta as raízes brasileiras à sofisticação do jazz contemporâneo.
          </p>

          {/* Editorial Quick Actions (Marcus Miller style ghost buttons on mobile/desktop) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-full border border-gold/70 text-gold hover:bg-gold hover:text-black font-sans text-xs tracking-widest uppercase transition-all duration-300 font-medium"
            >
              Biografia Completa
            </Link>
            <Link
              href="/music"
              className="px-5 py-2.5 rounded-full border border-graphite text-beige/80 hover:text-white hover:border-beige font-sans text-xs tracking-widest uppercase transition-all duration-300"
            >
              Ouvir Música
            </Link>
          </div>

          {/* Understated Endorsement & Base Metadata */}
          <div className="pt-4 md:pt-6 border-t border-graphite/80 flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-sans tracking-widest text-beige/60 uppercase">
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
