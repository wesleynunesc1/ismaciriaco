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
  size = 46,
  monogramOnly = false,
  withText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official circular monogram from IMG_0922 */}
      <div
        className="relative rounded-full overflow-hidden border border-misty/20 bg-surface shadow-md flex items-center justify-center shrink-0"
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
          <span className="font-extrabold tracking-tightest text-misty text-base leading-none uppercase">
            ISMA CIRIACO
          </span>
          <span className="text-[9px] tracking-widest text-misty/60 uppercase mt-1 font-semibold">
            BRAZILIAN JAZZ BASS
          </span>
        </div>
      )}
    </div>
  );
};
