"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
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
                  Início
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  Biografia
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
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contato Profissional
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Rio Groove Productions Professional Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-sans font-bold tracking-widest text-gold uppercase mb-5">
              Contato Profissional
            </h4>
            <div className="space-y-3.5 text-xs font-sans">
              <div>
                <span className="text-[11px] font-semibold text-white tracking-wider uppercase block">
                  {ARTIST_DATA.contacts.productionName}
                </span>
                <span className="text-[10px] text-beige/50">Produção & Agenciamento Oficial</span>
              </div>

              <div>
                <a
                  href={`tel:${ARTIST_DATA.contacts.productionPhoneRaw}`}
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>{ARTIST_DATA.contacts.productionPhone}</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${ARTIST_DATA.contacts.productionEmail}`}
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  <span>{ARTIST_DATA.contacts.productionEmail}</span>
                </a>
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={ARTIST_DATA.contacts.productionInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  <span>Instagram Produtora: {ARTIST_DATA.contacts.productionInstagramHandle}</span>
                </a>

                <a
                  href={ARTIST_DATA.contacts.artistInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  <span>Instagram: {ARTIST_DATA.contacts.artistInstagramHandle}</span>
                </a>

                <a
                  href={ARTIST_DATA.contacts.artistYouTube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  <span>YouTube: {ARTIST_DATA.contacts.artistYouTubeHandle}</span>
                </a>

                <a
                  href={ARTIST_DATA.contacts.artistTikTok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  <span>TikTok: {ARTIST_DATA.contacts.artistTikTokHandle}</span>
                </a>

                <a
                  href={ARTIST_DATA.contacts.artistFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige hover:text-gold transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  <span>Facebook: {ARTIST_DATA.contacts.artistFacebookHandle}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-beige/40 gap-3">
          <p>© {new Date().getFullYear()} Isma Ciriaco. Todos os direitos reservados.</p>
          <p>Brazilian Bass Player | Austin, Texas, USA</p>
          <p>
            Endorsements:{" "}
            <a href="https://www.drstrings.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              DR Strings
            </a>{" "}
            |{" "}
            <a href="https://aguilaramp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              Aguilar Amplification
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
