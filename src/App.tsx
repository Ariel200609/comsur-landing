import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ContactDirect from './components/sections/ContactDirect'; 
import Footer from "./components/layout/Footer";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ContactDirect />
      <Footer />
    </main>
  );
}

export default App;