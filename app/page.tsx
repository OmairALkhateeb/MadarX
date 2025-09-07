import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { CountriesSection } from "@/components/countries-section";
import { AppDownloadSection } from "@/components/app-download-section";
import { Footer } from "@/components/footer";
import { Cairo } from "next/font/google";
import ReviewsSection from "@/components/reviews-section";
import { JoinUsSection } from "@/components/joinus-section";
import HowToStartSection from "@/components/howtostart";

export const cairo = Cairo({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"], 
});

export default function HomePage() {
  return (
    <div className={`${cairo.className} min-h-screen`}>
      <Header />
      
      {/* IDs added to match navbar targets */}
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <FeaturesSection />
      </div>

      <div>
        <CountriesSection />
      </div>
      <div id="join">
        <JoinUsSection />
      </div>

      <div id="downloads">
        <AppDownloadSection />
      </div>

      {/* New How To Start section */}
      <div id="how-to-start">
        <HowToStartSection />
      </div>

      <div>
        <ReviewsSection />
      </div>

      <Footer />
    </div>
  );
}
