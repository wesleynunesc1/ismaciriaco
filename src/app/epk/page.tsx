"use client";

import React from "react";
import Image from "next/image";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";
import { FileText, CheckCircle } from "lucide-react";

export default function EpkPage() {
  return (
    <div className="pt-28 pb-36 bg-black text-beige min-h-screen">
      
      {/* Page Hero */}
      <section className="relative py-20 border-b border-graphite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase block mb-4">
            [ ELECTRONIC PRESS KIT ]
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tightest leading-[0.98] uppercase mb-8">
            DOSSIÊ DE IMPRENSA & CURADORIA.
          </h1>
          <p className="text-lg md:text-xl text-beige/80 max-w-3xl leading-relaxed font-normal">
            Recursos oficiais para programadores de festivais, curadores de casas de jazz, agentes de turnê, assessoria de imprensa e contratantes corporativos.
          </p>
        </div>
      </section>

      {/* EPK Assets Overview with Real Photos & Verified Data */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Press Details & Photography */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Press Photo Preview Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-graphite bg-black shadow-xl">
                <Image
                  src="/media/about/isma-editorial-bw.jpg"
                  alt="Isma Ciriaco Foto de Imprensa Oficial 01"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-xs font-mono text-beige/80">
                  PRESS PHOTO 01 • P&B EDITORIAL
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-graphite bg-black shadow-xl">
                <Image
                  src="/media/hero/isma-hero-main.jpg"
                  alt="Isma Ciriaco Foto de Imprensa Oficial 02"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center filter grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-xs font-mono text-beige/80">
                  PRESS PHOTO 02 • COM INSTRUMENTO
                </div>
              </div>
            </div>

            {/* Short Bio Block */}
            <div className="p-8 md:p-10 rounded-3xl bg-surface border border-graphite">
              <span className="text-xs font-mono font-bold text-gold tracking-widest uppercase block mb-3">
                01 • BIOGRAFIA EDITORIAL (PRESS READY)
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">Isma Ciriaco (Austin, TX / Brasil)</h3>
              <p className="text-sm sm:text-base text-beige/80 leading-relaxed">
                Contrabaixista profissional, produtor musical e educador com mais de 35 anos de carreira dedicada ao Brazilian Jazz, Samba, Bossa Nova e Fusion. Radicado há 11 anos em Austin, Texas, apresenta-se com frequência em locais de renome como Elephant Room, Parker Jazz Club, Monk&apos;s Jazz Club e The Continental Gallery. É artista endorser das marcas globais DR Strings e Aguilar Amplification. Lidera projetos autorais como o álbum <em>Samba for the World</em> e a iniciativa educacional <em>Baixo Brazil One</em>.
              </p>
            </div>

            {/* Technical Rider / Line-up Overview */}
            <div className="p-8 md:p-10 rounded-3xl bg-surface border border-graphite">
              <span className="text-xs font-mono font-bold text-gold tracking-widest uppercase block mb-3">
                02 • TECHNICAL RIDER & FORMAÇÕES
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">Especificações de Palco & Áudio</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-beige/80">
                <div className="p-4 rounded-xl bg-surface-elevated border border-graphite">
                  <span className="font-bold text-white block mb-1">Backline de Contrabaixo</span>
                  <span>1x Cabeçote Aguilar (ou similar de alta fidelidade) + Gabinete 4x10 ou 1x12 com direct box balanceado.</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-elevated border border-graphite">
                  <span className="font-bold text-white block mb-1">Formações Artísticas</span>
                  <span>Opções de Solo Bass acústico/elétrico, Trio Instrumental (Baixo, Bateria, Piano/Teclados) e Banda Completa.</span>
                </div>
              </div>
            </div>

            {/* Verified Endorsements with Partner logos */}
            <div className="p-8 md:p-10 rounded-3xl bg-surface border border-graphite">
              <span className="text-xs font-mono font-bold text-gold tracking-widest uppercase block mb-4">
                03 • ENDORSEMENTS & CHANCELA
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-graphite">
                  <div className="relative w-20 h-10 shrink-0">
                    <Image
                      src="/media/brands/aguilar-partner.png"
                      alt="DR Strings Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">DR Handmade Strings</span>
                    <span className="text-[10px] text-gold font-mono">Official Artist Endorser</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-elevated border border-graphite">
                  <div className="relative w-20 h-10 shrink-0">
                    <Image
                      src="/media/brands/dr-strings-partner.png"
                      alt="Aguilar Amplification Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Aguilar Amplification NYC</span>
                    <span className="text-[10px] text-gold font-mono">Official Artist Endorser</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Download Actions & Booking */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-surface-elevated border border-graphite space-y-6">
              <FileText className="w-10 h-10 text-gold" />
              <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                Solicitar Press Kit Completo
              </h4>
              <p className="text-xs text-beige/70 leading-relaxed">
                Receba o pacote completo em alta definição contendo fotos oficiais de palco, mapa de palco detalhado, lista de canais e rider técnico de som.
              </p>

              <PillButton
                href="/contact?category=EPK%20Request"
                variant="accent"
                className="w-full justify-center"
              >
                Solicitar por E-mail / WhatsApp
              </PillButton>
            </div>

            {/* Direct Booking Contact */}
            <div className="p-6 rounded-3xl bg-surface border border-graphite space-y-4">
              <span className="text-xs font-mono font-bold text-beige/50 uppercase block">
                Agenciamento Imediato
              </span>
              <div className="text-xs space-y-2">
                <p className="font-semibold text-white">
                  USA: {ARTIST_DATA.contacts.usPhone}
                </p>
                <p className="font-semibold text-white">
                  Brasil: {ARTIST_DATA.contacts.brPhone}
                </p>
              </div>
              <PillButton
                href={`https://wa.me/${ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full justify-center text-xs"
              >
                WhatsApp Booking Direct
              </PillButton>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
