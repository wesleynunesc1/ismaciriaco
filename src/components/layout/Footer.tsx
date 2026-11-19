"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-graphite relative z-10 pt-16 pb-12 text-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-graphite">
          
          {/* Col 1: Wordmark & Category */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="relative w-56 h-14 mb-4">
                <Image
                  src="/media/brands/isma-ciriaco-wordmark.png"
                  alt="Isma Ciriaco"
                  fill
                  className="object-contain object-left filter brightness-110"
                />
              </div>
              <p className="font-serif italic text-base text-beige/70 max-w-sm leading-relaxed">
                &ldquo;A música brasileira como identidade. O mundo como palco.&rdquo;
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs tracking-widest text-gold uppercase font-sans">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Austin, Texas, USA</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-sans tracking-wide">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Início / Biografia
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-gold transition-colors">
                  Música & Álbuns
                </Link>
              </li>
              <li>
                <Link href="/live" className="hover:text-gold transition-colors">
                  Ao Vivo
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-gold transition-colors">
                  Educação
                </Link>
              </li>
              <li>
                <Link href="/epk" className="hover:text-gold transition-colors">
                  EPK / Imprensa
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contato & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase mb-5">
              Contato Profissional
            </h4>
            <div className="space-y-4 text-xs font-sans">
              <div>
                <span className="text-[10px] tracking-widest text-beige/50 uppercase block mb-1">
                  USA Booking & Sessions
                </span>
                <a
                  href={`https://wa.me/${ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>{ARTIST_DATA.contacts.usPhone}</span>
                  <ArrowUpRight className="w-3 h-3 text-gold/70" />
                </a>
              </div>

              <div>
                <span className="text-[10px] tracking-widest text-beige/50 uppercase block mb-1">
                  Brasil Produção & Aulas
                </span>
                <a
                  href={`https://wa.me/${ARTIST_DATA.contacts.brPhoneRaw.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>{ARTIST_DATA.contacts.brPhone}</span>
                  <ArrowUpRight className="w-3 h-3 text-gold/70" />
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={ARTIST_DATA.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>@ciriacoisma</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-beige/40 gap-3">
          <p>© {new Date().getFullYear()} Isma Ciriaco. Todos os direitos reservados.</p>
          <p>Brazilian Bass Player | Austin, Texas, USA</p>
          <p>Endorsements: DR Strings | Aguilar Amplification</p>
        </div>
      </div>
    </footer>
  );
};
