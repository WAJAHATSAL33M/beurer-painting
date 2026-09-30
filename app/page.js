import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import QuoteCTA from "@/components/QuoteCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <WorkSection />
        <ProcessSection />
        <ServiceAreaSection />
        <WhyChooseSection />
        <QuoteCTA />
      </main>
      <Footer />
    </>
  );
}
