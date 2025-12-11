import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Nomes exatos dos arquivos na pasta public (extensão .jpg)
// ADICIONADO: Barra '/' no início para garantir que o navegador busque na raiz (pasta public)
const localImages = [
  "/055a435b-d3eb-4679-b7e1-874b35e29851.jpg", // Barbeiros
  "/e7d4d440-a19f-4318-ab93-b8ddccb422a5.jpg", // Cadeiras
  "/45dd932f-7634-4531-b8be-b6d3b4bdf922.jpg", // Criança
  "/d0833a65-1d02-4ec1-abfa-9543e4d94b15.jpg", // Cliente
  "/e63b36ab-0f8c-4f51-b847-ab17585f9227.jpg", // Fade
  "/corte-lateral-detalhe.jpg"                 // NOVO: Lateral Detalhe
];

// Imagens de backup (Unsplash) caso o navegador não encontre os arquivos locais
const fallbackImages = [
  "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1634480491893-fa71c341b6bd?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=1470&auto=format&fit=crop"
];

const altTexts = [
  "Equipe de barbeiros da Reimons em atendimento",
  "Cadeiras de couro clássicas da barbearia",
  "Atendimento infantil com criança sorrindo",
  "Cliente relaxando durante o corte",
  "Detalhe de corte masculino com degradê (fade)",
  "Lateral do corte com acabamento perfeito e barba alinhada"
];

interface GalleryItemProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  label?: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, fallback, alt, className, label, onClick }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    console.warn(`Imagem não encontrada na pasta public: ${src}. Usando fallback.`);
    setImgSrc(fallback);
  };

  return (
    <div 
      className={`relative group overflow-hidden rounded-lg cursor-pointer ${className || ''}`}
      onClick={onClick}
    >
      <img 
        src={imgSrc} 
        alt={alt}
        onError={handleError}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
        {label ? (
          <span className="text-gold-500 font-display text-xl tracking-widest uppercase border-2 border-gold-500 px-6 py-2">
            {label}
          </span>
        ) : (
          <ZoomIn className="text-gold-500 w-10 h-10" />
        )}
      </div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-navy-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-white mb-2">GALERIA</h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
          <p className="text-gray-400 mt-4">Confira nosso trabalho e ambiente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {/* Imagem Principal - Barbeiros */}
          <GalleryItem 
            src={localImages[0]}
            fallback={fallbackImages[0]}
            alt={altTexts[0]}
            className="md:col-span-2 md:row-span-2"
            label="Nossa Equipe"
            onClick={() => setSelectedImage(localImages[0])}
          />

          {/* Imagens Secundárias */}
          {localImages.slice(1).map((img, idx) => (
            <GalleryItem
              key={idx}
              src={img}
              fallback={fallbackImages[idx + 1]}
              alt={altTexts[idx + 1]}
              className={idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gold-500 transition-colors z-[70]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <img 
            src={selectedImage} 
            alt="Zoom da galeria" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-black border border-white/10"
            onError={(e) => {
              // Se falhar no lightbox, tenta achar o fallback correspondente ou usa uma imagem padrão
              const target = e.target as HTMLImageElement;
              const index = localImages.indexOf(selectedImage);
              if (index !== -1) {
                target.src = fallbackImages[index];
              }
            }}
          />
        </div>
      )}
    </section>
  );
};