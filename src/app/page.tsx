import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/aivora/animate.css";
import "@/styles/aivora/fontawesome.css";
import "@/styles/aivora/themify-icons.css";
import "@/styles/aivora/main.css";

import { LandingHeader } from "@/components/landing/header";
import { LandingHero } from "@/components/landing/hero";
import { LandingAbout } from "@/components/landing/about";
import { LandingService } from "@/components/landing/service";
import FeatureSection from "@/components/landing/aivora/FeatureSection";
import { LandingFaq } from "@/components/landing/faq";
import { LandingCta } from "@/components/landing/cta";
import { LandingFooter } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="sf-page-bg min-h-dvh overflow-x-hidden">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingAbout />
        <LandingService />
        <FeatureSection />
        <LandingFaq />
        <LandingCta />
      </main>
      <LandingFooter />
    </div>
  );
}
