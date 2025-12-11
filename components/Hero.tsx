import React from 'react';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5519987807575?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Reimons.', '_blank');
  };

  const scrollToLocation = () => {
    const element = document.getElementById('location');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
          alt="Barbearia Background" 
          className="w-full h-full object-cover"
        />
        {/* Stronger Navy Gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo-inspired typography badge with rounded corners */}
        <div className="mb-8 inline-block animate-fade-in-up transform hover:scale-105 transition-transform duration-500">
           <div className="border-[5px] border-white px-8 py-6 md:px-14 md:py-10 rounded-[2rem] bg-navy-950/20 backdrop-blur-sm shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative">
              
              {/* Top Text */}
              <h2 className="text-white font-display tracking-[0.3em] uppercase font-bold text-lg md:text-2xl mb-1 drop-shadow-lg">
                BARBEARIA
              </h2>
              
              {/* Main Name */}
              <h1 className="font-display text-6xl md:text-9xl font-bold text-white leading-none tracking-normal mb-2 drop-shadow-2xl shadow-black uppercase">
                REIMONS
              </h1>

              {/* Bottom Text with decorative lines */}
              <div className="flex items-center justify-center w-full gap-3">
                 <div className="h-[2px] w-8 bg-white opacity-80"></div>
                 <h3 className="text-white font-display tracking-[0.2em] uppercase font-bold text-sm md:text-xl drop-shadow-lg">
                    DESDE 2017
                 </h3>
                 <div className="h-[2px] w-8 bg-white opacity-80"></div>
              </div>
           </div>
        </div>
        
        {/* Description Text (Services list removed) */}
        <div className="mb-10 animate-fade-in-up delay-150">
            <p className="text-gray-200 text-lg md:text-2xl font-light max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Experiência premium focada no seu estilo e bem-estar.
            </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleWhatsApp} className="flex items-center justify-center gap-2 text-lg px-8 py-4">
            <MessageCircle size={24} />
            Agendar Agora
          </Button>
          <Button onClick={scrollToLocation} variant="outline" className="text-lg px-8 py-4">
            Ver Localização
          </Button>
        </div>
      </div>
    </section>
  );
};