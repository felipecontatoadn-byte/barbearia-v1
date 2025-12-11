import React, { useState } from 'react';
import { getStyleAdvice } from '../services/geminiService';
import { FaceShape, HairType } from '../types';
import { Button } from './Button';
import { Loader2 } from 'lucide-react';

export const AIAdvisor: React.FC = () => {
  const [faceShape, setFaceShape] = useState<string>(FaceShape.OVAL);
  const [hairType, setHairType] = useState<string>(HairType.STRAIGHT);
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    setLoading(true);
    setAdvice(null);
    try {
      const result = await getStyleAdvice(faceShape, hairType);
      setAdvice(result);
    } catch (e) {
      setAdvice("<p>Erro ao conectar com o consultor virtual.</p>");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-navy-950 px-4 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Consultor de Estilo Virtual
          </h2>
          <p className="text-gray-400">
            Não sabe qual corte escolher? Deixe nossa Inteligência Artificial sugerir o melhor estilo para você.
          </p>
        </div>

        <div className="bg-navy-900 p-6 md:p-8 rounded-xl border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gold-500 text-sm font-bold mb-2 uppercase">Formato do Rosto</label>
              <select 
                value={faceShape}
                onChange={(e) => setFaceShape(e.target.value)}
                className="w-full bg-navy-800 text-white border border-navy-700 rounded p-3 focus:border-gold-500 focus:outline-none transition-colors"
              >
                {Object.values(FaceShape).map((shape) => (
                  <option key={shape} value={shape}>{shape}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gold-500 text-sm font-bold mb-2 uppercase">Tipo de Cabelo</label>
              <select 
                value={hairType}
                onChange={(e) => setHairType(e.target.value)}
                className="w-full bg-navy-800 text-white border border-navy-700 rounded p-3 focus:border-gold-500 focus:outline-none transition-colors"
              >
                {Object.values(HairType).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center">
            <Button onClick={handleConsult} disabled={loading} className="w-full md:w-auto min-w-[200px]">
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" /> Analisando...
                </span>
              ) : (
                "Receber Consultoria"
              )}
            </Button>
          </div>

          {advice && (
            <div className="mt-8 p-6 bg-navy-800/50 rounded-lg border border-gold-600/30 animate-fade-in">
              <h3 className="text-gold-500 font-display text-xl mb-4 border-b border-white/10 pb-2">Sugestão do Especialista:</h3>
              <div 
                className="text-gray-300 space-y-2 prose prose-invert prose-strong:text-white"
                dangerouslySetInnerHTML={{ __html: advice }}
              />
              <p className="text-xs text-gray-500 mt-4 italic text-center">
                *Sugestão gerada por IA. Consulte nossos barbeiros presencialmente para a análise final.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};