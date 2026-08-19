import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Animación para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Espacio para el Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-slate-800 rounded-md flex items-center justify-center">
            {/* Aquí luego pondremos su logo SVG real */}
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">COMSUR</span>
        </div>

        {/* Enlaces de navegación (Sin el botón de contacto) */}
        <nav className="hidden md:flex gap-8">
          {["Inicio", "Nosotros", "Servicios"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}