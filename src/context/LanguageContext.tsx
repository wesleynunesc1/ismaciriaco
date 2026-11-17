"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ptBR, enUS } from "@/i18n/translations";

type Locale = "pt" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: typeof ptBR;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "pt",
  setLocale: () => {},
  t: ptBR,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("isma_lang") as Locale | null;
    if (saved === "pt" || saved === "en") {
      setLocale(saved);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("isma_lang", newLocale);
  };

  const t = locale === "en" ? enUS : ptBR;

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
