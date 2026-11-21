"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export const LiveExperienceSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="py-20 md:py-28 bg-black text-beige relative border-b border-graphite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with refined, lighter typography */}
        <div className="max-w-2xl mb-12">
          <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-gold block mb-3">
            PERFORMANCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-normal">
            A música acontece ao vivo.
          </h2>
          <p className="font-sans text-sm sm:text-base text-beige/70 mt-3 font-light leading-relaxed">
            Registro autêntico de apresentação ao vivo em clube de jazz, capturando o timbre, a energia da banda e a improvisação no contrabaixo.
          </p>
        </div>

        {/* Video Player in first position */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-graphite bg-[#080808] shadow-2xl group mb-12">
          <div 
            className="relative aspect-video max-h-[720px] w-full overflow-hidden cursor-pointer bg-black flex items-center justify-center"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/media/video/live-performance-concert.mp4"
              poster="/media/video/live-performance-poster.jpg"
              preload="auto"
              playsInline
              controls
              className="w-full h-full object-contain bg-black"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Subtle Custom Play Overlay if paused */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 pointer-events-none"
              >
                <div className="w-20 h-20 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 fill-black ml-1" />
                </div>
              </div>
            )}

            {/* Quick sound toggle */}
            <button
              type="button"
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/75 border border-graphite text-beige/80 hover:text-gold transition-colors"
              title={isMuted ? "Ativar som" : "Desativar som"}
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>

          {/* Understated caption bar below the video */}
          <div className="p-6 bg-black border-t border-graphite/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-gold font-bold block mb-1">
                AO VIVO NO JAZZ CLUB
              </span>
              <p className="text-sm font-sans text-white font-medium">
                Isma Ciriaco — Solo & Interação Rítmica ao Contrabaixo
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-sans text-beige/60">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                Live Session
              </span>
              <span className="text-graphite">•</span>
              <span>Gravação Autêntica</span>
            </div>
          </div>
        </div>

        {/* Photography Grid directly below the video */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Concert Stage Photo (Monk's Jazz Club) */}
          <div className="md:col-span-7 relative min-h-[360px] md:min-h-[460px] rounded-2xl overflow-hidden border border-graphite bg-black">
            <Image
              src="/media/live/live-stage-monks.jpg"
              alt="Isma Ciriaco ao vivo no Monk's Jazz Club em Austin"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center filter contrast-[1.05] brightness-90"
            />
          </div>

          {/* Right Column: 2 Clean Real Concert Photos */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="relative min-h-[200px] rounded-2xl overflow-hidden border border-graphite bg-black">
              <Image
                src="/media/live/live-bass-vertical.jpg"
                alt="Isma Ciriaco solo de contrabaixo ao vivo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter grayscale contrast-110"
              />
            </div>

            <div className="relative min-h-[200px] rounded-2xl overflow-hidden border border-graphite bg-black">
              <Image
                src="/media/live/live-concert-intimate.jpg"
                alt="Apresentação intimista ao vivo"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter contrast-[1.05] brightness-90"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
