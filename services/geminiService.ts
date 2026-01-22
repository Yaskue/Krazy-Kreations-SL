import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

// Note: In a real app, never expose API keys on the client side without strict restrictions.
// We are using process.env.API_KEY as per instructions.

export const generatePartyPlan = async (prompt: string): Promise<AIResponse> => {
  // Use process.env.API_KEY directly as per guidelines. Assume it is valid.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `
    You are an expert Party Planner and Gift Curator for "Krazy Kreations".
    "Krazy Kreations" sells:
    - Custom chocolate wraps
    - Party packs
    - Glass items
    - DTF vinyl stickers (various designs/themes)
    - Gift packages for all occasions
    - Acrylic bookmarks with vinyl stickers
    
    Your goal is to suggest a creative Theme Name, a Color Palette, and a list of Suggested Products from the catalog above based on the user's input.
    Keep the tone fun, excited, and helpful.
    
    If the user asks for something unrelated to parties or gifts, politely steer them back to party planning.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            themeName: { type: Type.STRING, description: "A catchy name for the party theme or gift package" },
            colorPalette: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of 3-5 HEX color codes or color names"
            },
            suggestedItems: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of specific Krazy Kreation products tailored to this theme"
            },
            description: { type: Type.STRING, description: "A brief, enthusiastic description of why this theme fits the occasion" }
          },
          required: ["themeName", "colorPalette", "suggestedItems", "description"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIResponse;
    }
    throw new Error("No response from AI");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};