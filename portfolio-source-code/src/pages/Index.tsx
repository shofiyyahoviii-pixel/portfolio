import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import InfoSection from "@/components/InfoSection";
import ToolsCarousel from "@/components/ToolsCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="mesh-bg" />
      <div className="mesh-blob mesh-blob--blue" />
      <div className="mesh-blob mesh-blob--orange" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ToolsCarousel />
        <ProjectsSection />
        <InfoSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
