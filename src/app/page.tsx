import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import ClientLogos from "@/components/home/ClientLogos";
import PrimaryCTA from "@/components/home/PrimaryCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials */}
      <Testimonials />

      {/* Primary CTA */}
      <PrimaryCTA />

    </div>
  );
}
