"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PillButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary";
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  target?: string;
  rel?: string;
  withArrow?: boolean;
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  target,
  rel,
  withArrow = true,
}) => {
  // Editorial pill button:
  // PRIMARY: Warm beige with black text, subtle gold/graphite details
  // ACCENT: Warm gold pill with black text
  // SECONDARY: Minimal dark border with beige text
  const baseClasses =
    "group inline-flex items-center justify-between gap-3.5 font-medium rounded-full px-6 py-3 text-xs md:text-sm tracking-wide transition-all duration-300 ease-out select-none active:scale-[0.98]";

  let variantClasses = "";
  let arrowCircleClasses = "";

  if (variant === "primary") {
    variantClasses =
      "bg-beige text-black hover:bg-white border border-beige";
    arrowCircleClasses =
      "bg-black text-beige group-hover:bg-gold group-hover:text-black";
  } else if (variant === "accent") {
    variantClasses =
      "bg-gold text-black hover:bg-gold-light border border-gold";
    arrowCircleClasses =
      "bg-black text-gold group-hover:rotate-45";
  } else {
    // secondary
    variantClasses =
      "bg-transparent text-beige border border-graphite hover:border-gold hover:text-white";
    arrowCircleClasses =
      "bg-graphite text-beige group-hover:bg-gold group-hover:text-black";
  }

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${arrowCircleClasses}`}
        >
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  );
};
