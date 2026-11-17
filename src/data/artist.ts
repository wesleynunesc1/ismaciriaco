export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  targetAudience: string;
  deliverables: string[];
  benefits: string;
  inquiryCategory: string;
}

export interface PerformanceVenue {
  name: string;
  type: string;
  location: string;
  verified: boolean;
}

export interface Endorsement {
  brand: string;
  category: string;
  status: string;
  description: string;
}

export const ARTIST_DATA = {
  name: "ISMA CIRIACO",
  role: "Brazilian Jazz Bassist & Music Producer",
  experienceYears: "35+",
  currentBase: "Austin, Texas — USA",
  origin: "Cambuquira, Minas Gerais — Brasil",
  usMovedYear: "2015", // ~11 years ago
  contacts: {
    usPhone: "+1 (737) 262-7871",
    usPhoneRaw: "+17372627871",
    brPhone: "+55 (35) 91022-7796",
    brPhoneRaw: "+5535910227796",
    instagram: "https://www.instagram.com/ciriacoisma",
    instagramHandle: "@ciriacoisma",
  },
  genres: [
    "Brazilian Jazz",
    "Samba",
    "Bossa Nova",
    "MPB",
    "Fusion",
    "Smooth Jazz",
  ],
  formations: [
    { title: "Solo Bass", desc: "Apresentações intimistas focadas na expressividade melódica do contrabaixo brasileiro." },
    { title: "Trio Instrumental", desc: "Formação dinâmica ideal para clubes de jazz, coquetéis sofisticados e eventos corporativos." },
    { title: "Full Band", desc: "Show completo de alta energia para festivais internacionais, teatros e palcos principais." },
  ],
  featuredAlbum: {
    title: "Samba for the World",
    type: "Álbum Autoral",
    label: "Independent / Digital Vinyl Edition",
    description: "Uma imersão sonora onde as raízes sincopadas do samba brasileiro encontram a sofisticação harmônica do jazz internacional contemporâneo.",
    tracks: [
      { number: "01", title: "Samba for the World", duration: "5:24" },
      { number: "02", title: "Austin Grooves", duration: "4:48" },
      { number: "03", title: "Minas & Fronteiras", duration: "6:12" },
      { number: "04", title: "Noite no Elephant", duration: "5:05" },
      { number: "05", title: "Baixo Brasil Theme", duration: "4:32" },
    ],
  },
  educationProject: {
    name: "Baixo Brazil One",
    tagline: "O Método e Linguagem do Contrabaixo Brasileiro",
    description: "Programa educacional desenvolvido por Isma Ciriaco para contrabaixistas de todos os níveis que buscam dominar os ritmos brasileiros, condução de samba, bossa nova e improvisação no jazz.",
    modalities: [
      "Aulas Presenciais (Austin, TX)",
      "Mentoria Online Internacional",
      "Workshops & Masterclasses",
      "Estudos Avançados de Harmonia e Grooves Brasileiros",
    ],
  },
  verifiedVenues: [
    { name: "Elephant Room", type: "Historic Jazz Underground", location: "Austin, TX", verified: true },
    { name: "Parker Jazz Club", type: "Premier Acoustic Jazz Lounge", location: "Austin, TX", verified: true },
    { name: "Monk's Jazz Club", type: "Intimate Listening Room & Live Streams", location: "Austin, TX", verified: true },
    { name: "Jupiter Supper Club", type: "Fine Dining & Live Music", location: "Austin, TX", verified: true },
    { name: "The Continental Gallery", type: "Iconic Live Music Venue", location: "Austin, TX", verified: true },
  ],
  endorsements: [
    {
      brand: "DR Strings",
      category: "Handmade Strings",
      status: "Official Endorser",
      description: "Precisão, timbre quente e durabilidade essencial para o fraseado e pegada do contrabaixo jazz.",
    },
    {
      brand: "Aguilar Amplification",
      category: "Bass Amplification & Pickups (NYC)",
      status: "Official Endorser",
      description: "Fidelidade acústica impecável, definição harmônica de graves e presença de palco em turnês mundiais.",
    },
  ],
  services: [
    {
      id: "live-performances",
      number: "01",
      title: "Shows & Apresentações ao Vivo",
      tagline: "Do intimismo de um jazz club ao impacto de grandes festivais internacionais.",
      targetAudience: "Festivais, casas de jazz, teatros, eventos corporativos premium e comemorações privadas exclusivas.",
      deliverables: ["Formações flexíveis: Solo, Trio ou Banda Completa", "Repertório sob medida (Brazilian Jazz, Samba, Bossa Nova, Fusion)", "Pontualidade, riders técnicos profissionais e presença de palco magnética"],
      benefits: "Experiência artística autêntica e inesquecível que eleva o prestígio de qualquer programação.",
      inquiryCategory: "Performance Booking",
    },
    {
      id: "studio-sessions",
      number: "02",
      title: "Gravações em Estúdio (Bass Tracking)",
      tagline: "Gravação de contrabaixo acústico ou elétrico com precisão rítmica e timbre de classe mundial.",
      targetAudience: "Produtores musicais, artistas em processo de gravação, estúdios e gravadoras internacionais.",
      deliverables: ["Pistas de baixo gravadas remotamente em alta fidelidade (HQ WAV)", "Criação de linhas de baixo memoráveis, grooves orgânicos e solos expressivos", "Entrega rápida com opções de timbres via DI e amplificação vintage Aguilar"],
      benefits: "Elevação instantânea da cozinha rítmica da sua faixa com a pegada legítima da música brasileira.",
      inquiryCategory: "Studio Recording",
    },
    {
      id: "music-production",
      number: "03",
      title: "Produção Musical & Arranjos",
      tagline: "Da concepção harmônica à masterização com visão artística global.",
      targetAudience: "Compositores, cantores e instrumentistas que desejam lapidar seus projetos autorais.",
      deliverables: ["Arranjos instrumentais refinados", "Direção de sessão e escolha de timbres", "Mixagem e produção executiva de singles e EPs"],
      benefits: "Tratamento sonoro maduro, mesclando tradição orgânica e técnicas contemporâneas de estúdio.",
      inquiryCategory: "Music Production",
    },
    {
      id: "bass-education",
      number: "04",
      title: "Educação Musical & Baixo Brazil One",
      tagline: "Formação técnica, harmônica e rítmica direta com quem vive a música na prática.",
      targetAudience: "Contrabaixistas iniciantes, intermediários e avançados do Brasil e do exterior.",
      deliverables: ["Aulas particulares online e presenciais", "Metodologia Baixo Brazil One focada no fraseado brasileiro", "Material de apoio em partitura, tablaturas e playalongs"],
      benefits: "Evolução técnica acelerada e entendimento profundo do papel do contrabaixo no jazz e na música brasileira.",
      inquiryCategory: "Education",
    },
    {
      id: "workshops-masterclasses",
      number: "05",
      title: "Workshops & Masterclasses",
      tagline: "Imersões coletivas para universidades, conservatórios e escolas de música.",
      targetAudience: "Instituições de ensino musical, festivais e grupos de estudo rítmico.",
      deliverables: ["Palestras práticas sobre a evolução do contrabaixo no Brasil", "Laboratório de ritmo e improvisação coletiva", "Sessões de perguntas e respostas com demonstração ao vivo"],
      benefits: "Conteúdo didático de alto impacto com a vivência real de mais de 35 anos de carreira internacional.",
      inquiryCategory: "Education",
    },
    {
      id: "brand-partnerships",
      number: "06",
      title: "Parcerias & Brand Endorsements",
      tagline: "Conexão com marcas que compartilham a obsessão por excelência sonora.",
      targetAudience: "Fabricantes de contrabaixos, cordas, pedais, amplificadores e áudio profissional.",
      deliverables: ["Demonstrações de alta qualidade em palcos e estúdio", "Conteúdo audiovisual demonstrando nuances dos equipamentos", "Representação da marca em concertos nos EUA e turnês"],
      benefits: "Posicionamento autêntico diante de uma audiência exigente de músicos e audiófilos.",
      inquiryCategory: "Brand Partnership",
    },
  ],
  mediaHighlights: [
    {
      title: "Live at Monk's Jazz Club",
      location: "Austin, Texas",
      type: "Concert Session",
      duration: "Live Performance",
      description: "Apresentação instrumental transmitida ao vivo destacando a expressividade rítmica e solos no contrabaixo elétrico.",
    },
    {
      title: "Elephant Room Sessions",
      location: "Downtown Austin",
      type: "Late Night Jazz",
      duration: "Club Set",
      description: "A atmosfera icônica do subsolo de jazz mais lendário do Texas com grooves de samba-jazz e bossa fusion.",
    },
    {
      title: "Baixo Brazil One — Masterclass Excerpt",
      location: "Studio Austin",
      type: "Masterclass",
      duration: "Educational",
      description: "Desconstruindo a levada de samba tradicional no contrabaixo e sua aplicação na harmonia moderna do jazz.",
    },
  ],
};
