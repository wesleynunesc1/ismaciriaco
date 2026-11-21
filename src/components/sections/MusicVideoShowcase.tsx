"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface TrackVideo {
  id: string;
  label: string;
  videoSrc: string;
  posterSrc: string;
}

const TRACKS: TrackVideo[] = [
  {
    id: "track-1",
    label: "Before & After • Performance 01",
    videoSrc: "/media/video/track-preview-01.mp4",
    posterSrc: "/media/video/track-preview-01-poster.jpg",
  },
  {
    id: "track-2",
    label: "Before & After • Performance 02",
    videoSrc: "/media/video/track-preview-02.mp4",
    posterSrc: "/media/video/track-preview-02-poster.jpg",
  },
  {
    id: "track-3",
    label: "Before & After • Performance 03",
    videoSrc: "/media/video/track-preview-03.mp4",
    posterSrc: "/media/video/track-preview-03-poster.jpg",
  },
  {
    id: "track-4",
    label: "Before & After • Performance 04",
    videoSrc: "/media/video/track-preview-04.mp4",
    posterSrc: "/media/video/track-preview-04-poster.jpg",
  },
];

export const MusicVideoShowcase: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause any previously playing video
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId]?.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  const toggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#080808] text-beige overflow-hidden border-b border-graphite">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track, idx) => {
            const isPlaying = playingId === track.id;

            return (
              <div
                key={track.id}
                className="group rounded-2xl bg-black border border-graphite overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-gold/60 shadow-xl"
              >
                {/* Video Player Box - Instantly Visible with Poster & Auto Preload */}
                <div 
                  className="relative aspect-[9/16] bg-black overflow-hidden cursor-pointer"
                  onClick={() => togglePlay(track.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[track.id] = el;
                    }}
                    src={track.videoSrc}
                    poster={track.posterSrc}
                    playsInline
                    loop
                    preload="auto"
                    onEnded={() => setPlayingId(null)}
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />

                  {/* Play/Pause Overlay Indicator */}
                  <div
                    className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${
                      isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                      className="w-14 h-14 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-2xl transition-transform duration-300 transform group-hover:scale-110"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-black" />
                      ) : (
                        <Play className="w-6 h-6 fill-black ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Track Number Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-black/80 border border-graphite text-gold backdrop-blur-sm">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Audio Mute/Unmute quick control */}
                  <button
                    type="button"
                    onClick={(e) => toggleMute(e, track.id)}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 border border-graphite text-beige/80 hover:text-gold transition-colors"
                    title={isMuted ? "Ativar som" : "Desativar som"}
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Text and Actions directly below each video */}
                <div className="p-4 bg-black border-t border-graphite/40 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-sans font-semibold tracking-wider text-gold uppercase">
                      {track.label}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-beige/40 uppercase">
                      Ao Vivo
                    </span>
                  </div>

                  <div className="pt-2 border-t border-graphite/30 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => togglePlay(track.id)}
                      className="text-xs font-sans tracking-widest uppercase font-semibold text-white group-hover:text-gold inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{isPlaying ? "Pausar" : "Assistir"}</span>
                      {isPlaying ? (
                        <Pause className="w-3 h-3 text-gold" />
                      ) : (
                        <Play className="w-3 h-3 fill-gold text-gold" />
                      )}
                    </button>
                    <span className="text-[10px] text-beige/50 font-sans">
                      Contrabaixo
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Section Description placed BELOW the videos */}
        <div className="max-w-3xl mt-14 pt-10 border-t border-graphite/60">
          <span className="font-sans text-[11px] font-bold tracking-widest text-gold uppercase block mb-3">
            AUDIÇÃO EXCLUSIVA • REGISTROS EM VÍDEO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide uppercase mb-4">
            A Música em Primeira Mão.
          </h2>
          <p className="font-sans text-sm sm:text-base text-beige/80 leading-relaxed font-light">
            Registros originais em vídeo apresentando as composições, grooves e a linguagem instrumental de Isma Ciriaco no contrabaixo elétrico.
          </p>
        </div>

      </div>
    </section>
  );
};