import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white py-12 border-t border-navy-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="font-display text-2xl font-bold tracking-widest mb-2">
              BARBEARIA <span className="text-gold-500">PREMIUM</span>
            </h3>
            <p className="text-gray-500 text-sm">© 2025 Sua Barbearia. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};