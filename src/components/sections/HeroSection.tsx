import { Button } from "../ui/Button";
import { InfiniteSlider } from "../ui/InfiniteSlider";
import { ProgressiveBlur } from "../ui/ProgressiveBlur";
import { ChevronRight, Server, ShieldCheck, Wifi, Cloud, CreditCard, Cpu } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="overflow-x-hidden bg-white min-h-[100dvh] flex flex-col pt-16 md:pt-20">
      
      {/* Contenedor Principal */}
      <section className="flex-1 relative flex items-center justify-center py-6 lg:py-0">
        
        {/* === LOS TEXTOS (z-10 los mantiene arriba de la foto) === */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
            
            <h1 className="mt-2 max-w-2xl text-balance text-4xl sm:text-5xl md:text-6xl font-extrabold text-white lg:mt-8 tracking-tight drop-shadow-md">
              Infraestructura IT y <br className="hidden lg:block" /><span className="text-blue-400">Consultoría Integral</span>
            </h1>
            
            <p className="mt-4 sm:mt-6 max-w-2xl text-balance text-base sm:text-lg text-slate-200 drop-shadow-sm">
              Más de 25 años de trayectoria diseñando, implementando y manteniendo el ecosistema tecnológico de organizaciones exigentes. Tu aliado en la transformación digital.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="h-12 rounded-full pl-6 pr-4 text-base bg-blue-500 text-white hover:bg-blue-400 shadow-lg border border-blue-400">
                <a href="#contacto">
                  <span className="text-nowrap">Agendar Asesoría</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-6 text-base border border-slate-300 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md">
                <a href="#servicios">
                  <span className="text-nowrap">Ver Soluciones</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* === LA FOTO DE FONDO (z-0 la coloca en el fondo pero visible) === */}
        <div className="absolute inset-2 sm:inset-4 lg:inset-6 overflow-hidden rounded-3xl shadow-2xl pointer-events-none z-0 bg-slate-900">
          <img
            src="/hero.jpg"
            alt="Equipo de consultoría tecnológica COMSUR"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent"></div>
        </div>
      </section>

      {/* Slider Infinito */}
      <section className="bg-white py-4 md:py-6 shrink-0 z-20 relative border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="group relative m-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r border-slate-200 md:pr-6 mb-3 md:mb-0">
              <p className="text-center md:text-end text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Ecosistema<br className="hidden md:block" />Tecnológico
              </p>
            </div>
            
            <div className="relative py-2 md:w-[calc(100%-11rem)] w-full">
              <InfiniteSlider durationOnHover={20} duration={40} gap={40}>
                {[
                  { icon: Server, label: "Data Centers" },
                  { icon: ShieldCheck, label: "Seguridad ADT" },
                  { icon: Wifi, label: "Redes Corporativas" },
                  { icon: CreditCard, label: "Fiserv & Clover" },
                  { icon: Cloud, label: "Cloud Computing" },
                  { icon: Cpu, label: "Hardware On-Site" },
                ].map((Item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 text-slate-500 hover:text-blue-600 transition-all duration-300">
                    <Item.icon size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7" />
                    <span className="font-semibold text-sm sm:text-base whitespace-nowrap">{Item.label}</span>
                  </div>
                ))}
              </InfiniteSlider>

              <div className="bg-gradient-to-r from-white absolute inset-y-0 left-0 w-8 sm:w-16 z-10"></div>
              <div className="bg-gradient-to-l from-white absolute inset-y-0 right-0 w-8 sm:w-16 z-10"></div>
              <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 z-20" direction="left" blurIntensity={1} />
              <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 z-20" direction="right" blurIntensity={1} />
            </div>
          </div>
        </div>
      </section>
      
    </section>
  );
}