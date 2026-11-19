"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Video, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const MediaShowcaseSection: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-28 md:py-36 bg-surface text-beige border-b border-graphite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite/40 border border-graphite text-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Video className="w-4 h-4" />
              <span>{t.mediaSection.badge}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tightest leading-tight text-white uppercase">
              {t.mediaSection.headline}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-beige/70 max-w-md leading-relaxed">
            {t.mediaSection.subhead}
          </p>
        </div>

        {/* Real Performance Video Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Featured Large Player with copy_7438A0DE-F4B4-4376-809A-7411ACD4419C.mov */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-graphite bg-black group shadow-2xl flex flex-col justify-between">
            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                src="/media/video/performance-live-7438.mov"
                poster="/media/live/live-stage-monks.jpg"
                playsInline
                preload="metadata"
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
              />

              {/* Play / Pause Overlay Trigger */}
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-all cursor-pointer flex items-center justify-center group"
              >
                {!isPlaying && (
                  <div className="w-20 h-20 rounded-full bg-gold text-black text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                )}
              </div>

              {/* Video Bottom Floating Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-xs font-bold text-white border border-graphite flex items-center gap-2 hover:bg-gold text-black transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isPlaying ? "PAUSAR" : "REPRODUZIR SESSÃO"}</span>
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2.5 rounded-full bg-black/80 backdrop-blur-md text-white border border-graphite hover:bg-surface-elevated transition-colors"
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-gold" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="p-6 bg-surface-elevated border-t border-graphite flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-gold font-bold block mb-1">
                  REGISTRO AO VIVO • SESSÃO TEXAS
                </span>
                <h3 className="text-xl font-bold text-white">
                  Brazilian Jazz Sessions & Grooves ao Vivo
                </h3>
              </div>
              <span className="text-xs font-mono text-beige/50">
                ÁUDIO AO VIVO AUTÊNTICO
              </span>
            </div>
          </div>

          {/* Documentary Video & Studio Snapshots (Right Column) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Solo Performance Preview with copy_EE541D1F-10B3-4469-AF7E-EFC86BC16598.mov */}
            <div className="p-6 rounded-3xl bg-surface-elevated border border-graphite flex flex-col justify-between">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-black border border-graphite">
                <video
                  src="/media/video/bass-solo-ee54.mov"
                  poster="/media/about/isma-profile-performance.jpg"
                  playsInline
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-gold uppercase block mb-1">
                  SOLO & TÉCNICA
                </span>
                <h4 className="text-base font-bold text-white mb-1">
                  Articulação & Expressividade de Contrabaixo
                </h4>
                <p className="text-xs text-beige/70">
                  Estudo de fraseado melódico e dinâmica instrumental.
                </p>
              </div>
            </div>

            {/* Stage Moment Photo Card */}
            <div className="p-6 rounded-3xl bg-surface-elevated border border-graphite flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-graphite bg-black">
                <Image
                  src="/media/about/isma-stage-moment.jpg"
                  alt="Momento de palco Isma Ciriaco"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-beige/50 uppercase block">
                  DOCUMENTÁRIO
                </span>
                <h5 className="text-sm font-bold text-white">
                  35+ Anos nos Palcos
                </h5>
                <p className="text-xs text-beige/60 mt-0.5">
                  Conexão cultural genuína através da música instrumental.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
