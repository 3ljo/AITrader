import { LandingHeader } from "@/components/landing/header";
import { LandingHero } from "@/components/landing/hero";
import { LandingAbout } from "@/components/landing/about";
import { LandingService } from "@/components/landing/service";
import { LandingWhyUs } from "@/components/landing/why-us";
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
        <LandingWhyUs />
        <LandingFaq />
        <LandingCta />
      </main>
      <LandingFooter />
    </div>
  );
}
