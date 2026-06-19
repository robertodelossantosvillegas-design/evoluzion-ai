import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import UseCasesByIndustry from "@/components/UseCasesByIndustry";
import BeforeAfter from "@/components/BeforeAfter";
import PricingHub from "@/components/PricingHub";
import HowWeWork from "@/components/HowWeWork";
import WhyEvoluzion from "@/components/WhyEvoluzion";
import ROICalculator from "@/components/ROICalculator";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientShell from "@/components/ClientShell";
import ScrollProgress from "@/components/ScrollProgress";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        {/* dark -> light */}
        <WaveDivider fill="#FFFFFF" />
        <Services />
        <UseCasesByIndustry />
        {/* light -> dark */}
        <WaveDivider fill="#0A0A0F" />
        <BeforeAfter />
        <PricingHub />
        <HowWeWork />
        <WhyEvoluzion />
        <ROICalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ClientShell />
    </>
  );
}
