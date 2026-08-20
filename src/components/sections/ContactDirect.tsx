import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils'; 

// --- SUB-COMPONENTE CON LÓGICA 3D ---
interface TiltCardProps {
  children: React.ReactNode;
  href: string;
  delay?: number;
}

function TiltCard({ children, href, delay = 0 }: TiltCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -6;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 6;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className="h-full"
    >
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          // OPTIMIZACIÓN RESPONSIVE: p-6 en móvil, p-8 en tablet, p-10 en escritorio
          "group relative flex flex-col h-full p-6 sm:p-8 lg:p-10 block w-full",
          "bg-white rounded-3xl border border-slate-200 shadow-sm",
          "hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200"
        )}
        style={{
          ...tiltStyle,
          transformStyle: "preserve-3d", 
        }}
      >
        <div 
          style={{ transform: "translateZ(40px)" }} 
          className="flex flex-col h-full pointer-events-none"
        >
          {children}
        </div>
      </a>
    </motion.div>
  );
}

// --- COMPONENTE PRINCIPAL ---
export default function ContactDirect() {
  return (
    // OPTIMIZACIÓN RESPONSIVE: py-16 en móvil, py-24 en escritorio
    <section className="py-16 md:py-24 bg-slate-50 scroll-mt-24" id="contacto">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Contacto Directo
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos a disposición para brindar soluciones tecnológicas a la medida de su empresa. Comuníquese directamente con nuestro equipo.
          </p>
        </div>

        {/* OPTIMIZACIÓN RESPONSIVE: grid-cols-1 apila en móvil. lg:grid-cols-3 pone las 3 al lado en PC. */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 md:gap-8">
          
          {/* Tarjeta WhatsApp */}
          <TiltCard href="https://wa.me/5492914134444" delay={0}>
            <div className="flex-1">
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-600 mb-6 md:mb-8 group-hover:bg-blue-100 transition-colors duration-300">
                <MessageCircle className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">Vía WhatsApp</h3>
              <p className="mt-3 md:mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                Asistencia ágil y directa. Escríbanos para consultas operativas o coordinación de servicios técnicos.
              </p>
            </div>
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100">
              <p className="text-lg md:text-xl font-semibold text-slate-900 mb-3 md:mb-4 tracking-tight">
                +54 9 291 413-4444
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm md:text-base">
                Iniciar chat <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </TiltCard>

          {/* Tarjeta Email */}
          <TiltCard href="mailto:info@comsur.com" delay={0.1}>
            <div className="flex-1">
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-600 mb-6 md:mb-8 group-hover:bg-blue-100 transition-colors duration-300">
                <Mail className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">Vía Correo</h3>
              <p className="mt-3 md:mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                Canal formal para propuestas comerciales, licitaciones o el envío de documentación detallada.
              </p>
            </div>
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100">
              <p className="text-lg md:text-xl font-semibold text-slate-900 mb-3 md:mb-4 tracking-tight">
                info@comsur.com
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm md:text-base">
                Enviar correo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </TiltCard>

          {/* Tarjeta Ubicación */}
          <TiltCard href="https://maps.google.com/?q=Berutti+544,+8000+Bahia+Blanca,+Buenos+Aires,+Argentina" delay={0.2}>
            <div className="flex-1">
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-600 mb-6 md:mb-8 group-hover:bg-blue-100 transition-colors duration-300">
                <MapPin className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">Sede Central</h3>
              <p className="mt-3 md:mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                Visite nuestras oficinas para asesoramiento presencial y reuniones de planificación estratégica.
              </p>
            </div>
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-100">
              <p className="text-lg md:text-xl font-semibold text-slate-900 mb-3 md:mb-4 tracking-tight">
                Berutti 544
              </p>
              <div className="flex items-center text-blue-600 font-medium text-sm md:text-base">
                Ver en mapa <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}