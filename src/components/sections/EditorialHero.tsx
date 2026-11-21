"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export const EditorialHero: React.FC = () => {
  const { locale, t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-[#080808] text-beige flex flex-col justify-end pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-24 overflow-hidden border-b border-graphite">
      {/* Background Official Artist Photography */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background: Vertical portrait positioned faithfully to Marcus Miller mobile reference */}
        <div className="relative w-full h-full block md:hidden">
          <Image
            src="/media/hero/isma-hero-vertical.jpg"
            alt="Isma Ciriaco"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[35%_12%] filter contrast-[1.02] brightness-110"
          />
          {/* Suave degradê apenas na base inferior para garantir legibilidade dos botões/texto sem escurecer a foto */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 via-30% to-transparent" />
        </div>

        {/* Desktop Background: Full horizontal stage composition */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/media/hero/isma-hero-official.jpg"
            alt="Isma Ciriaco"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left lg:object-center filter contrast-[1.02] brightness-110"
          />
          {/* Degradê sutil à esquerda e na base apenas para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 via-[#080808]/25 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-2xl md:max-w-3xl">
          
          {/* Subtitle / Kicker - shifted down ~100px on mobile via mt-24 / pt-6 */}
          <div className="mt-20 sm:mt-24 md:mt-0 mb-4 md:mb-6">
            <span className="font-sans text-[11px] sm:text-xs tracking-epic uppercase text-gold font-medium">
              {locale === "en" ? "Bass Player | Composer | Producer | Educator" : "Contrabaixista | Compositor | Produtor | Educador"}
            </span>
          </div>

          {/* Editorial Hook inspired by Marcus Miller reference */}
          <h2 className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white leading-tight mb-4 md:mb-6 tracking-wide">
            {locale === "en" ? (
              <>Brazilian music as identity. <span className="not-italic font-bold text-beige block sm:inline">The world as stage.</span></>
            ) : (
              <>A música brasileira como identidade. <span className="not-italic font-bold text-beige block sm:inline">O mundo como palco.</span></>
            )}
          </h2>

          {/* Short Editorial Lead */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-beige/85 leading-relaxed font-light max-w-xl mb-6">
            {t.hero.description}
          </p>

          {/* Editorial Quick Actions (Marcus Miller style ghost buttons on mobile/desktop) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-full border border-gold/70 text-gold hover:bg-gold hover:text-black font-sans text-xs tracking-widest uppercase transition-all duration-300 font-medium"
            >
              {locale === "en" ? "Full Biography" : "Biografia Completa"}
            </Link>
            <Link
              href="/music"
              className="px-5 py-2.5 rounded-full border border-graphite text-beige/80 hover:text-white hover:border-beige font-sans text-xs tracking-widest uppercase transition-all duration-300"
            >
              {locale === "en" ? "Listen to Music" : "Ouvir Música"}
            </Link>
          </div>

          {/* Understated Endorsement & Base Metadata */}
          <div className="pt-4 md:pt-6 border-t border-graphite/80 flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-sans tracking-widest text-beige/60 uppercase">
            <span>Austin, Texas, USA</span>
            <span className="text-graphite">•</span>
            <a
              href="https://www.drstrings.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              DR Strings ↗
            </a>
            <span className="text-graphite">•</span>
            <a
              href="https://aguilaramp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              Aguilar Amplification ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
