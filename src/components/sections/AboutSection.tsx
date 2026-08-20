import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// TEMP: reemplazar por fotos reales de la empresa (oficina, equipo, instalaciones)
const images = [
  { src: "/hero.jpg", alt: "Oficinas de Comsur en Bahía Blanca" },
  { src: "/hero.jpg", alt: "Equipo técnico de Comsur" },
  { src: "/hero.jpg", alt: "Instalación de infraestructura de redes" },
  { src: "/hero.jpg", alt: "Monitoreo y data center" },
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Degradado inferior para legibilidad de los dots */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* Badge de años, dato real preservado del diseño anterior 
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm">
        <span className="block text-3xl font-extrabold text-blue-600 leading-none">+25</span>
        <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">Años de trayectoria</span>
      </div>*/}

      {/* Flechas, visibles on hover en desktop */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              26 años acompañando la transformación digital
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Desde el año 2000 diseñamos, implementamos y damos soporte a la infraestructura tecnológica de empresas de todo el país.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Trabajamos con las principales marcas del mercado para garantizar continuidad operativa: redes, telefonía, seguridad, sistemas y medios de pago, todo bajo un mismo equipo.
            </p>
            <p className="text-lg text-slate-800 leading-relaxed font-medium border-l-4 border-blue-600 pl-4">
              Miembros de CESSI y reconocidos en los Premios Sadosky, el galardón más importante de la industria del software en Argentina.
            </p>
          </motion.div>

          {/* Carrusel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <ImageCarousel />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}