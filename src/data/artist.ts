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
  role: "Brazilian Bass Player, Composer & Music Producer",
  experienceYears: "35+",
  currentBase: "Austin, Texas — USA",
  birthplace: "Duque de Caxias, Rio de Janeiro — Brasil",
  contacts: {
    productionName: "RIO GROOVE PRODUCTIONS",
    productionPhone: "+55 (35) 91022-7796",
    productionPhoneRaw: "+5535910227796",
    productionEmail: "riogrooveproduction@gmail.com",
    productionInstagram: "https://www.instagram.com/rio_groove_production/",
    productionInstagramHandle: "@rio_groove_production",
    artistInstagram: "https://www.instagram.com/ciriacoisma/",
    artistInstagramHandle: "@ciriacoisma",
    artistYouTube: "https://youtube.com/@ciriacoisma?si=YA7fQRPyVnQtG_mm",
    artistYouTubeHandle: "@ciriacoisma",
    artistTikTok: "https://www.tiktok.com/@ciriacoisma?_r=1&_t=ZP-9Bb6oPWOlVl",
    artistTikTokHandle: "@ciriacoisma",
    artistFacebook: "https://www.facebook.com/share/151TAot87Xm/?mibextid=wwXIfr",
    artistFacebookHandle: "Isma Ciriaco",
  },
  genres: [
    "Brazilian Jazz",
    "Samba",
    "Bossa Nova",
    "MPB",
    "Fusion",
    "Smooth Jazz",
  ],
  featuredAlbum: {
    title: "SAMBA FOR THE WORLD",
    type: "Álbum Autoral",
    label: "Edição Digital & Vinil",
    statusText: "Em breve em todas as plataformas digitais.",
    description: "Uma proposta instrumental autoral que celebra a diversidade musical brasileira e sua conexão com diferentes culturas, reunindo influências de samba jazz, bossa nova, smooth jazz, fusion e música contemporânea.",
  },
  courseAnnouncement: {
    title: "BAIXO BRAZIL",
    subtitle: "Três edições. Uma experiência musical brasileira.",
    editions: [
      "Baixo Brazil One",
      "Baixo Brazil Two",
      "Baixo Brazil Three",
    ],
    platformStatus: "Em breve na Hotmart.",
    description: "O projeto educacional Baixo Brazil será apresentado em três edições: Baixo Brazil One, Baixo Brazil Two e Baixo Brazil Three. Em breve, disponíveis na plataforma Hotmart.",
  },
  verifiedVenues: [
    { name: "Elephant Room", type: "Historic Jazz Underground", location: "Austin, TX", verified: true },
    { name: "Parker Jazz Club", type: "Premier Acoustic Jazz Lounge", location: "Austin, TX", verified: true },
    { name: "Monk's Jazz Club", type: "Intimate Listening Room & Live Streams", location: "Austin, TX", verified: true },
    { name: "Sahara Lounge", type: "World Music & Live Stage", location: "Austin, TX", verified: true },
    { name: "The Continental Club", type: "Iconic Live Music Venue", location: "Austin, TX", verified: true },
    { name: "Jupiter Supper Club", type: "Fine Dining & Live Jazz", location: "Austin, TX", verified: true },
    { name: "SXSW Festival", type: "International Music Festival", location: "Austin, TX", verified: true },
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
};
