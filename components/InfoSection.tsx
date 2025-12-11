import React from 'react';
import { Clock, Scissors, Award, Coffee } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-navy-800 border border-white/5 hover:border-gold-600/50 transition-colors duration-300 rounded-lg group shadow-lg shadow-black/20">
    <div className="p-4 rounded-full bg-navy-900 mb-4 group-hover:bg-gold-600/20 transition-colors">
      <Icon className="w-8 h-8 text-gold-500" />
    </div>
    <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-navy-900 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm">Nossa História</h3>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Mais que um corte, <br/> uma experiência.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Sua Barbearia nasceu com um propósito simples: transformar cada corte em estilo e confiança. Desde o início, unimos tradição e modernidade para oferecer mais do que serviços de cabelo e barba — criamos experiências únicas.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Aqui, cada cliente faz parte da nossa trajetória. Porque não cuidamos apenas do visual, cuidamos da sua autoestima e bem-estar.
            </p>
            
            <div className="pt-4 border-l-4 border-gold-600 pl-6">
              <p className="text-white font-display text-xl italic">
                "O lugar onde o homem moderno encontra sua melhor versão."
              </p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 md:p-10 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-600/10 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-gold-500" />
              <h3 className="font-display text-2xl font-bold text-white">Horário de Funcionamento</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300 font-medium">Segunda a Sexta</span>
                <span className="text-gold-500 font-bold">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-gray-300 font-medium">Sábado</span>
                <span className="text-gold-500 font-bold">07:00 - 16:30</span>
              </div>
              <div className="flex justify-between items-center text-opacity-50">
                <span className="text-gray-500 font-medium">Domingo</span>
                <span className="text-gray-500">Fechado</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-2">Agende seu horário preferido</p>
              <div className="inline-block px-4 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-bold border border-green-800">
                ABERTO AGORA
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature 
            icon={Scissors} 
            title="Profissionais Experientes" 
            desc="Barbeiros qualificados e atualizados com as últimas tendências mundiais." 
          />
          <Feature 
            icon={Coffee} 
            title="Ambiente Premium" 
            desc="Na nossa barbearia, cada corte vem acompanhado de um bom café e um ambiente de primeira." 
          />
          <Feature 
            icon={Award} 
            title="Produtos de Elite" 
            desc="Utilizamos apenas as melhores marcas do mercado para tratar seu cabelo e barba." 
          />
        </div>
      </div>
    </section>
  );
};