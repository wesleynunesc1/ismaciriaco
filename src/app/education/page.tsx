"use client";

import React from "react";
import Image from "next/image";
import { EducationSection } from "@/components/sections/EducationSection";
import { PillButton } from "@/components/ui/PillButton";

export default function EducationPage() {
  return (
    <div className="pt-28 pb-36 bg-raven text-misty min-h-screen">
      
      {/* Page Hero */}
      <section className="relative py-20 border-b border-surface-divider overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-crimson-vivid uppercase block mb-4">
            [ FORMAÇÃO MUSICAL & MASTERCLASSES ]
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tightest leading-[0.98] uppercase mb-8">
            BAIXO BRAZIL ONE.
          </h1>
          <p className="text-lg md:text-xl text-misty/80 max-w-3xl leading-relaxed font-normal">
            Aprenda a linguagem, o fraseado rítmico e a condução autêntica da música brasileira no contrabaixo diretamente com Isma Ciriaco.
          </p>
        </div>
      </section>

      {/* Main Education Showcase with Real Photography */}
      <EducationSection />

      {/* Curriculum & Focus Areas */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold text-crimson-vivid uppercase tracking-widest block mb-2">
            CONTEÚDO PROGRAMÁTICO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
            O que você vai dominar.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-surface border border-surface-divider space-y-4">
            <span className="text-xs font-mono font-bold text-crimson-vivid block">
              MÓDULO 01
            </span>
            <h3 className="text-xl font-bold text-white">Levadas de Samba & Partido-Alto</h3>
            <p className="text-xs sm:text-sm text-misty/70 leading-relaxed">
              O balanço e síncope essenciais da levada do samba no contrabaixo elétrico. Subdivisão de semicolcheia, ghost notes e articulação orgânica.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-surface-divider space-y-4">
            <span className="text-xs font-mono font-bold text-crimson-vivid block">
              MÓDULO 02
            </span>
            <h3 className="text-xl font-bold text-white">Bossa Nova & Harmonia Moderna</h3>
            <p className="text-xs sm:text-sm text-misty/70 leading-relaxed">
              Condução refinada, condução de vozes (voice leading), acordes invertidos e a dinâmica suave e sofisticada da bossa nova.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-surface border border-surface-divider space-y-4">
            <span className="text-xs font-mono font-bold text-crimson-vivid block">
              MÓDULO 03
            </span>
            <h3 className="text-xl font-bold text-white">Improvisação & Brazilian Jazz</h3>
            <p className="text-xs sm:text-sm text-misty/70 leading-relaxed">
              Escalas, arpejos, construção melódica de solos e interação rítmica no contexto de trio e jazz contemporâneo.
            </p>
          </div>
        </div>

        {/* Real Console & Gear Photo Banner (IMG_6707) */}
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-surface-divider mb-16 bg-black shadow-2xl">
          <Image
            src="/media/education/studio-mixing-console.jpg"
            alt="Mesa de mixagem e estúdio em Austin"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover filter contrast-[1.08] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-xs text-misty/80">
            <span className="font-mono text-crimson-vivid font-bold uppercase">
              WORKSHOPS, MASTERCLASSES & GRAVAÇÕES EM AUSTIN, TEXAS
            </span>
            <span className="hidden sm:inline font-mono">ESTÚDIO DE ALTA DEFINIÇÃO</span>
          </div>
        </div>

        {/* Enrollment inquiry banner */}
        <div className="p-8 md:p-14 rounded-3xl bg-surface-elevated border border-surface-divider flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Interessado em aulas particulares ou workshops institucionais?
            </h3>
            <p className="text-sm text-misty/70">
              Aulas disponíveis online via Zoom para todo o mundo ou presenciais em Austin, Texas.
            </p>
          </div>

          <PillButton
            href="/contact?category=Education"
            variant="accent"
            className="shrink-0"
          >
            Solicitar Informações de Vagas
          </PillButton>
        </div>
      </section>
    </div>
  );
}
