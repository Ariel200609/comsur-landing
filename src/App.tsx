import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesGrid from "./components/sections/ServicesGrid";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white relative">
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

export default App;