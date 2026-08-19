import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Grilla asimétrica para mejor balance visual */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          
          {/* Columna 1: Marca y Trayectoria (Más espacio para el texto) */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-6">COMSUR</h3>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Referentes en consultoría tecnológica corporativa con más de 25 años de experiencia brindando soluciones integrales a medida.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos (Centrada) */}
          <div className="md:col-span-3 lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {['Inicio', 'Servicios', 'Sobre Nosotros', 'Contacto'].map((item, i) => (
                <li key={i}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-slate-700 group-hover:text-blue-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto Institucional (Alineación corregida) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-white font-semibold mb-6">Contacto Directo</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-500 shrink-0 mt-0.5" />
                {/* Salto de línea forzado para que quede prolijo */}
                <span className="text-sm font-medium text-slate-400 leading-relaxed">
                  Berutti 544, 8000 Bahía Blanca<br/>Buenos Aires - ARG
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-500 shrink-0" />
                <a href="mailto:info@comsur.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@comsur.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-500 shrink-0" />
                <a href="https://wa.me/5492914134444" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +54 9 291 413-4444
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra de Copyright (Separada a los extremos) */}
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} COMSUR Consultoría Tecnológica.
          </p>
          <p className="text-sm text-slate-600">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}