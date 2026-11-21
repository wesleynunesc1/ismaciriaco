import { EditorialHero } from "@/components/sections/EditorialHero";
import { MusicVideoShowcase } from "@/components/sections/MusicVideoShowcase";
import { BiographySection } from "@/components/sections/BiographySection";
import { BaixoBrazilAnnouncement } from "@/components/sections/BaixoBrazilAnnouncement";

export default function HomePage() {
  return (
    <>
      <EditorialHero />
      <MusicVideoShowcase />
      <BiographySection />
      <BaixoBrazilAnnouncement />
    </>
  );
}
