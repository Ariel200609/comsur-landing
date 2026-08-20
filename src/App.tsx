import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesGrid from "./components/sections/ServicesGrid";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import ContactDirect from './components/sections/ContactDirect'; 
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white relative">
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <ContactDirect />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

export default App;