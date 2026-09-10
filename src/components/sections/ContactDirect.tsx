import { motion } from "framer-motion";

export default function ContactDirect() {
  return (
    <section id="contacto" className="py-24 px-6 lg:px-12 bg-white w-full relative border-t border-gray-100" >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Columna Izquierda: Información Directa con Línea Lateral */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-blue-600 pl-6 md:pl-10 py-2"
          >
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4 block">
              Soporte Especializado
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-6">
              Transformemos su <br/><span className="text-blue-600">infraestructura</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
              Ya sea para actualizar su red, implementar seguridad integral o integrar medios de pago, nuestros expertos están listos para asesorarlo.
            </p>

            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-800 font-semibold text-lg">WhatsApp Corporativo</h4>
                  <p className="text-slate-500 text-sm mt-1 mb-2">Asistencia ágil y directa.</p>
                  <a href="https://wa.me/5492914134444" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors flex items-center gap-1">+54 9 291 413-4444 &rarr;</a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-800 font-semibold text-lg">Correo Electrónico</h4>
                  <p className="text-slate-500 text-sm mt-1 mb-2">Para licitaciones y proyectos.</p>
                  <a href="mailto:info@comsur.com" className="text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors flex items-center gap-1">info@comsur.com &rarr;</a>
                </div>
              </div>
              
              {/* Sede Central */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-slate-800 font-semibold text-lg">Sede Central</h4>
                  <p className="text-slate-500 text-sm mt-1 mb-2">Atención presencial B2B.</p>
                  <a href="https://maps.google.com/?q=Berutti+544,+Bahia+Blanca" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors flex items-center gap-1">Berutti 544, Bahía Blanca &rarr;</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Mapa Interactivo de la Sede en Bahía Blanca */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-soft border border-gray-200 bg-gray-50 relative group"
          >
            <iframe
              title="Ubicación Sede Central COMSUR"
              src="https://maps.google.com/maps?q=Berutti+544,+Bahia+Blanca&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}