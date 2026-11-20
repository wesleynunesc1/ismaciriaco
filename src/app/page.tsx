import { EditorialHero } from "@/components/sections/EditorialHero";
import { BiographySection } from "@/components/sections/BiographySection";
import { BaixoBrazilAnnouncement } from "@/components/sections/BaixoBrazilAnnouncement";

export default function HomePage() {
  return (
    <>
      <EditorialHero />
      <BiographySection />
      <BaixoBrazilAnnouncement />
    </>
  );
}
