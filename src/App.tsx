import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      {/* Aquí iremos agregando el resto de las secciones */}
    </main>
  );
}

export default App;