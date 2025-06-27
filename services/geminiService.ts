
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available from environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: apiKey! });

export const evaluateStrategyAnswer = async (answer: string): Promise<string> => {
  if (!apiKey) {
    return "El servicio de evaluación no está disponible en este momento. Por favor, intente más tarde.";
  }

  const prompt = `
    Eres un experto en criptomonedas y un profesor amigable. Un estudiante respondió a la siguiente pregunta:
    "Si quisieras crear un sistema de votación online que nadie pueda censurar, ¿usarías la tecnología de Bitcoin o la de Ethereum? ¿Por qué?"

    La respuesta del estudiante fue: "${answer}"

    Evalúa la respuesta del estudiante. El razonamiento ideal es que Ethereum es mejor debido a los contratos inteligentes (dinero programable) que permiten construir aplicaciones complejas como sistemas de votación, mientras que Bitcoin es más como oro digital (reserva de valor) con capacidades de scripting limitadas.

    Proporciona un feedback breve (2-3 frases), constructivo y alentador en español. Comienza con "¡Buen análisis!" si la respuesta es correcta, o "¡Interesante perspectiva!" si no lo es tanto. No seas demasiado técnico.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-04-17',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error evaluating answer with Gemini API:", error);
    return "Hubo un error al procesar tu respuesta. ¡Pero buen intento! Ethereum es generalmente la respuesta preferida por sus capacidades de contratos inteligentes.";
  }
};
