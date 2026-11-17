"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { IsmaLogo } from "@/components/ui/IsmaLogo";
import { ARTIST_DATA } from "@/data/artist";
import { useLanguage } from "@/context/LanguageContext";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-surface-divider relative z-10 pt-20 pb-12 text-misty overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-crimson-antique/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-surface-divider">
          {/* Col 1: Identity & Description */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <IsmaLogo size={52} />
              <p className="mt-6 text-sm text-misty/70 max-w-sm leading-relaxed">
                {t.artistIntro.paragraph1}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs tracking-wider text-misty/50 uppercase">
              <MapPin className="w-3.5 h-3.5 text-crimson-vivid" />
              <span>{ARTIST_DATA.currentBase}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-widest text-misty/50 uppercase mb-6">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-crimson-vivid transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-crimson-vivid transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-crimson-vivid transition-colors">
                  {t.nav.music}
                </Link>
              </li>
              <li>
                <Link href="/live" className="hover:text-crimson-vivid transition-colors">
                  {t.nav.live}
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-crimson-vivid transition-colors">
                  {t.nav.education}
                </Link>
              </li>
              <li>
                <Link href="/epk" className="hover:text-crimson-vivid transition-colors">
                  {t.nav.epk}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-crimson-vivid transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Booking & Contacts */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-misty/50 uppercase mb-6">
              Booking & Contato Direto
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-misty/40 uppercase block">
                  Agenciamento USA (Austin, TX)
                </span>
                <a
                  href={`https://wa.me/${ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 font-semibold text-misty hover:text-white group"
                >
                  <Phone className="w-3.5 h-3.5 text-crimson-vivid" />
                  <span>{ARTIST_DATA.contacts.usPhone}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div>
                <span className="text-[11px] font-semibold tracking-wider text-misty/40 uppercase block">
                  Produção & Aulas Brasil
                </span>
                <a
                  href={`https://wa.me/${ARTIST_DATA.contacts.brPhoneRaw.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-1 font-semibold text-misty hover:text-white group"
                >
                  <Phone className="w-3.5 h-3.5 text-crimson-vivid" />
                  <span>{ARTIST_DATA.contacts.brPhone}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={ARTIST_DATA.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-misty hover:text-crimson-vivid transition-colors"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>{ARTIST_DATA.contacts.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-misty/40 gap-4">
          <p>© {new Date().getFullYear()} {ARTIST_DATA.name}. {t.footer.rights}</p>
          <p className="tracking-wide">{t.footer.category}</p>
          <p>{t.footer.location}</p>
        </div>
      </div>
    </footer>
  );
};
