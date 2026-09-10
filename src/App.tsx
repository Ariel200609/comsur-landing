import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import ContactDirect from './components/sections/ContactDirect'; 
import Footer from "./components/layout/Footer";
import CarouselSection from "./components/sections/CarouselSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white relative">
        <HeroSection />
        <AboutSection />
        
        <CarouselSection />
        <ContactDirect />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  );
}

export default App;