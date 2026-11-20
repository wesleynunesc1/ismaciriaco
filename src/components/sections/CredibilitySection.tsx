"use client";

import React from "react";
import Image from "next/image";
import { ARTIST_DATA } from "@/data/artist";
import { ShieldCheck, MapPin } from "lucide-react";

export const CredibilitySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-surface text-beige border-b border-graphite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite border border-graphite text-gold text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>RECONHECIMENTO & CHANCELA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-wide uppercase mb-4">
            Palcos Históricos & Endorsements Internacionais
          </h2>
          <p className="font-sans text-sm sm:text-base text-beige/70 font-light">
            Trajetória validada nos principais palcos do circuito de jazz do Texas e por marcas de classe mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Verified Historic Venues */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans text-xs font-bold tracking-widest text-gold uppercase border-b border-graphite pb-3">
              Casas de Jazz & Festivais em Austin, Texas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARTIST_DATA.verifiedVenues.map((venue, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-black border border-graphite flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono text-gold block mb-1">
                      0{idx + 1}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">{venue.name}</h4>
                    <p className="font-sans text-xs text-beige/60 mt-1">{venue.type}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-graphite/60 flex items-center gap-1.5 text-[11px] font-sans text-beige/50">
                    <MapPin className="w-3 h-3 text-gold" />
                    <span>{venue.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Endorsements with Real Brand Assets */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans text-xs font-bold tracking-widest text-gold uppercase border-b border-graphite pb-3">
              Endorsements Oficiais
            </h3>

            <div className="space-y-4">
              {/* DR STRINGS Partner Card */}
              <div className="p-6 rounded-2xl bg-black border border-graphite flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-10 w-28">
                      <Image
                        src="/media/brands/aguilar-partner.png"
                        alt="DR Strings Official Brand"
                        fill
                        className="object-contain object-left filter contrast-125"
                      />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-graphite text-gold font-bold">
                      OFFICIAL ENDORSER
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">DR Handmade Strings</h4>
                  <span className="text-xs font-sans text-gold block mb-2">
                    Handmade in USA • Bass Strings
                  </span>
                  <p className="text-xs font-sans text-beige/70 leading-relaxed font-light">
                    Precisão, timbre quente e durabilidade essencial para o fraseado e pegada do contrabaixo jazz.
                  </p>
                </div>
              </div>

              {/* AGUILAR AMPLIFICATION Partner Card */}
              <div className="p-6 rounded-2xl bg-black border border-graphite flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative h-10 w-28">
                      <Image
                        src="/media/brands/dr-strings-partner.png"
                        alt="Aguilar Amplification NYC Official Brand"
                        fill
                        className="object-contain object-left filter contrast-125"
                      />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-graphite text-gold font-bold">
                      OFFICIAL ENDORSER
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white">Aguilar Amplification NYC</h4>
                  <span className="text-xs font-sans text-gold block mb-2">
                    World Class Bass Amplification & Pickups
                  </span>
                  <p className="text-xs font-sans text-beige/70 leading-relaxed font-light">
                    Fidelidade acústica impecável, definição harmônica de graves e presença de palco em turnês mundiais.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
