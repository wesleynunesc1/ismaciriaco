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
  // Variant styles matching prompt:
  // PRIMARY: Warm off-white pill with black text and a black circular arrow.
  // ACCENT: Vivid red pill with white text and a dark circular arrow.
  // SECONDARY: Transparent pill with a subtle warm-white border.
  const baseClasses =
    "group inline-flex items-center justify-between gap-4 font-bold rounded-full px-7 py-3.5 text-sm md:text-base tracking-tight transition-all duration-300 ease-out select-none active:scale-[0.98]";

  let variantClasses = "";
  let arrowCircleClasses = "";

  if (variant === "primary") {
    variantClasses =
      "bg-misty text-raven hover:bg-white hover:shadow-[0_8px_30px_rgba(231,224,210,0.25)] border border-misty";
    arrowCircleClasses =
      "bg-raven text-misty group-hover:bg-crimson-vivid group-hover:text-white";
  } else if (variant === "accent") {
    variantClasses =
      "bg-crimson-vivid text-white hover:bg-[#d60000] hover:shadow-[0_8px_30px_rgba(183,0,0,0.4)] border border-crimson-vivid";
    arrowCircleClasses =
      "bg-raven text-white group-hover:rotate-45";
  } else {
    // secondary
    variantClasses =
      "bg-transparent text-misty border border-misty/30 hover:border-misty hover:bg-misty/10";
    arrowCircleClasses =
      "bg-surface-divider text-misty group-hover:bg-misty group-hover:text-raven";
  }

  const content = (
    <>
      <span className="font-semibold">{children}</span>
      {withArrow && (
        <span
          className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${arrowCircleClasses}`}
        >
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
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
