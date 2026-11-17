"use client";

import React from "react";
import Image from "next/image";
import { DigitalVinylExperience } from "@/components/sections/DigitalVinylExperience";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";

export default function MusicPage() {
  return (
    <div className="pt-28 pb-36 bg-raven text-misty min-h-screen">

      {/* Page Header */}
      <section className="relative py-20 border-b border-surface-divider overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-crimson-vivid uppercase block mb-4">
            [ DISCOGRAFIA & LANÇAMENTOS ]
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tightest leading-[0.98] uppercase mb-8">
            PROJETOS & GRAVAÇÕES.
          </h1>
          <p className="text-lg md:text-xl text-misty/80 max-w-3xl leading-relaxed font-normal">
            Conheça as obras autorais, arranjos de estúdio e colaborações de Isma Ciriaco, mesclando o balanço orgânico do samba e a liberdade do jazz.
          </p>
        </div>
      </section>

      {/* Featured Vinyl Experience Component (Real Album Art) */}
      <DigitalVinylExperience />

      {/* Studio Projects & Recording Sessions Info with Real Studio Photo (IMG_7844) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-crimson-vivid uppercase tracking-widest block">
              GRAVAÇÃO DE BAIXO EM ESTÚDIO
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase">
              Linhas de baixo com precisão e personalidade para a sua música.
            </h2>
            <p className="text-base sm:text-lg text-misty/80 leading-relaxed">
              Trabalho com gravação de contrabaixo elétrico e acústico para artistas e produtores do mundo inteiro. Envie sua faixa guia e receba sessões gravadas em áudio de alta resolução (24-bit/96kHz), com opções de timbres via amplificação Aguilar, captação pura e microfonação de gabinete.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <PillButton
                href="/contact?category=Studio%20Recording"
                variant="accent"
              >
                Solicitar Gravação Remota
              </PillButton>
              <PillButton
                href={ARTIST_DATA.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Ouvir no Instagram
              </PillButton>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-surface-divider bg-black shadow-2xl mb-6">
              <Image
                src="/media/music/studio-tracking-horizontal.jpg"
                alt="Isma Ciriaco em estúdio de gravação de contrabaixo"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 text-xs text-misty/80 font-mono">
                SESSÃO DE TRACKING • AGUILAR RIG & DR STRINGS
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-surface-divider space-y-3 text-xs sm:text-sm text-misty/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-vivid" />
                <span>Gravação remota em alta fidelidade via Pro Tools / Logic Pro X</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-vivid" />
                <span>Amplificação de referência: Aguilar Amplification NYC</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-vivid" />
                <span>Cordas DR Strings para máxima definição harmônica</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
