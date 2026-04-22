import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/aivora/animate.css";
import "@/styles/aivora/fontawesome.css";
import "@/styles/aivora/themify-icons.css";
import "@/styles/aivora/main.css";

import Header from "@/components/landing/aivora/Header/Header";
import HeroSection from "@/components/landing/aivora/hero/Hero";
import AboutSection from "@/components/landing/aivora/about/about";
import ServiceSection from "@/components/landing/aivora/ServiceSection/ServiceSection";
import FeatureSection from "@/components/landing/aivora/FeatureSection";
import Footer from "@/components/landing/aivora/footer/Footer";

export default function LandingPage() {
  return (
    <div className="ai-agency">
      <div className="body_wrap o-clip">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <FeatureSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
