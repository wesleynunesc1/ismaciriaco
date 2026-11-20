"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { IsmaLogo } from "@/components/ui/IsmaLogo";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: locale === "pt" ? "Início" : "Home" },
    { href: "/about", label: locale === "pt" ? "Biografia" : "Biography" },
    { href: "/music", label: locale === "pt" ? "Música" : "Music" },
    { href: "/live", label: locale === "pt" ? "Ao Vivo" : "Live" },
    { href: "/contact", label: locale === "pt" ? "Contato" : "Contact" },
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
        {/* Brand Monogram & Name */}
        <Link href="/" className="group flex items-center gap-3">
          <IsmaLogo size={36} withText={false} />
          <span className="font-serif text-base sm:text-lg tracking-wider text-beige group-hover:text-gold transition-colors uppercase font-medium">
            ISMA CIRIACO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Right Lang Switcher */}
        <div className="hidden md:flex items-center gap-4">
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
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
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
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#080808] z-50 border-b border-graphite px-8 py-10 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif py-3 border-b border-graphite/60 flex items-center justify-between tracking-wide transition-colors ${
                    isActive ? "text-gold font-medium" : "text-beige/90 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-graphite/60 flex flex-col gap-4 text-xs font-sans text-beige/60">
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-widest text-[10px] text-gold">Idioma</span>
              <button
                onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-graphite text-xs text-beige hover:border-gold"
              >
                <Globe className="w-3.5 h-3.5 text-gold" />
                <span className={locale === "pt" ? "text-gold font-bold" : ""}>PT</span>
                <span className="text-graphite">/</span>
                <span className={locale === "en" ? "text-gold font-bold" : ""}>EN</span>
              </button>
            </div>
            <p className="tracking-widest uppercase text-[10px] text-beige/40">
              Isma Ciriaco • Austin, Texas, USA
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
