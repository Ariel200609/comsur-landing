import { useState, useEffect } from "react";
import { Menu, X, Home, Users, Grid, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const navItems = [
  { title: "Inicio", href: "#inicio", icon: Home },
  { title: "Nosotros", href: "#nosotros", icon: Users },
  { title: "Servicios", href: "#servicios", icon: Grid },
  { title: "Contacto", href: "#contacto", icon: Phone },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href);
      const current = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(href);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* === LOGO COMSUR ACTUALIZADO === */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={(e) => handleNavClick(e as any, "#inicio")}
        >
          {/* Contenedor circular con la imagen del logo */}
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
            <img src="/logo.png" alt="Logo Comsur" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            COMSUR
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "group relative inline-flex items-center gap-2 px-1 py-2 font-semibold text-sm transition-colors text-slate-900 hover:text-blue-600",
                activeSection === item.href && "text-blue-600",
                "before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:scale-x-0 before:bg-blue-600 before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
                activeSection === item.href && "before:scale-x-100"
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.title}
            </a>
          ))}
        </nav>

        {/* Botón Menú Mobile */}
        <button
          className="md:hidden p-2 rounded-md transition-colors text-slate-900 hover:text-blue-600 hover:bg-blue-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-xl border-t border-slate-100 px-4 pb-6 pt-4 md:hidden rounded-b-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "flex items-center gap-4 text-lg font-semibold p-3 rounded-xl transition-colors",
                    activeSection === item.href ? "bg-blue-50 text-blue-600" : "text-slate-800 hover:bg-slate-50 hover:text-blue-600"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}