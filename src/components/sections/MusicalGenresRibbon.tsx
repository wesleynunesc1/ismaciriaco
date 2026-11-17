"use client";

import React from "react";
import { ARTIST_DATA } from "@/data/artist";

export const MusicalGenresRibbon: React.FC = () => {
  return (
    <div className="bg-raven py-8 border-b border-surface-divider overflow-hidden select-none relative">
      {/* Editorial horizontal layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-6 md:gap-8">
        <span className="text-[11px] font-mono tracking-widest text-crimson-vivid uppercase font-bold">
          [ UNIVERSO SONORO ]
        </span>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {ARTIST_DATA.genres.map((genre, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="text-sm md:text-base font-extrabold tracking-wider text-misty/90 hover:text-white transition-colors cursor-default">
                {genre}
              </span>
              {idx < ARTIST_DATA.genres.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-crimson-vivid/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
