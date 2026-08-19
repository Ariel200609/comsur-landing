import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-20"
    >
      {/* Patrón de fondo sutil para dar aspecto tecnológico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
        >
          Infraestructura IT y <br className="hidden md:block" />
          <span className="text-blue-600">Consultoría Tecnológica Integral</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10"
        >
          Más de 25 años de trayectoria diseñando, implementando y manteniendo el ecosistema tecnológico de organizaciones exigentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Agendar Asesoría Técnica
          </a>
        </motion.div>
      </div>
    </section>
  );
}