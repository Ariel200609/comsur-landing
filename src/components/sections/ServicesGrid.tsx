import { motion } from "framer-motion";
import { Network, Server, Code, Phone, ShieldCheck, CreditCard } from "lucide-react";

const services = [
  {
    title: "Redes e Infraestructura",
    description: "Diseño, instalación y mantenimiento de Cableado Estructurado, WiFi y Fibra Óptica para redes de datos corporativas.",
    icon: Network,
  },
  {
    title: "Telecomunicaciones y Cobros",
    description: "Soluciones transaccionales omnicanal. Partners oficiales para integración de plataformas FISERV y tecnología CLOVER.",
    icon: CreditCard,
  },
  {
    title: "Servicios Técnicos y Seguridad",
    description: "Asistencia técnica continua con los más altos estándares. Integración de soluciones de seguridad y monitoreo con tecnología ADT.",
    icon: ShieldCheck,
  },
  {
    title: "Sistemas y Cloud Computing",
    description: "Proveemos e implementamos arquitecturas de software y hardware on-premise y en la nube adaptadas a sus necesidades.",
    icon: Server,
  },
  {
    title: "Desarrollo de Soluciones",
    description: "Creamos aplicaciones a medida y las integramos con los fabricantes líderes del mercado para optimizar su gestión.",
    icon: Code,
  },
  {
    title: "Telefonía IP",
    description: "Convergencia tecnológica que unifica voz, datos y servicios digitales. Conectamos a su empresa desde el escritorio a la nube.",
    icon: Phone,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-lg text-slate-600">
            Acompañamos su transformación digital con servicios diseñados para garantizar la continuidad y eficiencia operativa de su empresa.
          </p>
        </div>

        {/* Grilla de Tarjetas con Efecto Stacking en Mobile */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                style={{
                  // Pasamos el cálculo dinámico como una variable CSS
                  // Cada tarjeta se frena un poco más abajo que la anterior (20px de separación)
                  '--stack-offset': `calc(100px + ${index * 20}px)`
                } as React.CSSProperties}
                className="group sticky md:static top-[var(--stack-offset)] md:top-auto z-10 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed bg-white">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}