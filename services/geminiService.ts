import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const apiKey = process.env.API_KEY || ''; 
// Note: In a real production app, handle missing keys gracefully. 
// For this demo, we assume the environment injects it.

const ai = new GoogleGenAI({ apiKey });

export const getStyleAdvice = async (faceShape: string, hairType: string): Promise<string> => {
  try {
    const prompt = `
      Você é um barbeiro especialista de alto nível chamado "Consultor Reimons".
      Um cliente chegou com as seguintes características:
      - Formato do rosto: ${faceShape}
      - Tipo de cabelo: ${hairType}

      Por favor, sugira 2 opções de cortes de cabelo ideais para ele.
      Para cada opção, dê o nome do corte e uma explicação muito breve (1 frase) do porquê combina.
      
      Responda em formato HTML simples (usando tags <p>, <strong>, <ul>, <li>) sem markdown, para ser inserido diretamente em um componente React.
      Mantenha o tom masculino, profissional e direto.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || '<p>Desculpe, não consegui gerar uma recomendação no momento.</p>';
  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return '<p>O sistema de consultoria está temporariamente indisponível. Fale com nossos barbeiros presencialmente!</p>';
  }
};