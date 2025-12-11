import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: "João Silva",
    rating: 5,
    comment: "Profissionais excelentes e um ambiente muito acolhedor. Sem dúvidas a melhor experiência que já tive na cidade."
  },
  {
    id: 2,
    name: "Carlos Souza",
    rating: 5,
    comment: "Atendimento de primeira, pontualidade e um corte impecável. Recomendo a todos!"
  },
  {
    id: 3,
    name: "Ana Pereira",
    rating: 5,
    comment: "Lugar excelente! Levo meu filho sempre e o atendimento é espetacular, com muita paciência e educação."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-navy-900 border-t border-navy-800">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-white mb-16">
          O QUE DIZEM NOSSOS CLIENTES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-navy-800 p-8 rounded-xl relative border border-white/5 hover:border-gold-600/30 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-4">
                <div className="text-6xl text-gold-600 opacity-20 font-serif">"</div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`${i < review.rating ? 'text-gold-500 fill-gold-500' : 'text-navy-600'}`} />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                {review.comment}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-black font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <span className="text-xs text-gold-500 uppercase tracking-wider">Cliente Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};