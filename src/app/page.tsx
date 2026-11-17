import { HeroSection } from "@/components/sections/HeroSection";
import { ArtistIntroSection } from "@/components/sections/ArtistIntroSection";
import { MusicalGenresRibbon } from "@/components/sections/MusicalGenresRibbon";
import { DigitalVinylExperience } from "@/components/sections/DigitalVinylExperience";
import { LiveExperienceSection } from "@/components/sections/LiveExperienceSection";
import { MediaShowcaseSection } from "@/components/sections/MediaShowcaseSection";
import { ServicesPortfolioSection } from "@/components/sections/ServicesPortfolioSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { EpkPreviewSection } from "@/components/sections/EpkPreviewSection";
import { FinalBookingCtaSection } from "@/components/sections/FinalBookingCtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MusicalGenresRibbon />
      <ArtistIntroSection />
      <DigitalVinylExperience />
      <LiveExperienceSection />
      <MediaShowcaseSection />
      <ServicesPortfolioSection />
      <EducationSection />
      <CredibilitySection />
      <EpkPreviewSection />
      <FinalBookingCtaSection />
    </>
  );
}
