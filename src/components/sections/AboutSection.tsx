import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto asimétrico - Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Soporte Técnico Total
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Comsur es un referente en consultoría tecnológica con más de 25 años de experiencia.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Nuestra misión es proporcionarte las soluciones que tu empresa necesita para integrar la tecnología en sus procesos y mantenerse a la vanguardia.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium text-slate-800 border-l-4 border-blue-600 pl-4">
              Nuestro equipo de expertos está listo para acompañarte en cada paso del camino hacia tu transformación digital.
            </p>
          </motion.div>

          {/* Elemento Visual - Derecha (Cero fotos de stock) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px] bg-white rounded-2xl overflow-hidden shadow-lg flex items-center justify-center border border-slate-100"
          >
            {/* Patrón abstracto para dar look corporativo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-100">
              <span className="block text-7xl font-extrabold text-blue-600 mb-2">+25</span>
              <span className="text-xl font-semibold text-slate-700 uppercase tracking-wider">Años de <br/> Experiencia</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}