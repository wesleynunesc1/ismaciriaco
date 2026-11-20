"use client";

import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-36 bg-black text-beige min-h-screen">
      {/* Page Hero */}
      <section className="relative py-20 border-b border-graphite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="font-sans text-[11px] font-bold tracking-widest text-gold uppercase block mb-3">
            CONTATO & PRODUÇÃO
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-6">
            Contato Profissional.
          </h1>
          <p className="font-sans text-base sm:text-lg text-beige/80 max-w-2xl leading-relaxed font-light">
            Para propostas artísticas, apresentações, produções musicais e parcerias, entre em contato diretamente com a equipe oficial de produção.
          </p>
        </div>
      </section>

      {/* Rio Groove Productions Minimal Contact Card */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12">
        <div className="p-8 md:p-14 rounded-3xl bg-surface border border-graphite shadow-2xl">
          
          <div className="mb-10 pb-8 border-b border-graphite text-center md:text-left">
            <span className="font-sans text-xs tracking-epic uppercase text-gold block mb-2 font-medium">
              AGENCIAMENTO & PRODUÇÃO EXCLUSIVA
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              {ARTIST_DATA.contacts.productionName}
            </h2>
            <p className="font-sans text-sm text-beige/70 mt-2 font-light">
              Responsável por shows, festivais, colaborações artísticas e relações institucionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Phone Channel */}
            <div className="p-6 rounded-2xl bg-black border border-graphite flex flex-col justify-between space-y-3">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-gold uppercase block mb-1">
                  Telefone / WhatsApp
                </span>
                <span className="font-sans text-base font-medium text-white block">
                  {ARTIST_DATA.contacts.productionPhone}
                </span>
              </div>
              <a
                href={`tel:${ARTIST_DATA.contacts.productionPhoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors pt-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ligar ou Iniciar Contato</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Email Channel */}
            <div className="p-6 rounded-2xl bg-black border border-graphite flex flex-col justify-between space-y-3">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-gold uppercase block mb-1">
                  E-mail Oficial
                </span>
                <span className="font-sans text-base font-medium text-white block truncate">
                  {ARTIST_DATA.contacts.productionEmail}
                </span>
              </div>
              <a
                href={`mailto:${ARTIST_DATA.contacts.productionEmail}`}
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors pt-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Enviar Mensagem</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Producer Instagram */}
            <div className="p-6 rounded-2xl bg-black border border-graphite flex flex-col justify-between space-y-3">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-gold uppercase block mb-1">
                  Instagram Produtora
                </span>
                <span className="font-sans text-base font-medium text-white block">
                  {ARTIST_DATA.contacts.productionInstagramHandle}
                </span>
              </div>
              <a
                href={ARTIST_DATA.contacts.productionInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors pt-2"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Acessar Instagram da Produtora</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Artist Instagram */}
            <div className="p-6 rounded-2xl bg-black border border-graphite flex flex-col justify-between space-y-3">
              <div>
                <span className="font-sans text-[10px] tracking-widest text-gold uppercase block mb-1">
                  Instagram Artista
                </span>
                <span className="font-sans text-base font-medium text-white block">
                  {ARTIST_DATA.contacts.artistInstagramHandle}
                </span>
              </div>
              <a
                href={ARTIST_DATA.contacts.artistInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors pt-2"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Acessar Perfil do Artista</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-graphite/60 text-center text-xs font-sans text-beige/50">
            Austin, Texas, USA • Duque de Caxias, RJ, Brasil
          </div>

        </div>
      </section>
    </div>
  );
}
