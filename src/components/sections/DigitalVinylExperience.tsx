"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Disc3, Play, Pause, Volume2 } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist";
import { PillButton } from "@/components/ui/PillButton";
import { useLanguage } from "@/context/LanguageContext";

export const DigitalVinylExperience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="relative py-28 md:py-36 bg-black text-beige overflow-hidden border-t border-graphite">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/40 border border-graphite text-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Disc3 className="w-3.5 h-3.5" />
              <span>{t.featuredRecord.badge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tightest leading-tight">
              {t.featuredRecord.headline}
            </h2>
          </div>
          <p className="text-sm font-semibold tracking-widest text-beige/50 uppercase md:text-right">
            {t.featuredRecord.format}
          </p>
        </div>

        {/* Real Vinyl Composition with IMG_8202 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Presentation: Real Photo of Isma with Electric Bass in Studio */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-2xl overflow-hidden border border-graphite shadow-[0_25px_60px_rgba(0,0,0,0.95)] group bg-black">
              <Image
                src="/media/hero/isma-hero-bass.jpg"
                alt="Isma Ciriaco - Samba for the World Sessions"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-center filter contrast-[1.08] brightness-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />

              {/* Minimal Editorial Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md px-4 py-3 rounded-xl border border-graphite flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Samba for the World</span>
                  <span className="text-[10px] text-beige/60 font-mono">EDITION NOIR • SESSÕES DE CONTRABAIXO</span>
                </div>
                <span className="text-[10px] font-mono text-gold font-bold uppercase">
                  ISMA CIRIACO
                </span>
              </div>
            </div>
          </div>

          {/* Discography & Tracklist */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-base sm:text-lg text-beige/80 leading-relaxed mb-6 font-normal">
                {t.featuredRecord.description}
              </p>

              {/* Tracklist selection */}
              <div className="space-y-2 border-t border-graphite pt-4">
                <span className="text-xs font-bold tracking-widest text-beige/40 uppercase block mb-3">
                  {t.featuredRecord.tracksTitle}
                </span>

                {ARTIST_DATA.featuredAlbum.tracks.map((track, idx) => (
                  <div
                    key={track.number}
                    onClick={() => {
                      setSelectedTrack(idx);
                      setIsPlaying(true);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${
                      selectedTrack === idx
                        ? "bg-surface-elevated border border-gold/40 text-white"
                        : "hover:bg-surface-elevated/50 text-beige/70"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-xs font-mono font-bold text-gold">
                        {track.number}
                      </span>
                      <span className="text-sm font-semibold">{track.title}</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-beige/50 font-mono">
                      {selectedTrack === idx && isPlaying ? (
                        <div className="flex items-end gap-1 h-3.5">
                          <span className="w-1 bg-gold text-black h-full animate-pulse" />
                          <span className="w-1 bg-gold text-black h-2/3 animate-pulse delay-100" />
                          <span className="w-1 bg-gold text-black h-4/5 animate-pulse delay-200" />
                        </div>
                      ) : (
                        <span>{track.duration}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Player Controls */}
            <div className="p-4 rounded-2xl bg-surface-elevated border border-graphite flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-11 h-11 rounded-full bg-gold text-black text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                  aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  )}
                </button>
                <div>
                  <span className="text-xs font-bold text-white block">
                    {ARTIST_DATA.featuredAlbum.tracks[selectedTrack].title}
                  </span>
                  <span className="text-[11px] text-beige/50">
                    {isPlaying ? "Reproduzindo trecho instrumental" : "Toque para reproduzir demonstração"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-beige/50">
                <Volume2 className="w-4 h-4" />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <PillButton href="/music" variant="primary">
                {t.featuredRecord.ctaAlbum}
              </PillButton>
              <PillButton
                href={ARTIST_DATA.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                {t.featuredRecord.ctaListen}
              </PillButton>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
