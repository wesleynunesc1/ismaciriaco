"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PillButton } from "@/components/ui/PillButton";
import { ARTIST_DATA } from "@/data/artist";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams ? searchParams.get("category") || "Performance Booking" : "Performance Booking";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: defaultCategory,
    country: "USA",
    eventDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const cat = searchParams ? searchParams.get("category") : null;
    if (cat) {
      setFormData((prev) => ({ ...prev, category: cat }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone =
      formData.country === "Brasil"
        ? ARTIST_DATA.contacts.brPhoneRaw.replace(/\D/g, "")
        : ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "");

    const text = `*SOLICITAÇÃO DE CONTRATAÇÃO / BOOKING - ISMA CIRIACO*
----------------------------------------
*Nome / Empresa:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Categoria de Interesse:* ${formData.category}
*País / Região:* ${formData.country}
*Data Prevista / Prazo:* ${formData.eventDate || "A definir"}
*Detalhes da Proposta:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-36 bg-black text-beige min-h-screen">
      {/* Page Hero */}
      <section className="relative py-20 border-b border-graphite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase block mb-4">
            [ ATENDIMENTO COMERCIAL & BOOKING ]
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tightest leading-[0.98] uppercase mb-8">
            CONTRATAR ISMA CIRIACO.
          </h1>
          <p className="text-lg md:text-xl text-beige/80 max-w-3xl leading-relaxed font-normal">
            Canais diretos para shows, festivais, gravações em estúdio, produção musical, masterclasses e parcerias comerciais nos Estados Unidos e Brasil.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Booking Details */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-3xl bg-surface border border-graphite shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Formulário de Atendimento Direto</h3>
              <p className="text-xs sm:text-sm text-beige/70 mb-8">
                Preencha os dados abaixo para direcionamento imediato ao canal de booking verificado.
              </p>

              {submitted && (
                <div className="p-4 rounded-xl bg-graphite/40 border border-gold text-white text-xs sm:text-sm flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Sua solicitação foi processada e direcionada ao WhatsApp oficial de Isma Ciriaco!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-beige/70 uppercase tracking-wider block mb-2">
                    Nome Completo ou Empresa / Festival *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva ou Austin Jazz Festival"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-graphite text-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-beige/70 uppercase tracking-wider block mb-2">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-graphite text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-beige/70 uppercase tracking-wider block mb-2">
                      WhatsApp / Telefone com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-graphite text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-beige/70 uppercase tracking-wider block mb-2">
                      Categoria de Interesse *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-graphite text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Performance Booking">Shows & Festivais (Performance)</option>
                      <option value="Studio Recording">Gravação em Estúdio (Bass Tracking)</option>
                      <option value="Music Production">Produção Musical & Arranjos</option>
                      <option value="Education">Aulas & Masterclasses (Baixo Brazil One)</option>
                      <option value="Brand Partnership">Parcerias & Endorsements</option>
                      <option value="EPK Request">Solicitação de EPK / Imprensa</option>
                      <option value="Other">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-beige/70 uppercase tracking-wider block mb-2">
                      Local do Evento / País *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-graphite text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="USA">Estados Unidos (Austin, TX & Demais Estados)</option>
                      <option value="Brasil">Brasil</option>
                      <option value="Outro Internacional">Outro País / Internacional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-beige/70 uppercase tracking-wider block mb-2">
                    Data Prevista / Prazo Desejado
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 15 de Outubro ou Flexível"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-graphite text-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-beige/70 uppercase tracking-wider block mb-2">
                    Detalhes do Projeto ou Evento *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva o formato (solo, trio, banda), localidade, duração estimada e detalhes da proposta."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface-elevated border border-graphite text-white text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <PillButton
                  variant="accent"
                  type="submit"
                  className="w-full justify-center !py-4.5"
                >
                  Enviar Solicitação via WhatsApp Oficial
                </PillButton>
              </form>
            </div>
          </div>

          {/* Right Column: Direct Verified Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-surface border border-graphite space-y-6">
              <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest block">
                CANAIS DIRETOS VERIFICADOS
              </span>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-surface-elevated border border-graphite">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      EUA & Internacional
                    </span>
                    <span className="text-[10px] text-beige/40">Austin, Texas</span>
                  </div>
                  <a
                    href={`https://wa.me/${ARTIST_DATA.contacts.usPhoneRaw.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-mono font-bold text-white hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{ARTIST_DATA.contacts.usPhone}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-surface-elevated border border-graphite">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      Brasil & América do Sul
                    </span>
                    <span className="text-[10px] text-beige/40">Minas Gerais / SP</span>
                  </div>
                  <a
                    href={`https://wa.me/${ARTIST_DATA.contacts.brPhoneRaw.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-mono font-bold text-white hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{ARTIST_DATA.contacts.brPhone}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-surface-elevated border border-graphite">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      Instagram Oficial
                    </span>
                    <span className="text-[10px] text-beige/40">Mídias & Lançamentos</span>
                  </div>
                  <a
                    href={ARTIST_DATA.contacts.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{ARTIST_DATA.contacts.instagramHandle}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-surface-elevated border border-graphite text-xs text-beige/60 leading-relaxed space-y-2">
              <span className="font-bold text-white uppercase block">
                Condições de Contratação:
              </span>
              <p>
                • Formações disponíveis em Solo, Trio e Banda Completa.
              </p>
              <p>
                • Riders técnicos e mapa de palco fornecidos imediatamente após confirmação da data.
              </p>
              <p>
                • Disponibilidade para viagens internacionais mediante consulta prévia de agenda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-beige">Carregando...</div>}>
      <ContactContent />
    </Suspense>
  );
}
