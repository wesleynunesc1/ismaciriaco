import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Isma Ciriaco | Brazilian Bass Player, Composer & Producer",
  description:
    "Site oficial de Isma Ciriaco. Contrabaixista brasileiro, compositor, produtor musical e educador radicado em Austin, Texas. Conectando as raízes brasileiras à sofisticação do jazz contemporâneo.",
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
    title: "Isma Ciriaco | Official Artist Website",
    description:
      "A música brasileira como identidade. O mundo como palco. Mais de 35 anos de trajetória musical de Isma Ciriaco.",
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
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable} dark`}>
      <body className="bg-black text-beige antialiased selection:bg-gold selection:text-black">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
