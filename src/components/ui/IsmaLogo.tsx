import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  monogramOnly?: boolean;
  withText?: boolean;
}

export const IsmaLogo: React.FC<LogoProps> = ({
  className = "",
  size = 40,
  monogramOnly = false,
  withText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official circular monogram */}
      <div
        className="relative rounded-full overflow-hidden border border-graphite bg-black flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <Image
          src="/media/brands/isma-monogram-round.jpg"
          alt="Isma Ciriaco Monogram"
          width={size}
          height={size}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {!monogramOnly && withText && (
        <div className="flex flex-col tracking-tight">
          <span className="font-serif text-lg font-medium text-beige tracking-wide leading-none uppercase">
            ISMA CIRIACO
          </span>
          <span className="text-[9px] tracking-widest text-gold uppercase mt-1 font-sans">
            BRAZILIAN BASS PLAYER
          </span>
        </div>
      )}
    </div>
  );
};
