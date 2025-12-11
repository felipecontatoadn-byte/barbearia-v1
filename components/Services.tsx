import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { name: "Corte Masculino", price: "R$ 40,00" },
  { name: "Corte Infantil", price: "R$ 35,00" },
  { name: "Barba (Toalha Quente)", price: "R$ 35,00" },
  { name: "Combo (Corte + Barba)", price: "R$ 70,00" },
  { name: "Sobrancelha", price: "R$ 15,00" },
  { name: "Acabamento / Pezinho", price: "R$ 15,00" },
  { name: "Pigmentação", price: "R$ 25,00" },
  { name: "Hidratação", price: "R$ 30,00" },
  { name: "Platinado", price: "R$ 120,00" },
  { name: "Selagem", price: "R$ 80,00" },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-navy-950 relative overflow-hidden border-t border-white/5">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-navy-600 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-navy-600 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-white mb-2">NOSSOS SERVIÇOS</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
          <p className="text-gray-400 mt-4">Qualidade e precisão em cada detalhe</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-end justify-between border-b border-navy-800 pb-4 group hover:border-gold-600/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-gold-600 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all"></div>
                <h3 className="text-lg md:text-xl text-gray-300 font-medium group-hover:text-white transition-colors uppercase tracking-wide">
                  {service.name}
                </h3>
              </div>
              <span className="text-gold-500 font-bold text-xl font-display">
                {service.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-8">
                * Valores sujeitos a alteração sem aviso prévio. Consulte para serviços especiais.
            </p>
            <a 
                href="https://wa.me/5519987807575?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20servi%C3%A7o." 
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-gold-600 text-black font-display font-bold uppercase tracking-wider py-4 px-10 hover:bg-gold-500 transition-all shadow-lg shadow-gold-600/20 transform hover:-translate-y-1"
            >
                Agendar Horário
            </a>
        </div>
      </div>
    </section>
  );
};