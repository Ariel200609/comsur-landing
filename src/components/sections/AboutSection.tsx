import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 px-6 lg:px-12 bg-white w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna Izquierda: Textos e Historia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight mb-8 leading-tight">
              26 años acompañando la transformación digital
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Desde el año 2000 diseñamos, implementamos y damos soporte a la infraestructura tecnológica de empresas de todo el país.
              </p>
              <p>
                Trabajamos con las principales marcas del mercado para garantizar continuidad operativa: redes, telefonía, seguridad, sistemas y medios de pago, todo bajo un mismo equipo.
              </p>
              
              {/* Párrafo Destacado con la Línea Azul COMSUR */}
              <div className="border-l-4 border-blue-600 pl-6 py-2 mt-8 bg-blue-50/50 rounded-r-lg">
                <p className="font-semibold text-slate-800">
                  Miembros de CESSI y reconocidos en los Premios Sadosky, el galardón más importante de la industria del software en Argentina.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Imagen Institucional */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 group relative"
          >
            {/* Si tenés la foto real guardada en la carpeta public, reemplazá la ruta en el src */}
            <img 
              src="/hero.jpg" 
              alt="Equipo COMSUR trabajando en infraestructura" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}