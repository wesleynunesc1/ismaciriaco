"use client";

import React from "react";
import { LiveExperienceSection } from "@/components/sections/LiveExperienceSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";
import { Calendar, MapPin, Music2, ShieldCheck } from "lucide-react";

export default function LivePage() {
  return (
    <div className="pt-28 pb-36 bg-black text-beige min-h-screen">
      {/* Page Hero */}
      <section className="relative py-20 border-b border-graphite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase block mb-4">
            [ PERFORMANCE AO VIVO & TOURS ]
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tightest leading-[0.98] uppercase mb-8">
            A ENERGIA DO PALCO.
          </h1>
          <p className="text-lg md:text-xl text-beige/80 max-w-3xl leading-relaxed font-normal">
            Apresentações de alto nível em clubes de jazz, festivais internacionais e eventos corporativos de prestígio nos Estados Unidos e no Brasil.
          </p>
        </div>
      </section>

      {/* Live Formations & Booking Overview */}
      <LiveExperienceSection />

      {/* Verified Venues in Austin & Beyond */}
      <CredibilitySection />

      {/* Booking Availability Notice (Prompt Rule 10: Do not invent upcoming performances) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 md:p-14 rounded-3xl bg-surface border border-graphite text-center max-w-3xl mx-auto">
          <Calendar className="w-12 h-12 text-gold mx-auto mb-6" />
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-4">
            Disponibilidade & Agenda de Shows
          </h3>
          <p className="text-sm sm:text-base text-beige/70 leading-relaxed mb-8">
            Para consultar datas disponíveis de turnês, apresentações em casas de jazz, teatros ou contratações para eventos privados nos EUA ou Brasil, entre em contato diretamente com nossa produção.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PillButton
              href="/contact?category=Performance%20Booking"
              variant="accent"
            >
              Consultar Disponibilidade de Data
            </PillButton>
            <PillButton
              href={`https://wa.me/${ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              WhatsApp USA (+1 737 262-7871)
            </PillButton>
          </div>
        </div>
      </section>
    </div>
  );
}
