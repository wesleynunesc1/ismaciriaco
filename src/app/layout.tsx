import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isma Ciriaco | Brazilian Jazz Bassist & Music Producer",
  description:
    "Site oficial de Isma Ciriaco. Contrabaixista brasileiro, produtor musical e educador radicado em Austin, Texas. Brazilian Jazz, Samba, Bossa Nova, Fusion e Baixo Brazil One.",
  keywords: [
    "Isma Ciriaco",
    "Brazilian Jazz Bassist",
    "Contrabaixista Brasileiro",
    "Austin Texas Jazz",
    "Samba for the World",
    "Baixo Brazil One",
    "Music Producer",
    "DR Strings",
    "Aguilar Amplification",
  ],
  openGraph: {
    title: "Isma Ciriaco | Brazilian Jazz Bassist & Music Producer",
    description:
      "Mais de 35 anos conectando culturas através do contrabaixo, do jazz e da música brasileira. Shows, gravações em estúdio e educação musical.",
    siteName: "Isma Ciriaco Official",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} dark`}>
      <body className="bg-raven text-misty antialiased selection:bg-crimson-vivid selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
