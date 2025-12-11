import React from 'react';
import { MapPin, MessageCircle, Instagram } from 'lucide-react';
import { Button } from './Button';

export const Location: React.FC = () => {
  return (
    <section id="location" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Info Column */}
        <div className="bg-navy-900 p-10 md:p-20 flex flex-col justify-center">
          <h2 className="font-display text-4xl font-bold text-white mb-12 text-center lg:text-left">
            ONDE ESTAMOS
          </h2>
          
          <div className="space-y-10">
            {/* Unified Contact Info Wrapper - Centers block on mobile, aligns left on desktop */}
            {/* w-fit ensures the container shrinks to content, keeping icons aligned when centered */}
            <div className="w-fit mx-auto lg:mx-0 flex flex-col gap-8">
              
              {/* Address & WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-600/10 rounded-lg flex-shrink-0">
                    <MapPin className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Endereço</h3>
                    <p className="text-gray-400">Av. Raposo Tavares, 632 - Paulicéia</p>
                    <p className="text-gray-400">Piracicaba - SP, 13401-542</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-600/10 rounded-lg flex-shrink-0">
                    <MessageCircle className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">WhatsApp</h3>
                    <p className="text-gray-400 text-lg">(19) 98780-7575</p>
                  </div>
                </div>
              </div>

              {/* Instagram - Now inside the same wrapper to maintain alignment */}
              <div className="border-t border-navy-800 pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-600/10 rounded-lg flex-shrink-0">
                    <Instagram className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/barbearia_reimons/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 text-lg hover:text-gold-500 transition-colors"
                    >
                      @barbearia_reimons
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Button container */}
            <div className="pt-6 text-center lg:text-left">
              <Button 
                onClick={() => window.open('https://wa.me/5519987807575', '_blank')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 mx-auto lg:mx-0"
              >
                <MessageCircle size={20} />
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Map Column */}
        <div className="h-[400px] lg:h-auto min-h-[400px] w-full bg-navy-800 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.015241014187!2d-47.67583842469959!3d-22.72791817937966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6317358e17e4d%3A0x513393b33036812!2sAv.%20Raposo%20Tavares%2C%20632%20-%20Paulic%C3%A9ia%2C%20Piracicaba%20-%20SP%2C%2013401-542!5e0!3m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) invert(10%) sepia(80%) hue-rotate(180deg) brightness(80%) contrast(120%)' }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Mapa Barbearia Reimons"
            className="absolute inset-0"
          ></iframe>
          
          {/* Custom Overlay for Map style unification to Navy */}
          <div className="absolute inset-0 bg-navy-950/20 pointer-events-none mix-blend-color"></div>
        </div>
      </div>
    </section>
  );
};