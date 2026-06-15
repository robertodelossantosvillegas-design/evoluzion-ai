import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import UseCasesByIndustry from "@/components/UseCasesByIndustry";
import BeforeAfter from "@/components/BeforeAfter";
import WebDevelopment from "@/components/WebDevelopment";
import DigitalCards from "@/components/DigitalCards";
import AutomationPackages from "@/components/AutomationPackages";
import HowWeWork from "@/components/HowWeWork";
import WhyEvoluzion from "@/components/WhyEvoluzion";
import ROICalculator from "@/components/ROICalculator";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientShell from "@/components/ClientShell";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <UseCasesByIndustry />
        <BeforeAfter />
        <section id="automatizacion">
          <WebDevelopment />
        </section>
        <DigitalCards />
        <AutomationPackages />
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
