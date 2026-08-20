import { motion, type Variants } from "framer-motion";
import { Network, Server, Code, Phone, ShieldCheck, CreditCard } from "lucide-react";

const services = [
  {
    title: "Redes e Infraestructura",
    description:
      "Diseño, instalación y mantenimiento de redes de datos corporativas, de punta a punta.",
    icon: Network,
    tags: ["Cableado Estructurado", "WiFi", "Fibra Óptica"],
  },
  {
    title: "Telecomunicaciones y Cobros",
    description:
      "Soluciones transaccionales omnicanal, con integración oficial de las principales plataformas de pago.",
    icon: CreditCard,
    tags: ["FISERV", "CLOVER", "Pagos QR"],
  },
  {
    title: "Servicios Técnicos y Seguridad",
    description:
      "Asistencia técnica continua e integración de sistemas de seguridad y monitoreo.",
    icon: ShieldCheck,
    tags: ["CCTV", "Control de Accesos", "Monitoreo ADT"],
  },
  {
    title: "Sistemas y Cloud Computing",
    description:
      "Arquitecturas de software y hardware on-premise y en la nube, a medida de cada operación.",
    icon: Server,
    tags: ["On-Premise", "Cloud", "Data Centers"],
  },
  {
    title: "Desarrollo de Soluciones",
    description:
      "Aplicaciones a medida, integradas con los fabricantes líderes del mercado.",
    icon: Code,
    tags: ["ERP", "CRM", "Apps a Medida"],
  },
  {
    title: "Telefonía IP",
    description:
      "Convergencia de voz, datos y servicios digitales, del escritorio a la nube.",
    icon: Phone,
    tags: ["Centrales IP", "VoIP", "Contact Center"],
  },
];

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-sm font-semibold text-blue-600 tracking-wide mb-3">
            Qué hacemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Soluciones Tecnológicas Integrales
          </h2>
          <p className="text-lg text-slate-600">
            Acompañamos su transformación digital con servicios diseñados para
            garantizar la continuidad y eficiencia operativa de su empresa.
          </p>
        </div>

        {/* Grilla uniforme, stacking en mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                style={
                  {
                    "--stack-offset": `calc(100px + ${index * 20}px)`,
                  } as React.CSSProperties
                }
                className="group sticky md:static top-[var(--stack-offset)] md:top-auto z-10 bg-white border border-slate-100 border-l-4 border-l-blue-600 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon
                      size={24}
                      strokeWidth={1.75}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}