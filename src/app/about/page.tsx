"use client";

import React from "react";
import Image from "next/image";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-36 bg-raven text-misty min-h-screen">
      
      {/* Page Hero */}
      <section className="relative py-20 border-b border-surface-divider overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-xs font-mono font-bold tracking-widest text-crimson-vivid uppercase block mb-4">
              [ BIOGRAFIA OFICIAL ]
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tightest leading-[0.98] uppercase mb-8">
              A HISTÓRIA POR TRÁS DO GROOVE.
            </h1>
            <p className="text-lg md:text-xl text-misty/80 leading-relaxed font-normal">
              Mais de 35 anos de trajetória musical unindo a tradição brasileira, a harmonia requintada do jazz e uma carreira consolidada em Austin, Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Main Editorial Content with Real Photographs */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Authentic Photography & Timeline */}
          <div className="lg:col-span-5 space-y-8">
            {/* Real Natural Portrait (IMG_8282) */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-surface-divider bg-black shadow-2xl">
              <Image
                src="/media/about/isma-portrait-natural.jpg"
                alt="Isma Ciriaco Retrato Natural"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover filter contrast-[1.06]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-white">
                <span className="font-bold text-base block">Isma Ciriaco</span>
                <span className="text-misty/70 font-mono text-[11px]">Brazilian Jazz Bassist & Producer</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="p-8 rounded-3xl bg-surface border border-surface-divider shadow-xl">
              <span className="text-xs font-mono font-bold text-crimson-vivid tracking-widest uppercase block mb-4">
                TRAJETÓRIA & MARCOS
              </span>

              <div className="space-y-6">
                <div className="border-l-2 border-crimson-vivid pl-4">
                  <span className="text-xs font-bold text-misty/50 uppercase block">Origens • Brasil</span>
                  <h4 className="text-base font-bold text-white mt-1">Cambuquira, Minas Gerais</h4>
                  <p className="text-xs text-misty/70 mt-1 leading-relaxed">
                    Início da paixão pelo contrabaixo e imersão profunda nos ritmos de MPB, Samba e Bossa Nova.
                  </p>
                </div>

                <div className="border-l-2 border-crimson-vivid pl-4">
                  <span className="text-xs font-bold text-misty/50 uppercase block">11+ Anos nos EUA</span>
                  <h4 className="text-base font-bold text-white mt-1">Austin, Texas — Live Music Capital</h4>
                  <p className="text-xs text-misty/70 mt-1 leading-relaxed">
                    Fixação de residência artística, liderança de projetos instrumentais e presença nos principais jazz clubs da cidade.
                  </p>
                </div>

                <div className="border-l-2 border-crimson-vivid pl-4">
                  <span className="text-xs font-bold text-misty/50 uppercase block">Reconhecimento Global</span>
                  <h4 className="text-base font-bold text-white mt-1">DR Strings & Aguilar Endorser</h4>
                  <p className="text-xs text-misty/70 mt-1 leading-relaxed">
                    Parceria com marcas de elite no mercado internacional do contrabaixo profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Narrative Text & Studio Shot */}
          <div className="lg:col-span-7 space-y-8 text-base md:text-lg text-misty/80 leading-relaxed font-normal">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Construindo uma voz própria no contrabaixo.
            </h2>

            <p>
              Minha marca pessoal e profissional foi construída ao longo de mais de 35 anos de dedicação integral à música. Minha história começou no Brasil, onde desenvolvi minha carreira como contrabaixista, produtor musical e educador, trabalhando com diversos artistas e participando de gravações, shows e projetos musicais em palcos e estúdios.
            </p>

            <p>
              Há cerca de 11 anos, me mudei para os Estados Unidos e passei a desenvolver minha carreira internacional em Austin, Texas — conhecida mundialmente como a capital da música ao vivo. Levar a identidade e os ritmos da música brasileira para novos públicos tornou-se a grande missão da minha jornada.
            </p>

            {/* Performance Action Photo in Story (IMG_8284) */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-surface-divider my-6 bg-black">
              <Image
                src="/media/about/isma-profile-performance.jpg"
                alt="Isma Ciriaco em ação no contrabaixo"
                fill
                sizes="(max-width: 768px) 100vw, 650px"
                className="object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-xs font-mono text-misty/80">
                SESSÕES EM AUSTIN, TEXAS
              </div>
            </div>

            <p>
              Hoje, meu trabalho é voltado para apresentações ao vivo, shows, festivais, gravações em estúdio de alta fidelidade, produção musical, workshops, aulas de contrabaixo e criação de conteúdo especializado. Minha especialidade é o Brazilian Jazz, Samba, Bossa Nova, MPB e Fusion.
            </p>

            <h3 className="text-2xl font-extrabold text-white tracking-tight pt-4">
              Liderança de projetos autorais e compromisso com o futuro.
            </h3>

            <p>
              Além de atuar como músico de apoio e gravação para artistas de diferentes vertentes, desenvolvo meus próprios projetos autorais, como o álbum <em>Samba for the World</em> e a metodologia educacional <em>Baixo Brazil One</em>, transmitindo as nuances da condução rítmica e expressiva para alunos do mundo inteiro.
            </p>

            <div className="pt-8">
              <PillButton href="/contact" variant="accent">
                Solicitar Contratação para Eventos
              </PillButton>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
