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
          ? "bg-black/95 backdrop-blur-md border-b border-graphite py-3.5 shadow-xl"
          : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link href="/" className="group flex items-center">
          <IsmaLogo size={38} withText={false} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-widest font-sans uppercase transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-gold font-semibold"
                    : "text-beige/70 hover:text-beige"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Lang Switcher */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-graphite text-[11px] font-sans text-beige/70 hover:text-beige hover:border-gold transition-all"
            title="Mudar idioma / Switch language"
          >
            <Globe className="w-3 h-3 text-gold" />
            <span className={locale === "pt" ? "text-gold font-semibold" : ""}>PT</span>
            <span className="text-graphite">/</span>
            <span className={locale === "en" ? "text-gold font-semibold" : ""}>EN</span>
          </button>

          <PillButton
            href="/contact"
            variant="accent"
            className="!py-2 !px-4 !text-[11px] uppercase tracking-widest font-sans"
          >
            {t.nav.bookCta}
          </PillButton>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
            className="px-2.5 py-1 rounded-full border border-graphite text-[10px] font-bold text-beige/80"
          >
            {locale.toUpperCase()}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-beige hover:text-white focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-black/98 border-b border-graphite px-6 py-8 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-serif py-2 border-b border-graphite/40 flex items-center justify-between ${
                    isActive ? "text-gold" : "text-beige hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-4">
            <PillButton
              href="/contact"
              variant="accent"
              onClick={() => setIsOpen(false)}
              className="w-full justify-center !py-3.5"
            >
              {t.nav.bookCta}
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
};
