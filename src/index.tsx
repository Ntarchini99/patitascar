import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HeroSection from "./components/HeroSection/HeroSection";
import WhoWeAreSection from "./components/WhoWeAreSection/WhoWeAreSection";
import FeaturesSection from "./components/FeatureSection/FeatureSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import GallerySection from "./components/GallerySection/GallerySection";
import ContactSection from "./components/ContactSection/ContactSection";



createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HeroSection />
    <WhoWeAreSection />
    <FeaturesSection />
    <ServicesSection />
    <GallerySection />
    <ContactSection />       
  </StrictMode>,
);
