"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { IsmaLogo } from "@/components/ui/IsmaLogo";
import { PillButton } from "@/components/ui/PillButton";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/music", label: t.nav.music },
    { href: "/live", label: t.nav.live },
    { href: "/education", label: t.nav.education },
    { href: "/epk", label: t.nav.epk },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-raven/90 backdrop-blur-md border-b border-surface-divider py-3.5 shadow-2xl"
          : "bg-gradient-to-b from-raven/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center">
          <IsmaLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-misty/70 hover:text-misty"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-crimson-vivid" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Lang Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-misty/20 text-xs font-semibold text-misty/80 hover:text-white hover:border-misty/50 transition-all"
            title="Mudar idioma / Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-crimson-vivid" />
            <span className={locale === "pt" ? "text-crimson-vivid font-bold" : ""}>PT</span>
            <span className="text-misty/30">/</span>
            <span className={locale === "en" ? "text-crimson-vivid font-bold" : ""}>EN</span>
          </button>

          {/* Booking Pill Button */}
          <PillButton
            href="/contact"
            variant="accent"
            className="!py-2.5 !px-5 !text-xs uppercase"
          >
            {t.nav.bookCta}
          </PillButton>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className="px-2.5 py-1 rounded-full border border-misty/20 text-[11px] font-bold text-misty/80"
          >
            {locale.toUpperCase()}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-misty hover:text-white focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X className="w-7 h-7 text-crimson-vivid" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-raven/98 border-b border-surface-divider px-6 py-8 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold py-2 border-b border-surface-divider/40 flex items-center justify-between ${
                    isActive ? "text-crimson-vivid" : "text-misty hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-crimson-vivid" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <PillButton
              href="/contact"
              variant="accent"
              onClick={() => setIsOpen(false)}
              className="w-full justify-center !py-4"
            >
              {t.nav.bookCta}
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
};
